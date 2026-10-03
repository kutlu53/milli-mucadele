/* Final: Zafer Nüshası.
   On sayfa tamamlanınca telgraftan son mesaj gelir, on manşet tek bir gazete sayfasında birleşir.
   Gazete tarayıcının yazdırma özelliğiyle yazdırılabilir. Gazetede "Muhabir: [oyuncunun adı]" imzası yer alır;
   ad yazılmadıysa anonim kod yazar ve ad için elle doldurulacak boş bir çizgi bırakılır.
   Ardından Büyük Bülten (son karışık tekrar) ve Nuri'nin vedası gelir. */
(function () {
  'use strict';
  var IP = window.IP;

  IP.final = {
    // 1. Telgraftan gelen son mesaj.
    telgraf: function (ekran) {
      return new Promise(function (coz) {
        var f = IP.veri.final || {};
        ekran.classList.add('prolog');
        var kutu = IP.el('div', 'altyazi kagit telgraf');
        var bas = IP.el('div', 'altyazi-bas');
        bas.appendChild(IP.el('strong', null, '• — •  TELGRAF  • — •'));
        var yazi = IP.el('p');
        var sira = IP.el('div', 'dugme-sira');
        sira.appendChild(IP.okuDugmesi(function () { return f.telgraf || ''; }));
        var devam = IP.dugme('Matbaayı çalıştır ▶', null, function () { coz(); });
        sira.appendChild(devam);
        kutu.appendChild(bas); kutu.appendChild(yazi); kutu.appendChild(sira);
        ekran.appendChild(kutu);
        IP.ses.cal('telgraf');
        IP.daktilo(yazi, f.telgraf || '', 45);
      });
    },

    // 2. Gazete sayfası: on kahramanın manşeti.
    gazete: function (ekran) {
      return new Promise(function (coz) {
        var f = IP.veri.final || {};
        ekran.classList.add('gazete-ekrani');
        var gazete = IP.el('div', 'zafer-gazete kagit');
        var bas = IP.el('div', 'gazete-ust');
        bas.appendChild(IP.el('div', 'gazete-nusha', f.nusha || ''));
        bas.appendChild(IP.el('h1', null, IP.buyukHarf(f.gazete_adi || '')));
        var kunye = IP.el('div', 'gazete-kunye');
        if (IP.kayit.veri.ad) kunye.appendChild(IP.el('span', null, 'Muhabir: ' + IP.kayit.veri.ad + ' (' + IP.kayit.kod + ')'));
        else { kunye.appendChild(IP.el('span', null, 'Muhabir: ' + IP.kayit.kod)); kunye.appendChild(IP.el('span', 'kunye-ad', 'Adın: ')); }
        kunye.appendChild(IP.el('span', null, '★ ' + IP.kayit.toplamYildiz() + ' · ' + IP.rutbe(IP.kayit.toplamYildiz())));
        bas.appendChild(kunye);
        gazete.appendChild(bas);
        if (IP.veri.kahramanlar.some(IP.taslakMi)) gazete.appendChild(IP.taslakDamga());
        var sutunlar = IP.el('div', 'gazete-sutunlar');
        IP.veri.kahramanlar.forEach(function (k) {
          var haber = IP.el('div', 'gazete-haber');
          var tuval;
          if (k.portre && k.portre.dosya) { tuval = IP.el('img'); tuval.src = k.portre.dosya; tuval.alt = k.ad; }
          else { tuval = IP.el('canvas'); IP.cizim.portre(tuval, k.portre ? k.portre.cizim : ''); }
          var yazi = IP.el('div');
          yazi.appendChild(IP.el('h3', null, k.ad));
          yazi.appendChild(IP.el('p', null, k.haber.sablon.replace(/\{(\d+)\}/g, function (m, i) { return k.haber.dogrular[+i]; })));
          haber.appendChild(tuval); haber.appendChild(yazi);
          sutunlar.appendChild(haber);
        });
        gazete.appendChild(sutunlar);
        var sira = IP.el('div', 'dugme-sira gazete-dugmeler');
        sira.appendChild(IP.dugme('🖨 Yazdır', 'ikincil', function () { window.print(); }));
        sira.appendChild(IP.dugme('Büyük Bülten\'e geç ▶', null, function () { coz(); }));
        ekran.appendChild(gazete); ekran.appendChild(sira);
        IP.ses.cal('damga');
        setTimeout(function () { IP.ses.cal('zafer'); IP.efekt.patlat(window.innerWidth / 2, window.innerHeight / 3, 90); }, 500);
      });
    },

    // 3. Kapanış: harita bütünüyle aydınlanır, Nuri veda eder.
    veda: function (ekran) {
      return new Promise(function (coz) {
        var f = IP.veri.final || {};
        ekran.classList.add('veda');
        var nuri = IP.nuriBalonu(f.veda || '');
        nuri.classList.add('belir');
        nuri.appendChild(IP.okuDugmesi(function () { return f.veda || ''; }));
        ekran.appendChild(nuri);
        ekran.appendChild(IP.dugme('Haritaya dön ▶', null, function () { coz(); }));
        IP.ses.cal('isik'); IP.ses.cal('zafer');
        IP.efekt.patlat(window.innerWidth / 2, window.innerHeight / 2, 120);
      });
    }
  };
})();
