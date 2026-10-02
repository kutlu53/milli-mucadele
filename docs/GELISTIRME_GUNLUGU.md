# Geliştirme Günlüğü

Her kayıt üç soruya cevap verir: Ne istendi? Ne yapıldı? Ne test edildi?

---

## 2 Ekim 2026 — İlk kurulum ve Sütçü İmam'ın tam döngüsü

**Ne istendi?**
- Proje belgelerinin okunup anlaşılması.
- Oyunun olabildiğince grafik ağırlıklı olması: tarayıcıda mümkün olan 2 boyutlu ve 3 boyutlu çizimlerin kullanılması.

**Ne yapıldı?**
- Belgeler `docs/` klasörüne taşındı (CLAUDE.md onları orada arıyordu).
- Klasör yapısı kuruldu: `index.html`, `css/`, `js/`, `games/`, `data/`, `lib/`, `assets/fonts/`, `araclar/`.
- 3 boyut kütüphanesi ve fontlar projenin içine kopyalandı. Oyun internet olmadan çalışıyor.
- `data/heroes.json` yazıldı: Sütçü İmam'ın bütün içeriği ve diğer 9 kahramanın adı ile harita konumu. Senaryodaki bilgiler henüz kaynakla doğrulanmadığı için hepsi `"dogrulandi": false`. Röportaj cevapları `[İÇERİK BEKLENİYOR]`.
- Doğrulanmamış içerik gösterilen her ekrana kırmızı **"TASLAK İÇERİK · doğrulanmadı"** damgası eklendi.
- **3 boyutlu sahneler:** (1) telgraf masası: pirinç telgraf tuşu, Muhabir Defteri, sandık, titreyen gaz lambası, uçuşan toz; (2) Anadolu haritası: kabartma harita, kahraman iğneleri, kameranın konuma uçması, bölüm bitince yanan ışık.
- **2 boyutlu hareketli çizimler:** 5 hikâye paneli (çarşı, işgal, kıvılcım, yanan pencereler, kalede bayrak), portre (temsilî çizim), Nuri, kıvılcım/konfeti efektleri. Hiç resim dosyası yok; hepsi kodla çiziliyor.
- **Tam döngü:** Açılış → Prolog → Harita → Yolculuk → Hikâye → Mini oyun ("Kıvılcımı Yay") → Röportaj → Haberi Yaz (sürükle-bırak) → Bonus soru → Sayfa Canlanır (dönen Kahraman Kartı) → Haritada ışık.
- Sesler dosyasız: telgraf tıkırtısı ve diğer sesler o anda üretiliyor. Her metinde 🔊 sesli okuma düğmesi var.
- Kayıt: öğrenci adı tutulmuyor, yalnızca anonim kod (ör. D-01). İlerleme tarayıcıda saklanıyor.
- 3 boyut desteklemeyen bilgisayarlar için düz (2 boyutlu) yedek harita eklendi. Yavaş bilgisayarda 3 boyut kalitesi kendiliğinden düşüyor.
- `araclar/veri-paketle.bat`: `heroes.json` değişince çalıştırılır; oyunun çift tıklamayla açılabilmesi için verinin kopyasını (`heroes.veri.js`) günceller.

**Ne test edildi?**
- Oyun, otomatik bir test programıyla baştan sona oynatıldı (çift tıklamayla açılır gibi, sunucusuz): 1366×768 ekranda 3 boyutlu, 1024×768 ekranda 3 boyutsuz. İkisinde de hata çıkmadı, kayıt doğru yazıldı.
- Bulunup düzeltilen hatalar: ilk hikâye paneli bulanık çıkıyordu (tuval yanlış anda ölçülüyordu); yavaş bilgisayarda kamera uçuşu çok uzun sürüyordu (artık gerçek süreye göre); açılışta başlık telgrafın üstüne biniyordu.
- **Henüz test edilmedi:** gerçek akıllı tahta ve tablet (dokunmatik sürükleme), sesli okumanın Türkçe sesi, okul bilgisayarları.

