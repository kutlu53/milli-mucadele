/* Sesler: Ses dosyası kullanılmaz. Telgraf tıkırtısı gibi sesler tarayıcının
   ses motoruyla (Web Audio) o anda üretilir. Sesli okuma tarayıcının Türkçe sesini kullanır. */
(function () {
  'use strict';
  var IP = window.IP;
  var ctx = null;

  function baglam() {
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      try { ctx = new AC(); } catch (e) { return null; }
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  // Tek bir nota çalar.
  function nota(frekans, sure, tur, siddet, gecikme, kayma) {
    var c = baglam(); if (!c) return;
    var t = c.currentTime + (gecikme || 0);
    var o = c.createOscillator(), g = c.createGain();
    o.type = tur || 'sine';
    o.frequency.setValueAtTime(frekans, t);
    if (kayma) o.frequency.exponentialRampToValueAtTime(kayma, t + sure);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(siddet || 0.15, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + sure);
    o.connect(g); g.connect(c.destination);
    o.start(t); o.stop(t + sure + 0.05);
  }

  // Hışırtı (gürültü) sesi: kıvılcım, sayfa, damga için.
  function hisirti(sure, siddet, frekans, gecikme) {
    var c = baglam(); if (!c) return;
    var t = c.currentTime + (gecikme || 0);
    var n = Math.floor(c.sampleRate * sure);
    var tampon = c.createBuffer(1, n, c.sampleRate), d = tampon.getChannelData(0);
    for (var i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
    var k = c.createBufferSource(); k.buffer = tampon;
    var f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = frekans || 2000; f.Q.value = 0.8;
    var g = c.createGain(); g.gain.value = siddet || 0.2;
    k.connect(f); f.connect(g); g.connect(c.destination);
    k.start(t);
  }

  var SESLER = {
    tik: function () { nota(900, 0.05, 'square', 0.05); },
    tus: function () { nota(1500 + Math.random() * 300, 0.025, 'square', 0.025); },
    telgraf: function () {
      [0, 0.09, 0.18, 0.36, 0.45, 0.63].forEach(function (g, i) {
        nota(1250, i % 3 === 2 ? 0.12 : 0.05, 'square', 0.06, g);
      });
    },
    dogru: function () { nota(660, 0.14, 'sine', 0.2); nota(990, 0.3, 'sine', 0.2, 0.12); },
    yanlis: function () { nota(240, 0.22, 'triangle', 0.18, 0, 160); },
    isik: function () { nota(523, 0.5, 'sine', 0.14); nota(784, 0.7, 'sine', 0.1, 0.05); nota(1568, 0.5, 'sine', 0.04, 0.08); },
    kivilcim: function () { hisirti(0.25, 0.25, 4200); nota(1800, 0.12, 'sawtooth', 0.04, 0, 600); },
    sayfa: function () { hisirti(0.35, 0.18, 1400); },
    damga: function () { hisirti(0.12, 0.5, 300); nota(90, 0.2, 'sine', 0.4); },
    not: function () { hisirti(0.18, 0.1, 3200); },
    kisa: function () { nota(1250, 0.07, 'square', 0.07); },
    uzun: function () { nota(1250, 0.24, 'square', 0.07); },
    zipla: function () { nota(380, 0.14, 'sine', 0.12, 0, 720); },
    engel: function () { nota(180, 0.15, 'square', 0.06); nota(150, 0.2, 'square', 0.06, 0.12); },
    zafer: function () {
      [523, 659, 784, 1047, 1319].forEach(function (f, i) { nota(f, 0.5, 'triangle', 0.16, i * 0.13); });
    }
  };

  IP.ses = {
    acik: true,
    cal: function (ad) {
      if (!this.acik || !SESLER[ad]) return;
      try { SESLER[ad](); } catch (e) { /* ses çalınamazsa oyun devam eder */ }
    },
    // Metni Türkçe olarak sesli okur.
    oku: function (metin) {
      if (!window.speechSynthesis || !metin) return;
      this.sus();
      var s = new SpeechSynthesisUtterance(metin);
      s.lang = 'tr-TR';
      s.rate = 0.95;
      var sesler = speechSynthesis.getVoices().filter(function (v) { return /^tr/i.test(v.lang); });
      if (sesler.length) s.voice = sesler[0];
      speechSynthesis.speak(s);
    },
    sus: function () {
      if (window.speechSynthesis) speechSynthesis.cancel();
    }
  };
})();
