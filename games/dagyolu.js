/* Mini oyun: "Dağ Yolu"
   Döndürmeli yol bulmacası. Patika parçalarına dokununca çeyrek tur dönerler.
   Amaç: köyden kampa kesintisiz bir yol kurmak. Yol, karakolun görüş alanından (kırmızı kareler) geçemez.
   3 bulmaca, gittikçe büyür. Cezası yok; takılan oyuncu "İpucu" düğmesiyle bir parçayı yerine oturtabilir.
   Ortak arayüz: start(container, heroData) → Promise<{completed, durationSec, details}> */
(function () {
  'use strict';
  var IP = window.IP, TAU = Math.PI * 2;

  // Bulmacaların boyutu: sütun, satır, kırmızı kare sayısı, üç yollu (T) parça sayısı.
  var SEVIYE = [
    { sutun: 4, satir: 3, kirmizi: 2, ucYollu: 0 },
    { sutun: 5, satir: 4, kirmizi: 3, ucYollu: 2 },
    { sutun: 6, satir: 4, kirmizi: 5, ucYollu: 4 }
  ];
  // Yönler: kuzey, doğu, güney, batı. Her parçanın açık kenarları bu bitlerle tutulur.
  var YON = [{ x: 0, y: -1, bit: 1 }, { x: 1, y: 0, bit: 2 }, { x: 0, y: 1, bit: 4 }, { x: -1, y: 0, bit: 8 }];
  var K = 1, D = 2, G = 4, B = 8;
  function dondur(m) { return ((m << 1) & 15) | (m >> 3); }       // çeyrek tur sağa
  function karsi(bit) { return bit === K ? G : bit === G ? K : bit === D ? B : D; }

  // Baştan sona yol var mı? kirmiziSerbest: kırmızı karelerden geçmeye izin ver.
  function yolAra(b, kirmiziSerbest) {
    var C = b.sutun, R = b.satir, once = {}, kuyruk = [], bas = b.bas * C;
    if (!(b.hucre[bas].m & B)) return { yol: null, ulasilan: {} };
    once[bas] = -1; kuyruk.push(bas);
    while (kuyruk.length) {
      var i = kuyruk.shift(), x = i % C, y = Math.floor(i / C);
      for (var d = 0; d < 4; d++) {
        var nx = x + YON[d].x, ny = y + YON[d].y, n = ny * C + nx;
        if (!(b.hucre[i].m & YON[d].bit) || nx < 0 || ny < 0 || nx >= C || ny >= R || once[n] != null) continue;
        if (!(b.hucre[n].m & karsi(YON[d].bit))) continue;
        if (b.hucre[n].kirmizi && !kirmiziSerbest) continue;
        once[n] = i; kuyruk.push(n);
      }
    }
    var son = b.son * C + C - 1;
    var yol = null;
    if (once[son] != null && (b.hucre[son].m & D)) { yol = []; for (var k = son; k !== -1; k = once[k]) yol.unshift(k); }
    return { yol: yol, ulasilan: once };
  }

  // Bir bulmaca kurar: önce kırmızı bölge, sonra ondan kaçınan bir çözüm yolu, sonra karıştırma.
  function bulmacaKur(no) {
    var s = SEVIYE[no], C = s.sutun, R = s.satir;
    for (var deneme = 0; deneme < 200; deneme++) {
      var rs = IP.tohumluRastgele(300 + no * 31 + deneme);
      var bas = Math.floor(rs() * R), son = Math.floor(rs() * R), i, d;
      var kirmizi = [(Math.floor(rs() * R)) * C + 1 + Math.floor(rs() * (C - 2))];
      for (i = 0; i < 40 && kirmizi.length < s.kirmizi; i++) {
        var k0 = kirmizi[Math.floor(rs() * kirmizi.length)], yn = YON[Math.floor(rs() * 4)];
        var kx = k0 % C + yn.x, ky = Math.floor(k0 / C) + yn.y;
        if (kx >= 1 && kx <= C - 2 && ky >= 0 && ky < R && kirmizi.indexOf(ky * C + kx) < 0) kirmizi.push(ky * C + kx);
      }
      // rastgele dolaşarak çözüm yolu
      var gezildi = {}, yol = [];
      var git = function (x, y) {
        var n = y * C + x;
        gezildi[n] = true; yol.push(n);
        if (x === C - 1 && y === son) return true;
        var sira = [0, 1, 2, 3];
        for (var w = 3; w > 0; w--) { var z = Math.floor(rs() * (w + 1)), gecici = sira[w]; sira[w] = sira[z]; sira[z] = gecici; }
        for (var q = 0; q < 4; q++) {
          var nx = x + YON[sira[q]].x, ny = y + YON[sira[q]].y, m = ny * C + nx;
          if (nx < 0 || ny < 0 || nx >= C || ny >= R || gezildi[m] || kirmizi.indexOf(m) >= 0) continue;
          if (git(nx, ny)) return true;
        }
        yol.pop();
        return false;
      };
      if (!git(0, bas) || yol.length < C + 1 || yol.length > C * R - 3) continue;

      var hucre = [];
      for (i = 0; i < C * R; i++) hucre.push({ m: 0, hedef: 0, kirmizi: kirmizi.indexOf(i) >= 0, aci: 0, sus: rs() });
      yol.forEach(function (n, sirasi) {
        var m = 0, komsu = [sirasi ? yol[sirasi - 1] : null, sirasi < yol.length - 1 ? yol[sirasi + 1] : null];
        if (!sirasi) m |= B;
        if (sirasi === yol.length - 1) m |= D;
        komsu.forEach(function (o) {
          if (o == null) return;
          var dx = o % C - n % C, dy = Math.floor(o / C) - Math.floor(n / C);
          m |= dx === 1 ? D : dx === -1 ? B : dy === 1 ? G : K;
        });
        hucre[n].m = hucre[n].hedef = m;
      });
      var ucYollu = s.ucYollu;
      hucre.forEach(function (h) {
        if (h.hedef) { var tur = 1 + Math.floor(rs() * 3); for (d = 0; d < tur; d++) h.m = dondur(h.m); return; }
        h.m = ucYollu > 0 && rs() < 0.4 ? (ucYollu--, K | D | G) : (rs() < 0.5 ? K | G : K | D);
        for (d = Math.floor(rs() * 4); d > 0; d--) h.m = dondur(h.m);
      });
      var b = { no: no, sutun: C, satir: R, bas: bas, son: son, hucre: hucre, cozum: yol, karakol: kirmizi[0] };
      if (yolAra(b, false).yol) continue; // karıştırınca kendiliğinden çözülmüş olmasın
      return b;
    }
    return null;
  }

  IP.oyunlar.dagyolu = {
    start: function (container, heroData) {
      return new Promise(function (coz) {
        var mo = heroData.mini_oyun || {};
        var ADET = Math.max(1, Math.min(SEVIYE.length, mo.bulmaca_sayisi || 3));
        var no = 0, b = bulmacaKur(0), asama = 'giris', zaman = 0, gecen = 0, yuruyus = null, isikli = {}, gorulen = {};
        var sayac = { dondurme: 0, ipucu: 0 };

        /* ----- Ekran düzeni ----- */
        container.classList.add('oyun');
        var ust = IP.el('div', 'oyun-ust');
        ust.appendChild(IP.el('h2', null, mo.ad || 'Mini oyun'));
        var gosterge = IP.el('div', 'oyun-gosterge');
        var noYazi = IP.el('span', 'gosterge'), hamleYazi = IP.el('span', 'gosterge');
        gosterge.appendChild(noYazi); gosterge.appendChild(hamleYazi); ust.appendChild(gosterge);
        var alan = IP.el('div', 'oyun-alan');
        var tuval = IP.el('canvas'), mesaj = IP.el('div', 'oyun-mesaj');
        alan.appendChild(tuval); alan.appendChild(mesaj);
        var tepsi = IP.el('div', 'kart-tepsi');
        tepsi.appendChild(IP.el('div', 'yonerge', 'Parçaya dokun: çeyrek tur döner. Kırmızı karelerden geçme!'));
        var ipucuDugme = IP.dugme('💡 İpucu', 'ikincil', ipucuVer);
        tepsi.appendChild(ipucuDugme);
        container.appendChild(ust); container.appendChild(alan); container.appendChild(tepsi);
        var c = tuval.getContext('2d'), W = 0, H = 0, dpr = 1, T = 100, gx = 0, gy = 0;

        function boyutla() {
          dpr = Math.min(window.devicePixelRatio || 1, 2);
          W = alan.clientWidth; H = alan.clientHeight;
          tuval.width = Math.max(2, Math.round(W * dpr)); tuval.height = Math.max(2, Math.round(H * dpr));
          duzenle();
        }
        // Karelerin boyu ve ızgaranın yeri: iki yanda köy ve kamp için birer kare boşluk kalır.
        function duzenle() {
          T = Math.floor(Math.min(W / (b.sutun + 3.4), (H - 16) / b.satir));
          gx = (W - b.sutun * T) / 2; gy = (H - b.satir * T) / 2;
        }
        boyutla();
        window.addEventListener('resize', boyutla);

        function mesajYaz(m, sure) {
          mesaj.textContent = m; mesaj.classList.add('goster');
          clearTimeout(mesajYaz.z);
          mesajYaz.z = setTimeout(function () { mesaj.classList.remove('goster'); }, sure || 2800);
        }
        function gostergeYaz() {
          noYazi.textContent = 'Yol ' + Math.min(no + 1, ADET) + ' / ' + ADET;
          hamleYazi.textContent = '↻ ' + sayac.dondurme;
        }
        function kaplama(baslik, satirlar, dugmeler) {
          var k = IP.el('div', 'oyun-kaplama'), kutu = IP.el('div', 'kagit oyun-kutu');
          kutu.appendChild(IP.el('h2', null, baslik));
          satirlar.forEach(function (st) { if (st) kutu.appendChild(IP.el('p', null, st)); });
          var sira = IP.el('div', 'dugme-sira');
          dugmeler.forEach(function (d) { sira.appendChild(IP.dugme(d[0], d[2], function () { k.remove(); d[1](); })); });
          kutu.appendChild(sira); k.appendChild(kutu); alan.appendChild(k);
        }

        function merkez(n) { return [gx + (n % b.sutun + 0.5) * T, gy + (Math.floor(n / b.sutun) + 0.5) * T]; }

        // Her dönüşten sonra: hangi parçalar köye bağlı, yol tamam mı?
        function denetle() {
          var temiz = yolAra(b, false), hepsi = yolAra(b, true);
          isikli = temiz ? temiz.ulasilan : {};
          gorulen = {};
          if (hepsi) Object.keys(hepsi.ulasilan).forEach(function (n) { if (b.hucre[n].kirmizi) gorulen[n] = true; });
          if (temiz && temiz.yol) { yolTamam(temiz.yol); return; }
          if (hepsi && hepsi.yol) mesajYaz('Yol kampa ulaşıyor ama karakolun görüş alanından geçiyor! Başka bir yol kur.', 3600);
        }

        function yolTamam(yol) {
          asama = 'yuruyus'; IP.ses.cal('dogru');
          var p0 = merkez(yol[0]), pn = merkez(yol[yol.length - 1]);
          var noktalar = [[p0[0] - T * 1.1, p0[1]]].concat(yol.map(merkez)).concat([[pn[0] + T * 1.1, pn[1]]]);
          yuruyus = { noktalar: noktalar, u: 0 };
        }

        function bulmacaBitti() {
          yuruyus = null; no++;
          IP.efekt.patlat(window.innerWidth / 2, window.innerHeight / 2, 40);
          if (no >= ADET) {
            asama = 'bitti'; gostergeYaz();
            var sonuc = { completed: true, durationSec: Math.round(gecen), details: { bulmaca: ADET, dondurme: sayac.dondurme, ipucu: sayac.ipucu } };
            IP.ses.cal('zafer'); IP.efekt.patlat(window.innerWidth / 2, window.innerHeight / 2, 80);
            kaplama('Bütün yollar kuruldu!', [mo.kazanim || '', 'Döndürme: ' + sayac.dondurme + ' · İpucu: ' + sayac.ipucu], [['Devam ▶', function () { kapat(); coz(sonuc); }]]);
            return;
          }
          asama = 'ara'; gostergeYaz();
          kaplama(no + '. yol kuruldu!', ['Sıradaki dağ daha büyük, karakolun görüş alanı daha geniş.'], [['Sonraki yol ▶', function () { bulmacaAc(no); }]]);
        }

        function bulmacaAc(n) {
          b = bulmacaKur(n); duzenle();
          asama = 'oyna'; isikli = {}; gorulen = {};
          denetle(); gostergeYaz();
          if (n === 0) mesajYaz('Parçaları döndür: ' + (mo.baslangic || 'köy') + ' ile ' + (mo.bitis || 'kamp') + ' arasında yol kur.', 3000);
        }

        // İpucu: çözüm yolundaki ilk yanlış duran parçayı yerine oturtur.
        function ipucuVer() {
          if (asama !== 'oyna') return;
          for (var i = 0; i < b.cozum.length; i++) {
            var h = b.hucre[b.cozum[i]];
            if (h.m !== h.hedef) {
              h.m = h.hedef; h.aci = -Math.PI / 2; h.parla = 1.2; sayac.ipucu++;
              IP.ses.cal('isik'); denetle(); gostergeYaz();
              return;
            }
          }
          mesajYaz('Çözüm yolundaki parçalar yerinde. Yolu kesen başka bir bağlantı var mı diye bak.');
        }

        tuval.addEventListener('pointerdown', function (e) {
          if (asama !== 'oyna') return;
          var r = tuval.getBoundingClientRect();
          var x = Math.floor((e.clientX - r.left - gx) / T), y = Math.floor((e.clientY - r.top - gy) / T);
          if (x < 0 || y < 0 || x >= b.sutun || y >= b.satir) return;
          var h = b.hucre[y * b.sutun + x];
          h.m = dondur(h.m); h.aci = -Math.PI / 2; sayac.dondurme++;
          IP.ses.cal('tik');
          denetle(); gostergeYaz();
        });

        function guncelle(dt) {
          zaman += dt;
          if (asama === 'oyna' || asama === 'yuruyus') gecen += dt;
          b.hucre.forEach(function (h) {
            if (h.aci < 0) h.aci = Math.min(0, h.aci + dt * 9);
            if (h.parla > 0) h.parla -= dt;
          });
          if (yuruyus) {
            yuruyus.u += dt / Math.max(2.2, yuruyus.noktalar.length * 0.28);
            if (yuruyus.u >= 1) bulmacaBitti();
          }
        }

        /* ----- Çizim ----- */
        function patika(m, renk, kalinlik) {
          c.strokeStyle = renk; c.lineWidth = kalinlik; c.lineCap = 'round'; c.lineJoin = 'round';
          YON.forEach(function (y) {
            if (!(m & y.bit)) return;
            c.beginPath(); c.moveTo(0, 0); c.lineTo(y.x * T / 2, y.y * T / 2); c.stroke();
          });
        }
        function etiket(m, x, y, boy) {
          if (!m) return;
          c.font = '900 ' + boy + 'px Manset, serif'; c.textAlign = 'center';
          c.lineWidth = boy * 0.3; c.strokeStyle = '#f1e4c6'; c.lineJoin = 'round'; c.strokeText(m, x, y);
          c.fillStyle = '#2b2118'; c.fillText(m, x, y);
        }

        function ciz() {
          var u = T / 100, i, p;
          c.setTransform(dpr, 0, 0, dpr, 0, 0);
          var g = c.createLinearGradient(0, 0, 0, H);
          g.addColorStop(0, '#93ab7c'); g.addColorStop(1, '#6f8a5e');
          c.fillStyle = g; c.fillRect(0, 0, W, H);
          // çevredeki ağaçlar
          var rs = IP.tohumluRastgele(61 + b.no);
          for (i = 0; i < 46; i++) {
            var ax = rs() * W, ay = rs() * H, ab = (0.5 + rs() * 0.6) * 30 * u;
            if (ax > gx - T * 1.6 && ax < gx + b.sutun * T + T * 1.6 && ay > gy - 10 && ay < gy + b.satir * T + 10) continue;
            c.fillStyle = '#4f6d4a'; c.strokeStyle = 'rgba(43,33,24,.6)'; c.lineWidth = 2 * u;
            c.beginPath(); c.moveTo(ax, ay - ab * 1.6); c.lineTo(ax + ab * 0.7, ay); c.lineTo(ax - ab * 0.7, ay); c.closePath(); c.fill(); c.stroke();
          }

          // köyden ve kampa giden kısa yollar
          var pb = merkez(b.bas * b.sutun), ps = merkez(b.son * b.sutun + b.sutun - 1);
          c.lineCap = 'round';
          [[pb[0] - T / 2, pb[1], pb[0] - T * 1.1], [ps[0] + T / 2, ps[1], ps[0] + T * 1.1]].forEach(function (k) {
            c.strokeStyle = '#5b4630'; c.lineWidth = 30 * u; c.beginPath(); c.moveTo(k[0], k[1]); c.lineTo(k[2], k[1]); c.stroke();
            c.strokeStyle = '#ffe9a6'; c.lineWidth = 20 * u; c.beginPath(); c.moveTo(k[0], k[1]); c.lineTo(k[2], k[1]); c.stroke();
          });

          // kareler
          b.hucre.forEach(function (h, n) {
            p = merkez(n);
            var yanik = isikli[n] != null, gor = gorulen[n];
            c.save(); c.translate(p[0], p[1]);
            c.fillStyle = h.kirmizi ? '#b98a6a' : ['#a9bb8a', '#9fb381', '#b3c394'][Math.floor(h.sus * 3)];
            c.strokeStyle = '#2b2118'; c.lineWidth = 3 * u;
            c.beginPath(); c.rect(-T / 2 + 2, -T / 2 + 2, T - 4, T - 4); c.fill(); c.stroke();
            if (h.kirmizi) {
              c.fillStyle = 'rgba(179,38,30,' + (0.34 + Math.sin(zaman * 3) * 0.08) + ')'; c.fillRect(-T / 2 + 3, -T / 2 + 3, T - 6, T - 6);
              c.strokeStyle = 'rgba(120,20,15,.45)'; c.lineWidth = 3 * u;
              for (var q = -2; q <= 2; q++) { c.beginPath(); c.moveTo(-T / 2 + 6, q * T / 5 + T / 5); c.lineTo(q * T / 5 + T / 5, -T / 2 + 6); c.stroke(); }
            }
            c.rotate(h.aci);
            patika(h.m, '#5b4630', 30 * u);
            patika(h.m, gor ? '#ff9a85' : (yanik ? '#ffe9a6' : '#cdb98f'), 20 * u);
            if (yanik && !gor) patika(h.m, 'rgba(255,255,255,' + (0.25 + Math.sin(zaman * 5 + n) * 0.15) + ')', 7 * u);
            if (h.parla > 0) { c.strokeStyle = 'rgba(255,220,110,' + Math.min(1, h.parla) + ')'; c.lineWidth = 8 * u; c.strokeRect(-T / 2 + 6, -T / 2 + 6, T - 12, T - 12); }
            c.restore();
          });

          // karakol: kırmızı bölgenin ilk karesinin köşesinde gözetleme kulesi
          p = merkez(b.karakol);
          c.save(); c.translate(p[0] - T * 0.3, p[1] - T * 0.24);
          c.fillStyle = '#4a4d58'; c.strokeStyle = '#2b2118'; c.lineWidth = 3 * u;
          c.beginPath(); c.rect(-9 * u, -6 * u, 18 * u, 26 * u); c.fill(); c.stroke();
          c.beginPath(); c.rect(-14 * u, -16 * u, 28 * u, 12 * u); c.fill(); c.stroke();
          c.fillStyle = '#b3261e'; c.beginPath(); c.moveTo(-16 * u, -16 * u); c.lineTo(0, -30 * u); c.lineTo(16 * u, -16 * u); c.closePath(); c.fill(); c.stroke();
          c.restore();

          // köy (solda) ve kamp (sağda)
          var kx = pb[0] - T * 1.25, ky = pb[1];
          [[-0.2, 0.16, 0.42], [0.18, 0.2, 0.34]].forEach(function (e) {
            var ex = kx + e[0] * T, ey = ky + e[1] * T, eb = e[2] * T;
            c.lineWidth = 3 * u; c.strokeStyle = '#2b2118'; c.lineJoin = 'round';
            c.fillStyle = '#e6d3a8'; c.beginPath(); c.rect(ex - eb / 2, ey - eb * 0.7, eb, eb * 0.7); c.fill(); c.stroke();
            c.fillStyle = '#a5533a'; c.beginPath(); c.moveTo(ex - eb * 0.62, ey - eb * 0.7); c.lineTo(ex, ey - eb * 1.15); c.lineTo(ex + eb * 0.62, ey - eb * 0.7); c.closePath(); c.fill(); c.stroke();
          });
          etiket(mo.baslangic || '', kx, ky - T * 0.42, 17 * u);
          var cx = ps[0] + T * 1.2, cy = ps[1];
          c.lineWidth = 3 * u; c.strokeStyle = '#2b2118';
          c.fillStyle = '#efe6d2'; c.beginPath(); c.moveTo(cx - 34 * u, cy + 22 * u); c.lineTo(cx, cy - 26 * u); c.lineTo(cx + 34 * u, cy + 22 * u); c.closePath(); c.fill(); c.stroke();
          c.fillStyle = '#3a2a1c'; c.beginPath(); c.moveTo(cx - 9 * u, cy + 22 * u); c.lineTo(cx, cy - 2 * u); c.lineTo(cx + 9 * u, cy + 22 * u); c.closePath(); c.fill();
          c.lineWidth = 4 * u; c.beginPath(); c.moveTo(cx + 30 * u, cy + 22 * u); c.lineTo(cx + 30 * u, cy - 58 * u); c.stroke();
          IP.cizim.bayrak(c, cx + 32 * u, cy - 57 * u, 36 * u, 24 * u, zaman);
          etiket(mo.bitis || '', Math.min(cx, W - 100 * u), cy - T * 0.66, 15 * u);

          // yol kurulunca: efeler köyden kampa yürür
          if (yuruyus) {
            var np = yuruyus.noktalar, adet = np.length - 1;
            for (i = 2; i >= 0; i--) {
              var ku = Math.max(0, Math.min(0.9999, yuruyus.u * 1.12 - i * 0.05)), dilim = Math.floor(ku * adet), o = ku * adet - dilim;
              var x = np[dilim][0] + (np[dilim + 1][0] - np[dilim][0]) * o, y = np[dilim][1] + (np[dilim + 1][1] - np[dilim][1]) * o;
              IP.cizim.kisi(c, x, y + 26 * u - Math.abs(Math.sin(zaman * 9 + i)) * 4 * u, 0.36 * u, { bas: 'efe', govde: ['#4a5a3a', '#3d4f6b', '#6b5a4a'][i], kusak: '#b3261e' });
            }
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
          IP.oyunlar.dagyolu.durum = null;
        }
        IP.temizlikEkle(kapat);
        // Otomatik oynatma testi karelerin ekrandaki yerini ve çözümü buradan okur.
        IP.oyunlar.dagyolu.durum = function () {
          var r = tuval.getBoundingClientRect();
          return {
            asama: asama, no: no, sayac: sayac,
            hucreler: b.hucre.map(function (h, n) { var p = merkez(n); return { x: r.left + p[0], y: r.top + p[1], m: h.m, hedef: h.hedef, kirmizi: h.kirmizi }; })
          };
        };
        requestAnimationFrame(kare);
        gostergeYaz();

        kaplama(mo.ad || 'Mini oyun', [
          mo.aciklama || '',
          '• Bir patika parçasına dokun: çeyrek tur döner.',
          '• Köyden kampa kesintisiz bir yol kur. Köye bağlanan parçalar parlar.',
          '• Yol, karakolun görüş alanından (kırmızı kareler) geçmemeli.',
          '• Takılırsan "İpucu" düğmesine bas.'
        ], [['Başla ▶', function () { bulmacaAc(0); }]]);
      });
    }
  };
})();