**GitHub bağlantısı (aynı gün)**
- Ne istendi: Projenin GitHub'a bağlanması.
- Ne yapıldı: Klasör bir git deposu yapıldı, ilk kayıt (commit) alındı ve herkese açık depoya gönderildi: https://github.com/kutlu53/milli-mucadele
- `.gitignore` eklendi: araştırma verileri (`*.csv`), onam belgeleri ve kişisel bilgi içerebilecek klasörler GitHub'a gönderilmez.
- Ne test edildi: Gönderimden sonra yerel depo ile GitHub'daki deponun aynı olduğu kontrol edildi.

**İnternette yayın (aynı gün)**
- Ne istendi: Oyunun GitHub üzerinden yayımlanması.
- Ne yapıldı: GitHub Pages açıldı (`main` dalı, ana klasör). Adres: https://kutlu53.github.io/milli-mucadele/ — GitHub'a gönderilen her değişiklik 1–2 dakika içinde bu adrese yansır.
- Ne test edildi: Yayındaki sayfa açıldı; başlık, 10 kahramanın verisi ve 3 boyutlu sahne yüklendi.
- Not: Bu adres tanıtım ve uzaktan deneme içindir. Sınıf uygulamasında oyun yine internetsiz, bilgisayardaki klasörden açılır.

**Telefon ve dik ekran denemesi (aynı gün)**
- Ne istendi: Oyunun telefonda oynanıp oynanamayacağının öğrenilmesi.
- Ne test edildi: Oyun telefon boyutunda dik (390×844) ve yatay (844×390), ayrıca dik tablet boyutunda (768×1024) otomatik oynatıldı.
- Ne bulundu ve düzeltildi: Dik ekranda 3 boyutlu sahneler kararıyordu (harita hiç görünmüyordu). Sebep: kamera uzaklaşınca "sis" her şeyi örtüyordu. Sis artık kamera uzaklığına göre ayarlanıyor. Dik telefon ve dik tablette oyun sonuna kadar oynanıyor.
- Düzeltilmedi: Yatay tutulan telefonda ekran çok alçak kalıyor; Haberi Yaz ekranında boşlukların bir kısmı görünmüyor. Telefon hedef cihaz olmadığı için karar bekliyor.

**Açık konular**
- Senaryoda oyuncu adını seçiyor ve Zafer Nüshası'nda adı yazıyor; kurallarda ise "öğrenci adı tutulmaz" deniyor. Şimdilik kural uygulandı (yalnızca kod). Karar verilmeli.
- Sütçü İmam'ın bilgileri iki kaynakla doğrulanıp `heroes.json` dosyasına kaynak kodlarıyla işlenmeli; röportaj cevapları yazılmalı.
- Mini oyunun zorluğu pilot testte ayarlanmalı (test programı 9–12 saniyede bitirdi; öğrenciler için süre ve devriye sayısı denenmeli).

---

## 2 Ekim 2026 — Şahin Bey'in bölümü

**Ne istendi?**
- İkinci kahramana, Şahin Bey'e geçilmesi.

**Ne yapıldı?**
- `data/heroes.json` dosyasına Şahin Bey'in içeriği eklendi (senaryo belgesindeki taslaktan). Hepsi `"dogrulandi": false`; röportaj cevapları `[İÇERİK BEKLENİYOR]`.
- **5 yeni hikâye çizimi:** köy meydanında toplanan gönüllüler, ufuktan gelen kolon ve gözcü, barikat (güneş ve ay dönerek günlerin geçtiğini gösterir), yol kenarında yalnız bir kalpak, kalesi ve bayrağıyla direnen şehir. Silah ya da çatışma çizilmedi.
- **Yeni portre:** kalpaklı, bıyıklı temsilî çizim.
- **Yeni mini oyun "Yolu Tut"** (`games/yolutut.js`): Yoldaki 5 geçide kart yerleştirilir, sonra kolon yola çıkar. Engelci kolonu durdurur, Haberci hazırlığı artırır, Gözcü bir sonraki geçitteki kartı 2 kat güçlendirir. 3 dalganın sonunda "şehir hazırlık" çubuğu %100 olmalı. Kolon yalnızca "durdu" işaretiyle yavaşlar.
- **Sıralı açılma:** Bir kahramanın sayfası canlanmadan sıradaki kahraman haritada açılmıyor.
- Haritada birbirine yakın iki konumun etiketleri üst üste binmesin diye alttaki etiket iğnenin altına asılıyor.

