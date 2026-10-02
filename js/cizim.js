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
        : o.kol === 'cagri' ? [[-25, -108, -33, -54], [22, -108, 58, -172]]
        : o.kol === 'gozet' ? [[-25, -108, -33, -54], [22, -108, 30, -150]]
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
    } else if (o.bas === 'kalpak') {
      c.fillStyle = sil || '#2b2118'; c.beginPath(); c.moveTo(-22, -154); c.lineTo(-18, -186); c.quadraticCurveTo(0, -198, 18, -186);
      c.lineTo(22, -154); c.quadraticCurveTo(0, -162, -22, -154); c.closePath(); c.fill(); c.stroke();
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

  var YEMENI = '#b8452f';

  // Kum torbalarından siper. (x, y) sol alt köşedir.
  function siper(c, x, y, adet, sira) {
    c.strokeStyle = R.koyu; c.lineWidth = 5; c.lineJoin = 'round';
    for (var s = 0; s < sira; s++) {
      for (var i = 0; i < adet - (s % 2); i++) {
        c.fillStyle = ['#c9b48a', '#bda67a', '#d2bf97'][(i + s) % 3];
        c.beginPath(); c.ellipse(x + 40 + i * 76 + (s % 2) * 38, y - 22 - s * 38, 42, 23, 0, 0, TAU); c.fill(); c.stroke();
      }
    }
  }

  // Sırtta taşınan torba.
  function torba(c, x, y, s) {
    c.strokeStyle = R.koyu; c.lineWidth = 5 * s; c.fillStyle = '#c9b48a';
    c.beginPath(); c.ellipse(x, y, 25 * s, 32 * s, 0.2, 0, TAU); c.fill(); c.stroke();
    c.beginPath(); c.moveTo(x - 10 * s, y - 28 * s); c.lineTo(x + 14 * s, y - 24 * s); c.stroke();
  }

  // Koşan yemenili kadın. (x, y) ayak hizasıdır. o.egik: saklanıyor, o.havada: zıplıyor, o.yuk: sırtında torba var.
  function kosan(c, x, y, s, t, o) {
    o = o || {};
    var a = Math.sin(t * 13), b = Math.cos(t * 13);
    if (o.egik) { a = 0.25; b = 0; }
    if (o.havada) { a = 0.95; b = 0; }
    c.save(); c.translate(x, y); c.scale(s * (o.yon === -1 ? -1 : 1), s * (o.egik ? 0.62 : 1));
    c.rotate(o.egik ? 0.04 : 0.16);
    c.lineJoin = 'round'; c.lineCap = 'round';
    c.strokeStyle = '#3a2a1c'; c.lineWidth = 13;
    c.beginPath(); c.moveTo(-4, -56); c.lineTo(-6 + a * 34, -4 - Math.max(0, b) * 16); c.stroke();
    c.beginPath(); c.moveTo(4, -56); c.lineTo(6 - a * 34, -4 - Math.max(0, -b) * 16); c.stroke();
    if (o.yuk) torba(c, -36, -100, 1);
    [-1, 1].forEach(function (yn) {
      c.strokeStyle = R.koyu; c.lineWidth = 19; c.beginPath(); c.moveTo(0, -112); c.lineTo(yn * a * 36, -76); c.stroke();
      c.strokeStyle = o.govde || '#4f6d5c'; c.lineWidth = 10; c.beginPath(); c.moveTo(0, -112); c.lineTo(yn * a * 36, -76); c.stroke();
    });
    c.strokeStyle = R.koyu; c.lineWidth = 5; c.fillStyle = o.govde || '#4f6d5c';
    c.beginPath(); c.moveTo(-22, -124); c.lineTo(22, -124); c.lineTo(34, -44); c.lineTo(-32, -44); c.closePath(); c.fill(); c.stroke();
    c.fillStyle = '#e2b98c'; daire(c, 6, -146, 21); c.fill(); c.stroke();
    // yemeni: ucu rüzgârda uçuşur
    var uc = Math.sin(t * 11) * 9;
    c.fillStyle = YEMENI;
    c.beginPath(); c.moveTo(-14, -136); c.lineTo(-62, -132 + uc); c.lineTo(-72, -160 - uc); c.lineTo(-12, -156); c.closePath(); c.fill(); c.stroke();
    c.beginPath(); c.arc(6, -148, 23, Math.PI * 0.9, Math.PI * 1.95); c.quadraticCurveTo(8, -158, -15, -140); c.closePath(); c.fill(); c.stroke();
    c.fillStyle = R.koyu; daire(c, 17, -146, 3.5); c.fill();
    c.restore();
  }

  // Köylü görünüşleri (hikâye sahnelerinde ortak kullanılır).
  var KOYLU = [
    { bas: 'ortu', uzun: true, govde: '#7b4a55' }, { bas: 'fes', govde: '#55657a' }, { bas: 'ortu', uzun: true, govde: '#4f6d5c' },
    { bas: 'sarik', govde: '#6b5a4a' }, { bas: 'ortu', uzun: true, govde: '#5d5a7a' }, { bas: 'fes', govde: '#7a5c3e' }
  ];
  function sar(deger, boy) { return ((deger % boy) + boy) % boy; }

  // Kara Fatma: koyu başörtülü, kuşaklı figür.
  function fatma(c, x, y, s, o) {
    o = o || {};
    kisi(c, x, y, s, { bas: 'ortu', ortu: '#3a3340', govde: '#6b6a4a', kusak: '#3a2a1c', kol: o.kol, yon: o.yon, siluet: o.siluet });
  }

  // Yağan kar.
  function kar(c, t) {
    var rs = IP.tohumluRastgele(77);
    c.fillStyle = 'rgba(255,255,255,.85)';
    for (var i = 0; i < 70; i++) {
      var x = rs() * 1600 + Math.sin(t + i) * 20, y = (rs() * 900 + t * (40 + rs() * 60)) % 900;
      daire(c, x, y, 2 + rs() * 3); c.fill();
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

    /* ----- Şahin Bey ----- */
    // 1. Köy meydanı: gönüllüler iki yandan gelip Şahin Bey'in çevresinde toplanır.
    gonulluler: function (c, t) {
      gok(c, '#f5e4b6', '#e9c88c');
      bulut(c, (t * 7) % 1900 - 200, 140, 1, 'rgba(255,250,235,.75)');
      tepeler(c, 430, 60, '#d6b77e', 1.1);
      tepeler(c, 520, 36, '#c29f66', 2.6);
      ev(c, 70, 648, 210, 150, { cati: 'kiremit', renk: '#e2cfa4' });
      ev(c, 320, 636, 170, 124, {});
      ev(c, 1150, 640, 210, 150, { cati: 'kiremit', renk: '#d6bd8c' });
      ev(c, 1400, 652, 170, 120, {});
      zemin(c, 650, '#cbad74');
      var renkler = ['#6b5a4a', '#55657a', '#7a5c3e', '#5f6f52', '#7b4a55'];
      var gel = (t % 16) / 7;
      for (var i = 0; i < 8; i++) {
        var yan = i % 2 ? 1 : -1, hedef = 800 + yan * (190 + Math.floor(i / 2) * 110);
        var o = Math.max(0, Math.min(1, gel - i * 0.06)), yum = 1 - Math.pow(1 - o, 3);
        var x = (yan > 0 ? 1750 : -150) + (hedef - (yan > 0 ? 1750 : -150)) * yum;
        var zip = o < 1 ? Math.abs(Math.sin(t * 6 + i)) * 7 : 0;
        c.fillStyle = 'rgba(43,33,24,.2)'; c.beginPath(); c.ellipse(x, 812 + (i % 3) * 16, 48, 9, 0, 0, TAU); c.fill();
        kisi(c, x, 808 + (i % 3) * 16 - zip, 1.05, { bas: ['fes', 'sarik', '', 'fes'][i % 4], govde: renkler[i % 5], yon: -yan, kusak: i % 3 ? null : '#8a3a2a' });
      }
      // Şahin Bey ortada, bir taşın üstünde
      c.fillStyle = '#9a8a70'; c.strokeStyle = R.koyu; c.lineWidth = 5;
      c.beginPath(); c.ellipse(800, 800, 90, 30, 0, 0, TAU); c.fill(); c.stroke();
      kisi(c, 800, 786, 1.4, { bas: 'kalpak', govde: '#6b6a4a', kusak: '#3a2a1c', kol: 'cagri' });
      kuslar(c, t);
      doku(c);
    },

    // 2. Kolon: ufuktan kıvrılarak gelen uzun kol, öndeki kayada bir gözcü.
    kolon: function (c, t) {
      gok(c, '#d8c9a6', '#ead6a6');
      c.fillStyle = 'rgba(255,248,220,.8)'; daire(c, 420, 190, 60); c.fill();
      tepeler(c, 470, 50, '#bfa878', 0.2);
      c.fillStyle = '#c7a970'; c.fillRect(0, 520, 1600, 380);
      function yol(u) { return [1120 - 760 * u + Math.sin(u * 5.2) * 150 * (0.3 + u), 520 + 380 * Math.pow(u, 1.4)]; }
      c.beginPath();
      var u;
      for (u = 0; u <= 1.001; u += 0.04) { var p = yol(u); c.lineTo(p[0] - (10 + 190 * u), p[1]); }
      for (u = 1; u >= -0.001; u -= 0.04) { var q = yol(u); c.lineTo(q[0] + (10 + 190 * u), q[1]); }
      c.closePath(); c.fillStyle = '#e0c995'; c.fill(); c.strokeStyle = 'rgba(43,33,24,.45)'; c.lineWidth = 4; c.stroke();
      // kolon: uzaktan yakına sıralanmış gölgeler ve toz
      var parca = [];
      for (var i = 0; i < 16; i++) parca.push(((i / 16) * 0.6 + t * 0.008) % 0.6);
      parca.sort(function (a, b) { return a - b; });
      parca.forEach(function (pu, n) {
        var k = yol(pu), olcek = 0.1 + pu * 1.05;
        c.fillStyle = 'rgba(190,165,120,.35)'; daire(c, k[0] + 30 * olcek, k[1] - 30 * olcek, 70 * olcek); c.fill();
        if (n % 5 === 4) {
          // yük arabası
          c.fillStyle = '#23262e'; c.fillRect(k[0] - 70 * olcek, k[1] - 95 * olcek, 140 * olcek, 60 * olcek);
          daire(c, k[0] - 40 * olcek, k[1] - 22 * olcek, 22 * olcek); c.fill(); daire(c, k[0] + 40 * olcek, k[1] - 22 * olcek, 22 * olcek); c.fill();
        } else {
          kisi(c, k[0] - 34 * olcek, k[1] - Math.abs(Math.sin(t * 4 + n)) * 5 * olcek, olcek, { siluet: '#23262e', bas: 'kep' });
          kisi(c, k[0] + 34 * olcek, k[1] - Math.abs(Math.sin(t * 4 + n + 1.5)) * 5 * olcek, olcek, { siluet: '#2b2e38', bas: 'kep' });
        }
      });
      // öndeki kaya ve gözcü
      c.fillStyle = '#8f7f66'; c.strokeStyle = R.koyu; c.lineWidth = 5; c.lineJoin = 'round';
      c.beginPath(); c.moveTo(1180, 900); c.lineTo(1230, 760); c.lineTo(1360, 700); c.lineTo(1500, 730); c.lineTo(1600, 800); c.lineTo(1600, 900); c.closePath(); c.fill(); c.stroke();
      kisi(c, 1380, 716, 1.3, { bas: 'fes', govde: '#5f6f52', kol: 'gozet', yon: -1, kusak: '#8a3a2a' });
      doku(c);
    },

    // 3. Yolu tutmak: barikatın ardında gönüllüler; güneş ve ay dönerek günlerin geçtiğini gösterir.
    yol_tut: function (c, t) {
      var faz = (t * 0.11) % 1, gunduz = faz < 0.5, o = (faz * 2) % 1, isik = Math.sin(o * Math.PI);
      if (gunduz) gok(c, '#f1dca4', '#ecc98a'); else gok(c, '#101836', '#2a3458');
      var gx = 150 + 1300 * o, gy = 430 - isik * 320;
      if (gunduz) { c.fillStyle = '#fff3c0'; daire(c, gx, gy, 62); c.fill(); }
      else { c.fillStyle = '#f6efcf'; daire(c, gx, gy, 46); c.fill(); c.fillStyle = '#18214a'; daire(c, gx - 20, gy - 10, 42); c.fill(); }
      tepeler(c, 470, 50, gunduz ? '#d0b27a' : '#1c2444', 0.7);
      // uzaktaki şehir (sağda): gece pencereleri yanar
      for (var e = 0; e < 6; e++) {
        ev(c, 1180 + e * 68, 540 - (e % 2) * 14, 60, 50 + (e % 3) * 16, { renk: gunduz ? '#dcc79c' : '#2a3050', pencere: 1, isik: !gunduz, kapisiz: true, cizgi: gunduz ? R.koyu : '#0a0d1c', catiRenk: gunduz ? R.sepya : '#2d2a40' });
      }
      c.fillStyle = gunduz ? '#c9ab72' : '#2a2f48'; c.fillRect(0, 540, 1600, 360);
      // yol
      c.fillStyle = gunduz ? '#e0c995' : '#3a4060'; c.beginPath(); c.moveTo(0, 690); c.lineTo(1600, 600); c.lineTo(1600, 700); c.lineTo(0, 860); c.closePath(); c.fill();
      // solda durmuş kolon gölgeleri
      for (var a = 0; a < 4; a++) kisi(c, 60 + a * 90, 770 - a * 6, 0.8, { siluet: '#1b1e28', bas: 'kep' });
      // barikat: taşlar, kütükler, araba tekerleği
      c.strokeStyle = R.koyu; c.lineWidth = 5; c.lineJoin = 'round';
      [[600, 760, 60, 40], [680, 745, 70, 46], [640, 700, 56, 38], [730, 790, 62, 40], [580, 810, 58, 36], [700, 690, 44, 30]].forEach(function (k, n) {
        c.fillStyle = ['#9a8a70', '#857660', '#a69678'][n % 3]; c.beginPath(); c.ellipse(k[0], k[1], k[2], k[3], 0, 0, TAU); c.fill(); c.stroke();
      });
      c.fillStyle = '#7a5c3e'; c.save(); c.translate(660, 640); c.rotate(-0.12); c.beginPath(); c.rect(-150, -16, 300, 32); c.fill(); c.stroke(); c.restore();
      c.fillStyle = '#9b7648'; daire(c, 770, 700, 52); c.fill(); c.stroke(); daire(c, 770, 700, 12); c.fill(); c.stroke();
      for (var s = 0; s < 8; s++) { c.beginPath(); c.moveTo(770, 700); c.lineTo(770 + Math.cos(s * Math.PI / 4) * 52, 700 + Math.sin(s * Math.PI / 4) * 52); c.stroke(); }
      // gönüllüler
      var renk = ['#6b5a4a', '#55657a', '#5f6f52', '#7a5c3e'];
      for (var g = 0; g < 4; g++) kisi(c, 900 + g * 100, 800 - g * 8 + Math.sin(t * 1.5 + g) * 2, 1.1, { bas: ['fes', 'sarik', 'fes', ''][g], govde: renk[g], yon: -1 });
      kisi(c, 850, 830, 1.3, { bas: 'kalpak', govde: '#6b6a4a', kusak: '#3a2a1c', yon: -1 });
      // geçen günlerin çetelesi
      var gun = Math.min(5, Math.floor(t * 0.11) + 1);
      c.strokeStyle = gunduz ? R.koyu : R.krem; c.lineWidth = 7; c.lineCap = 'round';
      for (var d = 0; d < gun; d++) {
        c.beginPath();
        if (d === 4) { c.moveTo(60, 270); c.lineTo(170, 210); } else { c.moveTo(80 + d * 24, 204); c.lineTo(80 + d * 24, 276); }
        c.stroke();
      }
      if (!gunduz) { c.fillStyle = 'rgba(10,14,40,.35)'; c.fillRect(0, 0, 1600, 900); }
      doku(c);
    },

    // 4. Yol kenarında yalnız bir kalpak, rüzgârda toz.
    kalpak: function (c, t) {
      gok(c, '#c4603a', '#f2c98c');
      var g = c.createRadialGradient(1100, 520, 30, 1100, 520, 520);
      g.addColorStop(0, 'rgba(255,240,190,.95)'); g.addColorStop(0.3, 'rgba(255,200,120,.45)'); g.addColorStop(1, 'rgba(255,200,120,0)');
      c.fillStyle = g; c.fillRect(0, 0, 1600, 900);
      c.fillStyle = '#fff0c0'; daire(c, 1100, 520, 90); c.fill();
      tepeler(c, 500, 50, '#8a5a3c', 1.9);
      tepeler(c, 570, 30, '#6b4630', 0.4);
      c.fillStyle = '#7a5a3a'; c.fillRect(0, 600, 1600, 300);
      // boş yol
      c.fillStyle = '#a8845a'; c.beginPath(); c.moveTo(1050, 600); c.lineTo(1150, 600); c.lineTo(1000, 900); c.lineTo(200, 900); c.closePath(); c.fill();
      // toz bulutları
      for (var i = 0; i < 5; i++) bulut(c, ((t * (30 + i * 9) + i * 400) % 2100) - 250, 700 + i * 34, 0.8 + i * 0.15, 'rgba(210,170,120,.28)');
      // taş ve kalpak
      c.strokeStyle = R.koyu; c.lineWidth = 6; c.lineJoin = 'round';
      c.fillStyle = 'rgba(30,20,10,.35)'; c.beginPath(); c.ellipse(560, 800, 260, 26, 0, 0, TAU); c.fill();
      c.fillStyle = '#8f7f66'; c.beginPath(); c.moveTo(560, 800); c.lineTo(590, 720); c.lineTo(680, 690); c.lineTo(790, 716); c.lineTo(830, 800); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = '#2b2118'; c.beginPath(); c.moveTo(640, 698); c.lineTo(652, 606); c.quadraticCurveTo(706, 576, 760, 606); c.lineTo(772, 700);
      c.quadraticCurveTo(706, 680, 640, 698); c.closePath(); c.fill(); c.stroke();
      // rüzgârda eğilen otlar
      c.strokeStyle = '#3a2a1c'; c.lineWidth = 4; c.lineCap = 'round';
      for (var o = 0; o < 26; o++) {
        var ox = (o * 127) % 1600, oy = 820 + (o * 53) % 70, eg = Math.sin(t * 2.2 + o) * 12 + 14;
        c.beginPath(); c.moveTo(ox, oy); c.quadraticCurveTo(ox + eg * 0.4, oy - 22, ox + eg, oy - 40); c.stroke();
      }
      kuslar(c, t * 0.6, '#3a2a1c');
      doku(c);
    },

    // 5. Direnen şehir: kalesi ve bayrağıyla şehir; arkada parlayan madalya unvanı simgeler.
    gazi_sehir: function (c, t) {
      gok(c, '#f3d9a0', '#fbf0cf');
      // madalya (unvanın simgesi)
      c.save(); c.translate(800, 190);
      for (var i = 0; i < 16; i++) {
        c.rotate(TAU / 16);
        c.fillStyle = 'rgba(255,225,140,' + (0.22 + Math.sin(t * 2 + i) * 0.08) + ')';
        c.beginPath(); c.moveTo(0, 0); c.lineTo(-60, -900); c.lineTo(60, -900); c.closePath(); c.fill();
      }
      var vur = 0.8 + Math.sin(t * 2.5) * 0.03;
      c.scale(vur, vur);
      c.strokeStyle = R.koyu; c.lineWidth = 6; c.lineJoin = 'round';
      c.fillStyle = R.kirmizi; c.beginPath(); c.moveTo(-50, -150); c.lineTo(50, -150); c.lineTo(30, -70); c.lineTo(-30, -70); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = R.altin; daire(c, 0, 0, 92); c.fill(); c.stroke();
      c.fillStyle = '#fff3c4'; c.beginPath();
      for (var k = 0; k < 10; k++) { var a = -Math.PI / 2 + k * Math.PI / 5, r = k % 2 ? 26 : 62; c.lineTo(Math.cos(a) * r, Math.sin(a) * r); }
      c.closePath(); c.fill(); c.stroke();
      c.restore();
      tepeler(c, 560, 30, '#e0b377', 0.4);
      c.fillStyle = '#a9824f'; c.strokeStyle = R.koyu; c.lineWidth = 5;
      c.beginPath(); c.moveTo(380, 760); c.quadraticCurveTo(800, 380, 1220, 760); c.closePath(); c.fill(); c.stroke();
      kaleCiz(c, 800, 590, 460, '#d9c39a');
      c.lineWidth = 8; c.lineCap = 'round'; c.beginPath(); c.moveTo(800, 392); c.lineTo(800, 300); c.stroke();
      bayrak(c, 804, 304, 120, 78, t);
      var ev1 = ['#e2cfa4', '#d6bd8c', '#e8d9b5', '#d0b584'];
      for (var e = 0; e < 9; e++) ev(c, -20 + e * 185, 800, 170, 120 + (e % 3) * 26, { cati: e % 2 ? 'kiremit' : 'duz', renk: ev1[e % 4] });
      zemin(c, 800, '#cbad74');
      for (var p = 0; p < 7; p++) {
        kisi(c, 130 + p * 220, 892 - Math.abs(Math.sin(t * 3 + p * 1.1)) * 12, 0.8, { bas: ['fes', 'ortu', 'sarik'][p % 3], uzun: p % 3 === 1, govde: ['#55657a', '#7b4a55', '#5f6f52', '#6b5a4a'][p % 4], kol: p % 2 ? 'yukari' : 'acik' });
      }
      kuslar(c, t, '#5b3a22');
      doku(c);
    },

    /* ----- Tayyar Rahmiye ----- */
    // 1. Kuşatma: kadınlar ve çocuklar sırtlarında torbalarla sipere doğru yürür.
    siper_tasima: function (c, t) {
      gok(c, '#c98a5a', '#f0d39a');
      // uzakta yükselen duman (kuşatmanın simgesi)
      for (var d = 0; d < 3; d++) {
        var dy = (t * 14 + d * 90) % 260;
        bulut(c, 230 + d * 70 + Math.sin(t * 0.5 + d) * 20, 400 - dy, 0.7 + dy / 300, 'rgba(90,80,80,' + (0.4 - dy / 700) + ')');
      }
      tepeler(c, 470, 40, '#b98c5c', 0.9);
      c.fillStyle = '#a9824f'; c.beginPath(); c.moveTo(560, 620); c.quadraticCurveTo(880, 330, 1200, 620); c.closePath(); c.fill();
      kaleCiz(c, 880, 478, 330, '#c9ab78', 'yok');
      var renk = ['#dcc79c', '#d0b584', '#e2cfa4'];
      for (var e = 0; e < 9; e++) ev(c, -30 + e * 190, 640, 172, 110 + (e % 3) * 30, { renk: renk[e % 3], cati: e % 2 ? 'kiremit' : 'duz', kepenk: true });
      zemin(c, 640, '#c7a56e');
      // sağda siper ve ardındaki savunmacılar
      kisi(c, 1330, 760, 1.05, { bas: 'fes', govde: '#6b5a4a', yon: -1 });
      kisi(c, 1450, 764, 1.05, { bas: 'sarik', govde: '#55657a', yon: -1 });
      siper(c, 1190, 810, 5, 3);
      // taşıyıcılar: kadınlar ve çocuklar
      var giysi = ['#7b4a55', '#4f6d5c', '#8a6a45', '#5d5a7a', '#6b5a4a', '#7a5c3e'];
      for (var i = 0; i < 6; i++) {
        var x = ((t * 45 + i * 217) % 1300) - 150, cocuk = i % 3 === 2, s = cocuk ? 0.62 : 1.05;
        var y = 790 + (i % 2) * 40 - Math.abs(Math.sin(t * 5 + i)) * 5;
        c.globalAlpha = Math.max(0, Math.min(1, (1150 - x) / 90));
        c.fillStyle = 'rgba(43,33,24,.2)'; c.beginPath(); c.ellipse(x, 794 + (i % 2) * 40, 46 * s, 9 * s, 0, 0, TAU); c.fill();
        torba(c, x - 26 * s, y - 118 * s, s);
        kisi(c, x, y, s, cocuk ? { govde: giysi[i] } : { bas: 'ortu', uzun: true, govde: giysi[i], ortu: i === 1 ? YEMENI : null });
        c.globalAlpha = 1;
      }
      doku(c);
    },

    // 2. Koşu: Rahmiye siperler arasında herkesten hızlı koşar; arka plan hızla geriye akar.
    tayyar_kosu: function (c, t) {
      function sar(deger, boy) { return ((deger % boy) + boy) % boy; }
      gok(c, '#f2d9a0', '#eec78a');
      c.fillStyle = 'rgba(255,248,220,.85)'; daire(c, 1280, 170, 58); c.fill();
      tepeler(c, 450, 44, '#d6b77e', t * 0.25);
      var renk = ['#e2cfa4', '#d6bd8c', '#e8d9b5'], i;
      for (i = 0; i < 8; i++) ev(c, sar(i * 260 - t * 60, 2080) - 240, 600, 200, 120 + (i % 3) * 30, { renk: renk[i % 3], cati: i % 2 ? 'kiremit' : 'duz', kepenk: true });
      zemin(c, 600, '#cbad74');
      // geride kalan diğer taşıyıcılar
      for (i = 0; i < 3; i++) {
        var kx = sar(i * 640 - t * 170, 1920) - 160;
        torba(c, kx - 26, 612, 0.95);
        kisi(c, kx, 724 - Math.abs(Math.sin(t * 5 + i)) * 4, 0.95, { bas: 'ortu', uzun: true, govde: ['#7b4a55', '#5d5a7a', '#8a6a45'][i] });
      }
      // siperler hızla geçer
      for (i = 0; i < 2; i++) siper(c, sar(i * 1100 - t * 520, 2200) - 420, 770, 4, 2);
      // hız çizgileri
      c.strokeStyle = 'rgba(255,255,255,.6)'; c.lineWidth = 6; c.lineCap = 'round';
      for (i = 0; i < 7; i++) {
        var lx = sar(i * 260 - t * 900, 1900) - 150, ly = 430 + i * 52;
        c.beginPath(); c.moveTo(lx, ly); c.lineTo(lx + 170, ly); c.stroke();
      }
      // toz
      for (i = 0; i < 5; i++) {
        var faz = (t * 1.6 + i / 5) % 1;
        c.fillStyle = 'rgba(190,160,110,' + 0.45 * (1 - faz) + ')'; daire(c, 720 - faz * 300, 828 - faz * 30, 14 + faz * 34); c.fill();
      }
      c.fillStyle = 'rgba(43,33,24,.25)'; c.beginPath(); c.ellipse(800, 842, 70, 12, 0, 0, TAU); c.fill();
      kosan(c, 800, 838 - Math.abs(Math.sin(t * 13)) * 12, 1.6, t, { yuk: true });
      doku(c);
    },

    // 3. Zor durumdaki siper: Rahmiye koşarak ulaşır, uyarı işareti umut ışığına döner.
    zor_siper: function (c, t) {
      var d = t % 10, vardi = d > 4;
      gok(c, '#8d7f78', '#d9b98c');
      bulut(c, (t * 20) % 2000 - 200, 150, 1.5, 'rgba(70,62,66,.5)');
      bulut(c, (900 + t * 14) % 2000 - 200, 230, 1.2, 'rgba(70,62,66,.4)');
      tepeler(c, 480, 44, '#9c8468', 0.5);
      for (var e = 0; e < 4; e++) ev(c, 1180 + e * 110, 640, 100, 80 + (e % 2) * 30, { renk: '#b5a283', kepenk: true, pencere: 1, catiRenk: '#6b6152' });
      zemin(c, 640, '#b3976a');
      if (vardi) {
        var g = c.createRadialGradient(1000, 640, 20, 1000, 640, 420);
        g.addColorStop(0, 'rgba(255,236,160,.75)'); g.addColorStop(1, 'rgba(255,200,90,0)');
        c.fillStyle = g; c.fillRect(560, 200, 880, 700);
      }
      kisi(c, 1120, 772, 1.05, { bas: 'fes', govde: '#6b5a4a', yon: -1, kol: vardi ? 'yukari' : null });
      kisi(c, 1230, 776, 1.05, { bas: 'sarik', govde: '#55657a', yon: -1 });
      if (vardi) kisi(c, 990, 780, 1.12, { bas: 'ortu', ortu: YEMENI, uzun: true, govde: '#4f6d5c', kol: 'cagri' });
      siper(c, 900, 820, 5, 3);
      // dağılmış kum torbaları
      c.strokeStyle = R.koyu; c.lineWidth = 5;
      [[840, 826, 0.5], [770, 836, -0.3], [1310, 832, 0.2]].forEach(function (k) {
        c.fillStyle = '#bda67a'; c.beginPath(); c.ellipse(k[0], k[1], 42, 23, k[2], 0, TAU); c.fill(); c.stroke();
      });
      if (vardi) torba(c, 1060, 690, 1.1);
      else {
        // uyarı işareti
        var vur = 1 + Math.sin(t * 8) * 0.08;
        c.save(); c.translate(1090, 400); c.scale(vur, vur);
        c.fillStyle = R.kirmizi; c.strokeStyle = R.koyu; c.lineWidth = 8; c.lineJoin = 'round';
        c.beginPath(); c.moveTo(0, -90); c.lineTo(96, 70); c.lineTo(-96, 70); c.closePath(); c.fill(); c.stroke();
        c.fillStyle = R.krem; c.fillRect(-10, -42, 20, 62); daire(c, 0, 44, 11); c.fill();
        c.restore();
        var x = -120 + (d / 4) * 960;
        for (var i = 0; i < 4; i++) {
          var faz = (t * 1.6 + i / 4) % 1;
          c.fillStyle = 'rgba(160,135,95,' + 0.45 * (1 - faz) + ')'; daire(c, x - 70 - faz * 220, 838 - faz * 24, 12 + faz * 28); c.fill();
        }
        kosan(c, x, 846 - Math.abs(Math.sin(t * 13)) * 10, 1.4, t, { yuk: true });
      }
      doku(c);
    },

    // 4. Siperde rüzgârda dalgalanan bir yemeni.
    yemeni: function (c, t) {
      gok(c, '#b9553a', '#f4cf94');
      var g = c.createRadialGradient(480, 540, 30, 480, 540, 520);
      g.addColorStop(0, 'rgba(255,240,190,.95)'); g.addColorStop(0.3, 'rgba(255,200,120,.45)'); g.addColorStop(1, 'rgba(255,200,120,0)');
      c.fillStyle = g; c.fillRect(0, 0, 1600, 900);
      c.fillStyle = '#fff0c0'; daire(c, 480, 540, 84); c.fill();
      tepeler(c, 520, 44, '#8a5a3c', 1.2);
      kaleCiz(c, 1260, 530, 250, '#6b4630', 'yok');
      tepeler(c, 590, 26, '#6b4630', 2.9);
      c.fillStyle = '#7a5a3a'; c.fillRect(0, 620, 1600, 280);
      siper(c, 520, 810, 7, 3);
      // direk
      c.lineCap = 'round';
      c.strokeStyle = R.koyu; c.lineWidth = 14; c.beginPath(); c.moveTo(800, 700); c.lineTo(800, 320); c.stroke();
      c.strokeStyle = '#7a5c3e'; c.lineWidth = 7; c.beginPath(); c.moveTo(800, 700); c.lineTo(800, 320); c.stroke();
      // yemeni
      var n = 26, ust = [], alt = [], i;
      for (i = 0; i <= n; i++) {
        var o = i / n, dal = Math.sin(t * 4 - o * 6) * 30 * o, x = 806 + o * 340, y = 340 + dal + o * 30;
        ust.push([x, y]); alt.push([x, y + 160 * (1 - o)]);
      }
      c.beginPath();
      ust.forEach(function (p) { c.lineTo(p[0], p[1]); });
      alt.reverse().forEach(function (p) { c.lineTo(p[0], p[1]); });
      c.closePath(); c.fillStyle = YEMENI; c.strokeStyle = R.koyu; c.lineWidth = 5; c.lineJoin = 'round'; c.fill(); c.stroke();
      c.fillStyle = R.krem;
      alt.forEach(function (p, k) { if (k % 3 === 1) { daire(c, p[0], p[1] - 12, 5); c.fill(); } });
      // boş testi ve torba
      c.fillStyle = '#b0703f'; c.strokeStyle = R.koyu; c.lineWidth = 5;
      c.beginPath(); c.ellipse(640, 838, 50, 30, 0, 0, TAU); c.fill(); c.stroke();
      c.beginPath(); c.ellipse(586, 838, 14, 20, 0, 0, TAU); c.fill(); c.stroke();
      torba(c, 1010, 836, 1.2);
      // rüzgârda eğilen otlar
      c.strokeStyle = '#3a2a1c'; c.lineWidth = 4;
      for (i = 0; i < 26; i++) {
        var ox = (i * 127) % 1600, oy = 850 + (i * 53) % 46, eg = Math.sin(t * 2.2 + i) * 12 + 14;
        c.beginPath(); c.moveTo(ox, oy); c.quadraticCurveTo(ox + eg * 0.4, oy - 22, ox + eg, oy - 40); c.stroke();
      }
      kuslar(c, t * 0.6, '#3a2a1c');
      doku(c);
    },

    /* ----- Kara Fatma ----- */
    // 1. Erzurum: karlı dağlar; meydanda haber okunuyor, Fatma dinliyor.
    erzurum_haber: function (c, t) {
      gok(c, '#9fb2c6', '#e4e8e6');
      tepeler(c, 400, 80, '#f2f5f7', 0.4);
      tepeler(c, 500, 40, '#a9b4c2', 2.2);
      for (var e = 0; e < 5; e++) ev(c, 40 + e * 320, 650, 250, 150 + (e % 2) * 40, { renk: ['#b9b2a6', '#aaa397', '#c4bdb0'][e % 3], catiRenk: '#f2f5f7' });
      zemin(c, 650, '#e9ecee');
      // sandığın üstünde haberi okuyan kişi
      c.fillStyle = '#8a6a45'; c.strokeStyle = R.koyu; c.lineWidth = 5; c.beginPath(); c.rect(900, 730, 160, 70); c.fill(); c.stroke();
      kisi(c, 980, 732, 1.15, { bas: 'fes', govde: '#55657a', kol: 'cagri' });
      c.save(); c.translate(1050, 520 + Math.sin(t * 3) * 4); c.rotate(0.15);
      c.fillStyle = '#fff6dc'; c.beginPath(); c.rect(-34, -46, 68, 92); c.fill(); c.stroke();
      c.lineWidth = 3; for (var l = 0; l < 4; l++) { c.beginPath(); c.moveTo(-22, -28 + l * 18); c.lineTo(22, -28 + l * 18); c.stroke(); }
      c.restore();
      [[1210, 824, 1], [1330, 806, 2], [1450, 836, 3], [760, 814, 0], [640, 836, 5]].forEach(function (k) {
        kisi(c, k[0], k[1], 1.05, Object.assign({ yon: k[0] > 980 ? -1 : 1 }, KOYLU[k[2]]));
      });
      fatma(c, 400, 866, 1.5);
      kar(c, t);
      doku(c);
    },

    // 2. Uzun yolculuğun sonu: Fatma masanın karşısında görev ister. Paşa saygıyla, gölge olarak çizilir.
    pasa_gorusme: function (c, t) {
      c.fillStyle = '#c9b48a'; c.fillRect(0, 0, 1600, 900);
      c.fillStyle = '#bca77c'; for (var d = 0; d < 16; d++) c.fillRect(d * 100 + 48, 0, 5, 660);
      // pencere: dışarıda gelinen uzun yol
      c.save(); c.beginPath(); c.rect(140, 150, 380, 330); c.clip();
      gok(c, '#9fb2c6', '#e4e8e6');
      tepeler(c, 330, 50, '#a9b4c2', 1.0);
      c.fillStyle = '#e3ddc8'; c.fillRect(0, 380, 1600, 200);
      c.strokeStyle = '#8a6a45'; c.lineWidth = 14; c.lineCap = 'round';
      c.beginPath(); c.moveTo(130, 478); c.bezierCurveTo(330, 440, 240, 410, 420, 398); c.bezierCurveTo(500, 392, 440, 356, 530, 346); c.stroke();
      c.restore();
      c.strokeStyle = R.koyu; c.lineWidth = 12; c.strokeRect(140, 150, 380, 330);
      c.lineWidth = 6; c.beginPath(); c.moveTo(330, 150); c.lineTo(330, 480); c.moveTo(140, 315); c.lineTo(520, 315); c.stroke();
      // zemin
      c.fillStyle = '#8a6a45'; c.fillRect(0, 660, 1600, 240);
      c.lineWidth = 5; c.beginPath(); c.moveTo(0, 660); c.lineTo(1600, 660); c.stroke();
      // duvarda bayrak
      bayrak(c, 1310, 170, 190, 126, t * 0.25);
      c.lineWidth = 5; c.strokeRect(1310, 170, 190, 126);
      // masa ve ardındaki gölge
      kisi(c, 1090, 700, 1.55, { siluet: '#2b2620', bas: 'kalpak' });
      c.fillStyle = '#6b4a2c'; c.beginPath(); c.rect(860, 600, 480, 150); c.fill(); c.stroke();
      c.fillStyle = '#7d5a38'; c.beginPath(); c.rect(836, 578, 528, 30); c.fill(); c.stroke();
      c.fillStyle = '#fff6dc'; c.beginPath(); c.rect(960, 560, 150, 20); c.fill(); c.stroke();
      // lamba
      var g = c.createRadialGradient(1280, 500, 6, 1280, 500, 190 + Math.sin(t * 5) * 8);
      g.addColorStop(0, 'rgba(255,230,150,.8)'); g.addColorStop(1, 'rgba(255,230,150,0)');
      c.fillStyle = g; c.fillRect(1080, 300, 400, 400);
      c.fillStyle = R.altin; c.beginPath(); c.rect(1262, 540, 36, 40); c.fill(); c.stroke();
      c.fillStyle = '#fff3b0'; c.beginPath(); c.ellipse(1280, 506, 20, 34, 0, 0, TAU); c.fill(); c.stroke();
      fatma(c, 560, 850, 1.65);
      doku(c);
    },

    // 3. Köy köy gönüllü toplama: Fatma yürür, ardındaki sıra uzar.
    gonullu_toplama: function (c, t) {
      gok(c, '#f2dfae', '#e8c88c');
      bulut(c, (t * 8) % 1900 - 200, 150, 1, 'rgba(255,250,235,.75)');
      tepeler(c, 440, 56, '#d2b47c', 0.6 + t * 0.12);
      var i;
      for (i = 0; i < 7; i++) ev(c, sar(i * 300 - t * 70, 2100) - 260, 620, 220, 130 + (i % 3) * 30, { renk: DUKKAN_RENK[i % 6], cati: i % 2 ? 'kiremit' : 'duz' });
      zemin(c, 620, '#cbad74');
      var d = (t % 14) / 2, sayi = 1 + Math.min(5, Math.floor(d));
      for (i = sayi - 1; i >= 0; i--) {
        c.globalAlpha = i === sayi - 1 && d < 6 ? Math.min(1, (d % 1) * 3) : 1;
        kisi(c, 900 - i * 150, 800 + (i % 2) * 34 - Math.abs(Math.sin(t * 5 + i)) * 6, 1.1, KOYLU[i]);
        c.globalAlpha = 1;
      }
      fatma(c, 1100, 812 - Math.abs(Math.sin(t * 5)) * 6, 1.35, { kol: 'cagri' });
      kuslar(c, t);
      doku(c);
    },

    // 4. Batı Cephesi: gün doğarken sırtta bayrağıyla yürüyen müfreze (gölge olarak).
    bati_cephesi: function (c, t) {
      gok(c, '#f0a560', '#fbe6b8');
      c.fillStyle = '#fff3c8'; daire(c, 1250, 470, 110); c.fill();
      tepeler(c, 520, 40, '#c98a55', 0.8);
      c.fillStyle = '#5b3f2a'; c.beginPath(); c.moveTo(0, 900); c.lineTo(0, 640); c.quadraticCurveTo(800, 520, 1600, 660); c.lineTo(1600, 900); c.closePath(); c.fill();
      function sirtY(x) { var u = x / 1600; return (1 - u) * (1 - u) * 640 + 2 * u * (1 - u) * 520 + u * u * 660; }
      var on = 1700 - sar(t * 50, 2500);
      for (var i = 5; i >= 0; i--) {
        var x = on + i * 125;
        if (x < -100 || x > 1700) continue;
        var y = sirtY(x) + 8 - Math.abs(Math.sin(t * 5 + i)) * 5;
        if (i === 0) {
          c.strokeStyle = '#2b2118'; c.lineWidth = 9; c.lineCap = 'round'; c.beginPath(); c.moveTo(x - 30, y - 70); c.lineTo(x - 30, y - 350); c.stroke();
          bayrak(c, x - 26, y - 346, 150, 100, t);
          fatma(c, x, y, 1, { siluet: '#2b2118', yon: -1 });
        } else kisi(c, x, y, 0.95, { siluet: '#2b2118', bas: KOYLU[i].bas, uzun: KOYLU[i].uzun, yon: -1 });
      }
      tepeler(c, 850, 14, '#3a2a1c', 2);
      kuslar(c, t, '#5b3a22');
      doku(c);
    },

    // 5. Madalya: Fatma'nın göğsünde parlayan madalya, iki yanda sevinen halk.
    madalya: function (c, t) {
      gok(c, '#f6b469', '#fdeec3');
      c.save(); c.translate(800, 560);
      for (var i = 0; i < 14; i++) {
        c.rotate(TAU / 14);
        c.fillStyle = 'rgba(255,250,215,' + (0.16 + Math.sin(t * 1.5 + i) * 0.06) + ')';
        c.beginPath(); c.moveTo(0, 0); c.lineTo(-90, -1300); c.lineTo(90, -1300); c.closePath(); c.fill();
      }
      c.restore();
      tepeler(c, 640, 30, '#e0b377', 0.4);
      zemin(c, 760, '#cbad74');
      c.strokeStyle = R.koyu; c.lineWidth = 9; c.lineCap = 'round'; c.beginPath(); c.moveTo(300, 760); c.lineTo(300, 290); c.stroke();
      bayrak(c, 304, 296, 210, 140, t);
      for (var k = 0; k < 6; k++) {
        var x = k < 3 ? 110 + k * 150 : 1190 + (k - 3) * 150;
        kisi(c, x, 880 - Math.abs(Math.sin(t * 3.2 + k * 1.3)) * 14, 1.05, Object.assign({ kol: k % 2 ? 'yukari' : 'acik', yon: k < 3 ? 1 : -1 }, KOYLU[k]));
      }
      fatma(c, 800, 892, 2.3);
      // madalya
      var mx = 836, my = 672, vur = 1 + Math.sin(t * 4) * 0.08;
      var g = c.createRadialGradient(mx, my, 4, mx, my, 150 * vur);
      g.addColorStop(0, 'rgba(255,240,170,.9)'); g.addColorStop(1, 'rgba(255,220,120,0)');
      c.fillStyle = g; c.fillRect(mx - 170, my - 170, 340, 340);
      c.strokeStyle = R.koyu; c.lineWidth = 5; c.lineJoin = 'round';
      c.fillStyle = R.kirmizi; c.beginPath(); c.rect(mx - 15, my - 56, 30, 40); c.fill(); c.stroke();
      c.fillStyle = R.altin; daire(c, mx, my, 28); c.fill(); c.stroke();
      c.fillStyle = '#fff3c4'; c.beginPath();
      for (var n = 0; n < 10; n++) { var a = -Math.PI / 2 + n * Math.PI / 5, r = n % 2 ? 8 : 19; c.lineTo(mx + Math.cos(a) * r, my + Math.sin(a) * r); }
      c.closePath(); c.fill(); c.stroke();
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
      var kalpakli = tip === 'kalpakli';
      function kumlama() {
        var rs = IP.tohumluRastgele(3);
        for (var i = 0; i < 1500; i++) { c.fillStyle = 'rgba(60,40,20,' + rs() * 0.12 + ')'; c.fillRect(rs() * 400, rs() * 400, 2, 2); }
      }
      if (tip === 'yemenili' || tip === 'madalyali') {
        var madalyali = tip === 'madalyali', ortuRenk = madalyali ? '#3a3340' : YEMENI;
        // omuzlar, omuza inen örtü, yüz
        c.fillStyle = madalyali ? '#6b6a4a' : '#4f6d5c'; c.beginPath(); c.moveTo(30, 400); c.quadraticCurveTo(60, 300, 150, 290); c.lineTo(250, 290);
        c.quadraticCurveTo(340, 300, 370, 400); c.closePath(); c.fill(); c.stroke();
        c.fillStyle = ortuRenk; c.beginPath(); c.moveTo(120, 150); c.quadraticCurveTo(92, 250, 122, 330); c.lineTo(278, 330);
        c.quadraticCurveTo(308, 250, 280, 150); c.closePath(); c.fill(); c.stroke();
        c.fillStyle = '#e2b98c'; c.beginPath(); c.ellipse(200, 196, 62, 76, 0, 0, TAU); c.fill(); c.stroke();
        c.fillStyle = ortuRenk;
        c.beginPath(); c.moveTo(130, 196); c.quadraticCurveTo(112, 92, 200, 84); c.quadraticCurveTo(288, 92, 270, 196);
        c.quadraticCurveTo(254, 134, 200, 130); c.quadraticCurveTo(146, 134, 130, 196); c.closePath(); c.fill(); c.stroke();
        c.beginPath(); c.moveTo(144, 240); c.quadraticCurveTo(200, 296, 256, 240); c.lineTo(240, 312); c.lineTo(200, 296); c.lineTo(160, 312); c.closePath(); c.fill(); c.stroke();
        c.fillStyle = R.krem;
        if (!madalyali) [[150, 118], [200, 102], [250, 118], [124, 250], [276, 250], [180, 306], [220, 306]].forEach(function (n) { daire(c, n[0], n[1], 5); c.fill(); });
        else {
          // göğüste madalya
          c.fillStyle = R.kirmizi; c.beginPath(); c.rect(286, 326, 24, 30); c.fill(); c.stroke();
          c.fillStyle = R.altin; daire(c, 298, 372, 20); c.fill(); c.stroke();
        }
        c.lineWidth = 5; c.beginPath(); c.moveTo(200, 180); c.quadraticCurveTo(192, 206, 204, 212); c.stroke();
        c.fillStyle = R.koyu; daire(c, 174, 184, 6.5); c.fill(); daire(c, 226, 184, 6.5); c.fill();
        c.beginPath(); c.moveTo(158, 168); c.quadraticCurveTo(174, 160, 188, 168); c.stroke();
        c.beginPath(); c.moveTo(212, 168); c.quadraticCurveTo(226, 160, 242, 168); c.stroke();
        c.beginPath(); c.arc(200, 224, 14, 0.2 * Math.PI, 0.8 * Math.PI); c.stroke();
        kumlama();
        return;
      }
      if (tip !== 'sarikli' && !kalpakli) {
        c.fillStyle = R.sepya; c.beginPath(); c.moveTo(60, 400); c.quadraticCurveTo(200, 240, 340, 400); c.fill(); c.stroke();
        daire(c, 200, 180, 70); c.fill(); c.stroke();
        c.fillStyle = R.krem; c.font = '900 90px Manset, serif'; c.textAlign = 'center'; c.fillText('?', 200, 212);
        return;
      }
      // omuzlar ve cübbe
      c.fillStyle = kalpakli ? '#6b6a4a' : '#5f6f52'; c.beginPath(); c.moveTo(30, 400); c.quadraticCurveTo(60, 290, 150, 280); c.lineTo(250, 280);
      c.quadraticCurveTo(340, 290, 370, 400); c.closePath(); c.fill(); c.stroke();
      if (kalpakli) {
        // dik yaka ve düğmeler
        c.fillStyle = '#55543a'; c.beginPath(); c.moveTo(158, 262); c.lineTo(242, 262); c.lineTo(246, 292); c.lineTo(200, 306); c.lineTo(154, 292); c.closePath(); c.fill(); c.stroke();
        c.beginPath(); c.moveTo(200, 306); c.lineTo(200, 400); c.stroke();
        c.fillStyle = R.altin; daire(c, 200, 336, 8); c.fill(); c.stroke(); daire(c, 200, 376, 8); c.fill(); c.stroke();
      } else {
        c.fillStyle = '#efe6d2'; c.beginPath(); c.moveTo(165, 282); c.lineTo(200, 340); c.lineTo(235, 282); c.closePath(); c.fill(); c.stroke();
      }
      // boyun ve yüz
      if (!kalpakli) { c.fillStyle = '#d9ab7c'; c.beginPath(); c.rect(172, 240, 56, 50); c.fill(); c.stroke(); }
      c.fillStyle = '#e2b98c'; c.beginPath(); c.ellipse(200, 190, 68, 82, 0, 0, TAU); c.fill(); c.stroke();
      c.fillStyle = kalpakli ? '#2b2118' : '#4a3a2a';
      if (!kalpakli) {
        // sakal
        c.beginPath(); c.moveTo(134, 196); c.quadraticCurveTo(140, 300, 200, 304); c.quadraticCurveTo(260, 300, 266, 196);
        c.quadraticCurveTo(250, 236, 200, 232); c.quadraticCurveTo(150, 236, 134, 196); c.closePath(); c.fill(); c.stroke();
      }
      // bıyık, burun, gözler, kaşlar
      if (kalpakli) {
        c.beginPath(); c.moveTo(150, 236); c.quadraticCurveTo(176, 212, 200, 224); c.quadraticCurveTo(224, 212, 250, 236);
        c.quadraticCurveTo(222, 236, 200, 232); c.quadraticCurveTo(178, 236, 150, 236); c.fill(); c.stroke();
        c.lineWidth = 4; c.beginPath(); c.arc(200, 246, 16, 0.15 * Math.PI, 0.85 * Math.PI); c.stroke(); c.lineWidth = 6;
      } else {
        c.beginPath(); c.moveTo(166, 226); c.quadraticCurveTo(200, 206, 234, 226); c.quadraticCurveTo(200, 222, 166, 226); c.fill(); c.stroke();
      }
      c.lineWidth = 5; c.beginPath(); c.moveTo(200, 170); c.quadraticCurveTo(190, 200, 204, 206); c.stroke();
      c.fillStyle = R.koyu; daire(c, 172, 174, 7); c.fill(); daire(c, 228, 174, 7); c.fill();
      c.lineWidth = 7; c.beginPath(); c.moveTo(154, 156); c.quadraticCurveTo(172, 146, 188, 156); c.stroke();
      c.beginPath(); c.moveTo(212, 156); c.quadraticCurveTo(228, 146, 246, 156); c.stroke();
      c.lineWidth = 6;
      if (kalpakli) {
        // kalpak
        c.fillStyle = '#2b2118'; c.beginPath(); c.moveTo(124, 152); c.lineTo(136, 62); c.quadraticCurveTo(200, 28, 264, 62);
        c.lineTo(276, 152); c.quadraticCurveTo(200, 128, 124, 152); c.closePath(); c.fill(); c.stroke();
        c.strokeStyle = '#5b4a3a'; c.lineWidth = 3;
        var rk = IP.tohumluRastgele(12);
        for (var q = 0; q < 46; q++) { var qx = 142 + rk() * 116, qy = 60 + rk() * 70; c.beginPath(); c.moveTo(qx, qy); c.lineTo(qx + 3, qy + 9); c.stroke(); }
        c.strokeStyle = R.koyu;
      } else {
        // sarık
        c.fillStyle = '#f3ead6';
        c.beginPath(); c.ellipse(200, 124, 92, 46, 0, 0, TAU); c.fill(); c.stroke();
        c.beginPath(); c.ellipse(200, 92, 58, 34, 0, 0, TAU); c.fill(); c.stroke();
        c.lineWidth = 4; c.beginPath(); c.moveTo(118, 112); c.quadraticCurveTo(200, 160, 282, 112); c.stroke();
        c.beginPath(); c.moveTo(126, 134); c.quadraticCurveTo(200, 176, 274, 134); c.stroke();
      }
      kumlama();
    },

    // Mini oyunların da kullandığı hazır çizimler.
    kosan: kosan, siper: siper, torba: torba, kisi: kisi, ev: ev, bayrak: bayrak,

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
