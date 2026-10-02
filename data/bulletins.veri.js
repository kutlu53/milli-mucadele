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
      "not": "Sorular senaryo belgesinde yoktu; ilk üç kahramanın Altın Bilgilerinden ve senaryodaki çeldiricilerden türetildi. Ekip onaylamalı. Başarı testindeki sorular bunlarla birebir aynı olmamalı.",
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
          "celdiriciler": ["Kahraman", "Şanlı"]
        },
        {
          "tur": "dy",
          "kahraman": "tayyar-rahmiye",
          "ifade": "\"Tayyar\" lakabı Rahmiye'ye Maraşlı olduğu için verilmiştir.",
          "dogru": false,
          "aciklama": "\"Tayyar\" lakabı hızı ve cesaretinden dolayı verilmiştir."
        },
        {
          "tur": "eslestir",
          "yonerge": "Her kahramanı doğru ipucuyla eşleştir.",
          "ciftler": [
            { "sol": "Sütçü İmam", "sag": "Uzunoluk Hamamı", "kahraman": "sutcu-imam" },
            { "sol": "Şahin Bey", "sag": "Kilis–Antep yolu", "kahraman": "sahin-bey" },
            { "sol": "Tayyar Rahmiye", "sag": "Antep savunmasının kadın kahramanı", "kahraman": "tayyar-rahmiye" }
          ]
        },
        {
          "tur": "bosluk",
          "kahraman": "sutcu-imam",
          "sablon": "Halkın direnişi sonunda Maraş {0} tarihinde kurtuldu.",
          "dogru": "12 Şubat 1920",
          "celdiriciler": ["9 Eylül 1922", "6 Nisan 1920"]
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
          "celdiriciler": ["İnebolu İskelesi", "Nasrullah Camii"]
        },
        {
          "tur": "bosluk",
          "kahraman": "tayyar-rahmiye",
          "sablon": "Tayyar Rahmiye, {0} savunması sırasında şehit düştü.",
          "dogru": "Antep",
          "celdiriciler": ["Maraş", "Erzurum"]
        }
      ]
    }
  ]
};
