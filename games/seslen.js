/* Mini oyun: "Kalabalığa Seslen"
   Oyuncu 10 cümle kartından 5'ini seçip sıraya dizerek bir miting konuşması kurar.
   Konuya uygun cümleler meydandaki kalabalığı büyütür. Konu dışı ya da çağına uymayan cümleler
   kalabalığı azaltır ve nedeni söylenir. Konuşma bir selamla başlayıp bir çağrıyla biterse ek puan gelir.
   Cümle kartları proje ekibinin yazdığı özgün cümlelerdir (gerçek konuşmadan alıntı değildir) ve
   heroes.json dosyasından gelir (mini_oyun.kartlar).
   Ortak arayüz: start(container, heroData) → Promise<{completed, durationSec, details}> */
(function () {
  'use strict';
  var IP = window.IP;

  // Puanlar (pilot testten sonra buradan değiştirilebilir). 5 uygun cümle + doğru açılış ve kapanış = %100.
  var UYGUN_PUAN = 16, SIRA_PUANI = 10, YANLIS_CEZA = 10;
  var CUMLE_SURESI = 2800; // her cümlenin okunma süresi (ms)
  var HALIDE = { bas: 'ortu', ortu: '#2b2630', uzun: true, govde: '#2b2630' };

  IP.oyunlar.seslen = {
    start: function (container, heroData) {
      return new Promise(function (coz) {
        var mo = heroData.mini_oyun || {}, YUVA = mo.secilecek || 5;
        // Kartlar herkeste aynı karışık sırayla görünür.
        var rs = IP.tohumluRastgele(71), kartlar = (mo.kartlar || []).slice(), i;
        for (i = kartlar.length - 1; i > 0; i--) { var j = Math.floor(rs() * (i + 1)), g = kartlar[i]; kartlar[i] = kartlar[j]; kartlar[j] = g; }
        var yuvalar = [], asama = 'giris', kalabalik = 0, gorunen = 0, deneme = 0, zaman = 0, gecen = 0, konusuyor = -1, zamanlayicilar = [];
        for (i = 0; i < YUVA; i++) yuvalar.push(-1);

        /* ----- Ekran düzeni ----- */
        container.classList.add('oyun');
        var ust = IP.el('div', 'oyun-ust');
        ust.appendChild(IP.el('h2', null, mo.ad || 'Mini oyun'));
        var gosterge = IP.el('div', 'oyun-gosterge');
        var kalYazi = IP.el('span', 'gosterge'), denYazi = IP.el('span', 'gosterge');
        gosterge.appendChild(kalYazi); gosterge.appendChild(denYazi); ust.appendChild(gosterge);
        var alan = IP.el('div', 'oyun-alan');
        var tuval = IP.el('canvas'), balon = IP.el('div', 'soz-balon');
        alan.appendChild(tuval); alan.appendChild(balon);
        var tepsi = IP.el('div', 'soz-tepsi');
        container.appendChild(ust); container.appendChild(alan); container.appendChild(tepsi);
        var c = tuval.getContext('2d'), W = 0, H = 0, dpr = 1;

        function boyutla() {
          dpr = Math.min(window.devicePixelRatio || 1, 2);
          W = alan.clientWidth; H = alan.clientHeight;
          tuval.width = Math.max(2, Math.round(W * dpr)); tuval.height = Math.max(2, Math.round(H * dpr));
        }
        boyutla();
        window.addEventListener('resize', boyutla);

        function gostergeYaz() {
          kalYazi.textContent = 'Kalabalık %' + Math.round(kalabalik);
          denYazi.textContent = 'Deneme ' + Math.max(1, deneme);
        }
        function kaplama(baslik, satirlar, dugmeler) {
          var k = IP.el('div', 'oyun-kaplama'), kutu = IP.el('div', 'kagit oyun-kutu');
          kutu.appendChild(IP.el('h2', null, baslik));
          satirlar.forEach(function (st) { if (st) kutu.appendChild(IP.el('p', null, st)); });
          var sira = IP.el('div', 'dugme-sira');
          dugmeler.forEach(function (d) { sira.appendChild(IP.dugme(d[0], d[2], function () { k.remove(); d[1](); })); });
          kutu.appendChild(sira); k.appendChild(kutu); alan.appendChild(k);
        }

        /* ----- Kartlar ve konuşma sırası ----- */
        function tepsiCiz() {
          tepsi.innerHTML = '';
          var secim = asama === 'sec';
          var yuvaSira = IP.el('div', 'soz-yuvalar');
          yuvalar.forEach(function (k, n) {
            var d = IP.el('button', 'soz-yuva' + (k >= 0 ? ' dolu' : '') + (n === konusuyor ? ' okunuyor' : ''));
            d.type = 'button'; d.disabled = !secim || k < 0;
            d.appendChild(IP.el('b', null, String(n + 1)));
            d.appendChild(IP.el('span', null, k >= 0 ? kartlar[k].metin : (n === 0 ? 'ilk söz' : (n === YUVA - 1 ? 'son söz' : '…'))));
            d.addEventListener('click', function () { yuvalar[n] = -1; IP.ses.cal('tik'); tepsiCiz(); });
            yuvaSira.appendChild(d);
          });
          tepsi.appendChild(yuvaSira);
          var izgara = IP.el('div', 'soz-kartlar');
          kartlar.forEach(function (k, n) {
            var d = IP.el('button', 'soz-kart', k.metin);
            d.type = 'button'; d.disabled = !secim || yuvalar.indexOf(n) >= 0;
            d.addEventListener('click', function () {
              var bos = yuvalar.indexOf(-1);
              if (bos < 0) { balonYaz('Beş söz de dolu. Değiştirmek için yukarıdaki bir söze dokun.', ''); return; }
              yuvalar[bos] = n; IP.ses.cal('damga'); tepsiCiz();
            });
            izgara.appendChild(d);
          });
          tepsi.appendChild(izgara);
          var konus = IP.dugme('Konuşmayı yap ▶', null, konusmaBaslat);
          konus.disabled = !secim || yuvalar.indexOf(-1) >= 0;
          tepsi.appendChild(konus);
        }

        function balonYaz(metin, not, sinif) {
          balon.innerHTML = '';
          if (!metin) { balon.classList.remove('goster'); return; }
          balon.className = 'soz-balon goster' + (sinif ? ' ' + sinif : '');
          balon.appendChild(IP.el('p', null, metin));
          if (not) balon.appendChild(IP.el('small', null, not));
        }

        function konusmaBaslat() {
          if (asama !== 'sec' || yuvalar.indexOf(-1) >= 0) return;
          asama = 'konusma'; deneme++; kalabalik = 0; gostergeYaz();
          yuvalar.forEach(function (k, n) {
            zamanlayicilar.push(setTimeout(function () {
              if (!tuval.isConnected) return;
              var kart = kartlar[k];
              konusuyor = n; tepsiCiz();
              if (kart.tur === 'uygun') {
                var ek = (n === 0 && kart.yer === 'acilis') || (n === YUVA - 1 && kart.yer === 'kapanis');
                kalabalik = Math.min(100, kalabalik + UYGUN_PUAN + (ek ? SIRA_PUANI : 0));
                balonYaz('“' + kart.metin + '”', ek ? 'Tam yerinde! Kalabalık büyüyor.' : 'Kalabalık büyüyor.', 'iyi');
                IP.ses.cal('dogru');
              } else {
                kalabalik = Math.max(0, kalabalik - YANLIS_CEZA);
                balonYaz('“' + kart.metin + '”', kart.neden || 'Bu söz kalabalığı dağıttı.', 'kotu');
                IP.ses.cal('yanlis');
              }
              gostergeYaz();
            }, 400 + n * CUMLE_SURESI));
          });
          zamanlayicilar.push(setTimeout(function () { if (tuval.isConnected) sonucGoster(); }, 400 + YUVA * CUMLE_SURESI));
        }

        function sonucGoster() {
          konusuyor = -1; balonYaz('');
          var tamam = kalabalik >= 100;
          var sonuc = { completed: tamam, durationSec: Math.round(gecen), details: { deneme: deneme, kalabalik: Math.round(kalabalik) } };
          if (tamam) {
            asama = 'bitti'; tepsiCiz();
            IP.ses.cal('zafer'); IP.efekt.patlat(window.innerWidth / 2, window.innerHeight / 2, 80);
            kaplama('Meydan doldu!', [mo.kazanim || '', 'Deneme sayısı: ' + deneme], [['Devam ▶', function () { kapat(); coz(sonuc); }]]);
            return;
          }
          asama = 'sonuc'; tepsiCiz();
          var ipuclari = [];
          yuvalar.forEach(function (k) { var kart = kartlar[k]; if (kart.tur !== 'uygun' && kart.neden && ipuclari.indexOf(kart.neden) < 0) ipuclari.push(kart.neden); });
          var ilk = kartlar[yuvalar[0]], son = kartlar[yuvalar[YUVA - 1]];
          if (ilk.yer !== 'acilis' || son.yer !== 'kapanis') ipuclari.push('Bir konuşma selamla başlar, herkesi birleştiren bir çağrıyla biter.');
          kaplama('Kalabalık %' + Math.round(kalabalik), ['Meydan henüz dolmadı. Üzülme, konuşmanı düzeltebilirsin.'].concat(ipuclari.slice(0, 3).map(function (x) { return 'İpucu: ' + x; })), [
            ['Konuşmayı düzelt', function () { asama = 'sec'; tepsiCiz(); }],
            ['Yıldızsız devam et', function () { kapat(); coz(sonuc); }, 'ikincil']
          ]);
        }

        /* ----- Çizim: meydan, kürsü, kalabalık ----- */
        function ciz() {
          var s = Math.max(H / 620, W / 2800), t = zaman;
          c.setTransform(dpr, 0, 0, dpr, 0, 0);
          c.clearRect(0, 0, W, H);
          c.setTransform(dpr * s, 0, 0, dpr * s, dpr * (W / 2 - 800 * s), dpr * (H - 900 * s));
          var g = c.createLinearGradient(0, 0, 0, 900);
          g.addColorStop(0, '#9aa7b4'); g.addColorStop(1, '#e6dcc0');
          c.fillStyle = g; c.fillRect(-1400, -600, 4400, 1500);
          IP.cizim.cami(c, 800, 600, 1.05, '#8a8f98');
          c.fillStyle = '#b9a47a'; c.fillRect(-1400, 600, 4400, 400);
          [-520, -180, 180, 470, 1130, 1420, 1780, 2120].forEach(function (x, n) { IP.cizim.pankart(c, x, 640, t + n, 1); });
          // kürsü ve konuşmacı
          c.fillStyle = '#6b4a2c'; c.strokeStyle = '#2b2118'; c.lineWidth = 5; c.lineJoin = 'round';
          c.beginPath(); c.rect(710, 590, 180, 110); c.fill(); c.stroke();
          c.fillStyle = '#7d5a38'; c.beginPath(); c.rect(696, 576, 208, 22); c.fill(); c.stroke();
          IP.cizim.kisi(c, 800, 578, 1.05, Object.assign({ kol: asama === 'konusma' ? 'cagri' : null }, HALIDE));
          if (asama === 'konusma') {
            c.strokeStyle = 'rgba(255,255,255,.7)'; c.lineWidth = 5;
            for (var d = 0; d < 3; d++) { var r = 60 + ((t * 70 + d * 50) % 150); c.beginPath(); c.arc(800, 430, r, -0.5, 0.5); c.stroke(); c.beginPath(); c.arc(800, 430, r, Math.PI - 0.5, Math.PI + 0.5); c.stroke(); }
          }
          IP.cizim.kalabalik(c, 36 + gorunen * 2.6, t, { y: 670, sevinc: asama === 'bitti' });
        }

        /* ----- Döngü ----- */
        var calisiyor = true, onceki = performance.now();
        function kare(simdi) {
          if (!calisiyor) return;
          if (!tuval.isConnected) { kapat(); return; }
          var dt = Math.min(0.05, (simdi - onceki) / 1000); onceki = simdi;
          if (alan.clientWidth !== W || alan.clientHeight !== H) boyutla();
          zaman += dt; gorunen += (kalabalik - gorunen) * Math.min(1, dt * 3);
          if (asama === 'sec' || asama === 'konusma' || asama === 'sonuc') gecen += dt;
          ciz();
          requestAnimationFrame(kare);
        }
        function kapat() { calisiyor = false; window.removeEventListener('resize', boyutla); zamanlayicilar.forEach(clearTimeout); }
        IP.temizlikEkle(kapat);
        requestAnimationFrame(kare);
        gostergeYaz(); tepsiCiz();

        kaplama(mo.ad || 'Mini oyun', [
          mo.aciklama || '',
          '• ' + kartlar.length + ' söz kartından ' + YUVA + ' tanesini seç. Dokunduğun kart sıradaki boş yere geçer.',
          '• Konuya uygun sözler kalabalığı büyütür. Konu dışı ya da o çağda söylenemeyecek sözler kalabalığı azaltır.',
          '• Konuşmayı bir selamla başlat, bir çağrıyla bitir. Meydan %100 dolsun!'
        ], [['Başla ▶', function () { asama = 'sec'; tepsiCiz(); }]]);
      });
    }
  };
})();
