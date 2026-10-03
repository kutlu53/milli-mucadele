/* Öğretmen paneli.
   Açılış ekranındaki oyun adına 5 kez dokunulup PIN girilince açılır.
   - Sınıf hedefi: sınıfın toplam canlandırdığı sayfa sayısı (bireysel sıralama tablosu yoktur).
   - İlerleme: hangi öğrenci kodunun hangi kahramanı bitirdiği.
   - Tüm bölümleri aç: sunum ve tanıtım için kilitleri kaldırır.
   - Sunum modu: bir kahramanın hikâye panelleri sınıfa akıllı tahtadan okutulur.
   - CSV dışa aktarma: araştırmanın oyun içi verileri (isim yok, yalnızca anonim kod; oyuncunun yazdığı ad da dışarı verilmez).
   - Sıfırlama: tek öğrenci ya da bütün cihaz.
   Veriler yalnızca bu cihazın tarayıcısında durur; hiçbir yere gönderilmez. */
(function () {
  'use strict';
  var IP = window.IP;
  var VARSAYILAN_PIN = '2204'; // ilk kurulumdaki PIN; panelden değiştirilebilir
  var CSV_ALANLARI = ['ogrenci_kodu', 'kahraman_id', 'mini_oyun_sure_sn', 'mini_oyun_tamam', 'haber_deneme_sayisi', 'bonus_dogru', 'yildiz', 'bulten_no', 'bulten_dogru', 'toplam_sure_dk', 'tarih'];
  var kilitAcik = false; // PIN bu oturumda bir kez girildiyse yeniden sorulmaz

  function pinAl() { return IP.kayit.ayarOku('ogretmen_pin') || VARSAYILAN_PIN; }

  // CSV metni: her kahraman sonucu ve her bülten sonucu ayrı bir satırdır.
  function csvUret() {
    var satirlar = [CSV_ALANLARI.join(';')];
    function ekle(s) { satirlar.push(CSV_ALANLARI.map(function (a) { return s[a] == null ? '' : String(s[a]); }).join(';')); }
    function evetHayir(v) { return v == null ? '' : (v ? 1 : 0); }
    IP.kayit.tumKodlar().forEach(function (kod) {
      var v = IP.kayit.kayitOku(kod); if (!v) return;
      IP.veri.kahramanlar.forEach(function (k) {
        var s = (v.kahramanlar || {})[k.id]; if (!s) return;
        ekle({
          ogrenci_kodu: kod, kahraman_id: k.id, mini_oyun_sure_sn: s.mini_oyun_sure_sn, mini_oyun_tamam: evetHayir(s.mini_oyun_tamam),
          haber_deneme_sayisi: s.haber_deneme_sayisi, bonus_dogru: evetHayir(s.bonus_dogru), yildiz: s.yildiz, toplam_sure_dk: s.toplam_sure_dk, tarih: s.tarih
        });
      });
      Object.keys(v.bultenler || {}).forEach(function (no) {
        var b = v.bultenler[no];
        ekle({ ogrenci_kodu: kod, bulten_no: no, bulten_dogru: b.dogru, toplam_sure_dk: b.sure_sn == null ? '' : Math.round(b.sure_sn / 6) / 10, tarih: b.tarih });
      });
    });
    return satirlar.join('\r\n') + '\r\n';
  }

  function csvIndir() {
    var metin = csvUret();
    IP.ogretmen.sonCsv = metin;
    // Başındaki işaret (BOM), tablo programlarının Türkçe harfleri doğru göstermesi içindir.
    var blob = new Blob(['﻿' + metin], { type: 'text/csv;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'istiklal-postasi-veri-' + new Date().toISOString().slice(0, 10) + '.csv';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
  }

  // Rakam düğmeleriyle PIN sorar (klavye gerekmez). Doğruysa "true" ile çözülür.
  function pinEkrani(ekran, baslik, dogrula) {
    return new Promise(function (coz) {
      ekran.innerHTML = '';
      var kutu = IP.el('div', 'pin-kutu kagit');
      kutu.appendChild(IP.el('h2', null, baslik));
      var gosterge = IP.el('div', 'pin-gosterge'), girilen = '';
      var bilgi = IP.el('div', 'pin-bilgi', '4 rakam gir.');
      function yaz() { gosterge.textContent = '●●●●'.slice(0, girilen.length) + '○○○○'.slice(0, 4 - girilen.length); }
      yaz();
      var tuslar = IP.el('div', 'pin-tuslar');
      '123456789'.split('').concat(['⌫', '0', '✕']).forEach(function (t) {
        tuslar.appendChild(IP.dugme(t, 'ikincil', function () {
          if (t === '✕') { coz(null); return; }
          if (t === '⌫') { girilen = girilen.slice(0, -1); yaz(); return; }
          if (girilen.length >= 4) return;
          girilen += t; yaz();
          if (girilen.length === 4) {
            var sonuc = dogrula(girilen);
            if (sonuc) { IP.ses.cal('dogru'); coz(girilen); }
            else { IP.ses.cal('yanlis'); bilgi.textContent = 'PIN yanlış. Yeniden dene.'; girilen = ''; yaz(); }
          }
        }));
      });
      kutu.appendChild(gosterge); kutu.appendChild(bilgi); kutu.appendChild(tuslar);
      ekran.appendChild(kutu);
    });
  }

  // İki kez dokunmayı isteyen düğme (yanlışlıkla silmeyi önler).
  function onayliDugme(metin, sinif, eylem) {
    var bekliyor = false, zamanlayici = null;
    var d = IP.dugme(metin, sinif, function () {
      if (!bekliyor) {
        bekliyor = true; d.textContent = 'Emin misin? Yeniden dokun'; d.classList.add('uyari');
        zamanlayici = setTimeout(function () { bekliyor = false; d.textContent = metin; d.classList.remove('uyari'); }, 3500);
        return;
      }
      clearTimeout(zamanlayici); eylem();
    });
    return d;
  }

  function panelCiz(ekran, coz) {
    ekran.innerHTML = '';
    var kodlar = IP.kayit.tumKodlar(), kahramanlar = IP.veri.kahramanlar, bultenler = IP.bulten.liste();
    var kayitlar = kodlar.map(function (kod) { return { kod: kod, v: IP.kayit.kayitOku(kod) || {} }; });
    var toplamSayfa = 0;
    kayitlar.forEach(function (r) { kahramanlar.forEach(function (k) { if (((r.v.kahramanlar || {})[k.id] || {}).tamam) toplamSayfa++; }); });
    var hedef = Math.max(1, kodlar.length) * kahramanlar.length;

    var panel = IP.el('div', 'ogretmen kagit');
    var ust = IP.el('div', 'ogretmen-ust');
    ust.appendChild(IP.el('h2', null, 'Öğretmen Paneli'));
    ust.appendChild(IP.dugme('Kapat ✕', 'ikincil kucuk', function () { coz({ eylem: 'kapat' }); }));
    panel.appendChild(ust);

    // Sınıf hedefi
    var hedefKutu = IP.el('div', 'sinif-hedefi');
    hedefKutu.appendChild(IP.el('strong', null, 'Sınıf hedefi: ' + toplamSayfa + ' / ' + hedef + ' sayfa canlandı (' + kodlar.length + ' öğrenci kodu)'));
    var cubuk = IP.el('div', 'hedef-cubuk'), dolgu = IP.el('i'); dolgu.style.width = Math.round(toplamSayfa / hedef * 100) + '%';
    cubuk.appendChild(dolgu); hedefKutu.appendChild(cubuk);
    panel.appendChild(hedefKutu);

    // İlerleme tablosu
    var sarici = IP.el('div', 'ilerleme-sarici'), tablo = IP.el('table', 'ilerleme');
    var baslik = IP.el('tr');
    baslik.appendChild(IP.el('th', null, 'Kod'));
    kahramanlar.forEach(function (k, n) { var th = IP.el('th', null, String(n + 1)); th.title = k.ad; baslik.appendChild(th); });
    bultenler.forEach(function (b) { baslik.appendChild(IP.el('th', null, 'B' + b.no)); });
    baslik.appendChild(IP.el('th', null, '★')); baslik.appendChild(IP.el('th', null, ''));
    tablo.appendChild(baslik);
    kayitlar.forEach(function (r) {
      var tr = IP.el('tr'), yildiz = 0;
      tr.appendChild(IP.el('td', 'kod', r.kod));
      kahramanlar.forEach(function (k) {
        var s = (r.v.kahramanlar || {})[k.id];
        if (s) yildiz += s.yildiz || 0;
        tr.appendChild(IP.el('td', s && s.tamam ? 'tamam' : '', s && s.tamam ? '★'.repeat(s.yildiz || 0) || '✓' : '·'));
      });
      bultenler.forEach(function (b) { var s = (r.v.bultenler || {})[b.no]; tr.appendChild(IP.el('td', s ? 'tamam' : '', s ? s.dogru + '/' + s.toplam : '·')); });
      tr.appendChild(IP.el('td', 'kod', String(yildiz)));
      var sil = IP.el('td');
      sil.appendChild(onayliDugme('Sıfırla', 'ikincil kucuk', function () { IP.kayit.sil(r.kod); panelCiz(ekran, coz); }));
      tr.appendChild(sil);
      tablo.appendChild(tr);
    });
    sarici.appendChild(tablo);
    if (!kodlar.length) sarici.appendChild(IP.el('p', 'pin-bilgi', 'Bu cihazda henüz kayıtlı öğrenci kodu yok.'));
    panel.appendChild(sarici);
    panel.appendChild(IP.el('div', 'pin-bilgi', 'Sütun numaraları kahraman sırasıdır (1: ' + kahramanlar[0].ad + ' … ' + kahramanlar.length + ': ' + kahramanlar[kahramanlar.length - 1].ad + '). B: bülten, ilk denemedeki doğru sayısı.'));

    // Düğmeler
    var sira = IP.el('div', 'dugme-sira');
    sira.appendChild(IP.dugme('⬇ Veriyi indir (CSV)', null, csvIndir));
    var acik = IP.ogretmen.tumuAcik();
    sira.appendChild(IP.dugme('Tüm bölümler: ' + (acik ? 'AÇIK' : 'sırayla'), acik ? '' : 'ikincil', function () { IP.kayit.ayarYaz('tumu_acik', acik ? '' : '1'); panelCiz(ekran, coz); }));
    sira.appendChild(IP.dugme('PIN değiştir', 'ikincil', function () {
      pinEkrani(ekran, 'Yeni PIN', function () { return true; }).then(function (yeni) { if (yeni) IP.kayit.ayarYaz('ogretmen_pin', yeni); panelCiz(ekran, coz); });
    }));
    sira.appendChild(onayliDugme('Bu cihazdaki tüm kayıtları sil', 'ikincil', function () { IP.kayit.hepsiniSil(); panelCiz(ekran, coz); }));
    panel.appendChild(sira);

    // Sunum modu
    var sunum = IP.el('div', 'sunum-secici');
    sunum.appendChild(IP.el('strong', null, 'Sunum modu — hikâyeyi sınıfa okut:'));
    var liste = IP.el('div', 'dugme-sira');
    kahramanlar.forEach(function (k) {
      if (k.paneller) liste.appendChild(IP.dugme(k.ad, 'ikincil kucuk', function () { coz({ eylem: 'sunum', kahraman: k }); }));
    });
    sunum.appendChild(liste); panel.appendChild(sunum);
    ekran.appendChild(panel);
  }

  IP.ogretmen = {
    sonCsv: '',
    csvUret: csvUret,
    tumuAcik: function () { return IP.kayit.ayarOku('tumu_acik') === '1'; },
    // Paneli gösterir. Sonuç: { eylem: 'kapat' } ya da { eylem: 'sunum', kahraman }.
    goster: function (ekran) {
      return new Promise(function (coz) {
        ekran.classList.add('ogretmen-ekrani');
        if (kilitAcik) { panelCiz(ekran, coz); return; }
        pinEkrani(ekran, 'Öğretmen girişi', function (g) { return g === pinAl(); }).then(function (pin) {
          if (!pin) { coz({ eylem: 'kapat' }); return; }
          kilitAcik = true; panelCiz(ekran, coz);
        });
      });
    }
  };
})();
