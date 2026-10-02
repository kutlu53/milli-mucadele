/* Mini oyun: "Kontrol Noktası" (oyunun yerleşik tekrar bölümü)
   Cephane yüklü kağnı 5 kontrol noktasından geçer. Her noktada nöbetçi, önceki kahramanlarla ilgili
   bir "parola sorusu" sorar. Doğru cevapta bariyer kalkar. Yanlış cevapta şüphe göstergesi artar,
   ilgili Kahraman Kartı 5 saniye açılır ve soru yeniden sorulur.
   Sorular heroes.json dosyasından gelir (mini_oyun.sorular).
   Ortak arayüz: start(container, heroData) → Promise<{completed, durationSec, details}> */
(function () {
  'use strict';
  var IP = window.IP, TAU = Math.PI * 2;

  var ARALIK = 1700;      // iki kontrol noktası arası (1600 × 900 sanal ölçüde)
  var HIZ = 620;          // kağnının yol alma hızı (birim/sn)
  var KART_SURESI = 5000; // yanlış cevapta kartın açık kaldığı süre (ms)
  var YOL_Y = 770;

  IP.oyunlar.kontrol = {
    start: function (container, heroData) {
      return new Promise(function (coz) {
        var mo = heroData.mini_oyun || {}, sorular = mo.sorular || [], N = sorular.length;
        var SINIR = mo.suphe_siniri || 5;
        var asama = 'giris', no = 0, suphe = 0, kayma = -900, zaman = 0, gecen = 0, bariyer = 0, balon = null, unlem = 0;
        var yanlisSayisi = 0, rs = IP.tohumluRastgele(44), yildizlar = [], i;
        for (i = 0; i < 60; i++) yildizlar.push([rs(), rs() * 0.45, rs() * 6]);

        /* ----- Ekran düzeni ----- */
        container.classList.add('oyun');
        var ust = IP.el('div', 'oyun-ust');
        ust.appendChild(IP.el('h2', null, mo.ad || 'Mini oyun'));
        var gosterge = IP.el('div', 'oyun-gosterge');
        var noYazi = IP.el('span', 'gosterge'), supheYazi = IP.el('span', 'gosterge');
        gosterge.appendChild(noYazi); gosterge.appendChild(supheYazi); ust.appendChild(gosterge);
        var alan = IP.el('div', 'oyun-alan');
        var tuval = IP.el('canvas');
        alan.appendChild(tuval);
        var tepsi = IP.el('div', 'kart-tepsi parola');
        container.appendChild(ust); container.appendChild(alan); container.appendChild(tepsi);
        var c = tuval.getContext('2d'), W = 0, H = 0, dpr = 1, olcek = 1, kayX = 0, kayY = 0;

        function boyutla() {
          dpr = Math.min(window.devicePixelRatio || 1, 2);
          W = alan.clientWidth; H = alan.clientHeight;
          tuval.width = Math.max(2, Math.round(W * dpr)); tuval.height = Math.max(2, Math.round(H * dpr));
          olcek = Math.min(W / 1600, H / 900); kayX = (W - 1600 * olcek) / 2; kayY = H - 900 * olcek;
        }
        boyutla();
        window.addEventListener('resize', boyutla);

        function gostergeYaz() {
          noYazi.textContent = 'Kontrol ' + Math.min(no + 1, N) + ' / ' + N;
          supheYazi.textContent = 'Şüphe ' + '●●●●●●●●'.slice(0, suphe) + '○○○○○○○○'.slice(0, Math.max(0, SINIR - suphe));
          supheYazi.classList.toggle('az', suphe >= SINIR - 1);
        }
        function kaplama(baslik, satirlar, dugmeler) {
          var k = IP.el('div', 'oyun-kaplama'), kutu = IP.el('div', 'kagit oyun-kutu');
          kutu.appendChild(IP.el('h2', null, baslik));
          satirlar.forEach(function (st) { if (st) kutu.appendChild(IP.el('p', null, st)); });
          var sira = IP.el('div', 'dugme-sira');
          dugmeler.forEach(function (d) { sira.appendChild(IP.dugme(d[0], d[2], function () { k.remove(); d[1](); })); });
          kutu.appendChild(sira); k.appendChild(kutu); alan.appendChild(k);
        }

        function yoldaYaz() {
          tepsi.innerHTML = '';
          tepsi.appendChild(IP.el('div', 'yonerge', no < N ? 'Kağnı yolda… Sıradaki kontrol noktasına yaklaşıyorsun.' : 'Son kontrol noktası da geçildi!'));
        }

        /* ----- Parola sorusu ----- */
        var kapali = {}; // bu soruda yanlış çıkan seçenekler
        function soruGoster() {
          var s = sorular[no];
          tepsi.innerHTML = '';
          var kutu = IP.el('div', 'parola-kutu kagit');
          var bas = IP.el('div', 'parola-bas');
          bas.appendChild(IP.el('strong', null, 'Parola sorusu'));
          bas.appendChild(IP.okuDugmesi(function () { return s.soru; }));
          kutu.appendChild(bas);
          kutu.appendChild(IP.el('p', null, s.soru));
          var sec = IP.el('div', 'secenekler');
          s.secenekler.forEach(function (metin, n) {
            var d = IP.dugme(metin, 'ikincil', function () { cevapla(n, d); });
            d.disabled = !!kapali[n];
            sec.appendChild(d);
          });
          kutu.appendChild(sec); tepsi.appendChild(kutu);
        }

        function cevapla(n, dugme) {
          if (asama !== 'soru') return;
          var s = sorular[no];
          if (n === s.dogru) {
            asama = 'aciliyor'; dugme.classList.add('dogru'); IP.ses.cal('dogru');
            balon = { metin: 'Parola doğru. Geç!', omur: 2 };
            Array.prototype.forEach.call(dugme.parentNode.children, function (x) { if (x !== dugme) x.disabled = true; });
            return;
          }
          // yanlış: şüphe artar, kart açılır, sonra yeniden sorulur
          asama = 'kart'; kapali[n] = true; suphe++; yanlisSayisi++; unlem = 1.5;
          dugme.classList.add('yanlis'); dugme.disabled = true; IP.ses.cal('yanlis');
          balon = { metin: 'Hmm… Bu parola yanlış!', omur: 2.5 };
          gostergeYaz();
          if (suphe >= SINIR) { setTimeout(function () { if (tuval.isConnected) geriCevrildi(); }, 1300); return; }
          setTimeout(function () {
            if (!tuval.isConnected) return;
            var perde = IP.el('div', 'oyun-kaplama parola-perde');
            var kk = IP.kahramanKarti(IP.kahramanBul(s.kahraman)); kk.classList.add('cevrik');
            var sayac = IP.el('div', 'bulten-sayac'); sayac.appendChild(IP.el('span'));
            perde.appendChild(IP.el('div', 'yonerge', 'Karta bak: doğru bilgi burada. Sonra yeniden dene.'));
            perde.appendChild(kk); perde.appendChild(sayac);
            container.appendChild(perde);
            setTimeout(function () { perde.remove(); if (asama === 'kart') { asama = 'soru'; soruGoster(); } }, KART_SURESI);
          }, 1200);
        }

        function geriCevrildi() {
          asama = 'bitti'; tepsi.innerHTML = '';
          kaplama('Nöbetçi şüphelendi', [
            'Şüphe göstergesi doldu. Üzülme, cezası yok.',
            'İpucu: Yanlış cevaptan sonra açılan kartı dikkatle oku.'
          ], [
            ['Tekrar dene', function () { no = 0; suphe = 0; kayma = -900; bariyer = 0; kapali = {}; asama = 'git'; yoldaYaz(); gostergeYaz(); }],
            ['Yıldızsız devam et', function () { bitir(false); }, 'ikincil']
          ]);
        }

        function bitir(tamam) {
          asama = 'bitti'; tepsi.innerHTML = '';
          var sonuc = { completed: tamam, durationSec: Math.round(gecen), details: { gecilen: Math.min(no, N), yanlis: yanlisSayisi, suphe: suphe } };
          if (!tamam) { kapat(); coz(sonuc); return; }
          IP.ses.cal('zafer'); IP.efekt.patlat(window.innerWidth / 2, window.innerHeight / 2, 80);
          kaplama('Bütün kontrol noktaları geçildi!', [mo.kazanim || '', 'Yanlış parola: ' + yanlisSayisi], [['Devam ▶', function () { kapat(); coz(sonuc); }]]);
        }

        function guncelle(dt) {
          zaman += dt;
          if (balon) { balon.omur -= dt; if (balon.omur <= 0) balon = null; }
          if (unlem > 0) unlem -= dt;
          if (asama === 'git' || asama === 'soru' || asama === 'kart' || asama === 'aciliyor') gecen += dt;
          if (asama === 'git') {
            var hedef = no < N ? no * ARALIK : (N - 1) * ARALIK + 1100;
            kayma = Math.min(hedef, kayma + HIZ * dt);
            if (kayma >= hedef) {
              if (no >= N) { bitir(true); return; }
              asama = 'soru'; kapali = {}; bariyer = 0;
              balon = { metin: 'Dur! Parolayı bilmeden geçemezsin.', omur: 3 };
              IP.ses.cal('engel'); soruGoster(); gostergeYaz();
            }
          } else if (asama === 'aciliyor') {
            bariyer = Math.min(1, bariyer + dt * 1.4);
            if (bariyer >= 1) { no++; asama = 'git'; yoldaYaz(); gostergeYaz(); }
          }
        }

        /* ----- Çizim ----- */
        function ciz() {
          c.setTransform(dpr, 0, 0, dpr, 0, 0);
          c.clearRect(0, 0, W, H);
          c.setTransform(dpr * olcek, 0, 0, dpr * olcek, dpr * kayX, dpr * kayY);
          var g = c.createLinearGradient(0, -400, 0, 900);
          g.addColorStop(0, '#1b2348'); g.addColorStop(0.55, '#7a5a78'); g.addColorStop(1, '#f0b276');
          c.fillStyle = g; c.fillRect(-2000, -2000, 5600, 2900);
          yildizlar.forEach(function (y) {
            c.fillStyle = 'rgba(255,250,220,' + (0.4 + Math.sin(zaman * 2 + y[2]) * 0.3) + ')';
            c.beginPath(); c.arc(y[0] * 1600, y[1] * 900 - 100, 2.5, 0, TAU); c.fill();
          });
          // uzak ve yakın tepeler (farklı hızda kayar)
          [[470, 70, '#4a3f5e', 0.15], [580, 50, '#3a3148', 0.35]].forEach(function (d) {
            c.fillStyle = d[2]; c.beginPath(); c.moveTo(-2000, 900);
            for (var x = -2000; x <= 3600; x += 40) { var wx = x + kayma * d[3]; c.lineTo(x, d[0] + Math.sin(wx * 0.004) * d[1] + Math.sin(wx * 0.011) * d[1] * 0.4); }
            c.lineTo(3600, 900); c.closePath(); c.fill();
          });
          // yol
          c.fillStyle = '#6b5640'; c.fillRect(-2000, YOL_Y - 40, 5600, 2000);
          c.fillStyle = '#8a7252'; c.fillRect(-2000, YOL_Y - 40, 5600, 14);
          // yol kenarı ağaçları
          var ilk = Math.floor((kayma - 2200) / 340);
          for (i = ilk; i < ilk + 18; i++) {
            var ar = IP.tohumluRastgele(i * 7 + 3), ax = i * 340 + ar() * 200 - kayma, ab = 0.8 + ar() * 0.7;
            c.fillStyle = '#2b2436'; c.fillRect(ax - 7 * ab, YOL_Y - 40 - 40 * ab, 14 * ab, 40 * ab);
            c.beginPath(); c.moveTo(ax - 60 * ab, YOL_Y - 70 * ab); c.lineTo(ax, YOL_Y - 240 * ab); c.lineTo(ax + 60 * ab, YOL_Y - 70 * ab); c.closePath(); c.fill();
          }

          // kontrol noktaları: kulübe, nöbetçi, bariyer
          for (i = 0; i < N; i++) {
            var kx = 1180 + i * ARALIK - kayma;
            if (kx < -500 || kx > 2200) continue;
            var acik = i < no ? 1 : (i === no ? bariyer : 0);
            // kulübe
            c.strokeStyle = '#2b2118'; c.lineWidth = 5; c.lineJoin = 'round';
            for (var q = 0; q < 5; q++) { c.fillStyle = q % 2 ? '#f1e4c6' : '#b3261e'; c.beginPath(); c.rect(kx + 150 + q * 26, YOL_Y - 250, 26, 210); c.fill(); }
            c.strokeRect(kx + 150, YOL_Y - 250, 130, 210);
            c.fillStyle = '#5b4630'; c.beginPath(); c.moveTo(kx + 134, YOL_Y - 250); c.lineTo(kx + 215, YOL_Y - 310); c.lineTo(kx + 296, YOL_Y - 250); c.closePath(); c.fill(); c.stroke();
            // fener
            var fg = c.createRadialGradient(kx + 215, YOL_Y - 330, 4, kx + 215, YOL_Y - 330, 220);
            fg.addColorStop(0, 'rgba(255,225,130,.75)'); fg.addColorStop(1, 'rgba(255,225,130,0)');
            c.fillStyle = fg; c.fillRect(kx - 10, YOL_Y - 560, 460, 460);
            c.fillStyle = '#fff3b0'; c.beginPath(); c.arc(kx + 215, YOL_Y - 330, 12, 0, TAU); c.fill(); c.stroke();
            // nöbetçi
            IP.cizim.kisi(c, kx + 80, YOL_Y - 30, 1.05, { bas: 'kalpak', govde: '#55543a', kusak: '#3a2a1c', yon: -1, kol: acik >= 1 ? 'cagri' : (i === no && asama !== 'git' ? 'gozet' : null) });
            if (i === no && unlem > 0) {
              c.fillStyle = '#b3261e'; c.font = '900 90px Manset, serif'; c.textAlign = 'center';
              c.fillText('!', kx + 80, YOL_Y - 250 - Math.abs(Math.sin(zaman * 10)) * 14);
            }
            // bariyer: yolu kapatan çizgili kol, doğru parolada kalkar
            c.fillStyle = '#5b4630'; c.beginPath(); c.rect(kx - 12, YOL_Y - 150, 24, 120); c.fill(); c.stroke();
            c.save(); c.translate(kx, YOL_Y - 140); c.rotate(acik * 1.35);
            for (q = 0; q < 6; q++) { c.fillStyle = q % 2 ? '#f1e4c6' : '#b3261e'; c.beginPath(); c.rect(-330 + q * 55, -12, 55, 24); c.fill(); c.stroke(); }
            c.restore();
            // numara levhası
            c.fillStyle = '#f1e4c6'; c.beginPath(); c.rect(kx + 185, YOL_Y - 220, 60, 60); c.fill(); c.stroke();
            c.fillStyle = '#2b2118'; c.font = '900 44px Manset, serif'; c.textAlign = 'center'; c.fillText(String(i + 1), kx + 215, YOL_Y - 174);
            // nöbetçinin sözü
            if (i === no && balon) {
              c.font = '600 30px Metin, serif';
              var bw = c.measureText(balon.metin).width + 40, bx = Math.max(20, Math.min(1580 - bw, kx + 80 - bw / 2)), by = YOL_Y - 300;
              c.fillStyle = '#fff6dc'; c.lineWidth = 4; c.beginPath(); c.rect(bx, by - 62, bw, 56); c.fill(); c.stroke();
              c.beginPath(); c.moveTo(kx + 66, by - 7); c.lineTo(kx + 80, by + 14); c.lineTo(kx + 94, by - 7); c.fill(); c.stroke();
              c.fillStyle = '#2b2118'; c.textAlign = 'left'; c.fillText(balon.metin, bx + 20, by - 24);
            }
          }

          // kağnı ve yanında yürüyen kahraman
          var yuruyor = asama === 'git';
          IP.cizim.kagni(c, 470, YOL_Y - 20, 0.95, yuruyor ? zaman : 0, { duruyor: !yuruyor });
          IP.cizim.kisi(c, 190, YOL_Y - 6 - (yuruyor ? Math.abs(Math.sin(zaman * 6)) * 6 : 0), 1.05, { bas: 'kalpak', govde: '#6b5a4a', kusak: '#3a2a1c' });
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
        function kapat() { calisiyor = false; window.removeEventListener('resize', boyutla); }
        IP.temizlikEkle(kapat);
        requestAnimationFrame(kare);
        gostergeYaz();

        kaplama(mo.ad || 'Mini oyun', [
          mo.aciklama || '',
          '• Her kontrol noktasında nöbetçi bir parola sorusu sorar. Sorular önceki kahramanlarla ilgili.',
          '• Doğru cevapta bariyer kalkar.',
          '• Yanlış cevapta şüphe artar ve kahramanın kartı açılır. Kartı oku, yeniden dene.',
          '• Şüphe göstergesi dolmadan ' + N + ' noktayı da geç.'
        ], [['Yola çık ▶', function () { asama = 'git'; yoldaYaz(); }]]);
      });
    }
  };
})();
