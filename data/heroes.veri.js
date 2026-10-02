window.IP_VERI = {
  "surum": "0.1-taslak",
  "aciklama": "Oyundaki tüm tarihî içerik bu dosyadan gelir. 'dogrulandi': false olan her bilgi TASLAKTIR; en az iki güvenilir kaynakla doğrulanmadan gerçek uygulamada kullanılmaz. Bu dosyayı değiştirdikten sonra 'araclar/veri-paketle.bat' dosyasını çalıştırın.",
  "rehber": { "ad": "Telgrafçı Nuri", "kurgusal": true },
  "prolog": [
    { "konusan": "anlatici", "metin": "Okulun eski deposunda tozlu bir tahta sandık buldun. İçinde pirinçten bir telgraf makinesi ve eski bir defter var." },
    { "konusan": "telgraf", "metin": "Burası Ankara, yıl 1920. Milletin sesini duyuracak bir muhabir arıyoruz. Unutulan kahramanların sayfaları siliniyor. Onları kaydet!" },
    { "konusan": "nuri", "metin": "Ben Telgrafçı Nuri. On kahramanın hikâyesini topla, röportaj yap, haberini yaz." },
    { "konusan": "nuri", "metin": "Defterin her sayfası canlanınca Anadolu haritasında bir ışık yanacak. On sayfa tamamlanınca Zafer Nüshası basılacak!" }
  ],
  "kahramanlar": [
    {
      "id": "sutcu-imam",
      "hazir": true,
      "ad": "Sütçü İmam",
      "baslik": "Uzunoluk'ta Kıvılcım",
      "alan": "cephe",
      "alan_etiketi": "Cephe — Güney",
      "konum": { "ad": "Maraş", "harita_x": 0.586, "harita_y": 0.703 },
      "tarih_etiketi": "31 Ekim 1919",
      "tarih_dogrulandi": false,
      "tarih_dogrula_notu": "Kaynaklarda farklı tarih geçebilir.",
      "altin_bilgiler": [
        {
          "metin": "Maraş'ta Fransız işgaline karşı direnişi başlatan halk kahramanıdır.",
          "kaynaklar": [],
          "dogrulandi": false
        },
        {
          "metin": "Uzunoluk Hamamı önünde Maraşlı kadınlara yapılan saldırıya karşı çıkması direnişin kıvılcımı oldu.",
          "kaynaklar": [],
          "dogrulandi": false
        },
        {
          "metin": "Halkın direnişi sonunda Maraş 12 Şubat 1920'de kurtuldu. Şehre bu yüzden \"Kahraman\" unvanı verildi.",
          "kaynaklar": [],
          "dogrulandi": false,
          "dogrula_notu": "Unvanın veriliş yılı doğrulanacak."
        }
      ],
      "paneller": [
        { "metin": "Maraş çarşısı. Ahmet İmam sütünü dağıtıyor.", "nuri": "Herkes ona Sütçü İmam der.", "gorsel": "carsi", "anlati_mi": false, "dogrulandi": false },
        { "metin": "İşgal askerleri sokaklarda. Halk tedirgin, dükkânlar kapanıyor.", "gorsel": "isgal", "anlati_mi": false, "dogrulandi": false },
        { "metin": "Uzunoluk Hamamı önünde kadınlara saldırılır. Sütçü İmam buna karşı çıkar.", "gorsel": "kivilcim", "anlati_mi": false, "dogrulandi": false },
        { "metin": "Haber mahalleden mahalleye yayılır. Pencerelerde ışıklar yanar.", "gorsel": "isiklar", "anlati_mi": false, "dogrulandi": false },
        { "metin": "12 Şubat 1920 sabahı Maraş kurtulmuştur. Kalede bayrak dalgalanır.", "gorsel": "kale_bayrak", "anlati_mi": false, "dogrulandi": false }
      ],
      "mini_oyun": {
        "modul": "kivilcim",
        "ad": "Kıvılcımı Yay",
        "aciklama": "Haberi mahalleden mahalleye taşı. Uğradığın her mahallede direniş ışığı yanar.",
        "sure_sn": 90,
        "mahalle_sayisi": 9,
        "kazanim": "Direniş tek bir kişinin değil, birleşen halkın eseridir."
      },
      "roportaj": {
        "secilecek": 3,
        "konusan_notu": "",
        "sorular": [
          { "soru": "Size neden \"Sütçü İmam\" deniyor?", "cevap": "[İÇERİK BEKLENİYOR]", "altin_bilgi": 0, "kaynaklar": [], "dogrulayan": "", "dogrulama_tarihi": "" },
          { "soru": "O gün Uzunoluk'ta ne oldu?", "cevap": "[İÇERİK BEKLENİYOR]", "altin_bilgi": 1, "kaynaklar": [], "dogrulayan": "", "dogrulama_tarihi": "" },
          { "soru": "Maraş halkı nasıl birleşti?", "cevap": "[İÇERİK BEKLENİYOR]", "altin_bilgi": 0, "kaynaklar": [], "dogrulayan": "", "dogrulama_tarihi": "" },
          { "soru": "Şehrin adına \"Kahraman\" neden eklendi?", "cevap": "[İÇERİK BEKLENİYOR]", "altin_bilgi": 2, "kaynaklar": [], "dogrulayan": "", "dogrulama_tarihi": "" }
        ]
      },
      "haber": {
        "sablon": "{0} halkı boyun eğmedi! {1} önünde başlayan direnişin sonunda şehir {2} tarihinde kurtuldu.",
        "dogrular": ["Maraş", "Uzunoluk Hamamı", "12 Şubat 1920"],
        "celdiriciler": ["Antep", "İnebolu İskelesi", "9 Eylül 1922"],
        "ipucu_bilgi": [0, 1, 2]
      },
      "biliyor_muydun": {
        "metin": "Kahramanmaraş \"Kahraman\", Gaziantep \"Gazi\", Şanlıurfa \"Şanlı\" unvanlarını Millî Mücadele'deki direnişleri nedeniyle aldı.",
        "dogrulandi": false,
        "bonus_soru": {
          "soru": "\"Gazi\" unvanı hangi şehre verildi?",
          "secenekler": ["Maraş", "Antep", "Urfa"],
          "dogru": 1
        }
      },
      "duygu_ani": "Sıradan bir sütçünün tek bir cesaret anı bir şehri ayağa kaldırır.",
      "portre": { "dosya": "", "cizim": "sarikli", "temsili": true }
    },
    {
      "id": "sahin-bey",
      "hazir": true,
      "ad": "Şahin Bey",
      "baslik": "Antep Yolunun Bekçisi",
      "alan": "cephe",
      "alan_etiketi": "Cephe — Güney",
      "konum": { "ad": "Antep", "harita_x": 0.609, "harita_y": 0.776 },
      "tarih_etiketi": "Mart 1920",
      "tarih_dogrulandi": false,
      "altin_bilgiler": [
        {
          "metin": "Antep'te halktan gönüllülerle oluşan bir Kuvâ-yi Milliye birliğinin başındaydı.",
          "kaynaklar": [],
          "dogrulandi": false
        },
        {
          "metin": "Kilis–Antep yolunda Fransız kuvvetlerini durdurmak için savaştı ve 28 Mart 1920'de şehit oldu.",
          "kaynaklar": [],
          "dogrulandi": false,
          "dogrula_notu": "Tarih doğrulanacak."
        },
        {
          "metin": "Antep'in uzun direnişi nedeniyle TBMM şehre \"Gazi\" unvanını verdi (1921).",
          "kaynaklar": [],
          "dogrulandi": false
        }
      ],
      "paneller": [
        { "metin": "Şahin Bey köylerden gelen gönüllüleri toplar. Gerçek adı Mehmet Said'dir.", "gorsel": "gonulluler", "anlati_mi": false, "dogrulandi": false, "dogrula_notu": "Gerçek adı doğrulanacak." },
        { "metin": "Kilis yönünden uzun bir işgal kolonu yaklaşır.", "gorsel": "kolon", "anlati_mi": false, "dogrulandi": false },
        { "metin": "Az sayıda gönüllüyle yolu günlerce tutarlar. Şehir hazırlanmak için zaman kazanır.", "gorsel": "yol_tut", "anlati_mi": false, "dogrulandi": false },
        { "metin": "Şahin Bey şehit düşer.", "gorsel": "kalpak", "anlati_mi": false, "dogrulandi": false },
        { "metin": "Antep aylarca direnir. TBMM şehre \"Gazi\" unvanını verir.", "gorsel": "gazi_sehir", "anlati_mi": false, "dogrulandi": false, "dogrula_notu": "Direnişin süresi doğrulanacak." }
      ],
      "mini_oyun": {
        "modul": "yolutut",
        "ad": "Yolu Tut",
        "aciklama": "Kilis'ten Antep'e uzanan yolda geçitleri tut. Şehir hazırlanmak için zaman kazansın.",
        "baslangic": "Kilis",
        "bitis": "Antep",
        "gecit_sayisi": 5,
        "dalga_sayisi": 3,
        "kazanim": "Az sayıda gönüllü yolu tutunca şehir hazırlanmak için zaman kazandı."
      },
      "roportaj": {
        "secilecek": 3,
        "konusan_notu": "",
        "sorular": [
          { "soru": "Gönüllüleriniz kimlerdi?", "cevap": "[İÇERİK BEKLENİYOR]", "altin_bilgi": 0, "kaynaklar": [], "dogrulayan": "", "dogrulama_tarihi": "" },
          { "soru": "Kilis–Antep yolu neden bu kadar önemliydi?", "cevap": "[İÇERİK BEKLENİYOR]", "altin_bilgi": 1, "kaynaklar": [], "dogrulayan": "", "dogrulama_tarihi": "" },
          { "soru": "Az kişiyle nasıl dayanabildiniz?", "cevap": "[İÇERİK BEKLENİYOR]", "altin_bilgi": 1, "kaynaklar": [], "dogrulayan": "", "dogrulama_tarihi": "" },
          { "soru": "Antep halkı sizden sonra ne yaptı?", "cevap": "[İÇERİK BEKLENİYOR]", "altin_bilgi": 2, "kaynaklar": [], "dogrulayan": "", "dogrulama_tarihi": "" }
        ]
      },
      "haber": {
        "sablon": "{0} Bey {1} yolunda işgalcileri durdurmak için savaştı. Antep'in direnişi nedeniyle şehre {2} unvanı verildi.",
        "dogrular": ["Şahin", "Kilis–Antep", "Gazi"],
        "celdiriciler": ["Kahraman", "Şanlı", "İzmir–Aydın"],
        "ipucu_bilgi": [0, 1, 2]
      },
      "biliyor_muydun": {
        "metin": "Şehrin bugünkü adı olan Gaziantep, bu unvandan gelir.",
        "dogrulandi": false,
        "bonus_soru": {
          "soru": "Gaziantep adındaki \"Gazi\" sözü nereden gelir?",
          "secenekler": ["Bir nehrin adından", "Bir dağın adından", "Şehre verilen unvandan"],
          "dogru": 2,
          "not": "Bu soru senaryo belgesinde yoktu; 'Biliyor muydun?' metninden türetildi. Ekip onaylamalı."
        }
      },
      "duygu_ani": "Şehri korumak için yolu tutan bir avuç insan.",
      "portre": { "dosya": "", "cizim": "kalpakli", "temsili": true }
    },
    {
      "id": "tayyar-rahmiye",
      "hazir": true,
      "ad": "Tayyar Rahmiye",
      "baslik": "Siperdeki Cesaret",
      "alan": "cephe",
      "alan_etiketi": "Cephe — Güney",
      "konum": { "ad": "Antep", "harita_x": 0.632, "harita_y": 0.79 },
      "tarih_etiketi": "1920",
      "tarih_dogrulandi": false,
      "altin_bilgiler": [
        {
          "metin": "Antep savunmasında erkeklerle birlikte çarpışan bir kadın kahramandır.",
          "kaynaklar": [],
          "dogrulandi": false
        },
        {
          "metin": "\"Tayyar\" lakabı hızı ve cesaretinden dolayı verilmiştir.",
          "kaynaklar": [],
          "dogrulandi": false,
          "dogrula_notu": "Lakabın nedeni doğrulanacak."
        },
        {
          "metin": "Antep savunması sırasında şehit düştü.",
          "kaynaklar": [],
          "dogrulandi": false,
          "dogrula_notu": "Tarih doğrulanacak."
        }
      ],
      "paneller": [
        { "metin": "Antep kuşatma altında. Kadınlar ve çocuklar siperlere yiyecek ve cephane taşıyor.", "gorsel": "siper_tasima", "anlati_mi": false, "dogrulandi": false },
        { "metin": "Rahmiye siperler arasında herkesten hızlı koşar.", "nuri": "Ona \"Tayyar\", yani \"uçan\" derlerdi.", "gorsel": "tayyar_kosu", "anlati_mi": false, "dogrulandi": false, "dogrula_notu": "Lakabın nedeni doğrulanacak." },
        { "metin": "Bir siper zor durumdadır. Rahmiye oraya ulaşır ve savunmaya katılır.", "gorsel": "zor_siper", "anlati_mi": false, "dogrulandi": false },
        { "metin": "Rahmiye şehit düşer.", "gorsel": "yemeni", "anlati_mi": false, "dogrulandi": false, "dogrula_notu": "Tarih doğrulanacak." }
      ],
      "mini_oyun": {
        "modul": "sipere",
        "ad": "Sipere Ulaştır",
        "aciklama": "Damlardan ve dar sokaklardan geç. Devriye fenerlerine görünmeden yükünü sipere ulaştır.",
        "tur_sayisi": 3,
        "tur_sure_sn": 120,
        "yukler": ["su", "cephane torbası", "su ve cephane torbası"],
        "kazanim": "Cephede yalnızca askerler değil, bütün bir şehir vardır.",
        "not": "Kazanım cümlesi senaryo belgesindeki 'Duygu anı' satırından alındı. Ekip onaylamalı."
      },
      "roportaj": {
        "secilecek": 3,
        "konusan_notu": "",
        "sorular": [
          { "soru": "Antep savunmasında kadınlar neler yaptı?", "cevap": "[İÇERİK BEKLENİYOR]", "altin_bilgi": 0, "kaynaklar": [], "dogrulayan": "", "dogrulama_tarihi": "" },
          { "soru": "\"Tayyar\" lakabını nasıl aldınız?", "cevap": "[İÇERİK BEKLENİYOR]", "altin_bilgi": 1, "kaynaklar": [], "dogrulayan": "", "dogrulama_tarihi": "" },
          { "soru": "Siperlerde bir gün nasıl geçerdi?", "cevap": "[İÇERİK BEKLENİYOR]", "altin_bilgi": 0, "kaynaklar": [], "dogrulayan": "", "dogrulama_tarihi": "" }
        ]
      },
      "haber": {
        "sablon": "{0} savunmasında erkeklerle omuz omuza çarpışan bir {1} kahraman: {2} Rahmiye.",
        "dogrular": ["Antep", "kadın", "Tayyar"],
        "celdiriciler": ["Maraş", "Kara", "genç"],
        "ipucu_bilgi": [0, 0, 1]
      },
      "biliyor_muydun": {
        "metin": "Antep savunmasında kadınlar ve çocuklar da cephane taşıma, yemek hazırlama ve yaralılara bakma gibi görevler üstlendi.",
        "dogrulandi": false,
        "bonus_soru": {
          "soru": "Antep savunmasında kadınlar ve çocuklar hangi görevi üstlendi?",
          "secenekler": ["Gazete basmak", "Cephane taşımak", "Telgraf çekmek"],
          "dogru": 1,
          "not": "Bu soru senaryo belgesinde yoktu; 'Biliyor muydun?' metninden türetildi. Ekip onaylamalı."
        }
      },
      "duygu_ani": "Cephede yalnızca askerler değil, bütün bir şehir vardır.",
      "portre": { "dosya": "", "cizim": "yemenili", "temsili": true }
    },
    {
      "id": "kara-fatma",
      "hazir": true,
      "ad": "Kara Fatma",
      "baslik": "Müfrezenin Komutanı",
      "alan": "cephe",
      "alan_etiketi": "Cephe — Batı",
      "konum": { "ad": "Erzurum", "harita_x": 0.809, "harita_y": 0.371 },
      "tarih_etiketi": "1919–1922",
      "tarih_dogrulandi": false,
      "altin_bilgiler": [
        {
          "metin": "Asıl adı Fatma Seher Erden'dir ve Erzurumludur.",
          "kaynaklar": [],
          "dogrulandi": false
        },
        {
          "metin": "Mustafa Kemal Paşa'nın yanına giderek görev istedi, gönüllülerden oluşan bir milis müfrezesi kurdu.",
          "kaynaklar": [],
          "dogrulandi": false
        },
        {
          "metin": "Batı Cephesi'nde savaştı. Gösterdiği başarılar nedeniyle rütbe ve İstiklal Madalyası aldı.",
          "kaynaklar": [],
          "dogrulandi": false,
          "dogrula_notu": "Rütbenin adı doğrulanacak."
        }
      ],
      "paneller": [
        { "metin": "Erzurum. Fatma, Millî Mücadele haberlerini dinler ve yola çıkmaya karar verir.", "gorsel": "erzurum_haber", "anlati_mi": false, "dogrulandi": false },
        { "metin": "Uzun bir yolculuk yapar. Mustafa Kemal Paşa'nın karşısına çıkıp görev ister.", "gorsel": "pasa_gorusme", "anlati_mi": false, "dogrulandi": false, "dogrula_notu": "Görüşmenin yeri doğrulanacak." },
        { "metin": "Köy köy dolaşıp gönüllü toplar. Müfrezesinde kadınlar da vardır.", "gorsel": "gonullu_toplama", "anlati_mi": false, "dogrulandi": false, "dogrula_notu": "Müfrezede kadınların bulunduğu doğrulanacak." },
        { "metin": "Batı Cephesi. Müfreze cephede görev yapar.", "gorsel": "bati_cephesi", "anlati_mi": false, "dogrulandi": false },
        { "metin": "Göğsüne İstiklal Madalyası takılır.", "gorsel": "madalya", "anlati_mi": false, "dogrulandi": false }
      ],
      "mini_oyun": {
        "modul": "mufreze",
        "ad": "Müfrezeni Kur",
        "aciklama": "Köylülerle konuş, her görev için o işi bilen kişiyi bul ve müfrezeni kur.",
        "koyluler_kurgusal": true,
        "gorevler": [
          { "gorev": "Yol göstermek", "beceri": "yol bilen", "soz": "Bu dağların bütün yollarını bilirim." },
          { "gorev": "Atlara bakmak", "beceri": "at yetiştiren", "soz": "Yıllardır at yetiştiririm." },
          { "gorev": "Yaralılara bakmak", "beceri": "yaralılara bakan", "soz": "Yara sarmayı ve hastaya bakmayı bilirim." },
          { "gorev": "Haber taşımak", "beceri": "haber taşıyan", "soz": "Hızlı koşarım, haberi hemen ulaştırırım." },
          { "gorev": "Yemek hazırlamak", "beceri": "yemek hazırlayan", "soz": "Kalabalık sofralara yemek yetiştiririm." }
        ],
        "diger_koyluler": [
          { "beceri": "türkü söyleyen", "soz": "Sesim güzeldir, türkü söylerim." },
          { "beceri": "saat onaran", "soz": "Bozuk saatleri onarırım." },
          { "beceri": "balık tutan", "soz": "Derede balık tutmayı severim." }
        ],
        "rota": {
          "baslangic": "Erzurum",
          "bitis": "Batı Cephesi",
          "duraklar": ["[İÇERİK BEKLENİYOR]", "[İÇERİK BEKLENİYOR]", "[İÇERİK BEKLENİYOR]"],
          "dogrulandi": false,
          "not": "Senaryoda rota durakları yazılı değil. Ekip doğrulanmış durakları sırasıyla buraya yazınca oyunda sıralama bulmacası kendiliğinden açılır."
        },
        "kazanim": "Bir birliği oluşturan, farklı becerilere sahip insanlardır.",
        "not": "Köylülerin sözleri kurgusaldır; senaryoda yalnızca beceriler yazılıydı. 'Diğer köylüler' çeldirici olarak eklendi. Ekip onaylamalı."
      },
      "roportaj": {
        "secilecek": 3,
        "konusan_notu": "",
        "sorular": [
          { "soru": "Erzurum'dan neden yola çıktınız?", "cevap": "[İÇERİK BEKLENİYOR]", "altin_bilgi": 0, "kaynaklar": [], "dogrulayan": "", "dogrulama_tarihi": "" },
          { "soru": "Mustafa Kemal Paşa'ya ne dediniz?", "cevap": "[İÇERİK BEKLENİYOR]", "altin_bilgi": 1, "kaynaklar": [], "dogrulayan": "", "dogrulama_tarihi": "" },
          { "soru": "Müfrezenizde kimler vardı?", "cevap": "[İÇERİK BEKLENİYOR]", "altin_bilgi": 1, "kaynaklar": [], "dogrulayan": "", "dogrulama_tarihi": "" },
          { "soru": "İstiklal Madalyası sizin için ne ifade ediyor?", "cevap": "[İÇERİK BEKLENİYOR]", "altin_bilgi": 2, "kaynaklar": [], "dogrulayan": "", "dogrulama_tarihi": "" }
        ]
      },
      "haber": {
        "sablon": "{0}'lu Fatma Seher Hanım kurduğu {1} ile Batı Cephesi'nde savaştı ve {2} ile ödüllendirildi.",
        "dogrular": ["Erzurum", "milis müfrezesi", "İstiklal Madalyası"],
        "celdiriciler": ["Kastamonu", "gazete", "Nobel Ödülü"],
        "ipucu_bilgi": [0, 1, 2]
      },
      "biliyor_muydun": {
        "metin": "Bir dönem esir düştüğü ve kaçarak birliğine döndüğü anlatılır.",
        "dogrulandi": false,
        "bonus_soru": {
          "soru": "Anlatılanlara göre Kara Fatma esir düşünce ne yaptı?",
          "secenekler": ["Kaçarak birliğine döndü", "Bir gazete çıkardı", "Telgrafçı oldu"],
          "dogru": 0,
          "not": "Bu soru senaryo belgesinde yoktu; 'Biliyor muydun?' metninden türetildi. Ekip onaylamalı."
        }
      },
      "duygu_ani": "\"Ben de vatanım için bir şey yapabilirim\" diyerek binlerce kilometre yol giden bir kadın.",
      "portre": { "dosya": "", "cizim": "madalyali", "temsili": true }
    },
    {
      "id": "gordesli-makbule",
      "hazir": true,
      "ad": "Gördesli Makbule",
      "baslik": "Efe Kadın",
      "alan": "cephe",
      "alan_etiketi": "Cephe — Batı",
      "konum": { "ad": "Gördes", "harita_x": 0.143, "harita_y": 0.51 },
      "tarih_etiketi": "1919–1921",
      "tarih_dogrulandi": false,
      "altin_bilgiler": [
        {
          "metin": "Manisa'nın Gördes ilçesindendir. Eşiyle birlikte Kuvâ-yi Milliye'ye katıldı.",
          "kaynaklar": [],
          "dogrulandi": false,
          "dogrula_notu": "Eşinin adı doğrulanacak."
        },
        {
          "metin": "Yunan işgaline karşı efe kıyafetiyle Kuvâ-yi Milliye birliklerinde savaştı.",
          "kaynaklar": [],
          "dogrulandi": false
        },
        {
          "metin": "Çarpışmalardan birinde şehit düştü.",
          "kaynaklar": [],
          "dogrulandi": false,
          "dogrula_notu": "Yıl ve yer doğrulanacak."
        }
      ],
      "paneller": [
        { "metin": "Gördes'in dağ köyleri. İşgal haberi gelir.", "gorsel": "gordes_haber", "anlati_mi": false, "dogrulandi": false },
        { "metin": "Makbule efe kıyafetini giyer ve eşiyle dağa çıkar.", "gorsel": "efe_kiyafet", "anlati_mi": false, "dogrulandi": false },
        { "metin": "Kuvâ-yi Milliye birlikleri dağ yollarını çok iyi bilir.", "gorsel": "dag_yollari", "anlati_mi": false, "dogrulandi": false },
        { "metin": "Makbule bir çarpışmada şehit düşer.", "gorsel": "zeybek_siluet", "anlati_mi": false, "dogrulandi": false, "dogrula_notu": "Yıl ve yer doğrulanacak." }
      ],
      "mini_oyun": {
        "modul": "dagyolu",
        "ad": "Dağ Yolu",
        "aciklama": "Patika parçalarını döndür. Gördes köyünden Kuvâ-yi Milliye kampına kesintisiz bir yol kur.",
        "baslangic": "Gördes köyü",
        "bitis": "Kuvâ-yi Milliye kampı",
        "bulmaca_sayisi": 3,
        "kazanim": "Kuvâ-yi Milliye birlikleri dağ yollarını çok iyi bilir.",
        "not": "Senaryoda bu mini oyun için kazanım cümlesi yoktu; 3. hikâye panelinden alındı. Ekip onaylamalı."
      },
      "roportaj": {
        "secilecek": 3,
        "konusan_notu": "",
        "sorular": [
          { "soru": "Kuvâ-yi Milliye ne demek?", "cevap": "[İÇERİK BEKLENİYOR]", "altin_bilgi": 0, "kaynaklar": [], "dogrulayan": "", "dogrulama_tarihi": "" },
          { "soru": "Neden efe kıyafeti giydiniz?", "cevap": "[İÇERİK BEKLENİYOR]", "altin_bilgi": 1, "kaynaklar": [], "dogrulayan": "", "dogrulama_tarihi": "" },
          { "soru": "Dağlarda nasıl hayatta kaldınız?", "cevap": "[İÇERİK BEKLENİYOR]", "altin_bilgi": 1, "kaynaklar": [], "dogrulayan": "", "dogrulama_tarihi": "" }
        ]
      },
      "haber": {
        "sablon": "{0}'li Makbule Hanım, {1} birliklerinde {2} kıyafetiyle işgale karşı savaştı.",
        "dogrular": ["Gördes", "Kuvâ-yi Milliye", "efe"],
        "celdiriciler": ["Erzurum", "Anadolu Ajansı", "asker"],
        "ipucu_bilgi": [0, 1, 1]
      },
      "biliyor_muydun": {
        "metin": "Kuvâ-yi Milliye, düzenli ordu kurulmadan önce halkın işgale karşı kendiliğinden oluşturduğu direniş birlikleridir.",
        "dogrulandi": false,
        "bonus_soru": {
          "soru": "Kuvâ-yi Milliye birliklerini kim oluşturdu?",
          "secenekler": ["Yabancı gazeteciler", "İşgale karşı çıkan halk", "İstanbul'daki matbaalar"],
          "dogru": 1,
          "not": "Bu soru senaryo belgesinde yoktu; 'Biliyor muydun?' metninden türetildi. Ekip onaylamalı."
        }
      },
      "duygu_ani": "Dağların türküsünü bilen bir kadının vatan savunması.",
      "portre": { "dosya": "", "cizim": "efeli", "temsili": true }
    },
    {
      "id": "halime-cavus",
      "hazir": true,
      "ad": "Halime Çavuş",
      "baslik": "Gizli Kimlik",
      "alan": "lojistik",
      "alan_etiketi": "Lojistik",
      "konum": { "ad": "Kastamonu", "harita_x": 0.425, "harita_y": 0.16 },
      "tarih_etiketi": "1920–1922",
      "tarih_dogrulandi": false,
      "altin_bilgiler": [
        {
          "metin": "Kastamonuludur. Asıl adı Kezban'dır.",
          "kaynaklar": [],
          "dogrulandi": false,
          "dogrula_notu": "Asıl adı doğrulanacak."
        },
        {
          "metin": "Erkek kılığına girip \"Halim\" adıyla cephane taşıyan birliklere katıldı.",
          "kaynaklar": [],
          "dogrulandi": false,
          "dogrula_notu": "Doğrulanacak."
        },
        {
          "metin": "Hizmetleri nedeniyle çavuş rütbesi ve İstiklal Madalyası aldı.",
          "kaynaklar": [],
          "dogrulandi": false,
          "dogrula_notu": "Doğrulanacak."
        }
      ],
      "paneller": [
        { "metin": "Kastamonu. Kezban, kadınların cepheye gidemeyeceğini duyar.", "gorsel": "kastamonu_duyuru", "anlati_mi": false, "dogrulandi": false },
        { "metin": "Saçlarını keser, erkek kıyafeti giyer ve \"Halim\" adını alır.", "gorsel": "sac_kesme", "anlati_mi": false, "dogrulandi": false },
        { "metin": "Cephane kolunda gece gündüz yük taşır.", "gorsel": "cephane_kolu", "anlati_mi": false, "dogrulandi": false },
        { "metin": "Gerçek kimliği ortaya çıktığında herkes şaşırır. Ona \"Halime Çavuş\" denir.", "gorsel": "kimlik", "anlati_mi": false, "dogrulandi": false, "dogrula_notu": "Kimliğin ortaya çıkışı doğrulanacak." }
      ],
      "mini_oyun": {
        "modul": "kontrol",
        "ad": "Kontrol Noktası",
        "aciklama": "Cephane yüklü kağnıyla kontrol noktalarından geç. Nöbetçinin parola sorularını bil.",
        "suphe_siniri": 5,
        "kazanim": "",
        "sorular": [
          { "kahraman": "sutcu-imam", "soru": "Sütçü İmam hangi şehirde direnişi başlattı?", "secenekler": ["Antep", "Maraş", "Erzurum"], "dogru": 1 },
          { "kahraman": "sahin-bey", "soru": "Şahin Bey hangi yolda işgal kuvvetlerini durdurmak için savaştı?", "secenekler": ["Kilis–Antep yolu", "İzmir–Aydın yolu", "İnebolu–Kastamonu yolu"], "dogru": 0 },
          { "kahraman": "tayyar-rahmiye", "soru": "Rahmiye'ye \"Tayyar\" lakabı neden verildi?", "secenekler": ["Maraşlı olduğu için", "Gazeteci olduğu için", "Hızı ve cesareti için"], "dogru": 2 },
          { "kahraman": "kara-fatma", "soru": "Kara Fatma'nın asıl adı nedir?", "secenekler": ["Fatma Seher Erden", "Halide Edib Adıvar", "Makbule"], "dogru": 0 },
          { "kahraman": "gordesli-makbule", "soru": "Gördesli Makbule hangi kıyafetle savaştı?", "secenekler": ["Denizci kıyafetiyle", "Efe kıyafetiyle", "Postacı kıyafetiyle"], "dogru": 1 }
        ],
        "not": "Parola soruları senaryo belgesinde yoktu; önceki beş kahramanın Altın Bilgilerinden türetildi. Ekip onaylamalı. Başarı testindeki sorular bunlarla birebir aynı olmamalı."
      },
      "roportaj": {
        "secilecek": 3,
        "konusan_notu": "",
        "sorular": [
          { "soru": "Neden erkek kılığına girdiniz?", "cevap": "[İÇERİK BEKLENİYOR]", "altin_bilgi": 1, "kaynaklar": [], "dogrulayan": "", "dogrulama_tarihi": "" },
          { "soru": "Cephane nasıl taşınırdı?", "cevap": "[İÇERİK BEKLENİYOR]", "altin_bilgi": 1, "kaynaklar": [], "dogrulayan": "", "dogrulama_tarihi": "" },
          { "soru": "Gerçek adınız ortaya çıkınca ne oldu?", "cevap": "[İÇERİK BEKLENİYOR]", "altin_bilgi": 2, "kaynaklar": [], "dogrulayan": "", "dogrulama_tarihi": "" }
        ]
      },
      "haber": {
        "sablon": "Kastamonulu {0}, \"{1}\" adıyla cephane taşıdı ve {2} rütbesi aldı.",
        "dogrular": ["Kezban", "Halim", "çavuş"],
        "celdiriciler": ["Fatma", "Said", "paşa"],
        "ipucu_bilgi": [0, 1, 2]
      },
      "biliyor_muydun": {
        "metin": "Millî Mücadele'de cephanenin büyük bölümü öküz arabaları (kağnılar), atlar ve insanların sırtında taşındı.",
        "dogrulandi": false,
        "bonus_soru": {
          "soru": "Öküz arabasının bir başka adı nedir?",
          "secenekler": ["Kağnı", "Tayyare", "Telgraf"],
          "dogru": 0,
          "not": "Bu soru senaryo belgesinde yoktu; 'Biliyor muydun?' metninden türetildi. Ekip onaylamalı."
        }
      },
      "duygu_ani": "Ülkesine hizmet etmek için kimliğini saklamak zorunda kalan bir genç kadın.",
      "portre": { "dosya": "", "cizim": "kalpakli_genc", "temsili": true }
    },
    { "id": "serife-baci", "hazir": false, "ad": "Şerife Bacı", "alan": "lojistik", "alan_etiketi": "Lojistik", "konum": { "ad": "İnebolu", "harita_x": 0.424, "harita_y": 0.074 } },
    { "id": "halide-edib", "hazir": false, "ad": "Halide Edib Adıvar", "alan": "basin", "alan_etiketi": "Basın-yayın", "konum": { "ad": "İstanbul", "harita_x": 0.178, "harita_y": 0.213 } },
    { "id": "yunus-nadi", "hazir": false, "ad": "Yunus Nadi", "alan": "basin", "alan_etiketi": "Basın-yayın", "konum": { "ad": "Ankara", "harita_x": 0.377, "harita_y": 0.367 } },
    { "id": "mehmet-akif", "hazir": false, "ad": "Mehmet Âkif Ersoy", "alan": "basin", "alan_etiketi": "Basın-yayın", "konum": { "ad": "Kastamonu", "harita_x": 0.45, "harita_y": 0.19 } }
  ]
};
