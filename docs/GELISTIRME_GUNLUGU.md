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

---

## 2 Ekim 2026 — Ajans Bülteni 2

**Ne istendi?**
- Şerife Bacı'nın bölümünün GitHub'a gönderilmesi ve ilk yedi kahramanı karışık soran Ajans Bülteni 2'nin yapılması.

**Ne yapıldı?**
- Şerife Bacı'nın bölümü kaydedildi ve GitHub'a gönderildi.
- `data/bulletins.json` dosyasına Ajans Bülteni 2 eklendi: 8 soru (4 doğru/yanlış, 3 boşluk doldurma, 1 eşleştirme). Yedi kahramanın hepsi en az bir soruda geçiyor. Eşleştirme sorusu "kahraman ↔ şehir" biçiminde.
- Yeni kod yazılmadı: bülten ekranı ilk bültende hazırlanmıştı, yalnızca sorular eklendi. Bülten 2, Şerife Bacı'nın sayfası canlanınca haritada açılır; yapılmadan sekizinci kahraman açılmaz.
- **Haritada etiket düzeni:** Haritanın en üstündeki konumun (İnebolu) etiketi "Anadolu Haritası" başlığının üstüne biniyordu. Artık iğnenin soluna, biraz aşağıya asılıyor.

**Ne test edildi?**
- Bülten 2 otomatik oynatıldı: 3 boyutlu (1366×768) ve 3 boyutsuz (1024×768). Test programı iki soruda bilerek hata yaptı; kart açıldı, puan 6/8 kaydedildi, hata çıkmadı.
- İlk denemede test takıldı; sebep oyun değil test programıydı ("Gördes" düğmesini ararken "Gördesli Makbule" düğmesine basıyordu). Test programı düzeltildi.

**Açık konular**
- Bülten 2 soruları da senaryoda yoktu; Altın Bilgilerden ve senaryodaki çeldiricilerden türetildi. Ekip onaylamalı. Başarı testindeki sorularla birebir aynı olmamalı.
- Sıradaki iş: Halide Edib Adıvar'ın bölümü (8. kahraman; mini oyunu "Kalabalığa Seslen").

---

## 2 Ekim 2026 — Halide Edib Adıvar'ın bölümü

**Ne istendi?**
- Ajans Bülteni 2'nin GitHub'a gönderilmesi ve sekizinci kahramana, Halide Edib Adıvar'a geçilmesi.

**Ne yapıldı?**
- Ajans Bülteni 2 kaydedildi ve GitHub'a gönderildi.
- `data/heroes.json` dosyasına Halide Edib Adıvar'ın içeriği eklendi (senaryo belgesindeki taslaktan). Hepsi `"dogrulandi": false`; röportaj cevapları `[İÇERİK BEKLENİYOR]`.
- **5 yeni hikâye çizimi:** siyah pankartlı meydan ve kalabalık, kürsüde seslenen Halide Edib (sesi halka halka yayılır), gece şehirden ayrılış, telgraf tellerinin altında doğan ajans fikri, cephede üniformalı Halide.
  - "Gizlice Anadolu'ya geçiş" sahnesi bilerek genel çizildi (gece, şehir silueti, yola çıkan bir gölge), çünkü geçişin nasıl yapıldığı henüz doğrulanmadı.
  - Cami silueti genel bir siluettir; belirli bir yapının ölçülü çizimi değildir.
- **Yeni portre:** koyu örtülü temsilî çizim. Senaryoya göre fotoğrafı bulunan kahramanlarda gerçek fotoğrafın stilize hâli kullanılacak; fotoğraf eklenene kadar bu çizim duruyor.
- **Yeni mini oyun "Kalabalığa Seslen"** (`games/seslen.js`): 10 söz kartından 5'i seçilip sıraya dizilir, sonra "Konuşmayı yap" düğmesine basılır. Halide Edib sözleri tek tek söyler.
  - Konuya uygun söz kalabalığı büyütür (meydandaki insan sayısı gerçekten artar).
  - Konu dışı ya da çağına uymayan söz kalabalığı azaltır ve nedeni yazılır (örneğin "1919'da televizyon yoktu").
  - Konuşma bir selamla başlayıp bir çağrıyla biterse ek puan gelir. Meydan %100 dolunca oyun tamamlanır.
  - Dolmazsa ipuçları gösterilir; oyuncu konuşmayı düzeltip yeniden dener ya da yıldızsız devam eder.
- Söz kartları kodda değil, `heroes.json` içinde (`mini_oyun.kartlar`) duruyor.

**Ne test edildi?**
- Bölüm otomatik oynatıldı (3 boyutlu, 1366×768): test programı önce kötü bir konuşma kurdu (kalabalık %38, ipuçları çıktı), sonra düzeltti (meydan doldu). 3 yıldız kaydedildi, hata çıkmadı.
- "Yıldızsız devam et" yolu ayrıca denendi (3 boyutsuz, 1024×768): bölüm 2 yıldızla bitti.

