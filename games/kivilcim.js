/* Mini oyun: "Kıvılcımı Yay"
   Haberci, komşu mahallelere dokunularak ilerletilir. Uğradığı her mahallede direniş ışığı yanar.
   Devriye gölgeleri bazı yolları birkaç saniyeliğine kapatır: beklemek ya da dolaşmak gerekir.
   Ortak arayüz: start(container, heroData) → Promise<{completed, durationSec, details}> */
(function () {
  'use strict';
  var IP = window.IP, TAU = Math.PI * 2;

  // Mahallelerin tuvaldeki yerleri (0..1) ve aralarındaki yollar.
  var DUGUMLER = [[0.10, 0.52], [0.27, 0.24], [0.27, 0.80], [0.45, 0.50], [0.55, 0.17], [0.58, 0.84], [0.73, 0.43], [0.89, 0.20], [0.89, 0.76]];
  var YOLLAR = [[0, 1], [0, 2], [0, 3], [1, 3], [1, 4], [2, 3], [2, 5], [3, 4], [3, 5], [3, 6], [4, 6], [4, 7], [5, 6], [5, 8], [6, 7], [6, 8]];

  IP.oyunlar.kivilcim = {
    start: function (container, heroData) {
      return new Promise(function (coz) {
        var mo = heroData.mini_oyun || {};
        var n = Math.max(4, Math.min(DUGUMLER.length, mo.mahalle_sayisi || 9));
        var SURE = mo.sure_sn || 90;
        var rs = IP.tohumluRastgele(17);

        var dugumler = DUGUMLER.slice(0, n).map(function (p) {
          var evler = [];
          for (var i = 0; i < 5; i++) evler.push({ a: i * TAU / 5 + rs() * 0.6, u: 0.55 + rs() * 0.45, b: 0.8 + rs() * 0.4 });
          return { x: p[0], y: p[1], yandi: false, parlama: 0, evler: evler };
        });
        var yollar = YOLLAR.filter(function (y) { return y[0] < n && y[1] < n; }).map(function (y) { return { a: y[0], b: y[1], uyari: 0, kapali: 0, faz: 0 }; });
        var devriyeler = [{ bekle: 3.5, yol: null }, { bekle: 7, yol: null }];
        var konum = 0, hareket = null, kalan = SURE, durum = 'giris', gecen = 0, engel = 0, sarsinti = 0, ipucu = 0;
        var parcalar = [], yildizlar = [];
        for (var s = 0; s < 70; s++) yildizlar.push([rs(), rs(), rs() * 6]);

        /* ----- Ekran düzeni ----- */
        container.classList.add('oyun');
        var ust = IP.el('div', 'oyun-ust');
        ust.appendChild(IP.el('h2', null, mo.ad || 'Mini oyun'));
        var gosterge = IP.el('div', 'oyun-gosterge');
        var isikYazi = IP.el('span', 'gosterge isik');
        var sureYazi = IP.el('span', 'gosterge sure');
        gosterge.appendChild(isikYazi); gosterge.appendChild(sureYazi);
        ust.appendChild(gosterge);
        var alan = IP.el('div', 'oyun-alan');
        var tuval = IP.el('canvas');
        var mesaj = IP.el('div', 'oyun-mesaj');
        alan.appendChild(tuval); alan.appendChild(mesaj);
        container.appendChild(ust); container.appendChild(alan);
        var c = tuval.getContext('2d'), W = 0, H = 0, dpr = 1;

        function boyutla() {
          var k = alan.getBoundingClientRect();
          dpr = Math.min(window.devicePixelRatio || 1, 2);
          W = k.width; H = k.height;
          tuval.width = Math.max(2, Math.round(W * dpr)); tuval.height = Math.max(2, Math.round(H * dpr));
        }
        boyutla();
        window.addEventListener('resize', boyutla);

        function mesajYaz(m, sure) {
          mesaj.textContent = m; mesaj.classList.add('goster');
          clearTimeout(mesajYaz.z);
          mesajYaz.z = setTimeout(function () { mesaj.classList.remove('goster'); }, sure || 2200);
        }
        function gostergeYaz() {
          var yanan = dugumler.filter(function (d) { return d.yandi; }).length;
          isikYazi.textContent = '🕯 ' + yanan + ' / ' + n;
          sureYazi.textContent = '⏱ ' + Math.max(0, Math.ceil(kalan)) + ' sn';
          sureYazi.classList.toggle('az', kalan < 15);
        }
        function kaplama(baslik, satirlar, dugmeler) {
          var k = IP.el('div', 'oyun-kaplama');
          var kutu = IP.el('div', 'kagit oyun-kutu');
          kutu.appendChild(IP.el('h2', null, baslik));
          satirlar.forEach(function (st) { kutu.appendChild(IP.el('p', null, st)); });
          var sira = IP.el('div', 'dugme-sira');
          dugmeler.forEach(function (d) { sira.appendChild(IP.dugme(d[0], d[2], function () { k.remove(); d[1](); })); });
          kutu.appendChild(sira); k.appendChild(kutu); alan.appendChild(k);
        }

        function yolBul(a, b) {
          return yollar.filter(function (y) { return (y.a === a && y.b === b) || (y.a === b && y.b === a); })[0];
        }
        function yak(i, sessiz) {
          var d = dugumler[i];
          if (d.yandi) return;
          d.yandi = true; d.parlama = 1;
          if (!sessiz) IP.ses.cal('isik');
          for (var p = 0; p < 26; p++) {
            var a = Math.random() * TAU, h = 40 + Math.random() * 160;
            parcalar.push({ x: d.x * W, y: d.y * H, vx: Math.cos(a) * h, vy: Math.sin(a) * h - 60, omur: 0.6 + Math.random() * 0.7 });
          }
          gostergeYaz();
        }

        function baslat() {
          dugumler.forEach(function (d) { d.yandi = false; d.parlama = 0; });
          yollar.forEach(function (y) { y.uyari = 0; y.kapali = 0; });
          devriyeler[0].bekle = 3.5; devriyeler[1].bekle = 7;
          konum = 0; hareket = null; kalan = SURE; gecen = 0; engel = 0;
          yak(0, true);
          durum = 'oyun';
          gostergeYaz();
          mesajYaz('Parlayan komşu mahallelere dokun!', 3000);
        }

        function bitir(tamam) {
          durum = 'bitti';
          var sonuc = { completed: tamam, durationSec: Math.round(gecen), details: { yanan: dugumler.filter(function (d) { return d.yandi; }).length, toplam: n, kapaliYolaTakilma: engel } };
          if (tamam) {
            IP.ses.cal('zafer');
            IP.efekt.patlat(window.innerWidth / 2, window.innerHeight / 2, 80);
            setTimeout(function () {
              kaplama('Bütün mahalleler aydınlandı!', [mo.kazanim || '', 'Süre: ' + sonuc.durationSec + ' sn'], [['Devam ▶', function () { kapat(); coz(sonuc); }]]);
            }, 1400);
          } else {
            kaplama('Süre doldu', ['Üzülme, cezası yok. İstersen tekrar deneyip yıldızı kazanabilirsin.'], [
              ['Tekrar dene', baslat],
              ['Yıldızsız devam et', function () { kapat(); coz(sonuc); }, 'ikincil']
            ]);
          }
        }

        /* ----- Dokunma ----- */
        tuval.addEventListener('pointerdown', function (e) {
          if (durum !== 'oyun' || hareket) return;
          var k = tuval.getBoundingClientRect(), x = e.clientX - k.left, y = e.clientY - k.top;
          var yaricap = Math.max(38, Math.min(W, H) * 0.11), secilen = -1, en = yaricap;
          dugumler.forEach(function (d, i) {
            var u = Math.hypot(d.x * W - x, d.y * H - y);
            if (u < en) { en = u; secilen = i; }
          });
          if (secilen < 0 || secilen === konum) return;
          var yol = yolBul(konum, secilen);
          if (!yol) { mesajYaz('Oraya doğrudan yol yok. Parlayan komşu mahalleye dokun.'); ipucu = 1.5; IP.ses.cal('tik'); return; }
          if (yol.kapali > 0) { engel++; sarsinti = 0.35; IP.ses.cal('engel'); mesajYaz('Yol kapalı! Bekle ya da başka yoldan dolaş.'); return; }
          hareket = { a: konum, b: secilen, t: 0, yol: yol };
          IP.ses.cal('kivilcim');
        });

        /* ----- Oyun mantığı ----- */
        function guncelle(dt) {
          if (durum !== 'oyun') return;
          gecen += dt; kalan -= dt;
          if (hareket) {
            hareket.t += dt / 0.6;
            if (Math.random() < 0.6) parcalar.push({ x: hx(), y: hy(), vx: (Math.random() - 0.5) * 50, vy: -20 - Math.random() * 40, omur: 0.5 });
            if (hareket.t >= 1) {
              konum = hareket.b; hareket = null; yak(konum);
              if (dugumler.every(function (d) { return d.yandi; })) { bitir(true); return; }
            }
          }
          devriyeler.forEach(function (dv) {
            if (dv.yol) {
              var y = dv.yol;
              if (y.uyari > 0) { y.uyari -= dt; if (y.uyari <= 0) { y.kapali = 3.2; y.faz = 0; } }
              else if (y.kapali > 0) { y.kapali -= dt; y.faz += dt; if (y.kapali <= 0) { y.kapali = 0; dv.yol = null; dv.bekle = 2.5 + Math.random() * 2.5; } }
            } else {
              dv.bekle -= dt;
              if (dv.bekle <= 0) {
                var uygun = yollar.filter(function (y) { return !y.uyari && !y.kapali && !(hareket && hareket.yol === y); });
                dv.yol = uygun[Math.floor(Math.random() * uygun.length)];
                if (dv.yol) dv.yol.uyari = 1.2;
              }
            }
          });
          gostergeYaz();
          if (kalan <= 0) bitir(false);
        }
        function hx() { var a = dugumler[hareket.a], b = dugumler[hareket.b]; return (a.x + (b.x - a.x) * hareket.t) * W; }
        function hy() { var a = dugumler[hareket.a], b = dugumler[hareket.b]; return (a.y + (b.y - a.y) * hareket.t) * H; }

        /* ----- Çizim ----- */
        function evCiz(x, y, b, yandi) {
          c.lineWidth = Math.max(1.5, b * 0.09); c.strokeStyle = '#070a16'; c.lineJoin = 'round';
          c.fillStyle = yandi ? '#4a4763' : '#232a46';
          c.beginPath(); c.rect(x - b * 0.5, y - b * 0.7, b, b * 0.7); c.fill(); c.stroke();
          c.fillStyle = yandi ? '#8a4a3a' : '#2c2a42';
          c.beginPath(); c.moveTo(x - b * 0.62, y - b * 0.7); c.lineTo(x, y - b * 1.15); c.lineTo(x + b * 0.62, y - b * 0.7); c.closePath(); c.fill(); c.stroke();
          c.fillStyle = yandi ? '#ffd76a' : '#0e1226';
          c.fillRect(x - b * 0.3, y - b * 0.52, b * 0.22, b * 0.26); c.fillRect(x + b * 0.08, y - b * 0.52, b * 0.22, b * 0.26);
        }

        function ciz(t) {
          var u = Math.min(W, H) / 600, i;
          c.setTransform(dpr, 0, 0, dpr, 0, 0);
          var g = c.createLinearGradient(0, 0, 0, H);
          g.addColorStop(0, '#0a1230'); g.addColorStop(1, '#1b2648');
          c.fillStyle = g; c.fillRect(0, 0, W, H);
          yildizlar.forEach(function (y) {
            c.fillStyle = 'rgba(255,250,220,' + (0.25 + Math.sin(t * 2 + y[2]) * 0.2) + ')';
            c.beginPath(); c.arc(y[0] * W, y[1] * H, 1 + (y[2] % 1.5), 0, TAU); c.fill();
          });
          c.save();
          if (sarsinti > 0) c.translate(Math.sin(t * 70) * 6 * sarsinti, 0);

          // yollar
          c.lineCap = 'round';
          yollar.forEach(function (y) {
            var a = dugumler[y.a], b = dugumler[y.b], ax = a.x * W, ay = a.y * H, bx = b.x * W, by = b.y * H;
            var ikisiYandi = a.yandi && b.yandi;
            c.strokeStyle = '#080c1c'; c.lineWidth = 18 * u; c.beginPath(); c.moveTo(ax, ay); c.lineTo(bx, by); c.stroke();
            c.strokeStyle = y.kapali > 0 ? '#3a1820' : (y.uyari > 0 && Math.sin(t * 22) > 0 ? '#7a3030' : (ikisiYandi ? '#8a7448' : '#39446c'));
            c.lineWidth = 11 * u; c.beginPath(); c.moveTo(ax, ay); c.lineTo(bx, by); c.stroke();
            if (ikisiYandi && !y.kapali) {
              c.strokeStyle = 'rgba(255,215,120,.7)'; c.lineWidth = 2.5 * u; c.setLineDash([8 * u, 12 * u]); c.lineDashOffset = -t * 30;
              c.beginPath(); c.moveTo(ax, ay); c.lineTo(bx, by); c.stroke(); c.setLineDash([]);
            }
            if (y.kapali > 0) {
              // devriye gölgesi yol boyunca gidip gelir
              var o = 0.5 + Math.sin(y.faz * 2.2) * 0.3, gx = ax + (bx - ax) * o, gy = ay + (by - ay) * o;
              var gg = c.createRadialGradient(gx, gy, 4, gx, gy, 62 * u);
              gg.addColorStop(0, 'rgba(5,5,12,.95)'); gg.addColorStop(0.6, 'rgba(5,5,12,.7)'); gg.addColorStop(1, 'rgba(5,5,12,0)');
              c.fillStyle = gg; c.beginPath(); c.arc(gx, gy, 62 * u, 0, TAU); c.fill();
              c.fillStyle = '#c23b2e'; c.strokeStyle = '#080c1c'; c.lineWidth = 3 * u;
              c.beginPath(); c.arc(gx, gy, 15 * u, 0, TAU); c.fill(); c.stroke();
              c.strokeStyle = '#f1e4c6'; c.lineWidth = 4 * u;
              c.beginPath(); c.moveTo(gx - 7 * u, gy - 7 * u); c.lineTo(gx + 7 * u, gy + 7 * u); c.moveTo(gx + 7 * u, gy - 7 * u); c.lineTo(gx - 7 * u, gy + 7 * u); c.stroke();
            }
          });

          // mahalleler
          dugumler.forEach(function (d, di) {
            var x = d.x * W, y = d.y * H;
            d.parlama = Math.max(0, d.parlama - 0.012);
            if (d.yandi) {
              var r = (120 + Math.sin(t * 2 + di) * 8 + d.parlama * 120) * u;
              var gl = c.createRadialGradient(x, y, 4, x, y, r);
              gl.addColorStop(0, 'rgba(255,205,110,.6)'); gl.addColorStop(0.5, 'rgba(255,170,70,.18)'); gl.addColorStop(1, 'rgba(255,170,70,0)');
              c.fillStyle = gl; c.beginPath(); c.arc(x, y, r, 0, TAU); c.fill();
            }
            var komsu = durum === 'oyun' && !hareket && yolBul(konum, di);
            if (komsu) {
              var nb = 0.5 + Math.sin(t * 5) * 0.5, kap = komsu.kapali > 0;
              c.strokeStyle = kap ? 'rgba(200,70,60,.7)' : 'rgba(255,225,150,' + (0.45 + nb * 0.5) + ')';
              c.lineWidth = (ipucu > 0 ? 6 : 3.5) * u; c.setLineDash([10 * u, 8 * u]); c.lineDashOffset = t * 24;
              c.beginPath(); c.arc(x, y, (62 + nb * 6) * u, 0, TAU); c.stroke(); c.setLineDash([]);
            }
            c.fillStyle = d.yandi ? '#5b5340' : '#1a2140';
            c.beginPath(); c.ellipse(x, y + 8 * u, 56 * u, 40 * u, 0, 0, TAU); c.fill();
            d.evler.slice().sort(function (p, q) { return Math.sin(p.a) - Math.sin(q.a); }).forEach(function (e) {
              evCiz(x + Math.cos(e.a) * 34 * u * e.u, y + Math.sin(e.a) * 22 * u * e.u + 14 * u, 30 * u * e.b, d.yandi);
            });
          });

          // haberci
          var px = hareket ? hx() : dugumler[konum].x * W, py = (hareket ? hy() : dugumler[konum].y * H) - 34 * u;
          var zip = hareket ? Math.abs(Math.sin(hareket.t * Math.PI * 4)) * 8 * u : Math.sin(t * 3) * 2 * u;
          py -= zip;
          var hg = c.createRadialGradient(px, py, 2, px, py, 48 * u);
          hg.addColorStop(0, 'rgba(255,245,200,1)'); hg.addColorStop(0.35, 'rgba(255,190,80,.65)'); hg.addColorStop(1, 'rgba(255,190,80,0)');
          c.fillStyle = hg; c.beginPath(); c.arc(px, py, 48 * u, 0, TAU); c.fill();
          c.strokeStyle = '#1a1208'; c.fillStyle = '#f1e4c6'; c.lineWidth = 4 * u; c.lineCap = 'round';
          c.beginPath(); c.arc(px, py - 10 * u, 8 * u, 0, TAU); c.fill(); c.stroke();
          c.beginPath(); c.moveTo(px, py - 2 * u); c.lineTo(px, py + 16 * u);
          c.moveTo(px, py + 16 * u); c.lineTo(px - 8 * u, py + 30 * u); c.moveTo(px, py + 16 * u); c.lineTo(px + 8 * u, py + 30 * u);
          c.moveTo(px, py + 4 * u); c.lineTo(px + 13 * u, py - 8 * u); c.stroke();
          c.fillStyle = '#ffb030'; c.beginPath(); c.arc(px + 14 * u, py - 14 * u, (5 + Math.sin(t * 20) * 1.5) * u, 0, TAU); c.fill();

          // kıvılcım parçacıkları
          parcalar = parcalar.filter(function (p) {
            p.omur -= 0.016; p.x += p.vx * 0.016; p.y += p.vy * 0.016; p.vy += 3;
            if (p.omur <= 0) return false;
            c.fillStyle = 'rgba(255,' + Math.floor(160 + p.omur * 90) + ',80,' + Math.min(1, p.omur * 1.6) + ')';
            c.beginPath(); c.arc(p.x, p.y, (2 + p.omur * 3) * u, 0, TAU); c.fill();
            return true;
          });
          c.restore();
        }

        /* ----- Döngü ----- */
        var calisiyor = true, onceki = performance.now(), t0 = onceki;
        function kare(simdi) {
          if (!calisiyor) return;
          if (!tuval.isConnected) { kapat(); return; }
          var dt = Math.min(0.05, (simdi - onceki) / 1000); onceki = simdi;
          sarsinti = Math.max(0, sarsinti - dt); ipucu = Math.max(0, ipucu - dt);
          guncelle(dt);
          ciz((simdi - t0) / 1000);
          requestAnimationFrame(kare);
        }
        function kapat() { calisiyor = false; window.removeEventListener('resize', boyutla); clearTimeout(mesajYaz.z); }
        IP.temizlikEkle(kapat);
        requestAnimationFrame(kare);
        gostergeYaz();

        kaplama(mo.ad || 'Mini oyun', [
          mo.aciklama || '',
          '• Parlayan halkalı komşu mahalleye dokun, haberci oraya koşsun.',
          '• Kırmızı ✕ işaretli gölge yolu kapatır: bekle ya da başka yoldan dolaş.',
          '• ' + SURE + ' saniyede bütün mahalleleri aydınlat.'
        ], [['Başla ▶', baslat]]);
      });
    }
  };
})();
