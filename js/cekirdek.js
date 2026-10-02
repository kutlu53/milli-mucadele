/* Çekirdek: küçük yardımcılar, veri yükleme ve sahne yöneticisi.
   Bütün dosyalar ortak "IP" (İstiklal Postası) nesnesini kullanır. */
(function () {
  'use strict';
  var IP = window.IP = { oyunlar: {}, veri: null };

  IP.YER_TUTUCU = '[İÇERİK BEKLENİYOR]';

  // Kısa yoldan HTML öğesi oluşturur.
  IP.el = function (etiket, sinif, metin) {
    var e = document.createElement(etiket);
    if (sinif) e.className = sinif;
    if (metin != null) e.textContent = metin;
    return e;
  };

  // Dokunmaya uygun (en az 48 px) düğme oluşturur.
  IP.dugme = function (metin, sinif, tikla) {
    var d = IP.el('button', 'dugme' + (sinif ? ' ' + sinif : ''), metin);
    d.type = 'button';
    d.addEventListener('click', function () {
      IP.ses.cal('tik');
      if (tikla) tikla(d);
    });
    return d;
  };

  IP.bekle = function (ms) {
    return new Promise(function (coz) { setTimeout(coz, ms); });
  };

  // Türkçe kurallarına göre büyük harf (i → İ, ı → I).
  IP.buyukHarf = function (s) { return String(s).toLocaleUpperCase('tr-TR'); };

  IP.karistir = function (dizi) {
    var d = dizi.slice();
    for (var i = d.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var g = d[i]; d[i] = d[j]; d[j] = g;
    }
    return d;
  };

  // Hep aynı sırayı üreten rastgele sayı üreteci (çizimler her açılışta aynı görünsün diye).
  IP.tohumluRastgele = function (tohum) {
    var a = tohum >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };

  // Veriyi yükler. Yerel sunucuda heroes.json ve bulletins.json okunur; çift tıklamayla açıldıysa
  // tarayıcı buna izin vermez, o zaman *.veri.js dosyalarındaki kopyalar kullanılır.
  IP.veriYukle = function () {
    function oku(dosya, yedek) {
      if (location.protocol === 'file:') return Promise.resolve(yedek);
      return fetch(dosya, { cache: 'no-store' })
        .then(function (y) { if (!y.ok) throw new Error('okunamadı'); return y.json(); })
        .catch(function () { return yedek; });
    }
    return Promise.all([oku('data/heroes.json', window.IP_VERI), oku('data/bulletins.json', window.IP_BULTEN)]).then(function (v) {
      IP.veri = v[0]; IP.bultenVeri = v[1];
      return IP.veri;
    });
  };

  IP.kahramanBul = function (id) {
    return IP.veri.kahramanlar.filter(function (k) { return k.id === id; })[0];
  };

  // Kahramanın içeriğinde doğrulanmamış bilgi var mı? Varsa ekranda "TASLAK" damgası görünür.
  IP.taslakMi = function (k) {
    if (!k || !k.altin_bilgiler) return true;
    return k.altin_bilgiler.some(function (b) { return !b.dogrulandi; });
  };

  IP.taslakDamga = function () {
    var d = IP.el('div', 'taslak-damga', 'TASLAK İÇERİK · doğrulanmadı');
    d.title = 'Bu bilgiler henüz iki güvenilir kaynakla doğrulanmadı.';
    return d;
  };

  // Metni daktilo gibi harf harf yazar. Dokununca hemen tamamlanır.
  IP.daktilo = function (hedef, metin, hiz) {
    hiz = hiz || 28;
    return new Promise(function (coz) {
      var i = 0, bitti = false;
      hedef.textContent = '';
      hedef.classList.add('yaziliyor');
      function tamamla() {
        if (bitti) return;
        bitti = true;
        clearInterval(zamanlayici);
        hedef.textContent = metin;
        hedef.classList.remove('yaziliyor');
        hedef.removeEventListener('click', tamamla);
        coz();
      }
      var zamanlayici = setInterval(function () {
        if (!hedef.isConnected) { tamamla(); return; }
        i++;
        hedef.textContent = metin.slice(0, i);
        if (i % 2 === 0 && metin[i - 1] !== ' ') IP.ses.cal('tus');
        if (i >= metin.length) tamamla();
      }, hiz);
      hedef.addEventListener('click', tamamla);
    });
  };

  // 🔊 Sesli okuma düğmesi.
  IP.okuDugmesi = function (metinAl) {
    var d = IP.el('button', 'dugme yuvarlak oku', '🔊');
    d.type = 'button';
    d.setAttribute('aria-label', 'Sesli oku');
    d.addEventListener('click', function () { IP.ses.oku(metinAl()); });
    return d;
  };

  /* ---------- Sahne yöneticisi ----------
     Her ekran (hikâye, oyun, röportaj...) bir "sahne"dir. Yeni sahneye geçerken
     eskisi kararır, temizlenir, yenisi kurulur. */
  var temizleyiciler = [];
  var sira = 0;

  IP.temizlikEkle = function (fn) { temizleyiciler.push(fn); };

  IP.sahneDegistir = function (kur) {
    var sahneEl = document.getElementById('sahne');
    var benimSiram = ++sira;
    sahneEl.classList.add('gizle');
    return IP.bekle(320).then(function () {
      if (benimSiram !== sira) return new Promise(function () {}); // araya başka sahne girdi
      temizleyiciler.splice(0).forEach(function (f) { try { f(); } catch (e) { console.error(e); } });
      IP.ses.sus();
      sahneEl.innerHTML = '';
      var ekran = IP.el('div', 'ekran');
      sahneEl.appendChild(ekran);
      var sonuc = kur(ekran);
      sahneEl.classList.remove('gizle');
      return sonuc;
    });
  };

  // Muhabir rütbeleri (yıldız sayısına göre).
  IP.RUTBELER = [
    { esik: 0, ad: 'Çırak Muhabir' },
    { esik: 8, ad: 'Muhabir' },
    { esik: 16, ad: 'Kıdemli Muhabir' },
    { esik: 24, ad: 'Başmuhabir' },
    { esik: 30, ad: 'Ajans Şefi' }
  ];
  IP.rutbe = function (yildiz) {
    var r = IP.RUTBELER[0];
    IP.RUTBELER.forEach(function (x) { if (yildiz >= x.esik) r = x; });
    return r.ad;
  };
})();