**Ne test edildi?**
- Şahin Bey'in bölümü otomatik oynatıldı: 3 boyutlu (1366×768) ve 3 boyutsuz (1024×768). Hata çıkmadı, 3 yıldız kaydedildi.
- Mini oyun iki biçimde oynatıldı: iyi yerleşimle hazırlık %100 oldu; kötü yerleşimle (Gözcü en sonda, kartların bir kısmı kullanılmadan) %70'te kaldı ve "tekrar dene / yıldızsız devam et" ekranı çıktı.
- Sütçü İmam'ın bölümü yeniden oynatıldı; bozulmadı.

**Açık konular**
- Bonus soru ("Gaziantep adındaki 'Gazi' sözü nereden gelir?") senaryo belgesinde yoktu; "Biliyor muydun?" metninden türetildi. Ekip onaylamalı ya da değiştirmeli.
- Mini oyunun "kazanım" cümlesi de senaryoda yoktu; 3. hikâye panelinden türetildi.
- "Yolu Tut" oyununun süreleri ve puanları dosyanın başındaki ayarlardan değiştirilebilir; pilot testte denenmeli.
- Sıradaki kahraman Tayyar Rahmiye de Antep'te; haritadaki iğnesi Şahin Bey'inkine çok yakın, etiket yerleşimi o bölümde yeniden ele alınmalı.

---

## 2 Ekim 2026 — Tayyar Rahmiye'nin bölümü

**Ne istendi?**
- Şahin Bey'in bölümünün kaydedilip GitHub'a gönderilmesi, ardından üçüncü kahramana, Tayyar Rahmiye'ye geçilmesi.

**Ne yapıldı?**
- Şahin Bey'in bölümü kaydedildi ve GitHub'a gönderildi.
- `data/heroes.json` dosyasına Tayyar Rahmiye'nin içeriği eklendi (senaryo belgesindeki taslaktan). Hepsi `"dogrulandi": false`; röportaj cevapları `[İÇERİK BEKLENİYOR]`.
- **4 yeni hikâye çizimi:** sırtlarında torbalarla sipere yürüyen kadınlar ve çocuklar, siperler arasında koşan Rahmiye (arka plan hızla geriye akar), zor durumdaki sipere ulaşması (uyarı işareti umut ışığına döner), siperde rüzgârda dalgalanan bir yemeni. Silah ya da çatışma çizilmedi.
- **Yeni portre:** yemenili temsilî çizim.
- **Yeni mini oyun "Sipere Ulaştır"** (`games/sipere.js`): Rahmiye gece vakti damların üstünden koşar. Kısa dokunuş zıplatır (dam boşlukları ve sandıklar), basılı tutmak eğilip saklanmayı sağlar (devriye fenerinin ışığı). 3 siper, her biri bir öncekinden uzun ve hızlı. Cezası yok: ışığa yakalanan ya da sokağa düşen oyuncu biraz geriden devam eder. Süre dolarsa "tekrar dene / yıldızsız devam et" ekranı çıkar.
- **Haritada etiket düzeni:** Maraş ve iki Antep konumu birbirine çok yakın. Artık üstteki etiket iğnenin üstünde, alttaki iki etiket iğnelerin solunda ve sağında duruyor; üst üste binmiyor.

