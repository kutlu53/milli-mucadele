/* Haberi Yaz: Manşetteki boşluklara doğru kelimeler sürüklenir (ya da önce kelimeye,
   sonra boşluğa dokunulur). Yanlış kelime geri kayar ve defterde ilgili not sarı parlar:
   doğru cevap söylenmez, nerede bulunacağı gösterilir.
   Bu dosyada "Biliyor muydun?" bonus sorusu da bulunur. */
(function () {
  'use strict';
  var IP = window.IP;

  IP.haber = {
    goster: function (ekran, k) {
      return new Promise(function (coz) {
        var h = k.haber, yanlis = 0, dolu = 0, secili = null;
        ekran.classList.add('haber');

        var ust = IP.el('div', 'haber-ust');
        var gazete = IP.el('div', 'gazete kagit');
        var baslik = IP.el('div', 'gazete-baslik');
        baslik.appendChild(IP.el('span', 'gazete-ad', 'İSTİKLAL POSTASI'));
        baslik.appendChild(IP.el('span', 'gazete-alt', 'Muhabir: ' + IP.kayit.kod + ' · ' + k.konum.ad));
        gazete.appendChild(baslik);
        var manset = IP.el('h2', 'manset'), spot = IP.el('p', 'spot'), hedef = manset, bosluklar = [];
        h.sablon.split(/(\{\d+\})/).forEach(function (parca) {
          var m = /^\{(\d+)\}$/.exec(parca);
          if (m) {
            var b = IP.el('span', 'bosluk');
            b.dataset.i = m[1];
            b.addEventListener('click', function () { if (secili) dene(secili, b); });
            bosluklar.push(b); hedef.appendChild(b);
          } else if (hedef === manset && /[!.?]/.test(parca)) {
            // İlk cümle manşet, kalanı haber metni olur.
            var kes = parca.search(/[!.?]/) + 1;
            manset.appendChild(document.createTextNode(parca.slice(0, kes)));
            hedef = spot;
            spot.appendChild(document.createTextNode(parca.slice(kes)));
          } else hedef.appendChild(document.createTextNode(parca));
        });
        gazete.appendChild(manset); gazete.appendChild(spot);
        var damga = IP.el('div', 'basildi', 'BASILDI'); gazete.appendChild(damga);
        if (IP.taslakMi(k)) gazete.appendChild(IP.taslakDamga());
        var defter = IP.defter(k, true);
        ust.appendChild(gazete); ust.appendChild(defter.el);

        var alt = IP.el('div', 'haber-alt');
        var yonerge = IP.el('div', 'yonerge', 'Doğru kelimeleri boşluklara sürükle. İpucu defterinde!');
        var kelimeler = IP.el('div', 'kelimeler');
        IP.karistir(h.dogrular.concat(h.celdiriciler)).forEach(function (kelime) {
          var cip = IP.el('button', 'kelime', kelime);
          cip.type = 'button';
          suruklemeKur(cip);
          kelimeler.appendChild(cip);
        });
        var devam = IP.dugme('Devam ▶', null, function () { coz({ yanlis: yanlis }); });
        devam.style.display = 'none';
        alt.appendChild(yonerge); alt.appendChild(kelimeler); alt.appendChild(devam);
        ekran.appendChild(ust); ekran.appendChild(alt);

        function sec(cip) {
          if (secili) secili.classList.remove('secili');
          secili = secili === cip ? null : cip;
          if (secili) { secili.classList.add('secili'); IP.ses.cal('tik'); }
        }

        function dene(cip, bosluk) {
          if (bosluk.classList.contains('dolu')) return;
          var i = +bosluk.dataset.i;
          if (secili) { secili.classList.remove('secili'); secili = null; }
          if (cip.textContent === h.dogrular[i]) {
            bosluk.textContent = cip.textContent; bosluk.classList.add('dolu');
            cip.classList.add('yerlesti'); cip.disabled = true;
            IP.ses.cal('dogru'); IP.efekt.ogeden(bosluk, 18);
            dolu++;
            if (dolu === bosluklar.length) bitir();
          } else {
            yanlis++;
            IP.ses.cal('yanlis');
            bosluk.classList.remove('salla'); void bosluk.offsetWidth; bosluk.classList.add('salla');
            defter.parlat(h.ipucu_bilgi ? h.ipucu_bilgi[i] : i);
            yonerge.textContent = 'Olmadı. Defterinde sarı parlayan nota bak, cevap orada.';
          }
        }

        function bitir() {
          yonerge.textContent = yanlis === 0 ? 'Harika! Haberi ilk denemede doğru yazdın.' : 'Haber tamam! Matbaaya gidiyor.';
          kelimeler.classList.add('bitti');
          setTimeout(function () {
            damga.classList.add('vur'); IP.ses.cal('damga'); IP.efekt.ogeden(damga, 40);
            devam.style.display = '';
          }, 600);
        }

        function suruklemeKur(cip) {
          cip.addEventListener('pointerdown', function (e) {
            if (cip.disabled) return;
            e.preventDefault();
            try { cip.setPointerCapture(e.pointerId); } catch (hata) { /* bazı tarayıcılarda gerekmez */ }
            var bx = e.clientX, by = e.clientY, tasindi = false;
            function hareket(ev) {
              var dx = ev.clientX - bx, dy = ev.clientY - by;
              if (!tasindi && Math.hypot(dx, dy) > 8) { tasindi = true; cip.classList.add('suruklenen'); }
              if (tasindi) {
                cip.style.transform = 'translate(' + dx + 'px,' + dy + 'px) rotate(-3deg) scale(1.08)';
                var y = yakinBosluk(ev.clientX, ev.clientY);
                bosluklar.forEach(function (b) { b.classList.toggle('hedef', b === y); });
              }
            }
            function birak(ev) {
              cip.removeEventListener('pointermove', hareket);
              cip.removeEventListener('pointerup', birak);
              cip.removeEventListener('pointercancel', birak);
              bosluklar.forEach(function (b) { b.classList.remove('hedef'); });
              if (!tasindi) { sec(cip); return; }
              var b = ev.type === 'pointerup' ? yakinBosluk(ev.clientX, ev.clientY) : null;
              cip.classList.remove('suruklenen');
              cip.style.transform = '';
              if (b) dene(cip, b);
            }
            cip.addEventListener('pointermove', hareket);
            cip.addEventListener('pointerup', birak);
            cip.addEventListener('pointercancel', birak);
          });
        }

        // Parmağa en yakın boş kutuyu bulur (tam üstüne bırakmak zorunlu değil).
        function yakinBosluk(x, y) {
          var en = null, enUzak = 45;
          bosluklar.forEach(function (b) {
            if (b.classList.contains('dolu')) return;
            var k2 = b.getBoundingClientRect();
            var dx = Math.max(k2.left - x, 0, x - k2.right), dy = Math.max(k2.top - y, 0, y - k2.bottom);
            var u = Math.hypot(dx, dy);
            if (u < enUzak) { enUzak = u; en = b; }
          });
          return en;
        }
      });
    }
  };

  IP.bonus = {
    goster: function (ekran, k) {
      return new Promise(function (coz) {
        var bm = k.biliyor_muydun;
        if (!bm || !bm.bonus_soru) { coz({ dogru: false }); return; }
        var s = bm.bonus_soru, ilkDeneme = true, bitti = false;
        ekran.classList.add('bonus');
        var kart = IP.el('div', 'bonus-kart kagit');
        kart.appendChild(IP.el('h2', null, 'Biliyor muydun?'));
        var metin = IP.el('p', 'bonus-metin', bm.metin);
        kart.appendChild(metin);
        kart.appendChild(IP.okuDugmesi(function () { return bm.metin + ' ' + s.soru; }));
        if (bm.dogrulandi === false) kart.appendChild(IP.taslakDamga());
        var soru = IP.el('div', 'bonus-soru');
        soru.appendChild(IP.el('h3', null, '⭐ Bonus soru: ' + s.soru));
        var secenekler = IP.el('div', 'secenekler');
        var sonuc = IP.el('div', 'yonerge', 'İlk denemede bilirsen bir yıldız kazanırsın.');
        var devam = IP.dugme('Devam ▶', null, function () { coz({ dogru: ilkDeneme }); });
        devam.style.display = 'none';
        s.secenekler.forEach(function (sec, i) {
          var d = IP.dugme(sec, 'ikincil', function () {
            if (bitti) return;
            if (i === s.dogru) {
              bitti = true; d.classList.add('dogru'); IP.ses.cal('dogru'); IP.efekt.ogeden(d, 30);
              sonuc.textContent = ilkDeneme ? 'Doğru! Bonus yıldızı kazandın.' : 'Doğru! Şimdi buldun.';
              devam.style.display = '';
            } else {
              ilkDeneme = false; d.disabled = true; d.classList.add('yanlis'); IP.ses.cal('yanlis');
              sonuc.textContent = 'Olmadı. Yukarıdaki bilgiyi bir daha oku ve tekrar dene.';
              metin.classList.remove('parla'); void metin.offsetWidth; metin.classList.add('parla');
            }
          });
          secenekler.appendChild(d);
        });
        soru.appendChild(secenekler);
        ekran.appendChild(kart); ekran.appendChild(soru); ekran.appendChild(sonuc); ekran.appendChild(devam);
      });
    }
  };
})();
