/* Mini oyun: "Müfrezeni Kur"
   1. aşama — Gönüllü toplama: Köydeki kişilerle konuşulur. Her görev, o işi bilen kişiyle eşleştirilir.
   2. aşama — Rota: Kahramanın görev yerleri doğru sıraya dizilir. Duraklar heroes.json dosyasında henüz
      yazılı değilse ("[İÇERİK BEKLENİYOR]") bulmaca atlanır, müfreze yalnızca yola çıkar.
   Köylüler kurgusaldır; ekranda bu belirtilir. Cezası yok: yanlış eşleştirmede tekrar denenir.
   Ortak arayüz: start(container, heroData) → Promise<{completed, durationSec, details}> */
(function () {
  'use strict';
  var IP = window.IP, TAU = Math.PI * 2;

  // Köylülerin durduğu yerler: [x, y, ölçek] (1600 × 900 sanal ölçü).
  var YERLER = [[220, 470, 0.75], [570, 455, 0.75], [1000, 460, 0.75], [1360, 470, 0.75], [395, 660, 0.9], [785, 670, 0.9], [1180, 670, 0.9], [1500, 660, 0.9]];
  var GORUNUS = [
    { bas: 'ortu', uzun: true, govde: '#7b4a55' }, { bas: 'fes', govde: '#55657a' }, { bas: 'ortu', uzun: true, govde: '#4f6d5c' },
    { bas: 'sarik', govde: '#6b5a4a', sakal: '#e8e2d4' }, { bas: 'ortu', uzun: true, govde: '#5d5a7a' }, { bas: 'fes', govde: '#7a5c3e' },
    { bas: '', govde: '#8a6a45' }, { bas: 'ortu', uzun: true, govde: '#8a5a3c' }
  ];
  var FATMA = { bas: 'ortu', ortu: '#3a3340', govde: '#6b6a4a', kusak: '#3a2a1c' };
  var SIRA_Y = 872; // kurulan müfrezenin dizildiği hiza

  IP.oyunlar.mufreze = {
    start: function (container, heroData) {
      return new Promise(function (coz) {
        var mo = heroData.mini_oyun || {}, gorevler = mo.gorevler || [], rota = mo.rota || {};
        var duraklar = (rota.duraklar || []).filter(function (d) { return d && d !== IP.YER_TUTUCU; });
        var rotaHazir = duraklar.length >= 2;
        var rs = IP.tohumluRastgele(9);

        // Köylüler: görevlerin sahipleri + diğer köylüler, yerleri karıştırılır (herkeste aynı sırayla).
        var kisiler = gorevler.map(function (g, i) { return { beceri: g.beceri, soz: g.soz, gorev: i }; })
          .concat((mo.diger_koyluler || []).map(function (d) { return { beceri: d.beceri, soz: d.soz, gorev: -1 }; }))
          .slice(0, YERLER.length);
        for (var i = kisiler.length - 1; i > 0; i--) { var j = Math.floor(rs() * (i + 1)), g = kisiler[i]; kisiler[i] = kisiler[j]; kisiler[j] = g; }
        kisiler.forEach(function (k, n) {
          k.x = YERLER[n][0]; k.y = YERLER[n][1]; k.s = YERLER[n][2]; k.gorunus = GORUNUS[n % GORUNUS.length];
          k.konustu = false; k.katildi = false;
        });

        var asama = 'giris', secili = -1, yapilan = [], katilan = [], balon = null, zaman = 0, gecen = 0;
        var hata = { eslestirme: 0, rota: 0 }, durakSira = 0, yolU = 0, hedefU = 0;

        /* ----- Ekran düzeni ----- */
        container.classList.add('oyun');
        var ust = IP.el('div', 'oyun-ust');
        ust.appendChild(IP.el('h2', null, mo.ad || 'Mini oyun'));
        var gosterge = IP.el('div', 'oyun-gosterge');
        var asamaYazi = IP.el('span', 'gosterge'), sayiYazi = IP.el('span', 'gosterge');
        gosterge.appendChild(asamaYazi); gosterge.appendChild(sayiYazi); ust.appendChild(gosterge);
        var alan = IP.el('div', 'oyun-alan');
        var tuval = IP.el('canvas'), mesaj = IP.el('div', 'oyun-mesaj');
        alan.appendChild(tuval); alan.appendChild(mesaj);
        if (mo.koyluler_kurgusal) { var rozet = IP.el('span', 'rozet kurgusal oyun-rozet', 'kurgusal köylüler'); alan.appendChild(rozet); }
        var tepsi = IP.el('div', 'kart-tepsi');
        container.appendChild(ust); container.appendChild(alan); container.appendChild(tepsi);
        var c = tuval.getContext('2d'), W = 0, H = 0, dpr = 1, olcek = 1, kayX = 0, kayY = 0;

        function boyutla() {
          dpr = Math.min(window.devicePixelRatio || 1, 2);
          W = alan.clientWidth; H = alan.clientHeight;
          tuval.width = Math.max(2, Math.round(W * dpr)); tuval.height = Math.max(2, Math.round(H * dpr));
          // 1600 × 900 sanal sahne ekrana sığdırılır
          olcek = Math.min(W / 1600, H / 900); kayX = (W - 1600 * olcek) / 2; kayY = H - 900 * olcek;
        }
        boyutla();
        window.addEventListener('resize', boyutla);

        function mesajYaz(m, sure) {
          mesaj.textContent = m; mesaj.classList.add('goster');
          clearTimeout(mesajYaz.z);
          mesajYaz.z = setTimeout(function () { mesaj.classList.remove('goster'); }, sure || 2800);
        }
        function gostergeYaz() {
          asamaYazi.textContent = 'Aşama ' + (asama === 'rota' || asama === 'bitti' ? 2 : 1) + ' / 2';
          sayiYazi.textContent = asama === 'rota' || asama === 'bitti'
            ? (rotaHazir ? 'Durak ' + durakSira + ' / ' + duraklar.length : 'Yolda')
            : 'Müfreze ' + katilan.length + ' / ' + gorevler.length;
        }
        function kaplama(baslik, satirlar, dugmeler) {
          var k = IP.el('div', 'oyun-kaplama'), kutu = IP.el('div', 'kagit oyun-kutu');
          kutu.appendChild(IP.el('h2', null, baslik));
          satirlar.forEach(function (st) { if (st) kutu.appendChild(IP.el('p', null, st)); });
          var sira = IP.el('div', 'dugme-sira');
          dugmeler.forEach(function (d) { sira.appendChild(IP.dugme(d[0], d[2], function () { k.remove(); d[1](); })); });
          kutu.appendChild(sira); k.appendChild(kutu); alan.appendChild(k);
        }

        /* ----- 1. aşama: görev kartları ve köylüler ----- */
        function tepsiCiz() {
          tepsi.innerHTML = '';
          if (asama === 'topla') {
            gorevler.forEach(function (g, n) {
              var d = IP.el('button', 'kart-dugme' + (n === secili ? ' secili' : ''));
              d.type = 'button'; d.disabled = !!yapilan[n];
              var yazi = IP.el('span');
              yazi.appendChild(IP.el('strong', null, (yapilan[n] ? '✔ ' : '') + g.gorev));
              yazi.appendChild(IP.el('small', null, yapilan[n] ? 'Müfrezede' : 'Bu görevi kim yapabilir?'));
              d.appendChild(yazi);
              d.addEventListener('click', function () { secili = secili === n ? -1 : n; IP.ses.cal('tik'); tepsiCiz(); });
              tepsi.appendChild(d);
            });
          } else if (asama === 'rota' && rotaHazir) {
            IP.karistir(duraklar).forEach(function (ad) {
              var d = IP.dugme(ad, 'ikincil durak-dugme', function () {
                if (ad === duraklar[durakSira]) {
                  d.disabled = true; d.classList.add('dogru'); durakSira++; IP.ses.cal('damga');
                  hedefU = durakSira >= duraklar.length ? 1 : durakSira / (duraklar.length + 1);
                  gostergeYaz();
                } else {
                  hata.rota++; IP.ses.cal('yanlis');
                  d.classList.remove('yanlis'); void d.offsetWidth; d.classList.add('yanlis');
                  mesajYaz(rota.ipucu ? 'İpucu: ' + rota.ipucu : 'Sıradaki yer bu değil. Bir daha dene.', 5200);
                }
              });
              tepsi.appendChild(d);
            });
          } else if (asama === 'rota') {
            tepsi.appendChild(IP.el('div', 'yonerge', 'Rota durakları: ' + IP.YER_TUTUCU + ' — Duraklar doğrulanınca burada sıralama bulmacası olacak.'));
          }
        }

        function kisiSec(k) {
          var ilk = !k.konustu;
          k.konustu = true;
          if (secili < 0) {
            balon = { k: k, metin: k.soz, omur: 5 };
            IP.ses.cal('not');
            if (ilk && kisiler.every(function (x) { return x.konustu; })) mesajYaz('Herkesle konuştun. Şimdi bir görev seç, sonra o işi bilen kişiye dokun.', 4200);
            return;
          }
          if (k.gorev === secili) {
            k.katildi = true; k.hedefX = 760 + katilan.length * 120; yapilan[secili] = true; katilan.push(k); secili = -1;
            balon = { k: k, metin: 'Ben de geliyorum!', omur: 2.2 };
            IP.ses.cal('dogru');
            var r = tuval.getBoundingClientRect();
            IP.efekt.patlat(r.left + kayX + k.x * olcek, r.top + kayY + (k.y - 120 * k.s) * olcek, 26);
            tepsiCiz(); gostergeYaz();
            if (katilan.length >= gorevler.length) {
              asama = 'ara';
              setTimeout(function () {
                if (!tuval.isConnected) return;
                tepsiCiz();
                kaplama('Müfreze kuruldu!', [mo.kazanim || '', 'Şimdi yola çıkma zamanı.'], [['Yola çık ▶', rotaBaslat]]);
              }, 1800);
            }
          } else {
            hata.eslestirme++; IP.ses.cal('yanlis');
            balon = { k: k, metin: 'Bu görev bana göre değil. ' + k.soz, omur: 4 };
          }
        }

        tuval.addEventListener('pointerdown', function (e) {
          if (asama !== 'topla') return;
          var r = tuval.getBoundingClientRect();
          var x = (e.clientX - r.left - kayX) / olcek, y = (e.clientY - r.top - kayY) / olcek, bulunan = null;
          kisiler.forEach(function (k) {
            if (!k.katildi && Math.abs(x - k.x) < 70 * k.s && y < k.y + 50 && y > k.y - 215 * k.s) bulunan = k;
          });
          if (bulunan) kisiSec(bulunan);
          else if (secili >= 0) mesajYaz('Görevi vermek için bir köylüye dokun.');
        });

        /* ----- 2. aşama: rota ----- */
        function rotaBaslat() {
          asama = 'rota'; balon = null; yolU = 0; durakSira = 0;
          hedefU = rotaHazir ? 0 : 1;
          tepsiCiz(); gostergeYaz();
          mesajYaz(rotaHazir ? (rota.yonerge || 'Durakları sırasıyla seç.') : 'Müfreze yola çıktı!', 4000);
        }
        function yolNokta(u) { return [160 + 1280 * u, 660 + Math.sin(u * 6) * 46]; }

        function bitir() {
          asama = 'bitti'; tepsi.innerHTML = ''; gostergeYaz();
          var sonuc = {
            completed: true, durationSec: Math.round(gecen),
            details: { eslestirme_hata: hata.eslestirme, rota_hata: hata.rota, rota_hazir: rotaHazir }
          };
          IP.ses.cal('zafer'); IP.efekt.patlat(window.innerWidth / 2, window.innerHeight / 2, 80);
          kaplama('Müfreze ' + (rota.bitis || 'hedefe') + ' yolunda!', [mo.kazanim || ''], [['Devam ▶', function () { kapat(); coz(sonuc); }]]);
        }

        function guncelle(dt) {
          zaman += dt;
          if (asama === 'topla' || asama === 'rota' || asama === 'ara') gecen += dt;
          if (balon) { balon.omur -= dt; if (balon.omur <= 0) balon = null; }
          kisiler.forEach(function (k) {
            if (!k.katildi) return;
            k.x += (k.hedefX - k.x) * Math.min(1, dt * 3); k.y += (SIRA_Y - k.y) * Math.min(1, dt * 3); k.s += (1 - k.s) * Math.min(1, dt * 3);
          });
          if (asama === 'rota' && yolU < hedefU) {
            yolU = Math.min(hedefU, yolU + dt / (rotaHazir ? 5 : 6));
            if (yolU >= 1) bitir();
          }
        }

        /* ----- Çizim ----- */
        function yaziSar(metin, enCok) {
          var kelimeler = metin.split(' '), satirlar = [], satir = '';
          kelimeler.forEach(function (k) {
            var dene = satir ? satir + ' ' + k : k;
            if (c.measureText(dene).width > enCok && satir) { satirlar.push(satir); satir = k; } else satir = dene;
          });
          if (satir) satirlar.push(satir);
          return satirlar;
        }
        function etiket(m, x, y, boy, zemin) {
          c.font = '700 ' + boy + 'px Metin, serif'; c.textAlign = 'center';
          var w = c.measureText(m).width + boy;
          c.fillStyle = zemin || 'rgba(241,228,198,.92)'; c.strokeStyle = '#2b2118'; c.lineWidth = 3;
          c.beginPath(); c.rect(x - w / 2, y - boy, w, boy * 1.45); c.fill(); c.stroke();
          c.fillStyle = '#2b2118'; c.fillText(m, x, y + boy * 0.08);
        }
        function daglar(karli) {
          var g = c.createLinearGradient(0, 0, 0, 900);
          g.addColorStop(0, karli ? '#9fb2c6' : '#f0c98c'); g.addColorStop(1, karli ? '#e4e8e6' : '#f6e6bd');
          c.fillStyle = g; c.fillRect(-2000, -2000, 5600, 2900);
          [[340, 80, karli ? '#f2f5f7' : '#d9b77e', 0.4], [400, 40, karli ? '#a9b4c2' : '#c29f66', 2.2]].forEach(function (d) {
            c.fillStyle = d[2]; c.beginPath(); c.moveTo(-2000, 900);
            for (var x = -2000; x <= 3600; x += 40) c.lineTo(x, d[0] + Math.sin(x * 0.006 + d[3]) * d[1] + Math.sin(x * 0.017 + d[3] * 2) * d[1] * 0.4);
            c.lineTo(3600, 900); c.closePath(); c.fill();
          });
        }

        function koyCiz() {
          daglar(true);
          c.fillStyle = '#dfe3e2'; c.fillRect(-2000, 400, 5600, 2500);
          c.strokeStyle = '#2b2118'; c.lineWidth = 5; c.beginPath(); c.moveTo(-2000, 400); c.lineTo(3600, 400); c.stroke();
          [[60, 250, 150], [390, 220, 130], [760, 260, 160], [1150, 220, 135], [1420, 200, 150]].forEach(function (e, n) {
            IP.cizim.ev(c, e[0], 402, e[1], e[2], { renk: ['#b9b2a6', '#aaa397', '#c4bdb0'][n % 3], catiRenk: '#f2f5f7' });
          });
          // köy yolu
          c.fillStyle = '#cfc8b6'; c.beginPath(); c.moveTo(-2000, 760); c.lineTo(3600, 760); c.lineTo(3600, 2900); c.lineTo(-2000, 2900); c.closePath(); c.fill();
          // köylüler (arkadakiler önce)
          kisiler.filter(function (k) { return !k.katildi; }).forEach(function (k) {
            var secilebilir = asama === 'topla', nb = 0.5 + Math.sin(zaman * 4 + k.x) * 0.5;
            c.fillStyle = 'rgba(43,33,24,.18)'; c.beginPath(); c.ellipse(k.x, k.y + 4, 50 * k.s, 10 * k.s, 0, 0, TAU); c.fill();
            if (secilebilir && secili >= 0) {
              c.strokeStyle = 'rgba(179,38,30,' + (0.4 + nb * 0.6) + ')'; c.lineWidth = 6; c.setLineDash([14, 10]);
              c.beginPath(); c.ellipse(k.x, k.y + 4, 62 * k.s, 16 * k.s, 0, 0, TAU); c.stroke(); c.setLineDash([]);
            }
            IP.cizim.kisi(c, k.x, k.y - (k.konustu ? 0 : Math.abs(Math.sin(zaman * 2 + k.x)) * 3), k.s, k.gorunus);
            if (k.konustu) etiket(k.beceri, k.x, k.y + 44, 24);
            else {
              c.fillStyle = '#b3261e'; c.strokeStyle = '#2b2118'; c.lineWidth = 4;
              c.beginPath(); c.arc(k.x + 46 * k.s, k.y - 190 * k.s - nb * 6, 22, 0, TAU); c.fill(); c.stroke();
              c.fillStyle = '#f1e4c6'; c.font = '900 28px Manset, serif'; c.textAlign = 'center'; c.fillText('?', k.x + 46 * k.s, k.y - 180 * k.s - nb * 6);
            }
          });
          // kurulan müfreze: önde kahraman ve bayrak, ardında katılanlar
          c.strokeStyle = '#2b2118'; c.lineWidth = 9; c.lineCap = 'round'; c.beginPath(); c.moveTo(560, SIRA_Y - 60); c.lineTo(560, SIRA_Y - 330); c.stroke();
          IP.cizim.bayrak(c, 564, SIRA_Y - 326, 130, 86, zaman);
          IP.cizim.kisi(c, 620, SIRA_Y, 1.05, FATMA);
          katilan.forEach(function (k) { IP.cizim.kisi(c, k.x, k.y, k.s, k.gorunus); });
          // konuşma balonu
          if (balon) {
            var k = balon.k, by = k.y - 205 * k.s;
            c.font = '600 28px Metin, serif';
            var satirlar = yaziSar(balon.metin, 400), bw = 0;
            satirlar.forEach(function (st) { bw = Math.max(bw, c.measureText(st).width); });
            bw += 36; var bh = satirlar.length * 34 + 22, bx = Math.max(20, Math.min(1580 - bw, k.x - bw / 2));
            by = Math.max(bh + 30, by);
            c.fillStyle = '#fff6dc'; c.strokeStyle = '#2b2118'; c.lineWidth = 4;
            c.beginPath(); c.rect(bx, by - bh - 18, bw, bh); c.fill(); c.stroke();
            c.beginPath(); c.moveTo(k.x - 14, by - 19); c.lineTo(k.x, by); c.lineTo(k.x + 14, by - 19); c.fill(); c.stroke();
            c.fillStyle = '#2b2118'; c.textAlign = 'left';
            satirlar.forEach(function (st, n) { c.fillText(st, bx + 18, by - bh + 16 + n * 34); });
          }
        }

        function rotaCiz() {
          daglar(false);
          c.fillStyle = '#cbad74'; c.fillRect(-2000, 440, 5600, 2500);
          var u, p, n;
          c.lineCap = 'round'; c.lineJoin = 'round';
          [['#5b4630', 44], ['#efdcae', 32]].forEach(function (k) {
            c.strokeStyle = k[0]; c.lineWidth = k[1]; c.beginPath();
            for (u = -0.4; u <= 1.4; u += 0.02) { p = yolNokta(u); c.lineTo(p[0], p[1]); }
            c.stroke();
          });
          // başlangıç ve bitiş
          p = yolNokta(0);
          IP.cizim.ev(c, p[0] - 150, p[1] - 40, 130, 90, { renk: '#b9b2a6', catiRenk: '#f2f5f7' });
          IP.cizim.ev(c, p[0] - 30, p[1] - 60, 110, 80, { renk: '#c4bdb0', catiRenk: '#f2f5f7' });
          etiket(rota.baslangic || '', p[0] - 40, p[1] - 200, 34);
          p = yolNokta(1);
          c.strokeStyle = '#2b2118'; c.lineWidth = 10; c.beginPath(); c.moveTo(p[0] + 40, p[1] - 30); c.lineTo(p[0] + 40, p[1] - 300); c.stroke();
          IP.cizim.bayrak(c, p[0] + 44, p[1] - 296, 150, 100, zaman);
          etiket(rota.bitis || '', p[0] + 20, p[1] - 330, 34);
          // duraklar
          if (rotaHazir) {
            duraklar.forEach(function (ad, i) {
              p = yolNokta((i + 1) / (duraklar.length + 1));
              var dolu = i < durakSira;
              c.fillStyle = dolu ? '#e0a83a' : 'rgba(255,255,255,.5)'; c.strokeStyle = '#2b2118'; c.lineWidth = 5;
              if (!dolu) c.setLineDash([12, 9]);
              c.beginPath(); c.arc(p[0], p[1], 36, 0, TAU); c.fill(); c.stroke(); c.setLineDash([]);
              c.fillStyle = '#2b2118'; c.font = '900 34px Manset, serif'; c.textAlign = 'center'; c.fillText(String(i + 1), p[0], p[1] + 12);
              if (dolu) etiket(ad, p[0], p[1] + 84, 28);
            });
          }
          // yürüyen müfreze
          var yuruyor = yolU < hedefU;
          for (n = katilan.length - 1; n >= -1; n--) {
            p = yolNokta(yolU - (n + 1) * 0.045);
            var zip = yuruyor ? Math.abs(Math.sin(zaman * 6 + n)) * 6 : 0;
            if (n < 0) {
              c.strokeStyle = '#2b2118'; c.lineWidth = 7; c.beginPath(); c.moveTo(p[0] + 26, p[1] - 50 - zip); c.lineTo(p[0] + 26, p[1] - 230 - zip); c.stroke();
              IP.cizim.bayrak(c, p[0] + 29, p[1] - 228 - zip, 84, 56, zaman);
              IP.cizim.kisi(c, p[0], p[1] - zip, 0.72, FATMA);
            } else IP.cizim.kisi(c, p[0], p[1] - zip, 0.62, katilan[n].gorunus);
          }
        }

        function ciz() {
          c.setTransform(dpr, 0, 0, dpr, 0, 0);
          c.clearRect(0, 0, W, H);
          c.setTransform(dpr * olcek, 0, 0, dpr * olcek, dpr * kayX, dpr * kayY);
          if (asama === 'rota' || asama === 'bitti') rotaCiz(); else koyCiz();
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
        function kapat() {
          calisiyor = false; clearTimeout(mesajYaz.z);
          window.removeEventListener('resize', boyutla);
          IP.oyunlar.mufreze.durum = null;
        }
        IP.temizlikEkle(kapat);
        // Otomatik oynatma testi köylülerin ekrandaki yerini buradan okur.
        IP.oyunlar.mufreze.durum = function () {
          var r = tuval.getBoundingClientRect();
          return {
            asama: asama, rotaHazir: rotaHazir, hata: hata,
            kisiler: kisiler.map(function (k) { return { gorev: k.gorev, katildi: k.katildi, x: r.left + kayX + k.x * olcek, y: r.top + kayY + (k.y - 90 * k.s) * olcek }; })
          };
        };
        requestAnimationFrame(kare);
        gostergeYaz(); tepsiCiz();

        kaplama(mo.ad || 'Mini oyun', [
          mo.aciklama || '',
          '• Köylülere dokun ve ne iş bildiklerini öğren.',
          '• Aşağıdan bir görev seç, sonra o işi bilen köylüye dokun.',
          '• ' + gorevler.length + ' görevi de doğru kişiye ver: müfreze kurulsun.'
        ], [['Başla ▶', function () { asama = 'topla'; tepsiCiz(); gostergeYaz(); mesajYaz('Önce köylülere dokunup onlarla konuş.', 4000); }]]);
      });
    }
  };
})();