**Ne test edildi?**
- Bölüm otomatik oynatıldı: 3 boyutlu (1366×768) ve 3 boyutsuz (1024×768). Hata çıkmadı, 3 yıldız kaydedildi.
- Mini oyun iki biçimde oynatıldı: dikkatli oynayan test programı üç sipere de ulaştı (turlar 49, 55 ve 66 saniye sürdü); fenerlere hiç aldırmayan program 53 kez yakalandı, süre doldu ve "yıldızsız devam et" ile bölüm 2 yıldızla bitti.
- Şahin Bey'in bölümü yeniden oynatıldı; bozulmadı.

**Ne bulundu ve düzeltildi?**
- İlk denemede Rahmiye zıpladıktan sonra dama basamayıp sokağa düşüyordu. Sebep: yavaş bilgisayarda iki kare arasında dam çizgisini "atlayıp" geçiyordu. Artık bir önceki karede damın üstündeyse dama basmış sayılıyor.

**Açık konular**
- Bonus soru ("Antep savunmasında kadınlar ve çocuklar hangi görevi üstlendi?") senaryo belgesinde yoktu; "Biliyor muydun?" metninden türetildi. Ekip onaylamalı.
- Mini oyunun "kazanım" cümlesi senaryodaki "Duygu anı" satırından alındı. Ekip onaylamalı.
- Tur süresi 120 saniye yapıldı (senaryoda tur başına yaklaşık 1 dakika yazıyor). Koşu hızı, boşluklar ve fener hızı `games/sipere.js` dosyasının başındaki ayarlardan değiştirilebilir; pilot testte denenmeli.
- Sıradaki iş: Ajans Bülteni 1 (ilk üç kahramanın karışık tekrarı).

---

## 2 Ekim 2026 — Ajans Bülteni 1

**Ne istendi?**
- İlk üç kahramanı karışık soran Ajans Bülteni 1'in yapılması.

**Ne yapıldı?**
- **Yeni veri dosyası `data/bulletins.json`:** Bülten soruları burada durur; kodun içinde soru yok. Üç soru türü var: doğru/yanlış, boşluk doldurma, eşleştirme. Bülten 1'de 8 soru bulunuyor (3 doğru/yanlış, 4 boşluk doldurma, 1 eşleştirme).
- **Yeni ekran (`js/bulletin.js`):** Nuri bülteni ister, sorular Anadolu haritasının üstünde tek tek gelir.
  - Doğru cevapta soru kartı kısa süre çekilir ve haritada o kahramanın ışığı parlar.
  - Yanlış cevapta doğru cevap gösterilir ve Kahraman Kartı'nın bilgi yüzü 5 saniye açılır.
- **Haritada bülten düğmesi:** Tayyar Rahmiye'nin sayfası canlanınca haritada "Ajans Bülteni 1" düğmesi yanıp söner. Bülten yapılmadan sıradaki kahraman açılmaz; ama puan kaç olursa olsun yapılınca açılır.
- **Kayıt:** Bültenin puanı öğrenci koduyla saklanır. Bülten alttaki şeritten yeniden açılabilir; araştırma için ilk denemenin puanı korunur, en iyi puan ayrıca tutulur.
- `araclar/veri-paketle.bat` artık iki veri dosyasını da (`heroes.json` ve `bulletins.json`) paketliyor.

**Ne test edildi?**
- Bülten otomatik oynatıldı: 3 boyutlu (1366×768) ve 3 boyutsuz (1024×768). Test programı iki soruda bilerek hata yaptı; kart açıldı, puan 6/8 kaydedildi, hata çıkmadı.
- Tayyar Rahmiye'nin bölümü yeniden oynatıldı; bozulmadı.

