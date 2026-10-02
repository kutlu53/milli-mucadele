/* Ajans Bülteni: Önceki kahramanları karışık soran hızlı tekrar.
   Sorular data/bulletins.json dosyasından gelir. Üç soru türü vardır:
   doğru/yanlış, boşluk doldurma ve eşleştirme.
   Doğru cevapta haritada ilgili kahramanın ışığı parlar; yanlış cevapta Kahraman Kartı 5 saniye açılır.
   Puan kaydedilir ama ilerlemeyi engellemez. */
(function () {
  'use strict';
  var IP = window.IP;
  var KART_SURESI = 5000; // yanlış cevapta kartın açık kaldığı süre (ms)

  IP.bulten = {
    liste: function () { return (IP.bultenVeri && IP.bultenVeri.bultenler) || []; },
    // Bir kahramandan hemen sonra gelen bülten (yoksa boş döner).
    sonraki: function (kahramanId) {
      return this.liste().filter(function (b) { return b.sonra === kahramanId; })[0];
    },

    // h3: 3 boyutlu harita (yoksa düz harita çizilir). Sonuç: { dogru, toplam, sure_sn }
    goster: function (ekran, b, h3) {
      return new Promise(function (coz) {
        var sorular = b.sorular, n = sorular.length, no = 0, dogru = 0, baslangic = Date.now();
        ekran.classList.add('bulten');

        var duz = null;
        if (!h3) {
          duz = IP.el('div', 'harita2b bulten-harita');
          var tv = IP.el('canvas'); tv.width = 1600; tv.height = 741;
          IP.cizim.haritaCiz(tv.getContext('2d'), 1600, 741, { deniz: true });
          duz.appendChild(tv); ekran.appendChild(duz);
        }

        var ust = IP.el('div', 'bulten-ust');
        ust.appendChild(IP.el('h2', null, '• — •  ' + IP.buyukHarf(b.ad) + '  • — •'));
        var noktalar = IP.el('div', 'bulten-noktalar');
        sorular.forEach(function () { noktalar.appendChild(IP.el('span')); });
        ust.appendChild(noktalar);
        var kart = IP.el('div', 'bulten-kart kagit');
        ekran.appendChild(ust); ekran.appendChild(kart);

        // Kahramanın haritadaki yeri (ekran pikseli).
        function konum(id) {
          if (h3) return h3.ekranKonumu(id);
          var k = IP.kahramanBul(id), r = duz.getBoundingClientRect();
          return { x: r.left + k.konum.harita_x * r.width, y: r.top + k.konum.harita_y * r.height };
        }

        // Doğru cevap: soru kartı kısa süre çekilir, haritada kahramanın ışığı parlar.
        function isikYak(idler) {
          kart.classList.add('saklan');
          idler.forEach(function (id, sira) {
            setTimeout(function () {
              if (!ekran.isConnected) return;
              var p = konum(id), isik = IP.el('div', 'bulten-isik');
              isik.style.left = p.x + 'px'; isik.style.top = p.y + 'px';
              isik.appendChild(IP.el('strong', null, IP.kahramanBul(id).ad));
              ekran.appendChild(isik);
              if (h3) h3.yak(id);
              IP.ses.cal('isik'); IP.efekt.patlat(p.x, p.y, 36, null, true);
              setTimeout(function () { isik.remove(); }, 1700);
            }, sira * 450);
          });
          return IP.bekle(1800 + (idler.length - 1) * 450).then(function () { kart.classList.remove('saklan'); });
        }

        // Yanlış cevap: ilgili Kahraman Kartı'nın bilgi yüzü 5 saniye açılır.
        function kartGoster(id) {
          var perde = IP.el('div', 'bulten-perde');
          var kk = IP.kahramanKarti(IP.kahramanBul(id));
          kk.classList.add('cevrik');
          var sayac = IP.el('div', 'bulten-sayac'); sayac.appendChild(IP.el('span'));
          perde.appendChild(IP.el('div', 'yonerge', 'Karta bak: doğru bilgi burada.'));
          perde.appendChild(kk); perde.appendChild(sayac);
          ekran.appendChild(perde);
          return IP.bekle(KART_SURESI).then(function () { perde.remove(); });
        }

        function soruBitti(dogruMu, idler, hataliId) {
          noktalar.children[no].className = dogruMu ? 'dogru' : 'yanlis';
          var sonra;
          if (dogruMu) { dogru++; IP.ses.cal('dogru'); sonra = IP.bekle(700).then(function () { return isikYak(idler); }); }
          else sonra = IP.bekle(1300).then(function () { return kartGoster(hataliId); });
          sonra.then(function () {
            if (!ekran.isConnected) return;
            no++;
            if (no >= n) sonucGoster(); else soruGoster();
          });
        }

        /* ----- Soru türleri ----- */
        function dogruYanlis(s) {
          kart.appendChild(IP.el('p', 'bulten-ifade', s.ifade));
          var sira = IP.el('div', 'secenekler'), bitti = false;
          [[true, '✔ Doğru'], [false, '✘ Yanlış']].forEach(function (c) {
            var d = IP.dugme(c[1], 'ikincil', function () {
              if (bitti) return;
              bitti = true;
              var bildi = c[0] === s.dogru;
              Array.prototype.forEach.call(sira.children, function (x) { x.disabled = true; });
              if (!bildi) { d.classList.add('yanlis'); IP.ses.cal('yanlis'); }
              dogruDugme.classList.add('dogru'); dogruDugme.disabled = false;
              if (s.aciklama) kart.appendChild(IP.el('p', 'bulten-aciklama', s.aciklama));
              soruBitti(bildi, [s.kahraman], s.kahraman);
            });
            sira.appendChild(d);
          });
          var dogruDugme = sira.children[s.dogru ? 0 : 1];
          kart.appendChild(sira);
          return s.ifade;
        }

        function boslukDoldur(s) {
          var parca = s.sablon.split('{0}');
          var cumle = IP.el('p', 'bulten-ifade');
          var bosluk = IP.el('span', 'bulten-bosluk', '?');
          cumle.appendChild(document.createTextNode(parca[0])); cumle.appendChild(bosluk); cumle.appendChild(document.createTextNode(parca[1] || ''));
          kart.appendChild(cumle);
          var sira = IP.el('div', 'secenekler'), bitti = false;
          IP.karistir([s.dogru].concat(s.celdiriciler)).forEach(function (sec) {
            var d = IP.dugme(sec, 'ikincil', function () {
              if (bitti) return;
              bitti = true;
              var bildi = sec === s.dogru;
              Array.prototype.forEach.call(sira.children, function (x) {
                x.disabled = x.textContent !== s.dogru;
                if (x.textContent === s.dogru) x.classList.add('dogru');
              });
              if (!bildi) { d.classList.add('yanlis'); IP.ses.cal('yanlis'); }
              bosluk.textContent = s.dogru; bosluk.classList.add('dolu');
              soruBitti(bildi, [s.kahraman], s.kahraman);
            });
            sira.appendChild(d);
          });
          kart.appendChild(sira);
          return s.sablon.replace('{0}', 'boşluk');
        }

        function eslestir(s) {
          kart.appendChild(IP.el('p', 'bulten-ifade', s.yonerge || 'Eşleştir.'));
          var izgara = IP.el('div', 'bulten-esles');
          var solKolon = IP.el('div', 'esles-kolon'), sagKolon = IP.el('div', 'esles-kolon');
          var secili = null, kalan = s.ciftler.length, hata = 0, ilkHata = null;
          var bilgi = IP.el('div', 'bulten-bilgi', 'Önce soldan bir kahraman seç, sonra sağdan ipucunu seç.');
          s.ciftler.forEach(function (c) {
            var d = IP.dugme(c.sol, 'ikincil', function () {
              if (d.classList.contains('dogru')) return;
              if (secili) secili.dugme.classList.remove('secili');
              secili = { cift: c, dugme: d }; d.classList.add('secili');
            });
            solKolon.appendChild(d);
          });
          IP.karistir(s.ciftler).forEach(function (c) {
            var d = IP.dugme(c.sag, 'ikincil', function () {
              if (d.classList.contains('dogru')) return;
              if (!secili) { bilgi.textContent = 'Önce soldan bir kahraman seç.'; return; }
              if (secili.cift.sag === c.sag) {
                secili.dugme.classList.remove('secili');
                secili.dugme.classList.add('dogru'); d.classList.add('dogru');
                secili = null; kalan--; IP.ses.cal('not');
                if (kalan === 0) soruBitti(hata === 0, s.ciftler.map(function (x) { return x.kahraman; }), ilkHata);
              } else {
                hata++; ilkHata = ilkHata || secili.cift.kahraman; IP.ses.cal('yanlis');
                bilgi.textContent = 'Bu ikisi eşleşmiyor. Bir daha dene.';
                [secili.dugme, d].forEach(function (x) { x.classList.remove('yanlis'); void x.offsetWidth; x.classList.add('yanlis'); });
              }
            });
            sagKolon.appendChild(d);
          });
          izgara.appendChild(solKolon); izgara.appendChild(sagKolon);
          kart.appendChild(izgara); kart.appendChild(bilgi);
          return s.yonerge || '';
        }

        function soruGoster() {
          var s = sorular[no], okunacak;
          kart.innerHTML = '';
          Array.prototype.forEach.call(noktalar.children, function (nk, i) { if (i === no) nk.className = 'aktif'; });
          var bas = IP.el('div', 'bulten-no');
          bas.appendChild(IP.el('span', null, 'Haber ' + (no + 1) + ' / ' + n));
          bas.appendChild(IP.okuDugmesi(function () { return okunacak; }));
          kart.appendChild(bas);
          okunacak = s.tur === 'dy' ? dogruYanlis(s) : (s.tur === 'bosluk' ? boslukDoldur(s) : eslestir(s));
          if (b.dogrulandi === false) kart.appendChild(IP.taslakDamga());
          kart.classList.remove('belir'); void kart.offsetWidth; kart.classList.add('belir');
          IP.ses.cal('sayfa');
        }

        function sonucGoster() {
          kart.innerHTML = '';
          kart.appendChild(IP.el('h2', null, 'Bülten yayında!'));
          kart.appendChild(IP.el('p', 'bulten-ifade', n + ' haberden ' + dogru + ' tanesini ilk seferde doğru kontrol ettin.'));
          var nuri = IP.nuriBalonu(dogru === n ? 'Tek hata yok! Bülten hemen telgrafla gidiyor.' : 'Bülten telgrafla gidiyor. Bu bülteni haritadan istediğin zaman yeniden açabilirsin.');
          nuri.classList.add('belir'); kart.appendChild(nuri);
          var sira = IP.el('div', 'dugme-sira');
          sira.appendChild(IP.dugme('Haritaya dön ▶', null, function () {
            coz({ dogru: dogru, toplam: n, sure_sn: Math.round((Date.now() - baslangic) / 1000) });
          }));
          kart.appendChild(sira);
          IP.ses.cal('zafer'); IP.efekt.patlat(window.innerWidth / 2, window.innerHeight / 2, 60);
        }

        // Giriş: Nuri bülteni ister.
        var nuri = IP.nuriBalonu(b.nuri || '');
        nuri.classList.add('belir'); kart.appendChild(nuri);
        kart.appendChild(IP.el('p', null, n + ' haber var. Her birini kontrol et. Yanlış cevabın cezası yok; doğru bilgiyi kahramanın kartında görürsün.'));
        var sira = IP.el('div', 'dugme-sira');
        sira.appendChild(IP.dugme('Bülteni aç ▶', null, soruGoster));
        kart.appendChild(sira);
        IP.ses.cal('telgraf');
      });
    }
  };
})();
