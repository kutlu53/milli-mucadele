/* Mini oyun: "İstiklal Yolu"
   Kuşbakışı kağnı yolculuğu. Yol boyunca olaylar çıkar (buzlu yokuş, donmuş dere, yol ayrımı, mola,
   kar fırtınası) ve oyuncu her birinde bir karar verir. Üç gösterge vardır: cephane kuruluğu,
   kağnı sağlamlığı ve sıcaklık. Yıldız yalnızca cephanenin kuru ulaşmasına bağlıdır.
   Hikâyenin sonu tarihsel olduğu için değişmez: son sahnede renkler solar, Nuri olanı anlatır ve
   ekrana kapanış cümlesi gelir. İnsan bedeni gösterilmez. Oyuncu bu sonu "kaybetme" olarak yaşamaz.
   Olaylar ve seçenekler heroes.json dosyasından gelir (mini_oyun.olaylar).
   Ortak arayüz: start(container, heroData) → Promise<{completed, durationSec, details}> */
(function () {
  'use strict';
  var IP = window.IP, TAU = Math.PI * 2;

  // Oyun ayarları (pilot testten sonra buradan değiştirilebilir).
  var ARALIK = 1500;        // iki olay arası yol (1600 × 900 sanal ölçüde)
  var HIZ = 300;            // kağnının hızı (birim/sn)
  var YOLDA_KAR = 4;        // her yol parçasında karın cephaneye verdiği zarar (sıkı örtülüyse yarısı)
  var YOLDA_SOGUK = 5;      // her yol parçasında azalan sıcaklık
  var KURU_ESIGI = 60;      // cephane bu değerin üstünde ulaşırsa "kuru" sayılır
  var ADLAR = { kuruluk: 'Cephane kuruluğu', saglamlik: 'Kağnı sağlamlığı', sicaklik: 'Sıcaklık' };

  IP.oyunlar.istiklalyolu = {
    start: function (container, heroData) {
      return new Promise(function (coz) {
        var mo = heroData.mini_oyun || {}, olaylar = mo.olaylar || [], N = olaylar.length, son = mo.final || {};
        var asama = 'giris', no = 0, zaman = 0, gecen = 0, kagniX = 640, siki = false, solma = 0, sonAdim = -1, sonZaman = 0;
        var deger = { kuruluk: 100, saglamlik: 100, sicaklik: 100 }, gorunen = { kuruluk: 100, saglamlik: 100, sicaklik: 100 };
        var secimler = [], karlar = [], rs = IP.tohumluRastgele(88), i;
        for (i = 0; i < 220; i++) karlar.push([rs() * 1700, rs() * 900, 60 + rs() * 120, 1.5 + rs() * 3]);
        function olayX(n) { return 900 + n * ARALIK; }

        /* ----- Ekran düzeni ----- */
        container.classList.add('oyun');
        var ust = IP.el('div', 'oyun-ust');
        ust.appendChild(IP.el('h2', null, mo.ad || 'Mini oyun'));
        var gosterge = IP.el('div', 'oyun-gosterge');
        var cubuklar = {};
        Object.keys(ADLAR).forEach(function (a) {
          var kutu = IP.el('span', 'gosterge olcer'), dolgu = IP.el('i');
          kutu.appendChild(IP.el('b', null, ADLAR[a])); var ray = IP.el('em'); ray.appendChild(dolgu); kutu.appendChild(ray);
          gosterge.appendChild(kutu); cubuklar[a] = { kutu: kutu, dolgu: dolgu };
        });
        ust.appendChild(gosterge);
        var alan = IP.el('div', 'oyun-alan');
        var tuval = IP.el('canvas');
        alan.appendChild(tuval);
        var tepsi = IP.el('div', 'kart-tepsi parola');
        container.appendChild(ust); container.appendChild(alan); container.appendChild(tepsi);
        var c = tuval.getContext('2d'), W = 0, H = 0, dpr = 1, olcek = 1, kayX = 0, kayY = 0, GW = 1600;

        function boyutla() {
          dpr = Math.min(window.devicePixelRatio || 1, 2);
          W = alan.clientWidth; H = alan.clientHeight;
          tuval.width = Math.max(2, Math.round(W * dpr)); tuval.height = Math.max(2, Math.round(H * dpr));
          // Yolun çevresindeki 640 birimlik şerit ekranın yüksekliğini doldurur; genişlik ekrana göre değişir.
          olcek = Math.max(H / 640, W / 2600); if (W / olcek < 800) olcek = W / 800;
          GW = W / olcek; kayX = 0; kayY = (H - 640 * olcek) / 2 - 180 * olcek;
        }
        boyutla();
        window.addEventListener('resize', boyutla);

        function kaplama(baslik, satirlar, dugmeler) {
          var k = IP.el('div', 'oyun-kaplama'), kutu = IP.el('div', 'kagit oyun-kutu');
          kutu.appendChild(IP.el('h2', null, baslik));
          satirlar.forEach(function (st) { if (st) kutu.appendChild(IP.el('p', null, st)); });
          var sira = IP.el('div', 'dugme-sira');
          dugmeler.forEach(function (d) { sira.appendChild(IP.dugme(d[0], d[2], function () { k.remove(); d[1](); })); });
          kutu.appendChild(sira); k.appendChild(kutu); alan.appendChild(k);
        }

        function degistir(etki) {
          Object.keys(etki || {}).forEach(function (a) {
            if (deger[a] == null) return;
            var fark = etki[a];
            if (a === 'kuruluk' && fark < 0 && siki) fark = Math.round(fark / 2); // sıkı örtü karın zararını yarıya indirir
            deger[a] = Math.max(0, Math.min(100, deger[a] + fark));
            cubuklar[a].kutu.classList.remove('artti', 'azaldi'); void cubuklar[a].kutu.offsetWidth;
            if (fark) cubuklar[a].kutu.classList.add(fark > 0 ? 'artti' : 'azaldi');
          });
          // kağnı dağılırsa onarılır: zaman kaybı sıcaklığı düşürür, oyun bitmez
          if (deger.saglamlik <= 0) { deger.saglamlik = 30; deger.sicaklik = Math.max(0, deger.sicaklik - 15); return true; }
          return false;
        }

        function yoldaYaz() {
          tepsi.innerHTML = '';
          tepsi.appendChild(IP.el('div', 'yonerge', 'Kağnı yolda… Kar yağıyor.'));
        }

        /* ----- Olay ve karar ----- */
        function olayGoster() {
          var o = olaylar[no];
          asama = 'karar'; tepsi.innerHTML = '';
          var kutu = IP.el('div', 'parola-kutu kagit');
          var bas = IP.el('div', 'parola-bas');
          bas.appendChild(IP.el('strong', null, 'Durak ' + (no + 1) + ' / ' + N + ' · ' + o.ad));
          bas.appendChild(IP.okuDugmesi(function () { return o.metin; }));
          kutu.appendChild(bas);
          kutu.appendChild(IP.el('p', null, o.metin));
          var sec = IP.el('div', 'secenekler');
          o.secenekler.forEach(function (s, n) {
            sec.appendChild(IP.dugme(s.metin, 'ikincil', function () {
              if (asama !== 'karar') return;
              asama = 'sonuc'; secimler.push(n);
              if (s.siki_ortu) siki = true;
              var onarim = degistir(s.etki);
              IP.ses.cal(s.etki && s.etki.kuruluk < -15 ? 'yanlis' : 'not');
              tepsi.innerHTML = '';
              var sk = IP.el('div', 'parola-kutu kagit');
              sk.appendChild(IP.el('p', null, s.sonuc + (onarim ? ' Kağnının tekerleği kırıldı; onarmak zaman aldı.' : '')));
              var sira = IP.el('div', 'dugme-sira');
              sira.appendChild(IP.dugme('Yola devam ▶', null, function () { no++; asama = 'git'; yoldaYaz(); }));
              sk.appendChild(sira); tepsi.appendChild(sk);
            }));
          });
          kutu.appendChild(sec); tepsi.appendChild(kutu);
          IP.ses.cal('engel');
        }

        /* ----- Son sahne: değişmeyen tarihsel son ----- */
        function sonAdimGoster(adim) {
          var satirlar = son.anlatim || [];
          tepsi.innerHTML = '';
          if (adim < satirlar.length) {
            var nuri = IP.nuriBalonu(satirlar[adim]);
            nuri.classList.add('belir'); nuri.appendChild(IP.okuDugmesi(function () { return satirlar[adim]; }));
            tepsi.appendChild(nuri);
            if (IP.ses.acik) IP.ses.oku(satirlar[adim]);
          } else {
            tepsi.appendChild(IP.el('div', 'son-yazi', son.kapanis || ''));
            IP.ses.cal('isik');
          }
        }

        function bitir() {
          asama = 'bitti'; tepsi.innerHTML = '';
          var kuru = deger.kuruluk >= KURU_ESIGI;
          var sonuc = {
            completed: kuru, durationSec: Math.round(gecen),
            details: { kuruluk: Math.round(deger.kuruluk), saglamlik: Math.round(deger.saglamlik), sicaklik: Math.round(deger.sicaklik), secimler: secimler }
          };
          var dugmeler = [['Devam ▶', function () { kapat(); coz(sonuc); }]];
          if (!kuru) dugmeler.unshift(['Yolu yeniden dene', yenidenBasla, 'ikincil']);
          kaplama(son.kapanis || 'Yolculuk bitti', [
            mo.kazanim || '',
            kuru ? 'Cephane kuru ulaştı. Mini oyun yıldızını kazandın.' : 'Cephanenin bir kısmı ıslandı. İstersen yolu yeniden deneyebilirsin; cezası yok.'
          ], dugmeler);
        }

        function yenidenBasla() {
          no = 0; kagniX = 640; siki = false; solma = 0; sonAdim = -1; secimler = []; gecen = 0;
          deger = { kuruluk: 100, saglamlik: 100, sicaklik: 100 };
          olayGoster();
        }

        function guncelle(dt) {
          zaman += dt;
          Object.keys(deger).forEach(function (a) {
            gorunen[a] += (deger[a] - gorunen[a]) * Math.min(1, dt * 4);
            cubuklar[a].dolgu.style.width = Math.round(gorunen[a]) + '%';
            cubuklar[a].kutu.classList.toggle('az', deger[a] < (a === 'kuruluk' ? KURU_ESIGI : 30));
          });
          if (asama === 'git' || asama === 'karar' || asama === 'sonuc') gecen += dt;
          if (asama === 'git') {
            var hedef = no < N ? olayX(no) - 260 : olayX(N - 1) + 700;
            kagniX = Math.min(hedef, kagniX + HIZ * dt);
            if (kagniX >= hedef) {
              degistir({ kuruluk: -YOLDA_KAR, sicaklik: -YOLDA_SOGUK });
              if (no < N) olayGoster();
              else { asama = 'son'; sonZaman = 0; tepsi.innerHTML = ''; IP.ses.sus(); }
            }
          } else if (asama === 'son') {
            sonZaman += dt; solma = Math.min(1, sonZaman / 3.5);
            var satir = (son.anlatim || []).length, adim = sonZaman < 3.5 ? -1 : Math.min(satir, Math.floor((sonZaman - 3.5) / 6));
            if (adim !== sonAdim) { sonAdim = adim; if (adim >= 0) sonAdimGoster(adim); }
            if (sonZaman > 3.5 + satir * 6 + 4.5) bitir();
          }
        }

        /* ----- Çizim (kuşbakışı) ----- */
        function yolY(x) { return 500 + Math.sin(x * 0.0026) * 70; }

        function kagniCiz(x, y, aci, karli) {
          c.save(); c.translate(x, y); c.rotate(aci);
          c.lineJoin = 'round'; c.lineCap = 'round'; c.strokeStyle = '#2b2118'; c.lineWidth = 4;
          var sal = asama === 'git' ? Math.sin(zaman * 8) * 3 : 0;
          // öküzler
          [-30, 30].forEach(function (oy) {
            c.fillStyle = '#8a6a55'; c.beginPath(); c.ellipse(120, oy + sal * (oy > 0 ? 1 : -1) * 0.3, 52, 22, 0, 0, TAU); c.fill(); c.stroke();
            c.beginPath(); c.arc(178, oy, 15, 0, TAU); c.fill(); c.stroke();
            c.beginPath(); c.moveTo(182, oy - 12); c.lineTo(196, oy - 20); c.moveTo(182, oy + 12); c.lineTo(196, oy + 20); c.stroke();
          });
          c.lineWidth = 8; c.strokeStyle = '#5b4630'; c.beginPath(); c.moveTo(150, -52); c.lineTo(150, 52); c.moveTo(40, 0); c.lineTo(150, 0); c.stroke();
          c.strokeStyle = '#2b2118'; c.lineWidth = 4;
          // tekerlekler ve kasa
          c.fillStyle = '#5b4630'; c.beginPath(); c.rect(-60, -62, 60, 14); c.fill(); c.stroke(); c.beginPath(); c.rect(-60, 48, 60, 14); c.fill(); c.stroke();
          c.fillStyle = '#8a6a45'; c.beginPath(); c.rect(-100, -48, 140, 96); c.fill(); c.stroke();
          // sandıklar
          c.fillStyle = '#6b5a3a';
          [[-92, -40, 60, 38], [-92, 2, 60, 38], [-26, -40, 58, 38], [-26, 2, 58, 38]].forEach(function (k) { c.beginPath(); c.rect(k[0], k[1], k[2], k[3]); c.fill(); c.stroke(); });
          // örtü: sıkı örtülüyse ya da son sahnede sandıkların üstündedir
          if (siki || karli) {
            c.fillStyle = karli ? '#efe6d2' : '#c9b48a';
            c.beginPath(); c.moveTo(-104, -50); c.quadraticCurveTo(-30, -60, 44, -50); c.quadraticCurveTo(52, 0, 44, 50); c.quadraticCurveTo(-30, 60, -104, 50); c.quadraticCurveTo(-112, 0, -104, -50); c.closePath(); c.fill(); c.stroke();
            c.lineWidth = 2; c.beginPath(); c.moveTo(-70, -48); c.quadraticCurveTo(-60, 0, -74, 48); c.moveTo(-10, -52); c.quadraticCurveTo(0, 0, -14, 52); c.stroke();
          }
          // sandıkların üstünde biriken kar: cephane ıslandıkça artar
          var kar = karli ? 0.85 : (100 - gorunen.kuruluk) / 100 * 0.8;
          if (kar > 0.02) { c.fillStyle = 'rgba(255,255,255,' + kar + ')'; c.beginPath(); c.ellipse(-30, 0, 66, 40, 0, 0, TAU); c.fill(); }
          c.restore();
        }

        function ciz() {
          var kay = kagniX - GW * 0.38, sol = kay - 200, sag = kay + GW + 200, x;
          c.setTransform(dpr, 0, 0, dpr, 0, 0);
          c.fillStyle = '#e6ecef'; c.fillRect(0, 0, W, H);
          c.setTransform(dpr * olcek, 0, 0, dpr * olcek, dpr * kayX, dpr * kayY);
          c.save();
          c.fillStyle = '#e6ecef'; c.fillRect(0, 0, GW, 900);
          c.translate(-kay, 0);

          // deniz ve iskele (yolun başı)
          if (sol < 420) {
            c.fillStyle = '#3d6584'; c.fillRect(-1200, 0, 1460, 900);
            c.strokeStyle = 'rgba(255,255,255,.35)'; c.lineWidth = 4;
            for (i = 0; i < 14; i++) { var wy = 40 + i * 64, wx = -200 + ((i * 97 + zaman * 20) % 400); c.beginPath(); c.moveTo(wx, wy); c.quadraticCurveTo(wx + 20, wy - 10, wx + 40, wy); c.stroke(); }
            c.fillStyle = '#8a6a45'; c.strokeStyle = '#2b2118'; c.lineWidth = 4;
            c.beginPath(); c.rect(40, yolY(200) - 46, 380, 92); c.fill(); c.stroke();
            for (x = 70; x < 420; x += 36) { c.beginPath(); c.moveTo(x, yolY(200) - 46); c.lineTo(x, yolY(200) + 46); c.stroke(); }
          }
          // yol: karda açılmış iz
          c.lineCap = 'round'; c.lineJoin = 'round';
          [['#b9b2a2', 96], ['#cfc8b6', 76]].forEach(function (k) {
            c.strokeStyle = k[0]; c.lineWidth = k[1]; c.beginPath();
            for (x = Math.max(260, sol); x <= sag; x += 30) c.lineTo(x, yolY(x));
            c.stroke();
          });
          // tekerlek izleri
          c.strokeStyle = 'rgba(90,70,48,.35)'; c.lineWidth = 5;
          [-22, 22].forEach(function (dy) { c.beginPath(); for (x = Math.max(260, sol); x <= kagniX - 60; x += 30) c.lineTo(x, yolY(x) + dy); c.stroke(); });

          // olay yerleri
          olaylar.forEach(function (o, n) {
            var ox = olayX(n), oy = yolY(ox);
            if (ox < sol - 400 || ox > sag + 400) return;
            c.strokeStyle = '#2b2118'; c.lineWidth = 4;
            if (o.gorsel === 'yokus') {
              c.fillStyle = 'rgba(190,225,245,.75)'; c.beginPath(); c.ellipse(ox + 140, yolY(ox + 140), 190, 44, 0, 0, TAU); c.fill();
              c.strokeStyle = '#5b7f99'; c.lineWidth = 7;
              for (i = 0; i < 4; i++) { var cx = ox + 20 + i * 80, cy = yolY(cx); c.beginPath(); c.moveTo(cx - 16, cy - 24); c.lineTo(cx + 12, cy); c.lineTo(cx - 16, cy + 24); c.stroke(); }
            } else if (o.gorsel === 'ayrim') {
              c.strokeStyle = '#cfc8b6'; c.lineWidth = 60; c.beginPath(); c.moveTo(ox - 40, oy); c.quadraticCurveTo(ox + 200, oy - 60, ox + 420, oy - 260); c.stroke();
              c.fillStyle = '#8a6a45'; c.strokeStyle = '#2b2118'; c.lineWidth = 4; c.beginPath(); c.rect(ox + 30, oy - 130, 10, 70); c.fill(); c.stroke();
              c.beginPath(); c.moveTo(ox + 40, oy - 130); c.lineTo(ox + 110, oy - 146); c.lineTo(ox + 110, oy - 116); c.closePath(); c.fill(); c.stroke();
              c.beginPath(); c.moveTo(ox + 40, oy - 100); c.lineTo(ox + 104, oy - 90); c.lineTo(ox + 104, oy - 70); c.closePath(); c.fill(); c.stroke();
            } else if (o.gorsel === 'dere') {
              c.strokeStyle = '#a9d0e6'; c.lineWidth = 110; c.beginPath(); c.moveTo(ox + 120, -40); c.quadraticCurveTo(ox + 40, 450, ox + 160, 940); c.stroke();
              c.strokeStyle = 'rgba(255,255,255,.8)'; c.lineWidth = 4;
              [[80, 380], [130, 470], [100, 560], [150, 640]].forEach(function (k) { c.beginPath(); c.moveTo(ox + k[0], k[1]); c.lineTo(ox + k[0] + 30, k[1] + 24); c.lineTo(ox + k[0] + 10, k[1] + 50); c.stroke(); });
            } else if (o.gorsel === 'mola') {
              c.fillStyle = '#8f8a82'; c.strokeStyle = '#2b2118'; c.lineWidth = 4;
              [[60, -170, 90, 60], [150, -200, 110, 74], [240, -160, 80, 56]].forEach(function (k) { c.beginPath(); c.ellipse(ox + k[0], oy + k[1], k[2], k[3], 0, 0, TAU); c.fill(); c.stroke(); });
              c.fillStyle = 'rgba(255,255,255,.85)'; [[60, -190, 60, 26], [150, -224, 76, 30]].forEach(function (k) { c.beginPath(); c.ellipse(ox + k[0], oy + k[1], k[2], k[3], 0, 0, TAU); c.fill(); });
            }
          });

          // ağaçlar (kuşbakışı): yolun iki yanında, üstleri karlı
          var ilk = Math.floor(sol / 170);
          for (i = ilk; i < ilk + Math.ceil(GW / 170) + 4; i++) {
            if (i * 170 < 320) continue;
            var ar = IP.tohumluRastgele(i * 11 + 5);
            for (var q = 0; q < 3; q++) {
              var ax = i * 170 + ar() * 150, yan = ar() > 0.5 ? 1 : -1, ay = yolY(ax) + yan * (190 + ar() * 230), ab = 28 + ar() * 26;
              c.fillStyle = 'rgba(60,70,80,.18)'; c.beginPath(); c.ellipse(ax + 14, ay + 14, ab, ab * 0.8, 0, 0, TAU); c.fill();
              c.fillStyle = '#4f6d5a'; c.strokeStyle = '#2b2118'; c.lineWidth = 3; c.beginPath(); c.arc(ax, ay, ab, 0, TAU); c.fill(); c.stroke();
              c.fillStyle = '#f4f7f8'; c.beginPath(); c.arc(ax - ab * 0.15, ay - ab * 0.15, ab * 0.62, 0, TAU); c.fill();
            }
          }

          // kağnı ve yanında yürüyen Şerife Bacı (son sahnede yalnızca karla kaplı kağnı ve örtü görünür)
          var ky = yolY(kagniX), aci = Math.atan2(yolY(kagniX + 40) - yolY(kagniX - 40), 80), sonSahne = asama === 'son' || asama === 'bitti';
          kagniCiz(kagniX, ky, aci, sonSahne && solma > 0.5);
          if (!sonSahne || solma < 0.5) {
            var adim = asama === 'git' ? Math.sin(zaman * 8) * 4 : 0;
            c.globalAlpha = sonSahne ? 1 - solma * 2 : 1;
            c.strokeStyle = '#2b2118'; c.lineWidth = 4;
            c.fillStyle = '#5d5a7a'; c.beginPath(); c.ellipse(kagniX - 10 + adim, ky + 96, 26, 17, 0, 0, TAU); c.fill(); c.stroke();
            c.fillStyle = '#efe6d2'; c.beginPath(); c.arc(kagniX - 6 + adim, ky + 96, 14, 0, TAU); c.fill(); c.stroke();
            c.globalAlpha = 1;
          }
          c.restore();

          // kar: yol ilerledikçe ve fırtınada yoğunlaşır
          c.setTransform(dpr * olcek, 0, 0, dpr * olcek, dpr * kayX, dpr * kayY);
          c.save();
          var yogun = Math.min(1, 0.25 + no * 0.13 + (no >= N - 1 ? 0.3 : 0) + (sonSahne ? 0.3 : 0)), ruzgar = 40 + yogun * 260;
          c.fillStyle = 'rgba(255,255,255,.9)';
          for (i = 0; i < karlar.length * yogun; i++) {
            var k = karlar[i], kx = ((k[0] / 1700 * (GW + 100) - zaman * ruzgar) % (GW + 100) + GW + 100) % (GW + 100) - 50, ky2 = (k[1] + zaman * k[2]) % 900;
            c.beginPath(); c.arc(kx, ky2, k[3], 0, TAU); c.fill();
          }
          if (yogun > 0.7) { c.fillStyle = 'rgba(235,240,244,' + (yogun - 0.7) * 0.9 + ')'; c.fillRect(0, 0, GW, 900); }
          // son sahne: renkler solar
          if (solma > 0) { c.fillStyle = 'rgba(214,220,226,' + solma * 0.5 + ')'; c.fillRect(0, 0, GW, 900); }
          c.restore();
        }

        /* ----- Döngü ----- */
        var calisiyor = true, onceki = performance.now();
        function kare(simdi) {
          if (!calisiyor) return;
          if (!tuval.isConnected) { kapat(); return; }
          var dt = Math.min(0.05, (simdi - onceki) / 1000); onceki = simdi;
          if (alan.clientWidth !== W || alan.clientHeight !== H) boyutla();
          guncelle(dt); ciz();
          requestAnimationFrame(kare);
        }
        function kapat() { calisiyor = false; window.removeEventListener('resize', boyutla); IP.ses.sus(); }
        IP.temizlikEkle(kapat);
        requestAnimationFrame(kare);

        kaplama(mo.ad || 'Mini oyun', [
          mo.aciklama || '',
          '• Yolda ' + N + ' durak var. Her durakta bir karar ver.',
          '• Üç göstergeyi izle: cephane kuruluğu, kağnı sağlamlığı, sıcaklık.',
          '• Yıldız için cephane kuru ulaşmalı. Yanlış kararın cezası yok.'
        ], [['Yola çık ▶', olayGoster]]);
      });
    }
  };
})();