**Açık konular**
- Bülten soruları senaryo belgesinde yoktu; ilk üç kahramanın Altın Bilgilerinden ve senaryodaki çeldiricilerden türetildi. Hepsi "taslak" damgalı. Ekip onaylamalı ya da değiştirmeli.
- Başarı testindeki sorular bu bülten sorularıyla birebir aynı olmamalı (bkz. PROJE_BILGILERI.md §5.3).
- Yanlış cevaptan sonra soru yeniden sorulmuyor, sıradaki soruya geçiliyor. Senaryoda bu konuda bir kural yok; ekip karar vermeli.
- Sıradaki iş: Kara Fatma'nın bölümü (4. kahraman).

---

## 2 Ekim 2026 — Kara Fatma'nın bölümü

**Ne istendi?**
- Dördüncü kahramana, Kara Fatma'ya geçilmesi.

**Ne yapıldı?**
- `data/heroes.json` dosyasına Kara Fatma'nın içeriği eklendi (senaryo belgesindeki taslaktan). Hepsi `"dogrulandi": false`; röportaj cevapları `[İÇERİK BEKLENİYOR]`.
- **5 yeni hikâye çizimi:** karlı Erzurum'da okunan haber, masanın karşısında görev isteme (Mustafa Kemal Paşa saygıyla, yalnızca gölge olarak çizildi), köy köy uzayan gönüllü sırası, gün doğarken sırtta bayrağıyla yürüyen müfreze, göğüste parlayan madalya. Silah ya da çatışma çizilmedi.
- **Yeni portre:** başörtülü, göğsünde madalya olan temsilî çizim.
- **Yeni mini oyun "Müfrezeni Kur"** (`games/mufreze.js`), iki aşamalı:
  - *1. aşama — Gönüllü toplama:* Köyde 8 kişi var. Dokununca ne iş bildiklerini söylerler. Oyuncu 5 görevi (yol göstermek, atlara bakmak, yaralılara bakmak, haber taşımak, yemek hazırlamak) o işi bilen kişiye verir. Doğru kişi müfrezeye katılıp bayrağın yanına dizilir. Yanlış kişi "Bu görev bana göre değil" der; cezası yok.
  - *2. aşama — Rota:* Durakları sırayla seçme bulmacası. Senaryoda duraklar yazılı olmadığı için dosyada `[İÇERİK BEKLENİYOR]` duruyor; bu durumda bulmaca atlanıyor ve müfreze yalnızca Erzurum'dan Batı Cephesi'ne yürüyor. Ekip durakları dosyaya yazınca bulmaca kendiliğinden açılır.
- Köylüler kurgusal olduğu için oyun ekranında "kurgusal köylüler" rozeti duruyor.

**Ne test edildi?**
- Bölüm otomatik oynatıldı: 3 boyutlu (1366×768) ve 3 boyutsuz (1024×768). Hata çıkmadı, 3 yıldız kaydedildi. Test programı bir görevi bilerek yanlış kişiye verdi; uyarı çıktı, oyun devam etti.
- Rota bulmacası, dosyaya dokunmadan test sırasında geçici "Deneme A/B/C" durakları verilerek denendi: yanlış sırada seçim reddedildi, doğru sırada müfreze ilerledi.

**Ne bulundu ve düzeltildi?**
- Arka sıradaki köylülerin beceri etiketleri öndeki köylülerin başıyla üst üste biniyordu; ön sıranın yerleri kaydırıldı.

**Açık konular**
- **Rota durakları eksik.** Ekip, Erzurum'dan Batı Cephesi'ne giden durakları kaynaklardan doğrulayıp `heroes.json` içindeki `rota.duraklar` listesine sırasıyla yazmalı.
- Köylülerin sözleri ve üç çeldirici köylü (türkü söyleyen, saat onaran, balık tutan) senaryoda yoktu; oyun için yazıldı. Ekip onaylamalı.
- Bonus soru ("Anlatılanlara göre Kara Fatma esir düşünce ne yaptı?") senaryoda yoktu; "Biliyor muydun?" metninden türetildi. Ekip onaylamalı.
- Mini oyunda kaybetme yok; bitiren herkes mini oyun yıldızını alıyor. Pilot testte çok kolay bulunursa süre ya da hata sınırı eklenebilir.
- Sıradaki iş: Gördesli Makbule'nin bölümü (5. kahraman).

