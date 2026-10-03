window.IP_BULTEN = {
  "surum": "0.1-taslak",
  "aciklama": "Ajans Bültenlerinin soruları bu dosyadan gelir. Sorular heroes.json dosyasındaki Altın Bilgilerden türetilir. 'dogrulandi': false olan bülten TASLAKTIR. Bu dosyayı değiştirdikten sonra 'araclar/veri-paketle.bat' dosyasını çalıştırın. Soru türleri: 'dy' (doğru/yanlış), 'bosluk' (boşluk doldurma), 'eslestir' (eşleştirme).",
  "bultenler": [
    {
      "no": 1,
      "ad": "Ajans Bülteni 1",
      "sonra": "tayyar-rahmiye",
      "nuri": "Ajans bülteni çıkıyor, haberleri kontrol et!",
      "dogrulandi": false,
      "not": "Sorular senaryo belgesinde yoktu; ilk üç kahramanın Altın Bilgilerinden ve senaryodaki çeldiricilerden türetildi. 3 Ekim 2026'daki kaynak taramasına göre düzeltildi. Ekip onaylamalı. Başarı testindeki sorular bunlarla birebir aynı olmamalı.",
      "sorular": [
        {
          "tur": "dy",
          "kahraman": "sutcu-imam",
          "ifade": "Sütçü İmam, Maraş'ta Fransız işgaline karşı direnişi başlatan halk kahramanıdır.",
          "dogru": true
        },
        {
          "tur": "bosluk",
          "kahraman": "sahin-bey",
          "sablon": "Antep'in direnişi nedeniyle TBMM şehre {0} unvanını verdi.",
          "dogru": "Gazi",
          "celdiriciler": [
            "Kahraman",
            "Şanlı"
          ]
        },
        {
          "tur": "dy",
          "kahraman": "tayyar-rahmiye",
          "ifade": "\"Tayyar\" lakabı Rahmiye'ye Maraşlı olduğu için verilmiştir.",
          "dogru": false,
          "aciklama": "\"Tayyar\" lakabı, bir çarpışmadaki cesareti nedeniyle verilmiştir."
        },
        {
          "tur": "eslestir",
          "yonerge": "Her kahramanı doğru ipucuyla eşleştir.",
          "ciftler": [
            {
              "sol": "Sütçü İmam",
              "sag": "Uzunoluk Hamamı",
              "kahraman": "sutcu-imam"
            },
            {
              "sol": "Şahin Bey",
              "sag": "Kilis–Antep yolu",
              "kahraman": "sahin-bey"
            },
            {
              "sol": "Tayyar Rahmiye",
              "sag": "Osmaniye'nin kadın kahramanı",
              "kahraman": "tayyar-rahmiye"
            }
          ]
        },
        {
          "tur": "bosluk",
          "kahraman": "sutcu-imam",
          "sablon": "Halkın direnişi sonunda Maraş {0} tarihinde kurtuldu.",
          "dogru": "12 Şubat 1920",
          "celdiriciler": [
            "9 Eylül 1922",
            "6 Nisan 1920"
          ]
        },
        {
          "tur": "dy",
          "kahraman": "sahin-bey",
          "ifade": "Şahin Bey, İzmir–Aydın yolunda Fransız kuvvetlerini durdurmak için savaştı.",
          "dogru": false,
          "aciklama": "Şahin Bey, Kilis–Antep yolunda savaştı."
        },
        {
          "tur": "bosluk",
          "kahraman": "sutcu-imam",
          "sablon": "Sütçü İmam'ın {0} önünde Maraşlı kadınlara yapılan saldırıya karşı çıkması direnişin kıvılcımı oldu.",
          "dogru": "Uzunoluk Hamamı",
          "celdiriciler": [
            "İnebolu İskelesi",
            "Nasrullah Camii"
          ]
        },
        {
          "tur": "bosluk",
          "kahraman": "tayyar-rahmiye",
          "sablon": "Tayyar Rahmiye'nin memleketi: {0}.",
          "dogru": "Osmaniye",
          "celdiriciler": [
            "Erzurum",
            "Kastamonu"
          ]
        }
      ]
    },
    {
      "no": 2,
      "ad": "Ajans Bülteni 2",
      "sonra": "serife-baci",
      "nuri": "Ajans bülteni çıkıyor, haberleri kontrol et!",
      "dogrulandi": false,
      "not": "Sorular senaryo belgesinde yoktu; ilk yedi kahramanın Altın Bilgilerinden ve senaryodaki çeldiricilerden türetildi. 3 Ekim 2026'daki kaynak taramasına göre düzeltildi. Ekip onaylamalı. Başarı testindeki sorular bunlarla birebir aynı olmamalı.",
      "sorular": [
        {
          "tur": "dy",
          "kahraman": "kara-fatma",
          "ifade": "Kara Fatma Erzurumludur ve asıl adı Fatma Seher'dir.",
          "dogru": true
        },
        {
          "tur": "bosluk",
          "kahraman": "gordesli-makbule",
          "sablon": "Gördesli Makbule, {0} birliklerinde işgale karşı savaştı.",
          "dogru": "Kuvâ-yi Milliye",
          "celdiriciler": [
            "Anadolu Ajansı",
            "İnebolu İskelesi"
          ]
        },
        {
          "tur": "dy",
          "kahraman": "halime-cavus",
          "ifade": "Halime Çavuş Erzurumludur.",
          "dogru": false,
          "aciklama": "Halime Çavuş Kastamonuludur."
        },
        {
          "tur": "eslestir",
          "yonerge": "Her kahramanı kendi şehriyle eşleştir.",
          "ciftler": [
            {
              "sol": "Sütçü İmam",
              "sag": "Maraş",
              "kahraman": "sutcu-imam"
            },
            {
              "sol": "Kara Fatma",
              "sag": "Erzurum",
              "kahraman": "kara-fatma"
            },
            {
              "sol": "Gördesli Makbule",
              "sag": "Gördes",
              "kahraman": "gordesli-makbule"
            },
            {
              "sol": "Halime Çavuş",
              "sag": "Kastamonu",
              "kahraman": "halime-cavus"
            }
          ]
        },
        {
          "tur": "bosluk",
          "kahraman": "serife-baci",
          "sablon": "Şerife Bacı, {0} İskelesi'ne gelen cephaneyi kağnılarla taşıyan kadınlardandır.",
          "dogru": "İnebolu",
          "celdiriciler": [
            "İzmir",
            "Maraş"
          ]
        },
        {
          "tur": "dy",
          "kahraman": "sahin-bey",
          "ifade": "Şahin Bey, halktan gönüllülerle oluşan bir Kuvâ-yi Milliye birliğinin başındaydı.",
          "dogru": true
        },
        {
          "tur": "bosluk",
          "kahraman": "kara-fatma",
          "sablon": "Kara Fatma, Batı Cephesi'nde {0} rütbesine kadar yükseldi.",
          "dogru": "üsteğmen",
          "celdiriciler": [
            "paşa",
            "amiral"
          ]
        },
        {
          "tur": "dy",
          "kahraman": "tayyar-rahmiye",
          "ifade": "Tayyar Rahmiye, Maraş'ta işgale karşı çarpıştı.",
          "dogru": false,
          "aciklama": "Tayyar Rahmiye, Osmaniye'de işgale karşı çarpıştı."
        }
      ]
    },
    {
      "no": 3,
      "ad": "Büyük Bülten",
      "sonra": "final",
      "nuri": "Son bülten: on kahramanın haberlerini bir kez daha kontrol et!",
      "dogrulandi": false,
      "not": "Sorular senaryo belgesinde yoktu; on kahramanın Altın Bilgilerinden ve senaryodaki çeldiricilerden türetildi. 3 Ekim 2026'daki kaynak taramasına göre düzeltildi. Ekip onaylamalı. Bu bülten araştırmadaki başarı testi DEĞİLDİR; başarı testindeki sorular bunlarla birebir aynı olmamalı.",
      "sorular": [
        {
          "tur": "dy",
          "kahraman": "sutcu-imam",
          "ifade": "Maraş, halkın direnişi sonunda 12 Şubat 1920'de kurtuldu.",
          "dogru": true
        },
        {
          "tur": "bosluk",
          "kahraman": "sahin-bey",
          "sablon": "Şahin Bey, {0} yolunda işgal kuvvetlerini durdurmak için savaştı.",
          "dogru": "Kilis–Antep",
          "celdiriciler": [
            "İzmir–Aydın",
            "İnebolu–Kastamonu"
          ]
        },
        {
          "tur": "dy",
          "kahraman": "tayyar-rahmiye",
          "ifade": "Tayyar Rahmiye, Osmaniye'de işgale karşı erkeklerle birlikte çarpışan bir kadın kahramandır.",
          "dogru": true
        },
        {
          "tur": "bosluk",
          "kahraman": "kara-fatma",
          "sablon": "Kara Fatma, gönüllülerden oluşan bir {0} kurdu.",
          "dogru": "milis müfrezesi",
          "celdiriciler": [
            "gazete",
            "haber ajansı"
          ]
        },
        {
          "tur": "dy",
          "kahraman": "gordesli-makbule",
          "ifade": "Gördesli Makbule, Erzurum'un bir ilçesindendir.",
          "dogru": false,
          "aciklama": "Gördesli Makbule, Manisa'nın Gördes ilçesindendir."
        },
        {
          "tur": "bosluk",
          "kahraman": "halime-cavus",
          "sablon": "Halime Çavuş cephaneyi {0} ile taşıdı.",
          "dogru": "kağnı",
          "celdiriciler": [
            "gemi",
            "uçak"
          ]
        },
        {
          "tur": "dy",
          "kahraman": "serife-baci",
          "ifade": "Şerife Bacı, cephaneyi İnebolu'dan trenle taşıyan kadınlardandır.",
          "dogru": false,
          "aciklama": "Şerife Bacı, cephaneyi kağnılarla taşıyan kadınlardandır."
        },
        {
          "tur": "eslestir",
          "yonerge": "Basın-yayın kahramanlarını eserleriyle eşleştir.",
          "ciftler": [
            {
              "sol": "Halide Edib Adıvar",
              "sag": "\"Ateşten Gömlek\" romanı",
              "kahraman": "halide-edib"
            },
            {
              "sol": "Yunus Nadi",
              "sag": "\"Anadolu'da Yeni Gün\" gazetesi",
              "kahraman": "yunus-nadi"
            },
            {
              "sol": "Mehmet Âkif Ersoy",
              "sag": "İstiklal Marşı",
              "kahraman": "mehmet-akif"
            }
          ]
        },
        {
          "tur": "bosluk",
          "kahraman": "yunus-nadi",
          "sablon": "Anadolu Ajansı {0} tarihinde kuruldu.",
          "dogru": "6 Nisan 1920",
          "celdiriciler": [
            "12 Mart 1921",
            "12 Şubat 1920"
          ]
        },
        {
          "tur": "dy",
          "kahraman": "mehmet-akif",
          "ifade": "İstiklal Marşı 12 Mart 1921'de TBMM'de kabul edildi.",
          "dogru": true
        },
        {
          "tur": "dy",
          "kahraman": "halide-edib",
          "ifade": "Halide Edib, Sultanahmet Mitingi'nde İzmir'in işgalini protesto eden bir konuşma yaptı.",
          "dogru": true
        },
        {
          "tur": "dy",
          "kahraman": "mehmet-akif",
          "ifade": "Mehmet Âkif'in Kastamonu'daki vaazı \"Yeni Gün\" gazetesinde basıldı.",
          "dogru": false,
          "aciklama": "Vaaz \"Sebilürreşad\" dergisinde basıldı."
        },
        {
          "tur": "eslestir",
          "yonerge": "Her kahramanı doğru ipucuyla eşleştir.",
          "ciftler": [
            {
              "sol": "Sütçü İmam",
              "sag": "Uzunoluk Hamamı",
              "kahraman": "sutcu-imam"
            },
            {
              "sol": "Şerife Bacı",
              "sag": "İnebolu İskelesi",
              "kahraman": "serife-baci"
            },
            {
              "sol": "Mehmet Âkif Ersoy",
              "sag": "Nasrullah Camii",
              "kahraman": "mehmet-akif"
            },
            {
              "sol": "Gördesli Makbule",
              "sag": "Kocayayla",
              "kahraman": "gordesli-makbule"
            }
          ]
        },
        {
          "tur": "bosluk",
          "kahraman": "kara-fatma",
          "sablon": "Kara Fatma, {0} Cephesi'nde savaştı.",
          "dogru": "Batı",
          "celdiriciler": [
            "Doğu",
            "Güney"
          ]
        },
        {
          "tur": "dy",
          "kahraman": "halime-cavus",
          "ifade": "Halime Çavuş, hizmetleri nedeniyle İstiklal Madalyası aldı.",
          "dogru": true
        }
      ]
    }
  ]
};
