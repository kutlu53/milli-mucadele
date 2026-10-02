# İstiklal Postası — Proje Bilgileri

Sürüm 0.1 · Ekim 2026
Danışman: Sensei (Ordu Dr. Mehmet Hilmi Güler BİLSEM)

Bu belge projenin araştırma tarafını özetler: çağrı kuralları, araştırma tasarımı, takvim, yapay zekâ kullanım yöntemi ve yapılacaklar. Oyunun kendisi `OYUN_SENARYOSU.md` dosyasında anlatılıyor.

---

## 1. Özet Kartı

| Başlık | Karar |
|---|---|
| Çağrı | TÜBİTAK 2204-B Ortaokul Öğrencileri Araştırma Projeleri Yarışması, 2027 dönemi |
| Ana alan | **Tarih** (oyun ve yapay zekâ araçtır, nihai amaç tarih öğretimidir) |
| Bölge | Samsun Bölgesi (Ordu bu bölgeye bağlı) |
| Proje ekibi | En fazla 3 ortaokul öğrencisi + 1 danışman |
| Uygulama grubu | 8. sınıf öğrencileri (İnkılap Tarihi dersiyle eş zamanlı) |
| Desen | Ön-test / son-test kontrol gruplu yarı deneysel desen + kalıcılık testi |
| Ürün | "İstiklal Postası" — çevrimdışı çalışan, tarayıcı tabanlı eğitsel oyun |

---

## 2. Çağrıdan Kritik Kurallar

Kaynak: 2204-B 2027 Yılı Çağrı Duyurusu (tubitak.gov.tr, Eylül 2026 yayını). Kesin başvuru tarihleri yarışmanın web sayfasında ayrıca ilan edilecek, düzenli takip edilmeli.

