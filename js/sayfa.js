/* Sayfa Canlanır: Kahramanın bölümü bitince solgun defter sayfası renklenir,
   yıldızlar verilir ve Kahraman Kartı kazanılır. Karta dokununca arkası (3 boyutlu dönüş) görünür. */
(function () {
  'use strict';
  var IP = window.IP;

  // Kahraman Kartı: ön yüzde portre, arka yüzde 3 Altın Bilgi ve kaynak.
  IP.kahramanKarti = function (k) {
    var kart = IP.el('div', 'kart');
    var ic = IP.el('div', 'kart-ic');
    var on = IP.el('div', 'kart-yuz kart-on');
    on.appendChild(IP.el('span', 'rozet alan ' + k.alan, k.alan_etiketi));
    on.appendChild(IP.portreKutusu(k));
    on.appendChild(IP.el('div', 'kart-konum', '📍 ' + k.konum.ad));
    on.appendChild(IP.el('div', 'kart-ipucu', 'Çevirmek için dokun ↻'));
    var arka = IP.el('div', 'kart-yuz kart-arka');
    arka.appendChild(IP.el('h4', null, k.ad));
    var ol = IP.el('ol');
    var kaynaklar = [];
    k.altin_bilgiler.forEach(function (b) {
      ol.appendChild(IP.el('li', null, b.metin));
      (b.kaynaklar || []).forEach(function (kod) { if (kaynaklar.indexOf(kod) < 0) kaynaklar.push(kod); });
    });
    arka.appendChild(ol);
    arka.appendChild(IP.el('div', 'kart-kaynak', 'Kaynak: ' + (kaynaklar.length ? kaynaklar.join(', ') : IP.YER_TUTUCU)));
    ic.appendChild(on); ic.appendChild(arka); kart.appendChild(ic);
    kart.addEventListener('click', function () { kart.classList.toggle('cevrik'); IP.ses.cal('sayfa'); });
    return kart;
  };

  IP.sayfa = {
    // sonuc: { yildizlar: [mini oyun, haber, bonus], haberMetni }
    goster: function (ekran, k, sonuc) {
      return new Promise(function (coz) {
        ekran.classList.add('sayfa-ekrani');
        var govde = IP.el('div', 'sayfa-govde');

        var sayfa = IP.el('div', 'defter-sayfasi kagit solgun');
        sayfa.appendChild(IP.el('div', 'sayfa-ust', 'Muhabir Defteri · ' + k.konum.ad));
        sayfa.appendChild(IP.el('h2', null, k.ad));
        if (k.baslik) sayfa.appendChild(IP.el('div', 'sayfa-baslik', '“' + k.baslik + '”'));
        sayfa.appendChild(IP.el('p', 'sayfa-haber', sonuc.haberMetni));
        if (k.duygu_ani) sayfa.appendChild(IP.el('p', 'sayfa-duygu', k.duygu_ani));
        var yildizlar = IP.el('div', 'yildizlar');
        var adlar = ['Mini oyun', 'Haber', 'Bonus'];
        var yildizEl = sonuc.yildizlar.map(function (v, i) {
          var y = IP.el('div', 'yildiz' + (v ? ' var' : ''));
          y.appendChild(IP.el('span', 'yildiz-sekil', '★'));
          y.appendChild(IP.el('span', 'yildiz-ad', adlar[i]));
          yildizlar.appendChild(y);
          return y;
        });
        sayfa.appendChild(yildizlar);
        if (IP.taslakMi(k)) sayfa.appendChild(IP.taslakDamga());

        var sag = IP.el('div', 'sayfa-sag');
        var kart = IP.kahramanKarti(k);
        kart.classList.add('gizli');
        var kazanildi = IP.el('div', 'yonerge', 'Kahraman Kartı kazandın!');
        kazanildi.style.visibility = 'hidden';
        sag.appendChild(kart); sag.appendChild(kazanildi);

        govde.appendChild(sayfa); govde.appendChild(sag);
        var devam = IP.dugme('Haritada ışığı yak ▶', null, function () { coz(); });
        devam.style.visibility = 'hidden';
        ekran.appendChild(govde); ekran.appendChild(devam);

        // Sırayla: sayfa renklenir → yıldızlar → kart
        setTimeout(function () { sayfa.classList.remove('solgun'); IP.ses.cal('isik'); }, 500);
        yildizEl.forEach(function (y, i) {
          setTimeout(function () {
            y.classList.add('goster');
            if (sonuc.yildizlar[i]) { IP.ses.cal('dogru'); IP.efekt.ogeden(y, 22, ['#ffd24a', '#fff3c4', '#e0a83a']); }
          }, 1900 + i * 550);
        });
        setTimeout(function () {
          kart.classList.remove('gizli'); kazanildi.style.visibility = 'visible';
          IP.ses.cal('zafer'); IP.efekt.ogeden(kart, 60);
        }, 3800);
        setTimeout(function () { devam.style.visibility = 'visible'; }, 4600);
      });
    }
  };
})();