---

## 2 Ekim 2026 — Gördesli Makbule'nin bölümü

**Ne istendi?**
- Beşinci kahramana, Gördesli Makbule'ye geçilmesi.

**Ne yapıldı?**
- `data/heroes.json` dosyasına Gördesli Makbule'nin içeriği eklendi (senaryo belgesindeki taslaktan). Hepsi `"dogrulandi": false`; röportaj cevapları `[İÇERİK BEKLENİYOR]`.
- **4 yeni hikâye çizimi:** dağ köylerine haber getiren haberci ve yaklaşan kara bulutlar, efe kıyafetiyle dağ yoluna çıkan Makbule ve eşi, karakolun görüş alanına girmeden kıvrımlı patikada ilerleyen birlik, gün batımında dağ başında bir zeybek silueti. Silah ya da çatışma çizilmedi.
- **Yeni portre:** sarılı fesli, cepkenli temsilî çizim.
- **Yeni mini oyun "Dağ Yolu"** (`games/dagyolu.js`): Döndürmeli yol bulmacası. Patika parçasına dokununca çeyrek tur döner. Amaç Gördes köyünden Kuvâ-yi Milliye kampına kesintisiz yol kurmak.
  - Köye bağlanan parçalar parlar; böylece oyuncu yolun nereye kadar geldiğini görür.
  - Yol, karakolun görüş alanından (kırmızı kareler) geçemez. Geçerse oyun uyarır ve yolu kabul etmez.
  - 3 bulmaca var: 4×3, 5×4 ve 6×4 kare. Kırmızı bölge her seferinde büyür.
  - Takılan oyuncu "İpucu" düğmesiyle bir parçayı yerine oturtabilir; cezası yok, ipucu sayısı kaydedilir.
  - Bulmacalar programla kurulur ama herkeste aynı çıkar (araştırmada her öğrenci aynı bulmacayı görsün diye).

**Ne test edildi?**
- Bölüm otomatik oynatıldı: 3 boyutlu (1366×768) ve 3 boyutsuz (1024×768). Hata çıkmadı, 3 yıldız kaydedildi. Test programı bir kez "İpucu" düğmesini de kullandı.
- Kırmızı kareden geçen yolun reddedilmesi otomatik testte denenmedi; elle denenmeli.

**Ne bulundu ve düzeltildi?**
- Mini oyun ilk denemede hiç açılmadı (boş ekran). Sebep: başlangıç parçası köye bakmıyorsa yol arama programı "sonuç yok" yerine boş değer döndürüyor, oyun da bunu okuyamayıp duruyordu. Artık her durumda düzgün bir sonuç döndürüyor.
- Dar ekranda (1024 piksel) kamp ve bayrağı ekranın kenarından taşıyordu; kareler biraz küçültülüp iki yana daha çok yer bırakıldı.

**Açık konular**
- Bonus soru ("Kuvâ-yi Milliye birliklerini kim oluşturdu?") senaryoda yoktu; "Biliyor muydun?" metninden türetildi. Ekip onaylamalı.
- Mini oyunun "kazanım" cümlesi senaryoda yoktu; 3. hikâye panelinden alındı. Ekip onaylamalı.
- Mini oyunda kaybetme yok; bitiren herkes yıldızı alıyor. Pilot testte zorluk (kare sayısı, kırmızı bölge) denenmeli.
- Bir mini oyun açılırken hata verirse ekran boş kalıyor. İleride "bu oyun açılamadı, geç" ekranı eklenebilir.
- Sıradaki iş: Halime Çavuş'un bölümü (6. kahraman; mini oyunu önceki beş kahramanı soran "Kontrol Noktası").

---

## 2 Ekim 2026 — Halime Çavuş'un bölümü

**Ne istendi?**
- Gördesli Makbule'nin bölümünün GitHub'a gönderilmesi ve altıncı kahramana, Halime Çavuş'a geçilmesi.

