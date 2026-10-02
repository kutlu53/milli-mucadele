/* Mini oyun: "Telgrafhane"
   1. aşama — Doğru mu, söylenti mi?: Masaya haber kartları gelir. Kaynağı belli olan haber "Gönder"
      kutusuna, kaynağı belli olmayan söylenti "Çöp" kutusuna atılır.
   2. aşama — Telgraf: Haber kelime kelime telgrafla gönderilir. Her kelimenin kısa (•) ve uzun (—)
      işaretleri ekranda görünür; kısa işaret için kısa dokunulur, uzun işaret için basılı tutulur.
      Bu, Mors alfabesinden esinlenen basitleştirilmiş bir oyundur; gerçek Mors kodu değildir.
   Haber kartları kurgusaldır ve heroes.json dosyasından gelir. Cezası yok: yanlışta tekrar denenir.
   Ortak arayüz: start(container, heroData) → Promise<{completed, durationSec, details}> */
(function () {
  'use strict';
  var IP = window.IP, TAU = Math.PI * 2;

  var UZUN_ESIK = 0.3;      // bundan uzun basış "uzun işaret" sayılır (sn)
  var SESLI = 'aeıioöuüâîû';

  // Bir kelimenin işaretleri: ilk iki harfe göre (sesli harf = kısa, sessiz harf = uzun).
  function isaretler(kelime) {
    var harfler = kelime.toLocaleLowerCase('tr-TR').replace(/[^a-zçğıöşüâîû]/g, '').slice(0, 2).split('');
    if (!harfler.length) harfler = ['a'];
    return harfler.map(function (h) { return SESLI.indexOf(h) >= 0 ? 'k' : 'u'; });
  }

  IP.oyunlar.telgrafhane = {
    start: function (container, heroData) {
      return new Promise(function (coz) {
        var mo = heroData.mini_oyun || {};
        var rs = IP.tohumluRastgele(57), kartlar = (mo.kartlar || []).slice(), i;
        for (i = kartlar.length - 1; i > 0; i--) { var j = Math.floor(rs() * (i + 1)), g = kartlar[i]; kartlar[i] = kartlar[j]; kartlar[j] = g; }
        var telgraflar = (mo.telgraflar || []).map(function (t) {
          return { etiket: t.etiket || '', kelimeler: t.metin.split(/\s+/).map(function (k) { return { yazi: k, isaret: isaretler(k) }; }) };
        });
        var asama = 'giris', kartNo = 0, telNo = 0, kelNo = 0, isNo = 0, zaman = 0, gecen = 0;
        var hata = { ayiklama: 0, telgraf: 0 }, basili = false, basZaman = 0, serit = [], kivilcimlar = [], yanan = 0, toplamKelime = 0;
        telgraflar.forEach(function (t) { toplamKelime += t.kelimeler.length; });
        var sehirler = []; for (i = 0; i < 26; i++) sehirler.push([0.08 + rs() * 0.84, 0.2 + rs() * 0.6]);

        /* ----- Ekran düzeni ----- */
        container.classList.add('oyun');
        var ust = IP.el('div', 'oyun-ust');
        ust.appendChild(IP.el('h2', null, mo.ad || 'Mini oyun'));
        var gosterge = IP.el('div', 'oyun-gosterge');
        var asamaYazi = IP.el('span', 'gosterge'), sayiYazi = IP.el('span', 'gosterge');
        gosterge.appendChild(asamaYazi); gosterge.appendChild(sayiYazi); ust.appendChild(gosterge);
        var alan = IP.el('div', 'oyun-alan');
        var tuval = IP.el('canvas'), panel = IP.el('div', 'telgraf-panel'), mesaj = IP.el('div', 'oyun-mesaj');
        alan.appendChild(tuval); alan.appendChild(panel); alan.appendChild(mesaj);
        if (mo.kartlar_kurgusal) alan.appendChild(IP.el('span', 'rozet kurgusal oyun-rozet', 'kurgusal haber kartları'));
        var tepsi = IP.el('div', 'kart-tepsi');
        container.appendChild(ust); container.appendChild(alan); container.appendChild(tepsi);
        var c = tuval.getContext('2d'), W = 0, H = 0, dpr = 1;

        function boyutla() {
          dpr = Math.min(window.devicePixelRatio || 1, 2);
          W = alan.clientWidth; H = alan.clientHeight;
          tuval.width = Math.max(2, Math.round(W * dpr)); tuval.height = Math.max(2, Math.round(H * dpr));
        }
        boyutla();
        window.addEventListener('resize', boyutla);

        function mesajYaz(m, sure) {
          mesaj.textContent = m; mesaj.classList.add('goster');
          clearTimeout(mesajYaz.z);
          mesajYaz.z = setTimeout(function () { mesaj.classList.remove('goster'); }, sure || 2800);
        }
        function gostergeYaz() {
          var iki = asama === 'telgraf' || asama === 'bitti';
          asamaYazi.textContent = 'Aşama ' + (iki ? 2 : 1) + ' / 2';
          sayiYazi.textContent = iki ? 'Haber ' + Math.min(telNo + 1, telgraflar.length) + ' / ' + telgraflar.length : 'Kart ' + Math.min(kartNo + 1, kartlar.length) + ' / ' + kartlar.length;
        }
        function kaplama(baslik, satirlar, dugmeler) {
          var k = IP.el('div', 'oyun-kaplama'), kutu = IP.el('div', 'kagit oyun-kutu');
          kutu.appendChild(IP.el('h2', null, baslik));
          satirlar.forEach(function (st) { if (st) kutu.appendChild(IP.el('p', null, st)); });
          var sira = IP.el('div', 'dugme-sira');
          dugmeler.forEach(function (d) { sira.appendChild(IP.dugme(d[0], d[2], function () { k.remove(); d[1](); })); });
          kutu.appendChild(sira); k.appendChild(kutu); alan.appendChild(k);
        }

        /* ----- 1. aşama: haber kartlarını ayıkla ----- */
        function kartGoster() {
          var k = kartlar[kartNo];
          panel.innerHTML = ''; panel.className = 'telgraf-panel';
          var kart = IP.el('div', 'haber-karti kagit');
          kart.appendChild(IP.el('p', null, k.metin));
          kart.appendChild(IP.el('small', null, 'Kaynak: ' + (k.kaynak || 'belli değil')));
          kart.appendChild(IP.okuDugmesi(function () { return k.metin + ' Kaynak: ' + (k.kaynak || 'belli değil'); }));
          panel.appendChild(kart);
          tepsi.innerHTML = '';
          tepsi.appendChild(IP.dugme('📤 Gönder', 'buyuk', function () { ayikla(true, kart); }));
          tepsi.appendChild(IP.dugme('🗑 Çöp', 'ikincil buyuk', function () { ayikla(false, kart); }));
          gostergeYaz();
        }
        function ayikla(gonder, kart) {
          if (asama !== 'ayikla' || kart.classList.contains('gidiyor')) return;
          var k = kartlar[kartNo], dogru = (k.tur === 'kaynakli') === gonder;
          if (!dogru) {
            hata.ayiklama++; IP.ses.cal('yanlis');
            kart.classList.remove('salla'); void kart.offsetWidth; kart.classList.add('salla');
            mesajYaz(k.tur === 'kaynakli' ? 'Bu haberin kaynağı belli: kimin, nereden bildirdiği yazıyor.' : 'Bu bir söylenti: kimin söylediği belli değil.', 3400);
            return;
          }
          IP.ses.cal(gonder ? 'dogru' : 'sayfa');
          kart.classList.add('gidiyor', gonder ? 'sola' : 'saga');
          setTimeout(function () {
            if (!tuval.isConnected) return;
            kartNo++;
            if (kartNo < kartlar.length) { kartGoster(); return; }
            asama = 'ara'; panel.innerHTML = ''; tepsi.innerHTML = '';
            kaplama('Haberler ayıklandı!', [mo.kazanim || '', 'Şimdi kaynağı belli haberleri telgrafla gönder.'], [['Telgrafın başına geç ▶', telgrafBaslat]]);
          }, 600);
        }

        /* ----- 2. aşama: telgraf ----- */
        function telgrafBaslat() {
          asama = 'telgraf'; telNo = 0; kelNo = 0; isNo = 0;
          tepsi.innerHTML = '';
          tepsi.appendChild(IP.el('div', 'yonerge', 'Telgraf tuşuna kısa dokun: •   ·   Basılı tut: —   (Sıradaki işaret parlıyor.)'));
          panelCiz(); gostergeYaz();
        }
        function panelCiz() {
          var t = telgraflar[telNo];
          panel.innerHTML = ''; panel.className = 'telgraf-panel ust';
          var kutu = IP.el('div', 'telgraf-metin kagit');
          if (t.etiket) kutu.appendChild(IP.el('span', 'rozet temsili', t.etiket));
          var satir = IP.el('p');
          t.kelimeler.forEach(function (k, n) {
            satir.appendChild(IP.el('span', n < kelNo ? 'gitti' : (n === kelNo ? 'siradaki' : ''), k.yazi));
            satir.appendChild(document.createTextNode(' '));
          });
          kutu.appendChild(satir);
          var isaretSira = IP.el('div', 'isaret-sira');
          t.kelimeler[kelNo].isaret.forEach(function (s, n) {
            isaretSira.appendChild(IP.el('i', (s === 'k' ? 'kisa' : 'uzun') + (n < isNo ? ' tamam' : (n === isNo ? ' simdi' : ''))));
          });
          kutu.appendChild(isaretSira);
          panel.appendChild(kutu);
        }

        function isaretGeldi(uzun) {
          if (asama !== 'telgraf') return;
          var t = telgraflar[telNo], beklenen = t.kelimeler[kelNo].isaret[isNo];
          if ((beklenen === 'u') !== uzun) {
            hata.telgraf++; IP.ses.cal('yanlis');
            mesajYaz(beklenen === 'u' ? 'Bu işaret uzun: tuşu biraz basılı tut.' : 'Bu işaret kısa: tuşa dokunup hemen bırak.', 2600);
            return;
          }
          serit.push({ uzun: uzun, x: 0 });
          isNo++;
          if (isNo >= t.kelimeler[kelNo].isaret.length) {
            // kelime gitti: tellerde bir kıvılcım yola çıkar, haritada bir ışık yanar
            isNo = 0; kelNo++; yanan++; kivilcimlar.push({ u: 0 });
            if (kelNo >= t.kelimeler.length) {
              kelNo = 0; telNo++; IP.ses.cal('isik');
              IP.efekt.patlat(window.innerWidth / 2, window.innerHeight / 2, 30);
              if (telNo >= telgraflar.length) { bitir(); return; }
              mesajYaz(telNo + '. haber gönderildi!', 2200);
              gostergeYaz();
            }
          }
          panelCiz();
        }

        function bitir() {
          asama = 'bitti'; panel.innerHTML = ''; tepsi.innerHTML = ''; gostergeYaz();
          var sonuc = { completed: true, durationSec: Math.round(gecen), details: { ayiklama_hata: hata.ayiklama, telgraf_hata: hata.telgraf } };
          IP.ses.cal('zafer'); IP.efekt.patlat(window.innerWidth / 2, window.innerHeight / 2, 80);
          kaplama('Haberler Anadolu\'ya ulaştı!', [mo.kazanim || '', 'Yanlış işaret: ' + hata.telgraf], [['Devam ▶', function () { kapat(); coz(sonuc); }]]);
        }

        /* ----- Telgraf tuşu: dokunma ve klavye ----- */
        function bas() { if (asama === 'telgraf' && !basili) { basili = true; basZaman = zaman; IP.ses.cal('tus'); } }
        function birak() {
          if (!basili) return;
          basili = false;
          var uzun = zaman - basZaman >= UZUN_ESIK;
          IP.ses.cal(uzun ? 'uzun' : 'kisa');
          isaretGeldi(uzun);
        }
        tuval.addEventListener('pointerdown', function (e) { e.preventDefault(); try { tuval.setPointerCapture(e.pointerId); } catch (h) { /* yok */ } bas(); });
        tuval.addEventListener('pointerup', birak);
        tuval.addEventListener('pointercancel', function () { basili = false; });
        function tusBas(e) { if (e.code === 'Space' && !e.repeat) { e.preventDefault(); bas(); } }
        function tusBirak(e) { if (e.code === 'Space') birak(); }
        window.addEventListener('keydown', tusBas);
        window.addEventListener('keyup', tusBirak);

        /* ----- Çizim ----- */
        function ciz() {
          var u = Math.min(W / 1000, H / 420), i;
          c.setTransform(dpr, 0, 0, dpr, 0, 0);
          // duvar ve masa
          var g = c.createLinearGradient(0, 0, 0, H);
          g.addColorStop(0, '#5a4630'); g.addColorStop(1, '#3a2a1c');
          c.fillStyle = g; c.fillRect(0, 0, W, H);
          c.fillStyle = '#7d5a38'; c.fillRect(0, H * 0.72, W, H * 0.28);
          c.strokeStyle = '#2b2118'; c.lineWidth = 4 * u; c.beginPath(); c.moveTo(0, H * 0.72); c.lineTo(W, H * 0.72); c.stroke();
          // lamba ışığı
          var lg = c.createRadialGradient(W * 0.5, H * 0.1, 10, W * 0.5, H * 0.1, H * 0.9);
          lg.addColorStop(0, 'rgba(255,225,150,.35)'); lg.addColorStop(1, 'rgba(255,225,150,0)');
          c.fillStyle = lg; c.fillRect(0, 0, W, H);

          if (asama === 'telgraf' || asama === 'bitti') {
            // duvardaki Anadolu haritası: gönderilen her kelimede bir ışık yanar
            var G = IP.cografya, mw = Math.min(W * 0.42, H * 1.2), mh = mw / 2.16, mx = W * 0.97 - mw, my = H * 0.3;
            c.fillStyle = '#2f3f55'; c.strokeStyle = '#2b2118'; c.lineWidth = 4 * u; c.beginPath(); c.rect(mx - 10 * u, my - 10 * u, mw + 20 * u, mh + 20 * u); c.fill(); c.stroke();
            c.beginPath();
            G.sinir.forEach(function (n, k) { var p = G.oran(n[0], n[1]); if (k) c.lineTo(mx + p[0] * mw, my + p[1] * mh); else c.moveTo(mx + p[0] * mw, my + p[1] * mh); });
            c.closePath(); c.fillStyle = '#e4cf9f'; c.fill(); c.lineWidth = 2 * u; c.stroke();
            var oran = toplamKelime ? yanan / toplamKelime : 0;
            sehirler.forEach(function (s, n) {
              if (n >= Math.ceil(oran * sehirler.length)) return;
              var sx = mx + s[0] * mw, sy = my + s[1] * mh, nb = 0.6 + Math.sin(zaman * 4 + n) * 0.4;
              var ig = c.createRadialGradient(sx, sy, 1, sx, sy, 16 * u);
              ig.addColorStop(0, 'rgba(255,220,110,' + nb + ')'); ig.addColorStop(1, 'rgba(255,220,110,0)');
              c.fillStyle = ig; c.beginPath(); c.arc(sx, sy, 16 * u, 0, TAU); c.fill();
              c.fillStyle = '#b3261e'; c.beginPath(); c.arc(sx, sy, 3.5 * u, 0, TAU); c.fill();
            });
            // tuştan haritaya giden tel ve üstündeki kıvılcımlar
            var tx0 = W * 0.3, ty0 = H * 0.66, tx1 = mx - 10 * u, ty1 = my + mh / 2;
            c.strokeStyle = '#2b2118'; c.lineWidth = 3 * u; c.beginPath(); c.moveTo(tx0, ty0); c.quadraticCurveTo((tx0 + tx1) / 2, ty0 + 30 * u, tx1, ty1); c.stroke();
            kivilcimlar.forEach(function (k) {
              var o = k.u, x = (1 - o) * (1 - o) * tx0 + 2 * o * (1 - o) * (tx0 + tx1) / 2 + o * o * tx1, y = (1 - o) * (1 - o) * ty0 + 2 * o * (1 - o) * (ty0 + 30 * u) + o * o * ty1;
              var kg = c.createRadialGradient(x, y, 1, x, y, 18 * u);
              kg.addColorStop(0, 'rgba(255,245,200,1)'); kg.addColorStop(1, 'rgba(255,190,80,0)');
              c.fillStyle = kg; c.beginPath(); c.arc(x, y, 18 * u, 0, TAU); c.fill();
            });

            // telgraf tuşu
            var kx = W * 0.2, ky = H * 0.7, bas2 = basili ? 1 : 0, tut = basili ? Math.min(1, (zaman - basZaman) / UZUN_ESIK) : 0;
            c.fillStyle = '#3a2a1c'; c.strokeStyle = '#2b2118'; c.lineWidth = 4 * u; c.lineJoin = 'round';
            c.beginPath(); c.rect(kx - 150 * u, ky, 300 * u, 30 * u); c.fill(); c.stroke();
            c.fillStyle = '#c9a23a';
            c.beginPath(); c.rect(kx + 70 * u, ky - 34 * u, 26 * u, 34 * u); c.fill(); c.stroke();
            c.beginPath(); c.rect(kx - 110 * u, ky - 16 * u, 30 * u, 16 * u); c.fill(); c.stroke();
            c.save(); c.translate(kx + 83 * u, ky - 40 * u); c.rotate(-0.1 + bas2 * 0.1);
            c.beginPath(); c.rect(-200 * u, -9 * u, 230 * u, 18 * u); c.fill(); c.stroke();
            c.fillStyle = '#2b2118'; c.beginPath(); c.ellipse(-178 * u, -22 * u, 34 * u, 16 * u, 0, 0, TAU); c.fill(); c.stroke();
            c.restore();
            // basılı tutma halkası: dolunca işaret "uzun" olur
            if (basili) {
              c.strokeStyle = tut >= 1 ? '#ffd24a' : '#f1e4c6'; c.lineWidth = 8 * u; c.lineCap = 'round';
              c.beginPath(); c.arc(kx - 95 * u, ky - 70 * u, 46 * u, -Math.PI / 2, -Math.PI / 2 + tut * TAU); c.stroke();
            }
            // kâğıt şerit: gönderilen işaretler
            c.fillStyle = '#fff6dc'; c.strokeStyle = '#2b2118'; c.lineWidth = 3 * u;
            c.beginPath(); c.rect(0, H * 0.84, W * 0.46, 34 * u); c.fill(); c.stroke();
            c.fillStyle = '#2b2118';
            serit.forEach(function (s) {
              var sx = W * 0.44 - s.x * u, sy = H * 0.84 + 17 * u;
              if (sx < 6) return;
              if (s.uzun) c.fillRect(sx - 16 * u, sy - 4 * u, 32 * u, 8 * u); else { c.beginPath(); c.arc(sx, sy, 5 * u, 0, TAU); c.fill(); }
            });
          } else {
            // 1. aşama: masada "Gönder" ve "Çöp" kutuları
            var kutular = [[W * 0.14, '#5f6f52'], [W * 0.86, '#6b5a4a']];
            kutular.forEach(function (k, n) {
              c.fillStyle = k[1]; c.strokeStyle = '#2b2118'; c.lineWidth = 4 * u; c.lineJoin = 'round';
              c.beginPath(); c.moveTo(k[0] - 90 * u, H * 0.6); c.lineTo(k[0] + 90 * u, H * 0.6); c.lineTo(k[0] + 70 * u, H * 0.9); c.lineTo(k[0] - 70 * u, H * 0.9); c.closePath(); c.fill(); c.stroke();
              c.fillStyle = '#f1e4c6'; c.font = '900 ' + 22 * u + 'px Manset, serif'; c.textAlign = 'center';
              c.fillText(n ? 'Çöp' : 'Gönder', k[0], H * 0.78);
            });
          }
        }

        /* ----- Döngü ----- */
        var calisiyor = true, onceki = performance.now();
        function kare(simdi) {
          if (!calisiyor) return;
          if (!tuval.isConnected) { kapat(); return; }
          var dt = Math.min(0.05, (simdi - onceki) / 1000); onceki = simdi;
          if (alan.clientWidth !== W || alan.clientHeight !== H) boyutla();
          zaman += dt;
          if (asama === 'ayikla' || asama === 'telgraf' || asama === 'ara') gecen += dt;
          serit.forEach(function (s) { s.x += dt * 60; });
          if (serit.length > 60) serit.shift();
          kivilcimlar = kivilcimlar.filter(function (k) { k.u += dt * 1.2; return k.u < 1; });
          ciz();
          requestAnimationFrame(kare);
        }
        function kapat() {
          calisiyor = false; clearTimeout(mesajYaz.z);
          window.removeEventListener('resize', boyutla);
          window.removeEventListener('keydown', tusBas); window.removeEventListener('keyup', tusBirak);
          IP.oyunlar.telgrafhane.durum = null;
        }
        IP.temizlikEkle(kapat);
        // Otomatik oynatma testi sıradaki işareti buradan okur.
        IP.oyunlar.telgrafhane.durum = function () {
          var t = telgraflar[telNo];
          return { asama: asama, beklenen: asama === 'telgraf' && t ? t.kelimeler[kelNo].isaret[isNo] : null, hata: hata };
        };
        requestAnimationFrame(kare);
        gostergeYaz();

        kaplama(mo.ad || 'Mini oyun', [
          mo.aciklama || '',
          '• 1. aşama: Haber kartına bak. Kaynağı belliyse "Gönder", kimin söylediği belli değilse "Çöp".',
          '• 2. aşama: Haberi telgrafla gönder. Kısa işaret için dokun, uzun işaret için basılı tut.'
        ], [['Başla ▶', function () { asama = 'ayikla'; kartGoster(); }]]);
      });
    }
  };
})();
