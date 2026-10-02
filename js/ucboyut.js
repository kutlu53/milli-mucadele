/* 3 boyutlu sahneler: (1) telgraf masası, (2) Anadolu haritası.
   Yerel "lib/three.min.js" kütüphanesi kullanılır. Bilgisayar 3 boyutu desteklemezse
   IP.ucb.var = false olur ve oyun 2 boyutlu yedek görünümle devam eder. */
(function () {
  'use strict';
  var IP = window.IP, T = window.THREE;
  var ucb = IP.ucb = { var: false, aktif: null, onKare: null };
  var cizici, saat, sahneler = {}, kap;

  ucb.kur = function (kapsayici) {
    kap = kapsayici;
    if (!T) return;
    try {
      cizici = new T.WebGLRenderer({ antialias: true });
    } catch (e) { return; }
    cizici.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    cizici.shadowMap.enabled = true;
    cizici.shadowMap.type = T.PCFSoftShadowMap;
    cizici.outputEncoding = T.sRGBEncoding;
    kap.appendChild(cizici.domElement);
    saat = new T.Clock();
    ucb.var = true;
    sahneler.telgraf = telgrafKur();
    sahneler.harita = haritaKur();
    window.addEventListener('resize', boyutla);
    boyutla();
    requestAnimationFrame(kare);
  };

  // Hangi 3B sahnenin görüneceğini seçer: 'telgraf', 'harita' ya da null (kapalı).
  ucb.goster = function (ad) {
    ucb.aktif = ucb.var ? ad : null;
    kap.classList.toggle('acik', !!ucb.aktif);
    if (ucb.aktif) boyutla();
  };

  function boyutla() {
    if (!ucb.var) return;
    var w = window.innerWidth, h = window.innerHeight;
    cizici.setSize(w, h);
    Object.keys(sahneler).forEach(function (ad) {
      var s = sahneler[ad];
      s.kamera.aspect = w / h;
      s.kamera.updateProjectionMatrix();
      if (s.boyutla) s.boyutla(w / h);
    });
  }

  // Yavaş bilgisayarlarda (ör. eski akıllı tahta) görüntü kalitesi kendiliğinden düşürülür.
  var olcum = { kare: 0, toplam: 0, asama: 0 };
  function kaliteDusur() {
    olcum.asama++;
    if (olcum.asama === 1) {
      cizici.setPixelRatio(1);
      Object.keys(sahneler).forEach(function (ad) {
        sahneler[ad].sahne.traverse(function (n) { if (n.isLight) n.castShadow = false; });
      });
    } else if (olcum.asama === 2) cizici.setPixelRatio(0.7);
    boyutla();
  }

  function kare() {
    requestAnimationFrame(kare);
    var ham = saat.getDelta(), dt = Math.min(ham, 0.1), t = saat.elapsedTime;
    if (!ucb.aktif) return;
    if (olcum.asama < 2 && !document.hidden) {
      olcum.kare++;
      if (olcum.kare > 10) olcum.toplam += ham;
      if (olcum.kare === 50) {
        if (olcum.toplam / 40 > 0.045) kaliteDusur(); // saniyede ~22 kareden az
        olcum.kare = 0; olcum.toplam = 0;
      }
    }
    var s = sahneler[ucb.aktif];
    s.guncelle(dt, t);
    cizici.render(s.sahne, s.kamera);
    if (ucb.onKare) ucb.onKare();
  }

  /* ---------- Ortak yardımcılar ---------- */
  function tuvalDoku(w, h, ciz) {
    var tv = document.createElement('canvas'); tv.width = w; tv.height = h;
    ciz(tv.getContext('2d'), w, h);
    var d = new T.CanvasTexture(tv);
    d.encoding = T.sRGBEncoding;
    d.anisotropy = 4;
    return d;
  }

  function ahsapDoku(acik, koyu) {
    return tuvalDoku(512, 512, function (c, w, h) {
      c.fillStyle = acik; c.fillRect(0, 0, w, h);
      var rs = IP.tohumluRastgele(9);
      for (var i = 0; i < 260; i++) {
        c.strokeStyle = 'rgba(' + koyu + ',' + (0.05 + rs() * 0.22) + ')';
        c.lineWidth = 1 + rs() * 3;
        var y = rs() * h;
        c.beginPath(); c.moveTo(0, y);
        c.bezierCurveTo(w * 0.3, y + rs() * 14 - 7, w * 0.6, y + rs() * 14 - 7, w, y + rs() * 10 - 5);
        c.stroke();
      }
      for (var k = 1; k < 4; k++) { c.fillStyle = 'rgba(20,10,5,.5)'; c.fillRect(0, k * h / 4, w, 3); }
    });
  }

  // Yumuşak ışık lekesi (parıltı) dokusu.
  var parilti = null;
  function pariltiDoku() {
    if (!parilti) {
      parilti = tuvalDoku(128, 128, function (c) {
        var g = c.createRadialGradient(64, 64, 2, 64, 64, 64);
        g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.25, 'rgba(255,220,150,.6)'); g.addColorStop(1, 'rgba(255,200,100,0)');
        c.fillStyle = g; c.fillRect(0, 0, 128, 128);
      });
    }
    return parilti;
  }

  // Pirincin parlak görünmesi için basit bir "çevre yansıması".
  function cevreYansimasi() {
    var d = tuvalDoku(256, 128, function (c, w, h) {
      var g = c.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, '#fff1cc'); g.addColorStop(0.45, '#a0703a'); g.addColorStop(0.55, '#3a2412'); g.addColorStop(1, '#0d0805');
      c.fillStyle = g; c.fillRect(0, 0, w, h);
      c.fillStyle = '#fffbe8'; c.fillRect(40, 10, 50, 26); c.fillRect(170, 22, 30, 18);
    });
    d.mapping = T.EquirectangularReflectionMapping;
    var uretec = new T.PMREMGenerator(cizici);
    var sonuc = uretec.fromEquirectangular(d).texture;
    uretec.dispose(); d.dispose();
    return sonuc;
  }

  function tozBulutu(adet, genislik, yukseklik, derinlik, boy, renk) {
    var konum = new Float32Array(adet * 3);
    for (var i = 0; i < adet; i++) {
      konum[i * 3] = (Math.random() - 0.5) * genislik;
      konum[i * 3 + 1] = Math.random() * yukseklik;
      konum[i * 3 + 2] = (Math.random() - 0.5) * derinlik;
    }
    var g = new T.BufferGeometry();
    g.setAttribute('position', new T.BufferAttribute(konum, 3));
    var m = new T.PointsMaterial({ size: boy, map: pariltiDoku(), color: renk, transparent: true, opacity: 0.7, depthWrite: false, blending: T.AdditiveBlending });
    return new T.Points(g, m);
  }

  function golgeli(ag, alir) {
    ag.castShadow = true;
    if (alir) ag.receiveShadow = true;
    return ag;
  }

  /* ---------- Sahne 1: Telgraf masası ---------- */
  function telgrafKur() {
    var sahne = new T.Scene();
    sahne.background = new T.Color(0x0e0a07);
    sahne.fog = new T.Fog(0x0e0a07, 12, 30);
    sahne.environment = cevreYansimasi();
    var kamera = new T.PerspectiveCamera(36, 1, 0.1, 100);

    var pirinc = new T.MeshStandardMaterial({ color: 0xd4a94e, metalness: 1, roughness: 0.28, envMapIntensity: 1.3 });
    var koyuAhsap = new T.MeshStandardMaterial({ map: ahsapDoku('#5a3a22', '20,10,5'), roughness: 0.75, envMapIntensity: 0.15 });
    var siyah = new T.MeshStandardMaterial({ color: 0x16120f, roughness: 0.4, envMapIntensity: 0.4 });
    var bakir = new T.MeshStandardMaterial({ color: 0xa8502a, metalness: 0.8, roughness: 0.45 });

    // Masa
    var masaDoku = ahsapDoku('#6b4526', '25,12,5'); masaDoku.wrapS = masaDoku.wrapT = T.RepeatWrapping; masaDoku.repeat.set(2, 1);
    var masa = new T.Mesh(new T.BoxGeometry(26, 0.6, 14), new T.MeshStandardMaterial({ map: masaDoku, roughness: 0.85, envMapIntensity: 0.12 }));
    masa.position.y = -0.3; masa.receiveShadow = true; sahne.add(masa);

    // Telgraf maniplesi (tuşu)
    var telgraf = new T.Group(); sahne.add(telgraf);
    var taban = golgeli(new T.Mesh(new T.BoxGeometry(4.2, 0.34, 2.1), koyuAhsap), true); taban.position.y = 0.17; telgraf.add(taban);
    var plaka = golgeli(new T.Mesh(new T.BoxGeometry(3.6, 0.08, 1.4), pirinc), true); plaka.position.y = 0.38; telgraf.add(plaka);
    [-0.42, 0.42].forEach(function (z) {
      var d = golgeli(new T.Mesh(new T.BoxGeometry(0.28, 0.75, 0.14), pirinc)); d.position.set(0.3, 0.78, z); telgraf.add(d);
    });
    var mil = new T.Mesh(new T.CylinderGeometry(0.07, 0.07, 1.05, 12), pirinc); mil.rotation.x = Math.PI / 2; mil.position.set(0.3, 0.98, 0); telgraf.add(mil);
    var kol = new T.Group(); kol.position.set(0.3, 0.98, 0); telgraf.add(kol);
    var cubuk = golgeli(new T.Mesh(new T.BoxGeometry(3.3, 0.13, 0.3), pirinc)); cubuk.position.x = -0.45; kol.add(cubuk);
    var sap = golgeli(new T.Mesh(new T.CylinderGeometry(0.08, 0.08, 0.3, 12), pirinc)); sap.position.set(-1.85, 0.2, 0); kol.add(sap);
    var topuz = golgeli(new T.Mesh(new T.CylinderGeometry(0.42, 0.36, 0.16, 28), siyah)); topuz.position.set(-1.85, 0.4, 0); kol.add(topuz);
    var ayar = golgeli(new T.Mesh(new T.CylinderGeometry(0.1, 0.1, 0.5, 12), pirinc)); ayar.position.set(1.0, 0.25, 0); kol.add(ayar);
    var ayarBas = golgeli(new T.Mesh(new T.CylinderGeometry(0.2, 0.2, 0.1, 16), pirinc)); ayarBas.position.set(1.0, 0.52, 0); kol.add(ayarBas);
    var ors = golgeli(new T.Mesh(new T.CylinderGeometry(0.16, 0.2, 0.3, 16), pirinc)); ors.position.set(-1.3, 0.55, 0); telgraf.add(ors);
    // bobinler
    [-0.45, 0.45].forEach(function (z) {
      var b = golgeli(new T.Mesh(new T.CylinderGeometry(0.36, 0.36, 0.7, 24), bakir)); b.position.set(1.45, 0.78, z); telgraf.add(b);
      [0.42, 1.14].forEach(function (y) {
        var k = new T.Mesh(new T.CylinderGeometry(0.42, 0.42, 0.06, 24), pirinc); k.position.set(1.45, y, z); telgraf.add(k);
      });
    });
    // bağlantı vidaları ve teller
    [-0.8, 0.8].forEach(function (z) {
      var v = golgeli(new T.Mesh(new T.CylinderGeometry(0.09, 0.09, 0.4, 10), pirinc)); v.position.set(1.9, 0.55, z); telgraf.add(v);
      var bas = new T.Mesh(new T.SphereGeometry(0.14, 12, 10), pirinc); bas.position.set(1.9, 0.8, z); telgraf.add(bas);
      var egri = new T.CatmullRomCurve3([
        new T.Vector3(1.9, 0.6, z), new T.Vector3(3.2, 0.25, z * 1.6), new T.Vector3(5.5, 0.08, z * 2.4 - 1), new T.Vector3(9, 0.08, z * 3 - 4), new T.Vector3(14, 0.08, -7)
      ]);
      var tel = golgeli(new T.Mesh(new T.TubeGeometry(egri, 40, 0.035, 6), siyah)); telgraf.add(tel);
    });
    telgraf.rotation.y = -0.35;
    telgraf.position.set(0.6, 0, 0.4);

    // Muhabir Defteri
    var defter = new T.Group(); sahne.add(defter);
    var kapakMat = new T.MeshStandardMaterial({ color: 0x5c1f1a, roughness: 0.7, envMapIntensity: 0.2 });
    var altKapak = golgeli(new T.Mesh(new T.BoxGeometry(3.1, 0.08, 4.1), kapakMat), true); altKapak.position.y = 0.04; defter.add(altKapak);
    var sayfalar = golgeli(new T.Mesh(new T.BoxGeometry(2.9, 0.34, 3.9), new T.MeshStandardMaterial({ color: 0xe6d3a8, roughness: 1 })), true); sayfalar.position.set(0.05, 0.25, 0); defter.add(sayfalar);
    var ustDoku = tuvalDoku(512, 680, function (c, w, h) {
      c.fillStyle = '#5c1f1a'; c.fillRect(0, 0, w, h);
      var rs = IP.tohumluRastgele(4);
      for (var i = 0; i < 2500; i++) { c.fillStyle = 'rgba(0,0,0,' + rs() * 0.25 + ')'; c.fillRect(rs() * w, rs() * h, 2, 2); }
      c.strokeStyle = '#d4a94e'; c.lineWidth = 6; c.strokeRect(34, 34, w - 68, h - 68);
      c.lineWidth = 2; c.strokeRect(48, 48, w - 96, h - 96);
      c.fillStyle = '#e6c878'; c.textAlign = 'center';
      c.font = '900 58px Manset, serif'; c.fillText('MUHABİR', w / 2, 290);
      c.fillText('DEFTERİ', w / 2, 362);
      c.font = '700 30px Manset, serif'; c.fillText('✦', w / 2, 430);
    });
    var ustKapak = golgeli(new T.Mesh(new T.BoxGeometry(3.1, 0.08, 4.1), [kapakMat, kapakMat, new T.MeshStandardMaterial({ map: ustDoku, roughness: 0.7, envMapIntensity: 0.2 }), kapakMat, kapakMat, kapakMat]), true);
    ustKapak.position.y = 0.46; defter.add(ustKapak);
    defter.position.set(-4.4, 0, 1.2); defter.rotation.y = 0.32;

    // Sandık (arkada, kapağı aralık)
    var sandik = new T.Group(); sahne.add(sandik);
    var sandikMat = new T.MeshStandardMaterial({ map: ahsapDoku('#4a2f1a', '15,8,4'), roughness: 0.9, envMapIntensity: 0.1 });
    var govde = golgeli(new T.Mesh(new T.BoxGeometry(6, 2.4, 3.2), sandikMat), true); govde.position.y = 1.2; sandik.add(govde);
    var kapakGrubu = new T.Group(); kapakGrubu.position.set(0, 2.4, -1.6); sandik.add(kapakGrubu);
    var kapak = golgeli(new T.Mesh(new T.BoxGeometry(6.1, 0.3, 3.3), sandikMat)); kapak.position.set(0, 0.15, 1.65); kapakGrubu.add(kapak);
    kapakGrubu.rotation.x = -1.15;
    [-2.2, 2.2].forEach(function (x) {
      var serit = new T.Mesh(new T.BoxGeometry(0.3, 2.44, 3.24), new T.MeshStandardMaterial({ color: 0x2a2520, metalness: 0.8, roughness: 0.5 }));
      serit.position.set(x, 1.2, 0); sandik.add(serit);
    });
    var kilit = new T.Mesh(new T.BoxGeometry(0.5, 0.6, 0.1), pirinc); kilit.position.set(0, 1.9, 1.62); sandik.add(kilit);
    sandik.position.set(3.2, 0, -4.4); sandik.rotation.y = -0.25;

    // Gaz lambası
    var lamba = new T.Group(); sahne.add(lamba);
    var lambaTaban = golgeli(new T.Mesh(new T.CylinderGeometry(0.5, 0.7, 0.5, 24), pirinc)); lambaTaban.position.y = 0.25; lamba.add(lambaTaban);
    var hazne = golgeli(new T.Mesh(new T.SphereGeometry(0.55, 24, 16), pirinc)); hazne.position.y = 0.8; hazne.scale.y = 0.7; lamba.add(hazne);
    var cam = new T.Mesh(new T.CylinderGeometry(0.28, 0.42, 1.3, 20, 1, true), new T.MeshStandardMaterial({ color: 0xffe2a0, transparent: true, opacity: 0.25, roughness: 0.1, side: T.DoubleSide, emissive: 0xffa040, emissiveIntensity: 0.5 }));
    cam.position.y = 1.8; lamba.add(cam);
    var alev = new T.Sprite(new T.SpriteMaterial({ map: pariltiDoku(), color: 0xffc060, blending: T.AdditiveBlending, depthWrite: false }));
    alev.position.y = 1.6; alev.scale.set(1.6, 2, 1); lamba.add(alev);
    var lambaIsik = new T.PointLight(0xffb060, 2.2, 22, 1.6); lambaIsik.position.y = 1.7; lambaIsik.castShadow = true;
    lambaIsik.shadow.mapSize.set(1024, 1024); lambaIsik.shadow.bias = -0.002; lamba.add(lambaIsik);
    lamba.position.set(-1.6, 0, -2.6);

    sahne.add(new T.AmbientLight(0x4a3a30, 0.5));
    var pencere = new T.DirectionalLight(0x6f86b8, 0.45); pencere.position.set(-8, 9, 6); sahne.add(pencere);
    var toz = tozBulutu(160, 18, 7, 12, 0.09, 0xffd9a0); sahne.add(toz);

    var vurus = 0, uzaklik = 11.5, bakisY = 0.3;
    return {
      sahne: sahne, kamera: kamera,
      boyutla: function (oran) {
        // Dik ekranda kamera biraz uzaklaşır; sis de uzaklığa göre ayarlanır ki sahne kararmasın.
        uzaklik = oran < 1.25 ? Math.min(11.5 * 1.25 / oran, 21) : 11.5;
        sahne.fog.near = uzaklik + 0.5; sahne.fog.far = uzaklik + 18.5;
      },
      // Telgraf tuşuna bir kez bastırır.
      vur: function () { vurus = 1; },
      // Kameranın baktığı yüksekliği ayarlar (yazılar altta iken sahneyi yukarı kaydırmak için).
      bakis: function (y) { bakisY = y; },
      guncelle: function (dt, t) {
        var a = Math.sin(t * 0.13) * 0.42 - 0.1;
        kamera.position.set(Math.sin(a) * uzaklik, 4.3 + Math.sin(t * 0.21) * 0.3, Math.cos(a) * uzaklik);
        kamera.lookAt(0, bakisY, 0);
        vurus = Math.max(0, vurus - dt * 9);
        kol.rotation.z = -0.045 + Math.sin(Math.min(1, vurus) * Math.PI) * 0.075;
        var titre = 1 + Math.sin(t * 13) * 0.04 + Math.sin(t * 7.3) * 0.05;
        lambaIsik.intensity = 2.2 * titre;
        alev.scale.set(1.6 * titre, 2 * titre, 1);
        toz.rotation.y = t * 0.02;
        toz.position.y = Math.sin(t * 0.2) * 0.2;
      }
    };
  }

  /* ---------- Sahne 2: Anadolu haritası ---------- */
  var HG = 21.6, HD = 10; // haritanın 3B dünyadaki genişliği ve derinliği

  function haritaKur() {
    var sahne = new T.Scene();
    sahne.background = new T.Color(0x060a14);
    sahne.fog = new T.Fog(0x060a14, 22, 55);
    var kamera = new T.PerspectiveCamera(40, 1, 0.1, 120);
    var G = IP.cografya;

    // Deniz: eski harita çizgileriyle
    var denizDoku = tuvalDoku(1024, 1024, function (c, w, h) {
      c.fillStyle = '#0d1a2e'; c.fillRect(0, 0, w, h);
      c.strokeStyle = 'rgba(140,170,210,.13)'; c.lineWidth = 2;
      for (var i = 0; i <= 8; i++) {
        c.beginPath(); c.moveTo(i * w / 8, 0); c.lineTo(i * w / 8, h); c.stroke();
        c.beginPath(); c.moveTo(0, i * h / 8); c.lineTo(w, i * h / 8); c.stroke();
      }
      var rs = IP.tohumluRastgele(8);
      c.strokeStyle = 'rgba(160,190,230,.16)'; c.lineWidth = 3; c.lineCap = 'round';
      for (var k = 0; k < 120; k++) {
        var x = rs() * w, y = rs() * h;
        c.beginPath(); c.moveTo(x, y); c.quadraticCurveTo(x + 12, y - 8, x + 24, y); c.quadraticCurveTo(x + 36, y + 8, x + 48, y); c.stroke();
      }
    });
    denizDoku.wrapS = denizDoku.wrapT = T.RepeatWrapping; denizDoku.repeat.set(5, 3.5);
    var deniz = new T.Mesh(new T.PlaneGeometry(110, 76), new T.MeshStandardMaterial({ map: denizDoku, roughness: 0.55, metalness: 0.35 }));
    deniz.rotation.x = -Math.PI / 2; deniz.receiveShadow = true; sahne.add(deniz);

    // Kara parçası: sınır çizgisinden kabartma (kalınlık verilmiş) şekil
    var sekil = new T.Shape();
    G.sinir.forEach(function (n, i) {
      var p = G.oran(n[0], n[1]), x = (p[0] - 0.5) * HG, y = (0.5 - p[1]) * HD;
      if (i) sekil.lineTo(x, y); else sekil.moveTo(x, y);
    });
    var karaGeo = new T.ExtrudeGeometry(sekil, { depth: 0.32, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05, bevelSegments: 2 });
    karaGeo.rotateX(-Math.PI / 2);
    var kara = golgeli(new T.Mesh(karaGeo, new T.MeshStandardMaterial({ color: 0x9a7448, roughness: 0.95 })), true);
    kara.position.y = 0.05; sahne.add(kara);
    // Üst yüz: eski kâğıt harita dokusu
    var ustDoku = tuvalDoku(2048, 948, function (c, w, h) { IP.cizim.haritaCiz(c, w, h); });
    var ust = new T.Mesh(new T.PlaneGeometry(HG, HD), new T.MeshStandardMaterial({ map: ustDoku, transparent: true, roughness: 1, alphaTest: 0.02 }));
    ust.rotation.x = -Math.PI / 2; ust.position.y = 0.435; ust.receiveShadow = true; sahne.add(ust);

    var ortam = new T.AmbientLight(0x5a6c9a, 0.5); sahne.add(ortam);
    var ay = new T.DirectionalLight(0x8fa4d8, 0.55); ay.position.set(-7, 14, 6); ay.castShadow = true;
    ay.shadow.mapSize.set(1024, 1024);
    ay.shadow.camera.left = -14; ay.shadow.camera.right = 14; ay.shadow.camera.top = 9; ay.shadow.camera.bottom = -9;
    sahne.add(ay);
    var atesBocekleri = tozBulutu(120, 26, 4, 14, 0.14, 0xffe0a0); atesBocekleri.position.y = 0.6; sahne.add(atesBocekleri);

    // Kahraman işaretleri
    var isaretler = {};
    var griMat = new T.MeshStandardMaterial({ color: 0x6f6a60, roughness: 0.9 });
    function isaretKur(k) {
      var g = new T.Group();
      g.position.set((k.konum.harita_x - 0.5) * HG, 0.45, (k.konum.harita_y - 0.5) * HD);
      var halka = new T.Mesh(new T.RingGeometry(0.2, 0.3, 32), new T.MeshBasicMaterial({ color: 0x6f6a60, transparent: true, opacity: 0.9, side: T.DoubleSide }));
      halka.rotation.x = -Math.PI / 2; halka.position.y = 0.02; g.add(halka);
      var igne = golgeli(new T.Mesh(new T.CylinderGeometry(0.02, 0.02, 0.5, 6), griMat)); igne.position.y = 0.25; g.add(igne);
      var topMat = new T.MeshStandardMaterial({ color: 0x6f6a60, roughness: 0.5, emissive: 0x000000 });
      var top = golgeli(new T.Mesh(new T.SphereGeometry(0.13, 16, 12), topMat)); top.position.y = 0.55; g.add(top);
      var isilti = new T.Sprite(new T.SpriteMaterial({ map: pariltiDoku(), color: 0xffc060, blending: T.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0 }));
      isilti.position.y = 0.6; isilti.scale.set(2.4, 2.4, 1); g.add(isilti);
      var huzme = new T.Mesh(new T.CylinderGeometry(0.04, 0.45, 4, 20, 1, true), new T.MeshBasicMaterial({ color: 0xffc866, transparent: true, opacity: 0, blending: T.AdditiveBlending, depthWrite: false, side: T.DoubleSide }));
      huzme.position.y = 2.4; g.add(huzme);
      var isik = new T.PointLight(0xffb44d, 0, 8, 1.5); isik.position.y = 1.1; g.add(isik);
      sahne.add(g);
      return { grup: g, halka: halka, top: top, topMat: topMat, isilti: isilti, huzme: huzme, isik: isik, durum: 'kilitli', guc: 0, hedefGuc: 0 };
    }

    // Kamera hareketi
    var genelUzaklik = 16;
    var kam = { konum: new T.Vector3(0, 12, 10), hedef: new T.Vector3(0, 0, 0.4) };
    var gecis = null;
    function genelKonum() {
      var yon = new T.Vector3(0, 1, 0.78).normalize();
      return { konum: new T.Vector3(0, 0, 0.4).add(yon.multiplyScalar(genelUzaklik)), hedef: new T.Vector3(0, 0, 0.4) };
    }
    function git(yer, sure) {
      return new Promise(function (coz) {
        gecis = { b: { konum: kam.konum.clone(), hedef: kam.hedef.clone() }, s: yer, t: 0, bas: performance.now(), sure: sure, coz: coz };
      });
    }
    function yerBul(id) { return isaretler[id] ? isaretler[id].grup.position : new T.Vector3(); }

    return {
      sahne: sahne, kamera: kamera,
      boyutla: function (oran) {
        // Harita ekrana sığsın diye kamera uzaklığı ekran oranına göre ayarlanır.
        var yatayAci = Math.atan(Math.tan(kamera.fov * Math.PI / 360) * oran);
        genelUzaklik = Math.max(13.5, (HG / 2 * 1.12) / Math.tan(yatayAci));
        sahne.fog.near = genelUzaklik * 1.35; sahne.fog.far = genelUzaklik * 3.4;
        if (!gecis && !this.yakinda) { var g = genelKonum(); kam.konum.copy(g.konum); kam.hedef.copy(g.hedef); }
      },
      yakinda: false,
      // Kahramanların durumunu ayarlar: 'kilitli', 'acik' ya da 'tamam'.
      durumAyarla: function (durumlar) {
        IP.veri.kahramanlar.forEach(function (k) {
          if (!isaretler[k.id]) isaretler[k.id] = isaretKur(k);
          var i = isaretler[k.id];
          i.durum = durumlar[k.id] || 'kilitli';
          i.hedefGuc = i.durum === 'tamam' ? 1 : 0;
          if (i.durum === 'tamam') i.guc = 1;
        });
      },
      // Bir kahramanın ışığını yakar (yavaşça parlar).
      yak: function (id) {
        var i = isaretler[id]; if (!i) return;
        i.durum = 'tamam'; i.guc = 0; i.hedefGuc = 1; i.patlama = 1;
      },
      // Kamerayı kahramanın konumuna uçurur.
      uc: function (id, sure) {
        var p = yerBul(id); this.yakinda = true;
        return git({ konum: new T.Vector3(p.x, 3.3, p.z + 4.1), hedef: new T.Vector3(p.x, 0.4, p.z) }, sure || 2.4);
      },
      genel: function (sure) {
        var self = this;
        return git(genelKonum(), sure || 2).then(function () { self.yakinda = false; });
      },
      hemenGenel: function () { gecis = null; this.yakinda = false; var g = genelKonum(); kam.konum.copy(g.konum); kam.hedef.copy(g.hedef); },
      hemenYakin: function (id) {
        var p = yerBul(id); gecis = null; this.yakinda = true;
        kam.konum.set(p.x, 3.3, p.z + 4.1); kam.hedef.set(p.x, 0.4, p.z);
      },
      // İşaretin ekrandaki yeri (piksel). HTML düğmeleri bunun üstüne yerleştirilir.
      ekranKonumu: function (id) {
        var v = yerBul(id).clone(); v.y += 0.6; v.project(kamera);
        return { x: (v.x + 1) / 2 * window.innerWidth, y: (1 - v.y) / 2 * window.innerHeight, gorunur: v.z < 1 };
      },
      guncelle: function (dt, t) {
        if (gecis) {
          gecis.t = Math.min(1, (performance.now() - gecis.bas) / (gecis.sure * 1000)); // gerçek süreye göre: yavaş cihazda da aynı sürer
          var o = gecis.t < 0.5 ? 2 * gecis.t * gecis.t : 1 - Math.pow(-2 * gecis.t + 2, 2) / 2; // yumuşak kalkış-iniş
          kam.konum.lerpVectors(gecis.b.konum, gecis.s.konum, o);
          kam.hedef.lerpVectors(gecis.b.hedef, gecis.s.hedef, o);
          if (gecis.t >= 1) { var coz = gecis.coz; gecis = null; coz(); }
        }
        kamera.position.copy(kam.konum);
        kamera.position.x += Math.sin(t * 0.25) * 0.25;
        kamera.position.y += Math.sin(t * 0.33) * 0.12;
        kamera.lookAt(kam.hedef);
        var yanan = 0;
        Object.keys(isaretler).forEach(function (id) {
          var i = isaretler[id];
          i.guc += (i.hedefGuc - i.guc) * Math.min(1, dt * 1.6);
          i.patlama = Math.max(0, (i.patlama || 0) - dt * 0.7);
          var nabiz = 0.5 + Math.sin(t * 4) * 0.5;
          if (i.durum === 'acik') {
            i.topMat.color.setHex(0xc8102e); i.topMat.emissive.setHex(0xff3020); i.topMat.emissiveIntensity = 0.4 + nabiz * 0.9;
            i.halka.material.color.setHex(0xff5a3a); i.halka.scale.setScalar(1 + nabiz * 0.8); i.halka.material.opacity = 1 - nabiz * 0.7;
            i.isilti.material.color.setHex(0xff6040); i.isilti.material.opacity = 0.25 + nabiz * 0.35;
            i.top.position.y = 0.55 + nabiz * 0.08;
            i.isik.color.setHex(0xff5030); i.isik.intensity = 0.5 + nabiz * 0.5;
          } else if (i.durum === 'tamam') {
            i.topMat.color.setHex(0xffd27a); i.topMat.emissive.setHex(0xffa030); i.topMat.emissiveIntensity = 1.2 * i.guc;
            i.halka.material.color.setHex(0xffc866); i.halka.scale.setScalar(1 + i.patlama * 6); i.halka.material.opacity = 0.9 - i.patlama * 0.6;
            i.isilti.material.color.setHex(0xffc060); i.isilti.material.opacity = (0.5 + Math.sin(t * 2.3 + i.grup.position.x) * 0.12) * i.guc;
            i.isilti.scale.setScalar(2.6 + i.patlama * 5);
            i.huzme.material.opacity = 0.13 * i.guc + i.patlama * 0.1;
            i.isik.color.setHex(0xffb44d); i.isik.intensity = 1.7 * i.guc + i.patlama * 1.2;
            yanan += i.guc;
          } else {
            i.topMat.color.setHex(0x6f6a60); i.topMat.emissiveIntensity = 0;
            i.halka.material.color.setHex(0x6f6a60); i.halka.scale.setScalar(1); i.halka.material.opacity = 0.5;
            i.isilti.material.opacity = 0; i.huzme.material.opacity = 0; i.isik.intensity = 0;
          }
        });
        // Işık yandıkça harita aydınlanır.
        ortam.intensity = 0.5 + yanan * 0.07;
        atesBocekleri.rotation.y = t * 0.015;
        atesBocekleri.position.y = 0.6 + Math.sin(t * 0.3) * 0.15;
        denizDoku.offset.x = t * 0.002;
      }
    };
  }

  // Dışarıdan erişim (sahne henüz kurulmadıysa boş döner).
  ucb.telgraf = function () { return sahneler.telgraf; };
  ucb.harita = function () { return sahneler.harita; };
})();
