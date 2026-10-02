/* 2 boyutlu çizimler: Hikâye panelleri, portreler, harita kâğıdı ve kıvılcım efektleri.
   Hiç resim dosyası kullanılmaz; her şey tuval (canvas) üzerine kodla çizilir.
   Şiddet semboliktir: silah, kan ya da ölüm çizilmez. */
(function () {
  'use strict';
  var IP = window.IP;
  var TAU = Math.PI * 2;
  var R = { krem: '#f1e4c6', kagit: '#e6d3a8', sepya: '#8a6a45', koyu: '#2b2118', kirmizi: '#b3261e', mavi: '#2c5a85', altin: '#e0a83a' };
  IP.RENK = R;

  /* ---------- Harita verisi (coğrafya; tarihî içerik değildir) ---------- */
  IP.cografya = {
    kutu: { boylam0: 25.5, boylam1: 45.0, enlem0: 35.5, enlem1: 42.5 },
    // Türkiye'nin sadeleştirilmiş sınırı: [boylam, enlem]
    sinir: [
      [26.05, 40.65], [26.33, 41.25], [26.58, 41.65], [26.95, 42.0], [27.55, 42.08], [28.03, 41.98],
      [28.2, 41.55], [29.0, 41.25], [29.6, 41.17], [30.3, 41.2], [31.2, 41.1], [31.45, 41.32], [32.1, 41.6],
      [32.75, 41.85], [33.4, 42.0], [34.2, 41.97], [34.95, 42.08], [35.2, 42.0], [35.25, 41.7], [36.05, 41.72],
      [36.35, 41.28], [36.65, 41.38], [37.3, 41.12], [37.8, 41.0], [38.4, 40.93], [39.2, 41.07], [39.75, 41.0],
      [40.5, 41.03], [41.0, 41.2], [41.55, 41.52], [42.6, 41.58], [43.2, 41.3], [43.47, 41.1], [43.75, 40.75],
      [43.62, 40.2], [44.3, 40.03], [44.8, 39.7], [44.42, 39.42], [44.05, 39.36], [44.3, 38.85], [44.3, 38.35],
      [44.22, 37.9], [44.6, 37.72], [44.82, 37.3], [44.79, 37.15], [44.3, 37.0], [43.9, 37.25], [43.1, 37.37],
      [42.36, 37.1], [41.3, 37.07], [40.7, 37.1], [40.0, 36.82], [39.2, 36.67], [38.5, 36.85], [38.0, 36.83],
      [37.1, 36.65], [36.67, 36.83], [36.6, 36.25], [36.2, 35.83], [35.92, 35.93], [35.9, 36.42], [36.17, 36.6],
      [36.2, 36.85], [35.8, 36.77], [35.35, 36.56], [34.9, 36.72], [34.63, 36.8], [34.3, 36.6], [33.9, 36.3],
      [33.65, 36.15], [32.8, 36.02], [32.3, 36.27], [32.0, 36.54], [31.4, 36.75], [30.7, 36.88], [30.57, 36.6],
      [30.4, 36.2], [30.15, 36.3], [29.63, 36.2], [29.3, 36.25], [29.1, 36.62], [28.75, 36.7], [28.27, 36.85],
      [27.37, 36.68], [27.45, 37.03], [27.25, 37.35], [27.25, 37.87], [26.3, 38.3], [26.5, 38.67], [26.9, 38.75],
      [26.88, 39.07], [26.7, 39.3], [27.0, 39.58], [26.07, 39.48], [26.17, 39.95], [26.2, 40.05], [26.75, 40.6]
    ],
    marmara: [
      [26.65, 40.38], [27.1, 40.62], [27.5, 40.97], [28.25, 41.07], [28.95, 41.0], [29.4, 40.8], [29.9, 40.77],
      [29.9, 40.7], [29.3, 40.65], [29.1, 40.45], [28.6, 40.38], [27.95, 40.37], [27.75, 40.52], [27.3, 40.42], [26.8, 40.32]
    ],
    bogazlar: [[[29.02, 41.0], [29.12, 41.24]], [[26.65, 40.38], [26.2, 40.02]]],
    // [boylam, enlem] → 0..1 arası harita konumu
    oran: function (b, e) {
      var k = this.kutu;
      return [(b - k.boylam0) / (k.boylam1 - k.boylam0), (k.enlem1 - e) / (k.enlem1 - k.enlem0)];
    }
  };

  /* ---------- Küçük çizim yardımcıları ---------- */
  function daire(c, x, y, r) { c.beginPath(); c.arc(x, y, r, 0, TAU); }
  function gok(c, ust, alt) {
    var g = c.createLinearGradient(0, 0, 0, 900);
    g.addColorStop(0, ust); g.addColorStop(1, alt);
    c.fillStyle = g; c.fillRect(0, 0, 1600, 900);
  }
  function tepeler(c, y, genlik, renk, faz) {
    c.fillStyle = renk; c.beginPath(); c.moveTo(0, 900);
    for (var x = 0; x <= 1600; x += 40) {
      c.lineTo(x, y + Math.sin(x * 0.006 + faz) * genlik + Math.sin(x * 0.017 + faz * 2) * genlik * 0.4);
    }
    c.lineTo(1600, 900); c.closePath(); c.fill();
  }
  function zemin(c, y, renk) {
    c.fillStyle = renk; c.fillRect(0, y, 1600, 900 - y);
    c.strokeStyle = 'rgba(43,33,24,.18)'; c.lineWidth = 3;
    for (var i = 0; i < 26; i++) {
      var x = (i * 137) % 1600, yy = y + 30 + ((i * 71) % (870 - y));
      c.beginPath(); c.arc(x, yy, 26, Math.PI * 1.1, Math.PI * 1.9); c.stroke();
    }
    c.strokeStyle = R.koyu; c.lineWidth = 5; c.beginPath(); c.moveTo(0, y); c.lineTo(1600, y); c.stroke();
  }
  function bulut(c, x, y, s, renk) {
    c.fillStyle = renk;
    [[0, 0, 60], [55, -18, 48], [105, 4, 52], [-50, 10, 40]].forEach(function (b) {
      daire(c, x + b[0] * s, y + b[1] * s, b[2] * s); c.fill();
    });
  }
  function kuslar(c, t, renk) {
    c.strokeStyle = renk || R.koyu; c.lineWidth = 4; c.lineCap = 'round';
    for (var i = 0; i < 4; i++) {
      var x = ((t * 55 + i * 430) % 1900) - 150, y = 130 + i * 38 + Math.sin(t * 1.5 + i) * 14;
      var k = 12 + Math.sin(t * 9 + i * 2) * 7;
      c.beginPath(); c.moveTo(x - 18, y - k); c.quadraticCurveTo(x - 6, y - 4, x, y);
      c.quadraticCurveTo(x + 6, y - 4, x + 18, y - k); c.stroke();
    }
  }

  // Ev ya da dükkân. (x, y) sol alt köşedir.
  function ev(c, x, y, w, h, o) {
    o = o || {};
    c.lineWidth = 5; c.strokeStyle = o.cizgi || R.koyu; c.lineJoin = 'round';
    c.fillStyle = o.renk || '#d9c39a';
    c.beginPath(); c.rect(x, y - h, w, h); c.fill(); c.stroke();
    if (o.cati === 'kiremit') {
      c.fillStyle = o.catiRenk || '#a5533a';
      c.beginPath(); c.moveTo(x - 12, y - h); c.lineTo(x + w / 2, y - h - h * 0.32); c.lineTo(x + w + 12, y - h); c.closePath();
      c.fill(); c.stroke();
    } else {
      c.fillStyle = o.catiRenk || R.sepya;
      c.beginPath(); c.rect(x - 8, y - h - 16, w + 16, 16); c.fill(); c.stroke();
    }
    var n = o.pencere == null ? 2 : o.pencere, pw = Math.min(40, w * 0.2), ph = pw * 1.3;
    for (var i = 0; i < n; i++) {
      var px = x + w * (i + 0.5) / n - pw / 2, py = y - h * 0.86;
      if (o.isik) {
        var g = c.createRadialGradient(px + pw / 2, py + ph / 2, 2, px + pw / 2, py + ph / 2, pw * 2.4);
        g.addColorStop(0, 'rgba(255,215,106,.55)'); g.addColorStop(1, 'rgba(255,215,106,0)');
        c.fillStyle = g; c.fillRect(px - pw * 2, py - ph * 2, pw * 5, ph * 5);
      }
      c.fillStyle = o.isik ? '#ffd76a' : (o.kepenk ? '#5b4630' : (o.camRenk || '#6b879a'));
      c.beginPath(); c.rect(px, py, pw, ph); c.fill(); c.stroke();
      c.beginPath(); c.moveTo(px + pw / 2, py); c.lineTo(px + pw / 2, py + ph); c.stroke();
    }
    if (o.dukkan) {
      var dx = x + w * 0.14, dw = w * 0.72, dh = h * 0.44;
      c.fillStyle = o.kepenk ? '#5b4630' : '#3a2a1c';
      c.beginPath(); c.rect(dx, y - dh, dw, dh); c.fill(); c.stroke();
      if (o.kepenk) {
        c.lineWidth = 3;
        for (var k = 1; k < 6; k++) { c.beginPath(); c.moveTo(dx, y - dh + k * dh / 6); c.lineTo(dx + dw, y - dh + k * dh / 6); c.stroke(); }
        c.lineWidth = 5;
      } else {
        // tezgâhtaki mallar
        ['#c98a3a', '#8a9a5b', '#b3261e', '#e0c070'].forEach(function (r, j) {
          c.fillStyle = r; daire(c, dx + dw * (0.2 + j * 0.2), y - 16, 13); c.fill(); c.stroke();
        });
      }
      if (o.tente) {
        var ty = y - dh - 6, serit = 6;
        for (var s = 0; s < serit; s++) {
          c.fillStyle = s % 2 ? R.krem : o.tente;
          c.beginPath();
          c.moveTo(dx - 10 + (dw + 20) * s / serit, ty - 26);
          c.lineTo(dx - 10 + (dw + 20) * (s + 1) / serit, ty - 26);
          c.lineTo(dx - 26 + (dw + 52) * (s + 1) / serit, ty + 22);
          c.lineTo(dx - 26 + (dw + 52) * s / serit, ty + 22);
          c.closePath(); c.fill(); c.stroke();
        }
      }
    } else if (!o.kapisiz) {
      c.fillStyle = o.kapiRenk || '#5b3a22';
      c.beginPath(); c.rect(x + w * 0.4, y - h * 0.36, w * 0.2, h * 0.36); c.fill(); c.stroke();
    }
  }

  // İnsan figürü. (x, y) ayak hizasıdır. siluet verilirse tek renk gölge olarak çizilir.
  function kisi(c, x, y, s, o) {
    o = o || {};
    var sil = o.siluet, govde = sil || o.govde || '#7a5c3e', ten = sil || o.ten || '#e2b98c', cizgi = sil || R.koyu;
    c.save(); c.translate(x, y); c.scale(s * (o.yon === -1 ? -1 : 1), s);
    c.lineJoin = 'round'; c.lineCap = 'round';
    var kollar = o.kol === 'acik' ? [[-22, -108, -80, -100], [22, -108, 80, -100]]
      : o.kol === 'yukari' ? [[-22, -108, -48, -178], [22, -108, 48, -178]]
        : [[-25, -108, -33, -54], [25, -108, 33, -54]];
    kollar.forEach(function (k) {
      c.strokeStyle = cizgi; c.lineWidth = 20; c.beginPath(); c.moveTo(k[0], k[1]); c.lineTo(k[2], k[3]); c.stroke();
      c.strokeStyle = govde; c.lineWidth = 11; c.beginPath(); c.moveTo(k[0], k[1]); c.lineTo(k[2], k[3]); c.stroke();
      if (!sil) { c.fillStyle = ten; daire(c, k[2], k[3], 7); c.fill(); }
    });
    c.strokeStyle = cizgi; c.lineWidth = 5; c.fillStyle = govde;
    c.beginPath();
    if (o.uzun) {
      c.moveTo(-26, -120); c.quadraticCurveTo(-46, -40, -42, 0); c.lineTo(42, 0); c.quadraticCurveTo(46, -40, 26, -120);
    } else {
      c.moveTo(-25, -120); c.lineTo(-30, -52); c.lineTo(-25, 0); c.lineTo(-5, 0); c.lineTo(0, -48);
      c.lineTo(5, 0); c.lineTo(25, 0); c.lineTo(30, -52); c.lineTo(25, -120);
    }
    c.closePath(); c.fill(); c.stroke();
    if (o.kusak && !sil) { c.fillStyle = o.kusak; c.beginPath(); c.rect(-27, -80, 54, 13); c.fill(); c.stroke(); }
    daire(c, 0, -142, 22); c.fillStyle = ten; c.fill(); c.stroke();
    if (o.sakal && !sil) {
      c.fillStyle = o.sakal; c.beginPath(); c.arc(0, -142, 22, 0.08 * Math.PI, 0.92 * Math.PI);
      c.quadraticCurveTo(0, -128, 21, -136); c.fill();
      c.beginPath(); c.arc(0, -140, 23, 0.1 * Math.PI, 0.9 * Math.PI); c.quadraticCurveTo(0, -100, 22, -134); c.fill(); c.stroke();
    }
    if (o.bas === 'fes') {
      c.fillStyle = sil || '#a3271f'; c.beginPath(); c.moveTo(-18, -158); c.lineTo(-13, -186); c.lineTo(13, -186); c.lineTo(18, -158); c.closePath(); c.fill(); c.stroke();
    } else if (o.bas === 'sarik') {
      c.fillStyle = sil || '#f3ead6';
      c.beginPath(); c.ellipse(0, -162, 27, 14, 0, 0, TAU); c.fill(); c.stroke();
      c.beginPath(); c.ellipse(0, -173, 17, 10, 0, 0, TAU); c.fill(); c.stroke();
    } else if (o.bas === 'ortu') {
      c.fillStyle = sil || o.ortu || '#efe6d2';
      c.beginPath(); c.moveTo(-28, -110); c.quadraticCurveTo(-36, -152, -18, -164); c.quadraticCurveTo(0, -174, 18, -164);
      c.quadraticCurveTo(36, -152, 28, -110); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = ten; c.beginPath(); c.ellipse(0, -140, 14, 17, 0, 0, TAU); c.fill(); c.stroke();
    } else if (o.bas === 'kep') {
      c.fillStyle = sil || '#4a5568'; c.beginPath(); c.rect(-20, -174, 40, 18); c.fill(); c.stroke();
      c.beginPath(); c.moveTo(18, -158); c.lineTo(34, -156); c.stroke();
    }
    c.restore();
  }

  // Omzunda süt güğümleri taşıyan sütçü.
  function sutcu(c, x, y, s, t, o) {
    o = o || {};
    var sal = Math.sin(t * 5) * 0.07;
    if (!o.gugumsuz) {
      c.save(); c.translate(x, y - 122 * s); c.lineCap = 'round';
      c.strokeStyle = R.koyu; c.lineWidth = 12 * s; c.beginPath(); c.moveTo(-88 * s, 0); c.lineTo(88 * s, 0); c.stroke();
      c.strokeStyle = '#9b7648'; c.lineWidth = 6 * s; c.beginPath(); c.moveTo(-88 * s, 0); c.lineTo(88 * s, 0); c.stroke();
      [-84, 84].forEach(function (ux) {
        c.save(); c.translate(ux * s, 0); c.rotate(sal * (ux < 0 ? 1 : -1));
        c.strokeStyle = R.koyu; c.lineWidth = 3 * s; c.beginPath(); c.moveTo(0, 0); c.lineTo(0, 34 * s); c.stroke();
        c.fillStyle = '#cfd3d6'; c.lineWidth = 4 * s;
        c.beginPath(); c.moveTo(-9 * s, 34 * s); c.lineTo(9 * s, 34 * s); c.lineTo(9 * s, 44 * s); c.lineTo(16 * s, 54 * s);
        c.lineTo(16 * s, 92 * s); c.lineTo(-16 * s, 92 * s); c.lineTo(-16 * s, 54 * s); c.lineTo(-9 * s, 44 * s); c.closePath();
        c.fill(); c.stroke();
        c.restore();
      });
      c.restore();
    }
    kisi(c, x, y, s, { bas: 'sarik', sakal: '#4a3a2a', govde: '#5f6f52', kusak: R.kirmizi, kol: o.kol, yon: o.yon });
  }

  // Kâğıt dokusu ve köşe kararması: çizimlere eski gazete havası verir.
  var dokuTuvali = null;
  function doku(c) {
    if (!dokuTuvali) {
      dokuTuvali = document.createElement('canvas'); dokuTuvali.width = 400; dokuTuvali.height = 225;
      var d = dokuTuvali.getContext('2d'), rs = IP.tohumluRastgele(7);
      for (var i = 0; i < 5000; i++) {
        d.fillStyle = 'rgba(60,40,20,' + (rs() * 0.16) + ')';
        d.fillRect(rs() * 400, rs() * 225, 1 + rs() * 1.5, 1 + rs() * 1.5);
      }
    }
    c.drawImage(dokuTuvali, 0, 0, 1600, 900);
    var g = c.createRadialGradient(800, 450, 420, 800, 450, 980);
    g.addColorStop(0, 'rgba(40,25,10,0)'); g.addColorStop(1, 'rgba(40,25,10,.42)');
    c.fillStyle = g; c.fillRect(0, 0, 1600, 900);
  }

  function kaleCiz(c, x, y, w, renk, cizgi) {
    var h = w * 0.22;
    c.fillStyle = renk; c.strokeStyle = cizgi || R.koyu; c.lineWidth = cizgi === 'yok' ? 0 : 5; c.lineJoin = 'round';
    function kutu(kx, ky, kw, kh, dis) {
      c.beginPath(); c.moveTo(kx, ky);
      c.lineTo(kx, ky - kh);
      var n = Math.max(3, Math.round(kw / dis));
      for (var i = 0; i < n; i++) {
        var a = kx + kw * i / n, b = kx + kw * (i + 0.5) / n, d = kx + kw * (i + 1) / n;
        c.lineTo(a, ky - kh - dis * 0.5); c.lineTo(b, ky - kh - dis * 0.5); c.lineTo(b, ky - kh); c.lineTo(d, ky - kh);
      }
      c.lineTo(kx + kw, ky); c.closePath(); c.fill(); if (cizgi !== 'yok') c.stroke();
    }
    kutu(x - w / 2, y, w, h, w * 0.06);
    kutu(x - w / 2 - w * 0.06, y, w * 0.16, h * 1.5, w * 0.05);
    kutu(x + w / 2 - w * 0.1, y, w * 0.16, h * 1.5, w * 0.05);
    kutu(x - w * 0.1, y, w * 0.2, h * 1.9, w * 0.05);
  }

  // Dalgalanan bayrak.
  var bayrakTuvali = null;
  function bayrak(c, x, y, w, h, t) {
    if (!bayrakTuvali) {
      bayrakTuvali = document.createElement('canvas'); bayrakTuvali.width = 300; bayrakTuvali.height = 200;
      var b = bayrakTuvali.getContext('2d');
      b.fillStyle = '#c8102e'; b.fillRect(0, 0, 300, 200);
      b.fillStyle = '#fff'; daire(b, 112, 100, 50); b.fill();
      b.fillStyle = '#c8102e'; daire(b, 125, 100, 40); b.fill();
      b.fillStyle = '#fff'; b.beginPath();
      for (var i = 0; i < 10; i++) {
        var a = Math.PI + i * Math.PI / 5, r = i % 2 ? 9.5 : 25;
        b.lineTo(170 + Math.cos(a) * r, 100 + Math.sin(a) * r);
      }
      b.closePath(); b.fill();
    }
    var n = 30;
    for (var s = 0; s < n; s++) {
      var o = s / n, dy = Math.sin(t * 4 - o * 6) * h * 0.09 * o;
      c.drawImage(bayrakTuvali, o * 300, 0, 300 / n + 1, 200, x + o * w, y + dy, w / n + 1, h);
      c.fillStyle = 'rgba(0,0,0,' + (0.1 + Math.cos(t * 4 - o * 6) * 0.1) * o + ')';
      c.fillRect(x + o * w, y + dy, w / n + 1, h);
    }
  }

  /* ---------- Hikâye sahneleri (1600 × 900 sanal ölçü) ---------- */
  var DUKKAN_RENK = ['#e2cfa4', '#d6bd8c', '#e8d9b5', '#d0b584', '#dec79a', '#d9c39a'];
  var evlerGece = null;

  var SAHNELER = {
    // 1. Çarşı: gündüz, dükkânlar açık, sütçü yürüyor.
    carsi: function (c, t) {
      gok(c, '#f7e6b9', '#ecc98a');
      var g = c.createRadialGradient(1290, 180, 20, 1290, 180, 300);
      g.addColorStop(0, 'rgba(255,250,220,.95)'); g.addColorStop(0.25, 'rgba(255,240,190,.5)'); g.addColorStop(1, 'rgba(255,240,190,0)');
      c.fillStyle = g; c.fillRect(900, 0, 700, 520);
      bulut(c, 300 + (t * 8) % 1700 - 200, 150, 1, 'rgba(255,250,235,.8)');
      bulut(c, (900 + t * 5) % 1900 - 200, 240, 0.7, 'rgba(255,250,235,.6)');
      tepeler(c, 470, 46, '#dcbf88', 0.3);
      kaleCiz(c, 1120, 452, 260, '#cfae78', 'yok');
      tepeler(c, 540, 30, '#c9a56f', 1.7);
      for (var i = 0; i < 6; i++) {
        ev(c, 30 + i * 262, 668, 236, 200 + (i % 2) * 44, { dukkan: true, tente: i % 2 ? R.kirmizi : R.mavi, renk: DUKKAN_RENK[i] });
      }
      zemin(c, 668, '#d2b680');
      kisi(c, 190, 742, 1, { bas: 'fes', govde: '#55657a' });
      kisi(c, 285, 748, 0.96, { bas: 'ortu', uzun: true, govde: '#7b4a55' });
      kisi(c, 345, 752, 0.6, { govde: '#8a6a45' });
      kisi(c, 1400, 740, 1, { bas: 'ortu', uzun: true, govde: '#4f6d5c', yon: -1 });
      kisi(c, 1490, 746, 1.02, { bas: 'fes', govde: '#6b5a4a', yon: -1 });
      var x = 800 + Math.sin(t * 0.4) * 300, yon = Math.cos(t * 0.4) >= 0 ? 1 : -1;
      c.fillStyle = 'rgba(43,33,24,.22)'; c.beginPath(); c.ellipse(x, 818, 70, 13, 0, 0, TAU); c.fill();
      sutcu(c, x, 814 - Math.abs(Math.sin(t * 5)) * 7, 1.3, t, { yon: yon });
      kuslar(c, t);
      doku(c);
    },

    // 2. İşgal: kapalı kepenkler, sokaktan geçen asker gölgeleri.
    isgal: function (c, t) {
      gok(c, '#9c968c', '#857c6f');
      bulut(c, (t * 14) % 2000 - 200, 130, 1.5, 'rgba(70,66,70,.55)');
      bulut(c, (700 + t * 10) % 2000 - 200, 210, 1.2, 'rgba(70,66,70,.45)');
      bulut(c, (1300 + t * 12) % 2000 - 200, 110, 1.3, 'rgba(70,66,70,.5)');
      tepeler(c, 480, 46, '#8f8674', 0.3);
      tepeler(c, 540, 30, '#7d7462', 1.7);
      for (var i = 0; i < 6; i++) {
        ev(c, 30 + i * 262, 668, 236, 200 + (i % 2) * 44, { dukkan: true, kepenk: true, renk: ['#a89f8b', '#9c927d', '#aea591'][i % 3], catiRenk: '#6b6152' });
      }
      // kepenk aralığından bakan gözler
      var kirp = (t % 4) < 0.15;
      if (!kirp) {
        c.fillStyle = '#f1e4c6';
        [[420, 478], [1210, 478]].forEach(function (p) { daire(c, p[0], p[1], 5); c.fill(); daire(c, p[0] + 18, p[1], 5); c.fill(); });
      }
      zemin(c, 668, '#958a70');
      kisi(c, 110, 738, 0.92, { bas: 'ortu', uzun: true, govde: '#5a4a4f' });
      kisi(c, 185, 742, 0.92, { bas: 'fes', govde: '#4d4d55' });
      kisi(c, 1510, 740, 0.92, { bas: 'ortu', uzun: true, govde: '#4a5a52', yon: -1 });
      for (var a = 0; a < 5; a++) {
        var x = ((t * 70 + a * 190) % 2100) - 250, z = Math.abs(Math.sin(t * 4 + a * Math.PI)) * 9;
        c.fillStyle = 'rgba(20,18,26,.35)'; c.beginPath(); c.ellipse(x + 50, 842, 110, 14, 0, 0, TAU); c.fill();
        kisi(c, x, 838 - z, 1.38, { siluet: '#23262e', bas: 'kep' });
      }
      c.fillStyle = 'rgba(30,25,45,.2)'; c.fillRect(0, 0, 1600, 900);
      doku(c);
    },

    // 3. Kıvılcım: hamamın önü. Karşı çıkış bir kıvılcım patlamasıyla sembolize edilir.
    kivilcim: function (c, t) {
      gok(c, '#dd8a55', '#f3d9a2');
      tepeler(c, 470, 40, '#d9a56f', 0.9);
      // kubbeli hamam
      c.lineWidth = 5; c.strokeStyle = R.koyu; c.lineJoin = 'round';
      [[760, 150], [560, 84], [960, 84]].forEach(function (k) {
        c.fillStyle = '#b9a078'; c.beginPath(); c.arc(k[0], 440, k[1], Math.PI, 0); c.closePath(); c.fill(); c.stroke();
        c.beginPath(); c.moveTo(k[0], 440 - k[1]); c.lineTo(k[0], 440 - k[1] - 24); c.stroke();
        daire(c, k[0], 440 - k[1] - 28, 7); c.fillStyle = R.altin; c.fill(); c.stroke();
      });
      c.fillStyle = '#d6c097'; c.beginPath(); c.rect(400, 440, 720, 230); c.fill(); c.stroke();
      c.lineWidth = 2.5;
      for (var sy = 0; sy < 5; sy++) for (var sx = 0; sx < 9; sx++) {
        c.strokeRect(400 + sx * 80 + (sy % 2) * 40 - 40, 440 + sy * 46, 80, 46);
      }
      c.fillStyle = '#d6c097'; c.fillRect(1120, 430, 30, 250); c.fillRect(366, 430, 34, 250);
      c.lineWidth = 5; c.strokeRect(400, 440, 720, 230);
      c.fillStyle = '#3a2a1c'; c.beginPath(); c.moveTo(700, 670); c.lineTo(700, 560); c.arc(760, 560, 60, Math.PI, 0); c.lineTo(820, 670); c.closePath(); c.fill(); c.stroke();
      [480, 580, 940, 1040].forEach(function (px) {
        c.fillStyle = '#6b879a'; c.beginPath(); c.moveTo(px - 18, 560); c.lineTo(px - 18, 520); c.arc(px, 520, 18, Math.PI, 0); c.lineTo(px + 18, 560); c.closePath(); c.fill(); c.stroke();
      });
      zemin(c, 670, '#cba877');
      // kadınlar (sağda), sütçü onların önünde durur
      kisi(c, 1330, 800, 1.2, { bas: 'ortu', uzun: true, govde: '#7b4a55', yon: -1 });
      kisi(c, 1440, 812, 1.22, { bas: 'ortu', uzun: true, govde: '#4f6d5c', yon: -1 });
      kisi(c, 1250, 818, 1.18, { bas: 'ortu', uzun: true, govde: '#5d5a7a', yon: -1 });
      sutcu(c, 1040, 826, 1.42, t, { kol: 'acik', yon: -1, gugumsuz: true });
      // asker gölgeleri (solda, çerçevenin kenarında)
      kisi(c, 120, 836, 1.5, { siluet: '#23262e', bas: 'kep' });
      kisi(c, 270, 846, 1.5, { siluet: '#2b2e38', bas: 'kep' });
      // kıvılcım
      var kx = 640, ky = 620, vurus = 1 + Math.sin(t * 7) * 0.12;
      var g = c.createRadialGradient(kx, ky, 10, kx, ky, 330);
      g.addColorStop(0, 'rgba(255,236,160,.85)'); g.addColorStop(0.4, 'rgba(255,170,60,.3)'); g.addColorStop(1, 'rgba(255,170,60,0)');
      c.fillStyle = g; c.fillRect(kx - 340, ky - 340, 680, 680);
      c.save(); c.translate(kx, ky); c.rotate(t * 0.4);
      c.beginPath();
      for (var i = 0; i < 24; i++) {
        var a = i * TAU / 24, r = (i % 2 ? 48 : 120 + Math.sin(t * 6 + i * 1.7) * 30) * vurus;
        c.lineTo(Math.cos(a) * r, Math.sin(a) * r);
      }
      c.closePath(); c.fillStyle = R.kirmizi; c.fill(); c.lineWidth = 5; c.strokeStyle = R.koyu; c.stroke();
      c.beginPath();
      for (var j = 0; j < 16; j++) {
        var b = j * TAU / 16 + 0.2, rr = (j % 2 ? 26 : 74 + Math.sin(t * 8 + j) * 14) * vurus;
        c.lineTo(Math.cos(b) * rr, Math.sin(b) * rr);
      }
      c.closePath(); c.fillStyle = '#ffd24a'; c.fill(); c.stroke();
      c.restore();
      for (var p = 0; p < 30; p++) {
        var faz = (t * 0.7 + p / 30) % 1, ac = p * 2.4, uz = 90 + faz * 330;
        c.fillStyle = 'rgba(255,' + Math.floor(210 - faz * 120) + ',70,' + (1 - faz) + ')';
        daire(c, kx + Math.cos(ac) * uz, ky + Math.sin(ac) * uz - faz * 60, 7 * (1 - faz) + 2); c.fill();
      }
      doku(c);
    },

    // 4. Işıklar: gece, haber yayıldıkça pencereler birer birer aydınlanır.
    isiklar: function (c, t) {
      gok(c, '#0b1330', '#2c3760');
      var rs = IP.tohumluRastgele(11);
      for (var i = 0; i < 90; i++) {
        var sx = rs() * 1600, sy = rs() * 420, sp = rs() * 6;
        c.fillStyle = 'rgba(255,250,220,' + (0.35 + Math.sin(t * 2 + sp) * 0.3) + ')';
        daire(c, sx, sy, 1.5 + rs() * 2); c.fill();
      }
      c.fillStyle = '#f6efcf'; daire(c, 1340, 150, 54); c.fill();
      c.fillStyle = '#0f1836'; daire(c, 1318, 138, 48); c.fill();
      tepeler(c, 430, 60, '#18203f', 0.5);
      tepeler(c, 520, 40, '#131a34', 2.1);
      if (!evlerGece) {
        var r2 = IP.tohumluRastgele(5); evlerGece = [];
        for (var sira = 0; sira < 3; sira++) for (var e = 0; e < 6; e++) {
          evlerGece.push({
            x: 60 + e * 255 + (sira % 2) * 110 + r2() * 30, y: 560 + sira * 135 + Math.sin(e * 1.3 + sira) * 18,
            w: 150 + r2() * 50, h: 110 + r2() * 50, cati: r2() > 0.4 ? 'kiremit' : 'duz'
          });
        }
        // haberin dolaşma sırası: yılan gibi kıvrılarak
        evlerGece.forEach(function (v, n) { var s = Math.floor(n / 6), k = n % 6; v.sira = s * 6 + (s % 2 ? 5 - k : k); });
      }
      var dongu = 13, tt = t % dongu, adim = 0.5, sirali = evlerGece.slice().sort(function (a, b) { return a.sira - b.sira; });
      evlerGece.forEach(function (v) {
        var yandi = tt > v.sira * adim + 0.5;
        ev(c, v.x, v.y, v.w, v.h, {
          renk: yandi ? '#3a3f5c' : '#252b47', cati: v.cati, catiRenk: yandi ? '#5a3a3a' : '#2d2a40',
          isik: yandi, camRenk: '#10142a', kapiRenk: '#1a1a2c', cizgi: '#0a0d1c'
        });
      });
      // evden eve koşan haber kıvılcımı
      var konum = (tt - 0.5) / adim;
      if (konum >= 0 && konum < sirali.length - 1) {
        var a = sirali[Math.floor(konum)], b = sirali[Math.floor(konum) + 1], o = konum % 1;
        var hx = a.x + a.w / 2 + (b.x + b.w / 2 - a.x - a.w / 2) * o, hy = a.y - 30 + (b.y - a.y) * o - Math.sin(o * Math.PI) * 40;
        var g = c.createRadialGradient(hx, hy, 2, hx, hy, 60);
        g.addColorStop(0, 'rgba(255,240,180,1)'); g.addColorStop(0.3, 'rgba(255,190,80,.6)'); g.addColorStop(1, 'rgba(255,190,80,0)');
        c.fillStyle = g; c.fillRect(hx - 60, hy - 60, 120, 120);
      }
      doku(c);
    },

    // 5. Kurtuluş sabahı: kalede bayrak dalgalanır, halk sevinir.
    kale_bayrak: function (c, t) {
      gok(c, '#f6a65f', '#fdeec3');
      c.save(); c.translate(800, 560);
      for (var i = 0; i < 14; i++) {
        c.rotate(TAU / 14);
        c.fillStyle = 'rgba(255,250,215,' + (0.16 + Math.sin(t * 1.5 + i) * 0.06) + ')';
        c.beginPath(); c.moveTo(0, 0); c.lineTo(-90, -1300); c.lineTo(90, -1300); c.closePath();
        c.save(); c.rotate(t * 0.06); c.fill(); c.restore();
      }
      c.restore();
      c.fillStyle = '#fff6d6'; daire(c, 800, 560, 130); c.fill();
      tepeler(c, 560, 40, '#e0b377', 0.4);
      c.fillStyle = '#a9824f'; c.strokeStyle = R.koyu; c.lineWidth = 5;
      c.beginPath(); c.moveTo(150, 900); c.quadraticCurveTo(800, 250, 1450, 900); c.closePath(); c.fill(); c.stroke();
      kaleCiz(c, 800, 600, 620, '#d9c39a');
      c.fillStyle = '#3a2a1c'; c.beginPath(); c.moveTo(770, 600); c.lineTo(770, 548); c.arc(800, 548, 30, Math.PI, 0); c.lineTo(830, 600); c.closePath(); c.fill(); c.stroke();
      c.strokeStyle = R.koyu; c.lineWidth = 9; c.lineCap = 'round'; c.beginPath(); c.moveTo(800, 330); c.lineTo(800, 96); c.stroke();
      bayrak(c, 804, 104, 230, 150, t);
      tepeler(c, 800, 16, '#8a6a45', 2.4);
      var rs = IP.tohumluRastgele(21);
      for (var k = 0; k < 13; k++) {
        var x = 70 + k * 122 + rs() * 30, s = 0.95 + rs() * 0.35, z = Math.abs(Math.sin(t * 3.2 + k * 1.3)) * 16;
        kisi(c, x, 930 - z, s, { siluet: '#3a2a1c', bas: ['fes', 'ortu', 'sarik'][k % 3], kol: k % 2 ? 'yukari' : 'acik', uzun: k % 3 === 1 });
      }
      kuslar(c, t, '#5b3a22');
      doku(c);
    },

    // Görseli henüz hazır olmayan paneller için.
    bos: function (c) {
      gok(c, '#eadab4', '#dcc594');
      c.fillStyle = R.sepya; c.font = '700 54px Daktilo, monospace'; c.textAlign = 'center';
      c.fillText('[GÖRSEL BEKLENİYOR]', 800, 460);
      doku(c);
    }
  };

  IP.cizim = {
    // Bir tuvalde sahneyi canlandırır. Durdurmak için döndürdüğü fonksiyon çağrılır.
    oynat: function (tuval, sahne) {
      var ciz = typeof sahne === 'function' ? sahne : (SAHNELER[sahne] || SAHNELER.bos);
      var c = tuval.getContext('2d'), durdu = false, t0 = performance.now();
      function boyutla() {
        // clientWidth: panel çevrilirken (döndürülmüşken) bile gerçek genişliği verir
        var gen = tuval.clientWidth || 800, dpr = Math.min(window.devicePixelRatio || 1, 2);
        tuval.width = Math.max(2, Math.round(gen * dpr));
        tuval.height = Math.max(2, Math.round(gen * dpr * 9 / 16));
      }
      boyutla();
      window.addEventListener('resize', boyutla);
      function kare(simdi) {
        if (durdu) return;
        if (!tuval.isConnected) { durdur(); return; }
        var s = tuval.width / 1600;
        c.setTransform(s, 0, 0, s, 0, 0);
        ciz(c, (simdi - t0) / 1000);
        requestAnimationFrame(kare);
      }
      function durdur() { durdu = true; window.removeEventListener('resize', boyutla); }
      requestAnimationFrame(kare);
      return durdur;
    },

    // Kahraman portresi (temsilî çizim). 400 × 400 sanal ölçü.
    portre: function (tuval, tip) {
      var c = tuval.getContext('2d');
      tuval.width = 400; tuval.height = 400;
      var g = c.createRadialGradient(200, 170, 30, 200, 200, 260);
      g.addColorStop(0, '#ecd9ad'); g.addColorStop(1, '#b89868');
      c.fillStyle = g; c.fillRect(0, 0, 400, 400);
      c.lineWidth = 6; c.strokeStyle = R.koyu; c.lineJoin = 'round'; c.lineCap = 'round';
      if (tip !== 'sarikli') {
        c.fillStyle = R.sepya; c.beginPath(); c.moveTo(60, 400); c.quadraticCurveTo(200, 240, 340, 400); c.fill(); c.stroke();
        daire(c, 200, 180, 70); c.fill(); c.stroke();
        c.fillStyle = R.krem; c.font = '900 90px Manset, serif'; c.textAlign = 'center'; c.fillText('?', 200, 212);
        return;
      }
      // omuzlar ve cübbe
      c.fillStyle = '#5f6f52'; c.beginPath(); c.moveTo(30, 400); c.quadraticCurveTo(60, 290, 150, 280); c.lineTo(250, 280);
      c.quadraticCurveTo(340, 290, 370, 400); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = '#efe6d2'; c.beginPath(); c.moveTo(165, 282); c.lineTo(200, 340); c.lineTo(235, 282); c.closePath(); c.fill(); c.stroke();
      // boyun ve yüz
      c.fillStyle = '#d9ab7c'; c.beginPath(); c.rect(172, 240, 56, 50); c.fill(); c.stroke();
      c.fillStyle = '#e2b98c'; c.beginPath(); c.ellipse(200, 190, 68, 82, 0, 0, TAU); c.fill(); c.stroke();
      // sakal
      c.fillStyle = '#4a3a2a'; c.beginPath(); c.moveTo(134, 196); c.quadraticCurveTo(140, 300, 200, 304); c.quadraticCurveTo(260, 300, 266, 196);
      c.quadraticCurveTo(250, 236, 200, 232); c.quadraticCurveTo(150, 236, 134, 196); c.closePath(); c.fill(); c.stroke();
      // bıyık, burun, gözler, kaşlar
      c.beginPath(); c.moveTo(166, 226); c.quadraticCurveTo(200, 206, 234, 226); c.quadraticCurveTo(200, 222, 166, 226); c.fill(); c.stroke();
      c.lineWidth = 5; c.beginPath(); c.moveTo(200, 170); c.quadraticCurveTo(190, 200, 204, 206); c.stroke();
      c.fillStyle = R.koyu; daire(c, 172, 174, 7); c.fill(); daire(c, 228, 174, 7); c.fill();
      c.lineWidth = 7; c.beginPath(); c.moveTo(154, 156); c.quadraticCurveTo(172, 146, 188, 156); c.stroke();
      c.beginPath(); c.moveTo(212, 156); c.quadraticCurveTo(228, 146, 246, 156); c.stroke();
      // sarık
      c.lineWidth = 6; c.fillStyle = '#f3ead6';
      c.beginPath(); c.ellipse(200, 124, 92, 46, 0, 0, TAU); c.fill(); c.stroke();
      c.beginPath(); c.ellipse(200, 92, 58, 34, 0, 0, TAU); c.fill(); c.stroke();
      c.lineWidth = 4; c.beginPath(); c.moveTo(118, 112); c.quadraticCurveTo(200, 160, 282, 112); c.stroke();
      c.beginPath(); c.moveTo(126, 134); c.quadraticCurveTo(200, 176, 274, 134); c.stroke();
      var rs = IP.tohumluRastgele(3);
      for (var i = 0; i < 1500; i++) { c.fillStyle = 'rgba(60,40,20,' + rs() * 0.12 + ')'; c.fillRect(rs() * 400, rs() * 400, 2, 2); }
    },

    // Rehber Telgrafçı Nuri (kurgusal karakter) — mavi tonlarla ayrılır.
    nuri: function (tuval) {
      var c = tuval.getContext('2d');
      tuval.width = 200; tuval.height = 200;
      c.fillStyle = '#cfe0ee'; c.fillRect(0, 0, 200, 200);
      c.lineWidth = 5; c.strokeStyle = '#17324a'; c.lineJoin = 'round'; c.lineCap = 'round';
      c.fillStyle = R.mavi; c.beginPath(); c.moveTo(20, 200); c.quadraticCurveTo(40, 140, 100, 140); c.quadraticCurveTo(160, 140, 180, 200); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = '#f3ead6'; c.beginPath(); c.moveTo(84, 142); c.lineTo(100, 172); c.lineTo(116, 142); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = '#e8c39a'; daire(c, 100, 96, 44); c.fill(); c.stroke();
      c.fillStyle = '#3d4f63'; c.beginPath(); c.moveTo(54, 80); c.quadraticCurveTo(60, 38, 100, 40); c.quadraticCurveTo(142, 38, 146, 80); c.closePath(); c.fill(); c.stroke();
      c.beginPath(); c.moveTo(50, 82); c.quadraticCurveTo(100, 70, 164, 86); c.stroke();
      c.fillStyle = '#17324a'; daire(c, 84, 98, 5); c.fill(); daire(c, 116, 98, 5); c.fill();
      c.beginPath(); c.arc(100, 108, 16, 0.2 * Math.PI, 0.8 * Math.PI); c.stroke();
    },

    // Eski harita kâğıdı: Anadolu'nun şekli. Hem 3 boyutlu haritanın üst yüzü hem de yedek 2 boyutlu harita bunu kullanır.
    haritaCiz: function (c, w, h, o) {
      o = o || {};
      var G = IP.cografya;
      function yol(noktalar) {
        c.beginPath();
        noktalar.forEach(function (n, i) { var p = G.oran(n[0], n[1]); if (i) c.lineTo(p[0] * w, p[1] * h); else c.moveTo(p[0] * w, p[1] * h); });
        c.closePath();
      }
      c.clearRect(0, 0, w, h);
      if (o.deniz) { c.fillStyle = '#12233a'; c.fillRect(0, 0, w, h); }
      c.save();
      yol(G.sinir);
      var g = c.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, '#efdfb8'); g.addColorStop(0.5, '#e4cf9f'); g.addColorStop(1, '#d6bb85');
      c.fillStyle = g; c.fill(); c.clip();
      var rs = IP.tohumluRastgele(42), i;
      for (i = 0; i < 9000; i++) { c.fillStyle = 'rgba(90,60,25,' + rs() * 0.1 + ')'; c.fillRect(rs() * w, rs() * h, 1 + rs() * 2.5, 1 + rs() * 2.5); }
      // süs olarak dağ işaretleri
      c.strokeStyle = 'rgba(110,80,45,.5)'; c.lineWidth = w / 900; c.lineJoin = 'round';
      for (i = 0; i < 230; i++) {
        var x = rs() * w, y = rs() * h, b = w / 130 * (0.6 + rs());
        c.beginPath(); c.moveTo(x - b, y + b * 0.7); c.lineTo(x, y - b * 0.6); c.lineTo(x + b, y + b * 0.7); c.stroke();
        c.beginPath(); c.moveTo(x, y - b * 0.6); c.lineTo(x + b * 0.25, y + b * 0.7); c.stroke();
      }
      // kıyı gölgesi
      yol(G.sinir); c.strokeStyle = 'rgba(120,85,40,.35)'; c.lineWidth = w / 55; c.stroke();
      yol(G.sinir); c.strokeStyle = 'rgba(120,85,40,.3)'; c.lineWidth = w / 130; c.stroke();
      c.restore();
      yol(G.sinir); c.strokeStyle = '#4a3320'; c.lineWidth = w / 520; c.lineJoin = 'round'; c.stroke();
      // Marmara Denizi ve boğazlar
      yol(G.marmara); c.fillStyle = '#12233a'; c.fill(); c.strokeStyle = '#4a3320'; c.lineWidth = w / 700; c.stroke();
      G.bogazlar.forEach(function (bg) {
        var a = G.oran(bg[0][0], bg[0][1]), d = G.oran(bg[1][0], bg[1][1]);
        c.strokeStyle = '#12233a'; c.lineWidth = w / 330; c.lineCap = 'round';
        c.beginPath(); c.moveTo(a[0] * w, a[1] * h); c.lineTo(d[0] * w, d[1] * h); c.stroke();
      });
    }
  };

  /* ---------- Kıvılcım / konfeti efekti (ekranın en üst katı) ---------- */
  var parcalar = [], efektTuvali = null, efektCtx = null, efektCalisiyor = false;
  function efektKare() {
    if (!parcalar.length) { efektCalisiyor = false; efektCtx.clearRect(0, 0, efektTuvali.width, efektTuvali.height); return; }
    efektCtx.clearRect(0, 0, efektTuvali.width, efektTuvali.height);
    parcalar = parcalar.filter(function (p) {
      p.vy += 0.18; p.x += p.vx; p.y += p.vy; p.omur -= 0.016; p.aci += p.donme;
      if (p.omur <= 0) return false;
      efektCtx.save(); efektCtx.translate(p.x, p.y); efektCtx.rotate(p.aci);
      efektCtx.globalAlpha = Math.min(1, p.omur * 2);
      efektCtx.fillStyle = p.renk;
      if (p.yuvarlak) { daire(efektCtx, 0, 0, p.boy / 2); efektCtx.fill(); } else efektCtx.fillRect(-p.boy / 2, -p.boy / 4, p.boy, p.boy / 2);
      efektCtx.restore();
      return true;
    });
    requestAnimationFrame(efektKare);
  }
  IP.efekt = {
    // (x, y) noktasından parçacık saçar.
    patlat: function (x, y, adet, renkler, yuvarlak) {
      if (!efektTuvali) { efektTuvali = document.getElementById('efekt'); efektCtx = efektTuvali.getContext('2d'); }
      efektTuvali.width = window.innerWidth; efektTuvali.height = window.innerHeight;
      renkler = renkler || ['#ffd24a', '#ff9d3a', R.kirmizi, '#fff3c4'];
      for (var i = 0; i < (adet || 40); i++) {
        var a = Math.random() * TAU, h = 2 + Math.random() * 8;
        parcalar.push({
          x: x, y: y, vx: Math.cos(a) * h, vy: Math.sin(a) * h - 3, omur: 0.8 + Math.random() * 0.8,
          boy: 5 + Math.random() * 9, renk: renkler[i % renkler.length], aci: a, donme: (Math.random() - 0.5) * 0.4, yuvarlak: !!yuvarlak
        });
      }
      if (!efektCalisiyor) { efektCalisiyor = true; requestAnimationFrame(efektKare); }
    },
    // Bir HTML öğesinin ortasından saçar.
    ogeden: function (oge, adet, renkler, yuvarlak) {
      var k = oge.getBoundingClientRect();
      this.patlat(k.left + k.width / 2, k.top + k.height / 2, adet, renkler, yuvarlak);
    }
  };
})();
