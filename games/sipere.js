/* Mini oyun: "Sipere Ulaştır"
   Yandan görünüşlü koşu oyunu. Kahraman gece vakti damların üstünden koşarak yükünü sipere taşır.
   Kısa dokunuş = zıpla, basılı tut = eğil ve saklan. Devriye fenerinin ışığına yakalanmamak gerekir.
   Cezası yok: ışığa yakalanan ya da sokağa düşen oyuncu biraz geriden yeniden dener.
   Ortak arayüz: start(container, heroData) → Promise<{completed, durationSec, details}> */
(function () {
  'use strict';
  var IP = window.IP, TAU = Math.PI * 2;

  // Oyun ayarları (pilot testten sonra buradan değiştirilebilir).
  // hiz: koşu hızı, bosluk: damlar arası açıklık (en az, en çok), per: fenerin bir gidiş-gelişi (sn),
  // parcalar: yolun sırası (bos = düz dam, engel = sandık, cift = iki sandık, fener = devriye feneri).
  var AYAR = [
    { hiz: 160, bosluk: [55, 70], per: 5, parcalar: ['bos', 'engel', 'fener', 'bos', 'engel', 'fener', 'engel'] },
    { hiz: 175, bosluk: [60, 78], per: 4.5, parcalar: ['engel', 'fener', 'bos', 'cift', 'fener', 'engel', 'fener', 'bos', 'engel'] },
    { hiz: 190, bosluk: [65, 85], per: 4, parcalar: ['fener', 'cift', 'engel', 'fener', 'bos', 'cift', 'fener', 'engel', 'fener', 'cift', 'engel'] }
  ];
  var ZIPLAMA = 520, YERCEKIMI = 1500;  // zıplama gücü ve düşüş hızı
  var DOKUNUS_SURESI = 0.22;            // bundan kısa dokunuş "zıpla", uzunu "saklan" sayılır (sn)
  var DAM_Y = 430;                      // damların üst çizgisi (600 birimlik sanal ekranda)

  // Bir turun yolunu kurar: damlar, sandıklar, fenerler ve sondaki siper.
  function yolKur(tur) {
    var rs = IP.tohumluRastgele(100 + tur * 7), a = AYAR[tur];
    var damlar = [], engeller = [], fenerler = [], x = -400;
    function dam(uzunluk) {
      var d = { x0: x, x1: x + uzunluk, sus: rs() };
      damlar.push(d);
      x += uzunluk + a.bosluk[0] + rs() * (a.bosluk[1] - a.bosluk[0]);
      return d;
    }
    dam(900);
    a.parcalar.forEach(function (tip) {
      var d;
      if (tip === 'engel') {
        d = dam(440 + rs() * 80);
        engeller.push({ x: (d.x0 + d.x1) / 2 + (rs() - 0.5) * 60, w: 26, h: 32 });
      } else if (tip === 'cift') {
        d = dam(640 + rs() * 60);
        engeller.push({ x: d.x0 + 200, w: 26, h: 32 }); engeller.push({ x: d.x0 + 440, w: 26, h: 32 });
      } else if (tip === 'fener') {
        var A = 100 + rs() * 30;
        d = dam(2 * A + 90 + 360);
        fenerler.push({ orta: (d.x0 + d.x1) / 2, A: A, yari: 45, per: a.per, faz: rs() * TAU, isik: 0, yakalama: 0 });
      } else d = dam(260 + rs() * 120);
    });
    var son = dam(700);
    return { damlar: damlar, engeller: engeller, fenerler: fenerler, siperX: son.x0 + 380, bitis: son.x0 + 330, hiz: a.hiz };
  }

  IP.oyunlar.sipere = {
    start: function (container, heroData) {
      return new Promise(function (coz) {
        var mo = heroData.mini_oyun || {};
        var TUR = Math.max(1, Math.min(AYAR.length, mo.tur_sayisi || 3));
        var SURE = mo.tur_sure_sn || 90;
        var yukler = mo.yukler || [];
        var rs = IP.tohumluRastgele(53), yildizlar = [], i;
        for (i = 0; i < 80; i++) yildizlar.push([rs(), rs() * 0.6, rs() * 6]);

        var faz = 'giris', tur = 0, yol = yolKur(0), kalan = SURE, gecen = 0, zaman = 0;
        var o = { x: 0, h: 0, vy: 0, yerde: true, egik: false, sersem: 0, sonDam: 0 };
        var basili = false, basZaman = 0, zipIstek = 0, havaPayi = 0, parlama = 0;
        var sayac = { gorulme: 0, dusme: 0, takilma: 0 };

        /* ----- Ekran düzeni ----- */
        container.classList.add('oyun');
        var ust = IP.el('div', 'oyun-ust');
        ust.appendChild(IP.el('h2', null, mo.ad || 'Mini oyun'));
        var gosterge = IP.el('div', 'oyun-gosterge');
        var turYazi = IP.el('span', 'gosterge'), sureYazi = IP.el('span', 'gosterge');
        gosterge.appendChild(turYazi); gosterge.appendChild(sureYazi); ust.appendChild(gosterge);
        var alan = IP.el('div', 'oyun-alan');
        var tuval = IP.el('canvas'), mesaj = IP.el('div', 'oyun-mesaj');
        alan.appendChild(tuval); alan.appendChild(mesaj);
        container.appendChild(ust); container.appendChild(alan);
        container.appendChild(IP.el('div', 'yonerge', 'Kısa dokun: zıpla · Basılı tut: eğil ve saklan'));
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
          mesajYaz.z = setTimeout(function () { mesaj.classList.remove('goster'); }, sure || 2600);
        }
        function gostergeYaz() {
          turYazi.textContent = 'Siper ' + Math.min(tur + 1, TUR) + ' / ' + TUR;
          sureYazi.textContent = '⏱ ' + Math.max(0, Math.ceil(kalan)) + ' sn';
          sureYazi.classList.toggle('az', kalan < 15);
        }
        function kaplama(baslik, satirlar, dugmeler) {
          var k = IP.el('div', 'oyun-kaplama'), kutu = IP.el('div', 'kagit oyun-kutu');
          kutu.appendChild(IP.el('h2', null, baslik));
          satirlar.forEach(function (st) { if (st) kutu.appendChild(IP.el('p', null, st)); });
          var sira = IP.el('div', 'dugme-sira');
          dugmeler.forEach(function (d) { sira.appendChild(IP.dugme(d[0], d[2], function () { k.remove(); d[1](); })); });
          kutu.appendChild(sira); k.appendChild(kutu); alan.appendChild(k);
        }

        function turBaslat() {
          yol = yolKur(tur);
          o = { x: 0, h: 0, vy: 0, yerde: true, egik: false, sersem: 0, sonDam: 0 };
          kalan = SURE; basili = false; zipIstek = 0; faz = 'kosu';
          gostergeYaz();
          mesajYaz(yukler[tur] ? 'Yükün: ' + yukler[tur] + '. Sipere ulaştır!' : 'Yükünü sipere ulaştır!', 3200);
        }

        function turBitti() {
          IP.ses.cal('dogru'); IP.efekt.patlat(window.innerWidth / 2, window.innerHeight / 2, 40);
          tur++;
          if (tur >= TUR) { bitir(true); return; }
          faz = 'ara';
          kaplama(tur + '. sipere ulaştın!', [
            yukler[tur - 1] ? 'Ulaştırdığın yük: ' + yukler[tur - 1] : '',
            'Sıradaki yol daha uzun, fenerler daha hızlı.'
          ], [['Sonraki siper ▶', turBaslat]]);
        }

        function bitir(tamam) {
          faz = 'bitti';
          var sonuc = {
            completed: tamam, durationSec: Math.round(gecen),
            details: { tur: Math.min(tur, TUR), gorulme: sayac.gorulme, dusme: sayac.dusme, takilma: sayac.takilma }
          };
          if (tamam) {
            IP.ses.cal('zafer'); IP.efekt.patlat(window.innerWidth / 2, window.innerHeight / 2, 80);
            kaplama('Yükler siperlere ulaştı!', [mo.kazanim || '', 'Fenere yakalanma: ' + sayac.gorulme], [['Devam ▶', function () { kapat(); coz(sonuc); }]]);
          } else {
            kaplama('Süre doldu', [
              'Üzülme, cezası yok. Bu siperi baştan deneyebilirsin.',
              'İpucu: Işık yaklaşınca basılı tut ve bekle. Işık uzaklaşınca bırak.'
            ], [
              ['Tekrar dene', turBaslat],
              ['Yıldızsız devam et', function () { kapat(); coz(sonuc); }, 'ikincil']
            ]);
          }
        }

        /* ----- Dokunma ve klavye ----- */
        function bas() { if (!basili) { basili = true; basZaman = zaman; } }
        function birak(zipla) {
          if (!basili) return;
          basili = false;
          if (zipla && zaman - basZaman < DOKUNUS_SURESI) zipIstek = 0.18;
        }
        tuval.addEventListener('pointerdown', function (e) {
          e.preventDefault();
          try { tuval.setPointerCapture(e.pointerId); } catch (hata) { /* bazı tarayıcılarda yok */ }
          bas();
        });
        tuval.addEventListener('pointerup', function () { birak(true); });
        tuval.addEventListener('pointercancel', function () { birak(false); });
        function tusBas(e) {
          if (e.repeat) return;
          if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'ArrowDown') { e.preventDefault(); bas(); }
        }
        function tusBirak(e) {
          if (e.code === 'Space' || e.code === 'ArrowUp') birak(true);
          else if (e.code === 'ArrowDown') birak(false);
        }
        window.addEventListener('keydown', tusBas);
        window.addEventListener('keyup', tusBirak);

        function damBul(x) {
          for (var d = 0; d < yol.damlar.length; d++) if (x >= yol.damlar[d].x0 && x <= yol.damlar[d].x1) return d;
          return -1;
        }
        function fenerX(f) { return f.orta + f.A * Math.sin(zaman * TAU / f.per + f.faz); }

        /* ----- Oyun mantığı ----- */
        function guncelle(dt) {
          zaman += dt;
          if (parlama > 0) parlama -= dt;
          if (faz !== 'kosu') return;
          gecen += dt; kalan -= dt;
          if (o.sersem > 0) o.sersem -= dt;
          if (zipIstek > 0) zipIstek -= dt;
          if (havaPayi > 0) havaPayi -= dt;

          o.egik = basili && o.yerde;
          if (zipIstek > 0 && (o.yerde || havaPayi > 0) && o.sersem <= 0) {
            o.vy = ZIPLAMA; o.yerde = false; zipIstek = 0; havaPayi = 0; IP.ses.cal('zipla');
          }
          if (!o.egik && o.sersem <= 0 && o.h > -16) o.x += yol.hiz * dt;

          var d = damBul(o.x);
          if (o.yerde) {
            if (d < 0) { o.yerde = false; havaPayi = 0.12; } else o.sonDam = d;
          } else {
            var oncekiH = o.h;
            o.h += o.vy * dt; o.vy -= YERCEKIMI * dt;
            // bir önceki karede damın üstündeyse ve şimdi dam hizasına indiyse dama basar
            if (d >= 0 && oncekiH >= 0 && o.h <= 0 && o.vy <= 0) { o.h = 0; o.vy = 0; o.yerde = true; o.sonDam = d; }
            else if (o.h < -170) {
              // dar sokağa düştü: son damın kenarına geri döner
              sayac.dusme++; IP.ses.cal('engel');
              o.x = yol.damlar[o.sonDam].x1 - 130; o.h = 0; o.vy = 0; o.yerde = true; o.sersem = 0.7;
              mesajYaz('Dar sokağa düştün! Damın kenarına gelince kısa dokun.');
            }
          }

          // sandıklar
          yol.engeller.forEach(function (e) {
            if (o.x + 10 > e.x - e.w / 2 && o.x - 10 < e.x + e.w / 2 && o.h < e.h - 4 && o.h > -16) {
              sayac.takilma++; IP.ses.cal('engel');
              o.x = e.x - e.w / 2 - 90; o.h = 0; o.vy = 0; o.yerde = true; o.sersem = 0.6;
              mesajYaz('Sandığa takıldın! Yaklaşınca kısa dokun ve üstünden atla.');
            }
          });

          // devriye fenerleri
          yol.fenerler.forEach(function (f) {
            f.isik = fenerX(f);
            if (!o.egik && o.sersem <= 0 && Math.abs(o.x - f.isik) < f.yari + 6) {
              sayac.gorulme++; f.yakalama++; parlama = 0.5; IP.ses.cal('yanlis');
              o.x = f.orta - f.A - f.yari - 80; o.h = 0; o.vy = 0; o.yerde = true; o.sersem = 0.9;
              mesajYaz(f.yakalama > 1 ? 'İpucu: Işık sana yaklaşırken basılı tut, uzaklaşınca bırak.' : 'Fener seni gördü! Işık gelince basılı tut ve saklan.', 3400);
            }
          });

          gostergeYaz();
          if (o.x >= yol.bitis && o.yerde) turBitti();
          else if (kalan <= 0) bitir(false);
        }

        /* ----- Çizim ----- */
        function ciz() {
          var u = Math.min(H / 600, W / 900), GW = W / u, GH = H / u, oy = (GH - 600) * 0.6;
          var kam = o.x - GW * 0.28, alt = 600 + (GH - 600) * 0.4 + 4;
          c.setTransform(dpr * u, 0, 0, dpr * u, 0, 0);

          // gece göğü, yıldızlar, ay
          var g = c.createLinearGradient(0, 0, 0, GH);
          g.addColorStop(0, '#0b1330'); g.addColorStop(1, '#3b4068');
          c.fillStyle = g; c.fillRect(0, 0, GW, GH);
          yildizlar.forEach(function (y) {
            c.fillStyle = 'rgba(255,250,220,' + (0.4 + Math.sin(zaman * 2 + y[2]) * 0.3) + ')';
            c.beginPath(); c.arc(y[0] * GW, y[1] * GH, 1.4, 0, TAU); c.fill();
          });
          c.fillStyle = '#f6efcf'; c.beginPath(); c.arc(GW * 0.82, GH * 0.16, 30, 0, TAU); c.fill();
          c.fillStyle = '#101a3c'; c.beginPath(); c.arc(GW * 0.82 - 13, GH * 0.16 - 6, 27, 0, TAU); c.fill();

          c.save(); c.translate(0, oy);
          // uzak tepeler ve kale (yavaş kayar)
          var px;
          c.fillStyle = '#18203f'; c.beginPath(); c.moveTo(0, alt);
          for (px = 0; px <= GW + 20; px += 20) c.lineTo(px, 330 + Math.sin((px + kam * 0.08) * 0.008) * 40 + Math.sin((px + kam * 0.08) * 0.021) * 16);
          c.lineTo(GW + 20, alt); c.closePath(); c.fill();
          // uzak evler (orta hızda kayar)
          var ilk = Math.floor(kam * 0.3 / 90) - 1;
          for (i = ilk; i < ilk + GW / 90 + 3; i++) {
            var er = IP.tohumluRastgele(i * 13 + 5), ex = i * 90 - kam * 0.3, eh = 50 + er() * 70;
            c.fillStyle = '#1d2446'; c.fillRect(ex, 440 - eh, 80, eh + 200);
            if (er() > 0.5) { c.fillStyle = 'rgba(255,215,106,.55)'; c.fillRect(ex + 16 + er() * 40, 440 - eh + 14, 10, 13); }
          }

          c.translate(-kam, 0);
          var sol = kam - 100, sag = kam + GW + 100;

          // devriye kuleleri ve fener ışıkları (damların arkasında)
          yol.fenerler.forEach(function (f) {
            if (f.orta + 400 < sol || f.orta - 400 > sag) return;
            var ix = faz === 'kosu' ? f.isik || fenerX(f) : fenerX(f);
            c.fillStyle = '#262a45'; c.strokeStyle = '#0a0d1c'; c.lineWidth = 3;
            c.beginPath(); c.rect(f.orta - 34, DAM_Y - 150, 68, 150); c.fill(); c.stroke();
            c.beginPath(); c.rect(f.orta - 42, DAM_Y - 162, 84, 14); c.fill(); c.stroke();
            IP.cizim.kisi(c, f.orta - 6, DAM_Y - 162, 0.42, { siluet: '#14161f', bas: 'kep' });
            var fx = f.orta + 16, fy = DAM_Y - 196;
            var ig = c.createLinearGradient(fx, fy, ix, DAM_Y);
            ig.addColorStop(0, 'rgba(255,225,130,.75)'); ig.addColorStop(1, 'rgba(255,225,130,.22)');
            c.fillStyle = ig; c.beginPath(); c.moveTo(fx, fy); c.lineTo(ix - f.yari, DAM_Y + 4); c.lineTo(ix + f.yari, DAM_Y + 4); c.closePath(); c.fill();
            c.fillStyle = '#fff3b0'; c.beginPath(); c.arc(fx, fy, 7, 0, TAU); c.fill();
          });

          // damlar
          yol.damlar.forEach(function (d) {
            if (d.x1 < sol || d.x0 > sag) return;
            c.fillStyle = '#3a3550'; c.strokeStyle = '#0a0d1c'; c.lineWidth = 3;
            c.beginPath(); c.rect(d.x0, DAM_Y, d.x1 - d.x0, alt - DAM_Y); c.fill(); c.stroke();
            c.fillStyle = '#6a6282'; c.beginPath(); c.rect(d.x0 - 5, DAM_Y, d.x1 - d.x0 + 10, 12); c.fill(); c.stroke();
            var pr = IP.tohumluRastgele(Math.floor(d.sus * 9999));
            for (var wx = d.x0 + 30; wx < d.x1 - 40; wx += 74) {
              var yanik = pr() > 0.6;
              c.fillStyle = yanik ? '#ffd76a' : '#1c1f38'; c.beginPath(); c.rect(wx, DAM_Y + 44, 22, 30); c.fill(); c.stroke();
            }
          });
          // fener bölgelerindeki alçak korkuluk: eğilen oyuncu bunun ardına saklanır
          function korkuluk() {
            yol.fenerler.forEach(function (f) {
              var k0 = f.orta - f.A - f.yari - 20, k1 = f.orta + f.A + f.yari + 20;
              if (k1 < sol || k0 > sag) return;
              c.fillStyle = '#4d4868'; c.strokeStyle = '#0a0d1c'; c.lineWidth = 3;
              for (var kx = k0; kx < k1; kx += 44) { c.beginPath(); c.rect(kx, DAM_Y - 24, 38, 24); c.fill(); c.stroke(); }
              // ışığın dama düştüğü yer
              var ix = faz === 'kosu' ? f.isik || fenerX(f) : fenerX(f);
              c.fillStyle = 'rgba(255,230,140,.5)'; c.beginPath(); c.ellipse(ix, DAM_Y + 3, f.yari, 7, 0, 0, TAU); c.fill();
            });
          }

          // sandıklar
          yol.engeller.forEach(function (e) {
            if (e.x < sol || e.x > sag) return;
            c.fillStyle = '#8a6a45'; c.strokeStyle = '#0a0d1c'; c.lineWidth = 3;
            c.beginPath(); c.rect(e.x - e.w / 2, DAM_Y - e.h, e.w, e.h); c.fill(); c.stroke();
            c.beginPath(); c.moveTo(e.x - e.w / 2, DAM_Y - e.h); c.lineTo(e.x + e.w / 2, DAM_Y); c.moveTo(e.x + e.w / 2, DAM_Y - e.h); c.lineTo(e.x - e.w / 2, DAM_Y); c.stroke();
          });

          // sondaki siper
          if (yol.siperX - 200 < sag) {
            var sg = c.createRadialGradient(yol.siperX + 60, DAM_Y - 40, 5, yol.siperX + 60, DAM_Y - 40, 190);
            sg.addColorStop(0, 'rgba(255,215,106,.55)'); sg.addColorStop(1, 'rgba(255,215,106,0)');
            c.fillStyle = sg; c.fillRect(yol.siperX - 140, DAM_Y - 240, 400, 250);
            IP.cizim.kisi(c, yol.siperX + 70, DAM_Y - 8, 0.42, { bas: 'fes', govde: '#6b5a4a', yon: -1, kol: 'yukari' });
            IP.cizim.kisi(c, yol.siperX + 125, DAM_Y - 8, 0.42, { bas: 'sarik', govde: '#55657a', yon: -1 });
            c.save(); c.translate(yol.siperX, DAM_Y); c.scale(0.45, 0.45); IP.cizim.siper(c, 0, 0, 5, 3); c.restore();
            yazi(IP.buyukHarf('Siper'), yol.siperX + 80, DAM_Y - 110, 20);
          }

          // ilk turda öğretici yazılar
          if (tur === 0) {
            yol.damlar.forEach(function (d, n) { if (n < yol.damlar.length - 1 && d.x1 > sol && d.x1 < sag) yazi('kısa dokun: zıpla', d.x1 - 20, DAM_Y - 120, 15); });
            yol.fenerler.forEach(function (f) { var fx0 = f.orta - f.A - f.yari - 60; if (fx0 > sol && fx0 < sag) yazi('ışık gelince basılı tut', fx0, DAM_Y - 60, 15); });
          }

          // oyuncu
          if (!(o.sersem > 0 && Math.floor(zaman * 12) % 2)) {
            c.fillStyle = 'rgba(0,0,0,.3)'; c.beginPath(); c.ellipse(o.x, DAM_Y + 3, 20, 4, 0, 0, TAU); c.fill();
            var kosuyor = faz === 'kosu' && !o.egik && o.sersem <= 0;
            IP.cizim.kosan(c, o.x, DAM_Y - Math.max(o.h, -170) - (kosuyor && o.yerde ? Math.abs(Math.sin(zaman * 13)) * 3 : 0), 0.38,
              kosuyor ? zaman : 0, { yuk: true, egik: o.egik, havada: !o.yerde });
          }
          korkuluk();
          c.restore();

          // ışığa yakalanınca kısa parlama
          if (parlama > 0) { c.fillStyle = 'rgba(255,235,150,' + parlama + ')'; c.fillRect(0, 0, GW, GH); }

          // yol çubuğu: sipere ne kadar kaldı
          var oran = Math.max(0, Math.min(1, o.x / yol.bitis)), cx0 = GW * 0.2, cw = GW * 0.6;
          c.fillStyle = 'rgba(10,8,20,.6)'; c.fillRect(cx0 - 4, 14, cw + 8, 14);
          c.fillStyle = '#e0a83a'; c.fillRect(cx0, 18, cw * oran, 6);
          c.fillStyle = '#f1e4c6'; c.beginPath(); c.arc(cx0 + cw * oran, 21, 8, 0, TAU); c.fill();
          c.fillStyle = '#b3261e'; c.fillRect(cx0 + cw - 3, 10, 6, 22);

          function yazi(m, x, y, boy) {
            c.font = '900 ' + boy + 'px Manset, serif'; c.textAlign = 'center';
            c.lineWidth = boy * 0.3; c.strokeStyle = '#0a0d1c'; c.lineJoin = 'round'; c.strokeText(m, x, y);
            c.fillStyle = '#ffe9a6'; c.fillText(m, x, y);
          }
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
          window.removeEventListener('keydown', tusBas); window.removeEventListener('keyup', tusBirak);
          IP.oyunlar.sipere.durum = null;
        }
        IP.temizlikEkle(kapat);
        // Otomatik oynatma testi oyunun o anki durumunu buradan okur.
        IP.oyunlar.sipere.durum = function () { return { faz: faz, tur: tur, oyuncu: o, yol: yol, zaman: zaman, sayac: sayac }; };
        requestAnimationFrame(kare);
        gostergeYaz();

        kaplama(mo.ad || 'Mini oyun', [
          mo.aciklama || '',
          '• Kısa dokun: zıpla. Dam boşluklarının ve sandıkların üstünden atla.',
          '• Basılı tut: eğil ve saklan. Fenerin ışığı üstünden geçene kadar bekle.',
          '• ' + TUR + ' sipere de yükünü ulaştır. Her siper için ' + SURE + ' saniyen var.'
        ], [['Başla ▶', turBaslat]]);
      });
    }
  };
})();
