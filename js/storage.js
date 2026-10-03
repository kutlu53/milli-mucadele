/* Kayıt: İlerleme tarayıcının yerel deposunda (localStorage) tutulur.
   Araştırma verisi anonim kodla (ör. D-07) tutulur. Oyuncu isterse adını yazar; ad yalnızca bu cihazda,
   gazete imzası ve üst şerit için saklanır, CSV dışa aktarımına ve araştırma verisine girmez. */
(function () {
  'use strict';
  var IP = window.IP;
  var ON_EK = 'ip_kayit_';
  var yedek = {}; // localStorage kapalıysa oturum boyunca bellekte tutulur

  function oku(anahtar) {
    try { return localStorage.getItem(anahtar); } catch (e) { return yedek[anahtar] || null; }
  }
  function yaz(anahtar, deger) {
    try { localStorage.setItem(anahtar, deger); } catch (e) { yedek[anahtar] = deger; }
  }

  IP.kayit = {
    kod: null,
    veri: null,

    sonKod: function () { return oku('ip_son_kod') || 'D-01'; },

    ac: function (kod) {
      this.kod = kod;
      yaz('ip_son_kod', kod);
      var ham = oku(ON_EK + kod);
      try { this.veri = ham ? JSON.parse(ham) : null; } catch (e) { this.veri = null; }
      if (!this.veri) this.veri = { ogrenci_kodu: kod, prolog_goruldu: false, kahramanlar: {} };
      return this.veri;
    },

    kaydet: function () { yaz(ON_EK + this.kod, JSON.stringify(this.veri)); },

    // Oyuncu adı (isteğe bağlı). Boş bırakılırsa silinir.
    adYaz: function (ad) {
      ad = (ad || '').replace(/\s+/g, ' ').trim().slice(0, 30);
      if (ad) this.veri.ad = ad; else delete this.veri.ad;
      this.kaydet();
    },

    // Gazete imzası ve üst şerit için: ad yazıldıysa ad, yoksa anonim kod.
    muhabirAdi: function () { return (this.veri && this.veri.ad) || this.kod; },

    // Bir kahramanın sonucunu yazar. Tekrar oynanırsa en iyi yıldız sayısı korunur.
    kahramanSonucu: function (id, sonuc) {
      var eski = this.veri.kahramanlar[id];
      if (eski && eski.yildiz > sonuc.yildiz) sonuc.yildiz = eski.yildiz;
      sonuc.tamam = true;
      sonuc.tarih = new Date().toISOString().slice(0, 10);
      this.veri.kahramanlar[id] = sonuc;
      this.kaydet();
    },

    // Bir bültenin sonucunu yazar. Araştırma için ilk denemenin puanı saklanır; en iyi puan ayrıca tutulur.
    bultenSonucu: function (no, sonuc) {
      var hepsi = this.veri.bultenler = this.veri.bultenler || {}, eski = hepsi[no];
      hepsi[no] = {
        dogru: eski ? eski.dogru : sonuc.dogru,
        en_iyi: Math.max(eski ? eski.en_iyi : 0, sonuc.dogru),
        toplam: sonuc.toplam,
        sure_sn: eski ? eski.sure_sn : sonuc.sure_sn,
        deneme: (eski ? eski.deneme : 0) + 1,
        tarih: eski ? eski.tarih : new Date().toISOString().slice(0, 10)
      };
      this.kaydet();
    },

    bulten: function (no) {
      return (this.veri.bultenler || {})[no] || null;
    },

    tamamMi: function (id) {
      var k = this.veri.kahramanlar[id];
      return !!(k && k.tamam);
    },

    yildiz: function (id) {
      var k = this.veri.kahramanlar[id];
      return k ? k.yildiz || 0 : 0;
    },

    toplamYildiz: function () {
      var t = 0, ks = this.veri.kahramanlar;
      Object.keys(ks).forEach(function (id) { t += ks[id].yildiz || 0; });
      return t;
    },

    tamamSayisi: function () {
      var ks = this.veri.kahramanlar;
      return Object.keys(ks).filter(function (id) { return ks[id].tamam; }).length;
    },

    /* ----- Öğretmen paneli için ----- */
    // Bu cihazda kaydı bulunan bütün öğrenci kodları.
    tumKodlar: function () {
      var kodlar = [];
      try {
        for (var i = 0; i < localStorage.length; i++) {
          var a = localStorage.key(i);
          if (a.indexOf(ON_EK) === 0) kodlar.push(a.slice(ON_EK.length));
        }
      } catch (e) {
        Object.keys(yedek).forEach(function (a) { if (a.indexOf(ON_EK) === 0) kodlar.push(a.slice(ON_EK.length)); });
      }
      return kodlar.sort();
    },

    kayitOku: function (kod) {
      try { return JSON.parse(oku(ON_EK + kod)); } catch (e) { return null; }
    },

    sil: function (kod) {
      try { localStorage.removeItem(ON_EK + kod); } catch (e) { delete yedek[ON_EK + kod]; }
      if (this.kod === kod) { this.kod = null; this.veri = null; }
    },

    hepsiniSil: function () {
      var self = this;
      this.tumKodlar().forEach(function (kod) { self.sil(kod); });
    },

    // Cihaz ayarları (öğretmen PIN'i, "tüm bölümler açık" seçeneği).
    ayarOku: function (ad) { return oku('ip_ayar_' + ad) || ''; },
    ayarYaz: function (ad, deger) { yaz('ip_ayar_' + ad, deger); },

    sifirla: function () {
      this.veri = { ogrenci_kodu: this.kod, prolog_goruldu: false, kahramanlar: {} };
      this.kaydet();
    }
  };
})();
