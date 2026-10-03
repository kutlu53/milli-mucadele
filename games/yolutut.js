/* Mini oyun: "Yolu Tut"
   Yol üzerindeki geçitlere gönüllü kartları yerleştirilir. Kolon ilerlerken kartlar devreye girer
   ve yolu tutar. Amaç "yol tutuldu" çubuğunu doldurmaktır (işgal birliklerine yardım ulaşmasın).
   Çatışma gösterilmez: kolon yalnızca "durdu" işaretiyle yavaşlar.
   Ortak arayüz: start(container, heroData) → Promise<{completed, durationSec, details}> */
(function () {
  'use strict';
  var IP = window.IP, TAU = Math.PI * 2;

  // Kart türleri ve oyun ayarları (pilot testten sonra buradan değiştirilebilir).
  var KARTLAR = {
    gozcu: { ad: 'Gözcü', renk: '#2c5a85', etki: 'Kolonu erken görür: bir sonraki geçitteki kartı 2 kat güçlendirir.' },
    haberci: { ad: 'Haberci', renk: '#5f6f52', etki: 'Şehre haber uçurur: gösterge hemen artar.' },
    engelci: { ad: 'Engelci', renk: '#b3261e', etki: 'Yolu kapatır: kolon bir süre durur.' }
  };
  var ELLER = [
    ['engelci', 'engelci', 'haberci', 'gozcu'],
    ['engelci', 'engelci', 'haberci', 'gozcu'],
    ['engelci', 'engelci', 'engelci', 'haberci', 'gozcu']
  ];
  var YOL_SURESI = [14, 12, 10];   // kolonun yolu engelsiz geçme süresi (sn)
  var DOLMA_HIZI = 1.2;            // kolon yoldayken saniyede dolan hazırlık (%)
  var DURMA_SURESI = 4;            // engelcinin durdurma süresi (sn)
  var HABER_KATKISI = 6;           // habercinin katkısı (%)

  // Kart simgesi: göz, çift ok ya da taş yığını.
  function simgeCiz(c, tur, x, y, b) {
    c.save(); c.translate(x, y);
    c.fillStyle = KARTLAR[tur].renk; c.strokeStyle = '#2b2118'; c.lineWidth = b * 0.09; c.lineJoin = 'round'; c.lineCap = 'round';
    c.beginPath(); c.arc(0, 0, b, 0, TAU); c.fill(); c.stroke();
    c.strokeStyle = '#f1e4c6'; c.fillStyle = '#f1e4c6'; c.lineWidth = b * 0.13;
    if (tur === 'gozcu') {
      c.beginPath(); c.moveTo(-b * 0.62, 0); c.quadraticCurveTo(0, -b * 0.62, b * 0.62, 0); c.quadraticCurveTo(0, b * 0.62, -b * 0.62, 0); c.stroke();
      c.beginPath(); c.arc(0, 0, b * 0.2, 0, TAU); c.fill();
    } else if (tur === 'haberci') {
      [-0.3, 0.2].forEach(function (k) {
        c.beginPath(); c.moveTo(b * (k - 0.2), -b * 0.42); c.lineTo(b * (k + 0.25), 0); c.lineTo(b * (k - 0.2), b * 0.42); c.stroke();
      });
    } else {
      [[-0.3, 0.25, 0.3], [0.3, 0.25, 0.3], [0, -0.22, 0.3]].forEach(function (t) {
        c.beginPath(); c.ellipse(b * t[0], b * t[1], b * t[2], b * t[2] * 0.75, 0, 0, TAU); c.fill();
      });
    }
    c.restore();
  }

  IP.oyunlar.yolutut = {
    start: function (container, heroData) {
      return new Promise(function (coz) {
        var mo = heroData.mini_oyun || {};
        var GECIT = Math.max(3, Math.min(6, mo.gecit_sayisi || 5));
        var DALGA = Math.max(1, Math.min(ELLER.length, mo.dalga_sayisi || 3));
        var rs = IP.tohumluRastgele(31);
        var susler = [];
        for (var s = 0; s < 46; s++) susler.push({ x: rs(), y: rs(), b: 0.5 + rs(), tur: rs() > 0.45 ? 'agac' : 'tepe' });

        var faz = 'giris', dalga = 0, hazirlik = 0, gecen = 0, el = [], yuvalar = [], secili = -1;
        var kolonU = 0, durma = 0, tetiklendi = [], guclu = [], kosucular = [], yazilar = [], isaretler = [], zaman = 0;

        /* ----- Ekran düzeni ----- */
        container.classList.add('oyun');
        var ust = IP.el('div', 'oyun-ust');
        ust.appendChild(IP.el('h2', null, mo.ad || 'Mini oyun'));
        var gosterge = IP.el('div', 'oyun-gosterge');
        var dalgaYazi = IP.el('span', 'gosterge'), hazYazi = IP.el('span', 'gosterge');
        gosterge.appendChild(dalgaYazi); gosterge.appendChild(hazYazi); ust.appendChild(gosterge);
        var alan = IP.el('div', 'oyun-alan');
        var tuval = IP.el('canvas'), mesaj = IP.el('div', 'oyun-mesaj');
        alan.appendChild(tuval); alan.appendChild(mesaj);
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
          mesajYaz.z = setTimeout(function () { mesaj.classList.remove('goster'); }, sure || 2600);
        }
        function gostergeYaz() {
          dalgaYazi.textContent = 'Dalga ' + Math.min(dalga + 1, DALGA) + ' / ' + DALGA;
          hazYazi.textContent = 'Yol tutuldu %' + Math.min(100, Math.floor(hazirlik));
        }
        function kaplama(baslik, satirlar, dugmeler) {
          var k = IP.el('div', 'oyun-kaplama'), kutu = IP.el('div', 'kagit oyun-kutu');
          kutu.appendChild(IP.el('h2', null, baslik));
          satirlar.forEach(function (st) { if (st) kutu.appendChild(IP.el('p', null, st)); });
          var sira = IP.el('div', 'dugme-sira');
          dugmeler.forEach(function (d) { sira.appendChild(IP.dugme(d[0], d[2], function () { k.remove(); d[1](); })); });
          kutu.appendChild(sira); k.appendChild(kutu); alan.appendChild(k);
        }

        // Yolun üzerindeki nokta (u: 0 = başlangıç, 1 = şehir).
        function yol(u) {
          return [(0.07 + 0.72 * u) * W, (0.56 + 0.2 * Math.sin(u * 7 + 0.6) - 0.06 * u) * H];
        }
        function gecitU(i) { return (i + 1) / (GECIT + 1); }

        /* ----- Kart tepsisi ----- */
        function tepsiCiz() {
          tepsi.innerHTML = '';
          if (faz !== 'yerlestir') { tepsi.appendChild(IP.el('div', 'yonerge', faz === 'kosu' ? 'Kolon yolda… Kartların sırayla devreye giriyor.' : '')); return; }
          el.forEach(function (tur, i) {
            var d = IP.el('button', 'kart-dugme' + (i === secili ? ' secili' : ''));
            d.type = 'button';
            var sim = IP.el('canvas'); sim.width = 72; sim.height = 72; simgeCiz(sim.getContext('2d'), tur, 36, 36, 30);
            var yazi = IP.el('span');
            yazi.appendChild(IP.el('strong', null, KARTLAR[tur].ad));
            yazi.appendChild(IP.el('small', null, KARTLAR[tur].etki));
            d.appendChild(sim); d.appendChild(yazi);
            d.addEventListener('click', function () { secili = secili === i ? -1 : i; IP.ses.cal('tik'); tepsiCiz(); });
            tepsi.appendChild(d);
          });
          tepsi.appendChild(IP.dugme('Kolonu karşıla ▶', 'kolon-dugme', kosuBaslat));
        }

        function dalgaHazirla() {
          faz = 'yerlestir'; el = ELLER[dalga].slice(); yuvalar = []; secili = -1;
          for (var i = 0; i < GECIT; i++) yuvalar.push(null);
          kolonU = 0; durma = 0; tetiklendi = []; guclu = []; kosucular = [];
          gostergeYaz(); tepsiCiz();
          mesajYaz('Bir kart seç, sonra yoldaki bir geçide dokun.', 4000);
        }

        function kosuBaslat() {
          if (faz !== 'yerlestir') return;
          faz = 'kosu'; secili = -1; tepsiCiz();
          IP.ses.cal('engel');
          mesajYaz('Kolon yola çıktı!');
        }

        function tetikle(i) {
          var tur = yuvalar[i], kat = guclu[i] ? 2 : 1, p = yol(gecitU(i));
          if (!tur) return;
          if (tur === 'gozcu') {
            if (i + 1 < GECIT && yuvalar[i + 1]) {
              guclu[i + 1] = true; isaretler.push({ a: i, b: i + 1, omur: 1.4 });
              yazilar.push({ x: p[0], y: p[1] - 50, m: 'Kolon görüldü!', omur: 1.8 }); IP.ses.cal('isik');
            } else {
              yazilar.push({ x: p[0], y: p[1] - 50, m: 'Haber verecek kimse yok', omur: 1.8 });
            }
          } else if (tur === 'engelci') {
            durma += DURMA_SURESI * kat; IP.ses.cal('engel');
            yazilar.push({ x: p[0], y: p[1] - 50, m: 'DURDU' + (kat > 1 ? ' ×2' : ''), omur: 1.8 });
          } else if (tur === 'haberci') {
            kosucular.push({ u: gecitU(i), katki: HABER_KATKISI * kat }); IP.ses.cal('kivilcim');
            yazilar.push({ x: p[0], y: p[1] - 50, m: 'Haber yolda' + (kat > 1 ? ' ×2' : ''), omur: 1.8 });
          }
        }

        function dalgaBitti() {
          var bos = el.length;
          dalga++;
          gostergeYaz();
          if (dalga >= DALGA) { bitir(); return; }
          faz = 'ara'; tepsiCiz();
          kaplama(dalga + '. dalga geçti', [
            'Yol tutuldu: %' + Math.min(100, Math.floor(hazirlik)),
            bos ? 'İpucu: Elinde kullanmadığın kart kaldı. Hepsini yerleştirmeyi dene.' : 'İpucu: Gözcüyü başka bir kartın hemen önündeki geçide koyarsan o kart 2 kat güçlenir.',
            'Sıradaki kolon daha hızlı!'
          ], [['Sonraki dalga ▶', dalgaHazirla]]);
        }

        function bitir() {
          faz = 'bitti'; tepsiCiz();
          var tamam = hazirlik >= 100;
          var sonuc = { completed: tamam, durationSec: Math.round(gecen), details: { hazirlik: Math.min(100, Math.floor(hazirlik)), dalga: DALGA } };
          if (tamam) {
            IP.ses.cal('zafer'); IP.efekt.patlat(window.innerWidth / 2, window.innerHeight / 2, 80);
            kaplama('Yol tutuldu!', [mo.kazanim || '', 'Gösterge: %100'], [['Devam ▶', function () { kapat(); coz(sonuc); }]]);
          } else {
            kaplama('Yol tutulamadı', [
              'Gösterge %' + sonuc.details.hazirlik + ' oldu. Üzülme, cezası yok.',
              'İpucu: Gözcüyü, Haberci ya da Engelci kartının hemen önündeki geçide koy.'
            ], [
              ['Tekrar dene', function () { dalga = 0; hazirlik = 0; gecen = 0; dalgaHazirla(); }],
              ['Yıldızsız devam et', function () { kapat(); coz(sonuc); }, 'ikincil']
            ]);
          }
        }

        /* ----- Dokunma: geçide kart koy ya da geri al ----- */
        tuval.addEventListener('pointerdown', function (e) {
          if (faz !== 'yerlestir') return;
          var k = tuval.getBoundingClientRect(), x = e.clientX - k.left, y = e.clientY - k.top;
          var yaricap = Math.max(34, Math.min(W, H) * 0.1), bulunan = -1, en = yaricap;
          for (var i = 0; i < GECIT; i++) {
            var p = yol(gecitU(i)), u = Math.hypot(p[0] - x, p[1] - y);
            if (u < en) { en = u; bulunan = i; }
          }
          if (bulunan < 0) return;
          if (secili >= 0) {
            if (yuvalar[bulunan]) el.push(yuvalar[bulunan]);
            yuvalar[bulunan] = el.splice(secili, 1)[0];
            secili = -1; IP.ses.cal('damga');
          } else if (yuvalar[bulunan]) {
            el.push(yuvalar[bulunan]); yuvalar[bulunan] = null; IP.ses.cal('tik');
          } else { mesajYaz('Önce aşağıdan bir kart seç.'); return; }
          tepsiCiz();
        });

        /* ----- Oyun mantığı ----- */
        function guncelle(dt) {
          zaman += dt;
          yazilar = yazilar.filter(function (y) { y.omur -= dt; y.y -= dt * 22; return y.omur > 0; });
          isaretler = isaretler.filter(function (y) { y.omur -= dt; return y.omur > 0; });
          if (faz !== 'kosu') return;
          gecen += dt;
          hazirlik += DOLMA_HIZI * dt;
          if (durma > 0) durma -= dt; else kolonU += dt / YOL_SURESI[dalga];
          for (var i = 0; i < GECIT; i++) {
            if (!tetiklendi[i] && kolonU >= gecitU(i)) { tetiklendi[i] = true; tetikle(i); }
          }
          kosucular = kosucular.filter(function (k) {
            k.u += dt / 2.2;
            if (k.u >= 1) {
              hazirlik += k.katki; IP.ses.cal('dogru');
              var p = yol(1); yazilar.push({ x: p[0], y: p[1] - 90, m: '+%' + k.katki, omur: 1.8 });
              return false;
            }
            return true;
          });
          gostergeYaz();
          if (kolonU >= 1 && !kosucular.length) dalgaBitti();
        }

        /* ----- Çizim ----- */
        function ciz() {
          var u = Math.min(W, H) / 600, i, p;
          c.setTransform(dpr, 0, 0, dpr, 0, 0);
          var g = c.createLinearGradient(0, 0, 0, H);
          g.addColorStop(0, '#e6cf9c'); g.addColorStop(1, '#cdb07a');
          c.fillStyle = g; c.fillRect(0, 0, W, H);
          // arazi süsleri
          susler.forEach(function (sz) {
            var x = sz.x * W, y = sz.y * H, yy = yol(Math.max(0, Math.min(1, (sz.x - 0.07) / 0.72)))[1];
            if (Math.abs(y - yy) < 70 * u) return; // yolun üstüne süs konmaz
            c.strokeStyle = 'rgba(90,65,35,.55)'; c.lineWidth = 2.5 * u; c.lineJoin = 'round';
            if (sz.tur === 'tepe') {
              c.fillStyle = 'rgba(160,125,75,.5)'; c.beginPath(); c.moveTo(x - 34 * u * sz.b, y); c.quadraticCurveTo(x, y - 46 * u * sz.b, x + 34 * u * sz.b, y); c.fill(); c.stroke();
            } else {
              c.fillStyle = 'rgba(95,111,82,.8)'; c.beginPath(); c.moveTo(x, y - 30 * u * sz.b); c.lineTo(x + 12 * u * sz.b, y); c.lineTo(x - 12 * u * sz.b, y); c.closePath(); c.fill(); c.stroke();
            }
          });
          // yol
          c.lineCap = 'round'; c.lineJoin = 'round';
          [['#5b4630', 34], ['#efdcae', 26]].forEach(function (k) {
            c.strokeStyle = k[0]; c.lineWidth = k[1] * u; c.beginPath();
            for (var q = -0.06; q <= 1.001; q += 0.02) { var n = yol(q); c.lineTo(n[0], n[1]); }
            c.stroke();
          });
          // başlangıç kasabası (solda)
          p = yol(-0.02);
          evCiz(p[0] - 30 * u, p[1] - 30 * u, 30 * u); evCiz(p[0] + 4 * u, p[1] - 52 * u, 26 * u);
          etiket(mo.baslangic || '', p[0] + 6 * u, p[1] - 92 * u, 17 * u);
          // şehir (sağda) ve hazırlık çubuğu
          p = yol(1);
          var sx = p[0] + 20 * u, sy = p[1];
          c.fillStyle = '#b89868'; c.strokeStyle = '#2b2118'; c.lineWidth = 4 * u;
          c.beginPath(); c.rect(sx - 6 * u, sy - 46 * u, 150 * u, 92 * u); c.fill(); c.stroke();
          for (i = 0; i < 6; i++) { c.beginPath(); c.rect(sx - 6 * u + i * 26 * u, sy - 60 * u, 16 * u, 14 * u); c.fill(); c.stroke(); }
          evCiz(sx + 36 * u, sy + 24 * u, 30 * u); evCiz(sx + 80 * u, sy + 30 * u, 34 * u); evCiz(sx + 118 * u, sy + 18 * u, 26 * u); evCiz(sx + 62 * u, sy - 6 * u, 28 * u);
          etiket(mo.bitis || '', sx + 70 * u, sy - 112 * u, 20 * u);
          var oran = Math.min(1, hazirlik / 100), cw = 150 * u;
          c.fillStyle = '#2b2118'; c.fillRect(sx - 8 * u, sy - 98 * u, cw + 4 * u, 22 * u);
          c.fillStyle = oran >= 1 ? '#4e8a4a' : '#e0a83a'; c.fillRect(sx - 6 * u, sy - 96 * u, cw * oran, 18 * u);
          c.fillStyle = '#f1e4c6'; c.font = '700 ' + 13 * u + 'px Metin, serif'; c.textAlign = 'center';
          c.fillText('yol tutuldu %' + Math.floor(oran * 100), sx + cw / 2 - 6 * u, sy - 82 * u);

          // geçitler
          for (i = 0; i < GECIT; i++) {
            p = yol(gecitU(i));
            c.fillStyle = '#8f7f66'; c.strokeStyle = '#2b2118'; c.lineWidth = 3 * u;
            [-1, 1].forEach(function (yn) {
              c.beginPath(); c.moveTo(p[0] - 30 * u, p[1] + yn * 30 * u); c.quadraticCurveTo(p[0], p[1] + yn * 78 * u, p[0] + 30 * u, p[1] + yn * 30 * u); c.closePath(); c.fill(); c.stroke();
            });
            if (yuvalar[i]) {
              if (guclu[i]) {
                var gl = c.createRadialGradient(p[0], p[1], 4, p[0], p[1], 52 * u);
                gl.addColorStop(0, 'rgba(255,220,110,.9)'); gl.addColorStop(1, 'rgba(255,220,110,0)');
                c.fillStyle = gl; c.beginPath(); c.arc(p[0], p[1], 52 * u, 0, TAU); c.fill();
              }
              simgeCiz(c, yuvalar[i], p[0], p[1], 24 * u);
              if (tetiklendi[i]) { c.strokeStyle = '#ffe9a6'; c.lineWidth = 3 * u; c.beginPath(); c.arc(p[0], p[1], 29 * u, 0, TAU); c.stroke(); }
            } else if (faz === 'yerlestir') {
              var nb = 0.5 + Math.sin(zaman * 5 + i) * 0.5;
              c.strokeStyle = secili >= 0 ? 'rgba(179,38,30,' + (0.5 + nb * 0.5) + ')' : 'rgba(43,33,24,.55)';
              c.fillStyle = 'rgba(255,255,255,.35)'; c.lineWidth = 3.5 * u; c.setLineDash([7 * u, 6 * u]);
              c.beginPath(); c.arc(p[0], p[1], (24 + (secili >= 0 ? nb * 4 : 0)) * u, 0, TAU); c.fill(); c.stroke(); c.setLineDash([]);
            }
            c.fillStyle = '#2b2118'; c.font = '700 ' + 22 * u + 'px Daktilo, monospace'; c.textAlign = 'center';
            c.fillText(String(i + 1), p[0], p[1] + 100 * u);
          }
          // gözcü işaret çizgisi
          isaretler.forEach(function (iz) {
            var a = yol(gecitU(iz.a)), b = yol(gecitU(iz.b));
            c.strokeStyle = 'rgba(255,210,90,' + Math.min(1, iz.omur) + ')'; c.lineWidth = 5 * u; c.setLineDash([10 * u, 8 * u]); c.lineDashOffset = -zaman * 60;
            c.beginPath(); c.moveTo(a[0], a[1] - 30 * u); c.quadraticCurveTo((a[0] + b[0]) / 2, Math.min(a[1], b[1]) - 110 * u, b[0], b[1] - 30 * u); c.stroke(); c.setLineDash([]);
          });
          // kolon: ok dizisi
          if (faz === 'kosu' || (faz === 'ara' && kolonU > 0)) {
            for (i = 8; i >= 0; i--) {
              var ku = kolonU - i * 0.03;
              if (ku < -0.05 || ku > 1) continue;
              var a1 = yol(ku), a2 = yol(ku + 0.01), aci = Math.atan2(a2[1] - a1[1], a2[0] - a1[0]);
              c.save(); c.translate(a1[0], a1[1]); c.rotate(aci);
              c.fillStyle = durma > 0 ? '#5a5d68' : '#23262e'; c.strokeStyle = '#f1e4c6'; c.lineWidth = 1.5 * u;
              c.beginPath(); c.moveTo(16 * u, 0); c.lineTo(-10 * u, -14 * u); c.lineTo(-3 * u, 0); c.lineTo(-10 * u, 14 * u); c.closePath(); c.fill(); c.stroke();
              c.restore();
            }
            if (durma > 0) {
              var kb = yol(Math.min(1, kolonU));
              c.fillStyle = '#b3261e'; c.strokeStyle = '#f1e4c6'; c.lineWidth = 3 * u;
              c.beginPath();
              for (i = 0; i < 8; i++) c.lineTo(kb[0] + Math.cos(i * TAU / 8 + TAU / 16) * 20 * u, kb[1] - 44 * u + Math.sin(i * TAU / 8 + TAU / 16) * 20 * u);
              c.closePath(); c.fill(); c.stroke();
              c.fillStyle = '#f1e4c6'; c.fillRect(kb[0] - 8 * u, kb[1] - 53 * u, 6 * u, 18 * u); c.fillRect(kb[0] + 2 * u, kb[1] - 53 * u, 6 * u, 18 * u);
            }
          }
          // şehre koşan haberciler
          kosucular.forEach(function (k) {
            var kp = yol(k.u), zip = Math.abs(Math.sin(zaman * 16)) * 6 * u;
            var hg = c.createRadialGradient(kp[0], kp[1] - 14 * u, 2, kp[0], kp[1] - 14 * u, 30 * u);
            hg.addColorStop(0, 'rgba(255,245,200,.95)'); hg.addColorStop(1, 'rgba(255,200,90,0)');
            c.fillStyle = hg; c.beginPath(); c.arc(kp[0], kp[1] - 14 * u, 30 * u, 0, TAU); c.fill();
            c.strokeStyle = '#2b2118'; c.fillStyle = '#f1e4c6'; c.lineWidth = 3.5 * u;
            c.beginPath(); c.arc(kp[0], kp[1] - 26 * u - zip, 6 * u, 0, TAU); c.fill(); c.stroke();
            c.beginPath(); c.moveTo(kp[0], kp[1] - 20 * u - zip); c.lineTo(kp[0] - 2 * u, kp[1] - 6 * u - zip);
            c.lineTo(kp[0] - 9 * u, kp[1] + 4 * u); c.moveTo(kp[0] - 2 * u, kp[1] - 6 * u - zip); c.lineTo(kp[0] + 8 * u, kp[1] + 2 * u - zip); c.stroke();
          });
          // uçan yazılar
          yazilar.forEach(function (y) {
            c.globalAlpha = Math.min(1, y.omur * 1.5);
            c.font = '900 ' + 18 * u + 'px Manset, serif'; c.textAlign = 'center';
            c.lineWidth = 5 * u; c.strokeStyle = '#2b2118'; c.strokeText(y.m, y.x, y.y);
            c.fillStyle = '#ffe9a6'; c.fillText(y.m, y.x, y.y);
            c.globalAlpha = 1;
          });

          function evCiz(x, y, b) {
            c.lineWidth = Math.max(1.5, b * 0.09); c.strokeStyle = '#2b2118'; c.lineJoin = 'round';
            c.fillStyle = '#e6d3a8'; c.beginPath(); c.rect(x - b * 0.5, y - b * 0.7, b, b * 0.7); c.fill(); c.stroke();
            c.fillStyle = '#a5533a'; c.beginPath(); c.moveTo(x - b * 0.62, y - b * 0.7); c.lineTo(x, y - b * 1.15); c.lineTo(x + b * 0.62, y - b * 0.7); c.closePath(); c.fill(); c.stroke();
          }
          function etiket(m, x, y, boy) {
            if (!m) return;
            c.font = '900 ' + boy + 'px Manset, serif'; c.textAlign = 'center';
            c.lineWidth = boy * 0.3; c.strokeStyle = '#f1e4c6'; c.strokeText(m, x, y);
            c.fillStyle = '#2b2118'; c.fillText(m, x, y);
          }
        }

        /* ----- Döngü ----- */
        var calisiyor = true, onceki = performance.now();
        function kare(simdi) {
          if (!calisiyor) return;
          if (!tuval.isConnected) { kapat(); return; }
          var dt = Math.min(0.05, (simdi - onceki) / 1000); onceki = simdi;
          if (alan.clientWidth !== W || alan.clientHeight !== H) boyutla(); // kart tepsisi değişince alan da değişebilir
          guncelle(dt); ciz();
          requestAnimationFrame(kare);
        }
        function kapat() { calisiyor = false; window.removeEventListener('resize', boyutla); clearTimeout(mesajYaz.z); }
        IP.temizlikEkle(kapat);
        requestAnimationFrame(kare);
        gostergeYaz(); tepsiCiz();

        kaplama(mo.ad || 'Mini oyun', [
          mo.aciklama || '',
          '• Kartlarını yoldaki geçitlere yerleştir, sonra "Kolonu karşıla" düğmesine bas.',
          '• Engelci kolonu durdurur, Haberci göstergeyi artırır.',
          '• Gözcü, bir sonraki geçitteki kartı 2 kat güçlendirir.',
          '• ' + DALGA + ' dalganın sonunda "yol tutuldu" göstergesi %100 olmalı.'
        ], [['Başla ▶', dalgaHazirla]]);
      });
    }
  };
})();
