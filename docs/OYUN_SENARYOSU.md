# İstiklal Postası — Oyun Senaryosu ve Tasarım Belgesi

Sürüm 0.1 · Ekim 2026
Proje: TÜBİTAK 2204-B (Tarih) — Millî Mücadele kahramanlarının yapay zekâ destekli dijital oyunla öğretimi

> **Güncelleme (3 Ekim 2026):** Kaynak taraması sonucunda bu belgedeki bazı taslak bilgilerin yanlış ya da kaynaksız olduğu görüldü (ör. Tayyar Rahmiye Antepli değil Osmaniyelidir; Halime Çavuş'un "asıl adı Kezban" bilgisi kaynaklarda yoktur; Gördesli Makbule için "efe kıyafeti" bulunamadı). **Oyundaki güncel içerik `data/heroes.json` dosyasındadır;** bu belgenin 5. bölümü ilk taslak olarak korunmuştur. Ayrıntılar: `docs/KAYNAK_RAPORU.md`.

> **Önemli:** Bu belgedeki tarihî bilgiler bir başlangıç taslağıdır. `[DOĞRULA]` etiketli her bilgi, oyuna girmeden önce en az iki güvenilir kaynakla doğrulanmalı ve `data/heroes.json` dosyasına kaynağıyla birlikte yazılmalıdır. Etiketsiz bilgiler de kaynak tablosuna işlenmeden kullanılmamalıdır.

---

## 1. Künye

| Özellik | Değer |
|---|---|
| Oyunun adı | İstiklal Postası (alt başlık: Zaman Muhabiri) |
| Hedef kitle | 8. sınıf öğrencileri (13–14 yaş) |
| Ders bağlantısı | T.C. İnkılap Tarihi ve Atatürkçülük — Millî Mücadele üniteleri |
| Platform | Tarayıcı (okul bilgisayarı, akıllı tahta, tablet), **internetsiz çalışır** |
| Kontrol | Yalnızca tıklama/dokunma ve sürükle-bırak. Klavye zorunlu değil |
| Süre | Kahraman başına 12–15 dk. Toplam ~2,5–3 saat, 2–3 haftaya yayılır |
| Oyuncu | Tek kişi (isteğe bağlı olarak ikili oynanabilir) |
| Dil | Türkçe, isteğe bağlı sesli okuma |

---

## 2. Tasarım İlkeleri

1. **Her kahraman = 3 Altın Bilgi.** Toplam 30 bilgi. Oyundaki her mekanik bu 30 bilgiyi tekrar eder. Fazlası "Biliyor muydun?" kutusunda isteğe bağlı kalır, öğrencinin zihnini doldurmaz.
2. **Gör → Oyna → Sor → Yaz döngüsü.** Bilgi önce hikâyede görülür, mini oyunda yaşanır, röportajda dinlenir, sonunda öğrenci onu haberde kendisi yazar. Son adım hatırlamayı zorunlu kıldığı için akılda kalıcılığın asıl kaynağıdır.
3. **Aralıklı ve karışık tekrar.** Ara bültenler ve Halime Çavuş bölümündeki "parola soruları", önceki kahramanları yeniden sordurur.
4. **Mekânsal hafıza.** Her kahraman Anadolu haritasında bir noktaya bağlanır. Oyun ilerledikçe harita ışıklarla dolar.
5. **Bir duygu anı.** Her kahramanın hikâyesinde tek bir güçlü an vardır. İnsan, duyguyla eşleşen bilgiyi daha iyi hatırlar.
6. **Şiddet sembolik kalır.** Silahla nişan alma, kan, ölüm görüntüsü yoktur. Oyuncu direnişi örgütler, taşır, haberleştirir, saklanır, yol bulur.
7. **Kısa metin.** Bir panelde en fazla 2 cümle bulunur. Her metin sesli dinlenebilir.
8. **Cezasız başarısızlık.** Yanlış cevap oyunu bitirmez. İpucu verilir, tekrar denenir. Yıldızlar ödüllendirir, kayıp yoktur.
9. **Kurgu ile tarih ayrı durur.** Kurgusal karakterler (Nuri, oyuncu) ekranda "kurgusal karakter" rozeti taşır. Belgelenmiş bilgi ile halk anlatısı ayrı gösterilir. Anlatı içeren cümleler "Anlatılanlara göre…" diye başlar.

---

## 3. Hikâye Çerçevesi

### Karakterler

- **Oyuncu (Zaman Muhabiri):** 2026'da bir ortaokul öğrencisi. Oyun başında adını ve avatarını seçer.
- **Telgrafçı Nuri** *(kurgusal)*: 1920'de Ankara telgrafhanesinde çalışan 15 yaşında bir çırak. Oyuncunun rehberidir: görevleri verir, ipucu verir, sesli anlatımı yapar. Gerçek bir tarihî kişi olmadığı her ekranda belli olmalıdır.
- **Muhabir Defteri:** On sayfası solmuş eski bir defter. Her kahramanın hikâyesi tamamlandığında bir sayfa canlanır.

### Prolog (≈2 dk)

1. **Eski depo.** Oyuncu, okulun tarih kulübü için eski depoda malzeme ararken tozlu bir tahta sandık bulur. İçinde pirinçten bir telgraf makinesi ve bir defter vardır.
2. **Telgraf tıkırdar.** Ekrana bir mesaj düşer: *"Burası Ankara, yıl 1920. Milletin sesini duyuracak bir muhabir arıyoruz. Unutulan kahramanların sayfaları siliniyor. Onları kaydet!"*
3. **Nuri kendini tanıtır.** Görevi açıklar: On kahramanın hikâyesini topla, röportaj yap, haberini yaz. Defterin her sayfası canlandığında Anadolu haritasında bir ışık yanacak. On sayfa tamamlanınca "Zafer Nüshası" basılacak.
4. **Defter açılır.** On soluk sayfa ve karanlık bir Anadolu haritası görünür. İlk konum (Maraş) yanıp söner.

### Bölüm Yapısı

| Bölüm | Ad | Kahramanlar | Alan |
|---|---|---|---|
| I | Kıvılcım | Sütçü İmam, Şahin Bey, Tayyar Rahmiye | Cephe — Güney |
| — | **Ajans Bülteni 1** | 1–3 karışık tekrar | — |
| II | Gönüllüler | Kara Fatma, Gördesli Makbule | Cephe — Batı |
| III | İstiklal Yolu | Halime Çavuş, Şerife Bacı | Lojistik |
| — | **Ajans Bülteni 2** | 1–7 karışık tekrar | — |
| IV | Milletin Sesi | Halide Edib Adıvar, Yunus Nadi, Mehmet Âkif Ersoy | Basın-yayın |
| Final | Zafer Nüshası | 10 kahramanın tamamı | — |

Bölümler sırayla açılır. Öğretmen panelinden tümü açılabilir (bkz. Bölüm 7).

---

## 4. Bir Kahraman Bölümünün Akışı

Her kahraman aynı altı adımlı döngüyü izler. Tutarlı yapı, öğrencinin kuralları her seferinde yeniden öğrenmek zorunda kalmamasını sağlar.

| Adım | Ad | Süre | İşlev |
|---|---|---|---|
| 1 | Yolculuk | ~10 sn | Harita animasyonu: konum adı + tarih ekrana yazılır |
| 2 | Hikâye | ~2 dk | 4–6 çizgi roman paneli. Altın bilgiler ilk kez burada görünür |
| 3 | Mini oyun | 3–4 dk | Kahramanın rolünü yaşatan, ona özgü oyun |
| 4 | Röportaj | ~2 dk | Oyuncu soruları seçer, doğrulanmış cevaplar gelir. Altın bilgiler deftere "not" olarak düşer |
| 5 | Haberi Yaz | ~2 dk | Manşet şablonundaki 3 boşluğa doğru kelimeleri sürükle (çeldiricili) |
| 6 | Sayfa Canlanır | ~30 sn | Defter sayfası renklenir, Kahraman Kartı kazanılır, haritada ışık yanar |

### Yıldız Sistemi (kahraman başına en fazla 3)

- ⭐ Mini oyunu tamamla
- ⭐ Haberi ilk denemede doğru yaz
- ⭐ "Biliyor muydun?" bonus sorusunu doğru cevapla

### Haberi Yaz — geri bildirim kuralı

Yanlış kelime bırakılırsa kelime yerine oturmaz ve geri kayar. Röportajda o bilginin geçtiği cümle defterde sarı ile parlar. Bu yöntemde öğrenciye doğru cevap söylenmez, cevabı nerede bulacağı gösterilir.

### Röportaj kuralı

Röportaj cevapları oyun sırasında canlı üretilmez. Proje ekibi cevapları yapay zekâ ile kaynak metinlerden önceden üretir, kaynaklarla karşılaştırıp düzeltir, onaylanmış hâlini `heroes.json` dosyasına yazar. Ayrıntılı yöntem `PROJE_BILGILERI.md` dosyasında anlatılıyor.

---

## 5. Kahraman Bölümleri

Her bölümde şu başlıklar bulunur: Konum ve tarih, Altın Bilgiler, Hikâye panelleri, Mini oyun, Röportaj soruları, Haber şablonu, Biliyor muydun, Duygu anı.

---

### 5.1 Sütçü İmam — "Uzunoluk'ta Kıvılcım"

**Konum / tarih:** Maraş, 31 Ekim 1919 `[DOĞRULA: kaynaklarda farklı tarih geçebilir]`
**Alan:** Cephe — Güney

**Altın Bilgiler**
1. Maraş'ta Fransız işgaline karşı direnişi başlatan halk kahramanıdır.
2. Uzunoluk Hamamı önünde Maraşlı kadınlara yapılan saldırıya karşı çıkması direnişin kıvılcımı oldu.
3. Halkın direnişi sonunda Maraş 12 Şubat 1920'de kurtuldu. Şehre bu yüzden "Kahraman" unvanı verildi `[DOĞRULA: unvanın veriliş yılı]`.

**Hikâye panelleri**
1. Maraş çarşısı. Ahmet İmam sütünü dağıtıyor. *Nuri: "Herkes ona Sütçü İmam der."*
2. İşgal askerleri sokaklarda. Halk tedirgin, dükkânlar kapanıyor.
3. Uzunoluk Hamamı önünde kadınlara saldırı. Sütçü İmam karşı çıkar. *(Görsel: anlık bir kıvılcım efekti ile sembolize edilir, silah ve kan gösterilmez.)*
4. Haber mahalleden mahalleye yayılır. Pencerelerde ışıklar yanar.
5. 12 Şubat 1920 sabahı: Maraş kurtulmuştur, kalede bayrak dalgalanır.

**Mini oyun: "Kıvılcımı Yay"**
- Maraş'ın stilize mahalle haritası, 8–10 düğümden oluşan bir ağ.
- Oyuncu haberciyi komşu düğümlere tıklayarak ilerletir. Uğradığı her mahallede "direniş ışığı" yanar.
- Devriye gölgeleri bazı yolları birkaç saniyeliğine kapatır. Oyuncu beklemeyi ya da başka yoldan dolaşmayı seçer.
- Süre: 90 sn. Tüm mahalleler aydınlanırsa oyun tamamlanır.
- Kazandırdığı anlayış: Direniş tek bir kişinin değil, birleşen halkın eseridir.

**Röportaj soruları (oyuncu 4 sorudan 3'ünü seçer)**
- Size neden "Sütçü İmam" deniyor?
- O gün Uzunoluk'ta ne oldu?
- Maraş halkı nasıl birleşti?
- Şehrin adına "Kahraman" neden eklendi?

**Haber şablonu**
> **____ halkı boyun eğmedi!** ____ önünde başlayan direnişin sonunda şehir ____ tarihinde kurtuldu.

Doğru: Maraş · Uzunoluk Hamamı · 12 Şubat 1920
Çeldiriciler: Antep · İnebolu İskelesi · 9 Eylül 1922

**Biliyor muydun?** Kahramanmaraş "Kahraman", Gaziantep "Gazi", Şanlıurfa "Şanlı" unvanlarını Millî Mücadele'deki direnişleri nedeniyle aldı `[DOĞRULA]`.
*Bonus soru:* "Gazi" unvanı hangi şehre verildi?

**Duygu anı:** Sıradan bir sütçünün tek bir cesaret anı bir şehri ayağa kaldırır.

---

### 5.2 Şahin Bey — "Antep Yolunun Bekçisi"

**Konum / tarih:** Antep, Mart 1920
**Alan:** Cephe — Güney

**Altın Bilgiler**
1. Antep'te halktan gönüllülerle oluşan bir Kuvâ-yi Milliye birliğinin başındaydı `[DOĞRULA]`.
2. Kilis–Antep yolunda Fransız kuvvetlerini durdurmak için savaştı ve 28 Mart 1920'de şehit oldu `[DOĞRULA: tarih]`.
3. Antep'in uzun direnişi nedeniyle TBMM şehre "Gazi" unvanını verdi (1921).

**Hikâye panelleri**
1. Şahin Bey köylerden gelen gönüllüleri toplar. *(Gerçek adı: Mehmet Said `[DOĞRULA]`)*
2. Kilis yönünden uzun bir işgal kolonu yaklaşır.
3. Az sayıda gönüllüyle yolu günlerce tutarlar, şehir hazırlanmak için zaman kazanır.
4. Şahin Bey şehit düşer. *(Görsel: yol kenarında yalnız bir kalpak, toz bulutu.)*
5. Antep aylarca direnir `[DOĞRULA: süre]`. TBMM şehre "Gazi" unvanını verir.

**Mini oyun: "Yolu Tut"**
- Kilis'ten Antep'e uzanan yolda 5 geçit noktası bulunur.
- Oyuncunun elinde sınırlı sayıda gönüllü kartı vardır: Gözcü (kolonu erken görür), Haberci (şehre zaman kazandırır), Engelci (yolu yavaşlatır).
- İşgal kolonları ok simgeleriyle dalgalar hâlinde ilerler. Kartları doğru geçitlere yerleştirmek gerekir.
- Amaç: "Şehir hazırlık çubuğunu" doldurmak. Kolonlar "durdu" ikonuyla yavaşlar, çatışma gösterilmez.
- 3 dalga, toplam ~3 dk.

**Röportaj soruları**
- Gönüllüleriniz kimlerdi?
- Kilis–Antep yolu neden bu kadar önemliydi?
- Az kişiyle nasıl dayanabildiniz?
- Antep halkı sizden sonra ne yaptı?

**Haber şablonu**
> **____ Bey** ____ yolunda işgalcileri durdurmak için savaştı. Antep'in direnişi nedeniyle şehre ____ unvanı verildi.

Doğru: Şahin · Kilis–Antep · Gazi
Çeldiriciler: Kahraman · Şanlı · İzmir–Aydın

**Biliyor muydun?** Şehrin bugünkü adı olan Gaziantep, bu unvandan gelir.

**Duygu anı:** Şehri korumak için yolu tutan bir avuç insan.

---

### 5.3 Tayyar Rahmiye — "Siperdeki Cesaret"

**Konum / tarih:** Antep, 1920
**Alan:** Cephe — Güney

**Altın Bilgiler**
1. Antep savunmasında erkeklerle birlikte çarpışan bir kadın kahramandır.
2. "Tayyar" lakabı hızı ve cesaretinden dolayı verilmiştir `[DOĞRULA]`.
3. Antep savunması sırasında şehit düştü `[DOĞRULA: tarih]`.

**Hikâye panelleri**
1. Kuşatma altındaki Antep. Kadınlar ve çocuklar siperlere yiyecek ve cephane taşıyor.
2. Rahmiye siperler arasında herkesten hızlı koşar. *Nuri: "Ona 'Tayyar', yani 'uçan' derlerdi."*
3. Bir siper zor durumdadır. Rahmiye oraya ulaşır ve savunmaya katılır.
4. Rahmiye şehit düşer. *(Görsel: siperde rüzgârda dalgalanan bir yemeni.)*

**Mini oyun: "Sipere Ulaştır"**
- Yandan görünüşlü kısa bir koşu oyunu: damlar ve dar sokaklar arasında atlayarak ilerleme.
- Devriye fenerlerinin ışığına girmeden su ve cephane torbalarını 3 farklı sipere ulaştırma.
- Kontrol: tek dokunuş = zıpla, basılı tut = eğil/saklan.
- Her tur ~1 dk, toplam 3 tur.

**Röportaj soruları**
- Antep savunmasında kadınlar neler yaptı?
- "Tayyar" lakabını nasıl aldınız?
- Siperlerde bir gün nasıl geçerdi?

**Haber şablonu**
> ____ savunmasında erkeklerle omuz omuza çarpışan bir ____ kahraman: ____ Rahmiye.

Doğru: Antep · kadın · Tayyar
Çeldiriciler: Maraş · Kara · genç

**Biliyor muydun?** Antep savunmasında kadınlar ve çocuklar da cephane taşıma, yemek hazırlama ve yaralılara bakma gibi görevler üstlendi `[DOĞRULA]`.

**Duygu anı:** Cephede yalnızca askerler değil, bütün bir şehir vardır.

---

### 5.4 Kara Fatma — "Müfrezenin Komutanı"

**Konum / tarih:** Erzurum → Batı Cephesi, 1919–1922
**Alan:** Cephe — Batı

**Altın Bilgiler**
1. Asıl adı Fatma Seher Erden'dir ve Erzurumludur.
2. Mustafa Kemal Paşa'nın yanına giderek görev istedi, gönüllülerden oluşan bir milis müfrezesi kurdu.
3. Batı Cephesi'nde savaştı. Gösterdiği başarılar nedeniyle rütbe ve İstiklal Madalyası aldı `[DOĞRULA: rütbe adı]`.

**Hikâye panelleri**
1. Erzurum. Fatma, Millî Mücadele haberlerini dinler ve yola çıkmaya karar verir.
2. Uzun bir yolculuk. Mustafa Kemal Paşa'nın karşısına çıkıp görev ister `[DOĞRULA: görüşmenin yeri]`.
3. Köy köy dolaşıp gönüllü toplar. Müfrezesinde kadınlar da vardır `[DOĞRULA]`.
4. Batı Cephesi. Müfreze cephede görev yapar.
5. Göğsüne İstiklal Madalyası takılır.

**Mini oyun: "Müfrezeni Kur"**
- **Aşama 1 — Gönüllü toplama:** Bir köy haritasında 8 kişiyle konuşulur. Her kişinin bir becerisi vardır: yol bilen, at yetiştiren, yaralılara bakan, haber taşıyan, yemek hazırlayan. Oyuncu 5 görevi doğru kişilerle eşleştirerek müfrezeyi tamamlar.
- **Aşama 2 — Rota:** Harita üzerinde Erzurum'dan Batı Cephesi'ne giden durakları doğru sıraya dizer `[DOĞRULA: rota]`.
- Kazandırdığı anlayış: Bir birliği oluşturan, farklı becerilere sahip insanlardır.

**Röportaj soruları**
- Erzurum'dan neden yola çıktınız?
- Mustafa Kemal Paşa'ya ne dediniz?
- Müfrezenizde kimler vardı?
- İstiklal Madalyası sizin için ne ifade ediyor?

**Haber şablonu**
> ____'lu Fatma Seher Hanım kurduğu ____ ile Batı Cephesi'nde savaştı ve ____ ile ödüllendirildi.

Doğru: Erzurum · milis müfrezesi · İstiklal Madalyası
Çeldiriciler: Kastamonu · gazete · Nobel Ödülü

**Biliyor muydun?** Bir dönem esir düştüğü ve kaçarak birliğine döndüğü anlatılır `[DOĞRULA]`.

**Duygu anı:** "Ben de vatanım için bir şey yapabilirim" diyerek binlerce kilometre yol giden bir kadın.

---

### 5.5 Gördesli Makbule — "Efe Kadın"

**Konum / tarih:** Gördes (Manisa), Batı Anadolu, 1919–1921
**Alan:** Cephe — Batı

**Altın Bilgiler**
1. Manisa'nın Gördes ilçesindendir. Eşiyle birlikte Kuvâ-yi Milliye'ye katıldı `[DOĞRULA: eşinin adı]`.
2. Yunan işgaline karşı efe kıyafetiyle Kuvâ-yi Milliye birliklerinde savaştı.
3. Çarpışmalardan birinde şehit düştü `[DOĞRULA: yıl ve yer]`.

**Hikâye panelleri**
1. Gördes'in dağ köyleri. İşgal haberi gelir.
2. Makbule efe kıyafetini giyer ve eşiyle dağa çıkar.
3. Kuvâ-yi Milliye birlikleri dağ yollarını çok iyi bilir.
4. Makbule bir çarpışmada şehit düşer. *(Görsel: dağ başında bir zeybek silueti, gün batımı.)*

**Mini oyun: "Dağ Yolu"**
- Döndürmeli yol bulmacası: Dağlık bir haritadaki patika parçaları döndürülerek Gördes köyünden Kuvâ-yi Milliye kampına kesintisiz bir yol kurulur.
- Yol, işgal karakollarının görüş alanından (kırmızı bölgeler) geçmemelidir.
- 3 bulmaca, gittikçe zorlaşır.

**Röportaj soruları**
- Kuvâ-yi Milliye ne demek?
- Neden efe kıyafeti giydiniz?
- Dağlarda nasıl hayatta kaldınız?

**Haber şablonu**
> ____'li Makbule Hanım, ____ birliklerinde ____ kıyafetiyle işgale karşı savaştı.

Doğru: Gördes · Kuvâ-yi Milliye · efe
Çeldiriciler: Erzurum · Anadolu Ajansı · asker

**Biliyor muydun?** Kuvâ-yi Milliye, düzenli ordu kurulmadan önce halkın işgale karşı kendiliğinden oluşturduğu direniş birlikleridir.

**Duygu anı:** Dağların türküsünü bilen bir kadının vatan savunması.

---

### 5.6 Halime Çavuş — "Gizli Kimlik"

**Konum / tarih:** Kastamonu – İnebolu hattı, 1920–1922
**Alan:** Lojistik

**Altın Bilgiler**
1. Kastamonuludur. Asıl adı Kezban'dır `[DOĞRULA]`.
2. Erkek kılığına girip "Halim" adıyla cephane taşıyan birliklere katıldı `[DOĞRULA]`.
3. Hizmetleri nedeniyle çavuş rütbesi ve İstiklal Madalyası aldı `[DOĞRULA]`.

**Hikâye panelleri**
1. Kastamonu. Kezban, kadınların cepheye gidemeyeceğini duyar.
2. Saçlarını keser, erkek kıyafeti giyer ve "Halim" adını alır.
3. Cephane kolunda gece gündüz yük taşır.
4. Gerçek kimliği ortaya çıktığında herkes şaşırır `[DOĞRULA]`. Ona "Halime Çavuş" denir.

**Mini oyun: "Kontrol Noktası"** *(oyunun yerleşik tekrar bölümü)*
- Halime, cephane yüklü kağnıyla 5 kontrol noktasından geçer.
- Her noktada nöbetçi bir "parola sorusu" sorar. Bu sorular **önceki kahramanlarla ilgilidir** (1–5).
- Doğru cevap verilirse geçilir. Yanlış cevap verilirse "şüphe göstergesi" artar ve ilgili kahramanın kartı 5 saniye gösterilir. Ardından oyuncu tekrar dener.
- Kazandırdığı anlayış: Önceki bilgiyi hatırlama (aralıklı tekrar).

**Röportaj soruları**
- Neden erkek kılığına girdiniz?
- Cephane nasıl taşınırdı?
- Gerçek adınız ortaya çıkınca ne oldu?

**Haber şablonu**
> Kastamonulu ____, "____" adıyla cephane taşıdı ve ____ rütbesi aldı.

Doğru: Kezban · Halim · çavuş
Çeldiriciler: Fatma · Said · paşa

**Biliyor muydun?** Millî Mücadele'de cephanenin büyük bölümü öküz arabaları (kağnılar), atlar ve insanların sırtında taşındı.

**Duygu anı:** Ülkesine hizmet etmek için kimliğini saklamak zorunda kalan bir genç kadın.

---

### 5.7 Şerife Bacı — "Kar Fırtınasında Kağnı"

**Konum / tarih:** İnebolu – Kastamonu yolu (İstiklal Yolu), kış 1921 `[DOĞRULA]`
**Alan:** Lojistik

> **Belge / anlatı ayrımı:** Şerife Bacı'nın hikâyesinin bazı ayrıntıları halk anlatısına dayanır. Bu bölümde anlatı içeren cümleler "Anlatılanlara göre…" diye başlamalıdır.

**Altın Bilgiler**
1. İnebolu İskelesi'ne gelen cephaneyi kağnılarla cepheye taşıyan Kastamonulu kadınlardandır.
2. Anlatılanlara göre, kar fırtınasında cephanenin ıslanmaması için onu kendi örtüsüyle örttü.
3. Soğuktan donarak şehit oldu. Millî Mücadele'nin kadın şehitlerinin sembolü olarak anılır `[DOĞRULA: "ilk kadın şehit" ifadesi]`.

**Hikâye panelleri**
1. İnebolu İskelesi. Gemilerden indirilen cephane sandıkları kağnılara yükleniyor.
2. Şerife, kucağında bebeğiyle kağnının yanında yürüyor `[DOĞRULA]`.
3. Kar fırtınası başlar. Yol görünmez olur.
4. Anlatılanlara göre örtüsünü cephanenin üzerine örter.
5. Sabah: Cephane kuru ve sağlam şekilde yerinde. *(Görsel: karla kaplı kağnı, örtü. İnsan bedeni gösterilmez.)*
6. Bugün: Kastamonu'daki Şerife Bacı anıtı `[DOĞRULA]`.

**Mini oyun: "İstiklal Yolu"** *(oyunun en uzun ve en duygusal bölümü, ~4 dk)*
- Kuşbakışı görünüşte kağnı yolculuğu: İnebolu'dan Kastamonu'ya.
- 3 gösterge vardır: **Cephane kuruluğu**, **kağnı sağlamlığı**, **sıcaklık**.
- Yolda karşılaşılan durumlar: buzlu yokuş, donmuş dere, yol ayrımı, kar fırtınası.
- Kararlar: Yol ayrımında rota seçimi (kısa ama dik / uzun ama düz), mola yeri, örtünün kime verileceği.
- Yıldız yalnızca cephanenin kuru ulaşmasına bağlıdır. Hikâyenin sonu tarihsel olduğu için değişmez. Oyuncu bu sonu bir "kaybetme" olarak yaşamamalıdır.
- Final sahnesi: Renkler solar, kar yağar, Nuri sesli anlatır. Ardından ekrana *"Cephane cepheye ulaştı."* yazısı gelir.

**Röportaj soruları** *(Şerife Bacı yerine onu tanıyan kurgusal bir köylü kadınla yapılır; bu durum ekranda belirtilir)*
- Cephane nereden geliyordu?
- Kadınlar bu yolda neler yaşadı?
- O kış gecesi ne oldu?

**Haber şablonu**
> ____ İskelesi'nden cephane taşıyan Şerife Bacı, ____ ıslanmasın diye örtüsünü verdi ve ____ şehit oldu.

Doğru: İnebolu · cephane · kar fırtınasında
Çeldiriciler: İzmir · bebeği · cephede

**Biliyor muydun?** İnebolu'dan Kastamonu ve Çankırı üzerinden Ankara'ya uzanan bu yola bugün "İstiklal Yolu" deniyor `[DOĞRULA]`.

**Duygu anı:** Kendini değil, cepheye gidecek cephaneyi korumak.

**Hassasiyet notu:** Bu bölüm öğrencileri duygusal olarak etkileyebilir. Öğretmen oturum öncesinde kısa bir hazırlık konuşması yapmalı, oturum sonrasında sınıfla birkaç dakika sohbet etmelidir.

---

### 5.8 Halide Edib Adıvar — "Meydanda Bir Ses"

**Konum / tarih:** İstanbul, Sultanahmet (1919) → Ankara (1920) → cephe
**Alan:** Basın-yayın

**Altın Bilgiler**
1. İzmir'in işgalini protesto eden Sultanahmet Mitingi'nde (1919) halka seslenen bir konuşma yaptı `[DOĞRULA: tarih]`.
2. Anadolu'ya geçerek Millî Mücadele'ye katıldı. Yunus Nadi ile birlikte Anadolu Ajansı'nın kuruluşunda rol aldı.
3. Cephede görev alarak rütbe aldı `[DOĞRULA: rütbeler]`. Millî Mücadele'yi "Ateşten Gömlek" romanında anlattı.

**Hikâye panelleri**
1. Sultanahmet Meydanı, siyahlarla örtülü pankartlar, kalabalık.
2. Halide Edib kürsüde halka seslenir.
3. İşgal altındaki İstanbul'dan gizlice Anadolu'ya geçer `[DOĞRULA: geçiş biçimi]`.
4. Ankara yolunda Yunus Nadi ile bir ajans kurma fikri doğar.
5. Cephede, üniformalı Halide.

**Mini oyun: "Kalabalığa Seslen"**
- Ekranda 10 cümle kartı bulunur. Oyuncu bunlardan 5'ini seçip doğru sıraya dizerek bir miting konuşması kurar.
- Konuya uygun cümleler (birlik, işgale karşı çıkış, milletin kararlılığı) meydandaki kalabalık göstergesini doldurur.
- Konu dışı ya da **çağına uymayan** cümleler kalabalığı azaltır. Örneğin: "Bu haberi hemen telefonla bütün dünyaya duyuralım!"
- Kazandırdığı anlayış: Tarihsel bağlam ve dönem düşüncesi.
- Cümle kartları proje ekibi tarafından özgün olarak yazılır. Gerçek konuşmadan uzun alıntı yapılmaz.

**Röportaj soruları**
- Sultanahmet'te kalabalığa ne söylediniz?
- İstanbul'dan Anadolu'ya nasıl geçtiniz?
- Ajans kurmak neden gerekliydi?
- Cephede ne gördünüz?

**Haber şablonu**
> Halide Edib Hanım, ____ Mitingi'nde ____'in işgalini protesto etti. Daha sonra ____'nın kuruluşunda rol aldı.

Doğru: Sultanahmet · İzmir · Anadolu Ajansı
Çeldiriciler: Erzurum · Antep · Sebilürreşad

**Biliyor muydun?** "Ateşten Gömlek" romanı Millî Mücadele yıllarını anlatır ve sinemaya da uyarlanmıştır `[DOĞRULA]`.

**Duygu anı:** Bir kadının sesinin bir meydanı doldurması.

---

### 5.9 Yunus Nadi — "İlk Haber"

**Konum / tarih:** Ankara yolu → Ankara, Nisan 1920
**Alan:** Basın-yayın

**Altın Bilgiler**
1. Gazetecidir. Halide Edib ile birlikte Anadolu Ajansı'nın kurulmasına öncülük etti. Ajans 6 Nisan 1920'de kuruldu.
2. Ankara'da "Yeni Gün" gazetesini çıkararak Millî Mücadele'yi halka duyurdu `[DOĞRULA]`.
3. Ajansın amacı, Millî Mücadele haberlerini doğru ve hızlı biçimde Anadolu'ya ve dünyaya ulaştırmaktı.

**Hikâye panelleri**
1. Ankara yolunda bir tren istasyonu. Yunus Nadi ve Halide Edib konuşuyor `[DOĞRULA: istasyon adı]`.
2. "İşgalcilerin yalan haberlerine karşı milletin kendi sesi olmalı."
3. Ajansın adı konur: Anadolu Ajansı.
4. Telgrafhane: İlk haber Anadolu'nun dört bir yanına gider.

**Mini oyun: "Telgrafhane"**
- **Aşama 1 — Doğru mu, söylenti mi?:** Masaya 6 haber kartı gelir. Kaynağı belli olanlar "Gönder" kutusuna, kaynaksız söylentiler "Çöp" kutusuna atılır. *(Günümüzdeki dezenformasyonla bağ kurar.)*
- **Aşama 2 — Telgraf ritmi:** Seçilen haberin kelimeleri ekranda akar. Oyuncu ritmik vuruşlarla (kısa/uzun dokunuş) haberi telgrafla gönderir. Mors alfabesinden esinlenen basitleştirilmiş bir ritim oyunudur.
- 3 haber gönderilir. Sonuncusu "Ajansın ilk haberi" olarak işaretlenir.

**Röportaj soruları**
- Anadolu Ajansı'nı neden kurdunuz?
- İlk haberi nasıl gönderdiniz?
- Gazeteci olmak Millî Mücadele'de neden önemliydi?

**Haber şablonu**
> ____ tarihinde kurulan ____, Millî Mücadele'nin sesini dünyaya duyurdu. Yunus Nadi Ankara'da ____ gazetesini çıkardı.

Doğru: 6 Nisan 1920 · Anadolu Ajansı · Yeni Gün
Çeldiriciler: 23 Nisan 1920 · Sebilürreşad · Ateşten Gömlek

**Biliyor muydun?** Anadolu Ajansı bugün de Türkiye'nin resmî haber ajansı olarak çalışıyor.

**Duygu anı:** Bir istasyonda konuşan iki kişinin bir milletin sesini kurması.

---

### 5.10 Mehmet Âkif Ersoy — "Matbaadan Marşa"

**Konum / tarih:** Kastamonu (1920) → Ankara (1921)
**Alan:** Basın-yayın

**Altın Bilgiler**
1. Kastamonu Nasrullah Camii'nde verdiği vaazla halkı Millî Mücadele'yi desteklemeye çağırdı (1920). Bu vaaz "Sebilürreşad" dergisinde basılarak geniş kitlelere ulaştı `[DOĞRULA]`.
2. Burdur milletvekili olarak TBMM'de görev yaptı.
3. İstiklal Marşı'nı yazdı. Marş 12 Mart 1921'de TBMM'de kabul edildi.

**Hikâye panelleri**
1. Kastamonu, Nasrullah Camii. Âkif kürsüde, cami tıklım tıklım.
2. Vaaz kâğıda geçer, matbaada dizilir.
3. Sebilürreşad nüshaları Anadolu'ya dağılır, cepheye kadar ulaşır `[DOĞRULA]`.
4. Ankara, TBMM. Âkif marşı yazar ama yarışma ödülünü kabul etmez `[DOĞRULA]`.
5. 12 Mart 1921: Marş kabul edilir. Meclis ayakta.

**Mini oyun: "Mürettip"**
- **Aşama 1 — Dizgi:** Eski matbaa kasasından harf kalıpları seçilerek bir manşet dizilir. Gerçek matbaada olduğu gibi harfler **ters** görünür ve sağdan sola dizilir. Bu ilginç ayrıntı akılda kalır.
- **Aşama 2 — Baskı:** Kol çekilir, sayfa basılır. Basılan sayfada Sebilürreşad başlığı ve vaazın konusu görünür.
- **Aşama 3 — Marş:** İstiklal Marşı'nın ilk iki kıtasının dizeleri karışık verilir ve doğru sıraya konur. Metin resmî kaynaktan alınmalıdır.

**Röportaj soruları**
- Kastamonu'da halka ne anlattınız?
- Bir dergi Millî Mücadele'ye nasıl yardım eder?
- İstiklal Marşı'nı yazarken neler hissettiniz?

**Haber şablonu**
> Mehmet Âkif, Kastamonu ____ Camii'ndeki vaazıyla halkı birliğe çağırdı. Vaaz ____ dergisinde yayımlandı. İstiklal Marşı ____'de kabul edildi.

Doğru: Nasrullah · Sebilürreşad · 12 Mart 1921
Çeldiriciler: Uzunoluk · Yeni Gün · 29 Ekim 1923

**Biliyor muydun?** Âkif, İstiklal Marşı'nı Safahat'ına koymadı. Onu milletin eseri saydığını söylediği anlatılır `[DOĞRULA]`.

**Duygu anı:** Meclisin ayağa kalkıp marşı dinlediği an.

---

## 6. Ara Bültenler ve Final

### Ajans Bülteni (Bölüm I sonrası ve Bölüm III sonrası)

- Nuri telgraftan acil bir bülten ister: "Ajans bülteni çıkıyor, haberleri kontrol et!"
- 8 hızlı soru gelir: doğru/yanlış, eşleştirme (kahraman ↔ şehir), boşluk doldurma karışık olarak sorulur.
- Her doğru cevapta haritada ilgili ışık parlar. Her yanlış cevapta ilgili Kahraman Kartı 5 saniye açılır.
- Bültenin süresi yaklaşık 3 dk'dır. Puan kaydedilir ama ilerlemeyi engellemez.

### Final: Zafer Nüshası

1. On sayfa tamamlanınca telgraftan son mesaj gelir: *"Bütün haberler ulaştı. Matbaayı çalıştır!"*
2. On manşet tek bir gazete sayfasında birleşir. Sayfada **"Muhabir: [oyuncunun adı]"** imzası yer alır.
3. Gazete yazdırılabilir (tarayıcının yazdırma özelliğiyle). Öğrencinin elinde somut, kendi adını taşıyan bir ürün kalır.
4. **Büyük Bülten:** 15 soruluk karışık son tekrar.
5. Kapanış: Harita bütünüyle aydınlanır, Nuri veda eder: *"Onları sen unutmadıkça kaybolmazlar."*

> **Not:** Büyük Bülten, araştırmadaki başarı testi değildir. Başarı testi ayrı olarak kâğıt üzerinde ya da ayrı bir formda uygulanır. Sorular birebir aynı olmamalıdır (bkz. `PROJE_BILGILERI.md`).

---

## 7. Motivasyon Sistemi

| Unsur | Açıklama |
|---|---|
| **Yıldızlar** | Kahraman başına en fazla 3, toplam 30 |
| **Muhabir rütbeleri** | Çırak Muhabir (0) → Muhabir (8⭐) → Kıdemli Muhabir (16⭐) → Başmuhabir (24⭐) → Ajans Şefi (30⭐) |
| **Kahraman Kartları** | Kart albümü. Ön yüzde portre, ad, alan rozeti (Cephe / Lojistik / Basın) ve konum yer alır. Arka yüzde 3 Altın Bilgi ve kaynak bulunur |
| **Işıklanan harita** | Her kahraman Anadolu haritasında bir ışık yakar. Son durumda bütün bir "haber ağı" görünür |
| **Zafer Nüshası** | Öğrencinin adını taşıyan, yazdırılabilir gazete |
| **Sınıf hedefi** | Öğretmen ekranında sınıfın toplam açtığı sayfa sayısı görünür. Birey yerine takım motivasyonu sağlar. **Bireysel sıralama tablosu yoktur** |

Sıralama tablosu kullanılmamasının iki nedeni var: Zayıf öğrencinin motivasyonunu düşürebilir ve deneysel çalışmada istenmeyen bir rekabet etkisi yaratabilir.

---

## 8. Görsel ve İşitsel Dil

- **Renk paleti:** Eski kâğıt (krem/sepya), mürekkep siyahı, bayrak kırmızısı vurgu. Kurgusal Nuri'nin konuşma balonları mavi ile ayrılır.
- **Tipografi:** 1920'ler gazete manşeti havası. Fontlar dosyaya gömülür, internet gerekmez.
- **Hikâye panelleri:** Sade çizgi roman tarzı, kalın çizgiler.
- **Portreler:** Fotoğrafı bulunan kahramanlarda gerçek fotoğrafın stilize edilmiş hâli kullanılır. Fotoğrafı olmayanlarda (ör. Şerife Bacı) çizim kullanılır ve **"temsilî çizim"** etiketi eklenir.
- **Sesler:** Telgraf tıkırtısı (ana motif), matbaa sesi, rüzgâr, kalabalık uğultusu, kağnı gıcırtısı. Müzik sade ve düşük seste olmalı.
- **Sesli okuma:** Tarayıcının Türkçe metin okuma özelliği (Web Speech API, `tr-TR`) kullanılır. Her panelde 🔊 düğmesi bulunur.
- **Erişilebilirlik:** Büyük dokunma alanları (en az 48 px), yüksek kontrast, yalnızca renge dayalı bilgi verilmez.

---

## 9. Öğretmen Paneli

Gizli bir giriş ile açılır (ör. logoya 5 kez dokunma + PIN).

- **Öğrenci girişi:** İsim yerine **anonim öğrenci kodu** kullanılır (ör. D-07). Bu kod araştırma verisiyle eşleşir.
- **İlerleme görünümü:** Hangi öğrencinin hangi kahramanı bitirdiği görülür.
- **Tüm bölümleri aç:** Sunum ve tanıtım için kullanılır.
- **Akıllı tahta sunum modu:** Öğretmen hikâye panellerini sınıfa birlikte okutabilir.
- **Veri dışa aktarma (CSV):** Araştırmanın oyun içi verileri. Alanlar:
  `ogrenci_kodu, kahraman_id, mini_oyun_sure_sn, mini_oyun_tamam, haber_deneme_sayisi, bonus_dogru, yildiz, bulten_no, bulten_dogru, toplam_sure_dk, tarih`
- **Sıfırlama:** Öğrenci ya da cihaz bazında yapılır.

---

## 10. Oturum Planı (sınıf uygulaması)

| Ders (40 dk) | İçerik |
|---|---|
| 1 | Prolog + Sütçü İmam + Şahin Bey |
| 2 | Tayyar Rahmiye + Ajans Bülteni 1 + Kara Fatma |
| 3 | Gördesli Makbule + Halime Çavuş |
| 4 | Şerife Bacı (+ öncesinde hazırlık, sonrasında sohbet) |
| 5 | Ajans Bülteni 2 + Halide Edib + Yunus Nadi |
| 6 | Mehmet Âkif + Zafer Nüshası + Büyük Bülten |

Hızlı bitiren öğrenciler yıldızlarını tamamlamak için önceki bölümleri tekrar oynayabilir.

---

## 11. Teknik Notlar (Claude Code için başlangıç)

- **Yapı:** İnternet gerektirmeyen tek sayfalık web uygulaması. `index.html` çift tıklanarak açılabilmeli ya da basit bir yerel sunucuyla çalışmalı.
- **İçerik ile kod ayrı:** Tüm tarihî içerik (`data/heroes.json`) koddan ayrı tutulur. Öğrenciler içeriği kod bilmeden düzenleyebilmeli.
- **Kayıt:** Tarayıcının yerel depolaması (`localStorage`), öğrenci kodu anahtarıyla.
- **Mini oyunlar:** Her biri ayrı bir modül (`games/kivilcim.js` vb.) olur ve ortak bir arayüze uyar:
  `start(container, heroData) → Promise<{completed, durationSec, details}>`
- **Önerilen klasör yapısı:**

```
istiklal-postasi/
├── index.html
├── css/
├── js/
│   ├── main.js          (sahne yöneticisi, ilerleme)
│   ├── story.js         (panel gösterimi, sesli okuma)
│   ├── interview.js
│   ├── headline.js      (Haberi Yaz)
│   ├── bulletin.js      (Ajans Bülteni)
│   ├── storage.js       (kayıt + CSV dışa aktarma)
│   └── teacher.js
├── games/               (10 mini oyun)
├── data/
│   ├── heroes.json      (doğrulanmış içerik + kaynaklar)
│   └── bulletins.json
├── assets/              (görseller, sesler, fontlar)
└── docs/                (bu belgeler)
```

- **`heroes.json` örnek kayıt:**

```json
{
  "id": "sutcu-imam",
  "ad": "Sütçü İmam",
  "alan": "cephe",
  "konum": { "ad": "Maraş", "harita_x": 0.62, "harita_y": 0.71 },
  "tarih_etiketi": "31 Ekim 1919",
  "altin_bilgiler": [
    { "metin": "…", "kaynaklar": ["K1", "K2"], "dogrulandi": true }
  ],
  "paneller": [ { "metin": "…", "gorsel": "assets/sutcu/p1.png", "anlati_mi": false } ],
  "roportaj": [ { "soru": "…", "cevap": "…", "kaynaklar": ["K1"], "dogrulayan": "öğrenci kodu", "dogrulama_tarihi": "2026-10-20" } ],
  "haber": {
    "sablon": "{0} halkı boyun eğmedi! {1} önünde başlayan direnişin sonunda şehir {2} tarihinde kurtuldu.",
    "dogrular": ["Maraş", "Uzunoluk Hamamı", "12 Şubat 1920"],
    "celdiriciler": ["Antep", "İnebolu İskelesi", "9 Eylül 1922"]
  },
  "biliyor_muydun": { "metin": "…", "bonus_soru": { "soru": "…", "secenekler": ["…"], "dogru": 0 } },
  "portre": { "dosya": "assets/portre/sutcu-imam.png", "temsili": true }
}
```

- **Geliştirme sırası önerisi:** (1) Sahne yöneticisi + 1 kahramanın tam döngüsü (mini oyun yerine "geç" düğmesiyle) → (2) Haberi Yaz + kayıt → (3) İlk mini oyun → (4) Pilot oturumla test → (5) Diğer kahramanlar → (6) Bültenler, final, öğretmen paneli.
- **Pilot testi önce yapılmalı:** İlk tam döngü bittiğinde, deney grubu dışından 3–4 öğrenciyle denenmeli. Ardından metin uzunluğu ve zorluk ayarlanmalı.