**Ne yapıldı?**
- Gördesli Makbule'nin bölümü kaydedildi ve GitHub'a gönderildi.
- `data/heroes.json` dosyasına Halime Çavuş'un içeriği eklendi (senaryo belgesindeki taslaktan). Hepsi `"dogrulandi": false`; röportaj cevapları `[İÇERİK BEKLENİYOR]`.
- **4 yeni hikâye çizimi:** yazım sırasındaki erkekler ve kenarda kalan Kezban, saç kesme ve kılık değiştirme (sahne iki görünüş arasında gidip gelir), gece gündüz yol alan kağnı kolu, kalpağını çıkarınca şaşıran arkadaşları.
- **Yeni çizim: kağnı** (öküz, tahta tekerlek, örtülü sandıklar). Şerife Bacı'nın bölümünde de kullanılacak.
- **Yeni portre:** kalpaklı genç temsilî çizim.
- **Yeni mini oyun "Kontrol Noktası"** (`games/kontrol.js`): Oyunun yerleşik tekrar bölümü. Kağnı 5 kontrol noktasından geçer. Her noktada nöbetçi, önceki beş kahramandan biriyle ilgili bir parola sorusu sorar.
  - Doğru cevapta bariyer kalkar, kağnı yola devam eder.
  - Yanlış cevapta şüphe göstergesi bir artar, o kahramanın kartı 5 saniye açılır, sonra aynı soru yeniden sorulur (yanlış seçenek kapanır).
  - Şüphe göstergesi dolarsa (5 yanlış) "tekrar dene / yıldızsız devam et" ekranı çıkar.
- Parola soruları kodda değil, `heroes.json` içinde (`mini_oyun.sorular`) duruyor.

**Ne test edildi?**
- Bölüm otomatik oynatıldı (3 boyutlu, 1366×768): test programı bir soruyu bilerek yanlış cevapladı; kart açıldı, soru yeniden soruldu, bölüm 3 yıldızla bitti. Hata çıkmadı.
- Şüphe göstergesinin dolması ayrıca denendi (3 boyutsuz, 1024×768): 5 yanlıştan sonra "Nöbetçi şüphelendi" ekranı çıktı, "yıldızsız devam et" ile bölüm 2 yıldızla bitti.

**Ne bulundu ve düzeltildi?**
- Yanlış cevapta açılan kart oyun alanına sığmıyor, üstündeki yazı kesiliyordu. Kart artık bütün ekranın üstünde açılıyor.

**Açık konular**
- Parola soruları senaryoda yoktu; önceki beş kahramanın Altın Bilgilerinden türetildi. Ekip onaylamalı. Başarı testindeki sorularla birebir aynı olmamalı.
- Bonus soru ("Öküz arabasının bir başka adı nedir?") senaryoda yoktu; "Biliyor muydun?" metninden türetildi. Ekip onaylamalı.
- Sıradaki iş: Şerife Bacı'nın bölümü (7. kahraman; oyunun en uzun ve en duygusal bölümü).

---

## 2 Ekim 2026 — Şerife Bacı'nın bölümü

**Ne istendi?**
- Halime Çavuş'un bölümünün GitHub'a gönderilmesi ve yedinci kahramana, Şerife Bacı'ya geçilmesi.

