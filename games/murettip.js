/* Mini oyun: "Mürettip" (mürettip: matbaada harfleri dizen kişi)
   1. aşama — Dizgi: Harf kalıpları seçilerek manşet dizilir. Gerçek matbaadaki gibi kalıplardaki
      harfler ters görünür ve satır sağdan sola dolar.
   2. aşama — Baskı: Kol çekilir, sayfa basılır. Basılı sayfada harfler düz okunur.
   3. aşama — Marş: İstiklal Marşı'nın ilk iki kıtasının dizeleri doğru sıraya konur. Dizeler
      heroes.json dosyasında henüz yazılı değilse ("[İÇERİK BEKLENİYOR]") bu aşama atlanır.
   Cezası yok: yanlış seçimde tekrar denenir.
   Ortak arayüz: start(container, heroData) → Promise<{completed, durationSec, details}> */
(function () {
  'use strict';
  var IP = window.IP, TAU = Math.PI * 2;

  IP.oyunlar.murettip = {
    start: function (container, heroData) {
      return new Promise(function (coz) {
        var mo = heroData.mini_oyun || {};
        var manset = IP.buyukHarf(mo.manset || '').split('');
        var kitalar = ((mo.mars || {}).kitalar || []).filter(function (k) {
          return k.length > 1 && k.every(function (d) { return d && d !== IP.YER_TUTUCU; });
        });
        var marsHazir = kitalar.length > 0;
        var rs = IP.tohumluRastgele(23);
        function karistir(dizi) {
          var d = dizi.slice();
          for (var i = d.length - 1; i > 0; i--) { var j = Math.floor(rs() * (i + 1)), g = d[i]; d[i] = d[j]; d[j] = g; }
          return d;
        }
        var asama = 'giris', harfNo = 0, kitaNo = 0, dizeNo = 0, zaman = 0, gecen = 0, kol = 0, kolHedef = 0;
        var hata = { dizgi: 0, mars: 0 };

        /* ----- Ekran düzeni ----- */
        container.classList.add('oyun');
        var ust = IP.el('div', 'oyun-ust');
        ust.appendChild(IP.el('h2', null, mo.ad || 'Mini oyun'));
        var gosterge = IP.el('div', 'oyun-gosterge');
        var asamaYazi = IP.el('span', 'gosterge');
        gosterge.appendChild(asamaYazi); ust.appendChild(gosterge);
        var alan = IP.el('div', 'oyun-alan');
        var tuval = IP.el('canvas'), panel = IP.el('div', 'dizgi-panel'), mesaj = IP.el('div', 'oyun-mesaj');
        alan.appendChild(tuval); alan.appendChild(panel); alan.appendChild(mesaj);
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
          mesajYaz.z = setTimeout(function () { mesaj.classList.remove('goster'); }, sure || 3000);
        }
        function gostergeYaz() {
          var toplam = marsHazir ? 3 : 2, no = asama === 'mars' ? 3 : (asama === 'baski' || asama === 'basildi' ? 2 : 1);
          asamaYazi.textContent = 'Aşama ' + Math.min(no, toplam) + ' / ' + toplam;
        }
        function kaplama(baslik, satirlar, dugmeler) {
          var k = IP.el('div', 'oyun-kaplama'), kutu = IP.el('div', 'kagit oyun-kutu');
          kutu.appendChild(IP.el('h2', null, baslik));
          satirlar.forEach(function (st) { if (st) kutu.appendChild(IP.el('p', null, st)); });
          var sira = IP.el('div', 'dugme-sira');
          dugmeler.forEach(function (d) { sira.appendChild(IP.dugme(d[0], d[2], function () { k.remove(); d[1](); })); });
          kutu.appendChild(sira); k.appendChild(kutu); alan.appendChild(k);
        }
        function salla(oge) { oge.classList.remove('yanlis'); void oge.offsetWidth; oge.classList.add('yanlis'); }

        /* ----- 1. aşama: dizgi ----- */
        var yuvalar = [];
        function dizgiBaslat() {
          asama = 'dizgi'; harfNo = 0; gostergeYaz();
          panel.innerHTML = ''; panel.className = 'dizgi-panel';
          var hedef = IP.el('div', 'dizgi-hedef kagit');
          hedef.appendChild(IP.el('small', null, 'Dizilecek manşet'));
          hedef.appendChild(IP.el('strong', null, manset.join('')));
          var cubuk = IP.el('div', 'dizgi-cubuk');
          yuvalar = manset.map(function () { var y = IP.el('span', 'dizgi-yuva'); cubuk.appendChild(y); return y; });
          panel.appendChild(hedef); panel.appendChild(cubuk);
          panel.appendChild(IP.el('div', 'yonerge', 'Satır sağdan sola dolar. Harfler kalıpta ters durur.'));
          tepsi.innerHTML = '';
          karistir(manset.concat((mo.celdirici_harfler || []).map(IP.buyukHarf))).forEach(function (h) {
            var d = IP.el('button', 'harf-kalip');
            d.type = 'button'; d.setAttribute('aria-label', h);
            d.appendChild(IP.el('span', null, h));
            d.addEventListener('click', function () {
              if (asama !== 'dizgi') return;
              if (h !== manset[harfNo]) {
                hata.dizgi++; IP.ses.cal('yanlis'); salla(d);
                mesajYaz('Manşeti okunduğu sırayla diz: sıradaki harf ' + (harfNo + 1) + '. harf.');
                return;
              }
              d.disabled = true; IP.ses.cal('damga');
              var y = yuvalar[manset.length - 1 - harfNo]; // sağdan sola
              y.classList.add('dolu'); y.appendChild(IP.el('span', null, h));
              harfNo++;
              if (harfNo >= manset.length) {
                asama = 'ara';
                setTimeout(function () { if (tuval.isConnected) baskiBaslat(); }, 900);
              }
            });
            tepsi.appendChild(d);
          });
          mesajYaz('Manşetin ilk harfinin kalıbını seç.', 3600);
        }

        /* ----- 2. aşama: baskı ----- */
        function baskiBaslat() {
          asama = 'baski'; gostergeYaz();
          panel.className = 'dizgi-panel kucuk';
          tepsi.innerHTML = '';
          tepsi.appendChild(IP.dugme('Kolu çek ▶', 'buyuk', kolCek));
          mesajYaz('Kalıp hazır! Baskı makinesinin kolunu çek.', 3600);
        }
        function kolCek() {
          if (asama !== 'baski') return;
          asama = 'basiliyor'; kolHedef = 1; tepsi.innerHTML = ''; IP.ses.cal('engel');
          setTimeout(function () {
            if (!tuval.isConnected) return;
            kolHedef = 0; asama = 'basildi'; IP.ses.cal('damga');
            panel.innerHTML = ''; panel.className = 'dizgi-panel';
            var sayfa = IP.el('div', 'baski-sayfa kagit');
            sayfa.appendChild(IP.el('h3', null, mo.dergi || ''));
            sayfa.appendChild(IP.el('h2', null, manset.join('')));
            sayfa.appendChild(IP.el('p', null, mo.baski_konu || ''));
            panel.appendChild(sayfa);
            panel.appendChild(IP.el('div', 'yonerge', 'Kalıpta ters duran harfler kâğıtta düz çıktı!'));
            IP.efekt.patlat(window.innerWidth / 2, window.innerHeight / 2, 40);
            if (!marsHazir) tepsi.appendChild(IP.el('div', 'yonerge', 'Marş dizeleri: ' + IP.YER_TUTUCU + ' — Dizeler resmî kaynaktan eklenince burada sıralama oyunu olacak.'));
            tepsi.appendChild(IP.dugme(marsHazir ? 'Marşı dizmeye geç ▶' : 'Devam ▶', null, function () { if (marsHazir) kitaBaslat(); else bitir(); }));
          }, 1500);
        }

        /* ----- 3. aşama: marş dizelerini sırala ----- */
        function kitaBaslat() {
          asama = 'mars'; dizeNo = 0; gostergeYaz();
          var kita = kitalar[kitaNo];
          panel.innerHTML = ''; panel.className = 'dizgi-panel';
          var sayfa = IP.el('div', 'baski-sayfa kagit mars');
          sayfa.appendChild(IP.el('h3', null, (mo.mars.baslik || '') + ' · ' + (kitaNo + 1) + '. kıta'));
          var satirlar = kita.map(function () { var s = IP.el('p', 'bos', '…'); sayfa.appendChild(s); return s; });
          panel.appendChild(sayfa);
          tepsi.innerHTML = '';
          var sira = karistir(kita);
          if (sira.join('|') === kita.join('|')) sira.reverse();
          sira.forEach(function (dize) {
            var d = IP.dugme(dize, 'ikincil dize-dugme', function () {
              if (asama !== 'mars') return;
              if (dize !== kita[dizeNo]) { hata.mars++; IP.ses.cal('yanlis'); salla(d); mesajYaz('Sıradaki dize bu değil. Marşı içinden söyleyerek dene.'); return; }
              d.disabled = true; IP.ses.cal('not');
              satirlar[dizeNo].textContent = dize; satirlar[dizeNo].className = 'dolu';
              dizeNo++;
              if (dizeNo >= kita.length) {
                kitaNo++; IP.ses.cal('dogru');
                setTimeout(function () { if (!tuval.isConnected) return; if (kitaNo < kitalar.length) kitaBaslat(); else bitir(); }, 1400);
              }
            });
            tepsi.appendChild(d);
          });
        }

        function bitir() {
          asama = 'bitti'; tepsi.innerHTML = '';
          var sonuc = { completed: true, durationSec: Math.round(gecen), details: { dizgi_hata: hata.dizgi, mars_hata: hata.mars, mars_hazir: marsHazir } };
          IP.ses.cal('zafer'); IP.efekt.patlat(window.innerWidth / 2, window.innerHeight / 2, 80);
          kaplama('Baskı tamam!', [mo.kazanim || ''], [['Devam ▶', function () { kapat(); coz(sonuc); }]]);
        }

        tuval.addEventListener('pointerdown', function () { kolCek(); });

        /* ----- Çizim: matbaa ve baskı makinesi ----- */
        function ciz() {
          var u = Math.min(W / 1000, H / 440), mx = W * 0.84, taban = H * 0.86, i;
          c.setTransform(dpr, 0, 0, dpr, 0, 0);
          var g = c.createLinearGradient(0, 0, 0, H);
          g.addColorStop(0, '#5a4630'); g.addColorStop(1, '#3a2a1c');
          c.fillStyle = g; c.fillRect(0, 0, W, H);
          c.fillStyle = '#6b4a2c'; c.fillRect(0, taban, W, H - taban);
          c.strokeStyle = '#2b2118'; c.lineWidth = 4 * u; c.lineJoin = 'round'; c.lineCap = 'round';
          c.beginPath(); c.moveTo(0, taban); c.lineTo(W, taban); c.stroke();
          var lg = c.createRadialGradient(W * 0.45, 0, 10, W * 0.45, 0, H * 1.1);
          lg.addColorStop(0, 'rgba(255,225,150,.32)'); lg.addColorStop(1, 'rgba(255,225,150,0)');
          c.fillStyle = lg; c.fillRect(0, 0, W, H);
          // harf kasası (solda): gözlere ayrılmış tahta dolap
          var kx = W * 0.03, kw = W * 0.2, kh = H * 0.5, ky = taban - kh;
          c.fillStyle = '#7d5a38'; c.beginPath(); c.rect(kx, ky, kw, kh); c.fill(); c.stroke();
          for (i = 1; i < 5; i++) { c.beginPath(); c.moveTo(kx, ky + kh * i / 5); c.lineTo(kx + kw, ky + kh * i / 5); c.moveTo(kx + kw * i / 5, ky); c.lineTo(kx + kw * i / 5, ky + kh); c.stroke(); }
          var hr = IP.tohumluRastgele(5);
          c.fillStyle = '#b9b2a2';
          for (i = 0; i < 25; i++) c.fillRect(kx + kw * ((i % 5) + 0.25 + hr() * 0.2) / 5, ky + kh * (Math.floor(i / 5) + 0.45) / 5, kw * 0.07, kh * 0.08);
          // baskı makinesi (sağda)
          var inis = kol * 46 * u;
          c.fillStyle = '#2b2f3a';
          c.beginPath(); c.rect(mx - 130 * u, taban - 60 * u, 260 * u, 60 * u); c.fill(); c.stroke();          // gövde
          c.beginPath(); c.rect(mx - 120 * u, taban - 300 * u, 26 * u, 240 * u); c.fill(); c.stroke();          // sol direk
          c.beginPath(); c.rect(mx + 94 * u, taban - 300 * u, 26 * u, 240 * u); c.fill(); c.stroke();           // sağ direk
          c.beginPath(); c.rect(mx - 130 * u, taban - 320 * u, 260 * u, 30 * u); c.fill(); c.stroke();          // üst kiriş
          c.fillStyle = '#8a8f98'; c.beginPath(); c.rect(mx - 12 * u, taban - 290 * u, 24 * u, 70 * u + inis); c.fill(); c.stroke(); // vida
          c.fillStyle = '#4a4d58'; c.beginPath(); c.rect(mx - 90 * u, taban - 220 * u + inis, 180 * u, 30 * u); c.fill(); c.stroke(); // baskı tablası
          c.fillStyle = '#fff6dc'; c.beginPath(); c.rect(mx - 80 * u, taban - 96 * u, 160 * u, 12 * u); c.fill(); c.stroke();        // kâğıt
          c.fillStyle = '#6b6152'; c.beginPath(); c.rect(mx - 86 * u, taban - 84 * u, 172 * u, 24 * u); c.fill(); c.stroke();        // kalıp yatağı
          // kol
          c.save(); c.translate(mx - 12 * u, taban - 280 * u); c.rotate(-0.5 + kol * 1.1);
          c.strokeStyle = '#2b2118'; c.lineWidth = 16 * u; c.beginPath(); c.moveTo(0, 0); c.lineTo(-170 * u, 0); c.stroke();
          c.strokeStyle = '#c9a23a'; c.lineWidth = 9 * u; c.beginPath(); c.moveTo(0, 0); c.lineTo(-170 * u, 0); c.stroke();
          c.fillStyle = '#b3261e'; c.strokeStyle = '#2b2118'; c.lineWidth = 4 * u; c.beginPath(); c.arc(-176 * u, 0, 18 * u, 0, TAU); c.fill(); c.stroke();
          c.restore();
          if (asama === 'baski') {
            var nb = 0.5 + Math.sin(zaman * 5) * 0.5;
            c.strokeStyle = 'rgba(255,220,110,' + (0.4 + nb * 0.6) + ')'; c.lineWidth = 5 * u;
            c.beginPath(); c.arc(mx - 12 * u - Math.cos(0.5) * 176 * u, taban - 280 * u + Math.sin(0.5) * 176 * u, (28 + nb * 8) * u, 0, TAU); c.stroke();
          }
        }

        /* ----- Döngü ----- */
        var calisiyor = true, onceki = performance.now();
        function kare(simdi) {
          if (!calisiyor) return;
          if (!tuval.isConnected) { kapat(); return; }
          var dt = Math.min(0.05, (simdi - onceki) / 1000); onceki = simdi;
          if (alan.clientWidth !== W || alan.clientHeight !== H) boyutla();
          zaman += dt; kol += (kolHedef - kol) * Math.min(1, dt * 6);
          if (asama !== 'giris' && asama !== 'bitti') gecen += dt;
          ciz();
          requestAnimationFrame(kare);
        }
        function kapat() { calisiyor = false; clearTimeout(mesajYaz.z); window.removeEventListener('resize', boyutla); }
        IP.temizlikEkle(kapat);
        requestAnimationFrame(kare);
        gostergeYaz();

        kaplama(mo.ad || 'Mini oyun', [
          mo.aciklama || '',
          '• Harf kalıplarını seçerek manşeti diz. Kalıptaki harfler ters durur, satır sağdan sola dolar.',
          '• Sonra baskı makinesinin kolunu çek.',
          marsHazir ? '• En sonda İstiklal Marşı\'nın dizelerini doğru sıraya koy.' : ''
        ], [['Başla ▶', dizgiBaslat]]);
      });
    }
  };
})();
