# Kaynak Tarama Raporu

3 Ekim 2026 · Yapay zekâ destekli kaynak taraması

Bu rapor, oyundaki taslak bilgilerin internetteki güvenilir kaynaklarla karşılaştırılmasının sonucudur. Taramayı büyük dil modeli tabanlı bir yapay zekâ aracı yaptı; **bu rapor doğrulamanın kendisi değildir.** Proje kuralına göre bir bilgi ancak proje ekibi kaynağı kendi gözüyle okuduktan sonra doğrulanmış sayılır.

## Ekip bu raporu nasıl kullanır?

1. Her satırdaki kaynak bağlantısını aç, alıntıyı sayfada bul.
2. Alıntı sayfada aynen geçiyorsa kutuyu işaretle (`[x]`).
3. Bir bilginin iki bağımsız kaynağı da işaretlendiyse `data/heroes.json` içinde o bilginin `dogrulandi` alanını `true` yap.
4. Röportaj cevaplarını cümle cümle kaynakla karşılaştır; `dogrulayan` ve `dogrulama_tarihi` alanlarını doldur.
5. Kaç cümlenin kaynakla uyumlu, kaçının düzeltilmiş, kaçının uydurma çıktığını say (rapordaki "yapay zekâ doğruluk oranı" bulgusu için).

**Dikkat:** Bazı alıntılar sayfanın ham metninden, bazıları sayfayı özetleyen bir araç üzerinden alındı. Özellikle kurum sayfalarındaki alıntılar sayfada harfi harfine aranmalıdır. Künyesi eksik kaynaklar `data/kaynaklar.json` içinde not edilmiştir.

## Genel tablo

| Kahraman | Kaynak | İki kaynak | Tek kaynak | Çelişki | Bulunamadı |
|---|---|---|---|---|---|
| Sütçü İmam | 12 | 23 | 1 | 4 | 3 |
| Şahin Bey | 8 | 19 | 1 | 1 | 3 |
| Tayyar Rahmiye | 6 | 11 | 5 | 1 | 10 |
| Kara Fatma | 9 | 16 | 7 | 2 | 5 |
| Gördesli Makbule | 12 | 15 | 3 | 3 | 4 |
| Halime Çavuş | 8 | 9 | 8 | 2 | 9 |
| Şerife Bacı | 14 | 14 | 8 | 3 | 5 |
| Halide Edib Adıvar | 13 | 20 | 3 | 1 | 2 |
| Yunus Nadi | 13 | 15 | 2 | 6 | 0 |
| Mehmet Âkif Ersoy | 7 | 25 | 2 | 2 | 0 |

Sayılar taslaktaki (düzeltmeden önceki) cümlelerin parçalarına aittir. "Bulunamadı" ve "çelişki" çıkan cümleler oyunda düzeltildi; düzeltmeler aşağıda "Önerilen metin" satırlarında görülür.

---

## Sütçü İmam

12 kaynak okundu (2'si ATAM/TDV ansiklopedi maddesi + 2 TDV şehir maddesi, 4 hakemli makale, 3 valilik sayfası, 1 haber). Doğrulananlar: olayın tarihi (31 Ekim 1919), Fransız işgali, hamamdan çıkan kadınlara saldırı ve Sütçü İmam'ın karşı koyması, Maraş'ın 12 Şubat 1920'de halkın direnişiyle kurtulması, 'Kahraman' unvanı (TBMM, 7 Şubat 1973), Gazi (1921) ve Şanlı (1984). Çelişkiler: hamamın adı (Uzunoluk Hamamı / Çukur Hamamı), Fransızların şehri devralma günü (29-30 Ekim / 1 Kasım), Gazi unvanının günü (6 / 8 Şubat 1921), kalede bayrağın yeniden dalgalandığı tarih (TDV: 21 Şubat 1920) ve imamlık bilgisi (müezzinlik / fahri imamlık). Bulunamayanlar: 'Ahmet İmam' adı (kaynaklarda asıl adı 'İmam' ya da 'İmam Ali'), 'dükkânlar kapanıyor', 'pencerelerde ışıklar'. Ayrıca 'Kahraman' sorusu Sütçü İmam'ın ölümünden (1922) sonraki bir olayı (1973) sorduğu için yeniden düşünülmeli.

### Kaynaklar

- **K1** — Nejla Günay, Sütçü İmam (1871-1922), *Atatürk Araştırma Merkezi — Atatürk Ansiklopedisi* (ansiklopedi). <https://ataturkansiklopedisi.gov.tr/detay/311/S%C3%BCt%C3%A7%C3%BC-%C4%B0mam-(1871-1922)> — Birinci öncelikli kaynak (ATAM). Sayfa tarayıcıda sonradan yüklenen bir uygulama olduğu için WebFetch yalnızca başlığı gösterdi; madde metni sitenin kendi açık veri adresinden (apiko.ayk.gov.tr/v1/1/itemPublic/byId/311) okundu. Yazar S3 ile aynı kişi: S1 ve S3 birbirinden bağımsız sayılmadı.
- **K2** — Tufan Gündüz; Metin Tuncel; Hamza Gündoğdu, KAHRAMANMARAŞ, *TDV İslâm Ansiklopedisi (c. 24, 2001)* (ansiklopedi). <https://islamansiklopedisi.org.tr/kahramanmaras> — Güvenilir ansiklopedi maddesi. Olayı kısaca anlatır; olayın gününü vermez.
- **K3** — Nejla Günay, Milli Mücadelenin İlk Zaferi: Maraş Millî Mücadelesi ve Maraş’ın Kahramanlığı, *Türkiyat Mecmuası (İstanbul Üniversitesi), 29, Millî Mücadele Özel Sayısı, 2019, s. 47-74* (makale). <https://dergipark.org.tr/tr/download/article-file/901654> — Hakemli dergi makalesi, arşiv belgelerine dayanır. PDF indirildi ve metni okundu. Yazarı S1 ile aynı.
- **K4** — Veysel Özbey, Maraş Savunması Taşınmaz Kültürel Mirası, *Kahramanmaraş Sütçü İmam Üniversitesi Sosyal Bilimler Dergisi, 17 (Özel Sayı), 2020, s. 202-218* (makale). <https://dergipark.org.tr/tr/download/article-file/1031278> — Hakemli dergi makalesi (mimarlık/kültürel miras). Tarih bilgisini ikincil kaynaklardan (Eyicil, Ünalp, Özalp) aktarır. PDF metni okundu.
- **K5** — Erhan Alpaslan; Sadi Gedik, TBMM Tarafından Maraş’a İstiklal Madalyası Verilmesi ve Şair Mehmet Tâhir Nâdî Bey’in Madalya Kasidesi, *KSÜ Sosyal Bilimler Dergisi, 15 (1), 2018* (makale). <https://dergipark.org.tr/tr/download/article-file/473227> — Hakemli dergi makalesi. PDF metni okundu. S4 ile aynı dergide yayımlanmış ama farklı yazar ve farklı çalışma.
- **K6** — F. Rezzan Ünalp, Birinci Dünya Harbi Sonunda Maraş’ın İtilaf Devletlerince İşgali ve Maraş Savunması, *Gazi Akademik Bakış, 11 (22), Yaz 2018, s. 205-235* (makale). <https://dergipark.org.tr/tr/download/article-file/495856> — Hakemli dergi makalesi. PDF indirildi ve metni okundu. Sütçü İmam’ın adı ve mesleğiyle ilgili dipnotu yerel bir gazete yazısına dayanıyor (zayıf dayanak).
- **K7** — Vali Ömer Faruk Coşkun’un Maraş’a “Kahraman” Unvanı Verilişinin 48. Yıldönümü Mesajı, *Kahramanmaraş Valiliği* (kurumsal_web). <https://www.kahramanmaras.gov.tr/vali-omer-faruk-coskunun-marasa-kahraman-unvani-verilisinin-48-yildonumu-mesaji> — Resmî kurum sayfası (ikincil). Alıntı WebFetch özetinden alındı; kullanmadan önce sayfadan bir kez daha bakılmalı.
- **K8** — GAZİANTEP, *TDV İslâm Ansiklopedisi* (ansiklopedi). <https://islamansiklopedisi.org.tr/gaziantep> — Güvenilir ansiklopedi maddesi. Sayfa metni indirildi ve okundu.
- **K9** — Ahmet Nezihi Turan; Metin Tuncel; Ahmet Cihat Kürkçüoğlu, ŞANLIURFA, *TDV İslâm Ansiklopedisi* (ansiklopedi). <https://islamansiklopedisi.org.tr/sanliurfa> — Güvenilir ansiklopedi maddesi. Sayfa metni indirildi ve okundu.
- **K10** — Tarih (Gaziantep tarihi), *Gaziantep Valiliği* (kurumsal_web). <https://www.gaziantep.gov.tr/gaziantep-tarihi> — Resmî kurum sayfası (ikincil). Alıntı WebFetch özetinden alındı.
- **K11** — Urfa'ya “Şanlı” Unvanı Verilişinin 41'inci Yıl Dönümü, *Şanlıurfa Valiliği* (kurumsal_web). <https://www.sanliurfa.gov.tr/urfaya-sanli-unvani-verilisinin-41inci-yil-donumu> — Resmî kurum sayfası (ikincil). Alıntı WebFetch özetinden alındı.
- **K12** — Gazianteplilerin asrı aşan 'Gazilik' gururu, *Anadolu Ajansı* (haber). <https://www.aa.com.tr/tr/gundem/gazianteplilerin-asri-asan-gazilik-gururu/2496775> — Haber metni: zayıf kaynak, iki kaynak sayımına girmez. Yalnızca tarih farkını göstermek için kaydedildi.

### Bilgiler

**tarih_etiketi** — taslak: “31 Ekim 1919”

- [ ] **İKİ KAYNAK** — Uzunoluk (Sütçü İmam) Olayı 31 Ekim 1919'da oldu.
  - K1: “31 Ekim 1919 günü Fransızlardan cesaret alan Ermeniler ve Fransız ordusunda yer alan Ermeni askerler, Maraş sokaklarında devriye gezmeye başladılar.”
  - K5: “İşgalin üçüncü günü, yani 31 Ekim 1919’da Sütçü İmam Olayı meydana gelmiştir”
  - K6: “Fransızların Maraş’ı henüz yeni işgal ettikleri sırada, 31 Ekim 1919 günü”
  - K4: “1. Uzunoluk Hamamı : İlk Kuşun, 31 Ekim 1919”
  - Not: Okunan dört akademik kaynağın hepsi 31 Ekim 1919 diyor; olay için başka bir gün veren kaynağa rastlanmadı. S2 (TDV) olayın gününü vermiyor. Çelişki olayın tarihinde değil, Fransızların şehri devralma tarihinde: S2, S4 ve S6 '29 Ekim 1919'da girdiler, 30 Ekim'de teslim aldılar' derken S1/S3 (Günay) 'İngilizler 1 Kasım 1919’da Maraş’ı Fransızlara teslim ederek çekildiler' diyor. Oyunda Fransızların giriş günü yazılmıyorsa sorun yok.

**altin_bilgiler[0]** — taslak: “Maraş'ta Fransız işgaline karşı direnişi başlatan halk kahramanıdır.”

> Önerilen metin: Maraş'ta Fransız işgaline karşı direnişin ilk adımı sayılan Uzunoluk Olayı'nın kahramanıdır.

- [ ] **İKİ KAYNAK** — Maraş 1919 sonbaharında Fransız işgali altındaydı.
  - K2: “Maraş ve çevresi Fransa’ya devredilince 29 Ekim 1919’da Fransızlar Maraş’a girdiler.”
  - K6: “Fransızlar 29 Ekim 1919 günü Maraş’a girdiler ve 30 Ekim’de Maraş’ı İngilizlerden teslim aldılar.”
  - Not: Öncesinde İngiliz işgali var (S2: 'İngilizler 22 Şubat 1919’da şehri işgal ettiler').
- [ ] **İKİ KAYNAK** — Sütçü İmam Olayı, Maraş direnişinin başlangıcı / ilk adımı sayılır.
  - K1: “Sütçü İmam, Maraş Millî Mücadelesinin başlamasına sebep olan Uzunoluk Olayı’nın kahramanıdır.”
  - K6: “Maraşlıların mücadele bayrağını açmalarının ilk adımı olan Sütçü İmam olayından”
  - K4: “Maraş Savunması’nın ilk kurşununun önünde sıkıldığı Uzunoluk Hamamı”
  - Not: Kaynaklar 'direnişi başlattı' yerine 'başlamasına sebep olan olayın kahramanı', 'ilk adım', 'sembol isim' diyor. Örgütlü direnişi ise Kuvâ-yi Milliye ve Müdafaa-i Hukuk Cemiyeti kurdu (S1, S2). 'Direnişin kıvılcımını çakan' demek kaynaklara daha yakın.

**altin_bilgiler[1]** — taslak: “Uzunoluk Hamamı önünde Maraşlı kadınlara yapılan saldırıya karşı çıkması direnişin kıvılcımı oldu.”

- [ ] **İKİ KAYNAK** — Olay hamamdan çıkan kadın(lar)a işgal birliklerindeki askerlerin saldırmasıyla başladı.
  - K2: “Uzunoluk Hamamı’ndan çıkan kadınları Fransız askerlerinin tâciz etmesi halkın tepkisine yol açtı.”
  - K6: “Ermeni askerlerinden birisi hamamdan çıkan bir Türk kadınına saldırdı ve peçesini yırttı.”
  - K4: “Fransa güçlerinden sarhoş haldeki iki asker, Uzunoluk Hamamı’ndan çıkmakta olan Müslüman kadınları rahatsız etmiş”
  - Not: Saldıranlar için kaynaklar 'Fransız askerleri' (S2), 'Fransa güçlerinden iki asker' (S4), 'Fransız ordusundaki Ermeni askerler' (S1, S5, S6) diyor. Nesnel dil için oyunda 'işgal birliklerinden askerler' demek yeterli ve güvenli.
- [ ] **ÇELİŞKİ** — Olayın geçtiği hamam Uzunoluk Hamamı'dır.
  - K2: “Uzunoluk Hamamı’ndan çıkan kadınları Fransız askerlerinin tâciz etmesi”
  - K4: “Uzunoluk Hamamı’ndan çıkmakta olan Müslüman kadınları rahatsız etmiş”
  - K1: “Ermeni askerlerden biri Çukur Hamamı’ndan çıkan bir Müslüman kadına saldırarak”
  - K3: “Ermeni askerlerden biri Çukur Hamamı’ndan çıkan bir Müslüman kadına saldırarak”
  - Not: TDV ve Özbey 'Uzunoluk Hamamı' diyor; Günay (ATAM maddesi ve makalesi) aynı olayı 'Uzunoluk Olayı' başlığı altında anlatıp hamamın adını 'Çukur Hamamı' veriyor; Ünalp yalnızca 'hamamdan' diyor. Olayın Uzunoluk'ta geçtiği ve 'Uzunoluk Olayı' diye anıldığı konusunda çelişki yok. 'Uzunoluk Hamamı' iki bağımsız kaynakta geçtiği için kullanılabilir, ama çelişki kaynak tablosuna ve rapora not edilmeli. En güvenli ifade: 'Uzunoluk'ta, hamamdan çıkan kadınlara…'.
- [ ] **İKİ KAYNAK** — Sütçü İmam saldırıya karşı çıktı (kaynaklarda: tabancasıyla ateş etti, bir asker öldü).
  - K1: “Bu sırada olayı gören Sütçü İmam, Ermeni askerlerden birini öldürdü ve olay yerinden uzaklaşıp Bertiz’e gitti.”
  - K2: “Sütçü Hacı İmam işgalci askerlerden birini öldürdü.”
  - K6: “Sütçü İmam39* tabancasını Ermeni askerlerine doğru ateşleyerek bir Ermeni askeri öldürdü ve olay mahallinden uzaklaştı.”
  - Not: Oyundaki 'karşı çıktı' ifadesi kaynaklardaki olayın yumuşatılmış, sembolik biçimi (oyunun 'şiddet sembolik' kuralına uygun). Kaynaklara göre olayda önce araya giren Maraşlılardan Çakmakçı Sait vurulup şehit oldu, Sütçü İmam ondan sonra ateş etti (S1, S5, S6). Raporda bu sadeleştirme açıkça yazılmalı.
- [ ] **İKİ KAYNAK** — Bu olay direnişin kıvılcımı / sembolü oldu.
  - K1: “İmam Efendi ise, Sütçü İmam adıyla anılarak Maraş Millî Mücadelesi’nin sembol ismi hâline geldi.”
  - K5: “Sütçü İmam Olayı’ndan sonra Ermeniler ile Türkler arasındaki çatışmalar artmaya başlamıştı.”

**altin_bilgiler[2]** — taslak: “Halkın direnişi sonunda Maraş 12 Şubat 1920'de kurtuldu. Şehre bu yüzden "Kahraman" unvanı verildi.”

> Önerilen metin: Halkın direnişi sonunda Maraş 12 Şubat 1920'de kurtuldu. TBMM bu direniş nedeniyle 1973'te şehre "Kahraman" unvanını verdi.

- [ ] **İKİ KAYNAK** — Maraş halkın direnişi sonunda kurtuldu.
  - K2: “Kahramanmaraş 11-12 Şubat 1920’de halkın direnişi sonucu kurtuldu.”
  - K3: “Maraş halkı, bir bütün olarak mücadeleye katılmış ve savaşın sonuna kadar kader birliği edip hiçbir fedakârlıktan çekinmemiştir.”
- [ ] **İKİ KAYNAK** — Kurtuluş tarihi 12 Şubat 1920'dir.
  - K2: “Kahramanmaraş 11-12 Şubat 1920’de halkın direnişi sonucu kurtuldu.”
  - K5: “12 Şubat 1920 günü şehrin düşmandan temizlenmiş olması ve zafere ulaşılması nedeniyle bayram yapılır.”
  - K3: “11 Şubat 1920 gecesi Ermenilere haber dahi vermeden Maraş’ı terk ettiler.”
  - Not: Küçük ayrıntı farkı: Fransız birlikleri 11 Şubat'ı 12 Şubat'a bağlayan gece çekildi (S3, S5: '11/12 Şubat 1920 gecesi'); kurtuluş günü olarak 12 Şubat kutlanıyor. '12 Şubat 1920' kullanılabilir.
- [ ] **İKİ KAYNAK** — Şehre direnişi nedeniyle "Kahraman" unvanı verildi.
  - K2: “Bu ad 7 Şubat 1973’te, Türkiye Büyük Millet Meclisi tarafından Millî Mücadele dönemindeki üstün direnişinden dolayı “kahraman” unvanı verilerek Kahramanmaraş şekline dönüştürüldü.”
  - K3: “Türkiye Büyük Millet Meclisi şehre 5 Nisan 1925 tarihinde kırmızı şeritli İstiklâl Madalyası; 7 Şubat 1973 tarihinde de “Kahraman” unvanını vermiştir.”
  - K7: “7 Şubat 1973 tarihinde ise Meclis kararı ile "Kahraman" unvanı verilmiştir.”
  - Not: Veriliş tarihi 7 Şubat 1973, veren kurum TBMM (S3'e göre 1657 numaralı karar/kanun; Resmî Gazete 12 Şubat 1973, sayı 14446). Cümle 'hemen ardından verildi' gibi okunabiliyor; oysa unvan kurtuluştan 53 yıl sonra verildi. Yılı eklemek yanlış anlamayı önler.

**paneller[0]** — taslak: “Maraş çarşısı. Ahmet İmam sütünü dağıtıyor. (Nuri: Herkes ona Sütçü İmam der.)”

> Önerilen metin: Maraş, Uzunoluk. İmam Efendi küçük dükkânında süt satıyor.

- [ ] **BULUNAMADI** — Asıl adı "Ahmet İmam"dır.
  - K1: “Gerçek adı İmam’dır. Bektutiye (Fevzi Paşa) mahallesindendir.”
  - K6: “Sütçü İmam, asıl adı İmam Ali (d. 1871-ö 25 Kasım 1922) süt satarak geçimini sağladığı için “Sütçü” lakabı verilmiştir.”
  - K2: “Sütçü Hacı İmam işgalci askerlerden birini öldürdü.”
  - Not: Okunan hiçbir kaynakta 'Ahmet' adı geçmiyor. ATAM maddesi (torunu ve akrabasıyla görüşmeye de dayanıyor) 'Gerçek adı İmam’dır' diyor; Ünalp dipnotta 'İmam Ali' diyor (dayanağı yerel gazete yazısı); TDV 'Sütçü Hacı İmam' diye anıyor. 'Ahmet İmam' oyundan çıkarılmalı.
- [ ] **İKİ KAYNAK** — Geçimini süt satarak sağlıyordu.
  - K1: “Uzunoluk Caddesindeki mütevazı dükkânında köylerden topladığı sütü satarak geçimini sağlayan”
  - K6: “süt satarak geçimini sağladığı için “Sütçü” lakabı verilmiştir.”
  - K4: “Kel Hacı’nın kahvesi, Sütçü İmam’ın süt sattığı dükkân ve yapının çevresindeki diğer yapı grupları yok olmuştur.”
  - Not: Kaynaklar sütü 'dağıttığını' değil, Uzunoluk'taki dükkânında 'sattığını' söylüyor. Görsel de dükkân olarak düşünülebilir.
- [ ] **İKİ KAYNAK** — Halk onu "Sütçü İmam" diye anardı.
  - K1: “İmam Efendi ise, Sütçü İmam adıyla anılarak Maraş Millî Mücadelesi’nin sembol ismi hâline geldi.”
  - K6: “süt satarak geçimini sağladığı için “Sütçü” lakabı verilmiştir.”

**paneller[1]** — taslak: “İşgal askerleri sokaklarda. Halk tedirgin, dükkânlar kapanıyor.”

> Önerilen metin: İşgal askerleri sokaklarda devriye geziyor. Halk tedirgin.

- [ ] **İKİ KAYNAK** — İşgal birliklerinin askerleri sokaklarda dolaşıyordu.
  - K1: “Fransız ordusunda yer alan Ermeni askerler, Maraş sokaklarında devriye gezmeye başladılar.”
  - K6: “Fransızlardan cesaret alan Ermeniler Maraş sokaklarına dağıldılar, önlerine gelen Türklere hakaret etmeye başladılar.”
- [ ] **TEK KAYNAK** — Halk tedirgindi.
  - K1: “Bu, Müslüman halkı çok tedirgin etti.”
  - Not: S1 ve S3 aynı yazarın olduğu için tek kaynak sayıldı. S2 de 'halkın tepkisine yol açtı' diyor (benzer anlam).
- [ ] **BULUNAMADI** — Dükkânlar kapanıyordu.
  - Not: Okunan kaynaklarda dükkânların kapandığına dair bilgi yok. Çıkarılması önerilir.

**paneller[2]** — taslak: “Uzunoluk Hamamı önünde kadınlara saldırılır. Sütçü İmam buna karşı çıkar.”

> Önerilen metin: Uzunoluk'ta hamamdan çıkan kadınlara saldırılır. Sütçü İmam buna karşı çıkar.

- [ ] **ÇELİŞKİ** — Hamamdan çıkan kadınlara saldırıldı (yer: Uzunoluk Hamamı).
  - K2: “Uzunoluk Hamamı’ndan çıkan kadınları Fransız askerlerinin tâciz etmesi halkın tepkisine yol açtı.”
  - K4: “Uzunoluk Hamamı’ndan çıkmakta olan Müslüman kadınları rahatsız etmiş”
  - K1: “Ermeni askerlerden biri Çukur Hamamı’ndan çıkan bir Müslüman kadına saldırarak”
  - Not: Olay iki kaynaklı; yalnızca hamamın adı çelişkili (bkz. altin_bilgiler[1]). Kaynaklarda kadınların hamamın 'önünde' değil hamamdan 'çıkarken' saldırıya uğradığı yazıyor.
- [ ] **İKİ KAYNAK** — Sütçü İmam buna karşı çıktı.
  - K2: “Sütçü Hacı İmam işgalci askerlerden birini öldürdü.”
  - K6: “tabancasını Ermeni askerlerine doğru ateşleyerek bir Ermeni askeri öldürdü ve olay mahallinden uzaklaştı.”
  - Not: Sembolik anlatım (bkz. altin_bilgiler[1]).

**paneller[3]** — taslak: “Haber mahalleden mahalleye yayılır. Pencerelerde ışıklar yanar.”

> Önerilen metin: Haber şehre yayılır. Maraşlılar mahalle mahalle örgütlenmeye başlar.

- [ ] **İKİ KAYNAK** — Olaydan sonra şehirde gerginlik arttı ve halk mahalle mahalle örgütlendi.
  - K2: “Şehirdeki direnişi örgütlemek amacıyla 29 Kasım 1919’da Maraş Müdâfaa-i Hukuk Cemiyeti kuruldu.”
  - K6: “iki ay gibi kısa bir süre içinde yurtlarını savunmak için Maraşlılar başarılı bir şekilde teşkilatlanmışlardı.”
  - K1: “Mustafa Kemal Paşa, Maraş halkını örgütlemek üzere Kılıç Ali’yi yanına subaylar vermek suretiyle bölgeye gönderdi”
  - Not: Halkın örgütlenmesi doğrulandı. S6'daki alıntı sayfa sonu nedeniyle iki sayfaya bölünmüş bir cümlenin birleştirilmiş hâlidir.
- [ ] **BULUNAMADI** — Haber mahalleden mahalleye yayıldı; pencerelerde ışıklar yandı.
  - Not: Bu, kaynaklarda geçen bir olay değil; oyunun sembolik anlatımı ('direniş ışığı'). Tarihî bilgi gibi sunulmamalı; panelde kurgu/sembol olduğu belli olmalı ya da cümle örgütlenme bilgisine çevrilmeli.

**paneller[4]** — taslak: “12 Şubat 1920 sabahı Maraş kurtulmuştur. Kalede bayrak dalgalanır.”

> Önerilen metin: 12 Şubat 1920: Maraş kurtulmuştur. Kalede yine Türk bayrağı dalgalanacaktır.

- [ ] **İKİ KAYNAK** — 12 Şubat 1920'de Maraş kurtulmuştu.
  - K2: “Kahramanmaraş 11-12 Şubat 1920’de halkın direnişi sonucu kurtuldu.”
  - K5: “12 Şubat 1920 günü şehrin düşmandan temizlenmiş olması ve zafere ulaşılması nedeniyle bayram yapılır.”
- [ ] **ÇELİŞKİ** — 12 Şubat 1920 sabahı kalede Türk bayrağı dalgalanıyordu.
  - K2: “Maraş halkı harekete geçerek şehri düşmandan temizlemiş ve 21 Şubat 1920 tarihinde kalede yeniden Türk bayrağı dalgalanmıştır.”
  - K3: “ahali, kalede Fransız bayrağının asılı olduğunu görünce buna çok büyük tepki gösterip kaleye doğru tırmandı”
  - Not: TDV'nin mimari bölümü bayrağın kalede yeniden dalgalanması için '21 Şubat 1920' tarihini veriyor (12 Şubat değil). S3 ve S4 ise ünlü 'Bayrak Olayı'nı 28 Kasım 1919'a tarihliyor: halk o gün kaleye çıkıp Türk bayrağını yeniden çekti. 12 Şubat sabahı kalede bayrak olduğunu açıkça söyleyen kaynak bulunamadı. Görsel kalabilir ama cümlede tarih ile bayrak aynı ana bağlanmamalı.

**biliyor_muydun** — taslak: “Kahramanmaraş "Kahraman", Gaziantep "Gazi", Şanlıurfa "Şanlı" unvanlarını Millî Mücadele'deki direnişleri nedeniyle aldı.”

- [ ] **İKİ KAYNAK** — Maraş'a "Kahraman" unvanı Millî Mücadele'deki direnişi nedeniyle verildi (TBMM, 7 Şubat 1973).
  - K2: “7 Şubat 1973’te, Türkiye Büyük Millet Meclisi tarafından Millî Mücadele dönemindeki üstün direnişinden dolayı “kahraman” unvanı verilerek”
  - K3: “TBMM 7 Şubat 1973 tarihinde aldığı 1657 numaralı kararla şehrin adını “Kahramanmaraş” olarak değiştirdi.”
- [ ] **İKİ KAYNAK** — Antep'e "Gazi" unvanı direnişi nedeniyle TBMM tarafından 1921'de verildi.
  - K8: “Türkiye Büyük Millet Meclisi, kendi gücüyle işgale on ay dayanan ve düşmana geçit vermeyen Antep’e 6 Şubat 1921’de gazilik unvanı verdi.”
  - K10: “8 Şubat 1921 tarihinde 93 Sayılı Kanun ile Büyük Millet Meclisi ilimize 'GAZİLİK' unvanı vermiş, Ayıntab adı Gaziayıntab olmuştur.”
  - Not: Yıl (1921) ve kurum (TBMM) iki kaynaklı. Gün çelişkili: TDV '6 Şubat 1921', Gaziantep Valiliği ve AA haberi (S12) '8 Şubat 1921' diyor (biri kanunun kabul, diğeri yayım/kutlama günü olabilir; bu açıklama okunan kaynaklarda doğrulanmadı). Oyunda yalnızca yıl kullanılmalı: '1921'.
- [ ] **İKİ KAYNAK** — Urfa'ya "Şanlı" unvanı Millî Mücadele'deki rolü nedeniyle TBMM tarafından 1984'te verildi.
  - K9: “1984 yılında, Millî Mücadele dönemindeki önemine işaret etmek üzere Türkiye Büyük Millet Meclisi kararıyla şehre Şanlıurfa adı verilmiştir.”
  - K11: “12 Haziran 1984'te kabul edilirken, ilin adının Şanlıurfa olarak değiştirilmesi hakkındaki 3020 sayılı kanun, 22 Haziran 1984 tarih ve 18439 sayılı Resmi Gazete'de yayımlanarak yürürlüğe girdi.”
- [ ] **İKİ KAYNAK** — Bonus soru: "Gazi" unvanı Antep'e verildi.
  - K8: “Böylece şehir Gaziantep adıyla anılmaya başlandı.”
  - Not: Doğru seçenek (Antep) doğru.

**haber** — taslak: “Maraş halkı boyun eğmedi! Uzunoluk Hamamı önünde başlayan direnişin sonunda şehir 12 Şubat 1920 tarihinde kurtuldu.”

- [ ] **İKİ KAYNAK** — Doğru cevap 1: Maraş
  - K2: “29 Ekim 1919’da Fransızlar Maraş’a girdiler.”
- [ ] **ÇELİŞKİ** — Doğru cevap 2: Uzunoluk Hamamı
  - K4: “Maraş Savunması’nın ilk kurşununun önünde sıkıldığı Uzunoluk Hamamı”
  - K1: “Ermeni askerlerden biri Çukur Hamamı’ndan çıkan bir Müslüman kadına saldırarak”
  - Not: İki bağımsız kaynak (TDV, Özbey) 'Uzunoluk Hamamı' diyor; Günay 'Çukur Hamamı' diyor. Boşluk kelimesi olarak kullanılabilir ama çelişki rapora yazılmalı. Daha güvenli seçenek: boşluğu yalnızca 'Uzunoluk' yapıp şablonu "{1}'ta başlayan direnişin…" biçimine çevirmek.
- [ ] **İKİ KAYNAK** — Doğru cevap 3: 12 Şubat 1920
  - K5: “12 Şubat 1920 günü şehrin düşmandan temizlenmiş olması ve zafere ulaşılması nedeniyle bayram yapılır.”

**mini_oyun.kazanim** — taslak: “Direniş tek bir kişinin değil, birleşen halkın eseridir.”

- [ ] **İKİ KAYNAK** — Maraş'ın kurtuluşu bütün halkın katıldığı bir mücadeleydi.
  - K3: “Maraş’ın istiklal mücadelesi bir ordunun savaşı değil, kendilerine yol gösteren askerlerin önderliğinde bir şehrin halkının ölüm kalım mücadelesidir.”
  - K2: “Kahramanmaraş 11-12 Şubat 1920’de halkın direnişi sonucu kurtuldu.”
  - Not: Oyundaki 9 mahalle ve 'haberci' kurgudur; mahalle adları kullanılacaksa ayrıca doğrulanmalı (S3'te mahalle heyetleri listesi var).

**duygu_ani** — taslak: “Sıradan bir sütçünün tek bir cesaret anı bir şehri ayağa kaldırır.”

- [ ] **İKİ KAYNAK** — Sütçü İmam geçimini süt satarak sağlayan sıradan bir Maraşlıydı.
  - K1: “Uzunoluk Caddesindeki mütevazı dükkânında köylerden topladığı sütü satarak geçimini sağlayan”

### Röportaj taslakları

- [ ] **Size neden "Sütçü İmam" deniyor?**
  - Taslak: Benim asıl adım İmam. Uzunoluk'taki küçük dükkânımda köylerden topladığım sütü satarak geçinirim. Bu yüzden herkes bana "Sütçü İmam" der.
  - 1. cümle: K1 (K6 'İmam Ali' diyor: çelişki, bkz. ek)
  - 2. cümle: K1
  - 3. cümle: K6, K1
- [ ] **O gün Uzunoluk'ta ne oldu?**
  - Taslak: 31 Ekim 1919'du. İşgal birliklerinden askerler hamamdan çıkan kadınlara saldırdı. Ben buna karşı çıktım, sonra şehirden ayrılıp Bertiz'e gittim.
  - 1. cümle: K1, K5, K6
  - 2. cümle: K2, K4, K6
  - 3. cümle: K1, K6 ('karşı çıktım' sembolik sadeleştirme; kaynaklarda bir askeri vurduğu yazıyor)
- [ ] **Maraş halkı nasıl birleşti?**
  - Taslak: Şehirde direnişi örgütlemek için Maraş Müdafaa-i Hukuk Cemiyeti kuruldu. Mustafa Kemal Paşa da halkı örgütlemek için Kılıç Ali'yi bölgeye gönderdi. Maraşlılar bir bütün olarak mücadeleye katıldı.
  - 1. cümle: K2
  - 2. cümle: K1 (K2 ve K6 da doğruluyor)
  - 3. cümle: K3
- [ ] **Şehrin adına "Kahraman" neden eklendi?**
  - Taslak: Maraş halkı bir bütün olarak mücadeleye katıldı ve şehrini kendi direnişiyle kurtardı. "Kahraman" unvanı bu direniş için verildi.
  - 1. cümle: K3, K2
  - 2. cümle: K2, K3

### Ek bulgular

- **1_uzunoluk_olayinin_tarihi:** Okunan dört akademik kaynak (S1/S3 Günay, S4 Özbey, S5 Alpaslan-Gedik, S6 Ünalp) olayı 31 Ekim 1919'a tarihliyor; farklı bir gün veren kaynağa rastlanmadı. TDV (S2) olayı anlatıyor ama gün vermiyor. '31 Ekim 1919' iki bağımsız kaynakla doğrulandı sayılabilir. Çelişkili olan, Fransızların şehri devralma tarihi: S2/S4/S6 '29 Ekim'de girdiler, 30 Ekim'de teslim aldılar', Günay (S1/S3) 'İngilizler 1 Kasım 1919’da Maraş’ı Fransızlara teslim ederek çekildiler'. İkinci çelişki hamamın adı: TDV ve Özbey 'Uzunoluk Hamamı', Günay 'Çukur Hamamı', Ünalp yalnızca 'hamam'. Olayın adı bütün kaynaklarda 'Uzunoluk Olayı / Sütçü İmam Olayı'.
- **2_kahraman_unvani:** Veren kurum: Türkiye Büyük Millet Meclisi. Tarih: 7 Şubat 1973 (S2 TDV, S3 Günay, S7 Valilik: üçü de aynı gün). S3'e göre 1657 numaralı karar/kanun; Resmî Gazete 12 Şubat 1973, sayı 14446 (Resmî Gazete'nin kendisi açılıp okunmadı). Ayrıca TBMM şehre 5 Nisan 1925'te İstiklal Madalyası verdi (S2, S3, S5). S3'e göre 'Kahraman' unvanı için ilk kanun taslağı 1923'te hazırlanmış ama kabul edilmemiş. Oyun için: 'TBMM, 1973'te şehre Kahraman unvanını verdi.'
- **3_gazi_ve_sanli_unvanlari:** Gazi (Antep): yıl 1921, veren TBMM, 93 sayılı kanun. Gün çelişkili: TDV (S8) '6 Şubat 1921', Gaziantep Valiliği (S10) ve AA haberi (S12) '8 Şubat 1921'. Oyunda yalnızca '1921' yazılması önerilir. Şanlı (Urfa): 1984, TBMM (S9 TDV: '1984 yılında'; S11 Valilik: 12 Haziran 1984'te kabul, 3020 sayılı kanun, 22 Haziran 1984'te Resmî Gazete). Özet: Gazi 1921, Kahraman 1973, Şanlı 1984; üçü de TBMM tarafından ve Millî Mücadele'deki direniş gerekçesiyle. Önerilen 'biliyor muydun' eki: 'TBMM Antep'e 1921'de "Gazi", Maraş'a 1973'te "Kahraman", Urfa'ya 1984'te "Şanlı" unvanını verdi.'
- **4_ad_ve_meslek:** 'Ahmet İmam' adı okunan hiçbir kaynakta geçmiyor; oyundan çıkarılmalı. Kaynaklardaki biçimler: S1 (ATAM): 'Gerçek adı İmam’dır', babası Kireçcizâde Ömer Efendi, annesi Emine Hanım, çocuklarına 1934'te 'Türkkorur' soyadı verilmiş; madde başlığı 'Sütçü İmam (1871-1922)'. S6 (Ünalp, dipnot): 'asıl adı İmam Ali (d. 1871-ö 25 Kasım 1922)'. S2 (TDV): 'Sütçü Hacı İmam'. Sütçülük: S1 ve S6 uyumlu (Uzunoluk'taki dükkânında süt satarak geçinirdi; S4 de 'süt sattığı dükkân' diyor). İmamlık: çelişkili. S1: 'Bektutiye Camii’nde zaman zaman Kur’an okuyup müezzinlik yaptığı için' (yani görevli imam değil; 'İmam' onun adı). S6: 'fahri olarak bugünkü Çınarlı (eski Bektutiye) Camiinde imamlık yapan din adamı'. Güvenli ifade: 'Asıl adı İmam'dı; süt sattığı için Sütçü İmam diye anıldı.' 'Camide imamdı' denmemeli. Ölümü: 25 Kasım 1922, kalede top atışı sırasındaki kazada (S1, S4, S6).
- **5_roportaj_uyarilari:** (a) 'Şehrin adına Kahraman neden eklendi?' sorusu zaman bakımından sorunlu: unvan 1973'te verildi, Sütçü İmam 1922'de öldü; İstiklal Madalyası bile (1925) ölümünden sonra. Bu yüzden taslak cevaba yıl konmadı. Yıl bilgisini Nuri'nin ya da defter notunun vermesi, sorunun da 'Maraş halkı şehri nasıl kurtardı?' gibi değiştirilmesi önerilir. (b) Uzunoluk cevabındaki 'karşı çıktım' sembolik bir sadeleştirme; kaynaklarda Sütçü İmam'ın bir askeri vurduğu, ondan önce araya giren Çakmakçı Sait'in vurulup şehit olduğu yazıyor. (c) Saldıranlar için kaynaklar farklı adlandırma kullanıyor (Fransız askerleri / Fransız ordusundaki Ermeni askerler); nesnel dil için 'işgal birliklerinden askerler' kullanıldı.
- **6_yontem_notu:** S1 (Atatürk Ansiklopedisi) sayfası WebFetch ile açıldığında yalnızca başlık geldi; madde metni sitenin kendi açık veri adresinden indirilerek okundu. DergiPark PDF'leri WebFetch ile indirildi, metinleri bilgisayarda çıkarılıp okundu. S7, S10, S11 alıntıları WebFetch özetinden geldi; kullanılmadan önce sayfadan bir kez daha karşılaştırılmalı. Açılamayan ve kaynak sayılmayan sayfalar: Kahramanmaraş Büyükşehir Belediyesi 'Sütçü İmam Olayı' sayfası, KSÜ biyografi sayfası.

---

## Şahin Bey

8 kaynak okundu (1 ansiklopedi, 4 hakemli makale, 2 valilik sayfası, 1 haber). Gerçek adı (Mehmet Sait / Mehmed Said — yalnızca yazım farkı), Kilis yolu Kuvâ-yı Milliye komutanlığı, köylerden adam toplaması, Elmalı Köprüsü ve 28 Mart 1920 şehit tarihi, Gazi unvanının 1921'de TBMM'ce verilmesi ve Gaziantep adının buradan gelmesi iki bağımsız kaynakla doğrulandı. Çelişkiler: savunmanın süresi (on ay / 10 ay 9 gün / yaklaşık 11 ay) ve Gazi unvanının günü (6 Şubat / 8 Şubat 1921); oyundaki 'aylarca' ve '1921' ifadeleri ikisiyle de uyumlu. Bulunamayan: 'şehir hazırlanmak için zaman kazandı' düşüncesi hiçbir kaynakta yok (kaynaklar 'Antep'teki Fransız birliklerine yardımı engelledi' diyor); 'gönüllü' sözcüğü de birebir geçmiyor. Kilis'ten gelen büyük Fransız birliği (26 Mart 1920) tek akademik yazara dayanıyor.

### Kaynaklar

- **K8** — Hüseyin Özdeğer (ilgili bölüm), Gaziantep (madde), *TDV İslâm Ansiklopedisi* (ansiklopedi). <https://islamansiklopedisi.org.tr/gaziantep> — Güvenilir ansiklopedi. Şahin Bey'den tek cümleyle söz ediyor; şehit tarihi ve gerçek adı yok. Alıntılar sayfa getirme aracının çıkardığı metinden alındı; ekip sayfada gözle bir kez kontrol etmeli.
- **K13** — Aydın Efe, Antep Savunması: Bir Albayın Hatıratı, *Atatürk Üniversitesi Türkiyat Araştırmaları Enstitüsü Dergisi (TAED), sayı 53, Erzurum 2015, s. 221-253* (makale). <https://dergipark.org.tr/tr/download/article-file/33766> — Hakemli dergi. PDF metni doğrudan okundu, alıntılar birebir. Şahin Bey bilgileri s. 226-227 ve 45 numaralı dipnotta. Hatırat metni (Albay İrfan Durukan) ile yazarın dipnotu ayrı ayrı alıntılandı.
- **K14** — Şahinbey (ilçe tanıtım sayfası) ve Gaziantep Tarihi sayfası, *Gaziantep Valiliği* (kurumsal_web). <https://www.gaziantep.gov.tr/sahinbey> — Resmî ama ikincil kaynak, yazar ve dipnot yok. İkinci sayfa: https://www.gaziantep.gov.tr/gaziantep-tarihi . Alıntılar sayfa getirme aracının çıkardığı metinden; ekip sayfada gözle kontrol etmeli.
- **K15** — Vali Davut Gül'ün Antep'e Gazi Unvanı Verilişinin 101. Yıl Dönümü Mesajı, *Gaziantep Valiliği* (kurumsal_web). <https://www.gaziantep.gov.tr/vali-davut-gulun-antepe-gazi-unvani-verilisinin-101-yil-donumu-mesaji> — Resmî anma mesajı; tarih araştırması değil. S3 ile aynı kurum olduğu için S3'ten bağımsız sayılmadı.
- **K16** — İbrahim Halil Yakar, Antep Savunması Ana Kaynaklarında Maraş, *Gaziantep Üniversitesi Ayıntâb Araştırmaları Dergisi, 1(1), 2018, s. 49-62* (makale). <https://dergipark.org.tr/tr/download/article-file/612344> — Hakemli dergi. PDF metni doğrudan okundu, alıntılar birebir (s. 49-50).
- **K17** — Halil İbrahim Yakar, Ali Gezginci, Antep Savunması Bibliyografyası, *DergiPark'ta yayımlanan hakemli dergi makalesi (kabul: 1 Ocak 2022; dergi adı PDF'in ilk sayfasından tam okunamadı, künye ekipçe tamamlanmalı)* (makale). <https://dergipark.org.tr/tr/download/article-file/2159786> — PDF metni doğrudan okundu. Yazarı S5 ile aynı kişi ve giriş metni çok benzer; bu yüzden S5 ile BAĞIMSIZ SAYILMADI. Şahin Bey bilgisi için Yetkin 1970, s. 79'a atıf yapıyor.
- **K18** — Mustafa Çabuk, Deniz Ayata, Antep Savunması ve Açlık, *Hatay Mustafa Kemal Üniversitesi Sosyal Bilimler Enstitüsü Dergisi, 21(53), 2024, s. 110-125* (makale). <https://dergipark.org.tr/en/download/article-file/3795574> — Hakemli dergi. PDF metni doğrudan okundu, alıntılar birebir.
- **K19** — Antep savunmasının simgesi: Şahin Bey, *Anadolu Ajansı* (haber). <https://www.aa.com.tr/tr/yasam/antep-savunmasinin-simgesi-sahin-bey/1781510> — Zayıf kaynak (haber); iki kaynak sayımına girmez. Bilgiyi veren kişi Prof. Dr. Halil İbrahim Yakar (S5 ve S6'nın yazarı).

### Bilgiler

**tarih_etiketi** — taslak: “Mart 1920”

- [ ] **İKİ KAYNAK** — Şahin Bey'in Kilis yolundaki son çarpışması ve şehit oluşu Mart 1920'dedir.
  - K16: “sonuna kadar direnen Şahin Bey 28 Mart 1920’de şehit düşmüştür.”
  - K14: “Şahin Bey Fransız piyadelerinin süngü darbeleri altında 28 Mart 1920 tarihinde şehit düştü.”
  - K13: “Kilis-Antep yolunu 28 Mart 1920 tarihine kadar tutarak Fransızların Antep’te bulunan işgal birliklerine yardımlarını engellemiştir”
  - Not: Etiket kalabilir. Not: Görev Ocak 1920'de başlıyor (S8, haber), son çarpışma 26-28 Mart 1920.

**konum.ad** — taslak: “Antep”

- [ ] **İKİ KAYNAK** — Çarpışma Antep şehrinin içinde değil, Kilis–Antep yolu üzerindeki Elmalı Köprüsü çevresinde geçti.
  - K16: “Şahin Bey’in idaresindeki kuvvetler, Kilis yolu üzerindeki Elmalı Köprüsü civarında mevzi almış”
  - K14: “Elmalı Köprüsü taşlarını kendine siper ederek Fransızlara ateş etmeye devam etti.”
  - Not: Haritadaki nokta Antep olarak kalabilir; hikâyede 'Kilis–Antep yolu' zaten geçiyor.

**altin_bilgiler[0]** — taslak: “Antep'te halktan gönüllülerle oluşan bir Kuvâ-yi Milliye birliğinin başındaydı.”

> Önerilen metin: Kilis–Antep yolunu tutan Kuvâ-yi Milliye birliğinin komutanıydı. Birliğini köylerden topladığı kişilerle kurdu.

- [ ] **İKİ KAYNAK** — Kuvâ-yi Milliye birliğinin başındaydı (Kilis yolu Kuvâ-yı Milliye komutanı).
  - K13: “kendisine Kilis Yolu Kuva-yı Milliye Komutanlığı görevi verilmiştir.”
  - K17: “Kilis-Antep yolunu tutan Kilis yolu Kuvâ-yı Milliye Komutanı Şahin Bey”
  - Not: Görevi veren: Antep Heyet-i Merkeziyesi (S2, S3).
- [ ] **İKİ KAYNAK** — Birliği köylerden topladığı kişilerden (halktan) oluşuyordu.
  - K13: “Şahin Bey45 de (Mülazım Sait Efendi) köylerden topladığı müsellah efrad ile”
  - K14: “Kısa zamanda 200 fedai topladı.”
  - Not: Kaynaklarda 'gönüllü' sözcüğü birebir geçmiyor: S2 (hatırat) 'köylerden topladığı müsellah efrad' (silahlı kişiler), S3 '200 fedai' diyor. 'Gönüllü' makul bir sadeleştirme ama ekip bilerek karar vermeli. S2'deki '45' dipnot numarasıdır.
- [ ] **İKİ KAYNAK** — Şahin Bey kendisi halktan biri değil, teğmen rütbeli bir subaydı.
  - K13: “Göstermiş olduğu gayretlerden dolayı teğmenliğe (mülazım-ı sani) terfi etti.”
  - K14: “Rütbesi teğmenliğe yükseltilmiş tir.”
  - Not: Altın bilgi bunu söylemiyor, yanlış da değil; ama 'halk kahramanı' gibi sunulmamalı, subay olduğu bilinmeli.

**altin_bilgiler[1]** — taslak: “Kilis–Antep yolunda Fransız kuvvetlerini durdurmak için savaştı ve 28 Mart 1920'de şehit oldu.”

- [ ] **İKİ KAYNAK** — Kilis–Antep yolunda Fransız kuvvetlerine karşı savaştı.
  - K13: “Kilis-Antep yolunu 28 Mart 1920 tarihine kadar tutarak Fransızların Antep’te bulunan işgal birliklerine yardımlarını engellemiştir”
  - K16: “Kilis tarafından Antep’e gelecek Fransız yardımını önlemek için tedbir almış ve bu görevi üslenen Şahin Bey başarılı faaliyetlerde bulunmuştur.”
  - K18: “Öncelikle Şahin Bey liderliğinde düşman Antep’e girişini engellemek için Antep Kilis arasında efsanevi direniş gösterildi.”
- [ ] **İKİ KAYNAK** — 28 Mart 1920'de şehit oldu.
  - K16: “sonuna kadar direnen Şahin Bey 28 Mart 1920’de şehit düşmüştür.”
  - K14: “Şahin Bey Fransız piyadelerinin süngü darbeleri altında 28 Mart 1920 tarihinde şehit düştü.”
  - Not: Tarihte çelişki bulunmadı. S6 ve S8 (haber) de aynı tarihi veriyor.

**altin_bilgiler[2]** — taslak: “Antep'in uzun direnişi nedeniyle TBMM şehre "Gazi" unvanını verdi (1921).”

- [ ] **İKİ KAYNAK** — Unvanı Büyük Millet Meclisi verdi; yıl 1921.
  - K8: “Türkiye Büyük Millet Meclisi, kendi gücüyle işgale on ay dayanan ve düşmana geçit vermeyen Antep'e 6 Şubat 1921'de gazilik unvanı verdi.”
  - K18: “TBMM, 8 Şubat 1921 tarihli toplantısında 93 Numaralı Kanunla, Antep’e “Gazi” unvanını verdi”
  - K13: “Antep’e “Gazi” unvanının verilmesi oy birliğiyle kabul edilmiş ve bu kanun, 8 Şubat 1921 tarihinde Resmi Gazete’de yayımlanarak yürürlüğe girmiştir.”
  - Not: Yıl (1921) ve kurum kesin. GÜN çelişkili: 6 Şubat (S1, S5, S6, S3) / 8 Şubat (S7, S4). Ayrıntı 'ek' alanında. Oyunda yalnızca yıl yazıldığı için cümle güvenli.
- [ ] **İKİ KAYNAK** — Unvan, direniş nedeniyle verildi.
  - K8: “Türkiye Büyük Millet Meclisi, kendi gücüyle işgale on ay dayanan ve düşmana geçit vermeyen Antep'e 6 Şubat 1921'de gazilik unvanı verdi.”
  - K16: “Fransızlara meydan okuyan bu direniş üzerine Büyük Millet Meclisi 6 Şubat 1921’de aldığı bir kararla Ayıntab ismini “Gazi Ayıntab” olarak değiştirmiştir.”

**paneller[0]** — taslak: “Şahin Bey köylerden gelen gönüllüleri toplar. Gerçek adı Mehmet Said'dir.”

> Önerilen metin: Şahin Bey köyleri dolaşıp adam toplar. Asıl adı Mehmet Sait'tir; "Şahin" takma adıdır.

- [ ] **İKİ KAYNAK** — Köylerden adam topladı.
  - K13: “köylerden topladığı müsellah efrad ile düşmanın Kilis’ten çıkardığı erzak kolunu vurup”
  - K14: “Kısa zamanda 200 fedai topladı.”
  - Not: 'Gönüllü' sözcüğü kaynaklarda birebir yok (bkz. altin_bilgiler[0]).
- [ ] **İKİ KAYNAK** — Gerçek adı Mehmet Said'dir.
  - K13: “Asıl adı Mehmet Sait’tir. Şahin adı takma bir isim olup Kilis yolu savaşlarında kullanmıştır.”
  - K14: “Asıl adı Mehmed Said'dir.”
  - Not: İsim doğru, yalnızca YAZIM farklı: 'Mehmet Sait' (S2, akademik), 'Mehmed Said' (S3 valilik, S8 haber). Oyundaki 'Mehmet Said' karma bir yazım; birini seçmek daha tutarlı olur.

**paneller[1]** — taslak: “Kilis yönünden uzun bir işgal kolonu yaklaşır.”

> Önerilen metin: Kilis yönünden büyük bir işgal birliği yaklaşır.

- [ ] **TEK KAYNAK** — Fransız birlikleri Kilis'ten Antep'e doğru büyük bir kuvvetle hareket etti (26 Mart 1920).
  - K16: “Fransızlar Kilis-Antep yolunu açmak için 26 Mart 1920’de büyük bir askeri birlikle Kilis’ten Antep’e hareket etmişlerdir.”
  - K17: “Fransızlar tarafından bu yolu açmak için 26 Mart 1920’de hareket eden büyük bir kuvvete karşı”
  - Not: S5 ve S6 aynı yazarın metinleri, tek kaynak sayıldı. S8 (haber) sayı da veriyor (8 bin piyade, 200 süvari) ama haber olduğu için kullanılmamalı. S2'de daha önceki bir 'erzak kolu'ndan söz ediliyor. 'Uzun kolon' görsel bir anlatım; 'büyük bir birlik' daha kaynağa yakın.

**paneller[2]** — taslak: “Az sayıda gönüllüyle yolu günlerce tutarlar. Şehir hazırlanmak için zaman kazanır.”

> Önerilen metin: Kendilerinden çok büyük bir kuvvete karşı yolu günlerce tutarlar. Antep'teki işgal birliklerine yardım ulaşamaz.

- [ ] **İKİ KAYNAK** — Karşılarındaki kuvvet kendilerinden çok büyüktü (az sayıdaydılar).
  - K16: “Fransızların üstün askeri kuvvetlerine karşı sonuna kadar direnen Şahin Bey”
  - K14: “Kısa zamanda 200 fedai topladı.”
  - Not: S6: 'kendi kuvvetlerinden daha büyük bir kuvvete direnmiş'.
- [ ] **İKİ KAYNAK** — Yolu günlerce tuttular.
  - K13: “Kilis-Antep yolunu 28 Mart 1920 tarihine kadar tutarak Fransızların Antep’te bulunan işgal birliklerine yardımlarını engellemiştir”
  - K16: “Fransızlar Kilis-Antep yolunu açmak için 26 Mart 1920’de büyük bir askeri birlikle Kilis’ten Antep’e hareket etmişlerdir.”
  - Not: Son çarpışma 26-28 Mart (yaklaşık üç gün); yolu tutma görevi ise haftalarca sürdü. 'Günlerce' güvenli.
- [ ] **BULUNAMADI** — Şehir bu sayede hazırlanmak için zaman kazandı.
  - Not: Okunan kaynakların hiçbirinde 'şehir zaman kazandı / hazırlandı' ifadesi yok. Kaynakların söylediği: yolu tutarak Antep'teki Fransız birliklerine giden yardımı engelledi (S2). Bu cümle oyunun yorumu; mini oyunun 'şehir hazırlık çubuğu' da buna dayanıyor.

**paneller[3]** — taslak: “Şahin Bey şehit düşer.”

- [ ] **İKİ KAYNAK** — Şahin Bey şehit düştü (Elmalı Köprüsü, 28 Mart 1920).
  - K16: “sonuna kadar direnen Şahin Bey 28 Mart 1920’de şehit düşmüştür.”
  - K14: “Şahin Bey Fransız piyadelerinin süngü darbeleri altında 28 Mart 1920 tarihinde şehit düştü.”
  - Not: Kaynaklardaki ölüm ayrıntıları (süngü vb.) oyunun 'şiddet sembolik' kuralı gereği kullanılmamalı.

**paneller[4]** — taslak: “Antep aylarca direnir. TBMM şehre "Gazi" unvanını verir.”

- [ ] **ÇELİŞKİ** — Antep aylarca direndi.
  - K8: “Antep halkı 1 Nisan 1920'den 7 Şubat 1921'e kadar Fransız kuvvetlerine karşı büyük bir mücadele verdi.”
  - K16: “10 ay 9 gün Fransız ve Ermeni kuvvetlerine karşı Antep halkı direnmiştir.”
  - K17: “Antep halkı, yaklaşık olarak 11 ay Fransız işgaline karşı direnmiştir.”
  - K15: “vatan uğruna, bayrak uğruna 11 ay boyunca kadın erkek, genç yaşlı hem yoklukla hem düşmana karşı topyekün mücadele etmiş”
  - Not: Süre kaynağa göre değişiyor: 'on ay' (S1), '10 ay 9 gün' (S5), 'yaklaşık 11 ay' (S6, S4). Bitiş günü de 7, 8 ya da 9 Şubat 1921 olarak geçiyor. 'Aylarca' ifadesi hepsiyle uyumlu ve güvenli; sayı verilecekse 'yaklaşık on ay' önerilir.
- [ ] **İKİ KAYNAK** — TBMM şehre Gazi unvanını verdi.
  - K8: “Türkiye Büyük Millet Meclisi, kendi gücüyle işgale on ay dayanan ve düşmana geçit vermeyen Antep'e 6 Şubat 1921'de gazilik unvanı verdi.”
  - K18: “TBMM, 8 Şubat 1921 tarihli toplantısında 93 Numaralı Kanunla, Antep’e “Gazi” unvanını verdi”

**mini_oyun** — taslak: “Kilis'ten Antep'e uzanan yolda geçitleri tut. Şehir hazırlanmak için zaman kazansın. / Az sayıda gönüllü yolu tutunca şehir hazırlanmak için zaman kazandı.”

> Önerilen metin: Kendilerinden çok büyük bir kuvvete karşı yolu tuttular. Antep'teki işgal birliklerine yardım ulaşamadı.

- [ ] **İKİ KAYNAK** — Yol Kilis'ten Antep'e uzanır ve Şahin Bey'in birliği bu yolu tuttu.
  - K13: “Kilis-Antep yolunu 28 Mart 1920 tarihine kadar tutarak”
  - K17: “Kilis-Antep yolunu tutan Kilis yolu Kuvâ-yı Milliye Komutanı Şahin Bey”
- [ ] **BULUNAMADI** — 5 geçit, 3 dalga, 'şehir hazırlık çubuğu'.
  - Not: Bunlar oyun mekaniği; tarihî iddia olarak sunulmamalı. Kaynaklarda adı geçen tek nokta Elmalı Köprüsü.
- [ ] **BULUNAMADI** — Şehir hazırlanmak için zaman kazandı (kazanım cümlesi).
  - Not: bkz. paneller[2]. Kaynakla uyumlu seçenek: 'Yol tutulunca Antep'teki işgal birliklerine yardım ulaşamadı.'

**haber** — taslak: “{Şahin} Bey {Kilis–Antep} yolunda işgalcileri durdurmak için savaştı. Antep'in direnişi nedeniyle şehre {Gazi} unvanı verildi.”

- [ ] **İKİ KAYNAK** — Şahin Bey Kilis–Antep yolunda savaştı.
  - K13: “Kilis-Antep yolunu 28 Mart 1920 tarihine kadar tutarak”
  - K16: “Şahin Bey’in idaresindeki kuvvetler, Kilis yolu üzerindeki Elmalı Köprüsü civarında mevzi almış”
- [ ] **İKİ KAYNAK** — Şehre Gazi unvanı verildi.
  - K8: “Antep'e 6 Şubat 1921'de gazilik unvanı verdi.”
  - K18: “93 Numaralı Kanunla, Antep’e “Gazi” unvanını verdi”
  - Not: Çeldiricilerdeki 'Kahraman' ve 'Şanlı' unvanları bu görevde araştırılmadı. Dil notu: 'işgalcileri' yerine 'işgal birliklerini' daha nesnel olur.

**biliyor_muydun** — taslak: “Şehrin bugünkü adı olan Gaziantep, bu unvandan gelir.”

- [ ] **İKİ KAYNAK** — Gaziantep adı Gazi unvanından gelir.
  - K8: “Böylece şehir Gaziantep adıyla anılmaya başlandı.”
  - K16: “Büyük Millet Meclisi 6 Şubat 1921’de aldığı bir kararla Ayıntab ismini “Gazi Ayıntab” olarak değiştirmiştir.”
  - K14: “Kanun No 93, 6 Şubat 1921... Ayıntap kasabasının namı Gaziayıntap'a tahvil edilmiştir.”
  - Not: Kanun metninde ad 'Gaziayıntap'; 'Gaziantep' bugünkü söylenişi. Bonus sorunun doğru cevabı ('Şehre verilen unvandan') kaynaklarla uyumlu.

### Röportaj taslakları

- [ ] **Gönüllüleriniz kimlerdi?**
  - Taslak: Köyleri dolaşıp eli silah tutan kişileri topladım. Kısa zamanda iki yüz kişi olduk.
  - 1. cümle: K13 (köylerden topladığı müsellah efrad)
  - 2. cümle: K14 (Kısa zamanda 200 fedai topladı)
- [ ] **Kilis–Antep yolu neden bu kadar önemliydi?**
  - Taslak: Fransız birlikleri Antep'teki askerlerine yardımı Kilis üzerinden gönderiyordu. Bana bu yolu kontrol altında tutma görevi verildi. Yolu tutarak o yardımları engelledik.
  - 1. cümle: K16 (Kilis tarafından Antep'e gelecek Fransız yardımı)
  - 2. cümle: K14, K13 (Kilis-Antep yolunu kontrol altında tutma vazifesi)
  - 3. cümle: K13 (yolu tutarak yardımlarını engellemiştir)
- [ ] **Az kişiyle nasıl dayanabildiniz?**
  - Taslak: Kilis yolu üzerindeki Elmalı Köprüsü çevresinde mevzi aldık. Karşımızdaki kuvvet bizden çok daha büyüktü. Yine de sonuna kadar direndik.
  - 1. cümle: K16 (Elmalı Köprüsü civarında mevzi almış)
  - 2. cümle: K17 (kendi kuvvetlerinden daha büyük bir kuvvete), K16
  - 3. cümle: K16 (sonuna kadar direnen)
- [ ] **Antep halkı sizden sonra ne yaptı?**
  - Taslak: 1 Nisan 1920'de şehrin içinde savaş başladı. Antep halkı açlığa ve cephanesizliğe rağmen aylarca direndi. Büyük Millet Meclisi de şehre "Gazi" unvanını verdi.
  - 1. cümle: K16 (1 Nisan 1920'de ... şehir içi savaşları başlamıştır), K18
  - 2. cümle: K16 (açlığa ve cephanesizliğe mahkum olan şehir), K8 (on ay)
  - 3. cümle: K8, K18

### Ek bulgular

- **1_gercek_adi:** İsim konusunda çelişki yok, yalnızca yazım farkı var. Akademik makale (S2, dipnot 45): "Asıl adı Mehmet Sait’tir. Şahin adı takma bir isim olup Kilis yolu savaşlarında kullanmıştır." Valilik (S3) ve AA haberi (S8): "Mehmed Said". S2'deki hatırat metni onu "Mülazım Sait Efendi" diye anıyor. Bir arama sonucunda 'Dülgerzâde Mehmed Said' biçimi de göründü ama o sayfa açılıp okunmadı, kaynak sayılmadı. Doğum yılı: 1877 (S2, S3, S8); S2 ayrıca Pamuk'un kitabında 1871 geçtiğini not ediyor (küçük çelişki, oyunda kullanılmıyor). Öneri: oyunda 'Mehmet Sait' ya da 'Mehmed Said' biçimlerinden biri seçilip her yerde aynı yazılsın.
- **2_sehit_tarihi_ve_yeri:** Tarih: 28 Mart 1920 — S5 (Yakar 2018), S6, S3 (Valilik, Gaziantep Tarihi sayfası) ve S8 (haber) aynı tarihi veriyor; S2 de yolu '28 Mart 1920 tarihine kadar' tuttuğunu yazıyor. Çelişki bulunmadı. Yer: Kilis yolu üzerindeki Elmalı Köprüsü — S5: "Kilis yolu üzerindeki Elmalı Köprüsü civarında mevzi almış"; S6: "Elmalı köprüsünde mevzi almıştı"; S3: "Elmalı Köprüsü taşlarını kendine siper ederek"; S8: "28 Mart 1920'de Elmalı Köprüsü'nde şehit edildi". Fransız kuvveti 26 Mart 1920'de Kilis'ten yola çıktı (S5, S6); çarpışma 26-28 Mart arası. TDV (S1) tarih ve yer vermiyor. Atatürk Ansiklopedisi sayfaları araçla açılamadı (içerik yüklenmedi), bu yüzden kullanılamadı.
- **3_gorevi_ve_birliginin_niteligi:** Görev: Antep Heyet-i Merkeziyesi ona Kilis Yolu Kuvâ-yı Milliye Komutanlığı görevini verdi (S2; S6 da 'Kilis yolu Kuvâ-yı Milliye Komutanı' diyor; S3: 'Kilis-Antep yolunu kontrol altında tutma vazifesi'). Amaç: Kilis tarafından Antep'teki Fransız birliklerine gelecek yardımı ve erzak kollarını engellemek (S2, S5). Birlik: düzenli ordu birliği değil; köylerden toplanan silahlı kişiler — S2 (hatırat): 'köylerden topladığı müsellah efrad'; S3: 'Kısa zamanda 200 fedai topladı'. 'Gönüllü' sözcüğü okunan kaynaklarda birebir geçmiyor. Şahin Bey'in kendisi meslekten askerdi: Yemen'de başçavuş, sonra teğmen (mülazım-ı sani); Trablusgarp, Balkan, Galiçya ve Sina cephelerinde bulundu, 1918'de esir düştü, Aralık 1919'da döndü (S2 dipnot 45). Haberde geçen Fransız kuvveti sayısı (8 bin piyade, 200 süvari) yalnızca S8'de (haber) var; oyunda kullanılmamalı.
- **4_savunma_suresi_ve_gazi_unvani:** SÜRE: Şehir içi savaş 1 Nisan 1920'de başladı (S1, S5, S6, S7). Bitiş 7 Şubat 1921 (S1), 8 Şubat 1921 (S2: Fransızlar şehri ele geçirdi) ya da 9 Şubat 1921 (S5, S6, S7: şehrin sukutu / teslim anlaşması) olarak veriliyor. Süre ifadeleri: 'on ay' (S1), '10 ay 9 gün' (S5), 'yaklaşık olarak 11 ay' (S6), '11 ay' (S4). 1 Nisan 1920 – 9 Şubat 1921 arası hesapla 10 ay 8-9 gün eder; '11 ay' diyenler büyük olasılıkla daha erken bir başlangıcı sayıyor (kaynaklar bunu açıklamıyor). Fransız kuşatması ayrıca 11 Ağustos 1920'de, ikinci kuşatma 21 Kasım 1920'de başladı (S5, S6). Şehir 25 Aralık 1921'de işgalden kurtuldu (S1, S5, S6, S7). Oyun için güvenli ifade: 'aylarca' ya da 'yaklaşık on ay'. GAZİ UNVANI: Kanun No 93 (S7, S3). Gün çelişkili: 6 Şubat 1921 (S1, S5, S6, S3) / 8 Şubat 1921 (S7, S4). S2 farkı şöyle açıklıyor: önerge 6 Şubat 1921'de Fevzi Çakmak tarafından verildi, TBMM'nin 147. toplantısında oy birliğiyle kabul edildi, kanun "8 Şubat 1921 tarihinde Resmi Gazete’de yayımlanarak yürürlüğe girmiştir". Yani 6 Şubat kabul, 8 Şubat yürürlük tarihi olarak okunabilir; ancak S7 '8 Şubat 1921 tarihli toplantı' diyor, bu yüzden kesin gün için TBMM Zabıt Ceridesi'ne ya da kanun metnine bakılmalı (tbmm.gov.tr'de bu görevde bulunamadı). Oyunda yalnızca '1921' yazmak güvenli. Not: unvan, şehir düşmeden hemen önce / düştüğü günlerde verildi (S6: 'savunma hala devam ederken').
- **erisim_notlari:** Atatürk Ansiklopedisi (ataturkansiklopedisi.gov.tr) sayfaları araçla okunamadı; Gaziantep Büyükşehir Belediyesi sayfası sertifika hatası verdi; Ali Gürsel'in 'Milli Mücadele Döneminde Gaziantep Savunması ve Şahinbey' makalesinin (Asia Minor Studies, s. 52-63, https://dergipark.org.tr/tr/pub/asm/article/784835) yalnızca özet sayfası açıldı, tam metni okunamadı — ekip bu makaleyi elle indirip okumalı, Şahin Bey için en doğrudan akademik kaynak bu görünüyor.

---

## Tayyar Rahmiye

Taslaktaki en önemli hata yer: Tayyar Rahmiye (Rahime Hatun) Antepli değil Osmaniyelidir ve Antep savunmasında değil, Osmaniye'de Fransız birliklerine karşı Kuvâ-yi Milliye'de çarpışmıştır (dört bağımsız akademik kaynak). Osmaniye'deki Fransız karargâhına yapılan saldırıda en önde ilerlerken şehit düştüğü iki kaynakla doğrulandı; ancak gün çelişkili (5 Ağustos 1920 / 1 Temmuz 1920), bu yüzden '1920 yazında' önerildi. 'Tayyar' lakabı tek kaynakta, ateş altındaki arkadaşlarını kurtarmak için ileri atılmasına bağlanıyor; 'hız' açıklaması güvenilir kaynakta bulunamadı. Antep'e dayalı paneller, haber şablonu, 'biliyor muydun', iki röportaj sorusu ve mini oyun teması Osmaniye'ye göre yeniden yazılmalı; önerilen metinler dosyada.

### Kaynaklar

- **K20** — Volkan Payaslı, Fransız İşgalinde Osmaniye (Cebel-i Bereket) ve Rahime Hatun Üzerine Bir Değerlendirme, *Ankara Üniversitesi Türk İnkılâp Tarihi Enstitüsü Atatürk Yolu Dergisi, Sayı 61, Güz 2017, s. 269-308* (makale). <https://dergipark.org.tr/tr/download/article-file/675371> — Hakemli dergi makalesi; Rahime Hatun'un biyografisini arşiv, anı ve yerel kaynaklardan derleyen ana kaynak. PDF indirilip metni okundu. Lakap bilgisi Miralay Mehmet Arif Bey'in anılarından aktarma.
- **K21** — Nejla Günay, Osmaniye'nin İşgali ve Kurtuluşu (Millî Mücadele'nin Yerel Tarihi 1918-1923 içinde, 8. bölüm), *Türkiye Bilimler Akademisi (TÜBA)* (kitap). <https://www.tuba.gov.tr/files/yayinlar/tarih-serisi/TUBA-978-625-8352-66-5_ch08.pdf> — Resmî bilim akademisi yayını, kitap bölümü. Rahime Hatun'a kısa bir paragraf ayırıyor (dayanak: Zeki Sarıhan, Damar Arıkoğlu). Kesin gün vermiyor; olayı 1920 Haziran'ındaki Osmaniye çarpışmaları bağlamında anlatıyor. PDF indirilip metni okundu.
- **K22** — Esra Sarıkoyuncu Değerli, Millî Mücadele'de Türk Kadını ve İnönü Muharebeleri'nde Çarpışan İki Kadın Kahraman, *Anadolu Üniversitesi Sosyal Bilimler Dergisi, 21 (Özel Sayı), 2021* (makale). <https://dergipark.org.tr/en/download/article-file/1677335> — Hakemli dergi makalesi. Tayyar Rahmiye'den yalnızca birkaç cümleyle söz ediyor (Osmaniye, şehit düştüğü). PDF indirilip metni okundu.
- **K23** — Zeynep Yamaç Erdoğan, Kurtuluş Savaşı'ndaki Kadın Kahramanların Cumhuriyet Dönemi'ndeki Tematik Bir Müze Bağlamında İncelenmesi, *Gaziantep University Journal of Social Sciences, 2023 Özel Sayı* (makale). <https://dergipark.org.tr/en/download/article-file/3412433> — Hakemli dergi makalesi; konusu müzecilik/turizm, tarih bilgisi ikincil aktarım. Tayyar Rahmiye için tek paragraf; tarih olarak 1 Temmuz 1920 veriyor (S1 ile çelişiyor). PDF indirilip metni okundu.
- **K24** — Mustafa Can, Antep'in İşgali ve Kurtuluşu (Millî Mücadele'nin Yerel Tarihi 1918-1923 içinde, 5. bölüm), *Türkiye Bilimler Akademisi (TÜBA)* (kitap). <https://www.tuba.gov.tr/files/yayinlar/tarih-serisi/TUBA-978-625-8352-66-5_ch05.pdf> — Yalnızca Antep savunmasında kadın ve çocukların görevleri (biliyor_muydun) için bakıldı. Tayyar Rahmiye'den söz etmiyor. PDF indirilip metni okundu.
- **K25** — Umur Gürsoy, Rahime Hatun (Tayyar Rahmiye), *Osmaniye Ansiklopedisi (osmaniyeansiklopedisi.com)* (kurumsal_web). <https://www.osmaniyeansiklopedisi.com/rahime-hatun-tayyar-rahmiye/> — ZAYIF / BAĞIMSIZ DEĞİL: Yerel ansiklopedi sitesi; resmî kurum olduğu doğrulanamadı, kaynakçasında Vikipedi de var ve cümleleri S1 (Payaslı) ile birebir aynı. İki kaynak sayımına KATILMADI; yalnızca bilgi için kaydedildi.

### Bilgiler

**konum.ad** — taslak: “Antep”

> Önerilen metin: Osmaniye

- [ ] **BULUNAMADI** — Tayyar Rahmiye Antep'te / Antep savunmasında görev aldı
  - Not: Okunan hiçbir kaynak onu Antep'e bağlamıyor. Antep bölümünü anlatan S5'te adı hiç geçmiyor. TASLAK YANLIŞ.
- [ ] **İKİ KAYNAK** — Tayyar Rahmiye (Rahime Hatun) Osmaniyelidir ve Osmaniye'de Fransız birliklerine karşı çarpıştı
  - K20: “Kaypak nahiyesi Raziyeler köyünün Kanlıgeçit mahallesinde 1890 (1360) yılında doğmuştur.”
  - K21: “Osmaniye’deki çarpışmalarda halktan sıra dışı bir isim bölgede efsaneleşmiştir. Rahime Hatun adlı kadın müfreze, birliğin en önünde gitmek suretiyle askerlerin cesaretini artırıp”
  - K22: “Osmaniye’nin Fransızlardan kurtarılmasında üstün yararlılık gösteren ve şehit düşen Tayyar Rahmiye”
  - K23: “Tayyar Rahmiye; Güney Cephesi’nde 9. Tümen’deki bir müfrezenin gönüllü komutanlığını yaparak Osmaniye’de Fransızlara saldırmak için”
  - Not: Dört ayrı kurumun yayını Osmaniye diyor. Doğum yeri ayrıntısı (Kaypak nahiyesi Raziyeler köyü, 1890) yalnızca S1'de (tek kaynak).

**tarih_etiketi** — taslak: “1920”

- [ ] **İKİ KAYNAK** — Olaylar 1920 yılında geçti
  - K20: “Fransız Karargâhına 5 Ağustos 1920 tarihinin erken saatlerinde79saldırıya geçmişlerdi.”
  - K23: “Osmaniye’de Fransızlara saldırmak için 1 Temmuz 1920 tarihinde harekete geçmiştir.”
  - Not: Yıl (1920) konusunda kaynaklar uyuşuyor; gün ve ay çelişkili (aşağıya bakınız). S2 de olayı 1920 yazı (Haziran) bağlamında anlatıyor.

**altin_bilgiler[0]** — taslak: “Antep savunmasında erkeklerle birlikte çarpışan bir kadın kahramandır.”

> Önerilen metin: Osmaniyelidir. Fransız işgaline karşı Kuvâ-yi Milliye'de erkeklerle birlikte çarpışan bir kadın kahramandır.

- [ ] **BULUNAMADI** — Antep savunmasında çarpıştı
  - Not: Yanlış yer. Kaynaklar Osmaniye (Cebel-i Bereket) diyor; bkz. konum.ad.
- [ ] **İKİ KAYNAK** — Kadın olarak cephede erkeklerle birlikte çarpıştı
  - K20: “Kırmızı Müfreze Kuvay-ı Milliye’ye onbaşı olarak katılmıştı. Milislere yiyecek, giyecek sağlamış cephede erkeklerle omuz omuza savaşmıştır.”
  - K21: “Rahime Hatun adlı kadın müfreze, birliğin en önünde gitmek suretiyle askerlerin cesaretini artırıp”
  - Not: S1'e göre Hayta Hüseyin (Hüseyin Ağa) çetesine / Kırmızı Müfreze'ye onbaşı olarak katıldı. S4 ise '9. Tümen’deki bir müfrezenin gönüllü komutanlığını' yaptığını yazıyor; rütbe/görev adı kaynaklarda farklı, oyunda kullanılmaması güvenli.

**altin_bilgiler[1]** — taslak: “"Tayyar" lakabı hızı ve cesaretinden dolayı verilmiştir.”

> Önerilen metin: Bir çarpışmada ateş altında kalan arkadaşlarını kurtarmak için ileri atıldı. Bu cesareti nedeniyle ona "Tayyar" lakabı verildi.

- [ ] **İKİ KAYNAK** — Lakabı 'Tayyar'dır
  - K20: “bu kahramanca hareketinden dolayı ismine (Tayyar) namı verilmiştir”
  - K22: “Gördesli Makbule ve Osmaniyeli Tayyar Rahime başta olmak üzere pek çok kahraman Türk kadını cephede şehit düşmüştür.”
  - K23: “Tayyar Rahmiye Fransız karargâhının ele geçirildiğini göremeden şehit olmuştur.”
  - Not: Ad kaynaklarda iki biçimde geçiyor: 'Rahime Hatun' (S1, S2 — yerel ve akademik kullanım) ve 'Tayyar Rahmiye / Tayyar Rahime' (S3, S4).
- [ ] **BULUNAMADI** — Lakap 'hızı' nedeniyle verildi
  - Not: Okunan güvenilir kaynaklarda 'hız' ya da 'at üstünde uçar gibi' açıklaması yok (bu açıklamalar yalnızca Vikipedi ve haber sitelerinin arama özetlerinde görüldü; kaynak sayılmadı).
- [ ] **TEK KAYNAK** — Lakap, ateş altında kalan arkadaşlarını kurtarmak için ileri atılması (cesareti) nedeniyle verildi
  - K20: “Rahime, derhal ileri atılarak şehitleri gidip kurtarmış ve bu kahramanca hareketinden dolayı ismine (Tayyar) namı verilmiştir”
  - Not: S1 bunu Miralay Mehmet Arif Bey'in anılarından alıntılıyor: olay Şubat 1920'de Hasanbeyli yakınındaki 9. Tünel'e yapılan taarruzda geçiyor. S6 aynı cümleyi kopyalıyor (bağımsız değil).

**altin_bilgiler[2]** — taslak: “Antep savunması sırasında şehit düştü.”

> Önerilen metin: 1920 yazında Osmaniye'de Fransız karargâhına yapılan saldırıda en önde ilerlerken şehit düştü.

- [ ] **BULUNAMADI** — Antep savunması sırasında şehit düştü
  - Not: Yanlış yer; kaynaklara göre Osmaniye'de şehit düştü.
- [ ] **İKİ KAYNAK** — Osmaniye'deki Fransız karargâhına yapılan saldırıda şehit düştü
  - K20: “Rahime Hatun karargâha tam yaklaşmıştı ki Fransız askerlerinin makineli tüfekten attıkları kurşun vücuda isabet etmiş ve orada şehadete ermişti.”
  - K23: “Tayyar Rahmiye Fransız karargâhının ele geçirildiğini göremeden şehit olmuştur.”
  - K21: “Çatışmalar sırasında şehit düşen Rahime Hatun’un cenazesinin düşmana bırakılmaması gerektiğine inanan Türk birlikleri”
  - Not: S1'e göre karargâh, Osmaniye merkezinde Alibeyli mahallesindeki Hacı Ökkeş'in konağıydı (bu ayrıntı tek kaynak).
- [ ] **ÇELİŞKİ** — Şehit olduğu gün
  - K20: “Fransız Karargâhına 5 Ağustos 1920 tarihinin erken saatlerinde79saldırıya geçmişlerdi.”
  - K23: “Osmaniye’de Fransızlara saldırmak için 1 Temmuz 1920 tarihinde harekete geçmiştir.”
  - Not: S1: 5 Ağustos 1920; ancak aynı makalenin 79. dipnotu çelişkiyi kendisi belirtiyor: 'Bazı kaynaklarda taarruzun Temmuzda başladığı yazılmaktadır.' S4: 1 Temmuz 1920. S2 kesin gün vermiyor, olayı Haziran 1920 çarpışmaları içinde anlatıyor. Güvenli ifade: '1920 yazında'.

**paneller[0]** — taslak: “Antep kuşatma altında. Kadınlar ve çocuklar siperlere yiyecek ve cephane taşıyor.”

> Önerilen metin: Osmaniye işgal altında. Halk dağ köylerinde Kuvâ-yi Milliye müfrezeleri kuruyor.

- [ ] **BULUNAMADI** — Sahne Antep kuşatmasında geçiyor
  - Not: Rahmiye'nin hikâyesi Antep'te değil Osmaniye'de geçiyor; panel yeniden yazılmalı.
- [ ] **İKİ KAYNAK** — (Osmaniye için) Osmaniye Fransız işgali altındaydı ve halk Kuvâ-yi Milliye müfrezeleri kurdu
  - K20: “Her yerde olduğu gibi Cebel-i Bereket’te, Yarpuz, Bahçe bölgesinde de Kuva-yı Milliye teşkil edilmiş ve giderek güçlenmişti.”
  - K21: “Osmaniye merkezinde halk tarafından Karayığınlı, Nuri Efe, Yeşiloğlu Mehmet Ağa, Taşçı Bekir ve Süleyman Ağa müfrezeleri kuruldu.”
- [ ] **TEK KAYNAK** — (Osmaniye için) Kadınlar cephe gerisinde ekmek/yiyecek hazırladı
  - K20: “Kadınlar da oluşan heyete yufka açarak ekmek yetiştirerek cephe gerisinde önemli işler yapmışlardı.”
  - Not: Çocukların cephane taşıdığına dair Osmaniye için kaynak bulunamadı.

**paneller[1]** — taslak: “Rahmiye siperler arasında herkesten hızlı koşar. (Nuri: Ona "Tayyar", yani "uçan" derlerdi.)”

> Önerilen metin: Rahmiye köyüne gelen Kuvâ-yi Milliye'ye gönüllü katılır. Bir çarpışmada ateş altında kalan arkadaşlarını kurtarmak için ileri atılır. (Nuri: Bu cesareti yüzünden ona "Tayyar" dediler.)

- [ ] **BULUNAMADI** — Siperler arasında herkesten hızlı koşardı
  - Not: Kaynaklarda böyle bir anlatım yok.
- [ ] **İKİ KAYNAK** — Ona 'Tayyar' denirdi
  - K20: “bu kahramanca hareketinden dolayı ismine (Tayyar) namı verilmiştir”
  - K22: “Osmaniyeli Tayyar Rahime”
  - Not: 'Tayyar' kelimesinin 'uçan' anlamına geldiği okunan kaynaklarda açıklanmıyor; bu bir sözlük bilgisidir, ekip sözlükten (TDK) kaynak göstermeli.
- [ ] **TEK KAYNAK** — Köyüne gelen çete reisine 'cephede savaşacağım' diyerek gönüllü katıldı (panel için öneri)
  - K20: ““Ben cephe gerisinde değil, cephede erkeklerle birlikte savaşacağım” diyerek 25 yaşında cesur kahraman Türk kadını Kırmızı Müfreze Kuvay-ı Milliye’ye onbaşı olarak katılmıştı.”
  - Not: Dikkat: S1 doğum yılını 1890 verirken burada '25 yaşında' diyor (1920'de 30 olmalı); yaş oyunda kullanılmamalı. Gönüllü katıldığı bilgisi S1 içindeki Mehmet Arif alıntısında da geçiyor ('gönüllü olarak katılmış'); S4 de 'gönüllü' diyor.

**paneller[2]** — taslak: “Bir siper zor durumdadır. Rahmiye oraya ulaşır ve savunmaya katılır.”

> Önerilen metin: Osmaniye'deki Fransız karargâhına saldırı başlar. Arkadaşları duraklayınca Rahmiye onlara cesaret verir ve en önde ilerler.

- [ ] **BULUNAMADI** — Zor durumdaki bir sipere ulaşıp savunmaya katıldı
  - Not: Kaynaklardaki olay bir savunma değil, Fransız karargâhına yapılan saldırıdır.
- [ ] **İKİ KAYNAK** — Karargâh saldırısında duraklayan arkadaşlarını cesaretlendirip en önde ilerledi
  - K20: “Fransız birlikleri yoğun ateş içerisinde bombalar atmış, Rahime Hatun hiç aldırmadan en önde gitmişti.”
  - K23: “Askerler duraklayınca ise; “ben kadın olduğum halde ayakta duruyorum da, siz erkek olduğunuz halde yerlerde sürünmekten utanmıyor musunuz?” sözleriyle askerlere cesaret vermiştir.”
  - K21: “birliğin en önünde gitmek suretiyle askerlerin cesaretini artırıp Türk kuvvetlerinin gücünü sonuna kadar kullanmasına vesile oldu.”
  - Not: Söylediği söz S1 ve S4'te hemen hemen aynı biçimde aktarılıyor; yine de anıya dayandığı için oyunda doğrudan alıntı yerine dolaylı anlatım önerilir.

**paneller[3]** — taslak: “Rahmiye şehit düşer.”

> Önerilen metin: Rahmiye karargâha yaklaşırken şehit düşer. Arkadaşları karargâhı ele geçirir.

- [ ] **İKİ KAYNAK** — Şehit düştü
  - K20: “kurşun vücuda isabet etmiş ve orada şehadete ermişti”
  - K21: “Çatışmalar sırasında şehit düşen Rahime Hatun”
  - K22: “Osmaniye’nin Fransızlardan kurtarılmasında üstün yararlılık gösteren ve şehit düşen Tayyar Rahmiye”
  - K23: “Tayyar Rahmiye Fransız karargâhının ele geçirildiğini göremeden şehit olmuştur.”
  - Not: Tarih çelişkili (5 Ağustos 1920 / 1 Temmuz 1920); panelde gün verilmemeli.
- [ ] **İKİ KAYNAK** — Arkadaşları onun ardından karargâhı ele geçirdi (panel için ek öneri)
  - K20: “çeteciler büyük bir hırsla Fransız Karargâhına girmiş, balkonda dalgalanan Fransız bayrağını indirerek yerine Türk bayrağını çekmişlerdi.”
  - K23: “Fransız karargâhının alınmasıyla seksen adet tüfek, iki adet makinalı tüfek ele geçirilmiştir.”
  - Not: Dikkat: '80 tüfek ve 2 makineli tüfek' S1'deki Mehmet Arif alıntısında Şubat 1920 Hasanbeyli/9. Tünel çarpışmasına, S4'te ise karargâh baskınına bağlanıyor; sayı oyunda kullanılmamalı.

**haber** — taslak: “{0} savunmasında erkeklerle omuz omuza çarpışan bir {1} kahraman: {2} Rahmiye. (doğrular: Antep, kadın, Tayyar; çeldiriciler: Maraş, Kara, genç)”

> Önerilen metin: {0}'de işgale karşı erkeklerle omuz omuza çarpışan bir {1} kahraman: {2} Rahmiye. (doğrular: Osmaniye, kadın, Tayyar; çeldiriciler: Antep, Kara, genç)

- [ ] **BULUNAMADI** — Doğru cevap 'Antep'
  - Not: Yanlış; doğru yer Osmaniye (S1, S2, S3, S4). 'Antep' artık çeldirici olarak kullanılabilir.
- [ ] **İKİ KAYNAK** — 'kadın' ve 'Tayyar' doğru cevapları
  - K20: “cephede erkeklerle omuz omuza savaşmıştır”
  - K22: “Osmaniyeli Tayyar Rahime”

**biliyor_muydun** — taslak: “Antep savunmasında kadınlar ve çocuklar da cephane taşıma, yemek hazırlama ve yaralılara bakma gibi görevler üstlendi.”

> Önerilen metin: Osmaniye'de kadınlar cephe gerisinde de çalıştı: yufka açıp ekmek yetiştirerek Kuvâ-yi Milliye'ye destek oldular.

- [ ] **TEK KAYNAK** — Antep savunmasında kadınlar ve çocuklar da görev aldı
  - K24: “İhtiyar, genç, kadın hatta çocuk bütün şehir halkı, kazma-kürek gibi elde bulanan araç gereçlerle cepheleri tahkime koştular.”
  - Not: S5 kadın ve çocukların siper/cephe tahkiminde (kazma-kürekle) çalıştığını söylüyor.
- [ ] **BULUNAMADI** — Görevler: cephane taşıma, yemek hazırlama, yaralılara bakma
  - Not: Bu üç görev açıp okuduğum kaynaklarda bu biçimde geçmiyor (yalnızca arama özetlerinde benzer ifadeler görüldü; sayfa açılıp doğrulanmadı). Ayrıca Rahmiye Antepli olmadığı için cümle bu kahramana uygun değil; bkz. ek.biliyor_muydun_onerisi.

**mini_oyun** — taslak: “Sipere Ulaştır: Damlardan ve dar sokaklardan geç. Devriye fenerlerine görünmeden yükünü (su, cephane torbası) sipere ulaştır. Kazanım: Cephede yalnızca askerler değil, bütün bir şehir vardır.”

> Önerilen metin: Dağ yollarından geç. Devriyelere görünmeden yiyecek ve giyeceği Kuvâ-yi Milliye'ye ulaştır.

- [ ] **BULUNAMADI** — Rahmiye kuşatılmış bir şehirde damlar/sokaklar arasından siperlere su ve cephane taşıdı
  - Not: Bu sahne Antep kuşatması varsayımına dayanıyor; Rahmiye için kaynaklarda yok.
- [ ] **TEK KAYNAK** — Milislere yiyecek ve giyecek sağladı (oyun temasına en yakın kaynaklı bilgi)
  - K20: “Milislere yiyecek, giyecek sağlamış cephede erkeklerle omuz omuza savaşmıştır.”
  - Not: Oyun mekaniği korunacaksa tema 'dağ yolundan Kuvâ-yi Milliye'ye yiyecek ulaştırma' olarak değiştirilebilir; yük adları 'yiyecek, giyecek' olabilir. 'Cephane torbası' için kaynak yok.

### Röportaj taslakları

- [ ] **Antep savunmasında kadınlar neler yaptı?**
  - Taslak: [KAYNAKTA YOK]
  - Önerilen yedek soru: Osmaniye'de kadınlar Millî Mücadele'ye nasıl katıldı? → Kadınlar cephe gerisinde yufka açıp ekmek yetiştirdi. Ben ise cephede erkeklerle birlikte savaştım. Milislere yiyecek ve giyecek de sağladım.
- [ ] **"Tayyar" lakabını nasıl aldınız?**
  - Taslak: Hasanbeyli yakınındaki bir çarpışmada iki arkadaşımız ateş altında kalmıştı. Hemen ileri atılıp onları oradan aldım. Bu yüzden bana "Tayyar" dediler.
  - 1. cümle: K20
  - 2. cümle: K20
  - 3. cümle: K20
- [ ] **Siperlerde bir gün nasıl geçerdi?**
  - Taslak: [KAYNAKTA YOK]
  - Önerilen yedek soru: Kuvâ-yi Milliye'ye nasıl katıldınız? → Köyümüze gelen Hüseyin Ağa gönüllü topluyordu. Bana köyde kalıp geri hizmette çalışmamı söyledi. Ben cephede savaşmak istedim ve müfrezeye gönüllü katıldım.

### Ek bulgular

- **1_dogru_yer_ve_cephe:** Taslaktaki 'Antep' YANLIŞ. Okunan dört bağımsız akademik kaynak (S1 Ankara Üniv. Atatürk Yolu, S2 TÜBA, S3 Anadolu Üniv., S4 Gaziantep Üniv. dergisi) Tayyar Rahmiye'yi (Rahime Hatun) Osmaniye'ye bağlıyor. S1'e göre Osmaniye'nin Kaypak nahiyesi Raziyeler köyünde (Kanlıgeçit mahallesi) 1890'da doğdu [tek kaynak]; Hüseyin Ağa'nın (Hayta Hüseyin) Kuvâ-yi Milliye'sine gönüllü katıldı; Şubat 1920'de Hasanbeyli yakınındaki 9. Tünel taarruzuna katıldı [tek kaynak]; Osmaniye merkezindeki (Alibeyli mahallesi, Hacı Ökkeş konağı) Fransız karargâhına yapılan saldırıda şehit düştü. Cephe: Güney Cephesi — Adana/Çukurova (Kilikya) kesimi, Osmaniye (o dönemki adıyla Cebel-i Bereket sancağı). 'alan_etiketi: Cephe — Güney' aynen kalabilir.
- **1b_harita:** Haritada 'Osmaniye' olarak gösterilmeli (konum.ad = "Osmaniye"). Osmaniye il merkezi yaklaşık 37,07° K, 36,25° D; yani Antep'in (yak. 37,07° K, 37,38° D) aynı enleminde, yaklaşık 100 km batısında, Adana ile Antep arasında. harita_x/harita_y değerleri projedeki harita izdüşümüne göre bu koordinattan yeniden hesaplanmalı (y değeri Antep'inkine çok yakın, x daha küçük olmalı). Bu koordinatlar tarihî değil coğrafi genel bilgidir; ekip haritadan kontrol etmeli.
- **1c_ad:** Kaynaklarda ad iki biçimde geçiyor: 'Rahime Hatun' (S1, S2; Osmaniye'deki yerel kullanım) ve 'Tayyar Rahmiye' / 'Tayyar Rahime' (S3, S4). Oyunda 'Tayyar Rahmiye' kalabilir; kartta 'Rahime Hatun olarak da bilinir' notu eklenmesi önerilir.
- **1d_senaryoya_etkisi:** Bölüm I 'Kıvılcım'da Şahin Bey ile aynı şehir (Antep) varsayımı bozuluyor; haritada Güney Cephesi'nde üçüncü bir ışık (Maraş, Antep, Osmaniye) yanacak. OYUN_SENARYOSU.md §5.3, PROJE_BILGILERI.md §7 tablosu, başlık 'Siperdeki Cesaret', duygu anı ('bütün bir şehir vardır') ve bülten sorularındaki 'Tayyar Rahmiye–Antep' eşleştirmeleri de güncellenmeli.
- **2_lakabin_nedeni:** Güvenilir kaynaklarda tek açıklama S1'de: Miralay Mehmet Arif Bey'in anılarına göre Şubat 1920'de Hasanbeyli yakınındaki 9. Tünel taarruzunda, şehit düşen ve ateş altında kalan iki arkadaşı kurtarmak için 'derhal ileri atılarak' onları getirdi; 'bu kahramanca hareketinden dolayı ismine (Tayyar) namı verilmiştir'. Yani lakap cesaretine/atılganlığına bağlanıyor. 'Hızı', 'atıyla uçar gibi saldırması' gibi açıklamalar yalnızca Vikipedi ve haber sitelerinde görüldü; güvenilir kaynakta doğrulanamadı. Durum: tek_kaynak (S6 aynı cümleyi kopyaladığı için sayılmadı).
- **3_sehit_oldugu_tarih_ve_olay:** Olay (iki kaynak: S1, S4; S2 destekliyor): Osmaniye'deki Fransız karargâhına yapılan saldırıda, duraklayan arkadaşlarını cesaretlendirip en önde ilerlerken vurularak şehit düştü; ardından karargâh ele geçirildi. Tarih ÇELİŞKİLİ: S1 '5 Ağustos 1920' diyor ve dipnotunda 'Bazı kaynaklarda taarruzun Temmuzda başladığı yazılmaktadır' notunu düşüyor (Temmuz diyenler arasında Atatürk Araştırma Merkezi yayını F. A. Tansel, İstiklal Harbi'nde Mücahit Kadınlarımız, 1991, s. 43 sayılıyor — bu kitabı ben açıp okuyamadım); S4 '1 Temmuz 1920' diyor. Oyunda güvenli ifade: '1920 yazında'. tarih_etiketi '1920' kalabilir. Raporda bu çelişki tarihsel düşünme örneği olarak kullanılabilir.
- **4_biliyor_muydun:** Antep cümlesi için bulunan tek kaynak S5 (TÜBA): kadın ve çocukların da cepheleri kazma-kürekle tahkim ettiğini söylüyor; 'cephane taşıma, yemek hazırlama, yaralılara bakma' üçlüsü açıp okuduğum kaynaklarda doğrulanamadı. Rahmiye Antepli olmadığı için bu cümle bu bölümden çıkarılmalı (istenirse S5'e uygun biçimde düzeltilip Şahin Bey bölümünde kullanılabilir: 'Antep'te yaşlı, genç, kadın, hatta çocuk bütün şehir halkı kazma kürekle siperleri güçlendirdi.' — tek kaynak, ikinci kaynak gerekli).
- **4b_biliyor_muydun_onerisi:** Öneri A (tek kaynak, S1): 'Osmaniye'de kadınlar cephe gerisinde de çalıştı: yufka açıp ekmek yetiştirerek Kuvâ-yi Milliye'ye destek oldular.' Bonus soru önerisi: 'Osmaniye'de kadınlar cephe gerisinde Kuvâ-yi Milliye'ye nasıl destek oldu?' seçenekler: 'Gazete basarak' / 'Ekmek yetiştirerek' / 'Telgraf çekerek' (doğru: 1). Öneri B (tek kaynak, S1 dipnot 81): Rahime Hatun için 1926'da TBMM'de kırmızı şeritli İstiklal Madalyası teklif edildiği S1'de dipnot olarak geçiyor ('Rahime Hatun’a yönelik kırmızı şeritli istiklal madalyası teklif önerini için bkz: TBMM Zabıt Ceridesi, D.2, C.25, 1926, s.470'); teklifin sonucu okunmadı, bu yüzden kullanılmadan önce TBMM tutanağından doğrulanmalı. Her iki öneri de şu an TEK KAYNAK; 'doğrulandı' işaretlenmeden önce ikinci bağımsız kaynak bulunmalı.
- **5_bulunamayanlar:** Atatürk Ansiklopedisi (ataturkansiklopedisi.gov.tr), TDV İslâm Ansiklopedisi ve Osmaniye Valiliği/Belediyesi/İl Kültür Müdürlüğü sayfalarında Rahmiye'ye ait bir madde/sayfa aramalarda çıkmadı. Osmaniye'de adının bir mahalleye ve bir okula verildiği bilgisi yalnızca arama özetlerinde görüldü; resmî sayfadan doğrulanmadı, kullanılmamalı. Ekibin basılı kaynaklardan bakabileceği eserler (S1'in kaynakçasından): F. A. Tansel, İstiklal Harbi'nde Mücahit Kadınlarımız (Atatürk Araştırma Merkezi, 1991); Zeki Sarıhan, Kurtuluş Savaşı Kadınları; Türk İstiklal Harbi IV. Cilt Güney Cephesi (Genelkurmay, 1966); Damar Arıkoğlu, Hatıralarım.

---

## Kara Fatma

9 kaynak okundu (7 hakemli makale, 2 haber). Doğrulananlar (iki kaynak): Erzurumlu ve adının Fatma Seher olduğu, Mustafa Kemal Paşa ile Sivas'ta görüşüp görev istediği, müfreze kurduğu ve içinde kadınların bulunduğu, Batı Cephesi'nde (İzmit, İnönü, Sakarya, Büyük Taarruz) savaştığı, üsteğmenliğe yükseldiği, Büyük Taarruz'da esir düşüp kaçtığı. Çelişkiler: soyadı (Erden / Savaşır / Savaşgan), müfreze büyüklüğü (350 / 700+43), şehit kadın sayısı (18 / 28), başlangıç rütbesi (onbaşı / çavuş), esaret sayısı (bir / iki) ve yolculuğun çıkış yeri (kaynaklar Erzurum değil İstanbul diyor). 'İstiklal Madalyası' adı yalnızca tek kaynakta (kendi 1944 dilekçesi) geçiyor; ikinci kaynak aranmalı. Bulunamayanlar: Erzurum'dan yola çıkış, köy köy gönüllü toplama, duygu anındaki söz ve 'binlerce kilometre'; Erzurum çıkışlı rota kurulamıyor, onun yerine Sivas → İstanbul → İzmit → Afyonkarahisar → Bursa sırası öneriliyor. Not: akademik kaynakların çoğu aynı kök esere (Tansel) dayandığı için 'iki kaynak' sonuçlarının bağımsızlığı sınırlıdır.

### Kaynaklar

- **K26** — Şefika Kurnaz, Millî Mücadelede Türk Kadını, *Atatürk Araştırma Merkezi Dergisi (DergiPark üzerinden)* (makale). <https://dergipark.org.tr/en/download/article-file/1680925> — Hakemli dergi, PDF tam metni okundu (s. 266-267). Cilt/sayı bilgisi (XII/34, 1996, s. 257-268) PDF'in içinden değil arama sonucundan; ekip künyeyi teyit etmeli. S2 ile AYNI kurumun dergisi; birlikte tek kurum sayıldı.
- **K27** — Tülin İçli, Atatürk ve Türk Kadını, *Atatürk Araştırma Merkezi Dergisi (atamdergi.gov.tr)* (makale). <https://atamdergi.gov.tr/tam-metin-pdf/592/> — Taranmış (resim) PDF; s. 67-68 sayfa görüntüsünden okundu. Künye S5'in kaynakçasına göre: 1992, 9 (25), 67-72. Kara Fatma bölümü F. A. Tansel'in TTK basımı kitabına (1991) dayanıyor. S1 ile aynı kurum.
- **K22** — Esra Sarıkoyuncu Değerli, Millî Mücadele'de Türk Kadını ve İnönü Muharebeleri'nde Çarpışan İki Kadın Kahraman, *Anadolu Üniversitesi Sosyal Bilimler Dergisi, 21 (Özel Sayı), 2021, s. 101-120* (makale). <https://dergipark.org.tr/en/download/article-file/1677335> — Hakemli dergi, PDF tam metni okundu. Kara Fatma paragrafı Tansel (2001, s. 40-56) kaynaklı; yani S2 ile aynı temel esere dayanıyor (kurumlar farklı, kök kaynak ortak).
- **K28** — Akın Aktaş, Sosyal Yardımlar Bağlamında "Nene Hatun-Kara Fatma" Analizi, *Tarih ve Günce: Atatürk ve Türkiye Cumhuriyeti Tarihi Dergisi, Sayı 6 (2020/Kış), s. 243-262* (makale). <https://dergipark.org.tr/tr/download/article-file/961993> — Hakemli dergi, PDF tam metni okundu. Cumhuriyet Arşivi (BCA) belgelerine ve İlknur Bektaş'ın 2013 tarihli kitabına dayanıyor. Kara Fatma'nın 1944 tarihli kendi dilekçesini ve 1954 kanun teklifini aktarıyor.
- **K29** — Zeynep Yamaç Erdoğan, Kurtuluş Savaşı'ndaki Kadın Kahramanların Cumhuriyet Dönemi'ndeki Tematik Bir Müze Bağlamında İncelenmesi, *Gaziantep University Journal of Social Sciences, 2023 Özel Sayı, s. 679-699* (makale). <https://dergipark.org.tr/tr/download/article-file/3412433> — Hakemli dergi, PDF tam metni okundu (s. 684-685). Derleme niteliğinde; Kara Fatma bilgisi popüler bir kitap (Gürkan 2023), İçli 1992 ve Sarıçoban 2017'den aktarılıyor. Tek başına zayıf-orta.
- **K30** — Gülay Sarıçoban, Milli Mücadele'de Anadolu Kadını, *Atatürk Üniversitesi Sosyal Bilimler Enstitüsü Dergisi, 2017, 21(4), s. 1331-1346* (makale). <https://dergipark.org.tr/tr/download/article-file/407136> — Hakemli dergi, PDF okundu. Kara Fatma paragrafı büyük ölçüde S1'in (Kurnaz) aktarımı; S1'den BAĞIMSIZ SAYILMADI. Yalnızca 'üst teğmenlik' cümlesi farklı bir kaynağa (Özcüler 2002) dayanıyor.
- **K31** — Sevilay Özer, Kadınlara Seçme ve Seçilme Hakkı Verilmesinin Türk Kamuoyundaki Yankıları, *DergiPark (aynı makale atamdergi.gov.tr'de de listeleniyor)* (makale). <https://dergipark.org.tr/en/download/article-file/676160> — Yalnızca 17 numaralı dipnotta Kara Fatma geçiyor (ikincil bir kitaptan aktarım). Dergi künyesi PDF'ten teyit edilemedi. Yardımcı kaynak.
- **K32** — Kübra Kara, Atatürk'ün emriyle cephede bir Türk kadını: Üsteğmen Kara Fatma, *Anadolu Ajansı (02.07.2022)* (haber). <https://www.aa.com.tr/tr/yasam/ataturkun-emriyle-cephede-bir-turk-kadini-ustegmen-kara-fatma/2628610> — HABER: zayıf kaynak, iki kaynak sayımına girmez. İçinde Doç. Dr. Esma Torun'un (Kocaeli Üniversitesi) anlatımı var; görüşme ayrıntıları Kara Fatma'nın kendi anlatısına dayanıyor.
- **K33** — Rüveyda Mina Meral, Milli Mücadele'de fedakarlığın ve cesaretin simgesi: Kara Fatma, *Anadolu Ajansı (02.07.2025)* (haber). <https://www.aa.com.tr/tr/kultur/milli-mucadelede-fedakarligin-ve-cesaretin-simgesi-kara-fatma/3619400> — HABER: zayıf kaynak, iki kaynak sayımına girmez. 'Kaynaklardan derlenen bilgi' diyor, kaynak adı vermiyor.

### Bilgiler

**tarih_etiketi** — taslak: “1919–1922”

- [ ] **TEK KAYNAK** — Millî Mücadele'ye katılışı 1919'da (Sivas Kongresi sırasında) başlar
  - K29: “4 Eylül 1919 tarihinde başlamış olan Sivas Kongresi’ne giderek Mustafa Kemal Paşa’ya orduya katılmak istediğini belirtmiş”
  - K32: “Sivas Kongresi devam ederken Atatürk ile görüşmek için İstanbul'dan vapurla Samsun'a, oradan da Sivas'a geçen Erden”
  - Not: Yıl açıkça yalnızca S5'te; S8 haber. S4 'Sivas'ta görüştü' diyor ama tarih vermiyor.
- [ ] **İKİ KAYNAK** — 1922'de (Büyük Taarruz, Bursa'nın kurtuluşu) hâlâ görevdedir
  - K27: “Kara Fatma, 26-30 Ağustos 1922'de Başkumandanlık Meydan Muharebesi'ne de katılarak”
  - K22: “10 Eylül 1922’de Bursa’nın kurtuluşunda “üstteğmen” rütbesiyle müfrezenin başında hazır bulunmuştur”
  - Not: İki ayrı kurum; ancak ikisi de Tansel'in kitabına dayanıyor.

**konum (Erzurum) / haber.dogrular[0]** — taslak: “Erzurum”

- [ ] **İKİ KAYNAK** — Erzurumludur
  - K26: “Erzurumlu Yusuf Ağa'nın kızı olan Fatma Seher Hanım”
  - K22: “Fatma Seher Savaşır (1888-1955) Hanıma, Erzurumlu Kara Fatma denilmiştir.”
  - K28: “nüfus kayıtlarında “Mahi” olarak geçen Erzurumlu Kara Fatma”
  - K27: “Kara Fatma (Fatma Seher) Erzurumlu Yusuf Ağa'nın kızıdır.”
  - Not: Erzurumlu oluşu güvenli. Babasının adı çelişkili (S1/S2: Yusuf Ağa; S4 dipnot 47: 'Erzurum Ergemansur Köyü’nden İbrahim Yahya’nın kızıdır') — oyunda baba adı kullanılmamalı.

**altin_bilgiler[0]** — taslak: “Asıl adı Fatma Seher Erden'dir ve Erzurumludur.”

> Önerilen metin: Asıl adı Fatma Seher'dir ve Erzurumludur.

- [ ] **İKİ KAYNAK** — Adı Fatma Seher'dir
  - K26: “Fatma Seher Hanım, "Kara Fatma" adıyla da anılmaktadır.”
  - K22: “Fatma Seher Savaşır (1888-1955) Hanıma, Erzurumlu Kara Fatma denilmiştir.”
  - K29: “Erzurumlu Yusuf Ağa’nın kızı olan Fatma Seher Hanım”
  - Not: S4'e göre nüfus kaydındaki adı 'Mahi'dir; bu, 'asıl adı' ifadesini tartışmalı kılar.
- [ ] **ÇELİŞKİ** — Soyadı Erden'dir
  - K29: “Kara Fatma (Fatma Seher Erden)”
  - K22: “Fatma Seher Savaşır (1888-1955) Hanıma”
  - K28: “Dikkat çeken bir diğer bilgi ise soyadı kısmına “Savaşgan” yazılmasıdır.”
  - K32: “Fatma Seher Hanım'ın asıl soyadının "Savaşır" olduğunu söyledi.”
  - Not: Üç farklı soyadı geçiyor: Erden (S5; S2'de eşi 'Derviş Erden'), Savaşır (S3, S8'de Doç. Dr. Torun), Savaşgan (S4'te 1944 dilekçesindeki kendi imzası). Güvenli çözüm soyadını yazmamak.
- [ ] **İKİ KAYNAK** — Erzurumludur
  - K26: “Erzurumlu Yusuf Ağa'nın kızı olan Fatma Seher Hanım”
  - K22: “Erzurumlu Kara Fatma denilmiştir”
  - K28: “Erzurumlu Kara Fatma”

**altin_bilgiler[1]** — taslak: “Mustafa Kemal Paşa'nın yanına giderek görev istedi, gönüllülerden oluşan bir milis müfrezesi kurdu.”

> Önerilen metin: Sivas'ta Mustafa Kemal Paşa ile görüşüp görev istedi ve bir milis müfrezesi kurdu.

- [ ] **İKİ KAYNAK** — Mustafa Kemal Paşa'ya giderek görev istedi
  - K29: “Sivas Kongresi’ne giderek Mustafa Kemal Paşa’ya orduya katılmak istediğini belirtmiş”
  - K28: “Mustafa Kemal Paşa ile Sivas’ta görüşmüş ondan aldığı yetki ve emirle İstanbul’a gitmişti.”
  - K27: “bir gurup kadınla Anadolu'ya geçerek Atatürk'ten kendilerini görevlendirmesini istemiştir”
- [ ] **İKİ KAYNAK** — Görüşme Sivas'ta oldu
  - K28: “Mustafa Kemal Paşa ile Sivas’ta görüşmüş”
  - K29: “4 Eylül 1919 tarihinde başlamış olan Sivas Kongresi’ne giderek”
  - Not: İki ayrı dergi (Tarih ve Günce; Gaziantep Üniv.). S8 ve S9 haberleri de Sivas diyor. S2 yer adı vermiyor. Ayrıntı için 'ek' bölümüne bakın.
- [ ] **İKİ KAYNAK** — Bir milis müfrezesi kurdu / komuta etti
  - K22: “Fatma Seher Hanım, oluşturduğu müfrezesiyle İzmit ve çevresinde”
  - K28: “kendisine Milis Subayı unvanı verilmiş olan Erzurum’lu Milis Kara Fatma”
  - K29: “700 erkeğin ve 43 kadının oluşturduğu birliği komuta etmiştir”
  - Not: Birliğin büyüklüğü çelişkili: S4 (1954 kanun teklifi) ve AA haberleri 350; S5 700 erkek + 43 kadın; S4 ilk kuruluşta 15 kişilik çete. Oyunda sayı verilmemeli.
- [ ] **TEK KAYNAK** — Müfreze gönüllülerden oluşuyordu
  - K29: “Fatma Seher Erden Kurtuluş Savaşı’nda gönüllü olarak katıldığı ordudaki vazifesine “onbaşı” rütbesiyle başlamış”
  - Not: Kaynak kendisinin gönüllü katıldığını söylüyor; müfreze üyelerinin 'gönüllü' olduğu açık bir cümleyle hiçbir kaynakta geçmiyor (milis/çete nitelemesi var). 'Gönüllülerden oluşan' ifadesi çıkarılabilir.

**altin_bilgiler[2]** — taslak: “Batı Cephesi'nde savaştı. Gösterdiği başarılar nedeniyle rütbe ve İstiklal Madalyası aldı.”

> Önerilen metin: Batı Cephesi'nde savaştı. Üsteğmenliğe kadar yükseldi ve İstiklal Madalyası aldı.

- [ ] **İKİ KAYNAK** — Batı Cephesi'nde (İzmit çevresi, İnönü, Sakarya, Büyük Taarruz) savaştı
  - K27: “Kara Fatma 28 Haziran 1921'de İzmit'in düşmandan kurtarılmasına kadar orada kalmıştır.”
  - K22: “Ayrıca İnönü ve Sakarya’da da düşmanla vuruştu.”
  - K26: “Millî Mücadele'de oğlu ile birlikte çarpışmış, İzmit’te görev yapmıştır.”
  - Not: 'Batı Cephesi' sözü akademik kaynaklarda aynen geçmiyor (S8 haberde geçiyor); sayılan yerlerin hepsi Batı Cephesi'ndedir.
- [ ] **İKİ KAYNAK** — Rütbe aldı; ulaştığı rütbe üsteğmenliktir
  - K27: “düşmana esir düşmüş ve kaçmayı başardıktan sonra üsteğmenliğe terfi etmiştir.”
  - K22: ““üstteğmen” rütbesiyle müfrezenin başında hazır bulunmuştur”
  - K30: “bu kahraman kadın, üst teğmenliğe kadar terfi ettirilmiş”
  - K29: ““onbaşı” rütbesiyle başlamış, kimi kaynaklara göre “teğmen” kimi kaynaklara göre ise; “üsteğmen” rütbesiyle emekli olmuştur.”
  - K28: “kahramanlıklarından dolayı teğmen rütbesine yükseltilmişti.”
  - Not: Rütbenin milis rütbesi olduğu anlaşılıyor (S4, 1954 kanun teklifi: 'Milis Subayı unvanı'). Başlangıç rütbesi çelişkili: S5 ve S8 onbaşı, S7 çavuşluk. Güvenli ifade: 'üsteğmenliğe kadar yükseldi'.
- [ ] **TEK KAYNAK** — İstiklal Madalyası aldı
  - K28: “milli orduda sepkat eden hizmetlerimden dolayı istiklal madalyasıyla taktim edilmiş Kara Fatmayım.”
  - K26: “Cumhuriyet sonrasında madalya ile ödüllendirilmiştir.”
  - Not: Madalyanın ADI yalnızca S4'te, Kara Fatma'nın 1944 tarihli kendi dilekçesinde (arşiv belgesi BCA 30-10-0-0/197-349-20) geçiyor. S1 madalya aldığını doğruluyor ama adını vermiyor. İki AA haberi madalyadan söz etmiyor. Madalya aldığı = iki kaynak; adının İstiklal Madalyası olduğu = tek kaynak. Ekip ikinci kaynak için Tansel (TTK, 1991) ve Bektaş (2013) kitaplarına bakmalı.

**paneller[0]** — taslak: “Erzurum. Fatma, Millî Mücadele haberlerini dinler ve yola çıkmaya karar verir.”

> Önerilen metin: Erzurumlu Fatma Seher, Millî Mücadele'ye katılmaya karar verir.

- [ ] **ÇELİŞKİ** — Millî Mücadele'ye katılmak için Erzurum'dan yola çıktı
  - K26: “Mütareke’den sonra Erzurum'a dönmüştür.”
  - K32: “İstanbul'dan buraya onunla konuşmak için geldiğini”
  - K27: “eşinin ölümünden sonra da bir gurup kadınla Anadolu'ya geçerek”
  - Not: S1 Mütareke'den sonra Erzurum'a döndüğünü söylüyor ama oradan Sivas'a gittiğini söylemiyor. S8 ve S9 (haber) yolculuğun İstanbul'dan başladığını (İstanbul–Samsun–Sivas) söylüyor; S2 'Anadolu'ya geçerek' diyor (bu da İstanbul çıkışını düşündürür). 'Erzurum'dan yola çıktı' iddiası hiçbir kaynakta açıkça yok.
- [ ] **BULUNAMADI** — Erzurum'da haberleri dinleyip karar verdi
  - Not: Sahne kurgusal; kaynak yok.

**paneller[1]** — taslak: “Uzun bir yolculuk yapar. Mustafa Kemal Paşa'nın karşısına çıkıp görev ister.”

> Önerilen metin: Sivas'a gider. Mustafa Kemal Paşa ile görüşüp görev ister.

- [ ] **İKİ KAYNAK** — Görüşmenin yeri Sivas'tır
  - K28: “Mustafa Kemal Paşa ile Sivas’ta görüşmüş”
  - K29: “Sivas Kongresi’ne giderek Mustafa Kemal Paşa’ya orduya katılmak istediğini belirtmiş”
- [ ] **TEK KAYNAK** — Uzun bir yolculuk yaptı
  - K32: “İstanbul'dan vapurla Samsun'a, oradan da Sivas'a geçen Erden”
  - Not: Yalnızca haber kaynağında (S8, S9 aynı cümle). Güzergâh İstanbul–Samsun–Sivas; Erzurum değil.

**paneller[2]** — taslak: “Köy köy dolaşıp gönüllü toplar. Müfrezesinde kadınlar da vardır.”

> Önerilen metin: Bir müfreze kurar. Müfrezesinde kadınlar da vardır.

- [ ] **BULUNAMADI** — Köy köy dolaşıp gönüllü topladı
  - K28: “Topkapılı Pire Mehmet ve Laz Tahsin ile birlikte 15 kişilik bir çete kurdu ve daha sonra Milli Mücadele’ye katıldı.”
  - Not: Köy köy dolaşma anlatısı hiçbir kaynakta yok. Kaynaklara göre ilk birliğini Sivas dönüşü İstanbul'da 15 kişiyle kurdu (S4; S8 haber de aynı). Mini oyundaki 'köy haritası' açıkça kurgusal olarak işaretlenmeli.
- [ ] **İKİ KAYNAK** — Müfrezesinde kadınlar da vardı
  - K22: “Müfrezesindeki kadınlardan 28’i şehit düştü.”
  - K29: “700 erkeğin ve 43 kadının oluşturduğu birliği komuta etmiştir”
  - K27: “savaşlarına katılıp kendisi yaralanmış, 18 kadın da şehit olmuştur.”
  - Not: Kadınların bulunduğu güvenli. Sayılar çelişkili (şehit kadın: S2 ve S5'te 18, S3'te 28; toplam kadın: S5'te 43). Oyunda sayı verilmemeli.

**paneller[3]** — taslak: “Batı Cephesi. Müfreze cephede görev yapar.”

- [ ] **İKİ KAYNAK** — Müfreze Batı Cephesi'ndeki muharebelerde görev yaptı
  - K22: “oluşturduğu müfrezesiyle İzmit ve çevresinde”
  - K27: “Daha sonra Birinci İnönü”
  - Not: S2'deki tam cümle Birinci ve İkinci İnönü savaşlarına katıldığını söylüyor. Dikkat: S2 ve S5, Birinci İnönü için '21 Şubat-12 Mart 1921' tarihini veriyor; bu tarih genel kabul gören Ocak 1921 tarihiyle uyuşmuyor — oyunda muharebe tarihi bu kaynaklardan alınmamalı.

**paneller[4]** — taslak: “Göğsüne İstiklal Madalyası takılır.”

> Önerilen metin: Hizmetleri nedeniyle İstiklal Madalyası ile ödüllendirilir.

- [ ] **TEK KAYNAK** — İstiklal Madalyası verildi
  - K28: “istiklal madalyasıyla taktim edilmiş Kara Fatmayım.”
  - K26: “Cumhuriyet sonrasında madalya ile ödüllendirilmiştir.”
  - Not: Madalyanın adı tek kaynak (kendi dilekçesi). 'Göğsüne takılır' biçiminde bir tören sahnesi kaynaklarda yok.

**haber** — taslak: “{0}'lu Fatma Seher Hanım kurduğu {1} ile Batı Cephesi'nde savaştı ve {2} ile ödüllendirildi. (Erzurum / milis müfrezesi / İstiklal Madalyası)”

- [ ] **İKİ KAYNAK** — Erzurumlu Fatma Seher Hanım
  - K26: “Erzurumlu Yusuf Ağa'nın kızı olan Fatma Seher Hanım”
  - K22: “Erzurumlu Fatma Seher Hanım, Büyük Taarruz’a da katılmış”
- [ ] **İKİ KAYNAK** — Kurduğu milis müfrezesiyle savaştı
  - K22: “oluşturduğu müfrezesiyle İzmit ve çevresinde”
  - K28: “Milli Mücadeleye çete kumandanı olarak katılmış ve bu hizmet mukabili kendisine Milis Subay unvanı verilmiş”
- [ ] **TEK KAYNAK** — İstiklal Madalyası ile ödüllendirildi
  - K28: “istiklal madalyasıyla taktim edilmiş Kara Fatmayım.”
  - Not: Bkz. altin_bilgiler[2]. Şablon, ikinci kaynak bulunursa aynen kalabilir.

**biliyor_muydun** — taslak: “Bir dönem esir düştüğü ve kaçarak birliğine döndüğü anlatılır.”

> Önerilen metin: Büyük Taarruz sırasında esir düştü ve kaçmayı başardı.

- [ ] **İKİ KAYNAK** — Büyük Taarruz sırasında esir düştü ve kaçtı
  - K27: “düşmana esir düşmüş ve kaçmayı başardıktan sonra üsteğmenliğe terfi etmiştir.”
  - K22: “Büyük Taarruz’a da katılmış, Yunanlılar’a esir düşmüştür. O, kaçarak esaretten kurtuldu”
  - K29: “iki kez Yunan ordusuna esir düşmüş ve her defasında tutulduğu hapishanelerden kaçmayı başarmıştır.”
  - Not: İki ayrı kurumun dergisinde (ATAM; Anadolu Üniv.) geçiyor; ikisi de Tansel'e dayanıyor. Kaç kez esir düştüğü çelişkili (S2, S3: bir kez; S5: iki kez). Kaynaklar bunu 'anlatı' değil olgu olarak veriyor.
- [ ] **TEK KAYNAK** — Kaçtıktan sonra birliğine döndü
  - K33: “Yaklaşık 19 gün süren esaretten sonra yeniden Sürmeli köyündeki ovada müfrezesinin başına geçen Kara Fatma”
  - Not: Yalnızca haber kaynağında. S3 dolaylı destekliyor (kaçtıktan sonra İzmir'e giren süvariler arasında).

**biliyor_muydun.bonus_soru** — taslak: “Anlatılanlara göre Kara Fatma esir düşünce ne yaptı? (doğru: Kaçarak birliğine döndü)”

> Önerilen metin: Kara Fatma esir düşünce ne yaptı? (doğru seçenek: Kaçmayı başardı)

- [ ] **İKİ KAYNAK** — Esir düşünce kaçtı
  - K27: “düşmana esir düşmüş ve kaçmayı başardıktan sonra”
  - K22: “O, kaçarak esaretten kurtuldu”
  - Not: 'Birliğine döndü' kısmı yalnızca haberde; doğru seçenek 'Kaçmayı başardı' yapılabilir.

**duygu_ani** — taslak: “"Ben de vatanım için bir şey yapabilirim" diyerek binlerce kilometre yol giden bir kadın.”

> Önerilen metin: Vatanı için savaşmak isteyen ve bunun için Mustafa Kemal Paşa'dan görev isteyen bir kadın.

- [ ] **BULUNAMADI** — Tırnak içindeki söz ona aittir
  - Not: Bu söz hiçbir kaynakta yok; tırnak işareti gerçek alıntı izlenimi veriyor. Tırnak kaldırılmalı ya da kurgusal olduğu belirtilmeli.
- [ ] **BULUNAMADI** — Binlerce kilometre yol gitti
  - Not: Mesafe bilgisi kaynaklarda yok.

**mini_oyun.rota** — taslak: “Başlangıç: Erzurum → Bitiş: Batı Cephesi (duraklar bekleniyor)”

> Önerilen metin: Bulmaca 'Erzurum'dan yolculuk' yerine 'Kara Fatma'nın görev yerlerini sıraya diz' olarak adlandırılmalı; duraklar için ek.rota'ya bakın.

- [ ] **BULUNAMADI** — Erzurum'dan Batı Cephesi'ne tek bir yolculuk rotası vardır
  - Not: Kaynaklarda Erzurum'dan başlayan bir rota yok. Kaynaklarla kurulabilen sıra görev yerlerinin kronolojisidir (Sivas → İstanbul → İzmit → Afyonkarahisar → Bursa). Ayrıntı 'ek.rota' bölümünde.

### Röportaj taslakları

- [ ] **Erzurum'dan neden yola çıktınız?**
  - Taslak: [KAYNAKTA YOK]
  - Kaynaklarda Erzurum'dan yola çıktığı bilgisi yok; haber kaynakları yolculuğun İstanbul'dan başladığını söylüyor. Soru 'Millî Mücadele'ye neden katılmak istediniz?' biçimine çevrilirse de akademik kaynaklarda gerekçe açıkça geçmiyor (yalnızca K32 haberinde bir uzman yorumu var).
- [ ] **Mustafa Kemal Paşa'ya ne dediniz?**
  - Taslak: Sivas'ta Mustafa Kemal Paşa ile görüştüm. Ona orduya katılmak istediğimi söyledim.
  - 1. cümle: K28, K29
  - 2. cümle: K29
- [ ] **Müfrezenizde kimler vardı?**
  - Taslak: Müfrezemde erkeklerle birlikte kadınlar da vardı. Oğlum da benimle birlikte çarpıştı.
  - 1. cümle: K29, K22
  - 2. cümle: K26 (K29 de aynı bilgiyi veriyor)
- [ ] **İstiklal Madalyası sizin için ne ifade ediyor?**
  - Taslak: Millî orduda yaptığım hizmetlerden dolayı İstiklal Madalyası aldım. Görevimi mücadelenin son gününe kadar karşılıksız yaptım.
  - 1. cümle: K28 (1944 dilekçesi)
  - 2. cümle: K28 (dilekçedeki 'fahri olarak mücadelemizin son gününe kadar' ifadesi)
  - Not: Madalyanın onun için ne 'ifade ettiği' (duygu) kaynaklarda yok; cevap yalnızca olguyu aktarıyor. Tek kaynak.

### Ek bulgular

- **1_gorusmenin_yeri_ve_zamani:** YER: Sivas — iki ayrı hakemli dergide geçiyor (S4: 'Mustafa Kemal Paşa ile Sivas’ta görüşmüş'; S5: 'Sivas Kongresi’ne giderek'), iki AA haberi de (S8, S9) aynı şeyi söylüyor. ZAMAN: 'Sivas Kongresi sırasında' (Kongre 4 Eylül 1919'da başladı — S5). Kesin gün hiçbir kaynakta yok. S8'deki ayrıntılar (üç gün takip, lokantada konuşma, 'Muharebe bana düğündür Paşam' sözü, yazılı belge) Kara Fatma'nın kendi anlatısına dayanır ve yalnızca haber kaynağındadır; oyunda kullanılacaksa 'Anlatılanlara göre' ile başlamalı. S2 (ATAM) yer vermeden 'Anadolu'ya geçerek Atatürk'ten kendilerini görevlendirmesini istemiştir' diyor. Arama sonuçlarında güvenilir olmayan bir sitede 'Erzurum Kongresi' sürümü de görüldü; güvenilir kaynakta doğrulanamadı. ÖNERİ: 'Sivas'ta Mustafa Kemal Paşa ile görüştü' güvenle yazılabilir; gün/ay verilmesin.
- **2_rutbe_ve_madalya:** RÜTBE: Ulaştığı rütbe 'üsteğmen' — S2 (ATAM), S3 (Anadolu Üniv.), S6 (Atatürk Üniv.) ve S7'de geçiyor: iki kaynak. Ara rütbe 'teğmen' (S4, S7). Başlangıç rütbesi çelişkili: 'onbaşı' (S5, S8) / 'çavuşluk' (S7). S5 emeklilik rütbesi için 'kimi kaynaklara göre teğmen, kimi kaynaklara göre üsteğmen' diyor. 1954 tarihli TBMM kanun teklifinde resmî ifade 'Milis Subayı unvanı' (S4; S8-S9'da da aynı tutanak alıntısı). Yani rütbe milis rütbesidir. Güvenli ifade: 'üsteğmenliğe kadar yükseldi'. MADALYA: 'İstiklal Madalyası' adı yalnızca S4'te, kendi 1944 dilekçesinde geçiyor; S1 'Cumhuriyet sonrasında madalya ile ödüllendirilmiştir' diyor (ad yok). Madalyanın verildiği tarih ve tören bilgisi bulunamadı. Durum: madalya aldığı iki kaynak, adının İstiklal Madalyası olduğu tek kaynak.
- **3_mufrezede_kadinlar:** Doğrulandı (iki kaynak): S3 'Müfrezesindeki kadınlardan 28’i şehit düştü'; S5 '700 erkeğin ve 43 kadının oluşturduğu birliği komuta etmiştir'; S2 '18 kadın da şehit olmuştur'. Sayılar birbirini tutmuyor (18 / 28 şehit; birlik 350 ya da 743 kişi), bu yüzden oyunda yalnızca 'Müfrezesinde kadınlar da vardı' denmeli. Ayrıca oğlunun (S1, S5) ve kızının (S3, S6) da yanında olduğu geçiyor.
- **4_esir_dusme_ve_kacma:** İki kaynakla destekleniyor: S2 (ATAM) '26-30 Ağustos 1922'de Başkumandanlık Meydan Muharebesi'ne de katılarak düşmana esir düşmüş ve kaçmayı başardıktan sonra üsteğmenliğe terfi etmiştir'; S3 (Anadolu Üniv.) 'Büyük Taarruz’a da katılmış, Yunanlılar’a esir düşmüştür. O, kaçarak esaretten kurtuldu'. İkisi de Tansel'in kitabına dayandığı için kök kaynak ortaktır. Çelişki: S5 'iki kez' esir düştüğünü söylüyor. Yer ve süre (Afyon'un Sürmeli köyü, yaklaşık 19 gün) yalnızca S9 haberinde. Kaynaklar olayı olgu olarak verdiği için 'anlatılır' demek zorunlu değil; ama temkinli kalmak isterseniz mevcut cümle de yanlış değildir.
- **5_rota:**
  - **kaynaklarda_gecen_yerler_kronolojik:**
    -
      - **yer:** Edirne (Yanık Kışla) — Millî Mücadele ÖNCESİ
      - **zaman:** Balkan Savaşı (S2) / I. Dünya Savaşı (S1) — çelişkili
      - **kaynak:** S1, S2
      - **alinti:** S2: Balkan Savaşı sırasında Edirne'de düşmanın kuşattığı Yanık Kışla'da
      - **not:** Rota için kullanılmamalı.
    -
      - **yer:** Erzurum
      - **zaman:** Mütareke'den sonra (1918 sonrası)
      - **kaynak:** S1 (S6 aynen aktarıyor)
      - **alinti:** Mütareke’den sonra Erzurum'a dönmüştür.
      - **not:** Tek kurum. Buradan nereye gittiği yazılmıyor.
    -
      - **yer:** İstanbul → Samsun → Sivas
      - **zaman:** Sivas Kongresi sırasında (Eylül 1919)
      - **kaynak:** S8, S9 (haber); Sivas için S4, S5
      - **alinti:** S8: İstanbul'dan vapurla Samsun'a, oradan da Sivas'a geçen Erden
      - **not:** İstanbul ve Samsun yalnızca haberde; Sivas iki kaynak.
    -
      - **yer:** İstanbul (dönüş, ilk çetenin kurulması)
      - **zaman:** Sivas görüşmesinden sonra
      - **kaynak:** S4; S8 (haber)
      - **alinti:** S4: ondan aldığı yetki ve emirle İstanbul’a gitmişti.
      - **not:** Akademik kaynak tek (S4).
    -
      - **yer:** İzmit ve çevresi (Kocaeli, Bolu, Düzce)
      - **zaman:** 1920–1921; İzmit'in kurtuluşu 28 Haziran 1921
      - **kaynak:** S2, S3, S1
      - **alinti:** S2: Kara Fatma 28 Haziran 1921'de İzmit'in düşmandan kurtarılmasına kadar orada kalmıştır.
      - **not:** İki kaynak. En sağlam durak.
    -
      - **yer:** İnönü
      - **zaman:** 1921
      - **kaynak:** S2, S3
      - **alinti:** S3: Ayrıca İnönü ve Sakarya’da da düşmanla vuruştu.
      - **not:** S2'deki muharebe tarihleri sorunlu; İzmit'ten önce mi sonra mı net değil.
    -
      - **yer:** Sakarya
      - **zaman:** 1921
      - **kaynak:** S3; S8 (haber)
      - **alinti:** S8: İzmit'in kurtuluşuna önemli destek verdikten sonra, Sakarya ve Büyük Taarruz'a katılmıştır.
      - **not:** Sıra (İzmit → Sakarya → Büyük Taarruz) açıkça yalnızca haberdeki uzman sözünde.
    -
      - **yer:** Afyonkarahisar (Büyük Taarruz / Başkumandanlık Meydan Muharebesi)
      - **zaman:** 26-30 Ağustos 1922
      - **kaynak:** S2, S3 (muharebe); S1 (Afyon Karahisar adı); S9 (haber: Sürmeli köyü)
      - **alinti:** S2: Kara Fatma, 26-30 Ağustos 1922'de Başkumandanlık Meydan Muharebesi'ne de katılarak
      - **not:** Muharebeye katıldığı iki kaynak; 'Afyon' adı S1'de tarihsiz, S9'da haber olarak geçiyor.
    -
      - **yer:** İzmir
      - **zaman:** 9 Eylül 1922
      - **kaynak:** S3; S5 (İzmir cephesi, Karşıyaka)
      - **alinti:** S3: 9 Eylül’de de İzmir’e giren Fahrettin Paşa’nın süvarileri arasında yer almıştır.
      - **not:** Aynı kaynak ertesi gün Bursa'da olduğunu söylüyor; ikisinin birlikte doğru olması zor. Rotada İzmir ile Bursa'yı birlikte kullanmayın.
    -
      - **yer:** Bursa
      - **zaman:** 10 Eylül 1922
      - **kaynak:** S3; S9 (haber)
      - **alinti:** S3: 10 Eylül 1922’de Bursa’nın kurtuluşunda “üstteğmen” rütbesiyle müfrezenin başında hazır bulunmuştur
      - **not:** Akademik kaynak tek (S3). ATAM dergisinde bu konuda ayrı bir makale var (Kalıpçı 1998, 'Bursa'nın Kurtuluşuna İmza Atmış Bir Mücahit Kadınımız Kara Fatma') ama tam metni açılamadı; ekip bulmalı.
    -
      - **yer:** Adana, Dinar, Nazilli, Sarayköy, Tire
      - **zaman:** tarihsiz
      - **kaynak:** S1 (S6 ve S5 aktarıyor)
      - **alinti:** Millî Mücadele'de Adana, Dinar, Afyon Karahisar, Nazilli, Sarayköy ve Tire’de asker olarak çalışmıştır.
      - **not:** Tarih olmadığı için sıraya konamaz; rotada kullanılmamalı.
  - **onerilen_guvenli_sira:**
    - Sivas
    - İstanbul
    - İzmit
    - Afyonkarahisar
    - Bursa
  - **kisa_surum_3_durak:**
    - Sivas
    - İzmit
    - Afyonkarahisar
  - **gerekce:** Sivas (Eylül 1919, görüşme) → İstanbul (dönüş ve ilk çete; S4) → İzmit çevresi (28 Haziran 1921'e kadar; S2, S3) → Afyonkarahisar/Büyük Taarruz (Ağustos 1922; S2, S3) → Bursa (10 Eylül 1922; S3). Tarihler birbirini izlediği için sıra kaynaklarla kurulabiliyor. En sağlam üçlü Sivas → İzmit → Afyonkarahisar'dır (her biri iki kaynak). İstanbul ve Bursa durakları akademik olarak tek kaynaklıdır.
  - **uyari:** Oyundaki 'Erzurum'dan Batı Cephesi'ne giden duraklar' çerçevesi kaynaklarla KURULAMIYOR: Erzurum çıkışlı bir yolculuk hiçbir kaynakta anlatılmıyor ve haber kaynaklarına göre Sivas yolculuğu İstanbul'dan başlıyor. Bulmacanın başlangıcı 'Erzurum' yerine 'Sivas' yapılmalı ya da başlık 'görev yerlerini sıraya diz' olmalı. Erzurum yalnızca doğum yeri olarak kalmalı.
- **diger_notlar:** (a) Baba adı çelişkili (Yusuf Ağa / İbrahim Yahya) ve nüfus adı 'Mahi' (S4) — oyunda kullanılmasın. (b) 'Kara Fatma' adını Mustafa Kemal Paşa'nın verdiği S3, S4, S6'da geçiyor; S5 'öne sürülmektedir' diye temkinli yazıyor ve bu adın 19. yüzyıldan beri savaşan kadınlar için ortak ad olduğunu belirtiyor. (c) Açılamayan / kullanılamayan kaynaklar: Atatürk Ansiklopedisi'nde madde bulunamadı; Torun Çelik 2016 (Turkish Studies) tam metni ve Kalıpçı 1998 (ATAM Dergisi sayı 42) açılamadı; academia.edu 403 verdi. Bu ikisi konunun en ayrıntılı akademik kaynakları, ekibin kütüphaneden bulması önerilir. (d) Dil: kaynak alıntılarında 'düşman' sözcüğü geçiyor; oyun metninde 'işgal kuvvetleri' kullanılmalı.

---

## Gördesli Makbule

12 kaynak açıldı (4 akademik makale/özet, 2 ansiklopedi maddesi, 1 TTK kitap tanıtımı, 3 resmî kurum sayfası, 2 haber). İki bağımsız kaynakla doğrulananlar: Gördesli olması, eşinin adı (Usturumcalı Halil Efe), Yunan işgal kuvvetlerine karşı akıncı müfrezelerinde savaşması, 17 Mart 1922'de Kocayayla'da şehit düşmesi ve Kuvâ-yi Milliye'nin genel tanımı. Çelişkili olanlar: tarih etiketi (taslak 1919–1921; kaynaklara göre 1921–1922), 'eşiyle birlikte' katılma (kaynaklarda eşinin ardından), evlilik tarihi (Temmuz 1921 / Eylül 1920), Kocayayla'nın hangi ilçeye bağlandığı ve Gördes'in 'köy' denmesi. Bulunamayanlar: 'efe kıyafeti' (hiçbir kaynakta yok; yalnızca 'Makbule Efe' lakabı ve haberlerde siyah pantolon-manto-çizme tarifi var) ve 'dağ yollarını çok iyi bilir' ifadesi. Bu yüzden altın bilgi 2, panel 2-3, haber şablonu ve 2. röportaj sorusu için yeni metin önerildi; 2. röportaj sorusunun cevabı [KAYNAKTA YOK].

### Kaynaklar

- **K34** — Şeyma Özelmacı, Uğur Çakır, Kadın Kahramanlarımızdan Bir Milis; Gördesli Makbule, *Takvim-i Vekayi dergisi, Cilt 7, No 1, 2019, s. 1-23 (DergiPark)* (makale). <https://dergipark.org.tr/tr/download/article-file/692621> — Tam metin PDF indirilip okundu. DergiPark'ta yayımlanan dergi makalesi. Makbule bölümü ikincil kaynaklara dayanıyor (İ. Çiçek 1998, Z. Sarıhan 2009, Büyük Larousse); bazı ayrıntıları 'rivayet' diye kendisi belirtiyor. Makale sayfası: https://dergipark.org.tr/tr/pub/takvim/issue/44522/536035
- **K35** — İsmail Oğuz, Nurettin Gülmez, Demirci Kaymakamı İbrahim Ethem Bey ve Demirci Akıncıları, *Celal Bayar Üniversitesi Sosyal Bilimler Dergisi, Cilt 14, Sayı 1, Mart 2016 (DergiPark)* (makale). <https://dergipark.org.tr/tr/download/article-file/229315> — Tam metin PDF indirilip okundu. Üniversite dergisi, doktora tezinden türetilmiş; birincil kaynağı İbrahim Ethem Akıncı'nın TTK'den çıkan hatıratı (Demirci Akıncıları). En güçlü kaynak. Sayfa aralığı (427-468) yalnızca arama sonucunda görüldü, PDF'ten doğrulanmalı. Makale sayfası: https://dergipark.org.tr/tr/pub/cbayarsos/issue/24868/262787
- **K36** — Milli Mücadele Kahramanı Şehit Makbule Hanım, *T.C. Gördes Kaymakamlığı* (kurumsal_web). <http://www.gordes.gov.tr/milli-mucadele-kahramani-sehit-makbule-hanim> — Resmî kaymakamlık sayfası (ikincil kaynak). Kaynak göstermiyor, anlatı diliyle yazılmış. Alıntılar WebFetch aracının verdiği kısa birebir alıntılardır; ekipçe sayfadan gözle kontrol edilmeli.
- **K37** — Demirci Akıncıları 12. Müfreze Komutanı Şehit Usturumcalı Halil Efe, *T.C. Selendi Kaymakamlığı* (kurumsal_web). <https://www.selendi.gov.tr/demirci-akincilari-12-mufreze-komutani-sehit-usturumcali-halil-efe> — Resmî kaymakamlık sayfası (ikincil). İbrahim Ethem Akıncı'nın 'Demirci Akıncıları' hatıratına dayandığını belirtiyor. Alıntılar WebFetch aracından; gözle kontrol edilmeli.
- **K38** — Ahmet Bayram, Gördes'in kızı Makbule Hanım, şehadetinin 100. yılında anılıyor, *Anadolu Ajansı (16 Mart 2022)* (haber). <https://www.aa.com.tr/tr/kultur-sanat/gordesin-kizi-makbule-hanim-sehadetinin-100-yilinda-aniliyor/2537629> — Haber; ZAYIF kaynak, iki kaynak sayımına girmez. İbrahim Ethem Bey'in hatıratına ve Balıkesir Üniversitesi okutmanı Zekeriya Özdemir'in araştırmalarına dayandığını söylüyor. Kıyafet tarifinin bulunduğu tek açılabilen sayfalardan biri.
- **K39** — Av. Erol Türk, Kuvayı Milliye Kahramanı Makbule Efe, *Cumhuriyet gazetesi, Olaylar ve Görüşler (24.03.2019)* (haber). <https://www.cumhuriyet.com.tr/yazarlar/olaylar-ve-gorusler/kuvayi-milliye-kahramani-makbule-efe-1310300> — Gazete köşe yazısı; kaynak göstermiyor, ZAYIF kaynak, iki kaynak sayımına girmez. Kendi içinde çelişkili (evlilik Eylül 1920 ama Kasım 1921'de 'iki aylık evli').
- **K40** — İbrahim Ethem Akıncı, Demirci Akıncıları (4. baskı, 2020) – tanıtım PDF'i: künye ve içindekiler, *Türk Tarih Kurumu Yayınları, XVI. Dizi - Sayı 333* (kitap). <https://www.ttk.gov.tr/karekod/DEMIRCIAKINCILARI.pdf> — Birincil kaynak (komutanın hatıratı), TTK yayını. Çevrim içi PDF yalnızca künye + içindekiler içeriyor; kitabın metni OKUNAMADI. İçindekiler satırı Koca Yayla baskınını ve Makbule Hanım'ın şehadetini (s. 204-212) gösteriyor. PDF'in metin katmanında 'ı' harfleri düşmüş; alıntıda 'ı'lar tarafımdan yerine kondu. Kitabın kendisi kütüphaneden bulunmalı (s. 211-214, 241-243).
- **K41** — Günver Güneş, Kuvâ-yı Millîye (Atatürk Ansiklopedisi maddesi), *Atatürk Araştırma Merkezi Başkanlığı – Atatürk Ansiklopedisi* (ansiklopedi). <https://ataturkansiklopedisi.gov.tr/detay/546/Kuv%C3%A2-y%C4%B1-Mill%C3%AEye> — En üst öncelikli kaynak türü. Sayfa JavaScript ile yüklendiği için WebFetch boş döndü; madde metni sitenin kendi veri adresinden (https://apiko.ayk.gov.tr/v1/1/itemPublic/byId/546) alınıp okundu. Alıntılar bu metinden birebirdir.
- **K42** — Yücel Özkaya, Kuva-yı Milliye (makale özeti sayfası), *Atatürk Araştırma Merkezi Dergisi, Cilt VIII, Sayı 24, Temmuz 1992, s. 451-480* (makale). <https://atamdergi.gov.tr/ozet/569/tur> — Yalnızca özet sayfası okunabildi (tam metin PDF taranmış görüntü, metni çıkarılamadı). S8 ile aynı kurum (ATAM) ve tanım cümlesi neredeyse aynı; S8'den BAĞIMSIZ sayılmadı.
- **K43** — Sezai Kürşat Ökte, Milli Mücadele Başlarken Batı Anadolu'da "Kuvâ-yi Milliye", *Tarih ve Günce dergisi, Sayı 16, 2025, s. 49-86 (DergiPark)* (makale). <https://dergipark.org.tr/tr/pub/tarihvegunce/article/1632852> — Yalnızca DergiPark özet sayfası okundu (tam metin açılmadı). Alıntı WebFetch aracından; gözle kontrol edilmeli. S8'den bağımsız kurum.
- **K44** — Şehit Makbule Hanım, *Gördes Belediyesi* (kurumsal_web). <https://www.gordes.bel.tr/icerik/sehit-makbule-hanim> — Resmî belediye sayfası (ikincil). Metin S3 (kaymakamlık) ile büyük ölçüde aynı görünüyor; S3'ten BAĞIMSIZ sayılmadı.
- **K45** — Kuvâ-yi Milliye (gönderme maddesi), *TDV İslâm Ansiklopedisi* (ansiklopedi). <https://islamansiklopedisi.org.tr/kuva-yi-milliye> — Yalnızca tek satırlık gönderme maddesi (asıl bilgi 'Millî Mücadele' maddesinde). Kısa tanım dışında içerik yok.

### Bilgiler

**tarih_etiketi** — taslak: “1919–1921”

> Önerilen metin: 1921–1922

- [ ] **ÇELİŞKİ** — Makbule'nin mücadelesi 1919–1921 yılları arasındadır
  - K34: “1921 yılı Temmuz sonunda düğünlerini yaparlar. Daha evliliklerinin ikinci ayındayken”
  - K35: “Halil Efenin eşi Gördesli Makbule Efe de daha önce 17 Mart 1922 günü Koca yayla muharebesinde şehit düşmüş”
  - K36: “Tarihler 17 Mart 1922'yi göstermektedir.”
  - K39: “7 Kasım 1921 tarihinde henüz on dokuz yaşında ve iki aylık evliyken eşi Halil Efe ile birlikte”
  - Not: Açılan hiçbir kaynak 1919'da ya da 1920'de müfrezeye katıldığını söylemiyor. Katılma 1921'in ikinci yarısı (S1: Temmuz 1921 sonundaki düğünden yaklaşık iki ay sonra; S6: 7 Kasım 1921 – zayıf), şehadet 17 Mart 1922. Etiket '1919–1921' kaynaklarla uyuşmuyor; bitiş yılı kesinlikle 1922 olmalı.

**altin_bilgiler[0]** — taslak: “Manisa'nın Gördes ilçesindendir. Eşiyle birlikte Kuvâ-yi Milliye'ye katıldı.”

> Önerilen metin: Manisa'nın Gördes ilçesindendir. Eşi Halil Efe'nin ardından Kuvâ-yi Milliye'ye katıldı.

- [ ] **İKİ KAYNAK** — Manisa'nın Gördes ilçesindendir (Gördesli)
  - K34: “Ali Ustalar ailesinden Abdullah Efendinin kızıdır ve 1902 yılında Manisa’nın Gördes kasabasında doğmuştur.”
  - K35: “Halil Efenin eşi Gördesli Makbule Efe”
  - K38: “Gördes'te 1902'de dünyaya gelen Makbule Hanım”
  - Not: Doğum yılı 1902: S1 (Büyük Larousse'a dayanarak), S4, S5, S6'da geçiyor.
- [ ] **İKİ KAYNAK** — Evliydi; eşi Halil Efe'dir (Usturumcalı Halil Efe)
  - K34: “o düğüne çete olarak bilinen Usturumcalı Halil Efe’de katılır.”
  - K35: “12.Akıncı Müfrezesi Kumandanı Usturumcalı Halil Efe olup Gördes ve Salihli kazalarından sorumludur.”
  - K37: “Demirci Akıncıları 12. Müfreze Komutanı”
  - K38: “Usturumcalı Halil Efe ile evlenen Makbule Hanım”
  - Not: Eşinin adı bütün kaynaklarda aynı: Halil Efe. Lakabı S1, S2, S4, S5'te 'Usturumcalı', S6'da 'Ustrumcalı' yazılıyor.
- [ ] **İKİ KAYNAK** — Kuvâ-yi Milliye'ye (Demirci Akıncı Müfrezelerine) katıldı
  - K35: “Bunların dışında müfrezelerde yer alanlar şunlardır: Gördesli Makbule Hanım”
  - K34: “Gördesli Makbule gerek kıyafetleri gerek yanından asla ayırmadığı hançeri ve silahları ile gerekse ruhu ile artık tam bir çetecidir.”
  - K38: “Milli Mücadele Dönemi'nde Manisa, Kütahya ve Balıkesir hattında düşmana karşı oluşturulan Kuvayımilliye hareketine katılan”
  - Not: Akademik kaynaklar birliğin adını 'Demirci Akıncıları / Akıncı Müfrezeleri' (S2) ya da 'çete' (S1) diye veriyor; 'Kuvâ-yi Milliye' adlandırması S5 ve S6'da (haber) ve S2'nin dipnotundaki tez adında ('Kuvâ-yı Milliyecilikten Valiliğe') geçiyor. Genel ad olarak kullanılabilir; ama birliğin asıl adı Demirci Akıncıları'dır ve Demirci Kaymakamı İbrahim Ethem Bey'e bağlıdır.
- [ ] **ÇELİŞKİ** — Eşiyle BİRLİKTE katıldı
  - K34: “Bir kaynağa göre Halil Efe evden çıkarken eşi Makbule onu gizlice takip etmiş ve çeteye katılmıştır.”
  - K36: “kocası Milli Mücadele'ye katılmak için evden çıkar çıkmaz hazırlanıp arkasından gizlice onu takip eder”
  - K39: “iki aylık evliyken eşi Halil Efe ile birlikte”
  - Not: Halil Efe zaten müfreze komutanıydı (S2: Mart 1921'de ilk Akıncı Müfrezeleri). S1'e göre iki anlatı var: (a) eşini gizlice izleyerek katıldı, (b) İbrahim Ethem Bey'den izin alarak katıldı. 'Eşiyle birlikte' yerine 'eşinin ardından' demek daha güvenli.

**altin_bilgiler[1]** — taslak: “Yunan işgaline karşı efe kıyafetiyle Kuvâ-yi Milliye birliklerinde savaştı.”

> Önerilen metin: Yunan işgaline karşı Kuvâ-yi Milliye birliklerinde savaştı. Bu yüzden 'Makbule Efe' diye de anılır.

- [ ] **İKİ KAYNAK** — Yunan işgal kuvvetlerine karşı müfrezelerde savaştı
  - K35: “Bu teşkilat yaklaşık 1,5 yıl Yunan işgal kuvvetleri ile gerilla harbi icra etmiştir.”
  - K36: “işgalci Yunan kuvvetlerine karşı mücadele veren”
  - K34: “Makbule son anına kadar düşmanla savaştı.”
  - K38: “Akıncılarla Demirci, Gördes, Simav ve Sındırgı dağlarında dolaşan Makbule Hanım, birçok çarpışmada kahramanca savaştı”
  - Not: S2'deki cümle teşkilatın tümü için; Makbule'nin bu müfrezelerde yer aldığı aynı makalede ayrıca yazıyor.
- [ ] **BULUNAMADI** — Efe kıyafeti giyiyordu
  - K38: “Kendisi siyah pantolon, ceket ve uzun bir manto giyer, ayağında daima çizme ve başında da siyah başlık”
  - K39: “Siyah pantolonu, üstüne giydiği uzun mantosu, ayağında mahmuzlu çizmeleri, başında yüzünü gizleyen siyah başlığı ile”
  - K34: “Gördesli Makbule gerek kıyafetleri gerek yanından asla ayırmadığı hançeri ve silahları ile gerekse ruhu ile artık tam bir çetecidir.”
  - Not: Açılan hiçbir kaynakta 'efe kıyafeti' ya da 'zeybek kıyafeti' ifadesi YOK. Kıyafet tarifi (siyah pantolon, ceket, uzun manto, çizme, siyah başlık) yalnızca haber türü kaynaklarda (S5, S6) geçiyor; S5 bu sözleri komutanı İbrahim Ethem Bey'e dayandırıyor (hatırat: S7, metni okunamadı). 'Efe' sözü ona kıyafet için değil, ad/lakap olarak veriliyor: S2 'Gördesli Makbule Efe', S6 başlığı 'Makbule Efe', İ. Çiçek'in kitabının adı 'Kadın Efe' (S1 kaynakçası). Efe kıyafeti iddiası oyundan çıkarılmalı ya da hatırat kitabından doğrulanana kadar bekletilmeli.

**altin_bilgiler[2]** — taslak: “Çarpışmalardan birinde şehit düştü.”

> Önerilen metin: 17 Mart 1922'de Kocayayla'daki çarpışmada şehit düştü.

- [ ] **İKİ KAYNAK** — Bir çarpışmada/baskında şehit düştü
  - K35: “Halil Efenin eşi Gördesli Makbule Efe de daha önce 17 Mart 1922 günü Koca yayla muharebesinde şehit düşmüş ve şehit düştüğü yere gömülmüştür”
  - K34: “Ateş ortasında kalan Gördesli Makbule düşman kurşunuyla oracıkta şehitlik makamına yükseldi.”
  - K38: “17 Mart 1922'de Kocayayla mevkisinde bir çatışmada şehit düştü”
  - K40: “Koca Yayla’da düşman baskını ve intihar kararı 204. [...] Gördes Kızı Mücahide Makbule Hanım’ın şehadeti 212.”
  - Not: Ölümün biçimi konusunda rivayetler farklı: S1'e göre bir anlatıda düşman kurşunuyla, başka bir anlatıda (Çiçek'e dayanarak) esir düşmesin diye kendi tarafından uzaktan vuruldu. Oyunda ayrıntıya girilmemeli; 'çarpışmada şehit düştü' ifadesi güvenli. S7 alıntısında PDF'te düşen 'ı' harfleri yerine kondu.
- [ ] **İKİ KAYNAK** — Tarih: 17 Mart 1922
  - K35: “17 Mart 1922 günü Koca yayla muharebesinde şehit düşmüş”
  - K36: “Tarihler 17 Mart 1922'yi göstermektedir.”
  - K37: “Koca yayla'da uzaktan gelen ve başına aldığı bir mermi ile şehit olarak sona ermiş (1902-17 Mart 1922).”
  - K38: “17 Mart 1922'de Kocayayla mevkisinde bir çatışmada şehit düştü”
  - Not: S1 müfrezenin 16 Mart 1922'de Kocayayla'ya geldiğini ve baskının gece olduğunu yazıyor ('16 Mart 1922 yılında Çete Kocayayla köyü civarında'); 17 Mart ile çelişmiyor. Tarih konusunda kaynaklar arasında çelişki bulunmadı.
- [ ] **İKİ KAYNAK** — Yer: Kocayayla (Koca Yayla)
  - K35: “Simav-Demirci dağlarında Kocayayla mevkiinde”
  - K36: “Sındırgı, Gördes ve Demirci üçgeninde kalan Koca Yayla mevkiinde”
  - K34: “16 Mart 1922 yılında Çete Kocayayla köyü civarında Yağcıbedir aşiretinin çadırına gelmişti.”
  - K39: “Akhisar-Sındırgı sınırında Koca Yayla'da”
  - Not: Yer adı (Kocayayla) kesin. Hangi ilçeye bağlandığı kaynaklarda farklı tarif ediliyor: S2 çatışmayı 'Sındırgı kırsalı' listesinde sayıyor ama mevkiyi 'Simav-Demirci dağları' diye de anıyor; S3 'Sındırgı, Gördes ve Demirci üçgeni'; 'Akhisar-Sındırgı sınırı' yalnızca zayıf kaynakta (S6). Oyunda ilçe adı vermeden yalnızca 'Kocayayla' denmeli.

**paneller[0]** — taslak: “Gördes'in dağ köyleri. İşgal haberi gelir.”

- [ ] **İKİ KAYNAK** — Gördes Yunan kuvvetlerince işgal edildi / saldırıya uğradı
  - K34: “Çete 20 Mayıs 1921’de Yunan askerlerinin 2000 kişilik bir kuvvetle Gördes’e yaklaştığını duymuştu.”
  - K35: “İbrahim Ethem Bey, Gördes’in önce yağmalanıp ardından ateşe verilerek yakılmasına Kapanca Muharebesi ile karşılık vermiştir.”
  - Not: S2'de ayrıca '14 Temmuz’da Gördes ve 21 Temmuz’da Demirci işgal edildi' cümlesi var; yılı bağlamdan kesinleştiremedim (kullanılacaksa makaleden kontrol edilmeli). Panel tarih vermediği için aynen kalabilir.
- [ ] **TEK KAYNAK** — Bölge dağlıktır
  - K35: “Gayet engebeli ve hatta dağlık olan bu arazide Yunan kuvvetleri tutunamamışlardır.”
  - Not: S1 Gördes'i 'kasaba' diye anıyor; Makbule'nin köylü olduğu yazmıyor.

**paneller[1]** — taslak: “Makbule efe kıyafetini giyer ve eşiyle dağa çıkar.”

> Önerilen metin: Makbule tüfeğini alır, atına biner. Eşi Halil Efe'nin ardından dağlara çıkar.

- [ ] **BULUNAMADI** — Efe kıyafeti giydi
  - Not: Bkz. altin_bilgiler[1]. Kaynaklarda 'efe kıyafeti' yok.
- [ ] **İKİ KAYNAK** — Eşinin ardından dağa çıktı; tüfeği ve atı vardı
  - K36: “yanına elinden hiç ayırmadığı tüfeğini alır, düşmandan ele geçirdiği doru atına biner”
  - K34: “Makbule ise gizlice Halil Efe’yi takip eder.”
  - K38: “Akıncılarla Demirci, Gördes, Simav ve Sındırgı dağlarında dolaşan Makbule Hanım”
  - Not: S1 küçük yaşta ata binmeyi ve atıcılığı öğrendiğini de yazıyor ('ata binmesini, tımar etmesini ve atıcılığı daha küçük yaşta öğrenmiştir').

**paneller[2]** — taslak: “Kuvâ-yi Milliye birlikleri dağ yollarını çok iyi bilir.”

> Önerilen metin: Akıncı müfrezeleri dağlarda dolaşır. İşgal kuvvetleri bu engebeli arazide tutunamaz.

- [ ] **BULUNAMADI** — Birlikler dağ yollarını çok iyi bilirdi
  - Not: Bu ifade açılan kaynaklarda bu biçimde geçmiyor.
- [ ] **İKİ KAYNAK** — Birlikler dağlık arazide baskın/gerilla tarzında savaştı ve işgal kuvvetleri bu arazide tutunamadı
  - K35: “Muharebeler, dağlık arazide nasıl savaşılacağını ve nasıl az kayıpla üstün kuvvetlerin dağıtılabileceğini göstermiştir.”
  - K41: “Kuvâ-yı Milliye dar anlamı ile düzenli ordu birlikleri dışında bir tür gerilla savaşı ile mücadele veren, sevk ve idareleri merkezî bir komutanlığa bağlı olmayan gruplardı.”
  - Not: S2 ayrıca: 'Akıncı Müfrezelerinin ilk görevleri düşman karakollarını basmak, köprüleri havaya uçurmak, telgraf hatlarını kesmek'. Oyunda şiddet sembolik kalacağı için 'dağlık arazi' vurgusu yeterli.

**paneller[3]** — taslak: “Makbule bir çarpışmada şehit düşer.”

> Önerilen metin: Makbule 17 Mart 1922'de Kocayayla'daki çarpışmada şehit düşer.

- [ ] **İKİ KAYNAK** — Çarpışmada şehit düştü; tarih 17 Mart 1922, yer Kocayayla
  - K35: “17 Mart 1922 günü Koca yayla muharebesinde şehit düşmüş ve şehit düştüğü yere gömülmüştür”
  - K36: “Koca Yayla mevkiinde kanlı elbiseleriyle, gözyaşları içinde defnederler”
  - Not: Bkz. altin_bilgiler[2]. Görsel notu (dağ başında siluet) kaynaklarla çelişmiyor: şehit düştüğü yere, dağda gömüldü.

**mini_oyun** — taslak: “Patika parçalarını döndür. Gördes köyünden Kuvâ-yi Milliye kampına kesintisiz bir yol kur. / Kazanım: Kuvâ-yi Milliye birlikleri dağ yollarını çok iyi bilir.”

> Önerilen metin: Patika parçalarını döndür. Gördes'ten dağdaki müfreze kampına kesintisiz bir yol kur. / Kazanım: Müfrezeler dağlık arazide dolaşır; işgal kuvvetleri bu arazide tutunamaz.

- [ ] **ÇELİŞKİ** — Gördes bir 'köy'dür
  - K34: “1902 yılında Manisa’nın Gördes kasabasında doğmuştur.”
  - Not: Kaynakta Gördes 'kasaba' (bugün ilçe). 'Gördes köyü' yerine 'Gördes' denmeli.
- [ ] **TEK KAYNAK** — Müfrezeler dağlarda konaklıyor, işgal karakolları var
  - K35: “Akıncı Müfrezelerinin ilk görevleri düşman karakollarını basmak, köprüleri havaya uçurmak, telgraf hatlarını kesmek”
  - Not: S2'de müfrezelerin toplandığı yerler olarak Kocayayla mevkii ve Yağcı dağındaki Tavak yaylası geçiyor. Kazanım cümlesi için bkz. paneller[2].

**haber** — taslak: “{0}'li Makbule Hanım, {1} birliklerinde {2} kıyafetiyle işgale karşı savaştı. (Gördes · Kuvâ-yi Milliye · efe)”

> Önerilen metin: {0}'li Makbule Hanım, eşi {2} ile {1} birliklerinde işgale karşı savaştı. (Doğrular: Gördes · Kuvâ-yi Milliye · Halil Efe)

- [ ] **İKİ KAYNAK** — Gördesli
  - K34: “1902 yılında Manisa’nın Gördes kasabasında doğmuştur.”
  - K35: “Gördesli Makbule Hanım”
- [ ] **İKİ KAYNAK** — Kuvâ-yi Milliye birliklerinde işgale karşı savaştı
  - K35: “Bunların dışında müfrezelerde yer alanlar şunlardır: Gördesli Makbule Hanım”
  - K38: “Kuvayımilliye hareketine katılan”
  - Not: Bkz. altin_bilgiler[0]: birliğin asıl adı Demirci Akıncıları.
- [ ] **BULUNAMADI** — efe kıyafetiyle
  - Not: Üçüncü boşluk doğrulanamayan bilgiye dayanıyor; değiştirilmeli. Çeldirici 'Erzurum' ve 'Anadolu Ajansı' kalabilir; 'asker' çeldiricisi yeni şablona uymaz.

**biliyor_muydun** — taslak: “Kuvâ-yi Milliye, düzenli ordu kurulmadan önce halkın işgale karşı kendiliğinden oluşturduğu direniş birlikleridir.”

- [ ] **İKİ KAYNAK** — Kuvâ-yi Milliye, işgale karşı kurulan (düzenli olmayan) millî direniş birliklerinin adıdır
  - K41: “Anadolu'nun işgal edildiği dönemde çeşitli yerlerde oluşan millî direniş örgütlerine verilen genel isimdir.”
  - K45: “millî direniş örgütlenmesi”
  - K42: “Kuvâ-yı milliye tabiri tarihimizde 'millî kuvvetler' düzenli olmayan silâhlı birlikler”
  - Not: S8'de ayrıca: 'Kuvâ-yı Milliye tabiri tarihimizde “millî kuvvetler” düzenli olmayan silahlı birlikler ve kuvvetler için kullanılan bir tanımlamadır.' S9, S8 ile aynı kurum olduğu için bağımsız sayılmadı; bağımsız ikinci kaynak S12 (TDV) ve S10.
- [ ] **TEK KAYNAK** — Düzenli ordu yokken ortaya çıktı
  - K41: “İşte Batı Anadolu’da Kuvâ-yı Milliye böyle bir zamanda çözüm olarak gündeme gelmiş ve düzenli bir ordu olmadığı için halk nazarında tepki olarak ortaya çıkmıştır.”
  - Not: S8'de ayrıca: 'düzenli ordu kuruluncaya kadar Batı Cephesinde Yunan ordusunu oyalama görevini başarıyla yerine getirmişlerdir.' Atatürk Ansiklopedisi en üst öncelikli kaynak; ikinci bağımsız kaynak için 8. sınıf ders kitabı eklenebilir (bu araştırmada ders kitabı açılamadı).
- [ ] **İKİ KAYNAK** — Halk tarafından kendiliğinden oluşturuldu
  - K41: “Bu yüzdendir ki vatanı korumadan ibaret olan esas görev, doğrudan doğruya milletin kendisine yöneltilmiş bulunmaktadır.”
  - K43: “hiç bir yerden talimat almadan oluşturulan Kuva-yi Milliye”
  - Not: İnce ayrım: S8'e göre örgütlenme yalnız halkla değil, subaylar ve yöneticilerle birlikte oldu: 'Direniş hareketleri Millî Mücadeleye inanan komutanların, mülki amirlerin ve halkın ileri gelenlerinin işbirliği ile teşkilatlanmış'. 'Kendiliğinden' sözü S10 ile destekleniyor; cümle kabul edilebilir. Bonus sorunun doğru şıkkı ('İşgale karşı çıkan halk') kaynaklarla uyumlu.

### Röportaj taslakları

- [ ] **Kuvâ-yi Milliye ne demek?**
  - Taslak: Kuvâ-yi Milliye, 'millî kuvvetler' demektir. İşgale karşı kurulan millî direniş birliklerine bu ad verildi. Düzenli ordu olmadığı için halkın tepkisiyle ortaya çıktı.
  - 1. cümle: K41 (K42)
  - 2. cümle: K41, K45
  - 3. cümle: K41, K43
- [ ] **Neden efe kıyafeti giydiniz?**
  - Taslak: [KAYNAKTA YOK]
- [ ] **Dağlarda nasıl hayatta kaldınız?**
  - Taslak: Kar kış demeden, nerede yer bulduysak orada yattık. Bazen günlerce aç ve susuz kaldık. Düşman yerimizi öğrenmesin diye çoğu zaman ateş yakamadık.
  - 1. cümle: K34
  - 2. cümle: K34
  - 3. cümle: K34

### Ek bulgular

- **1_esinin_adi:** Bütün kaynaklarda eşi 'Halil Efe'. Tam anılışı 'Usturumcalı Halil Efe' (S1, S2, S4, S5; S6'da 'Ustrumcalı' yazımı). Görevi: Demirci Akıncıları 12. Akıncı Müfrezesi Kumandanı, Gördes ve Salihli kazalarından sorumlu (S2, S4). Makbule'den iki ay sonra, 17 Mayıs 1922'de Selendi Kınık Damları Muharebesi'nde şehit düştü (S2: 'Halil Efe, 17 Mayıs 1922 Çarşamba günü yapılan Selendi Kınık Damları Muharebesinde şehit düşmüş'; S1 ve S4 de aynı tarihi veriyor). Durum: iki_kaynak. Evlilik tarihi ÇELİŞKİLİ: S1 '1921 yılı Temmuz sonunda düğünlerini yaparlar'; S6 (zayıf) '1920 yılının Eylül ayında'. Evlilik yeri S3'e göre Demirci ('Demirci'de evlenirler'). Oyunda evlilik tarihi verilmemeli.
- **2_sehadet_yil_tarih_yer:** Tarih: 17 Mart 1922 – S2 (üniversite dergisi), S3 ve S4 (iki ayrı kaymakamlık), S5 (AA haber) aynı tarihi veriyor; çelişki yok (iki_kaynak). S1 müfrezenin 16 Mart 1922'de Kocayayla'ya geldiğini ve gece baskına uğradığını anlatıyor. Yer: Kocayayla / Koca Yayla (iki_kaynak). İlçe tarifi farklı: S2 çatışmayı 'Sındırgı kırsalı' başlığında sayıyor, mevkiyi 'Simav-Demirci dağlarında Kocayayla mevkii' ve 'Büyükyayla (Kocayayla)' diye de anıyor; S3 'Sındırgı, Gördes ve Demirci üçgeninde kalan Koca Yayla mevkii'; S1 'Kocayayla köyü civarında Yağcıbedir aşiretinin çadırı'. 'Akhisar' yalnızca zayıf kaynak S6'da ('Akhisar-Sındırgı sınırında') geçiyor; güvenilir kaynaklarda Akhisar yok. Öneri: yalnızca 'Kocayayla' de, ilçe adı verme. Mezar: şehit düştüğü yere gömüldü (S2); kabri 78 yıl sonra Haziran 2000'de bulundu (S3; S5'e göre Zekeriya Özdemir'in çalışmasıyla, 'Sındırgı ilçesinden geçen Harlak Deresi üzerindeki Dereçatı mevkisinde'). Ölümün biçimi için iki rivayet var (S1): düşman kurşunu / esir düşmemesi için kendi tarafından vurulma; S7 içindekilerinde 'intihar kararı' başlığı da var. S2 dipnotunda sözlü tanıklık: 'Kocayayla baskını Çerkezlerin taarruzudur.' Bu ayrıntılar oyuna girmemeli.
- **3_efe_kiyafeti:** Açılan kaynakların HİÇBİRİNDE 'efe kıyafeti' ya da 'zeybek kıyafeti' ifadesi geçmiyor. Kıyafet tarifi yalnızca haber türü kaynaklarda: S5 (AA, İbrahim Ethem Bey'in hatıratına atıfla) 'Kendisi siyah pantolon, ceket ve uzun bir manto giyer, ayağında daima çizme ve başında da siyah başlık'; S6 benzerini yazıyor. S1 yalnızca 'gerek kıyafetleri ... ile ... artık tam bir çetecidir' diyor. 'Efe' sözü ona lakap/ad olarak veriliyor: S2 'Gördesli Makbule Efe', S6 'Makbule Efe', Çiçek'in kitabı 'Kadın Efe'. Sonuç: 'efe kıyafetiyle savaştı' doğrulanamadı; altın bilgi 2, panel 2, haber şablonunun 3. boşluğu ve röportajın 2. sorusu bu bilgiye dayanıyor ve değişmeli. Güvenli seçenek: 'Makbule Efe diye anılır'. Kıyafet tarifi kullanılmak istenirse TTK'nin 'Demirci Akıncıları' kitabından (S7, s. 211-214 civarı) doğrudan doğrulanmalı. Bölüm başlığı 'Efe Kadın' lakap anlamında kalabilir; portre çizimindeki 'efeli' kıyafet ise 'temsilî çizim' etiketiyle bile kaynakla uyuşmuyor, ekip karar vermeli. Röportaj 2. soru için öneri: 'Size neden Makbule Efe diyorlar?' yerine cevabı kaynakta olan bir soru, örn. 'Müfrezeye nasıl katıldınız?' (cevap S1/S3'ten yazılabilir: eşinin ardından gizlice gitti / İbrahim Ethem Bey'den izin aldı – iki anlatı var, 'Anlatılanlara göre' ile başlamalı).
- **4_kuva_yi_milliye_tanimi:** Ana kaynak: Atatürk Ansiklopedisi (ATAM), 'Kuvâ-yı Millîye' maddesi, yazar Günver Güneş (S8): 'Anadolu'nun işgal edildiği dönemde çeşitli yerlerde oluşan millî direniş örgütlerine verilen genel isimdir.' ve '...düzenli bir ordu olmadığı için halk nazarında tepki olarak ortaya çıkmıştır.' Destekleyici: Yücel Özkaya, 'Kuva-yı Milliye', Atatürk Araştırma Merkezi Dergisi, C. VIII, S. 24, 1992, s. 451-480 (S9; aynı kurum, yalnızca özeti okundu); S. K. Ökte, Tarih ve Günce 2025 (S10; yalnızca özet); TDV İslâm Ansiklopedisi gönderme maddesi (S12). MEB 8. sınıf İnkılap Tarihi ders kitabı bu araştırmada açılamadı; ekip elindeki ders kitabından sayfa numarasıyla ikinci kaynak olarak ekleyebilir. Dikkat: Makbule müfrezeye 1921'de, yani düzenli ordu kurulduktan sonra katıldı; bağlı olduğu Demirci Akıncıları işgal bölgesinin içinde/sınırında TBMM'ye bağlı kaymakamın yönettiği gönüllü akıncı müfrezeleriydi (S2). 'Biliyor muydun' cümlesindeki 'düzenli ordu kurulmadan önce' ifadesi genel tanım için doğru, ama Makbule'nin dönemi için birebir geçerli değil; jüri sorarsa bu ayrım anlatılabilir.
- **diger_notlar:** (a) S3, S4, S5, S6, S9, S10, S12 alıntıları WebFetch aracının döndürdüğü kısa birebir alıntılardır; heroes.json'a işlenmeden önce sayfadan gözle doğrulanmalı. S1, S2, S7, S8 alıntıları indirilen tam metinden doğrudan kopyalandı. (b) Vikipedi ve blog sayfaları kaynak olarak kullanılmadı. (c) Ulaşılması gereken basılı kaynaklar: İbrahim Ethem Akıncı, Demirci Akıncıları, TTK (birincil); Fevziye Abdullah Tansel, İstiklal Harbi'nde Mücahit Kadınlarımız, Atatürk Kültür Merkezi, 1991, s. 52-54; İbrahim Çiçek, Gördesli Mücahide Makbule ve Silah Arkadaşları, 1998; Zeki Sarıhan, Kurtuluş Savaşı Kadınları (hepsi S2'nin 54. dipnotunda anılıyor). (d) S1'deki doğrudan konuşma alıntıları (ör. 'siz nerede ölürseniz ben de orada ölürüm') ikincil anlatıya dayanıyor; röportajda kullanılacaksa 'Anlatılanlara göre' ile başlamalı.

---

## Halime Çavuş

8 kaynak okundu (3 hakemli makale, 2 TÜBA kitap bölümü, 1 resmî kurum açıklaması haber üzerinden, 1 uzman köşe yazısı, 1 zayıf MEB okul sayfası). Doğrulananlar: Kastamonulu olduğu, saçını kestirip erkek gibi giyindiği, cephane taşıyan nakliye kollarında görev yaptığı, İstiklal Madalyası aldığı, 'Halime Çavuş' diye anıldığı ve cephanenin kağnıyla/sırtta taşındığı. En önemli sorun: 'Asıl adı Kezban' bilgisi hiçbir kaynakta yok; kaynaklarda adı Halime (Kocabıyık) — altın bilgi 1, panel 1 ve haber şablonu değişmeli. Çelişkiler: çavuş rütbesi (iki kaynak 'verildi' diyor, arşiv belgelerine bakan yazar belgeyle doğrulanamadığını ve 1959 madalya kararında rütbesinin 'er' yazdığını söylüyor) ve madalyanın zamanı ('harp sonunda' / 1 Nisan 1959). 'Halim' adı ve kimliğin Mustafa Kemal Paşa'ya rastlayınca ortaya çıkması yalnızca zayıf, kaynaksız bir anlatıda geçiyor; ancak 'Anlatılanlara göre' ile kullanılabilir. Erkek kılığına girme nedeni, 'kadınların cepheye gidemeyeceğini duyması' ve 'herkesin şaşırması' hiçbir kaynakta bulunamadı.

### Kaynaklar

- **K23** — Zeynep Yamaç Erdoğan, Kurtuluş Savaşı'ndaki Kadın Kahramanların Cumhuriyet Dönemi'ndeki Tematik Bir Müze Bağlamında İncelenmesi, *Gaziantep University Journal of Social Sciences, 2023 Özel Sayı (DergiPark)* (makale). <https://dergipark.org.tr/en/download/article-file/3412433> — Hakemli dergi makalesi. Halime Çavuş'a tek paragraf ayırıyor (müze panosundaki bilgiyi aktarıyor); birincil belgeye dayanmıyor. PDF indirildi, metin pdftotext ile okundu; alıntılar birebir.
- **K46** — Neslihan Karakuş, Pınar Çoksever, Değerler Eğitiminde Rol Model Olarak Kadın Kahramanlar, *Eğitim ve İnsani Bilimler Dergisi: Teori ve Uygulama, Cilt 10, Sayı 20, Güz 2019 (DergiPark)* (makale). <https://dergipark.org.tr/tr/download/article-file/912350> — Hakemli dergi makalesi. MEB ders kitaplarını inceliyor; Halime Çavuş'un 7. sınıf Türkçe ders kitabında (s. 43) adının geçtiğini söylüyor. Halime Çavuş hakkında tek cümlelik bilgi var. PDF metni pdftotext ile okundu; alıntılar birebir.
- **K47** — İl Kültür ve Turizm Müdürlüğü Halime Çavuş'u anlattı! (Kastamonu İl Kültür ve Turizm Müdürlüğü açıklaması), *Kastamonu İl Kültür ve Turizm Müdürlüğü açıklaması; aktaran: Kastamonu Güncel (yerel haber sitesi), 20 Şubat 2026* (haber). <https://www.kastamonuguncel.com/haber/27496669/il-kultur-ve-turizm-mudurlugu-halime-cavusu-anlatti> — Resmî kurumun (İl Kültür ve Turizm Müdürlüğü) açıklaması ama yerel haber sitesi üzerinden okundu. Kurumun kendi sayfası (kastamonu.ktb.gov.tr/TR-94807/halime-kocabiyik-cavus.html) açıldı fakat gövde metni araca gelmedi; ekip tarayıcıda açıp doğrudan o sayfayı kaynak göstermeli. Metin büyük ölçüde S4 ile aynı cümleleri içeriyor; S3 ve S4 birbirinden BAĞIMSIZ SAYILMAZ. Alıntılar WebFetch aracının aktardığı biçimde; ekip sayfadan bir kez daha karşılaştırmalı.
- **K48** — Prof. Dr. Mehmet Serhat Yılmaz, Kastamonu'nun Yüzleri: Halime Çavuş (Kocabıyık) (1898-1976), *Açıksöz gazetesi (Kastamonu), köşe yazısı, 20 Şubat 2026* (haber). <https://www.aciksoz.com.tr/makale/27490020/prof-dr-mehmet-serhat-yilmaz/kastamonunun-yuzleri-halime-cavus-kocabiyik-1898-1976> — Yerel gazetede yayımlanmış uzman (tarih profesörü) yazısı; hakemli değil, bu yüzden 'haber' türünde. Ancak bulunan en ayrıntılı ve belgeye dayanan metin: Cumhuriyet Arşivi (BCA 30.11.1.0.275.11.11, 1 Nisan 1959), TBMM Tutanak Dergisi, Resmî Gazete (sayı 12835), Mustafa Eski'nin '20. Yüzyılda Kastamonu Kadınları' (2008) kitabını kaynak gösteriyor. Çavuş rütbesinin belgeyle doğrulanamadığını söyleyen tek kaynak. Alıntılar WebFetch aracının aktardığı biçimde (bazıları kısaltılmış); ekip sayfadan karşılaştırmalı. Mümkünse yazarın dayandığı kitap/arşiv belgeleri doğrudan görülmeli.
- **K49** — Türk Büyükleri - HALİME ÇAVUŞ, *Zübeyde Hanım Kız Mesleki ve Teknik Anadolu Lisesi (MEB okul sitesi, meb.k12.tr)* (kurumsal_web). <https://zubeydehanimmtal.meb.k12.tr/icerikler/turkbuyuklerihalimecavus_3350212.html> — ZAYIF KAYNAK. MEB alan adında ama bir okulun kendi eklediği, kaynak göstermeyen popüler anlatı (internette yaygın dolaşan metinle aynı). 'Halim Çavuş' adı ve Mustafa Kemal Paşa'yla yolda karşılaşma anlatısı yalnızca burada bulundu. Bu bilgiler oyunda ancak 'Anlatılanlara göre' diye verilebilir.
- **K50** — Ercan Çelebi (Doç. Dr., Kastamonu Üniversitesi), Millî Mücadele Döneminde Kastamonu (kitap bölümü, 'Millî Mücadele'nin Yerel Tarihi 1918-1923' içinde, bölüm 1), *Türkiye Bilimler Akademisi (TÜBA), DOI: 10.53478/TUBA.978-625-8352-69-6.ch01* (kitap). <https://www.tuba.gov.tr/files/yayinlar/tarih-serisi/TUBA-978-625-8352-69-6_ch01.pdf> — Güvenilir akademik kitap bölümü (TÜBA yayını). Halime Çavuş'un adı bu bölümde HİÇ GEÇMİYOR; yalnızca cephane taşımacılığı (kağnı kolları) için kullanıldı. PDF metni pdftotext ile okundu; alıntılar birebir. Baskı yılı PDF'ten okunamadı, ekip künyeyi tamamlamalı.
- **K22** — Esra Sarıkoyuncu Değerli, Millî Mücadele'de Türk Kadını ve İnönü Muharebeleri'nde Çarpışan İki Kadın Kahraman, *Anadolu Üniversitesi Sosyal Bilimler Dergisi, 21 (Özel Sayı), 2021, s. 101-120 (DergiPark)* (makale). <https://dergipark.org.tr/en/download/article-file/1677335> — Hakemli dergi makalesi. Halime Çavuş'un yalnızca adı geçiyor; cephanenin kağnıyla ve sırtta taşınması için kullanıldı. PDF metni pdftotext ile okundu; alıntılar birebir.
- **K51** — Hüsnü Özlü (Prof. Dr., Millî Savunma Üniversitesi), Millî Mücadelede Cephe Gerisinin Stratejik Önemi ve İnebolu (kitap bölümü, 'Millî Mücadele'nin Yerel Tarihi 1918-1923' içinde, bölüm 12), *Türkiye Bilimler Akademisi (TÜBA), DOI: 10.53478/TUBA.978-625-8352-69-6.ch12* (kitap). <https://www.tuba.gov.tr/files/yayinlar/tarih-serisi/TUBA-978-625-8352-69-6_ch12.pdf> — Güvenilir akademik kitap bölümü. S6 ile AYNI KİTAPTA (aynı yayıncı) olduğu için S6'dan bağımsız kaynak sayılmadı. Halime Çavuş'un adı geçmiyor.

### Bilgiler

**altin_bilgiler[0]** — taslak: “Kastamonuludur. Asıl adı Kezban'dır.”

> Önerilen metin: Kastamonuludur. Asıl adı Halime'dir; sonradan Kocabıyık soyadını almıştır.

- [ ] **İKİ KAYNAK** — Kastamonuludur.
  - K47: “1898 yılında merkez ilçeye bağlı Duruçay köyünde doğmuştur.”
  - K49: “Kastamonu'da doğan, anne-babasının "kızım gitme" şeklinde yalvarışlarını dinlemeden mücadeleye katılan Halime Çavuş”
  - Not: S4 de aynı bilgiyi veriyor (Duruçay köyü, 1898). S5 zayıf kaynak, S3 haber sitesi üzerinden okunan resmî açıklama; yine de bütün kaynaklar Kastamonu'da birleşiyor, çelişki yok. Kültür Müdürlüğü'nün kendi sayfası tarayıcıda açılıp teyit edilmeli.
- [ ] **BULUNAMADI** — Asıl adı Kezban'dır.
  - Not: ÖNEMLİ: Okunan hiçbir kaynakta 'Kezban' adı geçmiyor (S1, S2, S3, S4, S5 hepsi tarandı; ayrıca '"Halime Çavuş" "Kezban"' araması da sonuç vermedi). Kaynaklarda kendi adı 'Halime', Soyadı Kanunu'ndan sonraki soyadı 'Kocabıyık' olarak geçiyor (S3/S4: 'Halime Kocabıyık'; annesi Hacer, babası İbrahim). Bu iddia büyük olasılıkla yanlış; oyundan çıkarılmalı.

**altin_bilgiler[1]** — taslak: “Erkek kılığına girip "Halim" adıyla cephane taşıyan birliklere katıldı.”

> Önerilen metin: Saçlarını kestirip erkek gibi giyindi ve kağnısıyla cephane taşıyan nakliye kollarına katıldı.

- [ ] **İKİ KAYNAK** — Saçlarını kestirip/kazıtıp erkek gibi giyinerek Millî Mücadele'ye katıldı.
  - K46: “Saçlarını kazıtıp, erkek gibi giyinerek millî mücadeleye katılan Halime Çavuş'un (1898-1976)”
  - K47: “Onun bu dönemde erkek gibi saçlarını kısalttığı, tıraş olduğu, erkek gibi giyindiğini”
  - Not: S4 ve S5 de aynı bilgiyi veriyor. Kaynaklar 'bilinmektedir' diye aktarıyor; birincil belge gösterilmiyor.
- [ ] **TEK KAYNAK** — "Halim" adını kullandı.
  - K49: “Halime Çavuş, uzun yıllar Halim Çavuş zannedildi.”
  - Not: Yalnızca zayıf kaynakta (S5) geçiyor ve o da 'kendine Halim adını verdi' demiyor, 'Halim Çavuş zannedildi' diyor. Akademik/resmî kaynaklarda (S1, S2, S3, S4) 'Halim' adı hiç geçmiyor. Oyunda kullanılacaksa 'Anlatılanlara göre' ile ve 'Halim sanıldı' biçiminde verilmeli.
- [ ] **İKİ KAYNAK** — Cephane taşıyan birliklerde (nakliye/yardım kollarında) görev yaptı.
  - K23: “savaş mühimmatları taşıyan yardım kollarında görev almış, İnebolu'dan Ankara'ya ve Sakarya'ya savaş gereçlerinin getirilmesinde olağanüstü özveri göstermiştir.”
  - K47: “kağnısıyla cephe gerisinde nakliye kollarında askeri mühimmat taşıma işinde görev üstlendiği bilinmektedir.”
  - Not: S4'e göre birliğin adı 'İnebolu Halk Cephesi Cephane Yardım Kolları' (1959 madalya kararındaki ifade).

**altin_bilgiler[2]** — taslak: “Hizmetleri nedeniyle çavuş rütbesi ve İstiklal Madalyası aldı.”

> Önerilen metin: Hizmetleri nedeniyle İstiklal Madalyası aldı. Halk onu "Halime Çavuş" adıyla tanıdı.

- [ ] **İKİ KAYNAK** — İstiklal Madalyası aldı.
  - K23: “İstiklal madalyası ve çavuşluk rütbesiyle ödüllendirilmiştir.”
  - K48: “rütbesi er olarak belirtilen Halime Kocabıyık'a İstiklâl Madalyası (Numara: 75039) verilmiştir.”
  - Not: Madalyayı aldığı konusunda kaynaklar birleşiyor. Ancak ZAMANI çelişkili: S3 'Harp sonunda ... verilerek' diyor; S4 ise arşiv belgesine dayanarak madalyanın 1 Nisan 1959 tarihli kararla verildiğini söylüyor. Oyunda tarih verilmemeli.
- [ ] **ÇELİŞKİ** — Çavuş rütbesi aldı.
  - K23: “İstiklal madalyası ve çavuşluk rütbesiyle ödüllendirilmiştir.”
  - K47: “Harp sonunda Halime Kocabıyık'a 'Çavuş' rütbesi ve İstiklal Madalyası verilerek gazilik maaşı bağlanmıştır.”
  - K48: “bir belgeden teyit edemediğimiz "Çavuş" rütbesi veya unvanı onu yüceltmek için Kastamonuluların verdiği bir lakap olmalıdır.”
  - Not: S1 ve S3 rütbenin verildiğini söylüyor. S4 (konuyu arşiv belgeleriyle inceleyen tek metin) rütbenin belgeyle doğrulanamadığını, 1959 madalya kararında rütbesinin 'er' yazdığını, 'Çavuş'un büyük olasılıkla halkın verdiği bir lakap olduğunu söylüyor. Güvenli ifade: 'Çavuş' diye anıldı / 'Halime Çavuş' adıyla tanındı.

**tarih_etiketi** — taslak: “1920–1922”

- [ ] **TEK KAYNAK** — Cephane taşıma görevi 1920–1922 yılları arasındaydı.
  - K47: “1920-1922 yılları arasında iki yıl İnebolu'dan Ankara'ya silah ve cephane taşımış”
  - Not: S4 aynı bilgiyi veriyor ama S3 ile aynı metin olduğundan ikinci bağımsız kaynak sayılmadı. Başka bir kaynakta yıl aralığı bulunamadı. Çelişen bir bilgi de yok; etiket kalabilir ama 'doğrulandı' işaretlenmemeli.

**paneller[0]** — taslak: “Kastamonu. Kezban, kadınların cepheye gidemeyeceğini duyar.”

> Önerilen metin: Kastamonu, Duruçay köyü. Halime yirmi iki yaşındadır; ailesini geride bırakıp Millî Mücadele'ye katılmaya karar verir.

- [ ] **BULUNAMADI** — Adı Kezban'dır.
  - Not: Bkz. altin_bilgiler[0]. Kaynaklarda adı Halime.
- [ ] **BULUNAMADI** — Kadınların cepheye gidemeyeceğini duydu (erkek kılığına girme nedeni).
  - Not: Hiçbir kaynakta böyle bir olay ya da erkek gibi giyinmesinin nedeni yok. Üstelik S6'ya göre kağnı kollarının büyük çoğunluğu zaten kadınlardan oluşuyordu ('büyük çoğunluğu kadınlardan oluşmakta idi'), yani 'kadınlar cephane taşıyamazdı' izlenimi tarihe aykırı olur. Kaynaklarda geçen tek şey ailesinin karşı çıkması (S5: zayıf) ve ailesini geride bırakması (S3).

**paneller[1]** — taslak: “Saçlarını keser, erkek kıyafeti giyer ve "Halim" adını alır.”

> Önerilen metin: Saçlarını kestirir, erkek gibi giyinir. Anlatılanlara göre onu uzun süre "Halim" sandılar.

- [ ] **İKİ KAYNAK** — Saçlarını kestirdi, erkek gibi giyindi.
  - K46: “Saçlarını kazıtıp, erkek gibi giyinerek millî mücadeleye katılan Halime Çavuş'un (1898-1976)”
  - K47: “Onun bu dönemde erkek gibi saçlarını kısalttığı, tıraş olduğu, erkek gibi giyindiğini”
- [ ] **TEK KAYNAK** — "Halim" adını aldı.
  - K49: “Halime Çavuş, uzun yıllar Halim Çavuş zannedildi.”
  - Not: Zayıf kaynak; 'adını aldı' değil 'zannedildi' diyor.

**paneller[2]** — taslak: “Cephane kolunda gece gündüz yük taşır.”

> Önerilen metin: Kağnısıyla nakliye kollarına katılır. İnebolu'dan Ankara yönüne cephane taşır.

- [ ] **İKİ KAYNAK** — Cephane/nakliye kolunda mühimmat taşıdı.
  - K23: “savaş mühimmatları taşıyan yardım kollarında görev almış”
  - K47: “kağnısıyla cephe gerisinde nakliye kollarında askeri mühimmat taşıma işinde görev üstlendiği bilinmektedir.”
- [ ] **BULUNAMADI** — Gece gündüz taşıdı.
  - Not: 'Gece gündüz' ayrıntısı kaynaklarda yok; süsleme. Kaynakta geçen: kağnıyla, İnebolu'dan Ankara'ya (S3), 'Ankara'ya ve Sakarya'ya' (S1).

**paneller[3]** — taslak: “Gerçek kimliği ortaya çıktığında herkes şaşırır. Ona "Halime Çavuş" denir.”

> Önerilen metin: Anlatılanlara göre kadın olduğu, yolda kimlik kâğıdı sorulunca anlaşıldı. Halk onu "Halime Çavuş" diye andı.

- [ ] **TEK KAYNAK** — Kadın olduğu bir noktada ortaya çıktı.
  - K49: “Paşa kafa kağıdını istedi. Verdi. "Sen kız mısın?" "Evet."”
  - Not: Yalnızca zayıf kaynakta, halk anlatısı biçiminde: İnebolu'dan cephane taşırken Mustafa Kemal Paşa'ya rastladığı, Paşa'nın kafa kâğıdını (nüfus kâğıdı) isteyince kız olduğunu anladığı anlatılıyor. S3 ve S4 kimliğin nasıl ortaya çıktığından hiç söz etmiyor. Panelde anlati_mi: true olmalı ve 'Anlatılanlara göre' ile başlamalı.
- [ ] **BULUNAMADI** — Herkes şaşırdı.
  - Not: Hiçbir kaynakta yok.
- [ ] **İKİ KAYNAK** — Ona "Halime Çavuş" dendi.
  - K23: “Halime Çavuş; savaş mühimmatları taşıyan yardım kollarında görev almış”
  - K48: “"Çavuş" rütbesi veya unvanı onu yüceltmek için Kastamonuluların verdiği bir lakap olmalıdır.”
  - Not: Bu adla anıldığı kesin (bütün kaynaklar böyle anıyor). Adın resmî rütbeden mi halk lakabından mı geldiği çelişkili (bkz. altin_bilgiler[2]).

**haber** — taslak: “Kastamonulu {0}, "{1}" adıyla cephane taşıdı ve {2} rütbesi aldı. Doğrular: Kezban, Halim, çavuş”

> Önerilen metin: Şablon önerisi: "Kastamonulu Halime, {0} gibi giyinerek {1} ile cephane taşıdı ve {2} aldı." Doğrular: erkek · kağnı · İstiklal Madalyası. (Çeldirici önerisi ekibe kalsın; 'Fatma', 'Said', 'paşa' çeldiricileri yeni şablona uymaz.)

- [ ] **BULUNAMADI** — Boşluk 0: Kezban
  - Not: Kaynaklarda yok; kullanılmamalı.
- [ ] **TEK KAYNAK** — Boşluk 1: "Halim" adıyla cephane taşıdı
  - K49: “Halime Çavuş, uzun yıllar Halim Çavuş zannedildi.”
  - Not: Zayıf, tek kaynak. Başarı testine de girecek bir Altın Bilgi için yeterli değil.
- [ ] **ÇELİŞKİ** — Boşluk 2: çavuş rütbesi aldı
  - K23: “İstiklal madalyası ve çavuşluk rütbesiyle ödüllendirilmiştir.”
  - K48: “bir belgeden teyit edemediğimiz "Çavuş" rütbesi veya unvanı onu yüceltmek için Kastamonuluların verdiği bir lakap olmalıdır.”
  - Not: Bkz. altin_bilgiler[2].

**biliyor_muydun** — taslak: “Millî Mücadele'de cephanenin büyük bölümü öküz arabaları (kağnılar), atlar ve insanların sırtında taşındı.”

> Önerilen metin: İnebolu'ya gelen cephane, Ankara yönüne kağnı kollarıyla taşındı. Atlı arabalar, yük hayvanları ve insanların sırtı da kullanıldı.

- [ ] **İKİ KAYNAK** — Cephane kağnılarla (öküz arabaları) taşındı.
  - K50: “İnebolu-Ankara hattındaki nakliyat ve sevkiyat işleri kağnı kolları ile yürütülmüştür.”
  - K22: “Onlar kağnı arabalarıyla Zonguldak, Ereğli ve İnebolu limanlarından aldıkları silah, cephane ve mühimmatı Ankara'ya, Batı Cephesine, Eskişehir ve Kütahya'ya ulaştırmışlardır.”
  - Not: S8 de destekliyor: 'cephelere kadar uzanan kağnı kollarının başlangıç noktası olmuştur' (S6 ile aynı kitap).
- [ ] **İKİ KAYNAK** — Cephane insanların sırtında taşındı.
  - K22: “Özellikle ordunun silah ve cephanesini sırtında ve kağnısında taşıyan Türk kadını Ulusal Savaşın bir sembolü olmuştur.”
  - K50: “onlar mühimmatlarını kamyonlarla getiriyor, biz kadınlarımızın sırtında taşıyorduk”
  - Not: S6'daki cümle yazarın kendi cümlesi değil, bölümde aktarılan dönem konuşmasından bir alıntı. S7 ayrıca kağnı tekeri kırılınca 'malzeme sırtlarda kilometrelerce taşınıyordu' diyor (Kinross'tan aktararak).
- [ ] **TEK KAYNAK** — Cephane atlarla (atlı arabalar ve yük hayvanlarıyla) taşındı.
  - K50: “1 numaralı çift atlı araba kolu, 5 numaralı 4 tekerlekli öküz araba kolu ve 2 numaralı mekkâre kolu bulunmaktaydı.”
  - Not: S6'da ayrıca 9 Kasım 1921 tarihli telgraftan: 'dört tekerlekli arabalarla kağnıların, at, merkepler, katırların serî'an irsali'. 'Mekkâre' = yük hayvanı. S7 atı değil deveyi anıyor ('Erzurum'dan develerle'). 'Atlar' yerine 'atlı arabalar ve yük hayvanları' demek kaynağa daha uygun.
- [ ] **BULUNAMADI** — Cephanenin "büyük bölümü" bu yollarla taşındı (oran iddiası).
  - Not: Hiçbir kaynak bütün Millî Mücadele için bir oran vermiyor. S6 yalnızca İnebolu-Ankara hattı için işlerin kağnı kollarıyla yürütüldüğünü söylüyor. 'Büyük bölümü' ifadesi çıkarılmalı ya da hat belirtilmeli.

**biliyor_muydun.bonus_soru** — taslak: “Öküz arabasının bir başka adı nedir? (Kağnı)”

- [ ] **TEK KAYNAK** — Kağnı, öküzlerin çektiği arabadır.
  - K50: “Öküzleri geviş getiren bu kağnı arabasındaki kıymetli yükü korumak için üstüne yorganını örten”
  - Not: Tarihî bir iddiadan çok sözcük bilgisi; S6 ayrıca 'at, öküz ve kağnı arabaları' ile '4 tekerlekli öküz araba kolu'nu ayrı sayıyor, yani her öküz arabası kağnı değil (kağnı iki tekerlekli). Soru 'Öküzlerin çektiği iki tekerlekli arabaya ne denir?' biçiminde olursa daha doğru olur; TDK sözlüğünden teyit edilebilir.

**mini_oyun.aciklama** — taslak: “Cephane yüklü kağnıyla kontrol noktalarından geç. Nöbetçinin parola sorularını bil.”

- [ ] **TEK KAYNAK** — Halime Çavuş cephaneyi kağnıyla taşıdı.
  - K47: “kağnısıyla cephe gerisinde nakliye kollarında askeri mühimmat taşıma işinde görev üstlendiği bilinmektedir.”
  - Not: S4 aynı cümleyi içeriyor (bağımsız değil). Genel olarak bu hatta taşımanın kağnı kollarıyla yapıldığı S6 ile de uyumlu.
- [ ] **BULUNAMADI** — Yolda kontrol noktaları ve parola soran nöbetçiler vardı.
  - Not: Oyun mekaniği; kaynaklarda yok. Kurgusal olduğu ekranda belli olmalı. S6'da yalnızca her kağnı kolunun başında 'küçük bir zabit ile bir veya iki jandarma eri' bulunduğu ve yol boyunca belirli mola yerleri (Soğuksu Hanı, Küre, Seydiler...) olduğu yazıyor; 'kontrol noktası' yerine 'mola yeri/han' kullanmak tarihe daha yakın olur.

**duygu_ani** — taslak: “Ülkesine hizmet etmek için kimliğini saklamak zorunda kalan bir genç kadın.”

> Önerilen metin: Ailesini geride bırakıp iki yıl boyunca kağnısıyla cephane taşıyan genç bir kadın.

- [ ] **BULUNAMADI** — Kimliğini saklamak ZORUNDA kaldı.
  - Not: Erkek gibi giyindiği doğrulanıyor ama 'zorunda kaldığı' ya da nedeni hiçbir kaynakta yok. S6'ya göre kağnı kollarının çoğu zaten kadındı. Daha güvenli: 'Ailesini geride bırakıp iki yıl boyunca cephane taşıyan genç bir kadın.' (S3: 'ailesini geride bırakıp cepheye koşmuş'; 'iki yıl ... silah ve cephane taşımış')

### Röportaj taslakları

- [ ] **Neden erkek kılığına girdiniz?**
  - Taslak: [KAYNAKTA YOK]
  - Not: Erkek gibi giyindiği iki kaynakla doğrulanıyor (K46, K47) ama NEDENİ hiçbir kaynakta yazmıyor. Soru değiştirilirse (ör. 'Millî Mücadele'ye nasıl katıldınız?') şu cevap kaynaklara uygundur: 'Yirmi iki yaşındaydım; ailemi geride bırakıp yola çıktım. Saçlarımı kestirdim, erkek gibi giyindim. Kağnımla nakliye kollarına katıldım.' (1. cümle: K47, 2. cümle: K46+K47, 3. cümle: K47)
- [ ] **Cephane nasıl taşınırdı?**
  - Taslak: Cephaneyi kağnımla, nakliye kollarında taşırdım. İnebolu'dan Kastamonu'ya yol kağnı koluyla altı gün sürerdi. Kağnı kollarındakilerin çoğu kadındı.
  - 1. cümle: K47 ('kağnısıyla cephe gerisinde nakliye kollarında askeri mühimmat taşıma işinde görev üstlendiği')
  - 2. cümle: K50 ('İnebolu-Kastamonu yolu Kağnı Kolu ile altı gün sürmekteydi.')
  - 3. cümle: K50 ('Kağnı Kolları genellikle 50-60 yaş üzeri erkeklerle, 14-18 yaş arası çocuklar ve büyük çoğunluğu kadınlardan oluşmakta idi.')
- [ ] **Gerçek adınız ortaya çıkınca ne oldu?**
  - Taslak: Anlatılanlara göre bir gün cephane taşırken Mustafa Kemal Paşa'ya rastladım. Kimlik kâğıdımı isteyince kız olduğumu anladı. Savaştan sonra beni Ankara'ya çağırdı ve konuk etti.
  - 1. cümle: K49 ('Bir keresinde İnebolu'dan cepheye cephane taşırken Mustafa Kemal Paşa'ya rastladı.') — zayıf kaynak, halk anlatısı
  - 2. cümle: K49 ('Paşa kafa kağıdını istedi. Verdi. "Sen kız mısın?" "Evet."') — zayıf kaynak, halk anlatısı
  - 3. cümle: K47 ('1924 yılında Gazi Mustafa Kemal Paşa ve Latife Hanımın davetlisi olarak Ankara'da bulunmuş, on gün konuk edilmiştir.') ve K49 ('Savaş sonrası Mustafa Kemal tarafından Ankara'ya çağrıldı.')
  - Not: Sorudaki 'gerçek adınız' ifadesi sorunlu; kaynaklara göre Halime zaten gerçek adı. Soru 'Kadın olduğunuz anlaşılınca ne oldu?' diye değiştirilmeli. İlk iki cümle yalnızca zayıf kaynağa dayandığı için ekip bu cevabı kullanmadan önce Mustafa Eski'nin '20. Yüzyılda Kastamonu Kadınları' kitabına bakmalı.

### Ek bulgular

- **1_asil_adi_kezban_mi:** HAYIR, doğrulanamadı. Okunan beş kaynağın (S1–S5) hiçbirinde 'Kezban' adı geçmiyor; özel olarak yapılan '"Halime Çavuş" "Kezban"' araması da bu adı içeren bir sayfa bulmadı. Kaynaklarda adı baştan beri 'Halime'; Soyadı Kanunu'ndan sonra 'Kocabıyık' soyadını aldığı yazıyor (S3, S4). Annesi Hacer, babası İbrahim; 1898'de Kastamonu merkeze bağlı Duruçay köyünde doğdu, 20 Şubat 1976'da öldü (S3/S4; S5 '75 yaşında' diyor, S3/S4 '78 yaşında'). 'Kezban' senaryo taslağından gelen bir hata gibi görünüyor; oyundan (altın bilgi 1, panel 1, haber şablonu) çıkarılmalı.
- **2_erkek_kiligi_ve_halim_adi:** Erkek gibi giyinip saçını kestirdiği/kazıttığı iki bağımsız kaynakla doğrulanıyor (S2 hakemli makale; S3 İl Kültür ve Turizm Müdürlüğü açıklaması; ayrıca S4, S5). 'Halim' adı ise yalnızca zayıf kaynakta (S5, MEB okul sitesindeki kaynaksız popüler metin) ve 'uzun yıllar Halim Çavuş zannedildi' biçiminde geçiyor; akademik ve resmî kaynaklarda yok. Kendisinin bu adı seçtiğine dair kaynak bulunamadı.
- **3_cavus_rutbesi_madalya_maas_ataturk:** İSTİKLAL MADALYASI: Aldığı doğrulanıyor (S1, S3, S4). Zamanı çelişkili: S3 'Harp sonunda' diyor; S4 arşiv belgesine (BCA 30.11.1.0.275.11.11) dayanarak 1 Nisan 1959 tarihli kararla, 'İnebolu Halk Cephesi Cephane Yardım Kolları'ndaki hizmeti için, rütbesi 'er' yazılarak verildiğini, madalya numarasının 75039 olduğunu söylüyor. ÇAVUŞ RÜTBESİ: Çelişkili. S1 ve S3 verildiğini yazıyor; S4 'bir belgeden teyit edemediğimiz' diyor ve bunun Kastamonuluların verdiği bir lakap olabileceğini belirtiyor. MAAŞ: S3 'gazilik maaşı bağlanmıştır'; S5 'kendisine maaş da bağlandı'; S4'e göre ayrıntı: 2 Aralık 1949 tarihli kanunla harp malulü sayılıp 100 lira mükâfat, 1005 sayılı Kanun gereği 1 Mart 1968'den itibaren şeref aylığı (maaşın Atatürk tarafından bağlandığı S4'te yazmıyor). ATATÜRK'LE GÖRÜŞME: S3/S4: '1924 yılında Gazi Mustafa Kemal Paşa ve Latife Hanımın davetlisi olarak Ankara'da bulunmuş, on gün konuk edilmiştir'; Paşa Ankara'ya yerleşmesini önermiş, kabul etmemiş, 'Gazi dört yüz lira vererek Halime Çavuş'u Kastamonu'ya uğurlamıştır'. S5 de Ankara'ya çağrıldığını anlatıyor. (Arama sonuçlarındaki haber sitelerinde '15 gün Çankaya Köşkü'nde konuk edildi, törenle madalya ve çavuş rütbesi verildi' deniyor; bu sayfalar güvenilir kaynak sayılmadığı için kullanılmadı, ama S3/S4'teki 'on gün' ile çeliştiği not edilmeli.) S3 ve S4 aynı metne dayandığı için görüşme bilgisi 'tek kaynak' düzeyinde sayılmalı.
- **4_kimligin_ortaya_cikisi:** Yalnızca zayıf kaynakta (S5) ve halk anlatısı biçiminde: İnebolu'dan cepheye cephane taşırken, kim olduğunu bilmeden Mustafa Kemal Paşa'ya rastlıyor; Paşa 'Sen üşüyor musun böyle?' diye soruyor, kafa kâğıdını (kimlik) istiyor ve 'Sen kız mısın?' – 'Evet.' konuşması geçiyor. S3 ve S4 (en ayrıntılı metinler) kimliğin nasıl ortaya çıktığını hiç anlatmıyor. Taslaktaki 'herkes şaşırır' ayrıntısı hiçbir kaynakta yok. Oyunda bu sahne ancak 'Anlatılanlara göre' ile ve anlati_mi: true olarak verilebilir.
- **5_cephane_tasima_kaynagi:** Kağnı: iki bağımsız akademik kaynak (S6 TÜBA kitap bölümü, Kastamonu Üniversitesi'nden Doç. Dr. Ercan Çelebi; S7 Anadolu Üniversitesi Sosyal Bilimler Dergisi). İnsan sırtı: S7 açıkça ('sırtında ve kağnısında taşıyan Türk kadını'), S6 dönem konuşması alıntısıyla. At: S6'da 'çift atlı araba kolu', 'mekkâre (yük hayvanı) kolu' ve telgraftaki 'at, merkepler, katırlar' ifadeleri — tek kaynak; S7 ayrıca Erzurum'dan develerle sevkiyatı anıyor. 'Büyük bölümü' biçimindeki oran iddiası için kaynak yok. S6'dan oyunda işe yarayabilecek ek bilgiler: İnebolu–Kastamonu yolu kağnı koluyla altı gün sürüyordu; kağnı kollarının büyük çoğunluğu kadınlardan oluşuyordu; her kolun başında bir küçük zabit ve bir-iki jandarma eri vardı; mola yerleri Soğuksu Hanı, Küre, İsmail Ağa'nın Hanı, Seydiler ve Sırasöğütler'di. (S6 metninde 'yaklaşık 4050 kağnıdan' yazıyor; PDF'te tire düşmüş olabilir, büyük olasılıkla '40-50'. Ekip PDF'in kendisine bakmalı.)
- **6_ek_celiski_yaralanma_tarihi:** Oyunda geçmiyor ama eklenirse dikkat: İnebolu'nun bombalanmasında ayağından yaralandığı S1, S3, S4'te var; tarih çelişkili. S1: '9 Haziran 1921 tarihinde Panter ve Kılkış isimli Yunan Zırhlısı İnebolu'ya bombardıman düzenlediğinde Halime Çavuş ayağından yaralanmıştır.' S3/S4: '9 Haziran 1920 tarihinde Kılkış Zırhlısı'nın İnebolu'yu bombardımanı sırasında ayağından yaralanmıştır.' Güvenli ifade: 'İnebolu'nun bombalanması sırasında ayağından yaralandı.'
- **7_acilamayan_ve_bakilmasi_gereken_kaynaklar:** Açılamayan: kastamonu.ktb.gov.tr/TR-94807/halime-kocabiyik-cavus.html (sayfa açıldı ama gövde metni araca gelmedi; tarayıcıda açılıp S3 yerine doğrudan kaynak gösterilmeli); kho.msu.edu.tr 'İstiklal Yolu ve Kastamonu Bölgesindeki Lojistik...' makalesi (sertifika hatası). Atatürk Ansiklopedisi ve TDV İslâm Ansiklopedisi'nde Halime Çavuş maddesi bulunamadı. Kütüphaneden bakılması önerilen basılı kaynaklar (S4'ün kaynakçasından): Mustafa Eski, '20. Yüzyılda Kastamonu Kadınları' (2008); Nail Tan – Özdemir Tan, 'Gurur Kaynağımız Kastamonulular III' (2004). MEB 7. sınıf Türkçe ders kitabı (2018, s. 43) Halime Çavuş'un adını anıyor (S2'ye göre) — ders kitabı bağlantısı raporda kullanılabilir.
- **8_alinti_uyarisi:** S1, S2, S6, S7, S8 alıntıları indirilen PDF'lerin metninden birebir alındı. S3, S4, S5 alıntıları WebFetch aracının sayfadan aktardığı biçimde; araç zaman zaman cümleyi kısaltabildiği için ekip bu üç sayfadaki alıntıları kaynak tablosuna geçirmeden önce sayfadan bir kez karşılaştırmalı.

---

## Şerife Bacı

14 kaynak açıldı; bunlardan 3'ü güçlü akademik yayın (TÜBA kitap bölümü, Atatürk Üniversitesi dergi makalesi, Atatürk Araştırma Merkezi Dergisi makalesi). Doğrulananlar: cephanenin İnebolu'dan kağnılarla taşınması, kadınların rolü, 1921 kışında Kastamonu Kışlası önünde donarak ölme, yorganın cephaneye örtülmesi, bebeğin varlığı, Kastamonu'daki anıt, İstiklal Yolu adı ve güzergâhı. Çelişkili olanlar: olayın ayı (Aralık 1921 / 21 Şubat 1921), bebeğin taşınma biçimi (kağnıda / sırtında / kucağında), yaşı ve adı. Bulunamayanlar: 'ilk kadın şehit', 'kar fırtınası', cephanenin 'kuru' kaldığı; 'ıslanmasın' sözü ise başka bir kadına (Mustafa Necati'nin anlattığı nine) ait. En önemli uyarı: olayın tamamı tek bir kök anlatıya (Nurettin Peker'in aktardığı tanıklık) dayanıyor ve 'Şerife' adı dönem metninde geçmiyor; ayrıca haber şablonundaki 'bebeği' çeldiricisi kaynaklara göre yanlış sayılamayacağı için değiştirilmeli.

### Kaynaklar

- **K50** — Ercan Çelebi (Doç. Dr., Kastamonu Üniversitesi), Millî Mücadele Döneminde Kastamonu (kitap bölümü; 'Millî Mücadele'nin Yerel Tarihi 1918-1923' içinde, s. 1-178; ilgili yer s. 123-124 ve 177-178), *Türkiye Bilimler Akademisi (TÜBA)* (kitap). <https://www.tuba.gov.tr/files/yayinlar/tarih-serisi/TUBA-978-625-8352-69-6_ch01.pdf> — En güçlü kaynak. PDF indirildi, metin çıkarılıp doğrudan okundu. Olayı Nurettin Peker'in 'İstiklâl Savaşı' kitabından (s. 385-386) aktarıyor ve 'halk arasında yaşayan destan' diye niteliyor. Yayın yılı PDF'te görülemedi (DOI: 10.53478/TUBA.978-625-8352-69-6.ch01).
- **K30** — Gülay Sarıçoban, Milli Mücadele'de Anadolu Kadını, *Atatürk Üniversitesi Sosyal Bilimler Enstitüsü Dergisi, Aralık 2017, 21(4): 1331-1346 (DergiPark)* (makale). <https://dergipark.org.tr/tr/download/article-file/407136> — Hakemli dergi. PDF indirildi, metin doğrudan okundu. Olayı anlatıyor ama kadının ADINI VERMİYOR (Özcüler 2002'ye atıf). Kaynakçasında Peker (1955) var; yani S1 ile aynı kök anlatıya dayanıyor olabilir.
- **K52** — Refik Turan (Prof. Dr.), Millî Mücadelede İnebolu-Kastamonu-Ankara Hattı, *Atatürk Araştırma Merkezi Dergisi (atamdergi.gov.tr), s. 695-699 civarı; cilt/sayı PDF'te görülemedi* (makale). <https://atamdergi.gov.tr/tam-metin-pdf/936/tur> — Atatürk Araştırma Merkezi yayını. PDF taranmış metin (OCR); satır sonu tireleri ve küçük OCR hataları var. Şerife Bacı'nın adı geçmiyor; yol, kağnı, kadınların rolü ve 'yorganını cephaneye örten nine' anısı (Mustafa Necati) var.
- **K53** — Şehit Şerife Bacı, *T.C. İnebolu Kaymakamlığı* (kurumsal_web). <https://inebolu.gov.tr/serife-baci> — Resmî ama ikincil ve kaynakçasız sayfa. Alıntılar WebFetch aracının aktardığı biçimdedir; ekip sayfadan bir kez daha gözle kontrol etmeli.
- **K54** — Atatürk ve Şehit Şerife Bacı Anıtı - Kastamonu, *T.C. Kültür ve Turizm Bakanlığı, Kültür Portalı* (kurumsal_web). <https://www.kulturportali.gov.tr/turkiye/kastamonu/gezilecekyer/ataturk-ve-seht-serfe-baci-aniti> — Resmî, ikincil, kaynakçasız. Alıntılar WebFetch aracının aktardığı biçimdedir; gözle kontrol edilmeli.
- **K55** — Tarihi İstiklal Yolu, *Çankırı İl Kültür ve Turizm Müdürlüğü* (kurumsal_web). <https://cankiri.ktb.gov.tr/TR-242668/tarihi-istiklal-yolu.html> — Resmî, ikincil. Alıntılar WebFetch aracının aktardığı biçimdedir.
- **K56** — Kastamonu-İstiklal Yolu Tarihi Milli Parkı, *T.C. Tarım ve Orman Bakanlığı, 10. Bölge Müdürlüğü* (kurumsal_web). <https://bolge10.tarimorman.gov.tr/Menu/75/Kastamonu-Istiklal-Yolu-Tarihi-Milli-Parki> — Resmî, ikincil. Alıntılar WebFetch aracının aktardığı biçimdedir.
- **K57** — Şerife Bacı ve Tüm Şehitlerimizi Anma İstiklal Yolu Yürüyüşü Sona Erdi (21.02.2017), *Kastamonu Valiliği* (kurumsal_web). <http://www.kastamonu.gov.tr/serife-baci-ve-tum-sehitlerimizi-anma-istiklal-yolu-yuruyusu-sona-erdi> — Resmî duyuru. Yalnızca anıtın Cumhuriyet Meydanı'nda olduğu ve yolun İnebolu-Kastamonu bölümünün 95 km olduğu için kullanıldı. Birebir alıntı alınamadı (araç özet verdi).
- **K58** — Türk kadınının kahramanlık timsali: Şerife Bacı, *Anadolu Ajansı* (haber). <https://www.aa.com.tr/tr/turkiye/turk-kadininin-kahramanlik-timsali-serife-baci/1397803> — Haber; zayıf kaynak, iki kaynak sayımına girmez. Kastamonu Üniversitesi'nden Dr. Mustafa Eski ve Seydiler Belediye Başkanı konuşuyor. Belirsizlikleri açıkça söylediği için değerli.
- **K59** — Şerife Bacı'nın hakkı 51 yıl sonra teslim edildi, *Sözcü* (haber). <https://www.sozcu.com.tr/serife-bacinin-hakki-51-yil-sonra-teslim-edildi-wp3833367> — Haber; zayıf kaynak, sayıma girmez. Adın ilk kez 1972'de açıklandığı iddiası yalnızca burada.
- **K60** — Selahattin Ateş (Doç. Dr.), Kastamonulu Şehit Şerife Bacı Kimdir? (14.03.2022), *STRASAM (Stratejik Araştırmalar Merkezi) web sitesi* (kurumsal_web). <https://strasam.org/tarih/turkiye-cumhuriyeti-tarihi/kastamonulu-sehit-serife-baci-kimdir-612> — Hakemli değil, dernek/düşünce kuruluşu yazısı; ZAYIF, sayıma girmez. Peker'in 1955 tarihli kitabına dayandığını belirtiyor.
- **K61** — Şerife Bacı'nın Öyküsü, *Şerife Bacı Özel Eğitim Anaokulu (MEB okul sitesi, meb.k12.tr)* (kurumsal_web). <https://serifebaciozelegitimanaokulu.meb.k12.tr/icerikler/serife-bacinin-oykusu_2214794.html> — Okul sitesi; kaynak ve yazar belirtilmemiş, öyküleştirilmiş metin. ZAYIF. Yalnızca tarih çelişkisini (21 Şubat 1921) göstermek için kaydedildi.
- **K62** — Atatürk ve Şerife Bacı Anıtı, *kulturenvanteri.com* (kurumsal_web). <https://kulturenvanteri.com/en/yer/ataturk-ve-serife-baci-aniti/> — Gönüllü envanter sitesi; ZAYIF, sayıma girmez. Metni S5 ile çok benzer (bağımsız değil).
- **K63** — Hüsnü Özlü, İstiklal Savaşı'nda Bir Yol: İstiklal Yolu ve Kastamonu Bölgesindeki Lojistik Faaliyetlerin Değerlendirmesi, *Savunma Bilimleri Dergisi, 18(36), 2019, s. 155-180 (DergiPark)* (makale). <https://dergipark.org.tr/tr/pub/khosbd/article/642152> — Hakemli. YALNIZCA künye ve özet sayfası okunabildi (tam metin PDF'i sertifika hatasıyla açılmadı). Bu yüzden yalnızca 'İstiklal Yolu' adının akademik kullanımda olduğunu göstermek için kullanıldı. Ekip tam metni okumalı; Şerife Bacı için büyük olasılıkla en iyi ikinci akademik kaynak.

### Bilgiler

**tarih_etiketi** — taslak: “Kış 1921”

- [ ] **İKİ KAYNAK** — Olay 1921 kışında yaşandı.
  - K50: “Kastamonulu tüccarlardan Cemil Pattaban’ın anlattığı ve bugün halk arasında yaşayan destan, 1921 kışında yaşanmıştı.”
  - K30: “İnebolu’dan Ankara’ya harp malzemesi götüren kağnı kollarında 1921 kışında donanlarda olmuştur”
  - Not: ANLATI: S1 olayı 'destan' diye niteliyor ve bir tanığın (Cemil Pattaban) anlatımına, Peker'in kitabı üzerinden dayandırıyor. İki akademik yayın farklı kurumlardan ama ikisi de aynı kök kaynağa (Peker) çıkıyor olabilir. S1'de olay, 9 Kasım 1921 tarihli telgraftan hemen sonra anlatılıyor; yani 1921 sonu kışı kastediliyor görünüyor.
- [ ] **ÇELİŞKİ** — Olayın ayı/günü (Aralık 1921 mi, Şubat 1921 mi?)
  - K53: “Kış şartları nedeniyle Aralık 1921'de donarak öldü”
  - K54: “sırtında çocuğu, önünde kağnısı ile kışla önüne kadar gelmiş”
  - K61: “21 ŞUBAT 1921”
  - K58: “Ölüm tarihiyle ilgili bazı çelişkili bilgilerin olduğunu dile getiren Şahin”
  - Not: İki resmî sayfa (S4, S5) 'Aralık 1921' diyor; S5'te ay bilgisi araç özetinde 'Aralık 1921' olarak geçti. MEB okul sayfası (S12) '21 Şubat 1921' diyor. AA haberinde (S9) tarihin çelişkili olduğu açıkça söyleniyor. Akademik kaynaklar (S1, S2) yalnızca '1921 kışı' diyor, ay vermiyor. Oyunda ay/gün KULLANILMAMALI.

**altin_bilgiler[0]** — taslak: “İnebolu İskelesi'ne gelen cephaneyi kağnılarla cepheye taşıyan Kastamonulu kadınlardandır.”

> Önerilen metin: İnebolu'ya deniz yoluyla gelen cephaneyi kağnılarla Kastamonu'ya taşıyan Kastamonulu kadınlardandır.

- [ ] **İKİ KAYNAK** — Cephane deniz yoluyla İnebolu'ya geliyor, oradan karadan taşınıyordu.
  - K50: “Kastamonu’nun Millî Mücadele’ye en önemli katkılarından biri de, İnebolu-Ankara hattı ile Batı Cephesi’nin ihtiyaç duyduğu silah ve cephaneyi sevk ve nakletmek oldu.”
  - K52: “Gerçekten Türk Mil­letinin yeni kalbi Ankara'ya denizden en yakın yer İnebolu idi.”
  - Not: BELGEYE DAYALI (genel tarih). Kaynaklar 'İnebolu Limanı' diyor; 'İskele' sözcüğü okuduğum akademik metinlerde geçmedi. S3 alıntısında satır sonu tiresi OCR'dan geliyor.
- [ ] **İKİ KAYNAK** — Taşımada kağnı kullanıldı.
  - K52: “Yol hattında kullanılan genel ikmal vasıtası kağnı idi.”
  - K50: “Şerife Bacı ve yetmişlik Hamamcı Kadı Salih Reis, silah ve cephaneni sevkiyatının kahramanları olarak öne çıkmıştır.”
  - Not: BELGEYE DAYALI. S1 alıntısındaki 'cephaneni' yazımı özgün metindeki dizgi hatasıdır.
- [ ] **İKİ KAYNAK** — Bu taşımada kadınlar büyük rol aldı.
  - K52: “Yavrulan ku­caklarında, kağnıları önlerinde, övendereleri ellerinde, Ankara’ya ve cep­heye naklediyorlar.”
  - K56: “Çoğunluğunu kadınların oluşturduğu Kastamonu halkı”
  - Not: BELGEYE DAYALI: S3'teki cümle Rauf Orbay'ın hatıratından alıntıdır (dönemin tanığı). 'Yavrulan' OCR hatasıdır (yavruları).
- [ ] **TEK KAYNAK** — Şerife Bacı Kastamonulu (Seydilerli) idi.
  - K50: “Seydilerli köylüleri bularak getirmiş göstermiştir. Onlar tanımışlar, ağlamışlar”
  - K58: “Üzerindeki kıyafetlerden Seydilerli olduğu düşünüldüğü”
  - Not: ANLATI. Kimlik, giysisinden yola çıkılarak belirlenmiş. S9 haberdir, sayıma girmez. 'Kastamonulu' demek güvenli; köy adı (Satı/Satılar) yalnızca haberlerde.

**altin_bilgiler[1]** — taslak: “Anlatılanlara göre, kar fırtınasında cephanenin ıslanmaması için onu kendi örtüsüyle örttü.”

> Önerilen metin: Anlatılanlara göre, karlı bir kış gecesinde cephaneyi korumak için yorganını kağnının üstüne örttü.

- [ ] **İKİ KAYNAK** — Cephaneyi korumak için üstüne kendi örtüsünü (kaynaklarda: yorganını) örttü.
  - K50: “kıymetli yükü korumak için üstüne yorganını örten bu genç kadının bir elinde övendire, kollarını açarak yorganın üzerine abanarak kaldığını”
  - K30: “bir kadının cephane yüklü kağnısı üzerine kapanmış halde donmuş olarak görülmesidir. Geride ise yorganın altında ağlayan öksüz bir bebek”
  - Not: ANLATI ('Anlatılanlara göre' kalmalı). Kaynaklardaki sözcük 'yorgan'dır; 'örtü' genel karşılık olarak kullanılabilir ama 'yorgan' daha doğru. S2 kadının adını vermiyor. İki kaynak aynı kök anlatıya (Peker) dayanıyor olabilir.
- [ ] **TEK KAYNAK** — Amaç cephanenin ISLANMAMASIYDI.
  - K52: “"Kar serpiyor, millet malıdır, nem kapmasın evladım" dedi. Ve yor­ganın uçlarını iyice serdi”
  - Not: DİKKAT: 'Islanmasın/nem kapmasın' sözü kaynaklarda ŞERİFE BACI'ya değil, Mustafa Necati'nin Çerkeş yakınlarında gördüğü ADI BİLİNMEYEN yaşlı bir nineye aittir (S3, S2). Şerife Bacı anlatısında S1 yalnızca 'kıymetli yükü korumak için' der. İki ayrı olay popüler anlatımda birbirine karışmış görünüyor.
- [ ] **BULUNAMADI** — Olay bir kar FIRTINASINDA oldu.
  - Not: Okuduğum akademik kaynaklarda 'fırtına' sözcüğü yok. S1'de 'kış bastırmakta', 'şehidin üzerindeki karları süpürmüş', 'sabaha karşı donduğu' ifadeleri var: kar ve don var, fırtına yok.

**altin_bilgiler[2]** — taslak: “Soğuktan donarak şehit oldu. Millî Mücadele'nin kadın şehitlerinin sembolü olarak anılır.”

> Önerilen metin: Soğuktan donarak şehit oldu. Adı bugün Millî Mücadele'nin kadın kahramanlarını simgeler.

- [ ] **İKİ KAYNAK** — Soğuktan donarak öldü (şehit oldu).
  - K50: “ancak Kışla önüne kadar gelebildiği ve şehre girmek nasip olmadan şose kenarında sabaha karşı donduğu görülmüştü.”
  - K30: “Kastamonu şehrinin kapısı sayılan Kışla önünde, bir kadının cephane yüklü kağnısı üzerine kapanmış halde donmuş olarak görülmesidir.”
  - K53: “Kış şartları nedeniyle Aralık 1921'de donarak öldü”
  - Not: ANLATI ağırlıklı (tanık anlatımı, hatırat yoluyla). Yer: Kastamonu Kışlası önü, yani İnebolu-Kastamonu yolunun SONUNDA, şehre girmeden.
- [ ] **TEK KAYNAK** — Millî Mücadele'nin kadın şehitlerinin sembolü olarak anılır.
  - K53: “Şehit Şerife Bacı adı Kastamonu'da Seydiler'de, İnebolu'da Kurtuluş Savaşı'nın kadın kahramanlarını simgelemektedir.”
  - K58: “Türk kadınının kahramanlık timsali: Şerife Bacı”
  - Not: Kaynaklardaki ifade 'kadın ŞEHİTLERİN sembolü' değil, 'kadın KAHRAMANLARI simgeler' / 'kahramanlık timsali' biçimindedir. S9 haberdir. S1 de 'sevkiyatının kahramanları olarak öne çıkmıştır' diyor.
- [ ] **BULUNAMADI** — 'İlk kadın şehit' ifadesi
  - Not: Açıp okuduğum 14 kaynağın hiçbirinde 'ilk kadın şehit' ifadesi geçmiyor. KULLANILMAMALI.

**paneller[0]** — taslak: “İnebolu İskelesi. Gemilerden indirilen cephane sandıkları kağnılara yükleniyor.”

- [ ] **İKİ KAYNAK** — Cephane İnebolu'da gemilerden karaya indirildi ve kağnılarla taşındı.
  - K50: “sandıklar, denkler elden ele omuzdan omuza uçuyor ve bu ateşli iman ve gayretle vapurlar, kayıklar, yalılar boşalıyordu.”
  - K52: “ramanlık halkalarının ilkini İnebolu kayıkçıları oluşturdu.”
  - Not: BELGEYE DAYALI. Gemiden kıyıya kayık/mavnayla taşındığı anlaşılıyor (S3: 'İnebolu Mavnacıları 1924 yılında ... İstiklâl Madalyasıyla ödüllendirildi'). 'Sandık' sözcüğü S1'de geçiyor.

**paneller[1]** — taslak: “Şerife, kucağında bebeğiyle kağnının yanında yürüyor.”

> Önerilen metin: Anlatılanlara göre Şerife, kundaktaki bebeğini de yanına alarak kağnısıyla yola çıkar.

- [ ] **İKİ KAYNAK** — Yola bebeğiyle çıktı.
  - K50: “Otlara sarılı top gülleri arasına yerleştirilmiş çulların içinde kundaklı bir kız çocuğunun dondan kurtulduğu”
  - K30: “Geride ise yorganın altında ağlayan öksüz bir bebek bırakarak giden bu kadınımız”
  - K54: “mermileri ve çocuğunu korumak uğruna donarak şehit olmuştur”
  - Not: ANLATI. Bebek kaynaklarda kız çocuğu ve SAĞ KURTULUYOR.
- [ ] **ÇELİŞKİ** — Bebek KUCAĞINDAYDI.
  - K50: “top gülleri arasına yerleştirilmiş çulların içinde kundaklı bir kız çocuğu”
  - K54: “sırtında çocuğu, önünde kağnısı ile kışla önüne kadar gelmiş”
  - K58: “kucağında henüz 9 aylık olan bebeğiyle”
  - Not: Üç ayrı biçim: kağnıda cephanenin arasında kundakta (S1, akademik), sırtında (S5), kucağında (S9, haber). En güçlü kaynak (S1) bebeği kağnının İÇİNDE, yorganın altında gösteriyor.

**paneller[2]** — taslak: “Kar fırtınası başlar. Yol görünmez olur.”

> Önerilen metin: Kar bastırır, hava iyice soğur. Anlatılanlara göre Şerife kafileden geri kalır.

- [ ] **TEK KAYNAK** — Yolda kar ve şiddetli soğuk vardı.
  - K50: “1921 yılı kışındaki sevkiyat ve nakliyat işlerinde kâfileler arasında donarak şehit olanlar olmuştu.”
  - Not: Kış ve don BELGEYE/akademik anlatıma dayalı. S2 de aynı şeyi söylüyor ('1921 kışında donanlarda olmuştur').
- [ ] **BULUNAMADI** — Kar FIRTINASI çıktı, yol görünmez oldu.
  - Not: Fırtına ve yolun görünmemesi kaynaklarda yok. S1'e göre kadın 'kafileden geri kalmış', 'yorgun argın' hâlde Kışla önüne gelebilmiş.

**paneller[3]** — taslak: “Anlatılanlara göre örtüsünü cephanenin üzerine örter.”

> Önerilen metin: Anlatılanlara göre yorganını cephanenin üzerine örter.

- [ ] **İKİ KAYNAK** — Örtüsünü (yorganını) cephanenin üzerine örttü.
  - K50: “kıymetli yükü korumak için üstüne yorganını örten bu genç kadının”
  - K30: “bir kadının cephane yüklü kağnısı üzerine kapanmış halde donmuş olarak görülmesidir.”
  - Not: ANLATI. Yorganın altında cephaneyle birlikte bebek de vardı (S1).

**paneller[4]** — taslak: “Sabah olur. Cephane kuru ve sağlam şekilde yerindedir.”

> Önerilen metin: Sabah olur. Anlatılanlara göre görevliler kağnıyı bulur ve cephaneyi şehre ulaştırır.

- [ ] **TEK KAYNAK** — Sabah görevliler kağnıyı buldu; kağnı şehre ulaştırıldı.
  - K50: “Bu mukaddes ve muazzez yükü gurur ve iftiharla Fırka Dairesi’nin önüne kadar çektiler.”
  - Not: ANLATI (Peker'den alıntı). Bulanlar: Devrekânili Cemil ve Beşiktaşlı Rıfat çavuşlar.
- [ ] **BULUNAMADI** — Cephane KURU kalmıştı.
  - Not: Hiçbir kaynak cephanenin kuru kaldığını açıkça söylemiyor.

**paneller[5]** — taslak: “Bugün Kastamonu'da Şerife Bacı'nın anıtı vardır.”

- [ ] **İKİ KAYNAK** — Kastamonu'da (Cumhuriyet Meydanı) Şerife Bacı anıtı vardır.
  - K54: “Atatürk ve Şehit Şerife Bacı Anıtı”
  - Not: BELGEYE DAYALI. S8 (Kastamonu Valiliği, 2017) yürüyüşün Cumhuriyet Meydanı'ndaki Şehit Şerife Bacı Anıtı önünde bittiğini bildiriyor; araç bu sayfadan birebir cümle vermedi, bu yüzden alıntı yok.
- [ ] **TEK KAYNAK** — Anıt 1990'da Prof. Dr. Tankut Öktem tarafından yapıldı.
  - K62: “1990 yılında Kastamonu Cumhuriyet Meydanı'na yapılmıştır.”
  - Not: S5 (Bakanlık portalı) de 1990 ve Tankut Öktem diyor; S13 zayıf ve S5 ile aynı metinden geliyor olabilir, bu yüzden tek kaynak sayıldı. Oyunda yıl ve sanatçı adı gerekmiyor.

**mini_oyun (aciklama + olaylar + final)** — taslak: “Cephane yüklü kağnıyı İnebolu'dan Kastamonu yönüne götür. [...] Elinde tek bir kalın örtü var. [...] Cephane cepheye ulaştı.”

> Önerilen metin: final.anlatim[0] için: "Anlatılanlara göre Şerife Bacı, karlı bir kış gecesinde cephaneyi korumak için yorganını kağnının üstüne örttü." final.anlatim[1] için: "Soğuktan donarak şehit oldu. Adı bugün Millî Mücadele'nin kadın kahramanlarını simgeliyor."

- [ ] **TEK KAYNAK** — Yol İnebolu'dan Kastamonu'ya gider; yolda dik yokuşlar vardır.
  - K52: “Yolun zor kısmı, İne­bolu'nun ikiçayı, Çatalçeşme, Topçuoğlu, Kaygıncık, Küre, Ecevit yo­kuşları idi.”
  - Not: BELGEYE DAYALI. 'Buzlu yokuş' olayı bununla uyumlu. Donmuş dere, yol ayrımı, mola yeri olayları kurgusaldır (dosyada zaten böyle not edilmiş).
- [ ] **TEK KAYNAK** — 'Örtüyü cephaneye ört / örtüye kendin sarın' seçimi
  - K50: “kıymetli yükü korumak için üstüne yorganını örten”
  - Not: ANLATI. Kaynakta yorgan hem cephaneyi hem bebeği örtüyor; seçim 'cephane mi, kendisi mi' biçiminde kurulduğu için kaynakla çelişmiyor.
- [ ] **İKİ KAYNAK** — Olay yolun neresinde oldu?
  - K50: “ancak Kışla önüne kadar gelebildiği ve şehre girmek nasip olmadan”
  - K30: “Kastamonu şehrinin kapısı sayılan Kışla önünde”
  - Not: Olay yolun sonunda, Kastamonu'nun girişinde. Oyunda fırtına sahnesinin son durak olması bununla uyumlu.

**haber** — taslak: “{İnebolu} İskelesi'nden cephane taşıyan Şerife Bacı, {cephane} ıslanmasın diye örtüsünü verdi ve {kar fırtınasında} şehit oldu. Çeldiriciler: İzmir, bebeği, cephede”

> Önerilen metin: Şablon: "{0}'dan cephane taşıyan Şerife Bacı, anlatılanlara göre {1} korumak için yorganını kağnıya örttü ve {2} şehit oldu." Doğrular: İnebolu · cephaneyi · soğuktan donarak. Çeldiricilerde 'bebeği' yerine başka bir sözcük kullanılmalı.

- [ ] **İKİ KAYNAK** — İnebolu'dan cephane taşıdı.
  - K50: “Bu Türk anası bugün Kastamonlular tarafından Şerife Bacı olarak bilinen kahraman Türk kadınıydı.”
  - K54: “sırtında çocuğu, önünde kağnısı ile kışla önüne kadar gelmiş”
- [ ] **ÇELİŞKİ** — 'bebeği' çeldiricisi YANLIŞ cevap sayılıyor.
  - K54: “mermileri ve çocuğunu korumak uğruna donarak şehit olmuştur”
  - K61: “Tek korunma aracı olan yün yorganını da top mermilerini ve kızını yağıştan korusun diye kağnının üzerine örtmüş”
  - Not: SORUN: Kaynaklara göre yorgan hem cephaneyi hem bebeği örtüyordu. 'Bebeği ıslanmasın diye örtüsünü verdi' de kaynaklara göre yanlış sayılamaz. 'bebeği' çeldiricisi değiştirilmeli (ör. 'öküzler', 'erzak').
- [ ] **BULUNAMADI** — 'kar fırtınasında' şehit oldu.
  - Not: Kaynaklar 'donarak' diyor; fırtına yok. Doğru cevap 'donarak' ya da 'soğuktan donarak' olabilir.

**biliyor_muydun** — taslak: “İnebolu'dan Kastamonu ve Çankırı üzerinden Ankara'ya uzanan bu yola bugün "İstiklal Yolu" deniyor.”

- [ ] **İKİ KAYNAK** — Yolun güzergâhı İnebolu-Kastamonu-Çankırı-Ankara'dır.
  - K52: “Görüldüğü gibi istiklâl harbinin önde gelen pek çok şahsiyeti İnebolu-Kastamonu-Çankırı yolu”
  - K55: “İnebolu-Kastamonu-Ilgaz-Çankırı-Kalecik ve Ankara güzergâhı”
  - K56: “İnebolu-Küre-Seydiler-Kastamonu-Ilgaz-Çankırı-Kalecik ve Ankara”
  - Not: BELGEYE DAYALI. S1'de de 'İnebolu-Kastamonu-Çankırı-Kalecik-Ankara hattı' geçiyor. Uzunluk: S6 344 km, S7 340 km diyor (küçük fark); oyunda uzunluk verilmemeli ya da 'yaklaşık 340 km' denmeli.
- [ ] **İKİ KAYNAK** — Bu yola bugün 'İstiklal Yolu' deniyor.
  - K56: “İstiklal Yolu Tarihi Milli Parkı, Cumhurbaşkanlığı Makamının 01.11.2018 tarih ve 302 sayılı kararıyla ilan edilmiştir.”
  - K63: “İstiklal Savaşı'nda Bir Yol: İstiklal Yolu ve Kastamonu Bölgesindeki Lojistik Faaliyetlerin Değerlendirmesi”
  - Not: BELGEYE DAYALI. S6 sayfasının başlığı 'Tarihi İstiklal Yolu'. Dönemin kaynakları yolu 'İnebolu-Ankara hattı/şosesi' diye anıyor; 'İstiklal Yolu' sonradan verilen addır, 'bugün ... deniyor' ifadesi bu yüzden doğru.

### Röportaj taslakları

- [ ] **Cephane nereden geliyordu?**
  - Taslak: Cephane deniz yoluyla İnebolu'ya geliyordu. Oradan kağnılarla Kastamonu ve Çankırı üzerinden Ankara'ya doğru taşınıyordu.
  - 1. cümle: K50, K52
  - 2. cümle: K52 (kağnı ve güzergâh), K50 (hat)
- [ ] **Kadınlar bu yolda neler yaşadı?**
  - Taslak: Bu yoldaki işlerin çoğunu kadınlar yapıyordu. Kimi kadınlar bebeklerini de yanlarına alıp kağnılarının önünde yürüyordu. 1921 kışında yolda donarak şehit olanlar oldu.
  - 1. cümle: K52 (Rauf Orbay'ın gözlemi: geri hizmetlerin büyük bölümü kadınlarca yapılıyordu)
  - 2. cümle: K52 ('Yavruları kucaklarında, kağnıları önlerinde')
  - 3. cümle: K50, K30
- [ ] **O kış gecesi ne oldu?**
  - Taslak: Anlatılanlara göre Şerife kafileden geri kalmış, ancak Kastamonu Kışlası'nın önüne kadar gelebilmişti. Yorganını cephanenin üstüne örtmüş, sabaha karşı soğuktan donmuştu. Yorganın altındaki bebeği ise sağ bulundu.
  - 1. cümle: K50
  - 2. cümle: K50, K30
  - 3. cümle: K50 (bebek sağ kurtuldu), K30 (yorganın altında ağlayan bebek)

### Ek bulgular

- **1_olayin_tarihi:** Akademik kaynaklar (S1 TÜBA/Çelebi, S2 Sarıçoban) yalnızca '1921 kışı' diyor. S1'de olay 9 Kasım 1921 tarihli telgraftan sonra anlatıldığı için 1921 sonu kışı kastediliyor görünüyor. Resmî ama ikincil sayfalar (S4 İnebolu Kaymakamlığı, S5 Kültür Portalı) 'Aralık 1921' diyor. Bir MEB okul sayfası (S12) '21 Şubat 1921' diyor. AA haberinde (S9) ölüm tarihiyle ilgili 'çelişkili bilgiler' olduğu söyleniyor. SONUÇ: 'Kış 1921' etiketi kalabilir; ay ve gün yazılmamalı.
- **2_bebek:** Bebekle yola çıktığı üç kaynakta geçiyor (S1, S2, S5) ama bu da ANLATIDIR. S1'e göre bebek kundakta bir kız çocuğu, kağnıda cephanenin arasında, çulların içinde ve yorganın altında; SAĞ kurtuluyor, sütanne bulunuyor, köylüler anneyle bebeği köylerine götürüyor. Bebeğin taşınma biçimi çelişkili: kağnıda (S1), sırtında (S5), kucağında (S9). Yaşı çelişkili: 6 aylık (S12), 8-9 aylık (S9). Adı çelişkili ve yalnızca zayıf kaynaklarda: Sıdıka (S10), Elif (S11). Oyunda bebeğin adı ve yaşı VERİLMEMELİ; 'kucağında' yerine 'bebeğini de yanına alarak' denmeli.
- **3_ortu_yorgan:** Kaynaklardaki sözcük 'yorgan'dır. S1: 'kıymetli yükü korumak için üstüne yorganını örten bu genç kadının ... kollarını açarak yorganın üzerine abanarak kaldığını'. Yorganın altında cephane VE bebek var. 'Islanmasın / nem kapmasın' sözü başka bir olaya aittir: Mustafa Necati'nin Çerkeş yakınlarında gördüğü adı bilinmeyen yaşlı nine ('Kar serpiyor, millet malıdır, nem kapmasın evladım' - S3, S2). Popüler anlatımda bu iki olay birleştirilmiş. Oyunda 'cephaneyi korumak için' demek daha güvenli; 'ıslanmasın diye' denirse bunun Şerife Bacı için kaynakta olmadığı bilinmeli.
- **4_ilk_kadin_sehit_ve_sembol:** 'İlk kadın şehit' ifadesi açıp okuduğum hiçbir kaynakta yok; KULLANILMAMALI. 'Kadın ŞEHİTLERİN sembolü' de birebir geçmiyor. Geçen ifadeler: S4 'Kurtuluş Savaşı'nın kadın kahramanlarını simgelemektedir'; S9 (haber) 'Türk kadınının kahramanlık timsali'; S1 'sevkiyatının kahramanları olarak öne çıkmıştır'. GÜVENLİ KULLANIM: 'Adı bugün Millî Mücadele'nin kadın kahramanlarını simgeler.'
- **5_anit:** Adı: 'Atatürk ve Şehit Şerife Bacı Anıtı' (S5'e göre 'Kastamonu Türk Kadınları Anıtı' olarak da bilinir). Yeri: Kastamonu merkez, Cumhuriyet Meydanı (S5, S8). Yılı ve sanatçısı: 1990, Prof. Dr. Tankut Öktem (S5; S13 zayıf). Ayrıca S4'e göre 2001'de İnebolu sahilinde bir parkta da anıt yapılmış; S9'a göre Seydiler'de de anıt var. Paneldeki 'Bugün Kastamonu'da Şerife Bacı'nın anıtı vardır' cümlesi doğru.
- **6_istiklal_yolu:** Ad ve güzergâh iki resmî kurumda (S6 Çankırı İl Kültür ve Turizm Müdürlüğü, S7 Tarım ve Orman Bakanlığı) ve akademik yayınlarda (S3 Turan: güzergâhın durak durak listesi; S1; S14 başlık) geçiyor. S7: İstiklal Yolu Tarihi Milli Parkı 01.11.2018'de ilan edildi; İnebolu-Kastamonu bölümü yaklaşık 95 km. Toplam uzunluk S6'da 344 km, S7'de 340 km. S3'e göre duraklar: İnebolu, Küre, Ecevit, Seydiler, Devrekani, Halkacılar, Kastamonu, Ilgaz, Çankırı, Kalecik, Ankara. Dönem kaynakları yolu 'İnebolu-Ankara hattı' diye anıyor.
- **7_tarihsel_kimlik_tartismasi:** Kişinin varlığını doğrudan sorgulayan, bu konuya ayrılmış hakemli bir makale BULAMADIM. Ama okuduğum kaynaklar kimliğin belgeye değil anlatıya dayandığını açıkça gösteriyor: (a) S1 olayı 'Cemil Pattaban'ın anlattığı ve bugün halk arasında yaşayan destan' diye sunuyor ve tek dayanak olarak Nurettin Peker'in hatırat-derleme kitabını gösteriyor; aktarılan dönem metninde kadının adı YOK, yazar 'bugün Kastamonlular tarafından Şerife Bacı olarak bilinen' diye ekliyor. (b) S2 aynı olayı anlatıyor ama kadının adını hiç vermiyor. (c) S1'e göre kimliği, giysisinden köyü tahmin edilerek ve Seydilerli köylülere gösterilerek belirlenmiş. (d) S10 (haber) adın ilk kez 6 Haziran 1972'de Nurettin Peker'in bir gazete söyleşisinde açıklandığını yazıyor; bu bilgi yalnızca haberde, doğrulanamadı. (e) S9 (haber): Seydilerli olduğu 'düşünülüyor', mezar yeri 'tahmin ediliyor', ölüm tarihi çelişkili. SONUÇ: Olayın çekirdeği (1921 kışında Kastamonu Kışlası önünde cephane yüklü kağnısının başında donan, bebeği sağ kurtulan bir kadın) iki akademik yayında var; 'Şerife' adı ve ayrıntılar anlatıdır. Bölümün tamamında 'Anlatılanlara göre' kalıbı korunmalı. Ekip, Peker'in kitabını (Kastamonu Valiliği 2018 baskısı, s. 385-386) ve S14'ü (Özlü 2019) kütüphaneden bizzat görmeli.
- **yontem_notu:** S1, S2, S3 PDF olarak indirilip metinleri doğrudan okundu; alıntıları birebirdir (S3'te OCR kaynaklı tire ve harf hataları korunmuştur). S4-S13'teki alıntılar WebFetch aracının sayfadan aktardığı biçimdedir; araç zaman zaman özetlediği için ekip bunları sayfadan gözle doğrulamalı. Açılamayanlar: dergipark 912350 (HTTP 429), kho.msu.edu.tr'deki Özlü tam metni (sertifika hatası), Kastamonu İl Kültür Müdürlüğü e-broşürü (dosya çok büyük). Atatürk Ansiklopedisi'nde Şerife Bacı maddesi aramada çıkmadı.

---

## Halide Edib Adıvar

13 kaynak okundu (6 akademik makale, 2 TDV maddesi, 4 Anadolu Ajansı sayfası, 1 sinema veri tabanı). Doğrulananlar (iki bağımsız kaynak): Halide Edib'in ünlü konuşması 23 Mayıs 1919'daki ilk Sultanahmet Mitingi'ndedir ve miting İzmir'in işgalini protesto içindi; 1920'de eşiyle Anadolu'ya geçti; ajans fikri Geyve'nin Akhisar istasyonunda Yunus Nadi ile konuşurken doğdu ve ajans 6 Nisan 1920'de kuruldu; Batı Cephesi'nde onbaşı olarak görev yaptı; Ateşten Gömlek Millî Mücadele'yi anlatır. Çelişkiler: onbaşılıktan sonraki rütbe (TDV: başçavuş, AA: çavuş), Ankara'ya varış günü (1 ya da 2 Nisan 1920), romanın kitap yılı (1922 / 1339). Tek kaynakta kalanlar: geçişin Özbekler Tekkesi yoluyla yapılması, cephedeki raporlama görevinin ayrıntıları, filmin 1923'te Muhsin Ertuğrul tarafından çekilmesi. Bulunamayanlar: geçişte kılık değiştirme/at ayrıntıları, üniforma, İstiklal Madalyası; panel 0'daki "siyahlarla örtülü pankartlar" yerine kaynaklar "siyah bayraklar" diyor.

### Kaynaklar

- **K64** — İnci Enginün, ADIVAR, Halide Edip, *TDV İslâm Ansiklopedisi* (ansiklopedi). <https://islamansiklopedisi.org.tr/adivar-halide-edip> — Güvenilir ansiklopedi maddesi. Alıntılar sayfa özetleyici araçla alındı; ekip sayfayı açıp birebir kontrol etmeli.
- **K65** — Beytullah Kaya, Burcu Başaran, Millî Mücadele'de Halide Edip Adıvar'ın Rolü, *Çekmece Sosyal Bilimler Dergisi, 11 (23), s. 124-138 (İstanbul Sabahattin Zaim Üniversitesi; yayım 15.02.2024)* (makale). <https://dergipark.org.tr/tr/download/article-file/3667539> — Hakemli dergi makalesi. PDF metni indirilip doğrudan okundu; alıntılar birebir. Makale sayfası: https://dergipark.org.tr/tr/pub/cekmece/article/1421578
- **K66** — Nuray Özdemir, Milli Mücadele Dönemi Mitinglerinde Türk Kadını, *Belgi Dergisi, S. 21, Kış 2021/I, s. 1-22 (Pamukkale Üniversitesi Atatürk İlkeleri ve İnkılâp Tarihi Araştırma ve Uygulama Merkezi)* (makale). <https://dergipark.org.tr/tr/download/article-file/1202398> — Hakemli dergi makalesi; dönemin gazetelerine (İkdam, Vakit) dayanıyor. PDF metni doğrudan okundu; alıntılar birebir. Mitinglerin tarihleri için en sağlam kaynak.
- **K67** — Hacı Murat Arabacı, Milli Mücadelenin Hazırlık Safhasında Halide Edib Adıvar'ın Faaliyetleri ve Mustafa Kemal Atatürk, *Dumlupınar Üniversitesi (DPÜ) Sosyal Bilimler Dergisi (sayı/yıl PDF'te görülemedi)* (makale). <https://dergipark.org.tr/tr/download/article-file/55439> — Üniversite dergisi makalesi. PDF metni doğrudan okundu. Sayı ve yıl bilgisi ekipçe DergiPark sayfasından tamamlanmalı. Sultanahmet Mitingi için gün vermiyor.
- **K68** — Necdet Aysal, Mustafa Kemal Paşa'nın Ankara'da İlk Günleri "Ziraat Mektebi", *Ankara Üniversitesi (açık ders malzemesi olarak yayımlanan dergi makalesi; dergi adı PDF'te doğrulanamadı)* (makale). <https://acikders.ankara.edu.tr/pluginfile.php/37278/mod_resource/content/0/MUSTAFA%20KEMAL%20PA%C5%9EANIN%20ANKARADA%20%C4%B0LK%20G%C3%9CNLER%C4%B0%20Z%C4%B0RAAT%20MEKTEB%C4%B0.pdf> — Arşiv belgelerine (ATASE) ve Yunus Nadi'nin anılarına dipnotlu akademik makale. PDF metni doğrudan okundu; alıntılar birebir. Dergi künyesi tamamlanmalı.
- **K69** — AA'nın temelini atan iki isim: Halide Edip Adıvar ve Yunus Nadi Abalıoğlu, *Anadolu Ajansı (kurumsal haberler)* (kurumsal_web). <https://www.aa.com.tr/tr/kurumsal-haberler/aanin-temelini-atan-iki-isim-halide-edip-adivar-ve-yunus-nadi-abalioglu/2198353> — Kurumun kendi tarihçesi; ajansın kuruluşu için kullanılabilir. Halide Edib biyografisi kısmı S1 metnini tekrar ediyor (bağımsız değil). Alıntılar özetleyici araçla alındı.
- **K70** — Milli Mücadele'nin kahramanı: Halide Edip, *Anadolu Ajansı* (haber). <https://www.aa.com.tr/tr/kultur/milli-mucadelenin-kahramani-halide-edip/2782970> — Haber; zayıf kaynak, iki kaynak sayımına girmez. Alıntılar özetleyici araçla alındı.
- **K71** — Güvenilir haberciliğin yüz yıllık yolculuğu: Anadolu Ajansı, *Anadolu Ajansı (AA Yüz Yaşında)* (kurumsal_web). <https://www.aa.com.tr/tr/aa-yuz-yasinda/guvenilir-haberciligin-yuz-yillik-yolculugu-anadolu-ajansi/1792827> — Kurumun kendi tarihçesi. S6 ile aynı kurum; birlikte tek kaynak sayılır. Alıntılar özetleyici araçla alındı.
- **K72** — Ahmet Metehan Şahin, Millî Mücadele'den Millî Kimlik İnşasına: Ateşten Gömlek, *Türkiyat Mecmuası, 29, 'Milli Mücadele' Özel Sayısı (2019), s. 151-168 (İstanbul Üniversitesi)* (makale). <https://dergipark.org.tr/tr/download/article-file/862247> — Hakemli dergi makalesi. PDF metni doğrudan okundu; alıntılar birebir.
- **K73** — Şerif Aktaş, Halide Edip Adıvar (1882, İstanbul – 9 Ocak 1964, İstanbul), *Ankara Üniversitesi Dil ve Tarih-Coğrafya Fakültesi Türkoloji Dergisi 20, 1 (2013), s. 1-12 (Büyük Türk Klâsikleri, C. 11, Ötüken, 1992'den yeniden basım)* (makale). <https://dergipark.org.tr/tr/download/issue-file/17905> — Üniversite dergisinde yayımlanan biyografi. PDF metni doğrudan okundu; alıntılar birebir.
- **K74** — Ateşten Gömlek (film künyesi), *TSA Türk Sineması Araştırmaları (Bilim ve Sanat Vakfı; Kültür ve Turizm Bakanlığı destekli)* (kurumsal_web). <https://tsa.org.tr/tr/film/filmgoster/5349/atesten-gomlek> — Sinema veri tabanı; vakıf sitesi (resmî kurum değil). Film bilgisi için tek kaynak. Bilgiler özetleyici araçla alındı.
- **K75** — Orhan F. Köprülü, ADIVAR, Abdülhak Adnan, *TDV İslâm Ansiklopedisi* (ansiklopedi). <https://islamansiklopedisi.org.tr/adivar-abdulhak-adnan> — S1 ile aynı kurum; bağımsız ikinci kaynak sayılmaz. Alıntı özetleyici araçla alındı.
- **K76** — Anadolu Ajansının isim annesi: Halide Edip Adıvar, *Anadolu Ajansı (AA Yüz Yaşında)* (haber). <https://www.aa.com.tr/tr/aa-yuz-yasinda/anadolu-ajansinin-isim-annesi-halide-edip-adivar/1792826> — Haber niteliğinde; zayıf kaynak. Alıntılar özetleyici araçla alındı.

### Bilgiler

**tarih_etiketi** — taslak: “1919”

- [ ] **İKİ KAYNAK** — Halide Edib'in konuştuğu (ilk) Sultanahmet Mitingi 23 Mayıs 1919'da yapıldı.
  - K66: “İlk Sultan Ahmet Mitingi 23 Mayıs 1919 Cuma günü düzenlenmiştir.”
  - K65: “23 Mayıs 1919’da Sultanahmet Meydanı’nda gerçekleşen miting için Halide Edip, minarelerin dar şerefelerinden siyah bayrakların dalgalandığını”
  - Not: "1919" doğru. Daha kesin etiket istenirse "23 Mayıs 1919" yazılabilir. AA sayfalarındaki (S6, S7) "15 Mayıs 1919" mitingin değil, İzmir'in işgalinin tarihidir.

**altin_bilgiler[0]** — taslak: “İzmir'in işgalini protesto eden Sultanahmet Mitingi'nde (1919) halka seslenen bir konuşma yaptı.”

- [ ] **İKİ KAYNAK** — Sultanahmet Mitingi İzmir'in işgalini protesto etmek için yapıldı.
  - K66: “İstanbul’da İzmir’in işgalini protesto için ilk miting 19 Mayıs 1919 tarihinde Fatih meydanında yapılmıştır. 20 Mayıs’ta Üsküdar, 22 Mayıs’ta Kadıköy ve 23 Mayıs’ta Sultanahmet Mitingleri düzenlenmiştir.”
  - K64: “15 Mayıs 1919'da İzmir'in işgalinden sonra düzenlenen Fatih, Üsküdar ve Sultanahmet mitinglerine konuşmacı olarak katıldı.”
- [ ] **İKİ KAYNAK** — Miting 1919'da yapıldı (23 Mayıs 1919).
  - K66: “İlk Sultan Ahmet Mitingi 23 Mayıs 1919 Cuma günü düzenlenmiştir.”
  - K65: “19 Mayıs 1919’da Fatih Meydanı, 22 Mayıs 1919’da Kadıköy Meydanı, 23 Mayıs 1919’da Sultanahmet Meydanı’nda gerçekleşen miting konuşmaları”
  - Not: Birden fazla Sultanahmet mitingi var (S3: 23 Mayıs 1919, 30 Mayıs 1919, 13 Ocak 1920). Halide Edib'in ünlü konuşması 23 Mayıs 1919'daki ilk mitingdedir. S3'e göre 30 Mayıs mitinginin tek kadın konuşmacısı Şükufe Nihal'dir.
- [ ] **İKİ KAYNAK** — Halide Edib bu mitingde halka seslenen bir konuşma yaptı.
  - K66: “Mitingin tek kadın hatibi olan Halide Edip Hanım işgalci güçlerin yaptığı zulüm ve haksızlıkları kınayan konuşmasında şunları söylemiştir:”
  - K67: “Hemen hemen bütün İstanbul halkının katıldığı bu mitingdeki konuşmasıyla Halide Edib, adeta efsaneleşir.”
  - K64: “15 Mayıs 1919'da İzmir'in işgalinden sonra düzenlenen Fatih, Üsküdar ve Sultanahmet mitinglerine konuşmacı olarak katıldı.”

**altin_bilgiler[1]** — taslak: “Anadolu'ya geçerek Millî Mücadele'ye katıldı. Yunus Nadi ile birlikte Anadolu Ajansı'nın kuruluşunda rol aldı.”

- [ ] **İKİ KAYNAK** — Anadolu'ya geçerek Millî Mücadele'ye katıldı (1920, eşi Dr. Adnan ile).
  - K64: “1920'de kocasıyla birlikte Anadolu'ya geçerek Millî Mücadele'ye fiilen katıldı.”
  - K73: “16 Mart 1920'de İstanbul'un işgali üzerine, kocası Dr. Adnan beyle beraber Özbekler Tekkesi marifeti ile Anadolu'ya geçer.”
  - Not: S12 (aynı kurum, TDV) de aynı bilgiyi veriyor.
- [ ] **İKİ KAYNAK** — Yunus Nadi ile birlikte Anadolu Ajansı'nın kuruluşunda rol aldı.
  - K68: “Milli bir ajansın kurulması meselesi Yunus Nadi (Abalıoğlu) ile Halide Edip (Adıvar)’in çalışmaları ile gerçekleşmiştir.”
  - K69: “Anadolu Ajansı 6 Nisan 1920'de kuruldu.”
  - Not: S6'da fikrin Yunus Nadi ile Halide Edib arasındaki sohbette doğduğu yazıyor (bkz. paneller[3]). TDV maddesinde (S1) ajans konusu geçmiyor.

**altin_bilgiler[2]** — taslak: “Cephede görev alarak rütbe aldı. Millî Mücadele'yi "Ateşten Gömlek" romanında anlattı.”

> Önerilen metin: Batı Cephesi'nde onbaşı rütbesiyle görev aldı. Millî Mücadele'yi "Ateşten Gömlek" romanında anlattı.

- [ ] **İKİ KAYNAK** — Cephede (Batı Cephesi) görev aldı.
  - K65: “Hizmeti fiiliyeyi askeriyyeye kabul ve Garp cephesine memur edildiğinizi tebliğ ederim.”
  - K73: “1921'de, isteği üzerine, Mustafa Kemal Paşa kendisine on başı rütbesi verir ve Batı cephesindeki birliklere katılır.”
  - K64: “Cephelerde dolaştı, Kızılay hastahanelerinde görev aldı.”
  - Not: S2'deki alıntı Mustafa Kemal Paşa'nın 18 Ağustos 1921 (18/8/37) tarihli telgrafındandır.
- [ ] **İKİ KAYNAK** — Onbaşı rütbesi aldı.
  - K64: “kendisine önce onbaşılık, daha sonra da başçavuşluk rütbeleri verildi.”
  - K65: “Sakarya Savaşı sırasında Miralay Asım, Halide Edip’i onbaşı yapmış ve ona uğur alameti gibi davrandığını belirtmiştir.”
  - K73: “1921'de, isteği üzerine, Mustafa Kemal Paşa kendisine on başı rütbesi verir ve Batı cephesindeki birliklere katılır.”
  - K72: “Cephede onbaşı rütbesiyle vatanına hizmet eden Halide Edib”
  - Not: Onbaşılık kesin. Rütbeyi kimin verdiği konusunda fark var: S2 (Halide Edib'in anılarına dayanarak) Miralay Asım; S10 Mustafa Kemal Paşa. Oyunda "kimin verdiği" yazılmamalı.
- [ ] **ÇELİŞKİ** — Onbaşılıktan sonra daha yüksek bir rütbe aldı (çavuş / başçavuş).
  - K64: “kendisine önce onbaşılık, daha sonra da başçavuşluk rütbeleri verildi.”
  - K70: “savaş sonunda 'çavuş' rütbesi verildi.”
  - K76: “savaş sonunda Halide Edib'e 'Çavuş' rütbesi verildi.”
  - Not: TDV İslâm Ansiklopedisi "başçavuş", AA haberleri "çavuş" diyor. AA haber niteliğinde (zayıf). Güvenli ifade: "onbaşı rütbesiyle görev yaptı, sonra rütbesi yükseltildi" ya da yalnızca "onbaşı".
- [ ] **İKİ KAYNAK** — Millî Mücadele'yi "Ateşten Gömlek" romanında anlattı.
  - K73: “Halide Edib'in Millî Mücadele'yi anlatan iki romanı vardır: Ateşten Gömlek ve Vurun Kahpeye.”
  - K72: “Halide Edib’in “Sakarya Ordusuna” ithaf ettiği Ateşten Gömlek romanı, 1922 yılının Haziran ayında İkdam Gazetesi’nde yayımlanmaya başlamıştır.”

**paneller[0]** — taslak: “Sultanahmet Meydanı. Siyahlarla örtülü pankartlar ve büyük bir kalabalık var.”

> Önerilen metin: Sultanahmet Meydanı. Minarelerde siyah bayraklar dalgalanıyor, meydanı büyük bir kalabalık dolduruyor.

- [ ] **İKİ KAYNAK** — Miting alanında siyah bayraklar / siyah örtüler vardı.
  - K66: “hitabet kürsüsüne ve miting alanına siyah bayraklar asılmış bir milli matem gösterisi içinde”
  - K67: “Minarelerin şerefelerinden sarkan siyah bayraklar”
  - Not: Kaynaklarda "siyahlarla örtülü pankart" değil, "siyah bayraklar" ve üzerinde yazı olan dövizler geçiyor. S3'e göre kürsünün üzerinde siyah çerçeve içinde bir yazı vardı.
- [ ] **İKİ KAYNAK** — Büyük bir kalabalık vardı.
  - K66: “Bu mitingle ilgili dönemin basınında 150-200 bin kişinin katıldığına dikkat çekilmiştir.”
  - K67: “Miting günü yaklaşık iki yüz bin kişi Sultanahmet Meydanına toplanmıştı.”
  - Not: Sayı vermek gerekmiyor; "büyük bir kalabalık" güvenli.

**paneller[1]** — taslak: “Halide Edib kürsüde halka seslenir.”

- [ ] **İKİ KAYNAK** — Halide Edib kürsüden konuştu.
  - K66: “Mitingin tek kadın hatibi olan Halide Edip Hanım işgalci güçlerin yaptığı zulüm ve haksızlıkları kınayan konuşmasında şunları söylemiştir:”
  - K67: ““Vallahi!” sesleri Halide Edib'in ayaklarının altındaki kürsüyü sarsıyordu.”

**paneller[2]** — taslak: “İşgal altındaki İstanbul'dan gizlice Anadolu'ya geçer.”

> Önerilen metin: İstanbul işgal edilince eşi Dr. Adnan ile birlikte Anadolu'ya geçer.

- [ ] **İKİ KAYNAK** — İstanbul'un işgali (16 Mart 1920) üzerine Anadolu'ya geçti.
  - K73: “16 Mart 1920'de İstanbul'un işgali üzerine, kocası Dr. Adnan beyle beraber Özbekler Tekkesi marifeti ile Anadolu'ya geçer.”
  - K68: “Yunus Nadi (Abalıoğlu) ve Halide Edip (Adıvar), 2 Nisan 1920’de Cami (Baykut), Adnan (Adıvar), Yusuf Kemal (Tengirşenk), Hüsrev (Gerede) Beyler’le birlikte Ankara’ya gelmişlerdir”
  - K75: “şehrin İtilâf devletlerince işgali üzerine eşi Halide Edib'le birlikte Anadolu'ya geçerek Millî Mücadele'ye fiilen katıldı (1920).”
- [ ] **TEK KAYNAK** — Geçiş gizlice yapıldı.
  - K73: “kocası Dr. Adnan beyle beraber Özbekler Tekkesi marifeti ile Anadolu'ya geçer.”
  - Not: "Gizlice" sözcüğü okunan kaynaklarda birebir geçmiyor; S5 yolculuğu "Ankara’ya kaçış" diye anıyor. Kılık değiştirme, at/araba gibi ayrıntılar açılabilen güvenilir kaynaklarda bulunamadı; çizim genel kalmalı.

**paneller[3]** — taslak: “Ankara yolunda Yunus Nadi ile bir ajans kurma fikri doğar.”

- [ ] **İKİ KAYNAK** — Ajans fikri Ankara yolunda, Geyve'nin Akhisar istasyonunda Halide Edib ile Yunus Nadi'nin konuşmasında doğdu.
  - K68: “Anadolu Ajansı fikri, Geyve kazasının Akhisar nahiyesindeki bir istasyonda doğmuştur.”
  - K69: “1 Nisan 1920'de İstanbul'dan Ankara'ya geçmekte iken Geyve'nin Akhisar nahiyesi istasyonunda Yunus Nadi ile Halide Edib arasındaki sohbette”
  - Not: S5'e göre fikri açan Halide Edib'dir: "Halide Edip, ona ajans teşkilâtı kurulması hakkında görüşlerini açmış ve bu fikir Yunus Nadi tarafından olumlu karşılanmıştır." S7 haberine göre Akhisar bugün Sakarya'nın Pamukova ilçesidir (tek, zayıf kaynak).

**paneller[4]** — taslak: “Halide Edib cephede üniformasıyla görev alır.”

> Önerilen metin: Halide Edib Batı Cephesi'nde onbaşı olarak görev alır.

- [ ] **İKİ KAYNAK** — Cephede görev aldı.
  - K65: “İsmet Paşa, Halide Edip’e artık ordusunda bir nefer olduğunu, Birinci Şube’ye memur ettiğini söylemiştir.”
  - K73: “Mustafa Kemal Paşa kendisine on başı rütbesi verir ve Batı cephesindeki birliklere katılır.”
- [ ] **BULUNAMADI** — Üniforma giydi.
  - Not: Okunan kaynaklarda üniforma açıkça geçmiyor. Metinden "üniformasıyla" çıkarılabilir; çizim konusunda ekip fotoğraf kaynağı aramalı.

**haber** — taslak: “Halide Edib Hanım, Sultanahmet Mitingi'nde İzmir'in işgalini protesto etti. Daha sonra Anadolu Ajansı'nın kuruluşunda rol aldı.”

- [ ] **İKİ KAYNAK** — Sultanahmet Mitingi'nde İzmir'in işgalini protesto etti.
  - K66: “20 Mayıs’ta Üsküdar, 22 Mayıs’ta Kadıköy ve 23 Mayıs’ta Sultanahmet Mitingleri düzenlenmiştir.”
  - K64: “15 Mayıs 1919'da İzmir'in işgalinden sonra düzenlenen Fatih, Üsküdar ve Sultanahmet mitinglerine konuşmacı olarak katıldı.”
- [ ] **İKİ KAYNAK** — Anadolu Ajansı'nın kuruluşunda rol aldı.
  - K68: “Milli bir ajansın kurulması meselesi Yunus Nadi (Abalıoğlu) ile Halide Edip (Adıvar)’in çalışmaları ile gerçekleşmiştir.”
  - K69: “Geyve'nin Akhisar nahiyesi istasyonunda Yunus Nadi ile Halide Edib arasındaki sohbette”
  - Not: Çeldiriciler (Erzurum, Antep, Sebilürreşad) şablonla çelişmiyor.

**biliyor_muydun** — taslak: “"Ateşten Gömlek" romanı Millî Mücadele yıllarını anlatır ve sinemaya da uyarlanmıştır.”

- [ ] **İKİ KAYNAK** — Roman Millî Mücadele yıllarını anlatır.
  - K73: “Ateşten Gömlek adlı roman, Millî Mücadele'nin bir bakıma destanı gibidir, İzmir'in işgalinden sonraki umutsuzluk günlerini, Millî Mücadele'nin doğuşunu ve kurtuluşu anlatır.”
  - K72: “Türk edebiyatı içerisinde Kurtuluş Savaşı hakkında ilk romanı yazan Halide Edib Adıvar”
- [ ] **TEK KAYNAK** — Roman sinemaya uyarlanmıştır (1923, yönetmen Muhsin Ertuğrul).
  - K74: “Yapım Yılı: 1923 — Yönetmen: Muhsin Ertuğrul — Yapım Şirketi: Kemal Film — Eser: Halide Edib”
  - Not: S11 alıntısı künye alanlarının özetidir, cümle değildir. Açılabilen ikinci bir güvenilir kaynak bulunamadı (AA'nın Muhsin Ertuğrul haberinde film yalnızca listede geçiyor). Film bilgisi yaygın olarak bilinse de "iki kaynak" için ekip bir kaynak daha bulmalı (ör. Kültür ve Turizm Bakanlığı Sinema Genel Müdürlüğü ya da bir sinema tarihi kitabı).

**biliyor_muydun.bonus_soru** — taslak: “Halide Edib'in Millî Mücadele yıllarını anlattığı romanın adı nedir? (Safahat / Ateşten Gömlek / Yeni Gün)”

- [ ] **İKİ KAYNAK** — Doğru cevap: Ateşten Gömlek.
  - K73: “Halide Edib'in Millî Mücadele'yi anlatan iki romanı vardır: Ateşten Gömlek ve Vurun Kahpeye.”
  - K72: “Ateşten Gömlek romanı, 1922 yılının Haziran ayında İkdam Gazetesi’nde yayımlanmaya başlamıştır.”
  - Not: Halide Edib'in Millî Mücadele'yi anlatan ikinci bir romanı da var (Vurun Kahpeye); seçeneklerde olmadığı için sorun yok.

**mini_oyun.kartlar (uygun kartlar)** — taslak: “"İzmir'in işgalini kabul etmiyoruz!", "Hep birlikte söz verelim: Bu vatanı savunacağız!" vb. (özgün kartlar)”

- [ ] **İKİ KAYNAK** — Konuşmanın konusu işgale karşı çıkış ve birlikti; sonunda kalabalığa yemin ettirildi (kartların genel uyumu).
  - K66: “Konuşmasının sonunda miting meydanını dolduran kalabalığa bayrak, hak ve istiklal için can vermekten çekinmeyeceği, hiçbir kuvvete boyun eğmeyeceği konusunda defalarca yemin ettirmiştir.”
  - K65: “konuşmasının sonunda topluluğa insanlık ve adalet esaslarına bağlı kalmak ve hangi şartlar altında olursa olsun hiçbir kuvvete boyun eğmemek konularında yemin ettirmiştir.”
  - Not: Kartlar alıntı değil, özgün; bu yüzden tarihî iddia taşımıyor. "Söz verelim" kapanış kartı gerçek konuşmanın yeminle bitmesiyle uyumlu. "Bu vatanı savunacağız" ifadesi kaynakta birebir yok ama alıntı olarak sunulmadığı için sorun değil.

**mini_oyun.kartlar (çağ dışı kartların 'neden' metinleri)** — taslak: “"o yıllarda haberler telgrafla ve gazeteyle yayılırdı"; "1919'da internet yoktu"; "1919'da televizyon yoktu"”

- [ ] **TEK KAYNAK** — O yıllarda haberler telgrafla ve gazeteyle yayılırdı.
  - K68: “bu ajans haberlerinin telgrafhanesi olan her yere ve olmayan yerlerde de camilere ilan halinde yapıştırılmasını önermiştir.”
  - Not: Genel bilgi; S5 telgraf ve gazetelerin kullanıldığını gösteriyor. S4'e göre Halide Edib 16 Mayıs 1919'da İzmir'in işgalini telefonla öğrendi ("Miss Dodd'tan gelen bir telefon ile"); yani 1919'da İstanbul'da telefon vardı. Kart "telefonla bütün dünyaya duyurmak" dediği için yine çağ dışı sayılabilir ama 'neden' metni "o yıllarda telefon yoktu" anlamına gelecek biçimde yazılmamalı (şu anki metin uygun).
- [ ] **BULUNAMADI** — 1919'da internet ve televizyon yoktu.
  - Not: Genel kültür bilgisi; bu araştırmada kaynak aranmadı.

### Röportaj taslakları

- [ ] **Sultanahmet'te kalabalığa ne söylediniz?**
  - Taslak: İşgalin haksızlığını anlattım. Davamızın Türkiye'nin hakkı ve istiklali olduğunu söyledim. Sonunda hep birlikte, hiçbir kuvvete boyun eğmeyeceğimize yemin ettik.
  - 1. cümle: K66
  - 2. cümle: K66
  - 3. cümle: K66, K65
- [ ] **İstanbul'dan Anadolu'ya nasıl geçtiniz?**
  - Taslak: İstanbul 16 Mart 1920'de işgal edilince eşim Dr. Adnan Bey'le birlikte Anadolu'ya geçtim. Yolda, Akhisar İstasyonu'nda Yunus Nadi Bey'le buluştum. Nisan 1920 başında Ankara'ya vardık.
  - 1. cümle: K73, K64
  - 2. cümle: K68, K69
  - 3. cümle: K68 (2 Nisan 1920), K71 (1 Nisan 1920) — gün çelişkili olduğu için "Nisan başı" denildi
- [ ] **Ajans kurmak neden gerekliydi?**
  - Taslak: Anadolu, olup bitenlerden yeterince haber alamıyordu. Yanlış haberlere ve kışkırtmalara karşı milleti uyanık tutmak gerekiyordu. Alınan kararları da halka vaktinde duyurmalıydık.
  - 1. cümle: K68
  - 2. cümle: K68, K69
  - 3. cümle: K68
- [ ] **Cephede ne gördünüz?**
  - Taslak: Sakarya Savaşı sırasında onbaşı olarak Batı Cephesi'nde görev yaptım. Birliklerin asker, cephane ve silah durumunu raporlara yazdım. Sonra köyleri dolaşıp halkın gördüğü zararı inceledim ve raporladım.
  - 1. cümle: K65, K64, K73
  - 2. cümle: K65 (tek kaynak)
  - 3. cümle: K65 (tek kaynak; Tetkik-i Mezalim görevi, dil 13–14 yaşa göre yumuşatıldı)

### Ek bulgular

- **1_sultanahmet_mitingi_tarihi:** Birden fazla Sultanahmet mitingi var. S3'e (Özdemir, Belgi Dergisi) göre: ilk miting 23 Mayıs 1919 Cuma; ikincisi 30 Mayıs 1919 ("dua günü", tek kadın konuşmacı Şükufe Nihal); sonuncusu 13 Ocak 1920 (öne çıkan kadın konuşmacı Nakiye Hanım). Halide Edib'in ünlü, yeminle biten konuşması 23 Mayıs 1919'daki İLK Sultanahmet Mitingi'ndedir (S3 ve S2 aynı tarihi veriyor: iki bağımsız hakemli makale). Öncesinde 19 Mayıs 1919 Fatih ve 22 Mayıs 1919 Kadıköy mitinglerinde de konuştu (S2, S3). 10 Ekim 1919 tarihli bir miting yalnızca arama sonuçlarında (Vikipedi) göründü, güvenilir kaynakta doğrulanmadı. Dikkat: AA sayfalarındaki "15 Mayıs 1919" İzmir'in işgal tarihidir, miting tarihi değildir. Küçük tutarsızlık: S4 Kadıköy mitingi için "22 Mayıs 1919 Cuma" diyor, S3 ise 23 Mayıs'ı Cuma sayıyor (23 Mayıs 1919 Cuma'dır; S4'teki gün adı hatalı görünüyor).
- **2_anadoluya_gecis:** Zaman: 16 Mart 1920'de İstanbul'un işgali üzerine, eşi Dr. Adnan ile birlikte (S10, S1, S12). Biçim: S10'a göre "Özbekler Tekkesi marifeti ile" (Üsküdar'daki tekke; tek kaynak). Kılık değiştirme, at/araba ile yolculuk ve yola çıkış günü (arama sonuçlarında "19 Mart 1920, at sırtında" diye geçti) açılabilen güvenilir kaynaklarda DOĞRULANAMADI; oyunda kullanılmamalı. Yolun son bölümü: Geyve/Akhisar İstasyonu'nda Yunus Nadi ile buluşma (S5, S6; S7 haberine göre buluşma 31 Mart'ta Geyve'de). Ankara'ya varış ÇELİŞKİLİ: S5 (arşiv belgesine dipnotla) "2 Nisan 1920"; S8 (AA) kafilenin Ankara'ya "1 Nisan 1920'de" ulaştığını, S6 (AA) ise 1 Nisan 1920'de hâlâ Akhisar istasyonunda olduklarını yazıyor. Güvenli ifade: "Nisan 1920 başında Ankara'ya vardı." Ankara'ya birlikte gelenler (S5): Yunus Nadi, Cami (Baykut), Adnan (Adıvar), Yusuf Kemal (Tengirşenk), Hüsrev (Gerede).
- **3_anadolu_ajansi:** Fikrin doğduğu yer: Geyve kazasının Akhisar nahiyesindeki istasyon (S5 ve S6: iki bağımsız kurum). S7 haberine göre burası bugün Sakarya'nın Pamukova ilçesi (zayıf, tek kaynak). Rolü: S5'e göre ajans fikrini Yunus Nadi'ye açan ve adını öneren Halide Edib'dir ("Evvela kendini ve mümkünse bütün vatanı kurtaracak Anadolu’dur. O halde kararımızı vermiş olalım: Anadolu Ajansı…"); S8'de ise Yunus Nadi'nin "Bana 'Anadolu Ajansı' en iyi bir isim gibi görünüyor" sözü aktarılıyor. İkisi fikri 4-5 Nisan 1920'de Ziraat Mektebi'nde Mustafa Kemal Paşa'ya açtı (S5). Ajans 6 Nisan 1920'de kuruldu (S5, S6, S8). Kuruluşu duyuran genelgenin tarihi çelişkili: S5 "8 Nisan 1920", S8 "9 Nisan". Halide Edib Ankara'da ajans ve Hâkimiyet-i Milliye için telgraflardan haber seçti, İngilizce gazetelerden çeviri yaptı (S5, kendi anılarından). Bu bilgiler Yunus Nadi bölümüyle (altın bilgi: 6 Nisan 1920) tutarlı.
- **4_cephe_ve_rutbeler:** 16 Ağustos 1921'de Mustafa Kemal Paşa'ya telgrafla gönüllü olmak istediğini yazdı; 18 Ağustos 1921 (18/8/37) tarihli cevapla Batı (Garp) Cephesi'ne atandı (S2, anılarına dayanarak; tek kaynak). Karargâhta Birinci Şube'de birliklerin asker, cephane ve silah durumunu raporladı; Sakarya Savaşı'ndan sonra Tetkik-i Mezalim (işgal sırasında halkın uğradığı zararları inceleme) görevinde çalıştı (S2). Öncesinde Kızılay hastanelerinde görev aldı (S1, S10). Rütbeler: ONBAŞI kesin (S1, S2, S9, S10). Sonraki rütbe ÇELİŞKİLİ: TDV (S1) "önce onbaşılık, daha sonra da başçavuşluk"; AA haberleri (S7, S13) "savaş sonunda çavuş". Rütbeyi veren kişi de farklı anlatılıyor: S2 Miralay Asım, S10 Mustafa Kemal Paşa. Öneri: oyunda yalnızca "onbaşı" kullanılsın; "Halide Onbaşı" olarak anıldığı S2'de de geçiyor ("Onbaşı Halide Edip"). İstiklal Madalyası aldığına dair açılabilen güvenilir kaynaklarda bilgi BULUNAMADI.
- **5_atesten_gomlek:** Roman: Haziran 1922'de İkdam gazetesinde tefrika edilmeye başladı, "Sakarya Ordusuna" ithaf edildi (S9; tek kaynak). Kitap yılı kaynaklarda farklı: S2 ve S10 "1922"; TDV (S1) "İstanbul 1339" (özetleyici araç bunu 1923 diye çevirdi; 1339 Rumî/Hicrî yılı 1922-1923'e denk gelebilir, ekip kontrol etmeli). Güvenli ifade: "1922'de gazetede yayımlanmaya başladı." Film: 1923, yönetmen Muhsin Ertuğrul, yapım Kemal Film, oyuncular arasında Bedia Muvahhit ve Neyyire Ertuğrul (Neyyir); gösterim 23 Nisan 1923 (S11, TSA veri tabanı; TEK kaynak, vakıf sitesi). İkinci güvenilir kaynak açılamadı; "sinemaya uyarlandı" ifadesi için bir kaynak daha bulunmalı.
- **acilamayan_kaynaklar:** Atatürk Ansiklopedisi'ndeki "Halide Edip Adıvar (1882-1964)" maddesi (https://ataturkansiklopedisi.gov.tr/detay/600/) açıldı ama içerik yüklenmedi (yalnızca başlık geldi); kaynak sayılmadı. Ekip tarayıcıda açıp özellikle rütbe, Ankara'ya varış günü ve film bilgisi için ikinci kaynak olarak kullanabilir. TDV'de ayrı bir "Ateşten Gömlek" ve "Anadolu Ajansı" maddesi bulunamadı.
- **dogum_yili_notu:** Oyunda kullanılmıyor ama bilgi için: doğum yılı kaynaklarda farklı (S2 ve S10: 1882; arama sonucunda TDV için 1884 göründü). Kullanılacaksa doğrulanmalı.
- **alinti_uyarisi:** S2, S3, S4, S5, S9, S10 alıntıları PDF metninden doğrudan kopyalandı (birebir). S1, S6, S7, S8, S11, S12, S13 alıntıları web sayfasını özetleyen araç üzerinden alındı; küçük sözcük farkları olabilir, heroes.json'a yazılmadan önce sayfalar açılıp karşılaştırılmalı.

---

## Yunus Nadi

13 kaynak açıldı (5 ATAM ansiklopedi/dergi, 4 hakemli makale, 3 AA kurumsal sayfa, 1 zayıf haber). Doğrulananlar (iki kaynak): Yunus Nadi'nin gazeteciliği, Halide Edib'le birlikte Anadolu Ajansı'nın kuruluşuna öncülüğü, 6 Nisan 1920 tarihi, ajansın amacı (Altın Bilgi 3 aynen kalabilir), tren yolculuğunda doğan fikir, adın seçilmesi ve haberlerin telgrafla dağıtılması. Düzeltilmesi gerekenler: Ankara'daki gazetenin adı "Yeni Gün" değil "Anadolu'da Yeni Gün" ("Yeni Gün" İstanbul'daki 1918 adı); 'resmî haber ajansı' ifadesi doğrulanamadı — ajans devletin de ortak olduğu özerk bir anonim şirket. Çelişkiler: gazetenin Ankara'da çıkışı 9/10 Ağustos 1920; ilk bülten 12/13 Nisan 1920; istasyondaki konuşma 31 Mart/1 Nisan 1920 — oyunda gün verilmemeli. Tek kaynakta kalanlar: istasyonun adı (Geyve'nin Akhisar nahiyesi — yalnızca AA) ve ilk bültenin metni (yalnızca AA).

### Kaynaklar

- **K77** — Bengül Bolat, Yunus Nadi Abalıoğlu (1879-1945), *Atatürk Araştırma Merkezi — Atatürk Ansiklopedisi* (ansiklopedi). <https://ataturkansiklopedisi.gov.tr/detay/110/Yunus-Nadi-Abal%C4%B1o%C4%9Flu-(1879--1945)> — Birinci öncelikli kaynak. Sayfa JavaScript ile açıldığı için madde metni sitenin kendi veri adresinden (apiko.ayk.gov.tr/v1/1/itemPublic/byId/110) tam metin olarak okundu; alıntılar birebir.
- **K78** — Mustafa Arıkan, Anadolu'da Yenigün Gazetesi, *Atatürk Araştırma Merkezi — Atatürk Ansiklopedisi* (ansiklopedi). <https://ataturkansiklopedisi.gov.tr/detay/571/Anadolu%E2%80%99da-Yenig%C3%BCn-Gazetesi> — Birinci öncelikli kaynak; tam metin okundu (byId/571). S1 ile AYNI kurum: iki kaynak sayımında tek kurum sayıldı.
- **K79** — Süleyman Hilmi Bengi, Ülkelerin Bağımsızlık Mücadeleleri ve Haber Ajansları İlişkisi – Anadolu Ajansı Örneği, *Atatürk Araştırma Merkezi Dergisi, Cilt XXXV, Sayı 100, Kasım 2019* (makale). <https://atamdergi.gov.tr/tam-metin/194/tur> — Hakemli dergi; tam metin okundu, alıntılar birebir. Yayıncı yine ATAM (S1, S2 ile aynı kurum). Yazar Anadolu Ajansı tarihi uzmanı; S4 ile aynı yazar.
- **K80** — Hilmi Bengi, Tarihsel Süreç İçinde Anadolu Ajansı'nın Özgün Kurumsal Yapısı (1920-2011), *Ankara Üniversitesi Türk İnkılâp Tarihi Enstitüsü Atatürk Yolu Dergisi, S 50, Güz 2012, s. 299-341* (makale). <https://dergipark.org.tr/tr/pub/ankuayd/article/22446> — Hakemli dergi; PDF (dergipark.org.tr/tr/download/article-file/20480) indirilip tam metin okundu, alıntılar birebir. Kurum olarak ATAM'dan bağımsız, ama yazar S3 ile aynı kişi.
- **K81** — Ayşe Kübra Birey, Anadolu Ajansı'nın kuruluşu, *Nosyon: Uluslararası Toplum ve Kültür Çalışmaları Dergisi, 2025, 16, s. 182-196* (makale). <https://dergipark.org.tr/tr/pub/nosyon/article/1772798> — Hakemli dergi; PDF (article-file/5189452) indirilip tam metin okundu, alıntılar birebir. İkincil derleme: Özkaya (1985), Tekeli (2002), Bengi gibi kaynakları aktarıyor.
- **K69** — AA'nın temelini atan iki isim: Halide Edip ve Yunus Nadi, *Anadolu Ajansı (kurumsal haberler)* (kurumsal_web). <https://www.aa.com.tr/tr/kurumsal-haberler/aanin-temelini-atan-iki-isim-halide-edip-adivar-ve-yunus-nadi-abalioglu/2198353> — Kurumun kendi tarihçe yazısı. Sayfa yalnızca WebFetch ile okunabildi (araç metni bir yardımcı modelden geçiriyor); alıntılar 'aynen' istenerek alındı ama ekip sayfayı açıp harfi harfine bir kez daha karşılaştırmalı.
- **K82** — Anadolu Ajansı 101 yıldır Anadolu'nun sesini dünyaya duyuruyor, *Anadolu Ajansı (kurumsal haberler)* (kurumsal_web). <https://www.aa.com.tr/tr/kurumsal-haberler/anadolu-ajansi-101-yildir-anadolunun-sesini-dunyaya-duyuruyor/2198331> — S6 ile AYNI kurum (tek kurum sayılır). Yalnızca WebFetch ile okundu; alıntılar ekipçe sayfadan bir kez daha karşılaştırılmalı. İlk bülten metni günümüz Türkçesine çevrilmiş hâlidir, özgün Osmanlıca metin değildir.
- **K83** — Tarihçe, *Anadolu Ajansı (kurumsal sayfa)* (kurumsal_web). <https://www.aa.com.tr/tr/p/tarihce> — S6, S7 ile aynı kurum. Yalnızca WebFetch ile okundu. Sayfada 'resmî haber ajansı' ifadesi geçmiyor; 'özerk statü' deniyor.
- **K84** — (sayfadan okunamadı), Millî Mücadele Yıllarında Anadolu'da Yeni Gün Gazetesinde Cumhuriyet, Cihan İnkılabı ve Millî Komünizm Meseleleri, *Üsküdar Üniversitesi Sosyal Bilimler Dergisi* (makale). <https://dergipark.org.tr/tr/pub/uskudarsbd/issue/58724/777834> — Hakemli dergi; yalnızca özet sayfası WebFetch ile okundu. Yazar adı ve sayı bilgisi alınamadı; ekip tamamlamalı.
- **K85** — Hakan Aydın, Sakarya Savaşı'nda Anadolu'da Yeni Gün, *Selçuk İletişim Dergisi, C 6, S 2, 2010, s. 218-229* (makale). <https://dergipark.org.tr/tr/pub/josc/issue/19020/200644> — Hakemli dergi; yalnızca özet sayfası WebFetch ile okundu. Künye S2'nin kaynakçasından alındı.
- **K86** — Emin Alp Malkoç, Basın Yayın Genel Müdürlüğü (Matbuat ve İstihbarat Müdüriyet-i Umumiyesi), *Atatürk Araştırma Merkezi — Atatürk Ansiklopedisi* (ansiklopedi). <https://ataturkansiklopedisi.gov.tr/detay/692/Bas%C4%B1n-Yay%C4%B1n-Genel-M%C3%BCd%C3%BCrl%C3%BC%C4%9F%C3%BC-(Matbuat-ve-%C4%B0stihbarat-M%C3%BCd%C3%BCriyet-i-Umumiyesi)> — Tam metin okundu (byId/692). S1-S3 ile aynı kurum.
- **K87** — Banu Altınova, Halide Edip Adıvar (1882-1964), *Atatürk Araştırma Merkezi — Atatürk Ansiklopedisi* (ansiklopedi). <https://ataturkansiklopedisi.gov.tr/detay/600/Halide-Edip-Ad%C4%B1var-(1882-1964)> — Tam metin okundu (byId/600). S1-S3 ile aynı kurum.
- **K88** — Şafak Tanır, Anadolu Ajansı Kuruluşu, *İLETİM — İstanbul Üniversitesi İletişim Fakültesi uygulama gazetesi (6 Nisan 2021)* (haber). <https://iletim.istanbul.edu.tr/index.php/2021/04/06/anadolu-ajansi-kurulusu/> — ZAYIF KAYNAK: öğrenci gazetesi haberi; metin büyük ölçüde AA'nın tarihçe metnine dayanıyor, bağımsız sayılmaz. İki kaynak sayımına katılmadı. Tam metin okundu.

### Bilgiler

**tarih_etiketi** — taslak: “Nisan 1920”

- [ ] **İKİ KAYNAK** — Anadolu Ajansı Nisan 1920'de (6 Nisan) kuruldu; Yunus Nadi bu sırada Ankara'daydı.
  - K77: “Halide Edip (Adıvar) ile birlikte 6 Nisan 1920’de Anadolu Ajansını kurmuştur.”
  - K80: “Ziraat Mektebinde 5 Nisan akşamı yapılan toplantıda Ajansla ilgili hazırlıklara son şekli verilmiş ve Anadolu Ajansı ertesi gün, 6 Nisan 1920’de kurulmuştur.”
  - K69: “Anadolu Ajansı 6 Nisan 1920'de kuruldu.”
  - Not: Etiket aynen kalabilir. tarih_dogrulandi: true yapılabilir.

**altin_bilgiler[0]** — taslak: “Gazetecidir. Halide Edib ile birlikte Anadolu Ajansı'nın kurulmasına öncülük etti. Ajans 6 Nisan 1920'de kuruldu.”

- [ ] **İKİ KAYNAK** — Yunus Nadi gazetecidir.
  - K77: “Edebiyatçı, siyasetçi, gazeteci.”
  - K84: “Gazete, Yeni Gün adıyla Yunus Nadi (Abalıoğlu) Bey yönetiminde 2 Eylül 1918'de İstanbul'da yayın hayatına başlamıştır.”
  - K69: “Yunus Nadi, 2 Eylül 1918'de yayın hayatına başlayan Yeni Gün gazetesini kurdu.”
  - Not: S6 alıntısı cümlenin son bölümüdür (baş tarafı kısaltıldı).
- [ ] **İKİ KAYNAK** — Halide Edib ile birlikte Anadolu Ajansı'nın kurulmasına öncülük etti.
  - K77: “Halide Edip (Adıvar) ile birlikte 6 Nisan 1920’de Anadolu Ajansını kurmuştur.”
  - K81: “Halide Edip (Adıvar) ve Yunus Nadi’nin çalışmaları ile Ankara’da Anadolu Ajansı bu amaçla kuruldu”
  - K79: “Anadolu Ajansı’nın kuruluşunda da etkin rol üstlenen İzmir Mebusu Yunus Nadi Bey”
  - K87: “Anadolu Ajansı’nın kurulmasında rol oynayan Halide Edip”
  - Not: Ayrıntı: Kaynaklara göre ajans Mustafa Kemal Paşa'nın talimatı ve 6 Nisan 1920 tarihli genelgesiyle kuruldu; S4 kurucu olarak Mustafa Kemal'i gösteriyor ("AA'nın kurucusu Gazi Mustafa Kemal (Atatürk)"). Bu yüzden oyundaki 'öncülük etti' ifadesi 'tek başına kurdu' demekten daha doğru; aynen kalsın.
- [ ] **İKİ KAYNAK** — Ajans 6 Nisan 1920'de kuruldu.
  - K79: “Gazi Mustafa Kemal’in talimatıyla Anadolu Ajansı (AA), 6 Nisan 1920’de kuruldu.”
  - K80: “Gazi Mustafa Kemal'in Hey'eti Temsiliye Reisi sıfatıyla 6 Nisan 1920'de yayımladığı bir genelge ile faaliyete başlamıştır.”
  - K86: ““Anadolu Ajansı”, henüz TBMM açılmadan önce 6 Nisan 1920’de kurulacaktı.”
  - K69: “Anadolu Ajansı 6 Nisan 1920'de kuruldu.”
  - Not: Tarihte çelişki yok. ATAM + Ankara Üniv. dergisi + AA: üç ayrı kurum.

**altin_bilgiler[1]** — taslak: “Ankara'da "Yeni Gün" gazetesini çıkararak Millî Mücadele'yi halka duyurdu.”

> Önerilen metin: Ankara'da "Anadolu'da Yeni Gün" gazetesini çıkararak Millî Mücadele'yi halka duyurdu.

- [ ] **ÇELİŞKİ** — Gazetenin Ankara'daki adı "Yeni Gün"dür.
  - K77: “Ankara’da 9 Ağustos 1920’den itibaren çıkarmaya başladığı “Anadolu’da Yeni Gün” Gazetesi ile Milli Mücadele fikrinin yayılmasında etkili olmuştur.”
  - K78: “Gazete, 9 Ağustos 1920 tarihinden itibaren Anadolu’da Yenigün adıyla yayınlarına devam etmiştir.”
  - K84: “10 Ağustos 1920'den itibaren Ankara'da Anadolu'da Yeni Gün adıyla yayını sürdürmüş”
  - K85: “Ağustos 1920'den itibaren Ankara'da, Anadolu'da Yeni Gün adıyla tekrar çıkmıştır.”
  - K69: “Yunus Nadi, öte yandan 10 Ağustos 1920'den itibaren gazetesini "Anadolu'da Yeni Gün" adıyla çıkardı.”
  - Not: Bütün kaynaklar birleşiyor: "Yeni Gün" gazetenin 2 Eylül 1918'de İSTANBUL'da çıkan adıdır; ANKARA'da çıkan gazetenin adı "Anadolu'da Yeni Gün"dür (S2 "Yenigün" diye bitişik yazıyor). Oyundaki ad eksik; düzeltilmeli. (Kısa "Yeni Gün" adı kaynaklarda gündelik kullanımda da geçiyor, ör. S1: "Yeni Gün Matbaası"; ama tam ad daha doğru.)
- [ ] **ÇELİŞKİ** — Gazete Ankara'da çıktı; çıkış tarihi.
  - K77: “Ankara’da 9 Ağustos 1920’den itibaren çıkarmaya başladığı “Anadolu’da Yeni Gün” Gazetesi”
  - K78: “Gazete, 9 Ağustos 1920 tarihinden itibaren Anadolu’da Yenigün adıyla yayınlarına devam etmiştir.”
  - K84: “10 Ağustos 1920'den itibaren Ankara'da Anadolu'da Yeni Gün adıyla yayını sürdürmüş”
  - K69: “10 Ağustos 1920'den itibaren gazetesini "Anadolu'da Yeni Gün" adıyla çıkardı.”
  - K85: “Ağustos 1920'den itibaren Ankara'da, Anadolu'da Yeni Gün adıyla tekrar çıkmıştır.”
  - Not: Gazetenin Ankara'da çıktığı iki kaynakla kesin. Gün konusunda çelişki: ATAM Ansiklopedisi (S1, S2) 9 Ağustos 1920; AA (S6) ve Üsküdar Üniv. makalesi (S9) 10 Ağustos 1920. (S2'nin kaynakçasında "10 Ağustos 1920 S 2-382" yani 10 Ağustos'un Ankara'daki 2. sayı olduğu görülüyor; bu 9 Ağustos'u destekler ama kesin hüküm ekibe/öğretmene kalmalı.) Oyunda gün verilmesin: "Ağustos 1920".
- [ ] **İKİ KAYNAK** — Gazete Millî Mücadele'yi halka duyurdu / destekledi.
  - K77: “Gazetesinde bu mücadelenin amacı, gerekliliği ile ilgili yazılarıyla halkın bu konuda aydınlanmasında etkili olmuştur.”
  - K78: “Yenigün, Millî Mücadele’yi destekleyen en önemli gazetelerin başında gelmektedir.”
  - K85: “Ankara Hükümeti'nin yarı resmi sözcülüğünü yapan Anadolu'da Yeni Gün, Millî Mücadele basını içinde en kuvvetli ve nitelikli gazetelerden biridir.”

**altin_bilgiler[2]** — taslak: “Ajansın amacı, Millî Mücadele haberlerini doğru ve hızlı biçimde Anadolu'ya ve dünyaya ulaştırmaktı.”

- [ ] **İKİ KAYNAK** — Amaç, Millî Mücadele'nin sesini Anadolu'ya ve yurt dışına (dünyaya) duyurmaktı.
  - K79: “Ankara’da kurulan ajansın ilk amacı Millî Mücadele Hareketi’nin sesini Anadolu’ya ve yurt dışına duyurmaktı.”
  - K81: “Anadolu Ajansı milli mücadele döneminde kısıtlı imkanlar zemininde, haberlerini yurdun her bir köşesine ulaştırma hedefiyle çalışmıştır.”
  - K77: “Milli Mücadeleyi desteklemek, halkı haberdar etmek amacıyla Halide Edip (Adıvar) ile birlikte 6 Nisan 1920’de Anadolu Ajansını kurmuştur.”
  - K83: “İçeride halkı bilgilendirmek, dışarıda ise ulusal mücadeleyi savunmak gerekiyordu.”
- [ ] **İKİ KAYNAK** — Haberlerin 'doğru' olması amaçlanıyordu.
  - K79: “efrâd-ı ümmetin dahilî ve haricî en sahih havadis ile tenvîri (aydınlatılması) ihtiyac-ı mübremi (kaçınılmaz ihtiyacı)”
  - K81: “milli birlik için tehlike oluşturacak iç ve dış yayınlara karşı kamuoyunu doğru bilgilendirmek ve uyarmak”
  - K82: “din ve vatan kardeşlerimizin en doğru haber ve bilgiler alabilmelerini sağlamak için kurulan Anadolu Ajansı”
  - Not: S3 alıntısı Mustafa Kemal Paşa'nın 6 Nisan 1920 tarihli kuruluş genelgesindendir; 'en sahih havadis' = 'en doğru haber'.
- [ ] **İKİ KAYNAK** — Haberlerin 'hızlı' ulaştırılması amaçlanıyordu.
  - K81: “Büyük Millet Meclisi kararlarını hızlı bir biçimde halka ulaştırmak amacını taşıyordu.”
  - K79: “Gazi Mustafa Kemal, bültenlerin en hızlı biçimde dağıtılması amacıyla posta ve telgraf idaresini de uyarmış”

**paneller[0]** — taslak: “Ankara yolunda bir tren istasyonu. Yunus Nadi ve Halide Edib konuşuyor.”

> Önerilen metin: Ankara'ya giden tren yolunda bir istasyon molası. Yunus Nadi ve Halide Edib bir haber ajansı kurmayı konuşuyor.

- [ ] **İKİ KAYNAK** — Yunus Nadi ile Halide Edib, Ankara'ya giderken tren yolculuğunda bir ajans kurma fikrini konuştu.
  - K79: “31 Mart 1920’de İstanbul’dan Ankara’ya yaptıkları tren yolculuğu sırasında bir millî haber ajansı kurulması fikrini tartıştılar.”
  - K69: “1 Nisan 1920'de İstanbul'dan Ankara'ya geçmekte iken Geyve'nin Akhisar nahiyesi istasyonunda Yunus Nadi ile Halide Edib arasındaki sohbette doğdu.”
  - K82: “Akhisar İstasyonu'nda verilen mola sırasında 'Ankara'ya gider gitmez bir ajans teşkilatı kurulması' konusunu değerlendirdi.”
  - Not: S3 kendi dipnotunda Yunus Nadi'nin 'Ankara'nın İlk Günleri' ve Halide Edib'in 'Türk'ün Ateşle İmtihanı' adlı anı kitaplarını kaynak gösteriyor.
- [ ] **TEK KAYNAK** — İstasyonun adı: Geyve'nin Akhisar nahiyesi istasyonu.
  - K69: “Geyve'nin Akhisar nahiyesi istasyonunda Yunus Nadi ile Halide Edib arasındaki sohbette doğdu.”
  - K82: “Akhisar İstasyonu'nda verilen mola sırasında”
  - Not: İstasyon adını yalnızca AA'nın kendi sayfalarında (tek kurum) bulabildim. ATAM dergisindeki makale (S3) yalnızca 'tren yolculuğu sırasında' diyor; S13 (zayıf) 'Geyve’de buluştular' diyor. Akademik bir ikinci kaynakta 'Akhisar istasyonu' adını göremedim (anı kitaplarının kendisine erişemedim). DİKKAT: Bu Akhisar, Manisa'nın Akhisar ilçesi DEĞİL; Geyve'ye bağlı eski Akhisar nahiyesi. (Bugünkü adının Sakarya'nın Pamukova ilçesi olduğu arama sonuçlarında geçti ama açıp okuduğum bir güvenilir sayfada doğrulayamadım.) Oyunda istasyon adı verilmesin ya da ekip Yunus Nadi'nin 'Ankara'nın İlk Günleri' kitabından (s. 77 civarı) doğrulasın.
- [ ] **ÇELİŞKİ** — Konuşmanın günü.
  - K79: “31 Mart 1920’de İstanbul’dan Ankara’ya yaptıkları tren yolculuğu sırasında”
  - K69: “1 Nisan 1920'de İstanbul'dan Ankara'ya geçmekte iken”
  - Not: ATAM Dergisi 31 Mart 1920, AA 1 Nisan 1920 diyor. Panelde gün yok; eklenmesin. Gerekirse 'Nisan 1920 başında' denebilir.

**paneller[1]** — taslak: “İşgalcilerin yalan haberlerine karşı milletin kendi sesi olmalıdır.”

> Önerilen metin: İşgal altındaki basın gerçeği yazamıyor. Milletin kendi haber kaynağı olmalıdır.

- [ ] **İKİ KAYNAK** — Ajans, işgal altındaki basının ve yabancı ajansların yanlış/karşı yayınlarına karşı millî bir haber kaynağı olarak düşünüldü.
  - K79: “Anadolu Ajansı, millî mücadele sırasında kamuoyunu yanlış yollara sürükleyecek, millî birliği tehlikeye düşürecek iç ve dış yayınlara karşı milleti uyarmıştı.”
  - K81: “İşgal altındaki İstanbul basınının sansür ve baskı altında olması, Millî Mücadele’nin hedeflerinin halka ve dış kamuoyuna aktarılmasında ciddi bir boşluk yaratmıştır.”
  - Not: Düşünce kaynaklarla uyumlu. Ancak bu cümle Yunus Nadi'nin ya da Halide Edib'in GERÇEK SÖZÜ DEĞİLDİR; kaynaklarda böyle bir söz yok. Ekranda tırnak içinde, kahramanın ağzından söylenmiş gibi gösterilmemeli. 'Yalan haber' yerine kaynakların dili ('yanlış', 'gerçeği yansıtmayan') daha nesnel.

**paneller[2]** — taslak: “Ajansın adı konur: Anadolu Ajansı.”

- [ ] **İKİ KAYNAK** — Ajansa 'Anadolu Ajansı' adı verildi; ad birkaç öneri arasından seçildi.
  - K79: “Kurulacak ajans için “Anadolu”, “Türk” ve “Ankara” gibi isimler teklif edilmişti.”
  - K69: “Halide Edib'in 'Türk Ajansı', 'Ankara Ajansı', 'Anadolu Ajansı' gibi isim önerileri arasından 'Anadolu Ajansı' ismi Yunus Nadi'ye cazip geldi.”
  - K82: “Yunus Nadi ve Halide Edib, ajansın adı konuşulurken, "Türk", "Ankara" ve "Anadolu" seçenekleri arasından "Anadolu Ajansı"nda birleşti.”
  - Not: Ek ayrıntı (isteğe bağlı): S3'e göre öneri Halide Edib'indir ve Mustafa Kemal Paşa uygun bulmuştur ("Halide Edip’in teklifini uygun bulan Gazi Mustafa Kemal").

**paneller[3]** — taslak: “Telgrafhane. İlk haber Anadolu'nun dört bir yanına gider.”

- [ ] **İKİ KAYNAK** — Ajans haberleri Ankara dışına telgrafla ulaştırılıyordu.
  - K79: “Ankara’da halkın bilgilenmesi için duvarlara asılan bültenler, Ankara dışına telgrafla ulaştırılıyordu.”
  - K81: “Bu arada telgraf merkezi bulunan 630 yere telgrafla gönderir, oralarda bulunanların da olaylardan haberdar olmalarını sağlardık.”
  - K69: “resmi ve resmi olmayan yerli ve yabancı haberleri toplayarak günde en az iki servis yapmak üzere telgrafhaneye vereceklerdi.”
  - Not: S5'teki cümle ajansın ilk görevlilerinden Sabri Baysuğ'un anısından aktarmadır.
- [ ] **ÇELİŞKİ** — İlk haberlerin/ilk yayının tarihi.
  - K80: “İlk yayınını 12 Nisan’da yapan Anadolu Ajansı’nın ilk bültenleri bizzat Hey'eti Temsiliye Reisi Gazi Mustafa Kemal tarafından incelendikten sonra yayına verilmiştir.”
  - K82: “Günün zor şartları altında kurulan Anadolu Ajansı, ilk haberlerini 12 Nisan 1920'de servis etmeye başladı.”
  - K81: “Ajans kurulur kurulmaz faaliyete geçti ve 13 Nisan 1920 yılından itibaren haberler “Anadolu Ajansı Tebligatı” başlığı altında yayımlanmaya başladı”
  - Not: Ankara Üniv. dergisi (S4) ve AA (S7) 12 Nisan 1920; Nosyon makalesi (S5, Özkaya 1985'e dayanarak) 13 Nisan 1920 diyor. Bir günlük fark gönderim/yayımlanma ayrımından olabilir. Panelde gün yok; eklenmesin. Güvenli ifade: 'Nisan 1920'de'.

**haber** — taslak: “{0} tarihinde kurulan {1}, Millî Mücadele'nin sesini dünyaya duyurdu. Yunus Nadi Ankara'da {2} gazetesini çıkardı. (Doğrular: 6 Nisan 1920 · Anadolu Ajansı · Yeni Gün)”

> Önerilen metin: Şablon aynen kalabilir; yalnızca üçüncü doğru kelime "Yeni Gün" yerine "Anadolu'da Yeni Gün" olmalı.

- [ ] **İKİ KAYNAK** — 6 Nisan 1920 + Anadolu Ajansı + Millî Mücadele'nin sesini dünyaya duyurma.
  - K79: “Ankara’da kurulan ajansın ilk amacı Millî Mücadele Hareketi’nin sesini Anadolu’ya ve yurt dışına duyurmaktı.”
  - K80: “Anadolu Ajansı ertesi gün, 6 Nisan 1920’de kurulmuştur.”
  - K69: “Anadolu Ajansı 6 Nisan 1920'de kuruldu.”
  - Not: Çeldirici '23 Nisan 1920' uygun (TBMM'nin açılış günü; S3: "Türkiye Büyük Millet Meclisi’nin 23 Nisan 1920’deki açılışından 17 gün önce kurulan Anadolu Ajansı").
- [ ] **ÇELİŞKİ** — Ankara'da çıkardığı gazetenin adı 'Yeni Gün'.
  - K77: “Ankara’da 9 Ağustos 1920’den itibaren çıkarmaya başladığı “Anadolu’da Yeni Gün” Gazetesi”
  - K78: “Gazete, 9 Ağustos 1920 tarihinden itibaren Anadolu’da Yenigün adıyla yayınlarına devam etmiştir.”
  - K84: “10 Ağustos 1920'den itibaren Ankara'da Anadolu'da Yeni Gün adıyla yayını sürdürmüş”
  - Not: Doğru kelime "Anadolu'da Yeni Gün" olmalı (bkz. altin_bilgiler[1]). haber.dogrular[2] = "Anadolu'da Yeni Gün" yapılması önerilir.

**biliyor_muydun** — taslak: “Anadolu Ajansı bugün de Türkiye'nin resmî haber ajansı olarak çalışıyor.”

> Önerilen metin: Anadolu Ajansı bugün de çalışıyor. Türkiye'nin en köklü haber ajansıdır.

- [ ] **İKİ KAYNAK** — Anadolu Ajansı bugün de çalışıyor.
  - K80: “Türkiye'nin en köklü ve etkin haber ajansı olan Anadolu Ajansı'nın (AA), kendine özgü bir kurumsal yapısı vardır.”
  - K83: “Atatürk'ün talimatıyla 1 Mart 1925'te 'Anadolu Ajansı Türk Anonim Şirketi' kuruldu ve ajans özerk statü kazandı.”
  - Not: AA'nın sitesi bugün de çok dilli yayın yapıyor (S8).
- [ ] **ÇELİŞKİ** — Ajans Türkiye'nin 'resmî haber ajansı'dır.
  - K80: “Anadolu Ajansı devletin de hissedar olduğu, özel hukuk hükümlerine tabi bir anonim şirkettir.”
  - K83: “Atatürk'ün talimatıyla 1 Mart 1925'te 'Anadolu Ajansı Türk Anonim Şirketi' kuruldu ve ajans özerk statü kazandı.”
  - K86: “Anadolu Ajansı’nın yapısı, daha tarafsız ve bağımsız işlev yürütmesini sağlamak amacıyla şirket haline dönüştürülecekti.”
  - K88: “Türkiye Cumhuriyeti’nin resmî haber ajansı olan Anadolu Ajansı”
  - Not: 'Resmî haber ajansı' ifadesi yalnızca zayıf kaynakta (S13, öğrenci gazetesi) geçiyor. Akademik kaynak (S4) ajansı 'devletin de hissedar olduğu, özel hukuk hükümlerine tabi bir anonim şirket' olarak tanımlıyor ve 'yarı resmi ajans' adlandırmasının kamu payından kaynaklandığını söylüyor ("Anadolu Ajansı için yarı resmi ajans tanımlaması yapılması buradan kaynaklanmaktadır."). AA'nın kendi tarihçesi 'özerk statü' diyor; 'resmî haber ajansı' demiyor. Bu yüzden 'resmî' kelimesi çıkarılmalı. Bonus sorunun doğru seçeneği de 'Resmî haber ajansı' yerine 'Haber ajansı' olmalı.

**mini_oyun.telgraflar[2]** — taslak: “Anadolu Ajansı kuruldu. Millî Mücadele'nin haberleri buradan duyurulacak. (etiket: Ajansın ilk haberi (temsilî))”

> Önerilen metin: Anadolu Ajansı bugünden itibaren göreve başlıyor. Millete en doğru haberler buradan duyurulacak. (etiket: "Ajansın ilk bülteninden — sadeleştirilmiş"; tek kurum kaynağı olduğu için ekip onayına kadar "temsilî" kalabilir)

- [ ] **İKİ KAYNAK** — Ajansın kuruluşu bütün yurda bir genelgeyle (telgrafla) duyuruldu.
  - K79: “Anadolu Ajansı’nın kuruluşu, “Heyet-i Temsiliye Reisi Mustafa Kemal” imzasıyla ve “müstaceldir” notuyla [...] yayınlanan genelge ile tüm yurda duyuruldu”
  - K80: “Gazi Mustafa Kemal'in Hey'eti Temsiliye Reisi sıfatıyla 6 Nisan 1920'de yayımladığı bir genelge ile faaliyete başlamıştır.”
  - K69: “İlk gün Mustafa Kemal, ajansın kurulduğunu tüm yurda duyuracak”
  - Not: S3 alıntısında [...] ile gösterilen yerde genelgenin gönderildiği makamların listesi var; kısaltıldı. Yani 'ajans kuruldu' duyurusunu yapan Yunus Nadi değil, Mustafa Kemal Paşa'dır.
- [ ] **TEK KAYNAK** — Ajansın ilk bülteninin içeriği.
  - K82: “din ve vatan kardeşlerimizin en doğru haber ve bilgiler alabilmelerini sağlamak için kurulan Anadolu Ajansı, bugünden itibaren göreve başlıyor.”
  - Not: İlk bültenin metni yalnızca AA'nın kendi sayfasında (tek kurum), günümüz Türkçesine çevrilmiş olarak var. Akademik kaynakta bu metni göremedim. S5'e göre ilk bültenler konusunda anılar farklı: ilk BASILI bültenin 8 Temmuz 1920'de çıktığı (Nizamettin Nazif'e göre) ve ilk bülteni elle yazdığını söyleyen Sabri Baysuğ'un haberin konusunu hatırlamadığı aktarılıyor. Oyundaki temsilî metin, gerçek ilk bültenin açılış cümlesiyle anlamca örtüşüyor; 'temsilî' etiketi kalmalı. Öneri için 'ek' alanına bakın.

### Röportaj taslakları

- [ ] **Anadolu Ajansı'nı neden kurdunuz?**
  - Taslak: Millî Mücadele'nin sesini Anadolu'ya ve yurt dışına duyurmak istiyorduk. Halkın en doğru haberlerle aydınlanması gerekiyordu. Bu amaçla Halide Edib Hanım'la birlikte çalıştık ve ajans 6 Nisan 1920'de kuruldu.
  - 1. cümle: K79 ("ajansın ilk amacı Millî Mücadele Hareketi’nin sesini Anadolu’ya ve yurt dışına duyurmaktı")
  - 2. cümle: K79 (kuruluş genelgesi: "en sahih havadis ile tenvîri")
  - 3. cümle: K77 + K81 (birlikte kuruluş), K79/K80 (6 Nisan 1920)
- [ ] **İlk haberi nasıl gönderdiniz?**
  - Taslak: Ajans, kurulduktan birkaç gün sonra, Nisan 1920'de ilk haberlerini vermeye başladı. Bültenler daktiloyla yazılıp çoğaltılıyor, Ankara'da duvarlara asılıyordu. Ankara dışına ise telgrafla ulaştırılıyordu.
  - 1. cümle: K80 + K82 (12 Nisan), K81 (13 Nisan) — gün çelişkili olduğu için yalnızca 'Nisan 1920' dendi
  - 2. cümle: K79 ("bir daktilo ile yazılıp şapirograf adı verilen ilkel bir teksir makinası ile çoğaltıldıktan sonra"; "duvarlara asılan bültenler")
  - 3. cümle: K79 ("Ankara dışına telgrafla ulaştırılıyordu"), K81
- [ ] **Gazeteci olmak Millî Mücadele'de neden önemliydi?**
  - Taslak: Halkın Millî Mücadele'yi doğru haberlerle öğrenmesi gerekiyordu. Ben de Ankara'da "Anadolu'da Yeni Gün" gazetesini çıkardım. Yazılarımda bu mücadelenin amacını ve gerekliliğini anlattım.
  - 1. cümle: K79 (genelge: 'en sahih havadis ile tenvîri'), K81
  - 2. cümle: K77 + K78 (Ankara, "Anadolu’da Yeni Gün")
  - 3. cümle: K77 ("Gazetesinde bu mücadelenin amacı, gerekliliği ile ilgili yazılarıyla halkın bu konuda aydınlanmasında etkili olmuştur.")

### Ek bulgular

- **1_kurulus_tarihi_kurucular_istasyon:** KURULUŞ TARİHİ: 6 Nisan 1920 — iki_kaynak, çelişki yok (S1, S3, S11 = ATAM; S4 = Ankara Üniv.; S6 = AA). Ajans, TBMM açılmadan 17 gün önce, Mustafa Kemal Paşa'nın Heyet-i Temsiliye Reisi sıfatıyla yayımladığı genelgeyle duyuruldu (S3, S4). KURUCULAR: Kaynaklar Yunus Nadi ile Halide Edib'i fikrin sahibi ve kuruluşu yürüten kişiler olarak, Mustafa Kemal Paşa'yı ise talimatı veren/kurucu olarak anıyor (S3: "Gazi Mustafa Kemal’in talimatıyla"; S4: "AA'nın kurucusu Gazi Mustafa Kemal (Atatürk)"; S1: "Halide Edip (Adıvar) ile birlikte ... kurmuştur"). Oyundaki 'kurulmasına öncülük etti' ifadesi bu yüzden yerinde. İSTASYON: AA'nın kendi sayfalarına göre 'Geyve'nin Akhisar nahiyesi istasyonu' (S6, S7) — tek_kaynak (tek kurum). ATAM Dergisi (S3) yalnızca 'tren yolculuğu sırasında' diyor ve dipnotta Yunus Nadi'nin 'Ankara'nın İlk Günleri' (s. 77) ile Halide Edib'in 'Türk'ün Ateşle İmtihanı' (s. 13) kitaplarını gösteriyor. Yani soru işaretindeki 'Akhisar/Geyve?' ikilisi aslında aynı yer: Geyve'ye bağlı Akhisar. Manisa'daki Akhisar ile karıştırılmamalı. Konuşmanın günü çelişkili: 31 Mart 1920 (S3) / 1 Nisan 1920 (S6). ÖNERİ: Panelde istasyon adı verilmesin; verilecekse ekip anı kitaplarından ikinci kaynağı bulsun.
- **2_gazetenin_adi_ve_cikis_tarihi:** Ankara'da çıkan gazetenin tam adı "Anadolu'da Yeni Gün"dür (S1, S2, S9, S10, S6 — iki_kaynak). "Yeni Gün" ise aynı gazetenin 2 Eylül 1918'de İstanbul'da çıkmaya başlayan ilk adıdır (S1: "2 Eylül 1918’de İstanbul’da “Yeni Gün” Gazetesi’ni kurmuştur"). S2 adı 'Yenigün' diye bitişik yazıyor; oyunda ayrı yazım ("Anadolu'da Yeni Gün") kullanılabilir. ANKARA'DA ÇIKIŞ TARİHİ ÇELİŞKİLİ: 9 Ağustos 1920 (ATAM Ansiklopedisi: S1, S2) / 10 Ağustos 1920 (S6 AA, S9 Üsküdar Üniv.) / yalnızca 'Ağustos 1920' (S10). Güvenli ifade: 'Ağustos 1920'. Ek bilgi: gazete 11 Mayıs 1924'e kadar Ankara'da çıktı, sonra İstanbul'da 'Cumhuriyet' adını aldı (S2). ÖNERİ: altin_bilgiler[1] ve haber.dogrular[2] içinde "Yeni Gün" → "Anadolu'da Yeni Gün". Senaryodaki çeldirici listeleri (Halide Edib ve Mehmet Âkif bölümlerinde 'Yeni Gün' çeldiricisi) de buna göre güncellenebilir.
- **3_ajansin_amaci_kaynaklarda:** En doğrudan ifade Mustafa Kemal Paşa'nın 6 Nisan 1920 tarihli kuruluş genelgesinde (S3'te tam metin): "efrâd-ı ümmetin dahilî ve haricî en sahih havadis ile tenvîri (aydınlatılması) ihtiyac-ı mübremi" — yani 'halkın iç ve dış en doğru haberlerle aydınlatılması zorunlu ihtiyacı'. Akademik özet (S3): "Ankara’da kurulan ajansın ilk amacı Millî Mücadele Hareketi’nin sesini Anadolu’ya ve yurt dışına duyurmaktı." S5: "kamuoyunu doğru bilgilendirmek ve uyarmak, ... Büyük Millet Meclisi kararlarını hızlı bir biçimde halka ulaştırmak amacını taşıyordu." Oyundaki Altın Bilgi 3 ('doğru ve hızlı biçimde Anadolu'ya ve dünyaya') bu ifadelerle birebir uyumlu; aynen kalabilir.
- **4_ilk_haber_ilk_bulten:** TARİH: 12 Nisan 1920 (S4 Ankara Üniv. dergisi; S7 AA) / 13 Nisan 1920 (S5, Özkaya 1985'e dayanarak: haberler "Anadolu Ajansı Tebligatı" başlığıyla yayımlanmaya başladı) — bir günlük çelişki; oyunda 'Nisan 1920' yeter. İÇERİK: AA'nın sayfasına göre (S7, tek kurum, günümüz Türkçesiyle) ilk bülten şöyle başlıyor: "Devlet merkezimizin düşman işgali altına geçmesi üzerine Anadolu ve Rumeli'nin Müdafaa-i Hukuk azim ve kararlılığı içinde yiğitçe harekete geçtiği şu sıralarda, din ve vatan kardeşlerimizin en doğru haber ve bilgiler alabilmelerini sağlamak için kurulan Anadolu Ajansı, bugünden itibaren göreve başlıyor." İlk bültenleri Mustafa Kemal Paşa bizzat inceledikten sonra yayına verdi (S4). Bültenler daktiloyla yazılıp teksirle çoğaltılıyor, Ankara'da duvarlara asılıyor, Ankara dışına telgrafla gönderiliyordu (S3, S5). S5 ayrıca farklı anıları aktarıyor: ilk BASILI bülten 8 Temmuz 1920'de Bursa'nın işgali üzerine yapılan mitingden sonra çıktı (Nizamettin Nazif); 'ilk ajans bültenini yazan benim' diyen Sabri Baysuğ ise haberin konusunu hatırlamıyor. OYUN İÇİN KISA ÖNERİ (mini_oyun.telgraflar[2]): Metin → "Anadolu Ajansı bugünden itibaren göreve başlıyor. Millete en doğru haberler buradan duyurulacak." Etiket → "Ajansın ilk bülteninden (sadeleştirilmiş)". Kaynak: S7 (AA kurumsal sayfa; tek kurum). İkinci bağımsız kaynak bulunana kadar mevcut 'temsilî' etiketi korunabilir; mevcut uydurma metin de anlamca gerçek bültenle çelişmiyor. Not: Panel 4'teki 'İlk haber Anadolu'nun dört bir yanına gider' cümlesi telgrafla dağıtım bilgisiyle uyumlu.
- **5_bugunku_statu:** 'Türkiye'nin resmî haber ajansı' ifadesi güvenilir kaynaklarla DOĞRULANAMADI; değiştirilmesi önerilir. Hukuken Anadolu Ajansı bir devlet dairesi değil, 1 Mart 1925'te kurulan 'Anadolu Ajansı Türk Anonim Şirketi'dir (S8, S3: "1 Mart 1925’te Anadolu Ajansı bağımsız bir şirket halinde yeniden teşkilatlanmıştır"). S4: "Anadolu Ajansı devletin de hissedar olduğu, özel hukuk hükümlerine tabi bir anonim şirkettir."; "1930'lu yıllardaki bu durum, bugün bile AA'nın “devlet ajansı” ya da “yarı resmi ajans” şeklinde anılmasına sebep olmuştur." AA'nın kendi tarihçesi 'özerk statü' diyor, 'resmî haber ajansı' demiyor (S8). 'Resmî haber ajansı' ifadesi yalnızca zayıf kaynakta (S13) geçti. ÖNERİ: biliyor_muydun.metin → "Anadolu Ajansı bugün de çalışıyor. Türkiye'nin en köklü haber ajansıdır." (dayanak S4: "Türkiye'nin en köklü ve etkin haber ajansı"). Bonus soru → "Anadolu Ajansı bugün ne olarak çalışıyor?" seçenekler: ["Haber ajansı", "Tren istasyonu", "Matbaa"].
- **yontem_notlari:** (a) Atatürk Ansiklopedisi sayfaları WebFetch ile boş geldi (site JavaScript ile yükleniyor); madde metinleri sitenin kendi herkese açık veri adresinden tam metin olarak okundu. (b) aa.com.tr sayfaları yalnızca WebFetch ile okunabildi; bu araç metni yardımcı bir modelden geçirdiği için S6-S10 alıntıları ekipçe sayfadan bir kez daha harfi harfine kontrol edilmeli. S1-S5, S11-S13 alıntıları ham metinden birebir alındı. (c) TDV İslâm Ansiklopedisi'nde 'Anadolu Ajansı' ve 'Yunus Nadi Abalıoğlu' madde adreslerini açamadım (arama sayfası sonuçsuz döndü); kaynak sayılmadı. (d) Özkaya'nın 'Millî Mücadele'de Anadolu Ajansı'nın Kuruluşu ve Faaliyetine Ait Bazı Belgeler' makalesi (ATAM Dergisi, 1985) taranmış görüntü olduğu için okunamadı; ilk bülten tarihi ve genelge için ekip bu makaleye bakmalı: https://dergipark.org.tr/en/pub/aamd/issue/54887/751980 . (e) S3 ve S4 aynı yazarın (Hilmi Bengi) çalışmaları; S5 de yer yer Bengi'ye dayanıyor. Kurumlar farklı olsa da bağımsızlık sınırlı; mümkünse bir MEB ders kitabı ya da TTK yayınıyla desteklenmeli.

---

## Mehmet Âkif Ersoy

Üç Altın Bilginin tamamı en az iki bağımsız kurumun kaynağıyla (TDV İslâm Ansiklopedisi, TBMM yayını, hakemli makale, MEB) doğrulandı: Nasrullah Camii vaazı (1920), Sebilürreşad'ın 464. sayısında basılıp Anadolu'ya ve cephelere dağıtılması, Burdur mebusluğu, marşın 12 Mart 1921'de kabulü ve ayakta dinlenmesi. Çelişkiler: vaazın günü (5 Kasım / 19 Kasım 1920), Kastamonu'ya geliş (19 Ekim / 15 Temmuz 1920) ve 464. sayının günü (22 / 25 / 28 Kasım 1920); oyunda yalnızca yıl kullanılırsa sorun yok. İki panel için düzeltme önerildi: marş TBMM'de değil Taceddin Dergâhı'nda yazıldı ve ödül 'kabul edilmedi' değil, alınıp Dârülmesâi'ye bağışlandı; 'cami tıklım tıklım' ise yalnızca tek kaynakta dolaylı geçiyor. Safahat'a almaması olgu olarak doğrulandı, gerekçe sözü ise iki farklı biçimde aktarıldığı için anlatı sayılmalı. 'BİRLİK' derginin gerçek başlığı değil (gerçek başlık tek kaynağa göre 'Nasrullah Kürsüsünde'), ama vaazın teması olarak iki kaynakla destekleniyor.

### Kaynaklar

- **K89** — Mehmed Âkif Ersoy, *TDV İslâm Ansiklopedisi* (ansiklopedi). <https://islamansiklopedisi.org.tr/mehmed-akif-ersoy> — Güvenilir ansiklopedi maddesi. Madde yazarı sayfada okunmadı; ekip künyeyi sayfadan tamamlamalı. S1, S2 ve S3 aynı kurumun yayını olduğu için birbirinden bağımsız sayılmadı.
- **K90** — Adem Efe, Sebîlürreşâd, *TDV İslâm Ansiklopedisi* (ansiklopedi). <https://islamansiklopedisi.org.tr/sebilurresad> — Güvenilir ansiklopedi maddesi. S1 ve S3 ile aynı kurum (bağımsız sayılmaz).
- **K91** — İstiklâl Marşı, *TDV İslâm Ansiklopedisi* (ansiklopedi). <https://islamansiklopedisi.org.tr/istiklal-marsi> — Güvenilir ansiklopedi maddesi. Madde yazarı sayfada okunmadı. S1 ve S2 ile aynı kurum (bağımsız sayılmaz).
- **K92** — Sinan Şahin, Milli Mücadele Döneminde Mehmet Akif Ersoy'un Kastamonu Vaazı Üzerine Bir İnceleme, *Afyon Kocatepe Üniversitesi Sosyal Bilimler Dergisi, Cilt 19, Sayı 2, Aralık 2017, s. 311-338* (makale). <https://dergipark.org.tr/en/download/article-file/403953> — Hakemli üniversite dergisi makalesi (DergiPark). PDF'in tam metni indirilip okundu; alıntılar metinden doğrudan kopyalandı. Özet sayfası: https://dergipark.org.tr/en/pub/akusosbil/issue/34128/378530
- **K93** — Dr. Nihan Altınbaş (hazırlayan), Milli Mücadele'de Mehmet Akif Ersoy ve İstiklal Marşı (İstiklal Marşı'nın Kabulü'nün 94. Yılı ve Mehmet Akif Ersoy'u Anma Günü, 12 Mart 2015), *TBMM Basın, Yayın ve Halkla İlişkiler Başkanlığı, TBMM Basımevi, Mart 2015* (kitap). <https://cdn.tbmm.gov.tr/TbmmWeb/Icerik/Dosya/15A7FAA8-6C7F-4BD0-9D93-805B9FF06AC8.pdf> — Resmî kurum (TBMM) yayını, dipnotlu; TBMM Zabıt Ceridelerine atıf yapıyor. PDF'in tam metni indirilip okundu; alıntılar metinden doğrudan kopyalandı.
- **K94** — Mehmet Akif Ersoy — Hayatı — Kronoloji, *Millî Eğitim Bakanlığı (meb.gov.tr, İstiklal Marşı sayfası)* (kurumsal_web). <https://www.meb.gov.tr/istiklalmarsi/mehmetakifersoy/Hayati/Kronoloji> — Resmî kurum sayfası; kaynak göstermeyen kısa kronoloji. Tarihleri S4 ve S2 ile birebir uyuşmuyor (aşağıda çelişki olarak yazıldı).
- **K95** — İstiklal Marşı'nın Kabulünün 99. Yıl Dönümü, *Millî Eğitim Bakanlığı (meb.gov.tr haber)* (kurumsal_web). <https://www.meb.gov.tr/istiklal-marsinin-kabulunun-99-yil-donumu/haber/20493/tr> — Resmî kurum sayfası ama haber niteliğinde, kaynak göstermiyor. S6 ile aynı kurum (bağımsız sayılmaz).

### Bilgiler

**tarih_etiketi** — taslak: “1920–1921”

- [ ] **İKİ KAYNAK** — Kastamonu vaazı 1920'de, İstiklal Marşı'nın kabulü 1921'de gerçekleşti.
  - K90: “464-466. sayılar (25 Teşrînisâni [Kasım] 1336/1920 - 13 Kânunuevvel [Aralık] 1336/1920) Kastamonu'da yayımlanmıştır.”
  - K92: “Mehmet Akif, Kastamonu’ya geldikten sonra 19 Kasım 1920’de vaazlarını vermeye başladı.”
  - K91: “Meclisin konuyla ilgili üçüncü ve son oturumu 12 Mart 1921'de Abdülhak Adnan (Adıvar) başkanlığında yapılmış”
  - K93: “12 Mart 1921 tarihinde Büyük Millet Meclisi tarafından İstiklal Marşı olarak kabul edilen Mehmet Akif’in şiiri”
  - Not: Yıl aralığı güvenli. Vaazın günü kaynaklarda farklı (bkz. altin_bilgiler[0]).

**altin_bilgiler[0]** — taslak: “Kastamonu Nasrullah Camii'nde verdiği vaazla halkı Millî Mücadele'yi desteklemeye çağırdı (1920). Bu vaaz "Sebilürreşad" dergisinde basılarak geniş kitlelere ulaştı.”

- [ ] **İKİ KAYNAK** — Vaaz Kastamonu'da Nasrullah Camii'nde verildi.
  - K90: “Mehmed Âkif'in Kastamonu Nasrullah Camii'nde Sevr Antlaşması'nın nasıl bir felâket olduğunu anlatan vaazının yer aldığı 464. sayı”
  - K93: “Şehrin merkezinde bulunan Nasrullah Camii’nde halka şu sözlerle seslenir:”
  - K92: “Bu vaazların en önemlilerinden birisi Nasrullah Paşa Camii vaazıdır.”
  - K94: “5 Kasım 1920 Kastamonu Nasrullah Camii'nde Sevr Anlaşması'nı anlatarak halkı birliğe ve milli mücadeleye çağırdı.”
  - Not: S4 camiyi 'Nasrullah Paşa Camii' diye de anıyor; oyundaki 'Nasrullah Camii' adı S2, S5, S6 ile uyumlu.
- [ ] **İKİ KAYNAK** — Vaazda halk birliğe ve Millî Mücadele'yi desteklemeye çağrıldı; Sevr Antlaşması anlatıldı.
  - K92: “Mehmet Akif, bu vaazında işgalcilere karşı birlik ve beraberlik içinde mücadele verilmesine dikkat çekti”
  - K94: “5 Kasım 1920 Kastamonu Nasrullah Camii'nde Sevr Anlaşması'nı anlatarak halkı birliğe ve milli mücadeleye çağırdı.”
  - K90: “Sevr Antlaşması'nın nasıl bir felâket olduğunu anlatan vaazının”
  - K93: “Sakın milli hareket aleyhinde olanların sözlerine kulak asmayınız.”
  - Not: S5'teki alıntı, yayının vaazdan aktardığı sözlerdir.
- [ ] **İKİ KAYNAK** — Vaazın yılı 1920'dir.
  - K92: “Mehmet Akif, Kastamonu’ya geldikten sonra 19 Kasım 1920’de vaazlarını vermeye başladı.”
  - K94: “5 Kasım 1920 Kastamonu Nasrullah Camii'nde Sevr Anlaşması'nı anlatarak halkı birliğe ve milli mücadeleye çağırdı.”
  - K90: “464-466. sayılar (25 Teşrînisâni [Kasım] 1336/1920 - 13 Kânunuevvel [Aralık] 1336/1920) Kastamonu'da yayımlanmıştır.”
  - Not: Yıl (1920) ve ay (Kasım) konusunda kaynaklar uyumlu.
- [ ] **ÇELİŞKİ** — Vaazın günü (gün-ay olarak kesin tarih).
  - K92: “Mehmet Akif, Kastamonu’ya geldikten sonra 19 Kasım 1920’de vaazlarını vermeye başladı.”
  - K94: “5 Kasım 1920 Kastamonu Nasrullah Camii'nde Sevr Anlaşması'nı anlatarak halkı birliğe ve milli mücadeleye çağırdı.”
  - K93: “Mehmet Akif 15 Temmuz 1920’de Kastamonu’ya gider.”
  - Not: S6 vaaz için 5 Kasım 1920 diyor; S4 vaazlara 19 Kasım 1920'de başladığını yazıyor. Kastamonu'ya geliş tarihi de farklı: S4 ve S6 '19 Ekim 1920', S5 '15 Temmuz 1920'. Oyunda gün verilmemeli; '1920' ya da 'Kasım 1920' / '1920 sonbaharında' güvenli.
- [ ] **İKİ KAYNAK** — Vaaz Sebilürreşad dergisinde (Kastamonu'da basılan 464. sayı) yayımlandı.
  - K89: “Sebîlürreşâd'ın Kastamonu'da basılan 464. sayısında çıkmış, gördüğü rağbet dolayısıyla bu sayı birkaç defa bastırılarak Anadolu'ya ve cephelere gönderilmiştir.”
  - K92: “Mehmet Akif’in bu vaazı Sebilürreşad’ın Kastamonu’da çıkan 464. sayısında yayımlandı.”
  - K94: “28 Kasım 1920 Sebilürreşat'ın Anadolu'daki ilk sayısı Kastamonu'da, Akif'in Nasrullah Camii Konuşması'yla yayımlandı.”
  - Not: 464. sayının günü kaynaklarda farklı: S2 '25 Kasım 1920', S4 kaynakçası '22 Kasım 1920', S6 '28 Kasım 1920'. Oyunda sayının günü verilmiyor, sorun yok.
- [ ] **İKİ KAYNAK** — Vaaz geniş kitlelere ulaştı (Anadolu'ya dağıtıldı).
  - K90: “Vaaz metni oralarda hutbelerde okunduğu gibi matbaa veya teksir yoluyla on binlerce çoğaltılıp diğer vilâyet ve mutasarrıflıklara, bütün cephelere dağıtılmıştır.”
  - K92: “Kürsüde Sevr Antlaşmasını da izah eden Mehmet Akif’in bu vaazı, bütün Anadolu’ya ve cephelere dağıtılarak kısa sürede halk ve askerler üzerinde etkisini gösterdi.”
  - K93: “Mehmet Akif’in Nasrullah Camii’nde verdiği uzun ve etkili hutbe yurdun dört bir tarafında duyulur.”

**altin_bilgiler[1]** — taslak: “Burdur milletvekili olarak TBMM'de görev yaptı.”

- [ ] **İKİ KAYNAK** — Mehmet Âkif Burdur mebusu (milletvekili) seçildi.
  - K89: “Büyük Millet Meclisi Reisi Mustafa Kemal Paşa'nın teklifi üzerine Burdur mebusu seçildi (5 Haziran 1920).”
  - K93: “Mustafa Kemal Paşa’nın isteği ile 5 Haziran 1920 tarihinde milletvekili seçilir.”
  - K94: “5 Haziran 1920 Burdur Mebusluğu Meclis'te onaylandı.”
  - Not: S5'e göre aynı zamanda Biga'dan da seçilmiş, 17 Temmuz 1920'de Burdur milletvekilliğini tercih ettiğini bildirmiştir ('17 Temmuz 1920 tarihinde Meclis Başkanlığı’na Burdur Milletvekilliğini tercih ettiğini bildirmiştir'). 5 Haziran 1920 için S1 'seçildi', S6 'onaylandı' diyor; oyunda gün verilmediği için sorun yok.

**altin_bilgiler[2]** — taslak: “İstiklal Marşı'nı yazdı. Marş 12 Mart 1921'de TBMM'de kabul edildi.”

- [ ] **İKİ KAYNAK** — İstiklal Marşı'nı Mehmet Âkif yazdı.
  - K89: “Meclisin 12 Mart 1921 tarihli oturumunda okunan şiir ittifakla İstiklâl Marşı güftesi olarak kabul edildi.”
  - K93: “12 Mart 1921 tarihinde Büyük Millet Meclisi tarafından İstiklal Marşı olarak kabul edilen Mehmet Akif’in şiiri”
- [ ] **İKİ KAYNAK** — Marş 12 Mart 1921'de TBMM'de kabul edildi.
  - K89: “Meclisin 12 Mart 1921 tarihli oturumunda okunan şiir ittifakla İstiklâl Marşı güftesi olarak kabul edildi.”
  - K91: “Meclisin konuyla ilgili üçüncü ve son oturumu 12 Mart 1921'de Abdülhak Adnan (Adıvar) başkanlığında yapılmış”
  - K93: “12 Mart 1921 tarihinde Büyük Millet Meclisi tarafından İstiklal Marşı olarak kabul edilen Mehmet Akif’in şiiri”
  - K94: “12 Mart 1921 İstiklal Marşı Meclis'te tartışılarak kabul edildi.”
  - K95: “İstiklal Marşı, 12 Mart 1921 tarihinde kabul edildi.”
  - Not: S5, TBMM Zabıt Cerideleri, Cilt 9, İçtima 6, 12 Mart 1921'e atıf yapıyor. Küçük ayrıntı farkı: S1 'ittifakla', S5 'Ekseriyet oyla' diyor; oyunda geçmiyor. S7 alıntısı cümlenin son bölümüdür.

**paneller[0]** — taslak: “Kastamonu, Nasrullah Camii. Âkif kürsüde, cami tıklım tıklım.”

> Önerilen metin: Kastamonu, Nasrullah Camii. Âkif kürsüde, halk onu dikkatle dinliyor.

- [ ] **İKİ KAYNAK** — Âkif Kastamonu Nasrullah Camii'nde kürsüden vaaz verdi.
  - K90: “Mehmed Âkif'in Kastamonu Nasrullah Camii'nde Sevr Antlaşması'nın nasıl bir felâket olduğunu anlatan vaazının”
  - K92: “Kürsüde Sevr Antlaşmasını da izah eden Mehmet Akif’in bu vaazı”
  - K93: “Şehrin merkezinde bulunan Nasrullah Camii’nde halka şu sözlerle seslenir:”
- [ ] **TEK KAYNAK** — Cami çok kalabalıktı ('tıklım tıklım').
  - K92: “gittiği yerlerde insanlar tarafından büyük bir ilgiyle karşılandı ve camileri dolduran halk onu dikkatle dinledi.”
  - Not: S4 bunu genel olarak (gittiği yerler için) söylüyor ve Nasrullah için 'burada da büyük bir ilgi ile karşılandı' diyor. Nasrullah Camii'nin o gün dolu olduğunu doğrudan söyleyen ikinci bir kaynak okunmadı. 'Tıklım tıklım' yerine daha ölçülü bir ifade önerildi.

**paneller[1]** — taslak: “Vaaz kâğıda geçer, matbaada dizilir.”

- [ ] **İKİ KAYNAK** — Vaaz metni Kastamonu'da dergide basıldı.
  - K89: “Sebîlürreşâd'ın Kastamonu'da basılan 464. sayısında çıkmış”
  - K92: “Mehmet Akif’in bu vaazı Sebilürreşad’ın Kastamonu’da çıkan 464. sayısında yayımlandı.”
  - Not: 'Matbaada dizilir' ayrıntısı (dizgi işlemi) kaynaklarda ayrıca anlatılmıyor; dönemin baskı tekniği olarak genel bir canlandırma. Basıldığı bilgisi doğrulandı.

**paneller[2]** — taslak: “Sebilürreşad nüshaları Anadolu'ya dağılır, cepheye kadar ulaşır.”

- [ ] **İKİ KAYNAK** — Vaazın yer aldığı sayı Anadolu'ya (vali, mutasarrıf, müftülere) gönderildi.
  - K90: “vaazının yer aldığı 464. sayı vali, mutasarrıf ve müftülere gönderilmiştir.”
  - K92: “Anadolu’nun bütün vilayetiyle bütün sancak ve kazalarındaki vali, mutasarrıf, kaymakam ve müftülere icabı kadarı gönderilmiştir.”
  - K93: “Sebilürreşad Dergisi’nin neşriyatıyla, tüm cephelere, il idarelerine, müftülüklere gönderilir.”
  - Not: S4'teki alıntı, makalenin Sebilürreşad 464. sayı s. 264'ten aktardığı duyurudur.
- [ ] **İKİ KAYNAK** — Vaaz çoğaltılarak cephelere dağıtıldı.
  - K89: “Ayrıca bu sayılar ve risâle haline getirilen vaazlar birkaç defa basılarak Anadolu'nun her tarafına ve cephelere dağıtılmıştır.”
  - K90: “matbaa veya teksir yoluyla on binlerce çoğaltılıp diğer vilâyet ve mutasarrıflıklara, bütün cephelere dağıtılmıştır.”
  - K92: “Bunlarla birlikte bu vaaz risaleler ve kitaplar halinde bastırılarak bütün cephelere dağıtıldı (Edib, 1938: 66).”
  - K93: “Hatta risale şeklinde bastırılıp, cephedeki askerlere dağıtılır.”
  - Not: S4 ayrıca El-Cezire Cephesi kumandanı Nihad Paşa'nın telgrafını aktarıyor: vaaz Diyarbakır'da camide okunmuş ve 'Diyarıbekir vilayet matbaasında tab ve teksir edilerek bütün cepheye tevzi olunmuştur'. Cepheye ulaşma bilgisi doğrulandı.

**paneller[3]** — taslak: “Ankara, TBMM. Âkif marşı yazar ama yarışma ödülünü kabul etmez.”

> Önerilen metin: Ankara, Taceddin Dergâhı. Âkif marşı yazar. Ödülü kendine almaz, yoksul kadın ve çocuklara iş öğreten bir hayır kurumuna bağışlar.

- [ ] **İKİ KAYNAK** — Âkif marşı Ankara'da yazdı.
  - K91: “katıldığı günlerde de Tâceddin Dergâhı'ndaki odasında”
  - K93: “Akif İstiklal Marşı’nı da bu mekânda yazmıştır.”
  - Not: DİKKAT: Kaynaklara göre marşın yazıldığı yer TBMM binası değil, Ankara'da kaldığı Taceddin (Tacettin) Dergâhı'dır (S5: 'Tacettin Dergâhı’nda ikamet etmiş'). Paneldeki 'Ankara, TBMM' yer etiketi marşın yazıldığı yer olarak okunursa yanlış olur; düzeltme önerildi.
- [ ] **İKİ KAYNAK** — Âkif para ödülünü kendisi için kabul etmedi (bu yüzden başta yarışmaya katılmadı).
  - K91: “hükümetçe konan 500 lira mükâfatı kabul etmediğinden yarışmaya katılmadığını”
  - K93: “Mehmet Akif, birlikte yazalım der; ancak ikramiyeyi almayacağını söyler.”
  - Not: S3 alıntısı WebFetch özetinden alındı; ekip sayfada göz ile teyit etmeli.
- [ ] **İKİ KAYNAK** — 500 liralık ödül Dârülmesâi adlı hayır kurumuna bağışlandı.
  - K89: “nakdî mükâfat Âkif tarafından alıp Dârü'l-mesâî adlı bir hayır cemiyetine bağışlanmıştır.”
  - K91: “Mehmed Âkif 500 lira mükâfatı, fakir müslüman kadın ve çocuklarına iş öğreterek sefaletlerine son vermek amacıyla kurulan Dârülmesâi'ye hediye etmiştir”
  - K93: “Mehmet Akif, kazandığı 500 liralık ödülü yoksul kadın ve çocuklara iş öğreten Darülmesai’ye bağışlar.”
  - K95: “İstiklal Marşı için kazandığı 500 liralık ödülü yoksul kadın ve çocuklara iş öğreten Darülmesai'ye bağışladı.”
  - Not: Kaynakların ortak anlatımı: ödülü kendine almak istemedi; Meclis kararı gereği verilen ödülü alıp bir hayır kurumuna bağışladı (S1: 'kazanana verilmesi zaruri hale gelmiş bulunan nakdî mükâfat'). S5, 17 Mart 1921 tarihli Hâkimiyet-i Milliye'deki 'Teberru' haberini aynen aktarıyor (belgeye dayalı). 'Kabul etmez' tek başına eksik kalıyor; 'bağışlar' daha doğru.

**paneller[4]** — taslak: “12 Mart 1921: Marş kabul edilir. Meclis ayakta.”

- [ ] **İKİ KAYNAK** — Marş 12 Mart 1921'de kabul edildi.
  - K89: “Meclisin 12 Mart 1921 tarihli oturumunda okunan şiir ittifakla İstiklâl Marşı güftesi olarak kabul edildi.”
  - K93: “12 Mart 1921 tarihinde Büyük Millet Meclisi tarafından İstiklal Marşı olarak kabul edilen Mehmet Akif’in şiiri”
- [ ] **İKİ KAYNAK** — Kabulden sonra marş Mecliste ayakta dinlendi/alkışlandı.
  - K91: “Artık resmî hale gelen marş Hamdullah Suphi tarafından bir defa daha okunmuş ve bütün mebuslarca ayakta alkışlanmıştır”
  - K93: “Binaenaleyh, ayakta dinlememiz icap eder. Buyurunuz efendiler.”
  - Not: S5'teki söz Meclis Başkanı'na aittir ve TBMM Zabıt Cerideleri, Cilt 9, İçtima 6, 12 Mart 1921'e dayandırılıyor. Marşı kürsüden okuyan kişi Hamdullah Suphi Bey'dir (Âkif değil); görselde buna dikkat edilmeli.

**duygu_ani** — taslak: “Meclisin ayağa kalkıp marşı dinlediği an.”

- [ ] **İKİ KAYNAK** — Meclis marşı ayakta dinledi.
  - K91: “bütün mebuslarca ayakta alkışlanmıştır”
  - K93: “Binaenaleyh, ayakta dinlememiz icap eder. Buyurunuz efendiler.”

**haber** — taslak: “Mehmet Âkif, Kastamonu {0} Camii'ndeki vaazıyla halkı birliğe çağırdı. Vaaz {1} dergisinde yayımlandı. İstiklal Marşı {2}'de kabul edildi. (Nasrullah · Sebilürreşad · 12 Mart 1921)”

- [ ] **İKİ KAYNAK** — Nasrullah Camii vaazı halkı birliğe çağırdı.
  - K92: “Mehmet Akif, bu vaazında işgalcilere karşı birlik ve beraberlik içinde mücadele verilmesine dikkat çekti”
  - K94: “5 Kasım 1920 Kastamonu Nasrullah Camii'nde Sevr Anlaşması'nı anlatarak halkı birliğe ve milli mücadeleye çağırdı.”
- [ ] **İKİ KAYNAK** — Vaaz Sebilürreşad dergisinde yayımlandı.
  - K89: “Sebîlürreşâd'ın Kastamonu'da basılan 464. sayısında çıkmış”
  - K92: “Mehmet Akif’in bu vaazı Sebilürreşad’ın Kastamonu’da çıkan 464. sayısında yayımlandı.”
- [ ] **İKİ KAYNAK** — İstiklal Marşı 12 Mart 1921'de kabul edildi.
  - K89: “Meclisin 12 Mart 1921 tarihli oturumunda okunan şiir ittifakla İstiklâl Marşı güftesi olarak kabul edildi.”
  - K93: “12 Mart 1921 tarihinde Büyük Millet Meclisi tarafından İstiklal Marşı olarak kabul edilen Mehmet Akif’in şiiri”
  - Not: Çeldiriciler (Uzunoluk, Yeni Gün, 29 Ekim 1923) bu kahramanla ilgili değil; bu araştırmada ayrıca kontrol edilmedi.

**biliyor_muydun** — taslak: “Âkif, İstiklal Marşı'nı Safahat'ına koymadı. Onu milletin eseri saydığını söylediği anlatılır.”

- [ ] **İKİ KAYNAK** — Âkif İstiklal Marşı'nı Safahat'a almadı.
  - K91: “kendisinin de daha sonra bunu Safahat'ına almayarak, 'O benim değil milletimindir' demesinden”
  - K93: “Mehmet Akif, Türk milletine mal ettiği İstiklal Marşı’nı ünlü eseri Safahat’a dahi dâhil etmemiştir.”
  - K95: “İstiklal Marşı'nı Safahat eserine koymayışının nedenini ise şöyle açıkladı: "Çünkü ben onu milletimin kalbine gömdüm."”
  - Not: Safahat'a almadığı bilgisi üç kurumda da geçiyor (olgu olarak güvenli).
- [ ] **ÇELİŞKİ** — Gerekçe olarak marşı milletin eseri saydığını söyledi.
  - K91: “'O benim değil milletimindir' demesinden”
  - K95: “"Çünkü ben onu milletimin kalbine gömdüm."”
  - Not: Anlam aynı (marş milletindir), ama aktarılan söz kaynaktan kaynağa değişiyor ve okunan sayfalarda sözün birincil belgesi (kime, ne zaman söylendiği) gösterilmiyor. Bu yüzden söz 'belge' değil 'anlatı/hatıra aktarımı' sayılmalı. Mevcut cümledeki 'söylediği anlatılır' kalıbı doğru ve güvenli; tırnak içinde kesin bir söz verilmemeli.

**biliyor_muydun.bonus_soru** — taslak: “Âkif, İstiklal Marşı'nı hangi kitabına koymadı? (Safahat)”

- [ ] **İKİ KAYNAK** — Safahat Âkif'in eseridir ve marş bu esere alınmamıştır.
  - K91: “kendisinin de daha sonra bunu Safahat'ına almayarak”
  - K93: “ünlü eseri Safahat’a dahi dâhil etmemiştir.”

**mini_oyun (dergi, baski_konu, manset)** — taslak: “dergi: Sebilürreşad · baski_konu: Kastamonu Nasrullah Camii vaazı · manset: BİRLİK”

- [ ] **İKİ KAYNAK** — Basılan dergi Sebilürreşad, konusu Kastamonu Nasrullah Camii vaazı.
  - K90: “vaazının yer aldığı 464. sayı vali, mutasarrıf ve müftülere gönderilmiştir.”
  - K92: “Mehmet Akif’in bu vaazı Sebilürreşad’ın Kastamonu’da çıkan 464. sayısında yayımlandı.”
- [ ] **TEK KAYNAK** — Vaazın dergideki başlığı.
  - K92: ““Nasrullah Kürsüsünde”, Sebilürreşad, C. XVIII, S. 464, 10 Rebiülevvel 1339/22 Kasım 1920, s. 249-259.”
  - Not: Derginin gerçek başlığı S4 kaynakçasına göre 'Nasrullah Kürsüsünde'dir. 'BİRLİK' gerçek başlık değil, vaazın temasıdır (tema iki kaynakla doğrulandı: S4, S6). Ayrıntı 'ek' alanında.

### Röportaj taslakları

- [ ] **Kastamonu'da halka ne anlattınız?**
  - Taslak: Nasrullah Camii'nde halka Sevr Antlaşması'nı anlattım. Bu antlaşmanın bizim için nasıl bir felaket olduğunu söyledim. Herkesi işgale karşı birlik içinde mücadele etmeye çağırdım.
  - 1. cümle: K90, K94
  - 2. cümle: K90
  - 3. cümle: K92, K94
- [ ] **Bir dergi Millî Mücadele'ye nasıl yardım eder?**
  - Taslak: Vaazım Sebilürreşad dergisinin Kastamonu'da basılan sayısında çıktı. Bu sayı valilere ve müftülere gönderildi, camilerde okundu. Sonra çoğaltılıp Anadolu'ya ve cephelere dağıtıldı.
  - 1. cümle: K89, K92
  - 2. cümle: K90, K92
  - 3. cümle: K89, K90, K92
- [ ] **İstiklal Marşı'nı yazarken neler hissettiniz?**
  - Taslak: Anlatılanlara göre marşı yazarken saatlerce derin derin düşünürdüm. Marşı kahraman ordumuza ithaf ettim. Ödülü kendime almadım, yoksul kadın ve çocuklara iş öğreten bir hayır kurumuna bağışladım.
  - 1. cümle: K93 (tek kaynak; dostlarının anlatımı)
  - 2. cümle: K93 (tek kaynak)
  - 3. cümle: K89, K91, K93

### Ek bulgular

- **1_vaaz_tarihi_ve_dagitim:** Vaazın Kastamonu Nasrullah Camii'nde 1920'de (Kasım ayında) verildiği güvenli. Kesin gün çelişkili: MEB kronolojisi (S6) '5 Kasım 1920' diyor; Şahin (S4) vaazlara '19 Kasım 1920'de' başladığını yazıyor. Kastamonu'ya geliş de çelişkili: S4 ve S6 '19 Ekim 1920', TBMM yayını (S5) '15 Temmuz 1920'. Oyunda yalnızca '1920' (ya da 'Kasım 1920') kullanılmalı. Sebilürreşad'da basılması: Kastamonu'da çıkan 464. sayı (S1, S2, S4, S6; iki_kaynak). Sayının günü: S2 '25 Kasım 1920', S4 kaynakçası '22 Kasım 1920', S6 '28 Kasım 1920' (çelişkili; oyunda verilmemeli). Cephelere dağıtım: TDV (S1, S2), Şahin (S4) ve TBMM yayını (S5) ile doğrulandı. S2'ye göre sayı vali, mutasarrıf ve müftülere gönderildi, vaaz hutbelerde okundu ve 'matbaa veya teksir yoluyla on binlerce çoğaltılıp ... bütün cephelere dağıtılmıştır'. S4, El-Cezire Cephesi kumandanı Nihad Paşa'nın telgrafını aktarıyor: vaaz Diyarbakır'da Cuma namazından sonra okunmuş ve Diyarbakır vilayet matbaasında çoğaltılıp cepheye dağıtılmış (S4 bunu Sebilürreşad S. 468, s. 315'e dayandırıyor). Not: S1'e göre vaaz 'Meclis kararıyla' yapılan irşat çalışmalarının parçasıdır; bu ayrıntı yalnızca ilk okumada görüldü, ekip sayfadan teyit etmeli.
- **2_burdur_milletvekilligi:** Doğrulandı (iki_kaynak: TDV S1, TBMM S5, MEB S6). S1: 'Büyük Millet Meclisi Reisi Mustafa Kemal Paşa'nın teklifi üzerine Burdur mebusu seçildi (5 Haziran 1920).' S5'e göre Burdur'da istifa eden bir milletvekilinin yerine seçildi; aynı zamanda Biga'dan da seçildi ve 17 Temmuz 1920'de Burdur milletvekilliğini tercih ettiğini bildirdi. S6: '3 Haziran 1920 Biga'da adaylar arasında en yüksek oyu alarak mebus seçildi.' Dönemin sözcüğü 'mebus'; oyundaki 'milletvekili' günümüz karşılığı olarak uygundur.
- **3_kabul_tarihi_ve_odul:** 12 Mart 1921 kabul tarihi beş kaynakta aynı (S1, S3, S5, S6, S7); S5 doğrudan TBMM Zabıt Cerideleri'ne (Cilt 9, İçtima 6, 12 Mart 1921) atıf yapıyor. Ödül konusu kaynaklarda şöyle geçiyor: (a) Âkif, 500 liralık ödül yüzünden başta yarışmaya katılmadı (S3: 'hükümetçe konan 500 lira mükâfatı kabul etmediğinden yarışmaya katılmadığını'). (b) Maarif Vekili Hamdullah Suphi ve Hasan Basri Bey'in aracılığıyla ikna edildi (S3, S5); S5'e göre ikramiyenin bir hayır kurumuna verileceği söylenince yazmaya ikna oldu. (c) Marş kabul edilince ödül verildi; Âkif onu Dârülmesâi'ye bağışladı (S1: 'nakdî mükâfat Âkif tarafından alıp Dârü'l-mesâî adlı bir hayır cemiyetine bağışlanmıştır'; S3, S5, S7 aynı). S5, 17 Mart 1921 tarihli Hâkimiyet-i Milliye'deki 'Teberru' haberini aynen veriyor; yani bağış belgeye dayalı. SONUÇ: 'Ödülü kabul etmez' ifadesi eksik; kaynaklara en uygun ifade 'ödülü kendine almadı, bir hayır kurumuna (Dârülmesâi) bağışladı'. Dârülmesâi: yoksul kadın ve çocuklara iş öğreten kurum (S3, S5, S7).
- **4_safahat:** Marşı Safahat'a almadığı OLGU olarak üç kurumda geçiyor (TDV S3, TBMM S5, MEB S7): iki_kaynak. Gerekçe olarak söylediği söz ise ANLATI düzeyinde: TDV (S3) sözü 'O benim değil milletimindir' diye, MEB (S7) 'Çünkü ben onu milletimin kalbine gömdüm' diye aktarıyor; okunan sayfalarda sözün birincil belgesi gösterilmiyor. TBMM yayını (S5) söz aktarmıyor, yalnızca 'Türk milletine mal ettiği' diyor. Öneri: biliyor_muydun metnindeki 'söylediği anlatılır' kalıbı korunmalı, tırnak içinde kesin söz verilmemeli. Arka yüz/rapor için not: 'Safahat'a almadı' = belgelenmiş olgu; 'milletin eseri saydığını söyledi' = hatıralara dayanan anlatı.
- **5_manset_onerisi:** Vaazın Sebilürreşad 464. sayıdaki gerçek başlığı, Şahin'in kaynakçasına göre (S4, tek kaynak): 'Nasrullah Kürsüsünde' (Sebilürreşad, C. XVIII, S. 464, s. 249-259). Aynı sayıda 'Evliya-i Umurdan Mühim Bir Rica' başlıklı bir dağıtım duyurusu da var (s. 264). 'BİRLİK' dergideki başlık DEĞİLDİR; ama vaazın teması olarak iki bağımsız kaynakla destekleniyor (S4: 'birlik ve beraberlik içinde mücadele'; S6: 'halkı birliğe ve milli mücadeleye çağırdı'). Seçenekler: (A) 'BİRLİK' kalsın, ancak oyunda 'vaazın konusu' diye sunulsun, 'derginin başlığı' denmesin (6 harf; dizgi oyunu için en uygun; tema iki_kaynak). (B) Gerçek başlığa sadık iki sözcük: 'NASRULLAH KÜRSÜSÜNDE' (19 harf; uzun, ayrıca tek kaynak — ekip derginin 464. sayısının taranmış kopyasından teyit etmeli). (C) Orta yol, tek sözcük: 'KÜRSÜDE' ya da 'NASRULLAH' — gerçek başlıktan türetilmiş ama birebir başlık değil. Tavsiye: (A); basılan sayfada üst satıra derginin adı 'Sebilürreşad', manşete 'BİRLİK', alt satıra 'Nasrullah Kürsüsünde' (gerçek yazı başlığı, teyit edildikten sonra) konabilir. Uyarı: Derginin özgün baskısı Osmanlı Türkçesiyle (eski harflerle) idi; oyundaki Latin harfli dizgi bir canlandırmadır, 'temsilî' notu düşülmesi iyi olur.
- **ek_bulgular:** (i) Marşın yazıldığı yer TBMM binası değil Taceddin Dergâhı (S3, S5); paneller[3] için düzeltme önerildi. (ii) Mecliste marşı kürsüden okuyan Hamdullah Suphi Bey'dir (S3, S5, S7); paneller[4] görselinde Âkif kürsüde gösterilmemeli. (iii) Marş kabulden önce 17 Şubat 1921'de Sebilürreşad'da (sayı 468) yayımlandı ve 'Kahraman Ordumuza' ithaf edildi (S3 sayı ve tarih; S5 ithaf; S6 tarih). (iv) S5, Mustafa Kemal Paşa'nın Âkif'e Sebilürreşad'ın hizmeti için teşekkür ettiği bir söz aktarıyor (tek kaynak, dipnotlu); oyunda kullanılacaksa ikinci kaynak gerekir.
- **yontem_notu:** S4 ve S5 PDF olarak indirildi, metne çevrildi ve doğrudan okundu; bu iki kaynağın alıntıları birebir kopyadır. S1, S2, S3, S6, S7 sayfaları WebFetch aracıyla okundu; alıntılar araçtan 'harfi harfine' istenerek alındı, ancak araç metni bir özet modeli üzerinden verdiği için ekip bu beş sayfadaki alıntıları heroes.json'a yazmadan önce sayfada gözle teyit etmeli. Atatürk Ansiklopedisi'nin 'İstiklal Marşı'nın Yazılışı ve Kabulü' maddesi (ataturkansiklopedisi.gov.tr/detay/697) açılamadı (sayfa içeriği gelmedi); kaynak sayılmadı. Ekip tarayıcıdan açıp ek kaynak olarak kullanabilir. İstiklal Marşı metni görev gereği aranmadı.