**Ne bulundu ve düzeltildi?**
- Konuşma balonu kürsüdeki Halide Edib'in üstünü kapatıyordu; balon sahnenin altına alındı.

**Açık konular**
- **Söz kartları özgün yazıldı;** gerçek konuşmadan alıntı değildir. Ekip 10 kartı gözden geçirip onaylamalı. "Telefon" kartı senaryodaki örnekten alındı; açıklaması "o yıllarda haberler telgrafla ve gazeteyle yayılırdı" biçiminde yazıldı.
- Kazanım cümlesi ("Her söz kendi çağına ve konusuna göre söylenir.") senaryodaki "tarihsel bağlam ve dönem düşüncesi" ifadesinden sadeleştirildi. Ekip onaylamalı.
- Bonus soru ("Halide Edib'in Millî Mücadele yıllarını anlattığı romanın adı nedir?") senaryoda yoktu; "Biliyor muydun?" metninden türetildi.
- Halide Edib'in gerçek fotoğrafı bulunursa portre onunla değiştirilmeli.
- Sıradaki iş: Yunus Nadi'nin bölümü (9. kahraman; mini oyunu "Telgrafhane").

---

## 2 Ekim 2026 — Yunus Nadi'nin bölümü

**Ne istendi?**
- Halide Edib'in bölümünün GitHub'a gönderilmesi ve dokuzuncu kahramana, Yunus Nadi'ye geçilmesi.

**Ne yapıldı?**
- Halide Edib'in bölümü kaydedildi ve GitHub'a gönderildi.
- `data/heroes.json` dosyasına Yunus Nadi'nin içeriği eklendi (senaryo belgesindeki taslaktan). Hepsi `"dogrulandi": false`; röportaj cevapları `[İÇERİK BEKLENİYOR]`.
- **4 yeni hikâye çizimi:** istasyonda konuşan iki kişi ve bekleyen tren, dağılan söylenti kâğıtlarına karşı parlayan telgraf direği, kapının üstüne asılan ajans tabelası, duvar haritasında şehir şehir yayılan ilk haber.
- **Yeni portre:** fesli, bıyıklı temsilî çizim.
- **Yeni mini oyun "Telgrafhane"** (`games/telgrafhane.js`), iki aşamalı:
  - *1. aşama — Doğru mu, söylenti mi?* Masaya 6 haber kartı gelir. Her kartta "Kaynak:" satırı vardır. Kaynağı belli olan haber "Gönder", kaynağı belli olmayan söylenti "Çöp" düğmesiyle ayrılır. Yanlışta kart sallanır ve nedeni yazılır.
  - *2. aşama — Telgraf:* 3 haber kelime kelime gönderilir. Her kelimenin iki işareti vardır: kısa (•) için tuşa dokunulur, uzun (—) için basılı tutulur. Basılı tutarken bir halka dolar; dolunca işaret "uzun" olur. Gönderilen her kelimede telden bir kıvılcım geçer ve duvardaki haritada bir ışık yanar.
  - Üçüncü haber "Ajansın ilk haberi (temsilî)" diye etiketlidir.
- Haber kartları ve telgraf metinleri kodda değil, `heroes.json` içinde duruyor.
- İki yeni ses eklendi: kısa ve uzun telgraf sesi.

**Ne test edildi?**
- Bölüm otomatik oynatıldı: 3 boyutlu (1366×768) ve 3 boyutsuz (1024×768). Test programı bir kartı bilerek yanlış kutuya attı ve bir işareti bilerek yanlış bastı; ikisinde de uyarı çıktı, oyun devam etti. 3 yıldız kaydedildi, hata çıkmadı.

**Ne bulundu ve düzeltildi?**
- Telgraf aşamasında haber metni kutusu "kurgusal haber kartları" rozetinin altında kalıyordu; kutu biraz aşağı alındı.

**Açık konular**
- **Haber kartları kurgusaldır** (ekranda rozetle belirtiliyor). Kaynaklı üç kart önceki kahramanların Altın Bilgilerine dayanıyor; kaynak adları ("Maraş'tan gelen resmî telgraf" gibi) oyun için yazıldı. Ekip onaylamalı.
- **Son telgraf, ajansın gerçek ilk haberinin metni değildir;** temsilîdir. Ekip gerçek ilk haberi kaynaklardan bulursa metin değiştirilebilir.
- Telgraf işaretleri gerçek Mors kodu değildir (senaryo "basitleştirilmiş" diyor): sesli harf kısa, sessiz harf uzun sayılıyor ve her kelimenin yalnızca ilk iki harfi gönderiliyor.
- Kazanım cümlesi ("Bir haberi yaymadan önce kaynağına bakılır.") senaryodaki dezenformasyon notundan türetildi. Bonus soru da "Biliyor muydun?" metninden türetildi.
- Bu mini oyunda kaybetme yok; bitiren herkes yıldızı alıyor.
- Sıradaki iş: Mehmet Âkif Ersoy'un bölümü (10. ve son kahraman; mini oyunu "Mürettip"). İstiklal Marşı'nın ilk iki kıtası resmî kaynaktan alınmalı.

