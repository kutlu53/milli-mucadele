/* Röportaj: Oyuncu soruları seçer, kahraman cevap verir. Cevaplar oyun sırasında
   üretilmez; önceden doğrulanıp heroes.json dosyasına yazılmış metinler gösterilir.
   Her cevaptan sonra ilgili Altın Bilgi, Muhabir Defteri'ne not olarak düşer. */
(function () {
  'use strict';
  var IP = window.IP;

  // Muhabir Defteri: Altın Bilgilerin not olarak durduğu sayfa. Haberi Yaz ekranı da bunu kullanır.
  IP.defter = function (k, hepsiAcik) {
    var kutu = IP.el('div', 'defter kagit');
    kutu.appendChild(IP.el('h3', null, 'Muhabir Defteri'));
    var liste = IP.el('ol', 'notlar');
    var satirlar = k.altin_bilgiler.map(function (b) {
      var li = IP.el('li', hepsiAcik ? 'yazildi' : 'bos');
      li.appendChild(IP.el('span', null, hepsiAcik ? b.metin : '…'));
      liste.appendChild(li);
      return li;
    });
    kutu.appendChild(liste);
    return {
      el: kutu,
      yazili: function (i) { return satirlar[i].classList.contains('yazildi'); },
      // i. notu deftere yazar.
      ekle: function (i) {
        if (this.yazili(i)) { this.parlat(i); return; }
        satirlar[i].className = 'yazildi yeni';
        satirlar[i].firstChild.textContent = k.altin_bilgiler[i].metin;
        IP.ses.cal('not');
      },
      // i. notu sarı ile parlatır (ipucu: cevap burada).
      parlat: function (i) {
        var li = satirlar[i];
        li.classList.remove('parla'); void li.offsetWidth; li.classList.add('parla');
      }
    };
  };

  IP.portreKutusu = function (k) {
    var kutu = IP.el('div', 'portre');
    var cerceve = IP.el('div', 'portre-cerceve');
    if (k.portre && k.portre.dosya) {
      var img = IP.el('img'); img.src = k.portre.dosya; img.alt = k.ad; cerceve.appendChild(img);
    } else {
      var tuval = IP.el('canvas'); IP.cizim.portre(tuval, k.portre ? k.portre.cizim : ''); cerceve.appendChild(tuval);
    }
    kutu.appendChild(cerceve);
    if (k.portre && k.portre.temsili) kutu.appendChild(IP.el('span', 'rozet temsili', 'temsilî çizim'));
    // Gerçek fotoğraf: ekip kaynağını doğrulayana kadar "doğrulanmadı" rozeti taşır.
    else if (k.portre && k.portre.fotograf && !k.portre.fotograf.dogrulandi) kutu.appendChild(IP.el('span', 'rozet temsili', 'fotoğraf · doğrulanmadı'));
    kutu.appendChild(IP.el('strong', 'portre-ad', k.ad));
    return kutu;
  };

  IP.roportaj = {
    goster: function (ekran, k) {
      return new Promise(function (coz) {
        var r = k.roportaj, hak = Math.min(r.secilecek || 3, r.sorular.length), mesgul = false;
        ekran.classList.add('roportaj');

        var ust = IP.el('div', 'rop-ust');
        var sol = IP.el('div', 'rop-sol');
        // Röportaj kahramanla değil de bir tanıkla yapılıyorsa onun portresi ve adı gösterilir.
        sol.appendChild(IP.portreKutusu(r.konusan ? { ad: r.konusan.ad, portre: { cizim: r.konusan.cizim, temsili: true } } : k));
        var konusma = IP.el('div', 'rop-konusma');
        var soruBalon = IP.el('div', 'balon soru'); soruBalon.style.visibility = 'hidden';
        var cevapBalon = IP.el('div', 'balon cevap kagit');
        var cevapYazi = IP.el('p', null, 'Bir soru seç, röportaj başlasın.');
        cevapBalon.appendChild(cevapYazi);
        cevapBalon.appendChild(IP.okuDugmesi(function () { return cevapYazi.textContent; }));
        konusma.appendChild(soruBalon); konusma.appendChild(cevapBalon);
        if (r.konusan_notu) konusma.appendChild(IP.el('div', 'rozet kurgusal', r.konusan_notu));
        sol.appendChild(konusma);
        var defter = IP.defter(k, false);
        ust.appendChild(sol); ust.appendChild(defter.el);
        if (IP.taslakMi(k)) ust.appendChild(IP.taslakDamga());

        var alt = IP.el('div', 'rop-alt');
        var bilgi = IP.el('div', 'rop-bilgi');
        var sorular = IP.el('div', 'rop-sorular');
        var devam = IP.dugme('Haberi yazmaya geç ▶', null, function () { coz(); });
        devam.style.display = 'none';
        function bilgiYaz() { bilgi.textContent = hak > 0 ? 'Kalan soru hakkın: ' + hak : 'Notların hazır!'; }
        bilgiYaz();

        r.sorular.forEach(function (s) {
          var d = IP.dugme(s.soru, 'ikincil soru-dugme', function () {
            if (mesgul || hak <= 0 || d.disabled) return;
            mesgul = true; hak--; d.disabled = true; d.classList.add('soruldu'); bilgiYaz();
            soruBalon.textContent = s.soru; soruBalon.style.visibility = 'visible';
            cevapBalon.classList.toggle('bekliyor', s.cevap === IP.YER_TUTUCU);
            IP.daktilo(cevapYazi, s.cevap, 24).then(function () {
              defter.ekle(s.altin_bilgi);
              mesgul = false;
              if (hak <= 0) bitir();
            });
          });
          sorular.appendChild(d);
        });

        // Soru hakkı bitince eksik kalan Altın Bilgileri Nuri deftere ekler.
        function bitir() {
          Array.prototype.forEach.call(sorular.children, function (d) { d.disabled = true; });
          var eksik = k.altin_bilgiler.map(function (b, i) { return i; }).filter(function (i) { return !defter.yazili(i); });
          var gecikme = 600;
          if (eksik.length) {
            var nuri = IP.nuriBalonu('Defterinde eksik kalan notu ben ekliyorum.');
            nuri.classList.add('belir'); alt.insertBefore(nuri, sorular);
            eksik.forEach(function (i, n) { setTimeout(function () { defter.ekle(i); }, 700 + n * 600); });
            gecikme = 900 + eksik.length * 600;
          }
          setTimeout(function () { devam.style.display = ''; IP.ses.cal('dogru'); }, gecikme);
        }

        alt.appendChild(bilgi); alt.appendChild(sorular); alt.appendChild(devam);
        ekran.appendChild(ust); ekran.appendChild(alt);
      });
    }
  };
})();
