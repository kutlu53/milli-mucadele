window.IP_VERI = {
  "surum": "0.2-kaynak-taramasi",
  "aciklama": "Oyundaki tüm tarihî içerik bu dosyadan gelir. 3 Ekim 2026'da yapay zekâ destekli bir kaynak taraması yapıldı: her bilginin yanında 'kaynaklar' (data/kaynaklar.json içindeki K kodları) ve 'kaynak_durumu' (iki_kaynak / tek_kaynak / bulunamadi) yazıyor. 'dogrulandi' alanı bilerek false bırakıldı: proje kuralına göre bir bilgiyi ancak proje ekibi, kaynağı kendi gözüyle okuduktan sonra doğrulanmış sayabilir (bkz. docs/KAYNAK_RAPORU.md). Röportaj cevapları 'taslak: true' ile işaretlidir; ekip kaynakla karşılaştırıp 'dogrulayan' ve 'dogrulama_tarihi' alanlarını doldurmalıdır. Bu dosyayı değiştirdikten sonra 'araclar/veri-paketle.bat' dosyasını çalıştırın.",
  "rehber": {
    "ad": "Telgrafçı Nuri",
    "kurgusal": true
  },
  "final": {
    "gazete_adi": "İstiklal Postası",
    "nusha": "Zafer Nüshası",
    "telgraf": "Bütün haberler ulaştı. Matbaayı çalıştır!",
    "veda": "Onları sen unutmadıkça kaybolmazlar."
  },
  "prolog": [
    {
      "konusan": "anlatici",
      "metin": "Okulun eski deposunda tozlu bir tahta sandık buldun. İçinde pirinçten bir telgraf makinesi ve eski bir defter var."
    },
    {
      "konusan": "telgraf",
      "metin": "Burası Ankara, yıl 1920. Milletin sesini duyuracak bir muhabir arıyoruz. Unutulan kahramanların sayfaları siliniyor. Onları kaydet!"
    },
    {
      "konusan": "nuri",
      "metin": "Ben Telgrafçı Nuri. On kahramanın hikâyesini topla, röportaj yap, haberini yaz."
    },
    {
      "konusan": "nuri",
      "metin": "Defterin her sayfası canlanınca Anadolu haritasında bir ışık yanacak. On sayfa tamamlanınca Zafer Nüshası basılacak!"
    }
  ],
  "kahramanlar": [
    {
      "id": "sutcu-imam",
      "hazir": true,
      "ad": "Sütçü İmam",
      "baslik": "Uzunoluk'ta Kıvılcım",
      "alan": "cephe",
      "alan_etiketi": "Cephe — Güney",
      "konum": {
        "ad": "Maraş",
        "harita_x": 0.586,
        "harita_y": 0.703
      },
      "tarih_etiketi": "31 Ekim 1919",
      "tarih_dogrulandi": false,
      "tarih_dogrula_notu": "Dört akademik kaynak 31 Ekim 1919 diyor; başka gün veren kaynak bulunmadı.",
      "altin_bilgiler": [
        {
          "metin": "Maraş'ta Fransız işgaline karşı direnişin ilk adımı sayılan Uzunoluk Olayı'nın kahramanıdır.",
          "kaynaklar": [
            "K2",
            "K6",
            "K1",
            "K4"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Uzunoluk Hamamı önünde Maraşlı kadınlara yapılan saldırıya karşı çıkması direnişin kıvılcımı oldu.",
          "kaynaklar": [
            "K2",
            "K6",
            "K1",
            "K4",
            "K5"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "Hamamın adı kaynaklarda çelişkili: iki kaynak \"Uzunoluk Hamamı\", bir yazar \"Çukur Hamamı\" diyor. Rapora yazılmalı."
        },
        {
          "metin": "Halkın direnişi sonunda Maraş 12 Şubat 1920'de kurtuldu. TBMM bu direniş nedeniyle 1973'te şehre \"Kahraman\" unvanını verdi.",
          "kaynaklar": [
            "K2",
            "K3",
            "K5",
            "K7"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        }
      ],
      "paneller": [
        {
          "metin": "Maraş, Uzunoluk. İmam Efendi küçük dükkânında süt satıyor.",
          "gorsel": "carsi",
          "anlati_mi": false,
          "kaynaklar": [
            "K1",
            "K6",
            "K4"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "nuri": "Herkes ona Sütçü İmam der.",
          "dogrula_notu": "\"Ahmet\" adı hiçbir kaynakta yok; çıkarıldı. Çizim temsilîdir."
        },
        {
          "metin": "İşgal askerleri sokaklarda devriye geziyor. Halk tedirgin.",
          "gorsel": "isgal",
          "anlati_mi": false,
          "kaynaklar": [
            "K1",
            "K6"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Uzunoluk'ta hamamdan çıkan kadınlara saldırılır. Sütçü İmam buna karşı çıkar.",
          "gorsel": "kivilcim",
          "anlati_mi": false,
          "kaynaklar": [
            "K1",
            "K2",
            "K6"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Haber şehre yayılır. Maraşlılar mahalle mahalle örgütlenmeye başlar.",
          "gorsel": "isiklar",
          "anlati_mi": false,
          "kaynaklar": [
            "K2",
            "K6",
            "K1"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "Pencerelerde yanan ışıklar oyunun sembolüdür, tarihî bilgi değildir."
        },
        {
          "metin": "12 Şubat 1920: Maraş kurtulmuştur. Kalede yine Türk bayrağı dalgalanacaktır.",
          "gorsel": "kale_bayrak",
          "anlati_mi": false,
          "kaynaklar": [
            "K2",
            "K5"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "Bayrağın kaleye yeniden çekildiği gün için bir kaynak 21 Şubat 1920 diyor; panelde gün verilmedi."
        }
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
          {
            "soru": "Size neden \"Sütçü İmam\" deniyor?",
            "cevap": "Benim asıl adım İmam. Uzunoluk'taki küçük dükkânımda köylerden topladığım sütü satarak geçinirim. Bu yüzden herkes bana \"Sütçü İmam\" der.",
            "altin_bilgi": 0,
            "kaynaklar": [
              "K1",
              "K6"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          },
          {
            "soru": "O gün Uzunoluk'ta ne oldu?",
            "cevap": "31 Ekim 1919'du. İşgal birliklerinden askerler hamamdan çıkan kadınlara saldırdı. Ben buna karşı çıktım, sonra şehirden ayrılıp Bertiz'e gittim.",
            "altin_bilgi": 1,
            "kaynaklar": [
              "K1",
              "K6",
              "K2",
              "K5"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          },
          {
            "soru": "Maraş halkı nasıl birleşti?",
            "cevap": "Şehirde direnişi örgütlemek için Maraş Müdafaa-i Hukuk Cemiyeti kuruldu. Mustafa Kemal Paşa da halkı örgütlemek için Kılıç Ali'yi bölgeye gönderdi. Maraşlılar bir bütün olarak mücadeleye katıldı.",
            "altin_bilgi": 0,
            "kaynaklar": [
              "K2",
              "K1",
              "K3"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          },
          {
            "soru": "Maraş nasıl kurtuldu?",
            "cevap": "Maraş halkı bir bütün olarak mücadeleye katıldı. Şehrini kendi direnişiyle kurtardı. Maraş 12 Şubat 1920'de kurtuldu.",
            "altin_bilgi": 2,
            "kaynaklar": [
              "K2",
              "K3",
              "K5",
              "K7"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": "",
            "not": "Senaryodaki soru (\"Şehrin adına Kahraman neden eklendi?\") değiştirildi: unvan 1973'te verildi, Sütçü İmam 1922'de öldü."
          }
        ]
      },
      "haber": {
        "sablon": "{0} halkı boyun eğmedi! {1} önünde başlayan direnişin sonunda şehir {2} tarihinde kurtuldu.",
        "dogrular": [
          "Maraş",
          "Uzunoluk Hamamı",
          "12 Şubat 1920"
        ],
        "celdiriciler": [
          "Antep",
          "İnebolu İskelesi",
          "9 Eylül 1922"
        ],
        "ipucu_bilgi": [
          0,
          1,
          2
        ]
      },
      "biliyor_muydun": {
        "metin": "Kahramanmaraş \"Kahraman\" (1973), Gaziantep \"Gazi\" (1921), Şanlıurfa \"Şanlı\" (1984) unvanlarını TBMM'den aldı. Hepsi Millî Mücadele'deki direnişleri nedeniyle verildi.",
        "dogrulandi": false,
        "bonus_soru": {
          "soru": "\"Gazi\" unvanı hangi şehre verildi?",
          "secenekler": [
            "Maraş",
            "Antep",
            "Urfa"
          ],
          "dogru": 1
        },
        "kaynaklar": [
          "K2",
          "K3",
          "K8",
          "K10",
          "K9",
          "K11"
        ]
      },
      "duygu_ani": "Sıradan bir sütçünün tek bir cesaret anı bir şehri ayağa kaldırır.",
      "portre": {
        "dosya": "",
        "cizim": "sarikli",
        "temsili": true
      },
      "sadelestirme_notu": "Kaynaklara göre Sütçü İmam olay sırasında bir askeri vurmuştur. Oyun, şiddeti göstermeme ilkesi gereği bunu \"karşı çıktı\" diye anlatır. Raporda bu sadeleştirme açıkça yazılmalı."
    },
    {
      "id": "sahin-bey",
      "hazir": true,
      "ad": "Şahin Bey",
      "baslik": "Antep Yolunun Bekçisi",
      "alan": "cephe",
      "alan_etiketi": "Cephe — Güney",
      "konum": {
        "ad": "Antep",
        "harita_x": 0.609,
        "harita_y": 0.776
      },
      "tarih_etiketi": "Mart 1920",
      "tarih_dogrulandi": false,
      "altin_bilgiler": [
        {
          "metin": "Kilis–Antep yolunu tutan Kuvâ-yi Milliye birliğinin komutanıydı. Birliğini köylerden topladığı kişilerle kurdu.",
          "kaynaklar": [
            "K13",
            "K17",
            "K14"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Kilis–Antep yolunda Fransız kuvvetlerini durdurmak için savaştı ve 28 Mart 1920'de şehit oldu.",
          "kaynaklar": [
            "K13",
            "K16",
            "K18",
            "K14"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Antep'in uzun direnişi nedeniyle TBMM şehre \"Gazi\" unvanını verdi (1921).",
          "kaynaklar": [
            "K8",
            "K18",
            "K13",
            "K16"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        }
      ],
      "paneller": [
        {
          "metin": "Şahin Bey köyleri dolaşıp adam toplar. Asıl adı Mehmet Sait'tir; \"Şahin\" takma adıdır.",
          "gorsel": "gonulluler",
          "anlati_mi": false,
          "kaynaklar": [
            "K13",
            "K14"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "Adın yazımı kaynaklarda \"Mehmet Sait\" ve \"Mehmed Said\" olarak geçiyor; akademik makaledeki yazım kullanıldı."
        },
        {
          "metin": "Kilis yönünden büyük bir işgal birliği yaklaşır.",
          "gorsel": "kolon",
          "anlati_mi": false,
          "kaynaklar": [
            "K16",
            "K17"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Kendilerinden çok büyük bir kuvvete karşı yolu günlerce tutarlar. Antep'teki işgal birliklerine yardım ulaşamaz.",
          "gorsel": "yol_tut",
          "anlati_mi": false,
          "kaynaklar": [
            "K16",
            "K14",
            "K13"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Şahin Bey şehit düşer.",
          "gorsel": "kalpak",
          "anlati_mi": false,
          "kaynaklar": [
            "K16",
            "K14"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Antep aylarca direnir. TBMM şehre \"Gazi\" unvanını verir.",
          "gorsel": "gazi_sehir",
          "anlati_mi": false,
          "kaynaklar": [
            "K8",
            "K18"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "Savunmanın süresi kaynaklarda on ay ile yaklaşık on bir ay arasında değişiyor; \"aylarca\" denildi."
        }
      ],
      "mini_oyun": {
        "modul": "yolutut",
        "ad": "Yolu Tut",
        "aciklama": "Kilis'ten Antep'e uzanan yolda geçitleri tut. Antep'teki işgal birliklerine yardım ulaşmasın.",
        "baslangic": "Kilis",
        "bitis": "Antep",
        "gecit_sayisi": 5,
        "dalga_sayisi": 3,
        "kazanim": "Kendilerinden çok büyük bir kuvvete karşı yolu tuttular. Antep'teki işgal birliklerine yardım ulaşamadı."
      },
      "roportaj": {
        "secilecek": 3,
        "konusan_notu": "",
        "sorular": [
          {
            "soru": "Gönüllüleriniz kimlerdi?",
            "cevap": "Köyleri dolaşıp eli silah tutan kişileri topladım. Kısa zamanda iki yüz kişi olduk.",
            "altin_bilgi": 0,
            "kaynaklar": [
              "K13",
              "K14"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          },
          {
            "soru": "Kilis–Antep yolu neden bu kadar önemliydi?",
            "cevap": "Fransız birlikleri Antep'teki askerlerine yardımı Kilis üzerinden gönderiyordu. Bana bu yolu kontrol altında tutma görevi verildi. Yolu tutarak o yardımları engelledik.",
            "altin_bilgi": 1,
            "kaynaklar": [
              "K16",
              "K14",
              "K13"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          },
          {
            "soru": "Az kişiyle nasıl dayanabildiniz?",
            "cevap": "Kilis yolu üzerindeki Elmalı Köprüsü çevresinde mevzi aldık. Karşımızdaki kuvvet bizden çok daha büyüktü. Yine de sonuna kadar direndik.",
            "altin_bilgi": 1,
            "kaynaklar": [
              "K16",
              "K17"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          },
          {
            "soru": "Size neden \"Şahin\" deniyor?",
            "cevap": "Asıl adım Mehmet Sait. \"Şahin\" benim takma adım.",
            "altin_bilgi": 0,
            "kaynaklar": [
              "K13",
              "K14"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": "",
            "not": "Senaryodaki soru (\"Antep halkı sizden sonra ne yaptı?\") değiştirildi: Şahin Bey kendi ölümünden sonrasını anlatamaz. \"Gazi\" bilgisini deftere Nuri ekler."
          }
        ]
      },
      "haber": {
        "sablon": "{0} Bey {1} yolunda işgalcileri durdurmak için savaştı. Antep'in direnişi nedeniyle şehre {2} unvanı verildi.",
        "dogrular": [
          "Şahin",
          "Kilis–Antep",
          "Gazi"
        ],
        "celdiriciler": [
          "Kahraman",
          "Şanlı",
          "İzmir–Aydın"
        ],
        "ipucu_bilgi": [
          0,
          1,
          2
        ]
      },
      "biliyor_muydun": {
        "metin": "Şehrin bugünkü adı olan Gaziantep, bu unvandan gelir.",
        "dogrulandi": false,
        "bonus_soru": {
          "soru": "Gaziantep adındaki \"Gazi\" sözü nereden gelir?",
          "secenekler": [
            "Bir nehrin adından",
            "Bir dağın adından",
            "Şehre verilen unvandan"
          ],
          "dogru": 2,
          "not": "Bu soru senaryo belgesinde yoktu; 'Biliyor muydun?' metninden türetildi. Ekip onaylamalı."
        },
        "kaynaklar": [
          "K8",
          "K16",
          "K14"
        ]
      },
      "duygu_ani": "Şehri korumak için yolu tutan bir avuç insan.",
      "portre": {
        "dosya": "",
        "cizim": "kalpakli",
        "temsili": true
      }
    },
    {
      "id": "tayyar-rahmiye",
      "hazir": true,
      "ad": "Tayyar Rahmiye",
      "baslik": "Siperdeki Cesaret",
      "alan": "cephe",
      "alan_etiketi": "Cephe — Güney",
      "konum": {
        "ad": "Osmaniye",
        "harita_x": 0.551,
        "harita_y": 0.776
      },
      "tarih_etiketi": "1920",
      "tarih_dogrulandi": false,
      "altin_bilgiler": [
        {
          "metin": "Osmaniyelidir. Fransız işgaline karşı Kuvâ-yi Milliye'de erkeklerle birlikte çarpışan bir kadın kahramandır.",
          "kaynaklar": [
            "K20",
            "K21"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Bir çarpışmada ateş altında kalan arkadaşlarını kurtarmak için ileri atıldı. Bu cesareti nedeniyle ona \"Tayyar\" lakabı verildi.",
          "kaynaklar": [
            "K20",
            "K22",
            "K23"
          ],
          "kaynak_durumu": "tek_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "Lakabın nedeni tek kaynakta (bir komutanın anıları) geçiyor; ikinci kaynak aranmalı."
        },
        {
          "metin": "1920 yazında Osmaniye'de Fransız karargâhına yapılan saldırıda en önde ilerlerken şehit düştü.",
          "kaynaklar": [
            "K20",
            "K23",
            "K21"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "Gün çelişkili; \"1920 yazında\" denildi."
        }
      ],
      "paneller": [
        {
          "metin": "Osmaniye işgal altında. Halk dağ köylerinde Kuvâ-yi Milliye müfrezeleri kuruyor.",
          "gorsel": "siper_tasima",
          "anlati_mi": false,
          "kaynaklar": [
            "K20",
            "K21"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "Çizim temsilîdir."
        },
        {
          "metin": "Rahmiye müfrezeye gönüllü katılır. Bir çarpışmada ateş altında kalan arkadaşlarını kurtarmak için ileri atılır.",
          "gorsel": "tayyar_kosu",
          "anlati_mi": false,
          "kaynaklar": [
            "K20",
            "K22"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "nuri": "Bu cesareti yüzünden ona \"Tayyar\" dediler."
        },
        {
          "metin": "Osmaniye'deki Fransız karargâhına saldırı başlar. Arkadaşları duraklayınca Rahmiye onlara cesaret verir ve en önde ilerler.",
          "gorsel": "zor_siper",
          "anlati_mi": false,
          "kaynaklar": [
            "K20",
            "K23",
            "K21"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Rahmiye karargâha yaklaşırken şehit düşer. Arkadaşları karargâhı ele geçirir.",
          "gorsel": "yemeni",
          "anlati_mi": false,
          "kaynaklar": [
            "K20",
            "K21",
            "K22",
            "K23"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        }
      ],
      "mini_oyun": {
        "modul": "sipere",
        "ad": "Müfrezeye Ulaştır",
        "aciklama": "Gece vakti damlardan geç. Devriye fenerlerine görünmeden yiyecek ve giyeceği müfrezeye ulaştır.",
        "tur_sayisi": 3,
        "tur_sure_sn": 120,
        "yukler": [
          "yiyecek",
          "giyecek",
          "yiyecek ve giyecek"
        ],
        "kazanim": "Rahmiye, milislere yiyecek ve giyecek de sağladı.",
        "not": "Senaryodaki oyunun adı \"Sipere Ulaştır\" idi ve Antep'te geçiyordu. Kaynaklarda siper ya da cephane taşıma yok; yalnızca \"milislere yiyecek, giyecek sağladı\" bilgisi var (tek kaynak). Oyun buna göre uyarlandı; damlar ve fenerler oyun kurgusudur.",
        "hedef_adi": "müfreze"
      },
      "roportaj": {
        "secilecek": 3,
        "konusan_notu": "",
        "sorular": [
          {
            "soru": "Osmaniye'de kadınlar Millî Mücadele'ye nasıl katıldı?",
            "cevap": "Kadınlar cephe gerisinde yufka açıp ekmek yetiştirdi. Ben ise cephede erkeklerle birlikte savaştım. Milislere yiyecek ve giyecek de sağladım.",
            "altin_bilgi": 0,
            "kaynaklar": [
              "K20"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": "",
            "not": "Senaryodaki soru Antep'e dayanıyordu; kaynaklara uygun yedek soruyla değiştirildi. Tek kaynak."
          },
          {
            "soru": "\"Tayyar\" lakabını nasıl aldınız?",
            "cevap": "Hasanbeyli yakınındaki bir çarpışmada iki arkadaşımız ateş altında kalmıştı. Hemen ileri atılıp onları oradan aldım. Bu yüzden bana \"Tayyar\" dediler.",
            "altin_bilgi": 1,
            "kaynaklar": [
              "K20"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          },
          {
            "soru": "Kuvâ-yi Milliye'ye nasıl katıldınız?",
            "cevap": "Köyümüze gelen Hüseyin Ağa gönüllü topluyordu. Bana köyde kalıp geri hizmette çalışmamı söyledi. Ben cephede savaşmak istedim ve müfrezeye gönüllü katıldım.",
            "altin_bilgi": 0,
            "kaynaklar": [
              "K20"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": "",
            "not": "Senaryodaki soru (\"Siperlerde bir gün nasıl geçerdi?\") kaynaklarda karşılık bulmadı; değiştirildi. Tek kaynak."
          }
        ]
      },
      "haber": {
        "sablon": "{0} bölgesinde işgale karşı erkeklerle omuz omuza çarpışan bir {1} kahraman: {2} Rahmiye.",
        "dogrular": [
          "Osmaniye",
          "kadın",
          "Tayyar"
        ],
        "celdiriciler": [
          "Antep",
          "Kara",
          "genç"
        ],
        "ipucu_bilgi": [
          0,
          0,
          1
        ]
      },
      "biliyor_muydun": {
        "metin": "Osmaniye'de kadınlar cephe gerisinde de çalıştı: yufka açıp ekmek yetiştirerek Kuvâ-yi Milliye'ye destek oldular.",
        "dogrulandi": false,
        "kaynaklar": [
          "K20"
        ],
        "kaynak_durumu": "tek_kaynak",
        "bonus_soru": {
          "soru": "Osmaniye'de kadınlar cephe gerisinde Kuvâ-yi Milliye'ye nasıl destek oldu?",
          "secenekler": [
            "Yufka açıp ekmek yetiştirerek",
            "Gazete basarak",
            "Telgraf çekerek"
          ],
          "dogru": 0,
          "not": "Bu soru 'Biliyor muydun?' metninden türetildi. Ekip onaylamalı."
        }
      },
      "duygu_ani": "Arkadaşları duraklayınca en önde ilerleyen bir kadın.",
      "portre": {
        "dosya": "",
        "cizim": "yemenili",
        "temsili": true
      },
      "kaynak_notu": "Senaryo taslağı bu kahramanı Antep savunmasına bağlıyordu. Dört bağımsız akademik kaynak onu Osmaniye'ye bağlıyor; hiçbiri Antep demiyor. Kaynaklarda adı çoğunlukla \"Rahime Hatun\" diye geçer. Bölüm buna göre yeniden yazıldı.",
      "tarih_dogrula_notu": "Şehit olduğu gün kaynaklarda çelişkili (1 Temmuz 1920 / 5 Ağustos 1920); yalnızca yıl verildi."
    },
    {
      "id": "kara-fatma",
      "hazir": true,
      "ad": "Kara Fatma",
      "baslik": "Müfrezenin Komutanı",
      "alan": "cephe",
      "alan_etiketi": "Cephe — Batı",
      "konum": {
        "ad": "Erzurum",
        "harita_x": 0.809,
        "harita_y": 0.371
      },
      "tarih_etiketi": "1919–1922",
      "tarih_dogrulandi": false,
      "altin_bilgiler": [
        {
          "metin": "Asıl adı Fatma Seher'dir ve Erzurumludur.",
          "kaynaklar": [
            "K26",
            "K22",
            "K29",
            "K28"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "Soyadı kaynaklarda Erden, Savaşır ve Savaşgan olarak geçiyor; soyadı yazılmadı."
        },
        {
          "metin": "Sivas'ta Mustafa Kemal Paşa ile görüşüp görev istedi ve bir milis müfrezesi kurdu.",
          "kaynaklar": [
            "K29",
            "K28",
            "K27",
            "K22"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Batı Cephesi'nde savaştı. Üsteğmenliğe kadar yükseldi ve İstiklal Madalyası aldı.",
          "kaynaklar": [
            "K27",
            "K22",
            "K26",
            "K30",
            "K29",
            "K28"
          ],
          "kaynak_durumu": "tek_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "Üsteğmenlik iki kaynakta var. Madalyanın adı yalnızca tek kaynakta (kendi dilekçesinde) geçiyor; ikinci kaynak aranmalı."
        }
      ],
      "paneller": [
        {
          "metin": "Erzurumlu Fatma Seher, Millî Mücadele'ye katılmaya karar verir.",
          "gorsel": "erzurum_haber",
          "anlati_mi": false,
          "kaynaklar": [],
          "kaynak_durumu": "bulunamadi",
          "dogrulandi": false,
          "dogrula_notu": "\"Erzurum'dan yola çıktı\" bilgisi kaynaklarda yok; cümle buna göre yazıldı. Çizim temsilîdir."
        },
        {
          "metin": "Sivas'a gider. Mustafa Kemal Paşa ile görüşüp görev ister.",
          "gorsel": "pasa_gorusme",
          "anlati_mi": false,
          "kaynaklar": [
            "K28",
            "K29"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Bir müfreze kurar. Müfrezesinde kadınlar da vardır.",
          "gorsel": "gonullu_toplama",
          "anlati_mi": false,
          "kaynaklar": [
            "K22",
            "K29",
            "K27"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "Müfrezenin büyüklüğü kaynaklarda çelişkili; sayı verilmedi."
        },
        {
          "metin": "Batı Cephesi. Müfreze cephede görev yapar.",
          "gorsel": "bati_cephesi",
          "anlati_mi": false,
          "kaynaklar": [
            "K22",
            "K27"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Hizmetleri nedeniyle İstiklal Madalyası ile ödüllendirilir.",
          "gorsel": "madalya",
          "anlati_mi": false,
          "kaynaklar": [
            "K28",
            "K26"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "Madalyanın adı tek kaynakta."
        }
      ],
      "mini_oyun": {
        "modul": "mufreze",
        "ad": "Müfrezeni Kur",
        "aciklama": "Her görev için o işi bilen kişiyi bul ve müfrezeni kur. Sonra Kara Fatma'nın görev yerlerini sıraya diz.",
        "koyluler_kurgusal": true,
        "gorevler": [
          {
            "gorev": "Yol göstermek",
            "beceri": "yol bilen",
            "soz": "Bu dağların bütün yollarını bilirim."
          },
          {
            "gorev": "Atlara bakmak",
            "beceri": "at yetiştiren",
            "soz": "Yıllardır at yetiştiririm."
          },
          {
            "gorev": "Yaralılara bakmak",
            "beceri": "yaralılara bakan",
            "soz": "Yara sarmayı ve hastaya bakmayı bilirim."
          },
          {
            "gorev": "Haber taşımak",
            "beceri": "haber taşıyan",
            "soz": "Hızlı koşarım, haberi hemen ulaştırırım."
          },
          {
            "gorev": "Yemek hazırlamak",
            "beceri": "yemek hazırlayan",
            "soz": "Kalabalık sofralara yemek yetiştiririm."
          }
        ],
        "diger_koyluler": [
          {
            "beceri": "türkü söyleyen",
            "soz": "Sesim güzeldir, türkü söylerim."
          },
          {
            "beceri": "saat onaran",
            "soz": "Bozuk saatleri onarırım."
          },
          {
            "beceri": "balık tutan",
            "soz": "Derede balık tutmayı severim."
          }
        ],
        "rota": {
          "baslangic": "Başlangıç",
          "bitis": "zafer",
          "duraklar": [
            "Sivas",
            "İzmit",
            "Afyonkarahisar"
          ],
          "yonerge": "Kara Fatma'nın görev yerlerini sırasıyla seç.",
          "ipucu": "Önce Mustafa Kemal Paşa ile görüştüğü şehir, sonra İzmit, en son Büyük Taarruz'un yapıldığı Afyonkarahisar.",
          "kaynaklar": [
            "K29",
            "K28",
            "K27",
            "K22"
          ],
          "dogrulandi": false,
          "not": "Senaryodaki \"Erzurum'dan Batı Cephesi'ne rota\" kaynaklarla kurulamadı. Onun yerine görev yerlerinin sırası kullanıldı: Sivas (görüşme, 1919) → İzmit (1920–1921) → Afyonkarahisar (Büyük Taarruz, 1922). Sivas ve İzmit iki kaynakta; \"Afyon\" yer adı tek akademik kaynakta geçiyor."
        },
        "kazanim": "Bir birliği oluşturan, farklı becerilere sahip insanlardır.",
        "not": "Köylülerin sözleri ve köy sahnesi kurgusaldır. Kaynaklara göre ilk çetesini İstanbul'da kurdu; \"köy köy gönüllü toplama\" bilgisi kaynaklarda yok. Ekip onaylamalı."
      },
      "roportaj": {
        "secilecek": 3,
        "konusan_notu": "",
        "sorular": [
          {
            "soru": "Büyük Taarruz'da başınıza ne geldi?",
            "cevap": "Büyük Taarruz sırasında esir düştüm. Sonra kaçmayı başardım.",
            "altin_bilgi": 2,
            "kaynaklar": [
              "K27",
              "K22",
              "K29"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": "",
            "not": "Senaryodaki soru (\"Erzurum'dan neden yola çıktınız?\") kaynaklarda karşılık bulmadı; değiştirildi."
          },
          {
            "soru": "Mustafa Kemal Paşa'ya ne dediniz?",
            "cevap": "Sivas'ta Mustafa Kemal Paşa ile görüştüm. Ona orduya katılmak istediğimi söyledim.",
            "altin_bilgi": 1,
            "kaynaklar": [
              "K28",
              "K29"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          },
          {
            "soru": "Müfrezenizde kimler vardı?",
            "cevap": "Müfrezemde erkeklerle birlikte kadınlar da vardı. Oğlum da benimle birlikte çarpıştı.",
            "altin_bilgi": 1,
            "kaynaklar": [
              "K29",
              "K22",
              "K26"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          },
          {
            "soru": "İstiklal Madalyası sizin için ne ifade ediyor?",
            "cevap": "Millî orduda yaptığım hizmetlerden dolayı İstiklal Madalyası aldım. Görevimi mücadelenin son gününe kadar karşılıksız yaptım.",
            "altin_bilgi": 2,
            "kaynaklar": [
              "K28"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          }
        ]
      },
      "haber": {
        "sablon": "{0}'lu Fatma Seher Hanım kurduğu {1} ile Batı Cephesi'nde savaştı ve {2} rütbesine kadar yükseldi.",
        "dogrular": [
          "Erzurum",
          "milis müfrezesi",
          "üsteğmen"
        ],
        "celdiriciler": [
          "Kastamonu",
          "gazete",
          "paşa"
        ],
        "ipucu_bilgi": [
          0,
          1,
          2
        ]
      },
      "biliyor_muydun": {
        "metin": "Büyük Taarruz sırasında esir düştü ve kaçmayı başardı.",
        "dogrulandi": false,
        "kaynaklar": [
          "K27",
          "K22",
          "K29"
        ],
        "kaynak_durumu": "iki_kaynak",
        "bonus_soru": {
          "soru": "Kara Fatma esir düşünce ne yaptı?",
          "secenekler": [
            "Kaçmayı başardı",
            "Bir gazete çıkardı",
            "Telgrafçı oldu"
          ],
          "dogru": 0,
          "not": "Bu soru 'Biliyor muydun?' metninden türetildi. Ekip onaylamalı."
        }
      },
      "duygu_ani": "Vatanı için savaşmak isteyen ve bunun için Mustafa Kemal Paşa'dan görev isteyen bir kadın.",
      "portre": {
        "dosya": "",
        "cizim": "madalyali",
        "temsili": true
      }
    },
    {
      "id": "gordesli-makbule",
      "hazir": true,
      "ad": "Gördesli Makbule",
      "baslik": "Efe Kadın",
      "alan": "cephe",
      "alan_etiketi": "Cephe — Batı",
      "konum": {
        "ad": "Gördes",
        "harita_x": 0.143,
        "harita_y": 0.51
      },
      "tarih_etiketi": "1921–1922",
      "tarih_dogrulandi": false,
      "altin_bilgiler": [
        {
          "metin": "Manisa'nın Gördes ilçesindendir. Eşi Halil Efe'nin ardından Kuvâ-yi Milliye'ye katıldı.",
          "kaynaklar": [
            "K34",
            "K35",
            "K37"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Yunan işgaline karşı Kuvâ-yi Milliye birliklerinde savaştı. Bu yüzden \"Makbule Efe\" diye de anılır.",
          "kaynaklar": [
            "K35",
            "K36",
            "K34"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "\"Efe kıyafeti\" bilgisi hiçbir kaynakta bulunamadı; çıkarıldı. \"Efe\" yalnızca lakap olarak geçiyor."
        },
        {
          "metin": "17 Mart 1922'de Kocayayla'daki çarpışmada şehit düştü.",
          "kaynaklar": [
            "K35",
            "K34",
            "K40",
            "K36",
            "K37"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "Kocayayla'nın hangi ilçede olduğu kaynaklarda farklı tarif ediliyor; ilçe adı verilmedi."
        }
      ],
      "paneller": [
        {
          "metin": "Gördes. İşgal haberi gelir.",
          "gorsel": "gordes_haber",
          "anlati_mi": false,
          "kaynaklar": [
            "K34",
            "K35"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Makbule, eşi Halil Efe'nin ardından dağlara çıkar ve müfrezeye katılır.",
          "gorsel": "efe_kiyafet",
          "anlati_mi": false,
          "kaynaklar": [
            "K36",
            "K34"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "Nasıl katıldığı konusunda iki anlatı var; ayrıntı verilmedi. Çizim temsilîdir."
        },
        {
          "metin": "Akıncı müfrezeleri dağlarda dolaşır. İşgal kuvvetleri bu engebeli arazide tutunamaz.",
          "gorsel": "dag_yollari",
          "anlati_mi": false,
          "kaynaklar": [
            "K35",
            "K41"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Makbule 17 Mart 1922'de Kocayayla'daki çarpışmada şehit düşer.",
          "gorsel": "zeybek_siluet",
          "anlati_mi": false,
          "kaynaklar": [
            "K35",
            "K36"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        }
      ],
      "mini_oyun": {
        "modul": "dagyolu",
        "ad": "Dağ Yolu",
        "aciklama": "Patika parçalarını döndür. Gördes'ten dağdaki müfreze kampına kesintisiz bir yol kur.",
        "baslangic": "Gördes",
        "bitis": "Müfreze kampı",
        "bulmaca_sayisi": 3,
        "kazanim": "Müfrezeler dağlık arazide dolaşır; işgal kuvvetleri bu arazide tutunamaz.",
        "not": "Kazanım cümlesi 3. hikâye panelinden alındı. Ekip onaylamalı."
      },
      "roportaj": {
        "secilecek": 3,
        "konusan_notu": "",
        "sorular": [
          {
            "soru": "Kuvâ-yi Milliye ne demek?",
            "cevap": "Kuvâ-yi Milliye, 'millî kuvvetler' demektir. İşgale karşı kurulan millî direniş birliklerine bu ad verildi. Düzenli ordu olmadığı için halkın tepkisiyle ortaya çıktı.",
            "altin_bilgi": 1,
            "kaynaklar": [
              "K41",
              "K43"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          },
          {
            "soru": "Kuvâ-yi Milliye'ye nasıl katıldınız?",
            "cevap": "Eşim Halil Efe bir akıncı müfrezesinin komutanıydı. Onun ardından ben de müfrezeye katıldım.",
            "altin_bilgi": 0,
            "kaynaklar": [
              "K34",
              "K35",
              "K37"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": "",
            "not": "Senaryodaki soru (\"Neden efe kıyafeti giydiniz?\") kaynaklarda karşılık bulmadı; değiştirildi."
          },
          {
            "soru": "Dağlarda nasıl hayatta kaldınız?",
            "cevap": "Kar kış demeden, nerede yer bulduysak orada yattık. Bazen günlerce aç ve susuz kaldık. Düşman yerimizi öğrenmesin diye çoğu zaman ateş yakamadık.",
            "altin_bilgi": 1,
            "kaynaklar": [
              "K34"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          }
        ]
      },
      "haber": {
        "sablon": "{0}'li Makbule Hanım, eşi {1} ile {2} birliklerinde işgale karşı savaştı.",
        "dogrular": [
          "Gördes",
          "Halil Efe",
          "Kuvâ-yi Milliye"
        ],
        "celdiriciler": [
          "Erzurum",
          "Şahin Bey",
          "Anadolu Ajansı"
        ],
        "ipucu_bilgi": [
          0,
          0,
          1
        ]
      },
      "biliyor_muydun": {
        "metin": "Kuvâ-yi Milliye, düzenli ordu kurulmadan önce halkın işgale karşı kendiliğinden oluşturduğu direniş birlikleridir.",
        "dogrulandi": false,
        "bonus_soru": {
          "soru": "Kuvâ-yi Milliye birliklerini kim oluşturdu?",
          "secenekler": [
            "Yabancı gazeteciler",
            "İşgale karşı çıkan halk",
            "İstanbul'daki matbaalar"
          ],
          "dogru": 1,
          "not": "Bu soru senaryo belgesinde yoktu; 'Biliyor muydun?' metninden türetildi. Ekip onaylamalı."
        },
        "kaynaklar": [
          "K41",
          "K45",
          "K42",
          "K43"
        ]
      },
      "duygu_ani": "Dağların türküsünü bilen bir kadının vatan savunması.",
      "portre": {
        "dosya": "",
        "cizim": "siyah_baslikli",
        "temsili": true,
        "not": "Kıyafeti haberlerde \"siyah pantolon, ceket, uzun manto, çizme, siyah başlık\" diye tarif ediliyor; çizim buna göre ve temsilîdir."
      }
    },
    {
      "id": "halime-cavus",
      "hazir": true,
      "ad": "Halime Çavuş",
      "baslik": "Gizli Kimlik",
      "alan": "lojistik",
      "alan_etiketi": "Lojistik",
      "konum": {
        "ad": "Kastamonu",
        "harita_x": 0.425,
        "harita_y": 0.16
      },
      "tarih_etiketi": "1920–1922",
      "tarih_dogrulandi": false,
      "altin_bilgiler": [
        {
          "metin": "Kastamonuludur. Asıl adı Halime'dir; sonradan Kocabıyık soyadını almıştır.",
          "kaynaklar": [
            "K49"
          ],
          "kaynak_durumu": "tek_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Saçlarını kestirip erkek gibi giyindi ve kağnısıyla cephane taşıyan nakliye kollarına katıldı.",
          "kaynaklar": [
            "K46",
            "K49",
            "K23"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Hizmetleri nedeniyle İstiklal Madalyası aldı. Halk onu \"Halime Çavuş\" adıyla tanıdı.",
          "kaynaklar": [
            "K23"
          ],
          "kaynak_durumu": "tek_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "Çavuş rütbesi çelişkili; madalyanın veriliş zamanı da çelişkili. Tarih ve rütbe iddiası yazılmadı."
        }
      ],
      "paneller": [
        {
          "metin": "Kastamonu, Duruçay köyü. Halime yirmi iki yaşındadır; ailesini geride bırakıp Millî Mücadele'ye katılmaya karar verir.",
          "gorsel": "kastamonu_duyuru",
          "anlati_mi": false,
          "kaynaklar": [],
          "kaynak_durumu": "bulunamadi",
          "dogrulandi": false,
          "dogrula_notu": "\"Kadınların cepheye gidemeyeceğini duyar\" bilgisi kaynaklarda yok; çıkarıldı. Çizim temsilîdir."
        },
        {
          "metin": "Saçlarını kestirir, erkek gibi giyinir. Anlatılanlara göre onu uzun süre \"Halim\" sandılar.",
          "gorsel": "sac_kesme",
          "anlati_mi": true,
          "kaynaklar": [
            "K46",
            "K49"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Kağnısıyla nakliye kollarına katılır. İnebolu'dan Ankara yönüne cephane taşır.",
          "gorsel": "cephane_kolu",
          "anlati_mi": false,
          "kaynaklar": [
            "K23"
          ],
          "kaynak_durumu": "tek_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Anlatılanlara göre kadın olduğu, yolda kimlik kâğıdı sorulunca anlaşıldı. Halk onu \"Halime Çavuş\" diye andı.",
          "gorsel": "kimlik",
          "anlati_mi": true,
          "kaynaklar": [
            "K49",
            "K23"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        }
      ],
      "mini_oyun": {
        "modul": "kontrol",
        "ad": "Kontrol Noktası",
        "aciklama": "Cephane yüklü kağnıyla kontrol noktalarından geç. Nöbetçinin parola sorularını bil.",
        "suphe_siniri": 5,
        "kazanim": "",
        "sorular": [
          {
            "kahraman": "sutcu-imam",
            "soru": "Sütçü İmam hangi şehirde direnişi başlattı?",
            "secenekler": [
              "Antep",
              "Maraş",
              "Erzurum"
            ],
            "dogru": 1
          },
          {
            "kahraman": "sahin-bey",
            "soru": "Şahin Bey hangi yolda işgal kuvvetlerini durdurmak için savaştı?",
            "secenekler": [
              "Kilis–Antep yolu",
              "İzmir–Aydın yolu",
              "İnebolu–Kastamonu yolu"
            ],
            "dogru": 0
          },
          {
            "kahraman": "tayyar-rahmiye",
            "soru": "Rahmiye'ye \"Tayyar\" lakabı neden verildi?",
            "secenekler": [
              "Maraşlı olduğu için",
              "Gazeteci olduğu için",
              "Bir çarpışmadaki cesareti için"
            ],
            "dogru": 2
          },
          {
            "kahraman": "kara-fatma",
            "soru": "Kara Fatma'nın asıl adı nedir?",
            "secenekler": [
              "Fatma Seher",
              "Halide Edib",
              "Makbule"
            ],
            "dogru": 0
          },
          {
            "kahraman": "gordesli-makbule",
            "soru": "Gördesli Makbule'nin eşinin adı nedir?",
            "secenekler": [
              "Şahin Bey",
              "Halil Efe",
              "Yunus Nadi"
            ],
            "dogru": 1
          }
        ],
        "not": "Parola soruları senaryo belgesinde yoktu; önceki beş kahramanın Altın Bilgilerinden türetildi. Ekip onaylamalı. Başarı testindeki sorular bunlarla birebir aynı olmamalı."
      },
      "roportaj": {
        "secilecek": 3,
        "konusan_notu": "",
        "sorular": [
          {
            "soru": "Millî Mücadele'ye nasıl katıldınız?",
            "cevap": "Yirmi iki yaşındaydım; ailemi geride bırakıp yola çıktım. Saçlarımı kestirdim, erkek gibi giyindim. Kağnımla nakliye kollarına katıldım.",
            "altin_bilgi": 1,
            "kaynaklar": [
              "K46",
              "K47"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": "",
            "not": "Senaryodaki soru (\"Neden erkek kılığına girdiniz?\") değiştirildi: nedeni hiçbir kaynakta yazmıyor."
          },
          {
            "soru": "Cephane nasıl taşınırdı?",
            "cevap": "Cephaneyi kağnımla, nakliye kollarında taşırdım. İnebolu'dan Kastamonu'ya yol kağnı koluyla altı gün sürerdi. Kağnı kollarındakilerin çoğu kadındı.",
            "altin_bilgi": 1,
            "kaynaklar": [
              "K47",
              "K50"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          },
          {
            "soru": "Kadın olduğunuz nasıl anlaşıldı?",
            "cevap": "Anlatılanlara göre bir gün cephane taşırken Mustafa Kemal Paşa'ya rastladım. Kimlik kâğıdımı isteyince kız olduğumu anladı. Savaştan sonra beni Ankara'ya çağırdı ve konuk etti.",
            "altin_bilgi": 2,
            "kaynaklar": [
              "K49",
              "K47"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": "",
            "not": "Senaryodaki soru (\"Gerçek adınız ortaya çıkınca ne oldu?\") değiştirildi: Halime zaten gerçek adı. İlk iki cümle zayıf kaynağa dayanan halk anlatısıdır."
          }
        ]
      },
      "haber": {
        "sablon": "Kastamonulu Halime, {0} gibi giyinerek {1} ile cephane taşıdı ve {2} aldı.",
        "dogrular": [
          "erkek",
          "kağnı",
          "İstiklal Madalyası"
        ],
        "celdiriciler": [
          "efe",
          "tren",
          "paşa rütbesi"
        ],
        "ipucu_bilgi": [
          1,
          1,
          2
        ]
      },
      "biliyor_muydun": {
        "metin": "İnebolu'ya gelen cephane, Ankara yönüne kağnı kollarıyla taşındı. Atlı arabalar, yük hayvanları ve insanların sırtı da kullanıldı.",
        "dogrulandi": false,
        "kaynaklar": [
          "K50",
          "K22"
        ],
        "kaynak_durumu": "iki_kaynak",
        "bonus_soru": {
          "soru": "İnebolu'ya gelen cephane Ankara yönüne en çok neyle taşındı?",
          "secenekler": [
            "Kağnı kollarıyla",
            "Trenle",
            "Uçakla"
          ],
          "dogru": 0,
          "not": "Bu soru 'Biliyor muydun?' metninden türetildi. Ekip onaylamalı."
        }
      },
      "duygu_ani": "Ailesini geride bırakıp iki yıl boyunca kağnısıyla cephane taşıyan genç bir kadın.",
      "portre": {
        "dosya": "",
        "cizim": "kalpakli_genc",
        "temsili": true
      },
      "kaynak_notu": "Senaryo taslağındaki \"asıl adı Kezban\" bilgisi hiçbir kaynakta bulunamadı; okunan kaynakların hepsinde adı Halime'dir. \"Halim\" adı yalnızca zayıf bir kaynakta geçer. Çavuş rütbesi kaynaklarda çelişkilidir (bir araştırmacı \"Çavuş\"un halkın verdiği lakap olabileceğini yazıyor)."
    },
    {
      "id": "serife-baci",
      "hazir": true,
      "ad": "Şerife Bacı",
      "baslik": "Kar Fırtınasında Kağnı",
      "alan": "lojistik",
      "alan_etiketi": "Lojistik",
      "konum": {
        "ad": "İnebolu",
        "harita_x": 0.424,
        "harita_y": 0.074
      },
      "tarih_etiketi": "1921 kışı",
      "tarih_dogrulandi": false,
      "tarih_dogrula_notu": "Akademik kaynaklar yalnızca \"1921 kışı\" diyor; resmî sayfalarda farklı ay ve günler var. Ay ve gün yazılmadı.",
      "altin_bilgiler": [
        {
          "metin": "İnebolu'ya deniz yoluyla gelen cephaneyi kağnılarla Kastamonu'ya taşıyan Kastamonulu kadınlardandır.",
          "kaynaklar": [
            "K50",
            "K52",
            "K56"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Anlatılanlara göre, karlı bir kış gecesinde cephaneyi korumak için yorganını kağnının üstüne örttü.",
          "kaynaklar": [
            "K50",
            "K30",
            "K52"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "anlati_mi": true
        },
        {
          "metin": "Soğuktan donarak şehit oldu. Adı bugün Millî Mücadele'nin kadın kahramanlarını simgeler.",
          "kaynaklar": [
            "K50",
            "K30",
            "K53"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "\"İlk kadın şehit\" ifadesi hiçbir kaynakta yok; kullanılmamalı."
        }
      ],
      "paneller": [
        {
          "metin": "İnebolu İskelesi. Gemilerden indirilen cephane sandıkları kağnılara yükleniyor.",
          "gorsel": "iskele",
          "anlati_mi": false,
          "kaynaklar": [
            "K50",
            "K52"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Anlatılanlara göre Şerife, kundaktaki bebeğini de yanına alarak kağnısıyla yola çıkar.",
          "gorsel": "bebek",
          "anlati_mi": true,
          "kaynaklar": [
            "K50",
            "K30",
            "K54"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "Bebeğin kağnıda mı, kucakta mı olduğu kaynaklarda farklı. Çizim temsilîdir."
        },
        {
          "metin": "Kar bastırır, hava iyice soğur. Anlatılanlara göre Şerife kafileden geri kalır.",
          "gorsel": "firtina",
          "anlati_mi": true,
          "kaynaklar": [
            "K50"
          ],
          "kaynak_durumu": "tek_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Anlatılanlara göre yorganını cephanenin üzerine örter.",
          "gorsel": "ortu",
          "anlati_mi": true,
          "kaynaklar": [
            "K50",
            "K30"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Sabah olur. Anlatılanlara göre görevliler kağnıyı bulur ve cephaneyi şehre ulaştırır.",
          "gorsel": "sabah",
          "anlati_mi": true,
          "kaynaklar": [
            "K50"
          ],
          "kaynak_durumu": "tek_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Bugün Kastamonu'da, Cumhuriyet Meydanı'nda Atatürk ve Şehit Şerife Bacı Anıtı vardır.",
          "gorsel": "anit",
          "anlati_mi": false,
          "kaynaklar": [
            "K54",
            "K57",
            "K62"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "Çizim temsilîdir, gerçek anıtı göstermez."
        }
      ],
      "mini_oyun": {
        "modul": "istiklalyolu",
        "ad": "İstiklal Yolu",
        "aciklama": "Cephane yüklü kağnıyı İnebolu'dan Kastamonu yönüne götür. Yolda vereceğin kararlar cephaneyi kuru tutmalı.",
        "olaylar": [
          {
            "ad": "İnebolu İskelesi",
            "gorsel": "iskele",
            "metin": "Cephane sandıkları kağnına yüklendi. Kar atıştırıyor. Yola çıkmadan önce ne yaparsın?",
            "secenekler": [
              {
                "metin": "Sandıkları brandayla sıkıca sar",
                "sonuc": "Sandıkları sıkıca sardın. Biraz zaman aldı ama kar artık cephaneye kolay işlemez.",
                "etki": {
                  "sicaklik": -5
                },
                "siki_ortu": true
              },
              {
                "metin": "Vakit kaybetmeden yola çık",
                "sonuc": "Hemen yola çıktın. Sandıkların üstü açık kaldı, kar taneleri üstlerine konuyor.",
                "etki": {
                  "kuruluk": -6
                }
              }
            ]
          },
          {
            "ad": "Buzlu yokuş",
            "gorsel": "yokus",
            "metin": "Yol dikleşti ve buz tuttu. Tekerlekler kayıyor.",
            "secenekler": [
              {
                "metin": "Yavaş çık, tekerleklerin arkasına taş koy",
                "sonuc": "Adım adım çıktın. Kağnı kaymadı ama soğukta uzun süre kaldın.",
                "etki": {
                  "sicaklik": -10,
                  "saglamlik": -5
                }
              },
              {
                "metin": "Hızlanarak çık",
                "sonuc": "Kağnı yokuşun ortasında kaydı. Bir tekerlek taşa çarptı, sandıklar kara değdi.",
                "etki": {
                  "saglamlik": -25,
                  "kuruluk": -10
                }
              }
            ]
          },
          {
            "ad": "Yol ayrımı",
            "gorsel": "ayrim",
            "metin": "Yol ikiye ayrılıyor. Biri kısa ama dik, öbürü uzun ama düz.",
            "secenekler": [
              {
                "metin": "Kısa ama dik yol",
                "sonuc": "Dik yol kağnıyı çok zorladı ama daha erken vardın.",
                "etki": {
                  "saglamlik": -20,
                  "sicaklik": -5
                }
              },
              {
                "metin": "Uzun ama düz yol",
                "sonuc": "Düz yol kağnıyı yormadı. Yol uzadığı için daha çok üşüdün.",
                "etki": {
                  "sicaklik": -18
                }
              }
            ]
          },
          {
            "ad": "Donmuş dere",
            "gorsel": "dere",
            "metin": "Önünde donmuş bir dere var. Buz ince görünüyor.",
            "secenekler": [
              {
                "metin": "Buzun üstünden geç",
                "sonuc": "Buz çatladı! Tekerlek suya girdi, sandıklara su sıçradı.",
                "etki": {
                  "kuruluk": -30,
                  "saglamlik": -10
                }
              },
              {
                "metin": "Sığ geçidi bulmak için dolaş",
                "sonuc": "Dereyi sığ yerinden geçtin. Sandıklar kuru kaldı ama yol uzadı.",
                "etki": {
                  "sicaklik": -12
                }
              }
            ]
          },
          {
            "ad": "Mola yeri",
            "gorsel": "mola",
            "metin": "Öküzler yoruldu. Mola vermek gerek.",
            "secenekler": [
              {
                "metin": "Rüzgâr almayan kayalığın dibinde dur",
                "sonuc": "Kayalık rüzgârı kesti. Biraz ısındın, öküzler dinlendi.",
                "etki": {
                  "sicaklik": 15
                }
              },
              {
                "metin": "Yolun ortasında kısa bir mola ver",
                "sonuc": "Açıkta durdun. Kar sandıkların üstüne birikti.",
                "etki": {
                  "sicaklik": 5,
                  "kuruluk": -10
                }
              },
              {
                "metin": "Mola verme",
                "sonuc": "Durmadan yürüdün. Soğuk iyice işledi, kağnı da yoruldu.",
                "etki": {
                  "sicaklik": -15,
                  "saglamlik": -10
                }
              }
            ]
          },
          {
            "ad": "Karlı gece",
            "gorsel": "firtina",
            "metin": "Gece oldu, kar bastırdı, hava iyice soğudu. Kağnıda bir yorgan var.",
            "secenekler": [
              {
                "metin": "Yorganı cephanenin üstüne ört",
                "sonuc": "Yorgan sandıkları sardı. Cephane kardan korunacak.",
                "etki": {
                  "sicaklik": -30,
                  "kuruluk": 5
                }
              },
              {
                "metin": "Yorganı serme, karda yola devam et",
                "sonuc": "Karda ilerlemek çok zor. Sandıkların üstü açık kaldı, kar birikiyor.",
                "etki": {
                  "sicaklik": -20,
                  "kuruluk": -40
                }
              }
            ]
          }
        ],
        "final": {
          "anlatim": [
            "Anlatılanlara göre Şerife Bacı, karlı bir kış gecesinde cephaneyi korumak için yorganını kağnının üstüne örttü.",
            "Soğuktan donarak şehit oldu. Adı bugün Millî Mücadele'nin kadın kahramanlarını simgeliyor."
          ],
          "kapanis": "Cephane yerine ulaştı."
        },
        "kazanim": "Kendini değil, cepheye gidecek cephaneyi korumak.",
        "not": "Durakların metinleri ve seçenekleri oyun için yazıldı (kurgusal kararlar). Son durak kaynaklara göre düzeltildi: \"kar fırtınası\" ve \"örtüye kendin sarın\" seçeneği çıkarıldı. Ekip onaylamalı."
      },
      "roportaj": {
        "secilecek": 3,
        "konusan": {
          "ad": "Köylü kadın",
          "cizim": "koylu_kadin"
        },
        "konusan_notu": "Bu röportaj Şerife Bacı ile değil, onu tanıyan kurgusal bir köylü kadınla yapılıyor.",
        "sorular": [
          {
            "soru": "Cephane nereden geliyordu?",
            "cevap": "Cephane deniz yoluyla İnebolu'ya geliyordu. Oradan kağnılarla Kastamonu ve Çankırı üzerinden Ankara'ya doğru taşınıyordu.",
            "altin_bilgi": 0,
            "kaynaklar": [
              "K50",
              "K52"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          },
          {
            "soru": "Kadınlar bu yolda neler yaşadı?",
            "cevap": "Bu yoldaki işlerin çoğunu kadınlar yapıyordu. Kimi kadınlar bebeklerini de yanlarına alıp kağnılarının önünde yürüyordu. 1921 kışında yolda donarak şehit olanlar oldu.",
            "altin_bilgi": 0,
            "kaynaklar": [
              "K52",
              "K50"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          },
          {
            "soru": "O kış gecesi ne oldu?",
            "cevap": "Anlatılanlara göre Şerife kafileden geri kalmış, ancak Kastamonu Kışlası'nın önüne kadar gelebilmişti. Yorganını cephanenin üstüne örtmüş, sabaha karşı soğuktan donmuştu. Yorganın altındaki bebeği ise sağ bulundu.",
            "altin_bilgi": 1,
            "kaynaklar": [
              "K50",
              "K30"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          }
        ]
      },
      "haber": {
        "sablon": "{0} İskelesi'nden cephane taşıyan Şerife Bacı, anlatılanlara göre {1} korumak için yorganını kağnıya örttü ve {2} şehit oldu.",
        "dogrular": [
          "İnebolu",
          "cephaneyi",
          "soğuktan donarak"
        ],
        "celdiriciler": [
          "İzmir",
          "gazeteyi",
          "cephede savaşırken"
        ],
        "ipucu_bilgi": [
          0,
          1,
          2
        ]
      },
      "biliyor_muydun": {
        "metin": "İnebolu'dan Kastamonu ve Çankırı üzerinden Ankara'ya uzanan bu yola bugün \"İstiklal Yolu\" deniyor.",
        "dogrulandi": false,
        "bonus_soru": {
          "soru": "İnebolu'dan Ankara'ya uzanan yola bugün ne ad veriliyor?",
          "secenekler": [
            "İpek Yolu",
            "Kral Yolu",
            "İstiklal Yolu"
          ],
          "dogru": 2,
          "not": "Bu soru senaryo belgesinde yoktu; 'Biliyor muydun?' metninden türetildi. Ekip onaylamalı."
        },
        "kaynaklar": [
          "K52",
          "K55",
          "K56",
          "K50",
          "K63"
        ]
      },
      "duygu_ani": "Kendini değil, cepheye gidecek cephaneyi korumak.",
      "ogretmen_notu": "Bu bölüm öğrencileri duygusal olarak etkileyebilir. Öğretmen oturum öncesinde kısa bir hazırlık konuşması yapmalı, oturum sonrasında sınıfla birkaç dakika sohbet etmelidir.",
      "portre": {
        "dosya": "",
        "cizim": "beyaz_ortulu",
        "temsili": true
      },
      "kaynak_notu": "Olayın tamamı tek bir kök anlatıya dayanıyor (bir tanıklığın aktarımı) ve dönem metninde kadının adı geçmiyor. Bu yüzden olayı anlatan cümleler \"Anlatılanlara göre\" diye başlar. \"İlk kadın şehit\" ifadesi ve \"kar fırtınası\" kaynaklarda bulunamadı; kullanılmadı. Kaynaklardaki sözcük \"örtü\" değil \"yorgan\"dır; yorgan hem cephaneyi hem bebeği örtüyordu ve bebek sağ kurtuldu."
    },
    {
      "id": "halide-edib",
      "hazir": true,
      "ad": "Halide Edib Adıvar",
      "baslik": "Meydanda Bir Ses",
      "alan": "basin",
      "alan_etiketi": "Basın-yayın",
      "konum": {
        "ad": "İstanbul",
        "harita_x": 0.178,
        "harita_y": 0.213
      },
      "tarih_etiketi": "23 Mayıs 1919",
      "tarih_dogrulandi": false,
      "tarih_dogrula_notu": "Ünlü konuşma 23 Mayıs 1919'daki ilk Sultanahmet Mitingi'nde yapıldı (iki hakemli makale).",
      "altin_bilgiler": [
        {
          "metin": "İzmir'in işgalini protesto eden Sultanahmet Mitingi'nde (1919) halka seslenen bir konuşma yaptı.",
          "kaynaklar": [
            "K66",
            "K64",
            "K65",
            "K67"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Anadolu'ya geçerek Millî Mücadele'ye katıldı. Yunus Nadi ile birlikte Anadolu Ajansı'nın kuruluşunda rol aldı.",
          "kaynaklar": [
            "K64",
            "K73",
            "K68",
            "K69"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Batı Cephesi'nde onbaşı rütbesiyle görev aldı. Millî Mücadele'yi \"Ateşten Gömlek\" romanında anlattı.",
          "kaynaklar": [
            "K65",
            "K73",
            "K64",
            "K72"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "Onbaşılıktan sonraki rütbe kaynaklarda çelişkili (başçavuş / çavuş); yalnızca \"onbaşı\" yazıldı."
        }
      ],
      "paneller": [
        {
          "metin": "Sultanahmet Meydanı. Minarelerde siyah bayraklar dalgalanıyor, meydanı büyük bir kalabalık dolduruyor.",
          "gorsel": "sultanahmet_meydan",
          "anlati_mi": false,
          "kaynaklar": [
            "K66",
            "K67"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Halide Edib kürsüde halka seslenir.",
          "gorsel": "kursu",
          "anlati_mi": false,
          "kaynaklar": [
            "K66",
            "K67"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "İstanbul işgal edilince eşi Dr. Adnan ile birlikte Anadolu'ya geçer.",
          "gorsel": "gizli_gecis",
          "anlati_mi": false,
          "kaynaklar": [
            "K73",
            "K68",
            "K75"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "Geçişin ayrıntıları (yol, kılık) doğrulanamadı; çizim bilerek genel tutuldu."
        },
        {
          "metin": "Ankara yolunda Yunus Nadi ile bir ajans kurma fikri doğar.",
          "gorsel": "ajans_fikri",
          "anlati_mi": false,
          "kaynaklar": [
            "K68",
            "K69"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Halide Edib Batı Cephesi'nde onbaşı olarak görev alır.",
          "gorsel": "cephede",
          "anlati_mi": false,
          "kaynaklar": [
            "K65",
            "K73"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "Çizimdeki üniforma temsilîdir."
        }
      ],
      "mini_oyun": {
        "modul": "seslen",
        "ad": "Kalabalığa Seslen",
        "aciklama": "Meydandaki kalabalığa bir konuşma hazırla. Doğru sözleri seç ve sıraya diz.",
        "secilecek": 5,
        "kartlar": [
          {
            "metin": "Kardeşlerim, bugün burada hep birlikteyiz!",
            "tur": "uygun",
            "yer": "acilis"
          },
          {
            "metin": "İzmir'in işgalini kabul etmiyoruz!",
            "tur": "uygun"
          },
          {
            "metin": "Birlik olursak kimse bizi yıkamaz.",
            "tur": "uygun"
          },
          {
            "metin": "Bu millet bağımsızlığından vazgeçmez.",
            "tur": "uygun"
          },
          {
            "metin": "Hep birlikte söz verelim: Bu vatanı savunacağız!",
            "tur": "uygun",
            "yer": "kapanis"
          },
          {
            "metin": "Bugün hava çok güzel, pikniğe gidelim.",
            "tur": "konu_disi",
            "neden": "Bu söz konu dışı: miting işgali protesto etmek için toplandı."
          },
          {
            "metin": "Çarşıda kumaş fiyatları çok arttı.",
            "tur": "konu_disi",
            "neden": "Bu söz konu dışı: miting işgali protesto etmek için toplandı."
          },
          {
            "metin": "Bu haberi hemen telefonla bütün dünyaya duyuralım!",
            "tur": "cag_disi",
            "neden": "Bu söz çağına uymuyor: o yıllarda haberler telgrafla ve gazeteyle yayılırdı."
          },
          {
            "metin": "Bu konuşmayı internetten canlı yayımlayalım!",
            "tur": "cag_disi",
            "neden": "Bu söz çağına uymuyor: 1919'da internet yoktu."
          },
          {
            "metin": "Televizyonlar bu mitingi akşam haberlerinde göstersin!",
            "tur": "cag_disi",
            "neden": "Bu söz çağına uymuyor: 1919'da televizyon yoktu."
          }
        ],
        "kazanim": "Her söz kendi çağına ve konusuna göre söylenir.",
        "not": "Cümle kartları oyun için özgün olarak yazıldı; gerçek konuşmadan alıntı değildir. Senaryoda yalnızca 'telefon' örneği vardı. Kazanım cümlesi senaryodaki 'tarihsel bağlam ve dönem düşüncesi' ifadesinden sadeleştirildi. Ekip kartları gözden geçirip onaylamalı."
      },
      "roportaj": {
        "secilecek": 3,
        "konusan_notu": "",
        "sorular": [
          {
            "soru": "Sultanahmet'te kalabalığa ne söylediniz?",
            "cevap": "İşgalin haksızlığını anlattım. Davamızın Türkiye'nin hakkı ve istiklali olduğunu söyledim. Sonunda hep birlikte, hiçbir kuvvete boyun eğmeyeceğimize yemin ettik.",
            "altin_bilgi": 0,
            "kaynaklar": [
              "K66",
              "K65"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          },
          {
            "soru": "İstanbul'dan Anadolu'ya nasıl geçtiniz?",
            "cevap": "İstanbul 16 Mart 1920'de işgal edilince eşim Dr. Adnan Bey'le birlikte Anadolu'ya geçtim. Yolda, Akhisar İstasyonu'nda Yunus Nadi Bey'le buluştum. Nisan 1920 başında Ankara'ya vardık.",
            "altin_bilgi": 1,
            "kaynaklar": [
              "K73",
              "K64",
              "K68",
              "K71"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          },
          {
            "soru": "Ajans kurmak neden gerekliydi?",
            "cevap": "Anadolu, olup bitenlerden yeterince haber alamıyordu. Yanlış haberlere ve kışkırtmalara karşı milleti uyanık tutmak gerekiyordu. Alınan kararları da halka vaktinde duyurmalıydık.",
            "altin_bilgi": 1,
            "kaynaklar": [
              "K68",
              "K69"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          },
          {
            "soru": "Cephede ne gördünüz?",
            "cevap": "Sakarya Savaşı sırasında onbaşı olarak Batı Cephesi'nde görev yaptım. Birliklerin asker, cephane ve silah durumunu raporlara yazdım. Sonra köyleri dolaşıp halkın gördüğü zararı inceledim ve raporladım.",
            "altin_bilgi": 2,
            "kaynaklar": [
              "K65",
              "K64",
              "K73"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          }
        ]
      },
      "haber": {
        "sablon": "Halide Edib Hanım, {0} Mitingi'nde {1}'in işgalini protesto etti. Daha sonra {2}'nın kuruluşunda rol aldı.",
        "dogrular": [
          "Sultanahmet",
          "İzmir",
          "Anadolu Ajansı"
        ],
        "celdiriciler": [
          "Erzurum",
          "Antep",
          "Sebilürreşad"
        ],
        "ipucu_bilgi": [
          0,
          0,
          1
        ]
      },
      "biliyor_muydun": {
        "metin": "\"Ateşten Gömlek\" romanı Millî Mücadele yıllarını anlatır ve sinemaya da uyarlanmıştır.",
        "dogrulandi": false,
        "bonus_soru": {
          "soru": "Halide Edib'in Millî Mücadele yıllarını anlattığı romanın adı nedir?",
          "secenekler": [
            "Safahat",
            "Ateşten Gömlek",
            "Yeni Gün"
          ],
          "dogru": 1,
          "not": "Bu soru senaryo belgesinde yoktu; 'Biliyor muydun?' metninden türetildi. Ekip onaylamalı."
        },
        "kaynaklar": [
          "K73",
          "K72",
          "K74"
        ],
        "dogrula_notu": "Sinema uyarlaması tek kaynakta bulundu; ikinci kaynak aranmalı."
      },
      "duygu_ani": "Bir kadının sesinin bir meydanı doldurması.",
      "portre": {
        "dosya": "",
        "cizim": "siyah_ortulu",
        "temsili": true,
        "not": "Senaryoya göre fotoğrafı bulunan kahramanlarda gerçek fotoğrafın stilize hâli kullanılacak. Fotoğraf eklenene kadar temsilî çizim duruyor."
      }
    },
    {
      "id": "yunus-nadi",
      "hazir": true,
      "ad": "Yunus Nadi",
      "baslik": "İlk Haber",
      "alan": "basin",
      "alan_etiketi": "Basın-yayın",
      "konum": {
        "ad": "Ankara",
        "harita_x": 0.377,
        "harita_y": 0.367
      },
      "tarih_etiketi": "Nisan 1920",
      "tarih_dogrulandi": false,
      "altin_bilgiler": [
        {
          "metin": "Gazetecidir. Halide Edib ile birlikte Anadolu Ajansı'nın kurulmasına öncülük etti. Ajans 6 Nisan 1920'de kuruldu.",
          "kaynaklar": [
            "K77",
            "K84",
            "K69",
            "K81",
            "K79",
            "K87",
            "K80",
            "K86"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Ankara'da \"Anadolu'da Yeni Gün\" gazetesini çıkararak Millî Mücadele'yi halka duyurdu.",
          "kaynaklar": [
            "K77",
            "K78",
            "K85"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "\"Yeni Gün\" aynı gazetenin 1918'de İstanbul'da çıkan adıdır. Ankara'daki çıkış günü kaynaklarda bir gün farkla çelişiyor; gün verilmedi."
        },
        {
          "metin": "Ajansın amacı, Millî Mücadele haberlerini doğru ve hızlı biçimde Anadolu'ya ve dünyaya ulaştırmaktı.",
          "kaynaklar": [
            "K79",
            "K81",
            "K77",
            "K83",
            "K82"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        }
      ],
      "paneller": [
        {
          "metin": "Ankara'ya giden tren yolunda bir istasyon molası. Yunus Nadi ve Halide Edib bir haber ajansı kurmayı konuşuyor.",
          "gorsel": "istasyon",
          "anlati_mi": false,
          "kaynaklar": [
            "K79",
            "K69",
            "K82"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "İstasyonun adı (Geyve'nin Akhisar istasyonu) yalnızca ajansın kendi sayfalarında geçiyor; ad verilmedi."
        },
        {
          "metin": "İşgal altındaki basın gerçeği yazamıyor. Milletin kendi haber kaynağı olmalıdır.",
          "gorsel": "kendi_sesi",
          "anlati_mi": false,
          "kaynaklar": [
            "K79",
            "K81"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Ajansın adı konur: Anadolu Ajansı.",
          "gorsel": "ajans_adi",
          "anlati_mi": false,
          "kaynaklar": [
            "K79",
            "K69",
            "K82"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Telgrafhane. Ajansın haberleri Ankara dışına telgrafla gönderilir.",
          "gorsel": "ilk_haber",
          "anlati_mi": false,
          "kaynaklar": [
            "K79",
            "K81",
            "K69"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        }
      ],
      "mini_oyun": {
        "modul": "telgrafhane",
        "ad": "Telgrafhane",
        "aciklama": "Önce haberleri ayıkla: kaynağı belli olanı gönder, söylentiyi çöpe at. Sonra haberi telgrafla Anadolu'ya ulaştır.",
        "kartlar_kurgusal": true,
        "kartlar": [
          {
            "metin": "Maraş halkı direndi, şehir kurtuldu.",
            "kaynak": "Maraş'tan gelen resmî telgraf",
            "tur": "kaynakli"
          },
          {
            "metin": "Antep halkı şehrini savunuyor.",
            "kaynak": "Antep'teki muhabirin mektubu",
            "tur": "kaynakli"
          },
          {
            "metin": "İnebolu'dan yola çıkan cephane kolları cepheye ilerliyor.",
            "kaynak": "İnebolu telgrafhanesi",
            "tur": "kaynakli"
          },
          {
            "metin": "Duyduğuma göre Ankara'da kimse kalmamış.",
            "kaynak": "",
            "tur": "soylenti"
          },
          {
            "metin": "Bir yolcu söylemiş: Direniş bitmiş.",
            "kaynak": "",
            "tur": "soylenti"
          },
          {
            "metin": "Herkes diyor ki yardım hiç gelmeyecek.",
            "kaynak": "",
            "tur": "soylenti"
          }
        ],
        "telgraflar": [
          {
            "metin": "Maraş halkı direndi, şehir kurtuldu."
          },
          {
            "metin": "İnebolu'dan yola çıkan cephane kolları cepheye ilerliyor."
          },
          {
            "metin": "Anadolu Ajansı bugünden itibaren göreve başlıyor. Millete en doğru haberler buradan duyurulacak.",
            "etiket": "Ajansın ilk bülteninden (sadeleştirilmiş, temsilî)"
          }
        ],
        "kazanim": "Bir haberi yaymadan önce kaynağına bakılır.",
        "not": "Haber kartları ve kaynak adları kurgusaldır; oyun için yazıldı. Son telgraf, ajansın kendi sayfasında günümüz Türkçesiyle verilen ilk bülten cümlesinden sadeleştirildi (tek kurum kaynağı; ekip onayına kadar \"temsilî\"). Telgraf işaretleri gerçek Mors kodu değildir. Ekip onaylamalı."
      },
      "roportaj": {
        "secilecek": 3,
        "konusan_notu": "",
        "sorular": [
          {
            "soru": "Anadolu Ajansı'nı neden kurdunuz?",
            "cevap": "Millî Mücadele'nin sesini Anadolu'ya ve yurt dışına duyurmak istiyorduk. Halkın en doğru haberlerle aydınlanması gerekiyordu. Bu amaçla Halide Edib Hanım'la birlikte çalıştık ve ajans 6 Nisan 1920'de kuruldu.",
            "altin_bilgi": 2,
            "kaynaklar": [
              "K79",
              "K77",
              "K81"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          },
          {
            "soru": "Ajansın haberleri halka nasıl ulaşıyordu?",
            "cevap": "Ajans, kurulduktan birkaç gün sonra, Nisan 1920'de ilk haberlerini vermeye başladı. Bültenler daktiloyla yazılıp çoğaltılıyor, Ankara'da duvarlara asılıyordu. Ankara dışına ise telgrafla ulaştırılıyordu.",
            "altin_bilgi": 0,
            "kaynaklar": [
              "K80",
              "K82",
              "K79",
              "K81"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": "",
            "not": "Senaryodaki soru (\"İlk haberi nasıl gönderdiniz?\") değiştirildi: ilk haberi bizzat Yunus Nadi'nin gönderdiğini söyleyen kaynak yok."
          },
          {
            "soru": "Gazeteci olmak Millî Mücadele'de neden önemliydi?",
            "cevap": "Halkın Millî Mücadele'yi doğru haberlerle öğrenmesi gerekiyordu. Ben de Ankara'da \"Anadolu'da Yeni Gün\" gazetesini çıkardım. Yazılarımda bu mücadelenin amacını ve gerekliliğini anlattım.",
            "altin_bilgi": 1,
            "kaynaklar": [
              "K79",
              "K77",
              "K78"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          }
        ]
      },
      "haber": {
        "sablon": "{0} tarihinde kurulan {1}, Millî Mücadele'nin sesini dünyaya duyurdu. Yunus Nadi Ankara'da {2} gazetesini çıkardı.",
        "dogrular": [
          "6 Nisan 1920",
          "Anadolu Ajansı",
          "Anadolu'da Yeni Gün"
        ],
        "celdiriciler": [
          "23 Nisan 1920",
          "Sebilürreşad",
          "Ateşten Gömlek"
        ],
        "ipucu_bilgi": [
          0,
          0,
          1
        ]
      },
      "biliyor_muydun": {
        "metin": "Anadolu Ajansı bugün de çalışıyor. Türkiye'nin en köklü haber ajansıdır.",
        "dogrulandi": false,
        "kaynaklar": [
          "K80",
          "K83"
        ],
        "kaynak_durumu": "iki_kaynak",
        "dogrula_notu": "\"Resmî haber ajansı\" ifadesi güvenilir kaynakla desteklenmedi; çıkarıldı.",
        "bonus_soru": {
          "soru": "Anadolu Ajansı bugün ne olarak çalışıyor?",
          "secenekler": [
            "Haber ajansı",
            "Tren istasyonu",
            "Matbaa"
          ],
          "dogru": 0,
          "not": "Bu soru 'Biliyor muydun?' metninden türetildi. Ekip onaylamalı."
        }
      },
      "duygu_ani": "Bir istasyonda konuşan iki kişinin bir milletin sesini kurması.",
      "portre": {
        "dosya": "",
        "cizim": "fesli",
        "temsili": true,
        "not": "Fotoğraf eklenene kadar temsilî çizim duruyor."
      }
    },
    {
      "id": "mehmet-akif",
      "hazir": true,
      "ad": "Mehmet Âkif Ersoy",
      "baslik": "Matbaadan Marşa",
      "alan": "basin",
      "alan_etiketi": "Basın-yayın",
      "konum": {
        "ad": "Kastamonu",
        "harita_x": 0.45,
        "harita_y": 0.19
      },
      "tarih_etiketi": "1920–1921",
      "tarih_dogrulandi": false,
      "altin_bilgiler": [
        {
          "metin": "Kastamonu Nasrullah Camii'nde verdiği vaazla halkı Millî Mücadele'yi desteklemeye çağırdı (1920). Bu vaaz \"Sebilürreşad\" dergisinde basılarak geniş kitlelere ulaştı.",
          "kaynaklar": [
            "K90",
            "K93",
            "K92",
            "K94",
            "K89"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "Vaazın günü kaynaklarda çelişkili; yalnızca yıl verildi."
        },
        {
          "metin": "Burdur milletvekili olarak TBMM'de görev yaptı.",
          "kaynaklar": [
            "K89",
            "K93",
            "K94"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "İstiklal Marşı'nı yazdı. Marş 12 Mart 1921'de TBMM'de kabul edildi.",
          "kaynaklar": [
            "K89",
            "K93",
            "K91",
            "K94",
            "K95"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        }
      ],
      "paneller": [
        {
          "metin": "Kastamonu, Nasrullah Camii. Âkif kürsüde, halk onu dikkatle dinliyor.",
          "gorsel": "vaaz",
          "anlati_mi": false,
          "kaynaklar": [
            "K90",
            "K92",
            "K93"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Vaaz kâğıda geçer, matbaada dizilir.",
          "gorsel": "dizgi",
          "anlati_mi": false,
          "kaynaklar": [
            "K89",
            "K92"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Sebilürreşad nüshaları Anadolu'ya dağılır, cepheye kadar ulaşır.",
          "gorsel": "dergi_dagilim",
          "anlati_mi": false,
          "kaynaklar": [
            "K90",
            "K92",
            "K93",
            "K89"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "Ankara, Taceddin Dergâhı. Âkif marşı yazar; ödülü kendine almaz, bir hayır kurumuna bağışlar.",
          "gorsel": "mars_yazim",
          "anlati_mi": false,
          "kaynaklar": [
            "K91",
            "K93",
            "K89",
            "K95"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false
        },
        {
          "metin": "12 Mart 1921: Marş kabul edilir. Meclis ayakta.",
          "gorsel": "meclis",
          "anlati_mi": false,
          "kaynaklar": [
            "K89",
            "K93",
            "K91"
          ],
          "kaynak_durumu": "iki_kaynak",
          "dogrulandi": false,
          "dogrula_notu": "Kaynaklara göre marşı kürsüden Hamdullah Suphi Bey okudu; çizimde kürsüdeki kişi Âkif değildir."
        }
      ],
      "mini_oyun": {
        "modul": "murettip",
        "ad": "Mürettip",
        "aciklama": "Eski bir matbaadasın. Harf kalıplarıyla manşeti diz, sonra sayfayı bas.",
        "manset": "BİRLİK",
        "celdirici_harfler": [
          "A",
          "M",
          "S"
        ],
        "dergi": "Sebilürreşad",
        "baski_konu": "Kastamonu Nasrullah Camii vaazı",
        "mars": {
          "baslik": "İstiklal Marşı",
          "kitalar": [
            [
              "Korkma, sönmez bu şafaklarda yüzen al sancak;",
              "Sönmeden yurdumun üstünde tüten en son ocak.",
              "O benim milletimin yıldızıdır, parlayacak;",
              "O benimdir, o benim milletimindir ancak."
            ],
            [
              "Çatma, kurban olayım çehreni ey nazlı hilâl!",
              "Kahraman ırkıma bir gül… ne bu şiddet bu celâl?",
              "Sana olmaz dökülen kanlarımız sonra helâl,",
              "Hakkıdır, Hakk’a tapan, milletimin istiklâl."
            ]
          ],
          "kaynak": "T.C. Cumhurbaşkanlığı, İstiklâl Marşı metni, https://tccb.gov.tr/assets/dosya/istiklalmarsi_metin.pdf (erişim: 2026-10-03)",
          "not": "Dizeler T.C. Cumhurbaşkanlığı'nın resmî sitesindeki metinden noktalama işaretleriyle birlikte aynen alındı (3 Ekim 2026). Ekip, basılı bir resmî kaynakla (ör. MEB ders kitabı) bir kez karşılaştırmalı."
        },
        "kazanim": "Basılan söz, geniş kitlelere ulaşır.",
        "not": "Manşet sözcüğü (BİRLİK) derginin gerçek başlığı değildir; vaazın konusudur (iki kaynak). Gerçek başlık tek kaynağa göre \"Nasrullah Kürsüsünde\"dir. Ekip onaylamalı.",
        "manset_etiketi": "Vaazın konusu"
      },
      "roportaj": {
        "secilecek": 3,
        "konusan_notu": "",
        "sorular": [
          {
            "soru": "Kastamonu'da halka ne anlattınız?",
            "cevap": "Nasrullah Camii'nde halka Sevr Antlaşması'nı anlattım. Bu antlaşmanın bizim için nasıl bir felaket olduğunu söyledim. Herkesi işgale karşı birlik içinde mücadele etmeye çağırdım.",
            "altin_bilgi": 0,
            "kaynaklar": [
              "K90",
              "K92",
              "K94"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          },
          {
            "soru": "Bir dergi Millî Mücadele'ye nasıl yardım eder?",
            "cevap": "Vaazım Sebilürreşad dergisinin Kastamonu'da basılan sayısında çıktı. Bu sayı valilere ve müftülere gönderildi, camilerde okundu. Sonra çoğaltılıp Anadolu'ya ve cephelere dağıtıldı.",
            "altin_bilgi": 0,
            "kaynaklar": [
              "K89",
              "K90",
              "K92"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          },
          {
            "soru": "İstiklal Marşı'nı yazarken neler hissettiniz?",
            "cevap": "Anlatılanlara göre marşı yazarken saatlerce derin derin düşünürdüm. Marşı kahraman ordumuza ithaf ettim. Ödülü kendime almadım, yoksul kadın ve çocuklara iş öğreten bir hayır kurumuna bağışladım.",
            "altin_bilgi": 2,
            "kaynaklar": [
              "K93",
              "K89",
              "K91"
            ],
            "taslak": true,
            "dogrulayan": "",
            "dogrulama_tarihi": ""
          }
        ]
      },
      "haber": {
        "sablon": "Mehmet Âkif, Kastamonu {0} Camii'ndeki vaazıyla halkı birliğe çağırdı. Vaaz {1} dergisinde yayımlandı. İstiklal Marşı {2}'de kabul edildi.",
        "dogrular": [
          "Nasrullah",
          "Sebilürreşad",
          "12 Mart 1921"
        ],
        "celdiriciler": [
          "Uzunoluk",
          "Yeni Gün",
          "29 Ekim 1923"
        ],
        "ipucu_bilgi": [
          0,
          0,
          2
        ]
      },
      "biliyor_muydun": {
        "metin": "Âkif, İstiklal Marşı'nı Safahat'ına koymadı. Onu milletin eseri saydığını söylediği anlatılır.",
        "dogrulandi": false,
        "bonus_soru": {
          "soru": "Âkif, İstiklal Marşı'nı hangi kitabına koymadı?",
          "secenekler": [
            "Safahat",
            "Ateşten Gömlek",
            "Yeni Gün"
          ],
          "dogru": 0,
          "not": "Bu soru senaryo belgesinde yoktu; 'Biliyor muydun?' metninden türetildi. Ekip onaylamalı."
        },
        "kaynaklar": [
          "K91",
          "K93",
          "K95"
        ],
        "dogrula_notu": "Marşı Safahat'a almadığı iki kaynakta var. Gerekçe olarak aktarılan söz kaynaklarda farklı; \"anlatılır\" kalıbı korundu."
      },
      "duygu_ani": "Meclisin ayağa kalkıp marşı dinlediği an.",
      "portre": {
        "dosya": "",
        "cizim": "kalpakli_sakalli",
        "temsili": true,
        "not": "Fotoğraf eklenene kadar temsilî çizim duruyor."
      }
    }
  ]
};
