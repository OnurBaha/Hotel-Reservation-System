export const MOCK_CATEGORIES = ["Tümü", "Standart", "Deluxe", "Suite", "Kral Dairesi"];

export const MOCK_ROOMS = [
  {
    id: 1,
    title: "Deluxe Deniz Manzaralı Oda",
    price: 4500,
    category: "Deluxe",
    rating: 4.9,
    ratingCount: 124,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    description: "Akdeniz'in büyüleyici maviliğine açılan pencereleri, özel balkonu ve modern tasarımıyla konforlu bir konaklama deneyimi.",
    amenities: ["Ücretsiz Wi-Fi", "Klima", "Minibar", "Deniz Manzarası", "7/24 Oda Servisi", "Jakuzi"]
  },
  {
    id: 2,
    title: "Premium Orman Teraslı Süit",
    price: 6200,
    category: "Suite",
    rating: 4.8,
    ratingCount: 86,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    description: "Doğanın kucağında, geniş teras alanı ve özel güneşlenme alanlarıyla donatılmış, huzur arayanlar için tasarlanmış özel süit.",
    amenities: ["Ücretsiz Wi-Fi", "Geniş Teras", "Kahve Makinesi", "Doğa Manzarası", "Oturma Grubu"]
  },
  {
    id: 3,
    title: "Eşsiz Kral Dairesi (Presidential)",
    price: 16200,
    category: "Kral Dairesi",
    rating: 5.0,
    ratingCount: 32,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
    description: "Luxe Vista kalitesinin zirvesi. Özel havuz erişimi, panoramik manzara, geniş toplantı ve yaşam alanı ile tamamen size özel bir saray konforu.",
    amenities: ["Özel Havuz", "VIP Transfer", "Kişisel Uşak", "Sinema Sistemi", "Akıllı Ev Otomasyonu", "Sauna"]
  },
  {
    id: 4,
    title: "Standart Comfort Oda",
    price: 3100,
    category: "Standart",
    rating: 4.6,
    ratingCount: 210,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
    description: "Sade, şık ve fonksiyonel detaylar. İş veya kısa süreli seyahatleriniz için ihtiyacınız olan tüm donanıma sahip bütçe dostu lüks konsept.",
    amenities: ["Ücretsiz Wi-Fi", "Klima", "Televizyon", "Çalışma Masası"]
  },
  {
    id: 5,
    title: "Deluxe Bahçe Manzaralı Aile Odası",
    price: 4900,
    category: "Deluxe",
    rating: 4.7,
    ratingCount: 94,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
    description: "Doğrudan resort bahçelerine açılan kapısı, geniş yapısı ve çocuklu aileler için optimize edilmiş yerleşimiyle huzurlu bir alternatif.",
    amenities: ["Ücretsiz Wi-Fi", "Bahçe Terası", "Klima", "Minibar", "Çocuk Yatağı", "7/24 Oda Servisi"]
  },
  {
    id: 6,
    title: "Executive Loft Süit",
    price: 7500,
    category: "Suite",
    rating: 4.9,
    ratingCount: 58,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    description: "Yüksek tavanlar, asma kat yatak odası ve endüstriyel lüks dokunuşlarla tasarlanmış, şehir ve deniz manzarasını birleştiren modern süit.",
    amenities: ["Ücretsiz Wi-Fi", "Asma Kat", "Premium Ses Sistemi", "Kapsül Kahve Makinesi", "Jakuzi", "Çalışma Alanı"]
  },
  {
    id: 7,
    title: "Standart Park Manzaralı Oda",
    price: 3300,
    category: "Standart",
    rating: 4.5,
    ratingCount: 145,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    description: "Resortun yeşil park alanına bakan, minimalist ve dinlendirici renk paletiyle dizayn edilmiş, konfor odaklı standart oda.",
    amenities: ["Ücretsiz Wi-Fi", "Klima", "Televizyon", "Emanet Kasası", "Çay/Kahve Seti"]
  },
  {
    id: 8,
    title: "Grand Royal Villa (Kral Dairesi)",
    price: 22000,
    category: "Kral Dairesi",
    rating: 5.0,
    ratingCount: 14,
    image: "https://www.alvistravel.com/images/hotel/40637_b.jpg",
    description: "Tamamen izole, kendine ait özel iskelesi, helikopter pisti erişimi ve sonsuzluk havuzuyla lüks tanımını yeniden yapan müstakil villa konsepti.",
    amenities: ["Sonsuzluk Havuzu", "Özel İskele", "Kişisel Aşçı", "7/24 Güvenlik", "Masaj Odası", "VIP Lounge"]
  },
  {
    id: 9,
    title: "Deluxe Havuz Erişilmeli (Swim-up) Oda",
    price: 5400,
    category: "Deluxe",
    rating: 4.8,
    ratingCount: 112,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
    description: "Odanızın terasından doğrudan ana havuza adım atabileceğiniz, suyla iç içe bir tatil isteyenler için mükemmel seçim.",
    amenities: ["Direkt Havuz Girişi", "Ücretsiz Wi-Fi", "Şezlonglu Teras", "Minibar", "Klima", "Özel Bornoz Seti"]
  },
  {
    id: 10,
    title: "Honeymoon Penthouse Süit",
    price: 8800,
    category: "Suite",
    rating: 4.9,
    ratingCount: 73,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
    description: "Balayı çiftleri için özel olarak tasarlanmış, 360 derece panoramik deniz manzaralı, kalpli jakuzi ve şampanya ikramı içeren romantik süit.",
    amenities: ["Panoramik Manzara", "Kalp Jakuzi", "Şampanya & Meyve", "Özel Karşılama", "Yatakta Kahvaltı", "Ücretsiz Wi-Fi"]
  },
  {
    id: 11,
    title: "Standart Atrium Oda",
    price: 2900,
    category: "Standart",
    rating: 4.4,
    ratingCount: 189,
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80",
    description: "Resortun iç avlusuna ve dikey bahçelerine bakan, sessiz ve dingin bir ortam sunan bütçe dostu şık alternatif.",
    amenities: ["Ücretsiz Wi-Fi", "Klima", "Mini Buzdolabı", "Kablolu TV"]
  },
  {
    id: 12,
    title: "Panoramic Sky Süit",
    price: 9500,
    category: "Suite",
    rating: 4.9,
    ratingCount: 41,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    description: "En üst katta yer alan, cam tavan mimarisi sayesinde geceleri yatağınızdan yıldızları izleyebileceğiniz sıra dışı bir süit deneyimi.",
    amenities: ["Cam Tavan", "Teleskop", "Ücretsiz Wi-Fi", "Açık Hava Jakuzisi", "Premium Bar Seti", "Yerden Isıtma"]
  }
];