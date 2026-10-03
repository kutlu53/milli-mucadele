/* Ana akış: Açılış → Prolog → Harita → (Yolculuk → Hikâye → Mini oyun → Röportaj → Haber → Sayfa) → Harita */
(function () {
  'use strict';
  var IP = window.IP;
  var ADIMLAR = ['Yolculuk', 'Hikâye', 'Mini oyun', 'Röportaj', 'Haber', 'Sayfa'];
  var ustEl;

  /* ---------- Üst şerit ---------- */
  function ustSerit(o) {
    o = o || {};
    ustEl.innerHTML = '';
    var sol = IP.el('div', 'ust-sol'), orta = IP.el('div', 'ust-orta'), sag = IP.el('div', 'ust-sag');
    if (o.cikis) sol.appendChild(IP.dugme('◀ Harita', 'ikincil kucuk', function () { haritaEkrani(); }));
    if (o.adim != null) {
      ADIMLAR.forEach(function (a, i) {
        orta.appendChild(IP.el('span', 'adim' + (i === o.adim ? ' aktif' : (i < o.adim ? ' gecti' : '')), (i + 1) + '. ' + a));
      });
    }
    if (IP.kayit.veri) {
      var y = IP.kayit.toplamYildiz();
      sag.appendChild(IP.el('span', 'yildiz-sayac', '★ ' + y + ' · ' + IP.rutbe(y) + ' · ' + IP.kayit.muhabirAdi()));
    }
    var ses = IP.el('button', 'dugme yuvarlak ikincil', IP.ses.acik ? '🔔' : '🔕');
    ses.type = 'button'; ses.setAttribute('aria-label', 'Sesi aç ya da kapat');
    ses.addEventListener('click', function () {
      IP.ses.acik = !IP.ses.acik; ses.textContent = IP.ses.acik ? '🔔' : '🔕';
      if (!IP.ses.acik) IP.ses.sus(); else IP.ses.cal('tik');
    });
    var tam = IP.el('button', 'dugme yuvarlak ikincil', '⛶');
    tam.type = 'button'; tam.setAttribute('aria-label', 'Tam ekran');
    tam.addEventListener('click', function () {
      if (document.fullscreenElement) document.exitFullscreen();
      else if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
    });
    sag.appendChild(ses); sag.appendChild(tam);
    ustEl.appendChild(sol); ustEl.appendChild(orta); ustEl.appendChild(sag);
  }

  /* ---------- Açılış ---------- */
  function acilisEkrani() {
    IP.ucb.goster('telgraf');
    if (IP.ucb.var) IP.ucb.telgraf().bakis(0.6);
    IP.sahneDegistir(function (e) {
      ustSerit();
      e.classList.add('acilis');
      var baslik = IP.el('div', 'acilis-baslik');
      baslik.appendChild(IP.el('div', 'acilis-ust', '— Zaman Muhabiri —'));
      var ad = IP.el('h1', null, IP.buyukHarf('İstiklal Postası')), dokunus = 0;
      // Gizli giriş: oyun adına 5 kez dokunulunca öğretmen paneli açılır.
      ad.addEventListener('click', function () { if (++dokunus >= 5) ogretmenEkrani(); });
      baslik.appendChild(ad);
      baslik.appendChild(IP.el('div', 'acilis-alt', 'Millî Mücadele\'nin kahramanlarını sen yaz'));

      // Anonim öğrenci kodu seçici (isim yazılmaz): harf + sayı, ör. D-07
      var son = /^([A-Z])-(\d+)$/.exec(IP.kayit.sonKod()) || [0, 'D', '1'];
      var harfler = 'ABCDEFGHKLMN'.split(''), harf = Math.max(0, harfler.indexOf(son[1])), sayi = +son[2];
      var panel = IP.el('div', 'acilis-panel kagit');
      panel.appendChild(IP.el('div', 'acilis-etiket', 'Muhabir kodun'));
      var secici = IP.el('div', 'kod-secici');
      var harfYazi = IP.el('span', 'kod-deger'), sayiYazi = IP.el('span', 'kod-deger');
      function yaz() { harfYazi.textContent = harfler[harf]; sayiYazi.textContent = (sayi < 10 ? '0' : '') + sayi; }
      function kodAl() { return harfler[harf] + '-' + (sayi < 10 ? '0' : '') + sayi; }
      secici.appendChild(IP.dugme('◀', 'ikincil yuvarlak', function () { harf = (harf + harfler.length - 1) % harfler.length; yaz(); }));
      secici.appendChild(harfYazi);
      secici.appendChild(IP.dugme('▶', 'ikincil yuvarlak', function () { harf = (harf + 1) % harfler.length; yaz(); }));
      secici.appendChild(IP.el('span', 'kod-tire', '–'));
      secici.appendChild(IP.dugme('−', 'ikincil yuvarlak', function () { sayi = sayi <= 1 ? 40 : sayi - 1; yaz(); }));
      secici.appendChild(sayiYazi);
      secici.appendChild(IP.dugme('+', 'ikincil yuvarlak', function () { sayi = sayi >= 40 ? 1 : sayi + 1; yaz(); }));
      yaz();
      panel.appendChild(secici);

      // Oyuncu adı (isteğe bağlı): yalnızca bu cihazda, gazete imzası için tutulur. CSV'ye ve araştırma verisine girmez.
      var adKutu = IP.el('label', 'ad-kutu');
      adKutu.appendChild(IP.el('span', 'acilis-etiket', 'Adın (isteğe bağlı)'));
      var adGiris = IP.el('input', 'ad-giris');
      adGiris.type = 'text'; adGiris.maxLength = 30; adGiris.autocomplete = 'off'; adGiris.placeholder = 'Gazetede "Muhabir: …" diye yazar';
      adKutu.appendChild(adGiris);
      panel.appendChild(adKutu);
      // Kod değişince o kodun daha önce yazılmış adı kutuya gelir.
      function adiGetir() { var k = IP.kayit.kayitOku(kodAl()); adGiris.value = (k && k.ad) || ''; }
      Array.prototype.forEach.call(secici.querySelectorAll('button'), function (b) { b.addEventListener('click', adiGetir); });
      adiGetir();

      panel.appendChild(IP.dugme('Göreve başla ▶', 'buyuk', function () {
        IP.kayit.ac(kodAl());
        IP.kayit.adYaz(adGiris.value);
        IP.ses.cal('telgraf');
        if (IP.kayit.veri.prolog_goruldu) haritaEkrani(); else prolog();
      }));
      e.appendChild(baslik); e.appendChild(panel);
    });
  }

  /* ---------- Öğretmen paneli ve sunum modu ---------- */
  function ogretmenEkrani() {
    IP.sahneDegistir(function (e) {
      IP.ucb.goster(null);
      ustSerit();
      return IP.ogretmen.goster(e);
    }).then(function (sonuc) {
      if (sonuc.eylem !== 'sunum') { acilisEkrani(); return; }
      // Sunum modu: yalnızca hikâye panelleri gösterilir, kayıt tutulmaz.
      IP.sahneDegistir(function (e) {
        ustEl.innerHTML = '';
        var sol = IP.el('div', 'ust-sol');
        sol.appendChild(IP.dugme('◀ Panel', 'ikincil kucuk', ogretmenEkrani));
        ustEl.appendChild(sol);
        e.classList.add('sunum');
        return IP.hikaye.goster(e, sonuc.kahraman);
      }).then(ogretmenEkrani);
    });
  }

  /* ---------- Prolog ---------- */
  function prolog() {
    var adimlar = IP.veri.prolog, no = 0;
    IP.ucb.goster('telgraf');
    var tel = IP.ucb.var ? IP.ucb.telgraf() : null;
    if (tel) tel.bakis(-1.3);
    IP.sahneDegistir(function (e) {
      ustSerit();
      e.classList.add('prolog');
      var kutu = IP.el('div', 'altyazi kagit');
      var bas = IP.el('div', 'altyazi-bas');
      var yazi = IP.el('p');
      var sira = IP.el('div', 'dugme-sira');
      var vurucu = null;
      function bitir() {
        clearInterval(vurucu);
        IP.kayit.veri.prolog_goruldu = true; IP.kayit.kaydet();
        haritaEkrani();
      }
      sira.appendChild(IP.dugme('Geç', 'ikincil kucuk', bitir));
      sira.appendChild(IP.okuDugmesi(function () { return adimlar[no].metin; }));
      sira.appendChild(IP.dugme('İleri ▶', null, function () { no++; if (no >= adimlar.length) bitir(); else goster(); }));
      kutu.appendChild(bas); kutu.appendChild(yazi); kutu.appendChild(sira);
      e.appendChild(kutu);
      IP.temizlikEkle(function () { clearInterval(vurucu); });

      function goster() {
        var a = adimlar[no];
        clearInterval(vurucu);
        kutu.className = 'altyazi kagit ' + a.konusan;
        bas.innerHTML = '';
        if (a.konusan === 'nuri') {
          var yuz = IP.el('canvas', 'nuri-yuz'); IP.cizim.nuri(yuz); bas.appendChild(yuz);
          bas.appendChild(IP.el('strong', null, IP.veri.rehber.ad));
          if (IP.veri.rehber.kurgusal) bas.appendChild(IP.el('span', 'rozet kurgusal', 'kurgusal karakter'));
        } else if (a.konusan === 'telgraf') {
          bas.appendChild(IP.el('strong', null, '• — •  TELGRAF  • — •'));
          IP.ses.cal('telgraf');
          vurucu = setInterval(function () { if (tel) tel.vur(); }, 130);
        }
        IP.daktilo(yazi, a.metin, a.konusan === 'telgraf' ? 45 : 26).then(function () { clearInterval(vurucu); });
      }
      goster();
    });
  }

  /* ---------- Harita ---------- */
  // Kahramanlar sırayla açılır: bir öncekinin sayfası canlanmadan sıradaki kilitli kalır.
  // Araya bülten giriyorsa, bülten yapılmadan sonraki kahraman açılmaz (puanı ne olursa olsun).
  function durumHesapla() {
    // Öğretmen panelinden "tüm bölümler açık" seçildiyse sıra beklenmez.
    var durumlar = {}, oncekiTamam = true, bekleyenBulten = null, tumuAcik = IP.ogretmen.tumuAcik();
    IP.veri.kahramanlar.forEach(function (k) {
      var tamam = IP.kayit.tamamMi(k.id);
      durumlar[k.id] = tamam ? 'tamam' : (k.hazir && (oncekiTamam || tumuAcik) ? 'acik' : 'kilitli');
      oncekiTamam = tamam;
      var b = IP.bulten.sonraki(k.id);
      if (b && tamam && !IP.kayit.bulten(b.no)) { oncekiTamam = false; bekleyenBulten = bekleyenBulten || b; }
    });
    return { durumlar: durumlar, bekleyenBulten: bekleyenBulten };
  }

  function bultenEkrani(b) {
    var h3 = IP.ucb.var ? IP.ucb.harita() : null;
    IP.sahneDegistir(function (e) {
      IP.ucb.goster('harita');
      if (h3) { h3.durumAyarla(durumHesapla().durumlar); h3.hemenGenel(); }
      ustSerit({ cikis: true });
      return IP.bulten.goster(e, b, h3);
    }).then(function (sonuc) {
      IP.kayit.bultenSonucu(b.no, sonuc);
      haritaEkrani();
    });
  }

  function haritaEkrani(o) {
    o = o || {};
    var h3 = IP.ucb.var ? IP.ucb.harita() : null;
    var hesap = durumHesapla(), durumlar = hesap.durumlar, bekleyen = hesap.bekleyenBulten;
    var siradaki = IP.veri.kahramanlar.filter(function (k) { return durumlar[k.id] === 'acik'; })[0];
    var hepsiTamam = IP.kayit.tamamSayisi() >= IP.veri.kahramanlar.length;
    var bosMesaj = hepsiTamam ? (IP.kayit.veri.final_goruldu ? 'Zafer Nüshası basıldı. İstediğin bölümü yeniden oynayabilirsin.' : 'On sayfanın hepsi canlandı! Matbaa seni bekliyor.') : 'Sıradaki kahramanın bölümü hazırlanıyor.';
    if (o.yak) durumlar[o.yak] = 'acik'; // ışık birazdan gözümüzün önünde yanacak
    return IP.sahneDegistir(function (e) {
      IP.ucb.goster('harita');
      if (h3) { h3.durumAyarla(durumlar); if (o.yak) h3.hemenYakin(o.yak); else h3.hemenGenel(); }
      ustSerit();
      e.classList.add('harita-ekrani');
      var baslik = IP.el('div', 'harita-baslik');
      baslik.appendChild(IP.el('h2', null, 'Anadolu Haritası'));
      var yonerge = IP.el('div', 'yonerge', IP.ogretmen.tumuAcik() ? 'Tanıtım modu: tüm bölümler açık.' : (siradaki ? 'Yanıp sönen konuma dokun.' : bosMesaj));
      baslik.appendChild(yonerge);
      if (hepsiTamam && !bekleyen && !IP.kayit.veri.final_goruldu) {
        baslik.appendChild(IP.dugme('• — •  Zafer Nüshası ▶', 'bulten-dugme', finalAkisi));
      }
      if (bekleyen) {
        yonerge.textContent = 'Nuri\'den acil telgraf var!';
        baslik.appendChild(IP.dugme('• — •  ' + bekleyen.ad + ' ▶', 'bulten-dugme', function () { bultenEkrani(bekleyen); }));
      }
      e.appendChild(baslik);

      // 3 boyut yoksa: düz (2 boyutlu) harita
      var duz = null;
      if (!h3) {
        duz = IP.el('div', 'harita2b');
        var tv = IP.el('canvas'); tv.width = 1600; tv.height = 741;
        IP.cizim.haritaCiz(tv.getContext('2d'), 1600, 741, { deniz: true });
        duz.appendChild(tv); e.appendChild(duz);
      }

      var isaretler = {};
      IP.veri.kahramanlar.forEach(function (k) {
        var d = IP.el(durumlar[k.id] === 'kilitli' ? 'div' : 'button', 'isaret ' + durumlar[k.id]);
        if (d.tagName === 'BUTTON') {
          d.type = 'button';
          d.addEventListener('click', function () { IP.ses.cal('tik'); kahramanAkisi(k); });
        }
        isaretEtiketi(d, k, durumlar[k.id]);
        if (durumlar[k.id] === 'kilitli' && h3) d.style.display = 'none';
        isaretler[k.id] = d;
        (duz || e).appendChild(d);
      });

      // Birbirine çok yakın konumların etiketleri üst üste binmesin diye:
      // en üstteki konumun etiketi iğnenin üstünde kalır; altındaki tekse alta, iki taneyse sola ve sağa asılır.
      function yerlesim(k) {
        var kume = IP.veri.kahramanlar.filter(function (b) {
          if (durumlar[b.id] === 'kilitli') return false;
          return Math.abs(k.konum.harita_y - b.konum.harita_y) < 0.16 && Math.abs(k.konum.harita_x - b.konum.harita_x) < 0.1;
        }).sort(function (a, b) { return a.konum.harita_y - b.konum.harita_y; });
        if (kume.length < 2) {
          // Kümede değil ama hemen üstünde başka konumlar varsa etiket alta asılır (üsttekilerin etiketine binmesin).
          var ustuDolu = IP.veri.kahramanlar.some(function (b) {
            var dy = k.konum.harita_y - b.konum.harita_y;
            return durumlar[b.id] !== 'kilitli' && dy >= 0.16 && dy < 0.25 && Math.abs(k.konum.harita_x - b.konum.harita_x) < 0.1;
          });
          return ustuDolu ? ' alt' : '';
        }
        if (kume[0] === k) return '';
        var alttakiler = kume.slice(1).sort(function (a, b) { return a.konum.harita_x - b.konum.harita_x; });
        if (alttakiler.length < 2) return ' alt';
        return alttakiler[0] === k ? ' sol' : (alttakiler[alttakiler.length - 1] === k ? ' sag' : ' alt');
      }
      function isaretEtiketi(d, k, durum) {
        d.className = 'isaret ' + durum + (durum !== 'kilitli' ? yerlesim(k) : '');
        d.innerHTML = '';
        if (durum === 'tamam') {
          d.appendChild(IP.el('strong', null, k.ad));
          d.appendChild(IP.el('span', 'isaret-yildiz', '★★★'.slice(0, IP.kayit.yildiz(k.id)) + '☆☆☆'.slice(0, 3 - IP.kayit.yildiz(k.id))));
        } else if (durum === 'acik') {
          d.appendChild(IP.el('strong', null, k.konum.ad));
          d.appendChild(IP.el('span', null, 'Göreve git ▶'));
        } else d.textContent = '?';
      }

      function konumla() {
        IP.veri.kahramanlar.forEach(function (k) {
          var d = isaretler[k.id];
          if (h3) {
            var p = h3.ekranKonumu(k.id);
            d.style.left = p.x + 'px'; d.style.top = p.y + 'px';
          } else {
            d.style.left = (k.konum.harita_x * 100) + '%'; d.style.top = (k.konum.harita_y * 100) + '%';
          }
        });
      }
      konumla();
      if (h3) { IP.ucb.onKare = konumla; IP.temizlikEkle(function () { IP.ucb.onKare = null; }); }

      // Alt şerit: defterin on sayfası
      var serit = IP.el('div', 'defter-serit kagit');
      var tamam = IP.kayit.tamamSayisi(), toplam = IP.veri.kahramanlar.length;
      serit.appendChild(IP.el('strong', null, 'Muhabir Defteri'));
      var sayfalar = IP.el('div', 'serit-sayfalar');
      IP.veri.kahramanlar.forEach(function (k) {
        sayfalar.appendChild(IP.el('span', 'serit-sayfa' + (IP.kayit.tamamMi(k.id) ? ' canli' : ''), IP.kayit.tamamMi(k.id) ? '✦' : ''));
      });
      serit.appendChild(sayfalar);
      serit.appendChild(IP.el('span', null, tamam + ' / ' + toplam + ' sayfa'));
      // Yapılmış bültenler buradan yeniden açılabilir.
      if (IP.kayit.veri.final_goruldu) serit.appendChild(IP.dugme('Zafer Nüshası ↻', 'ikincil kucuk', finalAkisi));
      IP.bulten.liste().forEach(function (b) {
        var sonuc = IP.kayit.bulten(b.no);
        if (sonuc) serit.appendChild(IP.dugme('Bülten ' + b.no + ': ' + sonuc.en_iyi + '/' + sonuc.toplam + ' ↻', 'ikincil kucuk', function () { bultenEkrani(b); }));
      });
      e.appendChild(serit);

      // Bölüm yeni bittiyse: ışık yakma töreni
      if (o.yak) {
        var k = IP.kahramanBul(o.yak);
        e.classList.add('toren');
        yonerge.textContent = k.konum.ad + ' aydınlanıyor…';
        IP.bekle(1100).then(function () {
          if (h3) h3.yak(o.yak);
          IP.ses.cal('isik'); IP.ses.cal('zafer');
          isaretEtiketi(isaretler[o.yak], k, 'tamam');
          IP.efekt.ogeden(isaretler[o.yak], 70, null, true);
          return IP.bekle(2600);
        }).then(function () {
          return h3 ? h3.genel(2.4) : null;
        }).then(function () {
          e.classList.remove('toren');
          yonerge.textContent = bekleyen ? 'Sayfa canlandı! Nuri\'den acil telgraf var!'
            : (siradaki ? 'Sayfa canlandı! Sıradaki görev: ' + siradaki.konum.ad : (hepsiTamam ? '' : 'Sayfa canlandı! ') + bosMesaj);
        });
      }
    });
  }

  /* ---------- Bir kahramanın bölümü ---------- */
  function adim(no, kur) {
    return IP.sahneDegistir(function (e) {
      IP.ucb.goster(null);
      ustSerit({ adim: no, cikis: true });
      return kur(e);
    });
  }

  function yolculuk(k) {
    var h3 = IP.ucb.var ? IP.ucb.harita() : null;
    return IP.sahneDegistir(function (e) {
      ustSerit({ adim: 0, cikis: true });
      e.classList.add('yolculuk');
      var kutu = IP.el('div', 'yolculuk-yazi');
      var konum = IP.el('h1'), tarih = IP.el('div', 'yolculuk-tarih'), ad = IP.el('div', 'yolculuk-ad');
      kutu.appendChild(konum); kutu.appendChild(tarih); kutu.appendChild(ad);
      if (IP.taslakMi(k)) kutu.appendChild(IP.taslakDamga());
      e.appendChild(kutu);
      return (h3 ? h3.uc(k.id, 2.6) : IP.bekle(400)).then(function () {
        IP.ses.cal('telgraf');
        return IP.daktilo(konum, IP.buyukHarf(k.konum.ad), 110);
      }).then(function () {
        tarih.textContent = k.tarih_etiketi || '';
        ad.textContent = k.ad + (k.baslik ? ' — “' + k.baslik + '”' : '');
        kutu.classList.add('tamam');
        return IP.bekle(2600);
      });
    });
  }

  async function kahramanAkisi(k) {
    var bas = Date.now();
    await yolculuk(k);
    await adim(1, function (e) { return IP.hikaye.goster(e, k); });
    var oyun = await adim(2, function (e) {
      var modul = k.mini_oyun && IP.oyunlar[k.mini_oyun.modul];
      if (modul) return modul.start(e, k);
      // Mini oyunu henüz yazılmamış kahramanlar için geçici ekran
      return new Promise(function (coz) {
        e.appendChild(IP.el('div', 'yonerge', 'Bu kahramanın mini oyunu henüz hazır değil.'));
        e.appendChild(IP.dugme('Geç ▶', null, function () { coz({ completed: false, durationSec: 0, details: {} }); }));
      });
    });
    await adim(3, function (e) { return IP.roportaj.goster(e, k); });
    var haber = await adim(4, function (e) { return IP.haber.goster(e, k); });
    var bonus = await adim(4, function (e) { return IP.bonus.goster(e, k); });

    var yildizlar = [!!oyun.completed, haber.yanlis === 0, !!bonus.dogru];
    IP.kayit.kahramanSonucu(k.id, {
      yildiz: yildizlar.filter(Boolean).length,
      mini_oyun_sure_sn: oyun.durationSec,
      mini_oyun_tamam: !!oyun.completed,
      haber_deneme_sayisi: haber.yanlis + 1,
      bonus_dogru: !!bonus.dogru,
      toplam_sure_dk: Math.round((Date.now() - bas) / 6000) / 10
    });
    var haberMetni = k.haber.sablon.replace(/\{(\d+)\}/g, function (m, i) { return k.haber.dogrular[+i]; });
    await adim(5, function (e) { return IP.sayfa.goster(e, k, { yildizlar: yildizlar, haberMetni: haberMetni }); });
    haritaEkrani({ yak: k.id });
  }

  /* ---------- Başlangıç ---------- */
  window.addEventListener('DOMContentLoaded', async function () {
    ustEl = document.getElementById('ust');
    await IP.veriYukle();
    if (!IP.veri) {
      document.getElementById('sahne').textContent = 'Veri dosyası okunamadı. "araclar/veri-paketle.bat" dosyasını çalıştırın.';
      return;
    }
    // Fontlar yüklenmeden 3B dokular çizilirse yazılar bozuk çıkar; kısa bir süre beklenir.
    try {
      await Promise.race([
        Promise.all([document.fonts.load('900 20px Manset'), document.fonts.load('400 20px Metin'), document.fonts.load('400 20px Daktilo')]),
        IP.bekle(1500)
      ]);
    } catch (hata) { /* font yüklenemezse yedek fontla devam edilir */ }
    IP.ucb.kur(document.getElementById('arka3b'));
    acilisEkrani();
  });

  /* ---------- Final: Zafer Nüshası → Büyük Bülten → veda ---------- */
  async function finalAkisi() {
    var h3 = IP.ucb.var ? IP.ucb.harita() : null;
    function haritaHazirla() {
      IP.ucb.goster('harita');
      if (h3) { h3.durumAyarla(durumHesapla().durumlar); h3.hemenGenel(); }
    }
    await IP.sahneDegistir(function (e) {
      IP.ucb.goster('telgraf');
      if (IP.ucb.var) IP.ucb.telgraf().bakis(-1.3);
      ustSerit({ cikis: true });
      return IP.final.telgraf(e);
    });
    await IP.sahneDegistir(function (e) {
      IP.ucb.goster(null);
      ustSerit({ cikis: true });
      return IP.final.gazete(e);
    });
    var buyuk = IP.bulten.liste().filter(function (b) { return b.sonra === 'final'; })[0];
    if (buyuk) {
      var sonuc = await IP.sahneDegistir(function (e) {
        haritaHazirla();
        ustSerit({ cikis: true });
        return IP.bulten.goster(e, buyuk, h3, { devam: 'Devam ▶' });
      });
      IP.kayit.bultenSonucu(buyuk.no, sonuc);
    }
    await IP.sahneDegistir(function (e) {
      haritaHazirla();
      ustSerit({ cikis: true });
      return IP.final.veda(e);
    });
    IP.kayit.veri.final_goruldu = true; IP.kayit.kaydet();
    haritaEkrani();
  }

  IP.haritaEkrani = haritaEkrani;
})();
