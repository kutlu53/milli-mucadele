# İstiklal Postası — Claude Code bağlamı

TÜBİTAK 2204-B (Tarih) projesi için geliştirilen eğitsel oyun. 8. sınıf öğrencilerine Millî Mücadele'deki 10 kahramanı öğretir. Çevrimdışı, tarayıcıda çalışır.

Ayrıntılar:
@docs/OYUN_SENARYOSU.md
@docs/PROJE_BILGILERI.md

## Kurallar

- **Tarihî içerik yalnızca `data/heroes.json` dosyasından gelir.** Kodun içine tarih, isim ya da olay yazma. Eksik içerik için yer tutucu kullan: `"[İÇERİK BEKLENİYOR]"`.
- **Tarihî bilgi uydurma.** `[DOĞRULA]` etiketli bilgileri doğrulanmış gibi kullanma. Bu dosyalarda olmayan bir bilgiye ihtiyaç duyarsan sor.
- **İnternet bağımlılığı yok.** CDN, uzak font, uzak görsel kullanma. Tüm kütüphaneler ve fontlar `assets/` ya da `lib/` içinde yerel olarak dursun.
- **Arayüz dili Türkçe.** Türkçe karakterler (ç, ğ, ı, İ, ö, ş, ü) her yerde doğru görünmeli. Büyük/küçük harf dönüşümünde `toLocaleUpperCase('tr-TR')` kullan.
- **Kontrol:** Yalnızca tıklama/dokunma ve sürükle-bırak. Dokunma alanları en az 48 px. Akıllı tahtada ve tablette test edilebilir olmalı.
- **Şiddet sembolik:** Nişan alma, kan veya ölüm görüntüsü yok.
- **Kişisel veri yok:** Öğrenci adı tutulmaz, yalnızca anonim kod.
- **Marka adı yok:** Oyun ekranlarında ve üretilen belgelerde ticari ürün adı geçmesin.

## Çalışma biçimi

- Bu proje ortaokul öğrencileriyle birlikte geliştiriliyor. Yaptığın değişiklikleri **kısa ve sade Türkçeyle** açıkla. Bir 8. sınıf öğrencisi, jüriye "bu kısım ne işe yarıyor" diye anlatabilmeli.
- Her anlamlı adımdan sonra `docs/GELISTIRME_GUNLUGU.md` dosyasına tarihli kısa bir kayıt ekle (ne istendi, ne yapıldı, ne test edildi).
- Küçük adımlarla ilerle. Önce tek kahramanın tam döngüsünü çalışır hâle getir (bkz. OYUN_SENARYOSU.md §11).