- [ ] **Proje başvurudan önce bitmiş olmalı.** Fikir aşamasındaki ya da devam eden projelerle başvuru yapılamaz.
- [ ] **MEB Araştırma Uygulama İzin Belgesi** alınmalı ve PDF olarak yüklenmeli (https://arastirmaizinleri.meb.gov.tr). Süreç uzun sürebilir, **ilk iş olarak başlatılmalı**.
- [ ] **Veli onam formu** (18 yaş altı katılımcılar) ve **gönüllü katılım formu** alınmalı. Raporda onamların alındığı belirtilmeli, belgeler saklanmalı.
- [ ] **Hiçbir marka, firma veya ticari ürün adı** proje adında ve belgelerde öne çıkarılmamalı. Raporda yapay zekâ aracının ticari adı yerine "büyük dil modeli tabanlı yapay zekâ aracı" gibi genel bir ifade kullanılmalı.
- [ ] Proje adı **en fazla 15 kelime** olmalı.
- [ ] Özet **150–250 kelime** olmalı. Rapor tüm başlıklar dahil **2–20 sayfa**, web sayfasındaki "Proje Yazım Şablonu" ile tek PDF olarak hazırlanmalı.
- [ ] Ek belgeler PDF olmalı, dosya adı en fazla 25 karakter, kişisel bilgi içermemeli, en fazla 10 MB.
- [ ] İsteğe bağlı video: en fazla 3 dk, 10 MB, MP4.
- [ ] Ana alan ve tematik alan başvurudan sonra **değiştirilemez**. Tematik alan listesi web sayfasından kontrol edilmeli.
- [ ] Benzerlik taraması yapılıyor. Rapor metni özgün olmalı, alıntılar kaynaklı olmalı.
- [ ] Ayrımcı, dışlayıcı veya rencide edici ifade kullanılmamalı. Millî Mücadele anlatımında karşı tarafı tanımlarken de dil nesnel tutulmalı ("işgal kuvvetleri", "Fransız birlikleri" vb.).
- [ ] Bölge/final aşamasında **öğrenciler projeyi jüriye sözlü olarak sunar**. Sunum ve sorular öğrencilere aittir.

---

## 3. Proje Adı Önerileri (≤15 kelime)

1. Millî Mücadele Kahramanlarının Öğretiminde Yapay Zekâ Destekli Dijital Oyunun Etkisi *(11 kelime)*
2. Cepheden Matbaaya: Oyunlaştırılmış Bir Ortamla Millî Mücadele Kahramanlarını Öğrenmek *(9 kelime)*
3. İstiklal Postası: Millî Mücadelenin Görünmeyen Kahramanlarını Dijital Oyunla Öğrenmek *(9 kelime)*

---

## 4. Amaç, Problem ve Alt Problemler

### Amaç

Bu projenin amacı, Millî Mücadele döneminde cephede, lojistik hatlarda ve basın-yayın alanında kritik rol üstlenmiş on kahramanı tanıtan, yapay zekâ destekli ve oyunlaştırılmış bir dijital öğrenme ortamı geliştirmektir. Proje ayrıca bu ortamın ortaokul öğrencilerinin bilgi düzeyine, öğrendiklerinin kalıcılığına ve tarih dersine yönelik tutumlarına etkisini incelemeyi amaçlamaktadır.

### Problem durumu (rapor için çekirdek)

- Millî Mücadele anlatımı çoğunlukla büyük cephe savaşları ve komutanlar üzerine yoğunlaşıyor.
- Cephane taşıyan halk kahramanları, gönüllü kadın savaşçılar ve haber ağını kuran gazeteciler öğrencilerin zihninde daha silik kalıyor.
- Bu iddia, **kaynak taramasıyla** ve uygulamadan önce yapılacak **ön-test / kısa ön anket** sonuçlarıyla desteklenmeli. Örnek ön anket sorusu: "Millî Mücadele'de adını bildiğin kahramanları yaz."

### Problem cümlesi

Yapay zekâ destekli ve oyunlaştırılmış bir dijital öğrenme ortamı, 8. sınıf öğrencilerinin Millî Mücadele kahramanlarına ilişkin bilgi düzeyini, öğrendiklerinin kalıcılığını ve tarih dersine yönelik tutumlarını geleneksel öğretime göre nasıl etkiler?

### Alt problemler

1. Deney ve kontrol gruplarının ön-test puanları arasında fark var mı? *(Grupların başlangıçta denk olduğunu göstermek için.)*
2. Deney grubunun son-test puanları kontrol grubundan farklı mı?
3. Gruplar arasında kalıcılık testi puanları açısından fark var mı?
4. Deney grubundaki öğrencilerin tarih dersine yönelik tutumlarında değişim var mı?
5. Öğrencilerin oyuna ilişkin görüşleri nelerdir?
6. *(İsteğe bağlı)* Oyun içi veriler ile son-test puanı arasında bir ilişki var mı? Örneğin yıldız sayısı ve haber deneme sayısı.

---

## 5. Yöntem

### 5.1 Araştırma deseni

Ön-test / son-test kontrol gruplu yarı deneysel desen. Son-testten **3–4 hafta sonra** kalıcılık testi yapılır.

### 5.2 Çalışma grubu

- Aynı okuldan iki 8. sınıf şubesi.
- **Deney grubu:** Konuyu oyunla öğrenir.
- **Kontrol grubu:** Aynı içeriği öğretmenin geleneksel ders anlatımıyla öğrenir.
- Hangi şubenin deney grubu olacağı kurayla belirlenir.
- Ön-test puanlarıyla grupların denk olduğu gösterilir.

### 5.3 Adil karşılaştırma kuralı (çok önemli)

- **Her iki grup da aynı 30 Altın Bilgiyi öğrenir.** Fark yalnızca yöntemdedir. Kontrol grubunun dersi aynı içerikle planlanmalı, ders planı rapora eklenmeli.
- Her iki grup **eşit süre** alır (≈ 6 ders saati).
- Başarı testi soruları oyundaki bülten sorularıyla **birebir aynı olmamalı**. Aynı bilgiler farklı soru köklerine yazılmalı. Aksi hâlde jüri "oyun testin cevaplarını ezberletti" diyebilir.

### 5.4 Veri toplama araçları

| Araç | Açıklama | Ne zaman |
|---|---|---|
| **Başarı testi** | Proje ekibince hazırlanır. ~20–25 çoktan seçmeli soru. Her kahraman için 2–3 soru, bilgi + kavrama düzeyi. | Ön-test, son-test, kalıcılık |
| **Tutum ölçeği** | Literatürdeki geçerli bir "tarih dersine yönelik tutum ölçeği". **Ölçek sahibinden yazılı izin alınmalı.** | Ön-test, son-test |
| **Görüş formu** | 4–5 açık uçlu soru (Oyunda en çok neyi sevdin? Neyi zor buldun? Hangi kahramanı daha iyi hatırlıyorsun, neden?) | Son-test sonrası, yalnızca deney grubu |
| **Oyun içi veriler** | Öğretmen panelinden CSV olarak alınır. İsim yerine anonim öğrenci kodu kullanılır. | Uygulama boyunca |

**Başarı testinin geliştirilmesi:**
1. 30 Altın Bilgiden bir **belirtke tablosu** çıkarılır (hangi bilgi, kaç soru).
2. Gereğinden fazla soru yazılır (~35).
3. **Uzman görüşü** alınır: en az bir tarih/İnkılap Tarihi öğretmeni ve bir Türkçe öğretmeni (dil açıklığı için).
4. Deney ve kontrol dışındaki bir şubede **pilot uygulama** yapılır, çok kolay ya da çok zor sorular ayıklanır.
5. Kesin hâli 20–25 soru olur.

### 5.5 Verilerin analizi

- Ortaokul öğrencilerinin jüriye açıklayabileceği düzeyde tutulur:
  - Grup ortalamaları, ön-test → son-test artış puanları, kalıcılık düşüşü.
  - Sütun ve çizgi grafikleri.
- Danışman desteğiyle eklenebilecek istatistiksel test: Örneklem küçük olduğu için iki grup karşılaştırmasında Mann-Whitney U, grup içi ön-son karşılaştırmasında Wilcoxon. Öğrenciler testin ne işe yaradığını basitçe açıklayabilmeli: "Bu fark şans eseri mi oluştu, yoksa gerçek mi?"
- Görüş formundaki yanıtlar temalara ayrılır (ör. eğlence, zorluk, duygu, hatırlama), her temadan örnek öğrenci cümlesi verilir.

### 5.6 Etik

- MEB Araştırma Uygulama İzni
- Veli onam formu + öğrenci gönüllü katılım formu
- Tutum ölçeği kullanım izni
- Anonim öğrenci kodları. İsim–kod eşleşme listesi yalnızca danışmanda kalır, raporda isim geçmez.
- Kontrol grubuna, araştırma bittikten sonra oyunu oynama fırsatı verilir. Bu, raporda etik bir artı olarak belirtilir.
- Şerife Bacı bölümü gibi duygusal içerikler için öğretmen hazırlığı yapılır.

---

## 6. İş-Zaman Çizelgesi (taslak)

Başvurunun Ocak ortası civarında kapanacağı varsayımına dayanır. Kesin tarih ilan edilince güncellenmeli.

| Dönem | İş | Sorumlu |
|---|---|---|
| Ekim 1–2. hafta | Kaynak taraması başlar, kahraman listesi kesinleşir, **MEB izin başvurusu** yapılır, tutum ölçeği için izin istenir | Ekip + danışman |
| Ekim 3. hafta – Kasım 1. hafta | Kaynak tablosu doldurulur, 30 Altın Bilgi doğrulanır, yapay zekâ röportajları üretilir ve doğrulanır | Öğrenci A (içerik) |
| Ekim sonu – Kasım sonu | Oyun geliştirilir: önce tek kahramanlık tam döngü, sonra diğerleri | Öğrenci B (tasarım/kod) |
| Kasım | Başarı testi yazılır, uzman görüşü alınır, pilot uygulama yapılır, veli onamları toplanır | Öğrenci C (ölçme) |
| Kasım sonu | Oyunun pilot testi (3–4 öğrenci), düzeltmeler | Ekip |
| Aralık 1. hafta | Ön-test (başarı + tutum), her iki grup | Ekip + İnkılap Tarihi öğretmeni |
| Aralık 1–3. hafta | Uygulama: 6 ders saati, deney ve kontrol | İnkılap Tarihi öğretmeni |
| Aralık 3–4. hafta | Son-test + görüş formu | Ekip |
| Ocak 2. hafta | Kalıcılık testi (son-testten ~3–4 hafta sonra) | Ekip |
| Ocak | Analiz, rapor ve özet yazımı, tanıtım videosu | Ekip |
| Başvuru tarihine kadar | Rapor kontrolü, şablona uygunluk, benzerlik kontrolü, başvuru | Danışman |

**Dar boğazlar:** MEB izni ve kalıcılık testi için gereken bekleme süresi. Takvim sıkışırsa kalıcılık testi aralığı 2–3 haftaya indirilebilir. Bu raporda gerekçesiyle belirtilmeli.

**Okul işbirliği:** Uygulama okulunun İnkılap Tarihi öğretmeniyle erkenden görüşülmeli. 8. sınıflarda LGS kaygısı yüksek olduğu için oyunun müfredattaki Millî Mücadele konusunu işlediği vurgulanmalı.

---

## 7. Kahraman Listesi ve Kaynak Doğrulama Tablosu

| # | Kahraman | Alan | Konum | Doğrulama durumu |
|---|---|---|---|---|
| 1 | Sütçü İmam | Cephe — Güney | Maraş | ☐ |
| 2 | Şahin Bey | Cephe — Güney | Antep | ☐ |
| 3 | Tayyar Rahmiye | Cephe — Güney | Antep | ☐ |
| 4 | Kara Fatma (Fatma Seher Erden) | Cephe — Batı | Erzurum → Batı Cephesi | ☐ |
| 5 | Gördesli Makbule | Cephe — Batı | Gördes (Manisa) | ☐ |
| 6 | Halime Çavuş | Lojistik | Kastamonu | ☐ |
| 7 | Şerife Bacı | Lojistik | İnebolu – Kastamonu | ☐ |
| 8 | Halide Edib Adıvar | Basın-yayın | İstanbul → Ankara | ☐ |
| 9 | Yunus Nadi | Basın-yayın | Ankara | ☐ |
| 10 | Mehmet Âkif Ersoy | Basın-yayın | Kastamonu → Ankara | ☐ |

**Not:** Doğu Cephesi'nden bir kahraman yok. Jüri sorabilir. Ya listeye bir isim eklenmeli ya da raporda seçim ölçütleri açıklanmalı (ör. "Güney ve Batı cephelerinde halk direnişinin öne çıktığı örnekler seçildi").

### Kaynak kayıt formatı

Her bilgi için ayrı bir satır tutulur (ör. bir tabloda ya da `data/kaynaklar.json` dosyasında):

| Kod | Kaynak | Tür | Erişim |
|---|---|---|---|
| K1 | Yazar, *Eser adı*, Yayınevi, Yıl, s. xx | Kitap | Okul / il halk kütüphanesi |
| K2 | Kurum adı, sayfa başlığı, URL, erişim tarihi | Kurumsal web | Çevrim içi |

**Güvenilir kaynak türleri (öncelik sırasıyla):**
1. Atatürk Araştırma Merkezi ve Türk Tarih Kurumu yayınları
2. Üniversitelerin hakemli dergilerindeki makaleler (DergiPark üzerinden erişilebilir)
3. MEB ders kitapları ve resmî kurum sayfaları
4. Valilik ve belediyelerin kahramanlarla ilgili resmî sayfaları (ikincil olarak)

Kaynak olarak **kullanılmaması gerekenler:** Kaynaksız bloglar, sosyal medya paylaşımları, yapay zekâ cevaplarının kendisi.

**Doğrulama kuralı:** Bir bilgi ancak **en az iki bağımsız güvenilir kaynakta** geçiyorsa "doğrulandı" olarak işaretlenir. Kaynaklar arasında çelişki varsa (ör. farklı tarihler), oyunda daha genel bir ifade kullanılır ("1919 sonbaharında") ve çelişki raporda belirtilir. Bu durum, raporda öğrencilerin tarihsel düşünme becerisini gösteren güçlü bir örnek olur.

---

## 8. Yapay Zekâ Kullanım Yöntemi

### İlke

Yapay zekâ **bilgi kaynağı olarak değil, dönüştürme aracı olarak** kullanılır. Doğrulanmış kaynak metinleri, ortaokul öğrencisine uygun röportaj diline dönüştürmek için kullanılır. Ürettiği her cümle insan tarafından kaynaklarla karşılaştırılır.

Öğrencilerin araştırmaya katılan sınıf öğrencilerini canlı bir yapay zekâ aracına bağlamaması gerekir. Gerekçeler:
- Yapay zekâ hizmetlerinin çoğunda yaş sınırı ve veli izni koşulu var.
- Canlı üretimde yanlış bilgi (uydurma) riski kontrol edilemez.
- Deneyde her öğrencinin aynı içeriği görmesi gerekir.

### Röportaj üretim akışı

1. **Kaynak derleme:** Öğrenci A, kahraman için doğrulanmış bilgileri ve kaynak kodlarını bir metinde toplar.
2. **Üretim:** Bu metin aşağıdaki şablonla yapay zekâya verilir.
3. **Doğrulama:** Üretilen her cevap cümle cümle kaynak metinle karşılaştırılır (bkz. kontrol listesi).
4. **Düzeltme:** Kaynakta olmayan her bilgi silinir ya da düzeltilir.
5. **Kayıt:** Onaylanan cevap `heroes.json` dosyasına kaynak kodları, doğrulayan öğrenci ve tarihle birlikte yazılır.
6. **Ölçüm (raporda kullanılmak üzere):** Her röportajda yapay zekânın kaç cümle ürettiği, bunlardan kaçının kaynakla uyumlu olduğu, kaçının düzeltildiği ve kaçının uydurma olduğu sayılır.

Altıncı adım projeye ek bir araştırma bulgusu kazandırır: **"Yapay zekâ çıktılarının yüzde kaçı tarihsel olarak doğruydu?"** Bu, jürinin ilgisini çekecek özgün bir veri olur.

### Üretim için şablon

```
Sen bir ortaokul tarih oyunu için röportaj metni yazan bir yardımcısın.

KURALLAR:
- YALNIZCA aşağıdaki KAYNAK METİN'deki bilgileri kullan.
- Kaynak metinde olmayan hiçbir tarih, isim, yer, sayı veya olay ekleme.
- Bir sorunun cevabı kaynak metinde yoksa yalnızca "[KAYNAKTA YOK]" yaz.
- Her cevabın sonuna, kullandığın bilginin kaynak kodunu köşeli parantezle yaz. Örnek: [K1]
- Cevaplar 13-14 yaşındaki öğrencilerin anlayacağı dilde, en fazla 3 kısa cümle olsun.
- Cevapları kahramanın ağzından, birinci tekil şahısla yaz.
- Halk anlatısına dayanan bilgileri "Anlatılanlara göre" diye başlat.

KAHRAMAN: [ad]

KAYNAK METİN:
[doğrulanmış bilgiler, her biri kaynak koduyla]

SORULAR:
1. [soru]
2. [soru]
3. [soru]
```

### Doğrulama kontrol listesi (her cevap için)

- [ ] Cevaptaki her tarih kaynakta aynen geçiyor mu?
- [ ] Cevaptaki her isim ve yer adı kaynakta geçiyor mu?
- [ ] Kaynakta olmayan bir olay, duygu ya da ayrıntı eklenmiş mi?
- [ ] Anlatıya dayalı bilgi "Anlatılanlara göre" ile mi başlıyor?
- [ ] Dil, 8. sınıf öğrencisinin anlayacağı düzeyde mi?
- [ ] Kaynak kodu doğru mu?

### Raporda nasıl anlatılır

"Yapay zekâ aracı, doğrulanmış kaynak metinleri öğrencilere uygun röportaj diline dönüştürmek için kullanılmıştır. Üretilen tüm metinler proje ekibi tarafından kaynaklarla karşılaştırılmış, kaynakla uyuşmayan ifadeler düzeltilmiştir." Ardından altıncı adımın sonuçları tablo hâlinde verilir. **Aracın ticari adı yazılmaz.**

---

## 9. Öğrenci Rolleri

Jüri, sunumda öğrencilere "Bunu siz mi yaptınız, nasıl yaptınız?" diye soracaktır. Her öğrencinin net bir alanı olmalı, ama her öğrenci projenin tamamını anlatabilmeli.

| Öğrenci | Rol | Sorumluluklar |
|---|---|---|
| A | **İçerik ve tarih** | Kaynak taraması, kaynak tablosu, Altın Bilgilerin doğrulanması, yapay zekâ röportaj akışı, hikâye panel metinleri |
| B | **Oyun tasarımı** | Mini oyun mekaniklerinin tasarımı, oyunun geliştirilmesi (yapay zekâ destekli kodlama araçlarıyla, danışman rehberliğinde), pilot testler |
| C | **Ölçme ve veri** | Başarı testi, uzman görüşü süreci, ön/son/kalıcılık testlerinin uygulanması, verilerin analizi ve grafikler |

**Kodlama konusunda dürüst bir not:** Oyunun kodu yapay zekâ destekli bir kodlama aracıyla geliştirilecekse, öğrencilerin bu süreçte aktif olması gerekir. Öğrenci B, hangi özelliğin nasıl istendiğini, nasıl test edildiğini ve hangi hataların nasıl düzeltildiğini anlatabilmeli. Raporun yöntem bölümünde de bu süreç açıkça yazılmalı. Kodun tamamını danışmanın yazması, hem çağrının "öğrencilerin kendi bilgi ve becerileri" kuralına hem de sunum başarısına risk oluşturur.

**Öneri:** Geliştirme sürecinde bir "geliştirme günlüğü" tutulsun (tarih, ne istendi, ne oldu, ne düzeltildi). Bu günlük, jüri sorularına hazırlıkta çok işe yarar ve ek belge olarak yüklenebilir.

---

## 10. Riskler ve Önlemler

| Risk | Önlem |
|---|---|
| MEB izni gecikir | Ekim'in ilk haftasında başvuru. Bu sırada oyun geliştirmeye devam edilir |
| Tarihsel bilgi hatası | İki kaynak kuralı, `[DOĞRULA]` etiketleri, tarih öğretmeninden uzman görüşü |
| Okul bilgisayarlarında oyun açılmaz | Çevrimdışı tek sayfa, Pardus/Chrome/akıllı tahtada önceden test |
| Öğrencilerin emeği sorgulanır | Rol tablosu, geliştirme günlüğü, sunum provaları |
| Kontrol grubu dersi farklı içerik işler | Ortak 30 Altın Bilgi listesi + kontrol grubu ders planı |
| Test oyunla aynı sorulardan oluşur | Belirtke tablosu + farklı soru kökleri |
| Duygusal içerik (Şerife Bacı) | Öğretmen hazırlığı, sembolik görsel dil |
| Benzer projeler daha önce yapılmış | Literatür taraması, özgünlük vurgusu: (1) lojistik ve basın odağı, (2) kaynakla doğrulanmış yapay zekâ röportajları ve doğruluk oranı ölçümü |

---

## 11. Açık Kararlar ve Yapılacaklar

**Hemen**
- [ ] MEB Araştırma Uygulama İzni başvurusu
- [ ] Uygulama okulu ve İnkılap Tarihi öğretmeniyle görüşme
- [ ] Proje ekibinin (3 öğrenci) kesinleşmesi
- [ ] Tutum ölçeği seçimi ve izin talebi

**Kararlar**
- [ ] Proje adı (3 öneri arasından ya da yeni)
- [ ] Doğu Cephesi'nden kahraman eklenecek mi?
- [ ] Tematik alan seçimi (web sayfasındaki listeye göre)
- [ ] Kalıcılık testi aralığı (3–4 hafta mı, 2–3 hafta mı?)

**Geliştirme**
- [ ] `heroes.json` iskeleti + ilk kahramanın (Sütçü İmam) tam döngüsü
- [ ] İlk pilot test
- [ ] Kalan 9 kahraman
- [ ] Bültenler, final, öğretmen paneli, CSV dışa aktarma