---

## 2 Ekim 2026 — Mehmet Âkif Ersoy'un bölümü (onuncu kahraman)

**Ne istendi?**
- Yunus Nadi'nin bölümünün GitHub'a gönderilmesi ve son kahramana, Mehmet Âkif Ersoy'a geçilmesi.

**Ne yapıldı?**
- Yunus Nadi'nin bölümü kaydedildi ve GitHub'a gönderildi.
- `data/heroes.json` dosyasına Mehmet Âkif Ersoy'un içeriği eklendi (senaryo belgesindeki taslaktan). Hepsi `"dogrulandi": false`; röportaj cevapları `[İÇERİK BEKLENİYOR]`. **Artık on kahramanın hepsi oyunda.**
- **5 yeni hikâye çizimi:** camide kürsüdeki Âkif ve kalabalık, kâğıttan kalıba uçan harfler, Anadolu'ya dağılan dergi sayfaları, gece lamba ışığında yazılan marş (ödül kesesi masanın kenarında dokunulmadan durur), ayakta alkışlayan Meclis.
- **Yeni portre:** kalpaklı, sakallı temsilî çizim.
- **Yeni mini oyun "Mürettip"** (`games/murettip.js`), üç aşamalı:
  - *1. aşama — Dizgi:* Manşet ("BİRLİK") harf kalıplarıyla dizilir. Gerçek matbaadaki gibi kalıplardaki harfler ters görünür ve satır sağdan sola dolar. Üç çeldirici harf vardır.
  - *2. aşama — Baskı:* Baskı makinesinin kolu çekilir, sayfa basılır. Basılı sayfada dergi adı, manşet ve vaazın konusu düz okunur.
  - *3. aşama — Marş:* İstiklal Marşı'nın ilk iki kıtasının dizeleri sıraya konur. **Dizeler henüz dosyada yok** (`[İÇERİK BEKLENİYOR]`); bu yüzden aşama şimdilik atlanıyor. Ekip dizeleri resmî kaynaktan dosyaya yazınca aşama kendiliğinden açılır.
- **Harita düzeni:** Kuzeyde beş konum birbirine çok yakın olduğu için etiketler üst üste biniyordu. "Anadolu Haritası" başlığı haritanın altına alındı; Ankara'nın etiketi iğnenin altına asılıyor. On etiketin hepsi artık okunuyor.
- On sayfa tamamlanınca haritada "On sayfanın hepsi canlandı! Zafer Nüshası hazırlanıyor." yazıyor.

**Ne test edildi?**
- Bölüm otomatik oynatıldı: 3 boyutlu (1366×768) ve 3 boyutsuz (1024×768). Test programı dizgide bir harfi bilerek yanlış seçti; uyarı çıktı. 3 yıldız kaydedildi (toplam 30 yıldız, rütbe "Ajans Şefi"), hata çıkmadı.
- Marş aşaması, dosyaya dokunmadan geçici "Deneme dize 1–8" satırlarıyla denendi: yanlış sıra reddedildi, iki kıta da tamamlandı.
- Ajans Bülteni 1 yeniden oynatıldı (harita düzeni değiştiği için); bozulmadı.

**Ne bulundu ve düzeltildi?**
- Haritada on etiket birbirinin ve başlığın üstüne biniyordu (yukarıdaki düzenle giderildi).
- Meclis çiziminde kürsüdeki kişi bayrağın ay-yıldızını kapatıyordu; bayrak yana alındı.

**Açık konular**
- **İstiklal Marşı dizeleri:** İlk iki kıta resmî kaynaktan alınıp `heroes.json` içindeki `mars.kitalar` listesine yazılmalı, `kaynak` alanı doldurulmalı.
- Manşet sözcüğü ("BİRLİK") senaryodaki haber şablonundan seçildi; dergideki gerçek başlık değildir. Ekip onaylamalı ya da değiştirmeli.
- Kazanım cümlesi ve bonus soru türetildi; ekip onaylamalı.
- Âkif'in ödülü kabul etmediği bilgisi `[DOĞRULA]` etiketli; çizimde yalnızca dokunulmamış bir kese olarak gösterildi.
- **Kalan işler:** Final (Zafer Nüshası + 15 soruluk Büyük Bülten), öğretmen paneli ve CSV dışa aktarma; ardından pilot test ve içeriğin kaynaklarla doğrulanması.