**Ne yapıldı?**
- Halime Çavuş'un bölümü kaydedildi ve GitHub'a gönderildi.
- `data/heroes.json` dosyasına Şerife Bacı'nın içeriği eklendi (senaryo belgesindeki taslaktan). Hepsi `"dogrulandi": false`; röportaj cevapları `[İÇERİK BEKLENİYOR]`.
- **Belge / anlatı ayrımı:** Örtü olayını anlatan cümleler "Anlatılanlara göre…" diye başlıyor ve o hikâye panelinde "halk anlatısı" rozeti çıkıyor.
- **6 yeni hikâye çizimi:** İnebolu İskelesi'nde sandık taşıyanlar, kış yolunda kağnının yanında yürüyen Şerife, kar fırtınası, örtünün sandıkların üstüne örtülmesi, sabah karla kaplı kağnı ve örtü, bugünkü anıt ve ziyaretçiler. İnsan bedeni gösterilmedi. Anıt çizimi temsilîdir, gerçek anıtı göstermez.
- **Röportaj tanıkla yapılıyor:** Bu bölümde röportaj Şerife Bacı ile değil, kurgusal bir köylü kadınla yapılıyor. Ekranda köylü kadının portresi ve "kurgusal" notu görünüyor. (Röportaj ekranına "konuşan başka biri olabilir" özelliği eklendi.)
- **Yeni mini oyun "İstiklal Yolu"** (`games/istiklalyolu.js`): Kuşbakışı kağnı yolculuğu. Yolda 6 durak var: iskele, buzlu yokuş, yol ayrımı, donmuş dere, mola yeri, kar fırtınası. Her durakta oyuncu bir karar verir.
  - Üç gösterge: cephane kuruluğu, kağnı sağlamlığı, sıcaklık. Her karar göstergeleri değiştirir.
  - Yıldız yalnızca cephanenin kuru ulaşmasına bağlı (kuruluk 60 ve üstü).
  - Son değişmez: yolculuğun sonunda renkler solar, kar yoğunlaşır, Nuri olanı anlatır ve ekrana "Cephane cepheye ulaştı." yazısı gelir. Cephane ıslandıysa "yolu yeniden dene" seçeneği çıkar; kaybetme ekranı yoktur.
  - Durakların metinleri ve seçenekleri kodda değil, `heroes.json` içinde (`mini_oyun.olaylar`) duruyor; sayıları da oradan değiştirilebilir.

**Ne test edildi?**
- Bölüm otomatik oynatıldı (3 boyutlu, 1366×768): dikkatli kararlarla cephane kuru ulaştı, 3 yıldız kaydedildi. Hata çıkmadı.
- Dikkatsiz kararlarla (3 boyutsuz, 1024×768) cephane ıslandı; "yolu yeniden dene / devam" ekranı çıktı, bölüm 2 yıldızla bitti.

**Ne bulundu ve düzeltildi?**
- Oyun sahnesi geniş ekranın yalnızca ortasını dolduruyor, iki yan boş kalıyordu. Sahne artık bütün oyun alanını dolduruyor ve kağnı daha büyük görünüyor.
- Bitiş ekranında kapanış cümlesi iki kez görünüyordu; alttaki kaldırıldı.
- Ağaçlar yola çok yakın çıkıp yürüyen figürün üstüne biniyordu; yoldan uzaklaştırıldı.

**Açık konular**
- **Öğretmen hazırlığı:** Bu bölüm öğrencileri duygusal olarak etkileyebilir. Senaryodaki not gereği öğretmen oturumdan önce kısa bir hazırlık konuşması yapmalı, sonra sınıfla sohbet etmeli.
- Durakların metinleri, seçenekleri ve sayıları oyun için yazıldı (senaryoda yalnızca olay türleri vardı). Son sahnedeki anlatım Altın Bilgilerden derlendi. Ekip onaylamalı.
- "Örtüye kendin sarın" seçeneği senaryodaki "örtünün kime verileceği" kararından geliyor. Ekip bu seçeneğin kalıp kalmayacağına karar vermeli.
- Bonus soru ("İnebolu'dan Ankara'ya uzanan yola bugün ne ad veriliyor?") senaryoda yoktu; "Biliyor muydun?" metninden türetildi.
- Senaryo bu oyun için yaklaşık 4 dakika diyor; test programı 41 saniyede bitirdi (okumadan tıkladığı için). Öğrencilerle süre ölçülmeli.
- Sıradaki iş: Ajans Bülteni 2 (ilk yedi kahramanın karışık tekrarı).
