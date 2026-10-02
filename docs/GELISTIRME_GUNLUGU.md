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
