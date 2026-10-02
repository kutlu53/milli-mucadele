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
