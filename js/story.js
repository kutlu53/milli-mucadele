/* Hikâye: Çizgi roman panellerini sırayla gösterir. Her panelde hareketli bir çizim,
   en fazla iki cümlelik metin ve sesli okuma düğmesi vardır. */
(function () {
  'use strict';
  var IP = window.IP;

  // Rehber Nuri'nin mavi konuşma balonu. Kurgusal olduğu her zaman rozetle belirtilir.
  IP.nuriBalonu = function (metin) {
    var kutu = IP.el('div', 'nuri-balon');
    var yuz = IP.el('canvas', 'nuri-yuz'); IP.cizim.nuri(yuz);
    var govde = IP.el('div', 'nuri-govde');
    var ust = IP.el('div', 'nuri-ust');
    ust.appendChild(IP.el('strong', null, IP.veri.rehber.ad));
    if (IP.veri.rehber.kurgusal) ust.appendChild(IP.el('span', 'rozet kurgusal', 'kurgusal karakter'));
    var yazi = IP.el('p', 'nuri-yazi', metin || '');
    govde.appendChild(ust); govde.appendChild(yazi);
    kutu.appendChild(yuz); kutu.appendChild(govde);
    kutu.yazi = yazi;
    return kutu;
  };

  IP.hikaye = {
    goster: function (ekran, k) {
      return new Promise(function (coz) {
        var paneller = k.paneller, no = -1, durdur = null;
        ekran.classList.add('hikaye');

        var cerceve = IP.el('div', 'panel-cerceve');
        var tuval = IP.el('canvas');
        var sayac = IP.el('div', 'panel-no');
        var anlati = IP.el('div', 'rozet anlati', 'halk anlatısı');
        cerceve.appendChild(tuval); cerceve.appendChild(sayac); cerceve.appendChild(anlati);
        if (IP.taslakMi(k)) cerceve.appendChild(IP.taslakDamga());

        var alt = IP.el('div', 'panel-alt');
        var kutu = IP.el('div', 'panel-metin kagit');
        var yazi = IP.el('p');
        kutu.appendChild(yazi);
        kutu.appendChild(IP.okuDugmesi(function () {
          var p = paneller[no]; return p.metin + (p.nuri ? ' ' + p.nuri : '');
        }));
        var nuri = IP.nuriBalonu('');
        alt.appendChild(kutu); alt.appendChild(nuri);

        var gez = IP.el('div', 'gezinti');
        var geri = IP.dugme('◀ Geri', 'ikincil', function () { git(no - 1); });
        var noktalar = IP.el('div', 'noktalar');
        paneller.forEach(function () { noktalar.appendChild(IP.el('span')); });
        var ileri = IP.dugme('İleri ▶', null, function () {
          if (no >= paneller.length - 1) { if (durdur) durdur(); coz(); } else git(no + 1);
        });
        gez.appendChild(geri); gez.appendChild(noktalar); gez.appendChild(ileri);

        ekran.appendChild(cerceve); ekran.appendChild(alt); ekran.appendChild(gez);
        IP.temizlikEkle(function () { if (durdur) durdur(); });

        function git(yeni) {
          if (yeni < 0 || yeni >= paneller.length) return;
          var ilk = no < 0;
          no = yeni;
          var p = paneller[no];
          cerceve.classList.add('cevir');
          IP.ses.sus();
          if (!ilk) IP.ses.cal('sayfa');
          setTimeout(function () {
            if (durdur) durdur();
            durdur = IP.cizim.oynat(tuval, p.gorsel);
            sayac.textContent = (no + 1) + ' / ' + paneller.length;
            anlati.style.display = p.anlati_mi ? '' : 'none';
            cerceve.classList.remove('cevir');
            IP.daktilo(yazi, p.metin, 22);
            nuri.style.display = p.nuri ? '' : 'none';
            nuri.yazi.textContent = p.nuri || '';
            nuri.classList.remove('belir'); void nuri.offsetWidth; if (p.nuri) nuri.classList.add('belir');
            Array.prototype.forEach.call(noktalar.children, function (n, i) { n.className = i === no ? 'aktif' : (i < no ? 'gecti' : ''); });
            geri.disabled = no === 0;
            ileri.textContent = no === paneller.length - 1 ? 'Hikâye bitti ▶' : 'İleri ▶';
          }, ilk ? 0 : 230);
        }
        git(0);
      });
    }
  };
})();
