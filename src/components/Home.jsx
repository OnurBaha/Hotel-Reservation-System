function Home({ setView }) {
  return (
    <div className="animate-fadeIn">
      <div
        className="hero-banner"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-tag">Eşsiz Bir Deneyim</span>
          <h1 className="hero-title">Luxe Vista Resort</h1>
          <p className="hero-desc">
            Lüksün doğa ile buluştuğu eşsiz tatil deneyimi.
          </p>
        </div>
      </div>

      <div className="search-panel-wrapper -mt-12 relative z-10 px-6">
        <div className="search-panel">
          <div className="search-group">
            <label className="search-label">Giriş Tarihi</label>
            <input
              type="date"
              defaultValue="2026-07-10"
              className="search-input py-2"
            />
          </div>

          <div className="search-group">
            <label className="search-label">Çıkış Tarihi</label>
            <input
              type="date"
              defaultValue="2026-07-17"
              className="search-input py-2"
            />
          </div>

          <div className="search-group">
            <label className="search-label">Yetişkin Sayısı</label>
            <div className="search-select-container">
              <select className="search-select-override" defaultValue="2">
                <option value="1">1 Yetişkin</option>
                <option value="2">2 Yetişkin</option>
                <option value="3">3 Yetişkin</option>
                <option value="4">4 Yetişkin</option>
              </select>
              <span className="search-select-icon">▼</span>
            </div>
          </div>

          <div className="search-group">
            <label className="search-label">Çocuk Sayısı</label>
            <div className="search-select-container">
              <select className="search-select-override" defaultValue="0">
                <option value="0">Çocuk Yok</option>
                <option value="1">1 Çocuk</option>
                <option value="2">2 Çocuk</option>
                <option value="3">3 Çocuk</option>
              </select>
              <span className="search-select-icon">▼</span>
            </div>
          </div>

          <div className="search-btn-wrapper">
            <button onClick={() => setView("rooms")} className="btn-search">
              Oda Bul
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="section-title-wrapper">
          <h2 className="section-title">Öne Çıkan Odalarımız</h2>
          <p className="section-subtitle">
            Sizin için özenle tasarlanmış en popüler lüks alternatifler
          </p>
        </div>

        <div className="rooms-grid-3">
          <div className="room-card">
            <div className="room-card-img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"
                alt="Oda"
                className="room-card-img"
              />
              <span className="room-badge">Deluxe</span>
            </div>
            <div className="room-card-body">
              <div>
                <div className="room-rating">
                  ★ 4.9{" "}
                  <span className="text-gray-400 font-normal text-xs">
                    (124 değerlendirme)
                  </span>
                </div>
                <h3 className="room-title">Deluxe Deniz Manzaralı Oda</h3>
                <p className="room-desc">
                  Akdeniz'in büyüleyici maviliğine açılan pencereleri, özel
                  balkonu ve modern tasarımıyla konforlu bir konaklama deneyimi.
                </p>
                <div className="room-tags-wrapper">
                  <span className="room-tag">Wi-Fi</span>
                  <span className="room-tag">Deniz Manzarası</span>
                  <span className="room-tag">Jakuzi</span>
                </div>
              </div>
              <div className="room-card-footer">
                <span className="room-price">
                  ₺4,500{" "}
                  <span className="text-xs text-gray-500 font-normal">
                    / gece
                  </span>
                </span>
                <button
                  onClick={() => setView("detail")}
                  className="btn-action-md"
                >
                  Detaylar
                </button>
              </div>
            </div>
          </div>

          <div className="room-card">
            <div className="room-card-img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
                alt="Oda"
                className="room-card-img"
              />
              <span className="room-badge">Suite</span>
            </div>
            <div className="room-card-body">
              <div>
                <div className="room-rating">
                  ★ 4.8{" "}
                  <span className="text-gray-400 font-normal text-xs">
                    (86 değerlendirme)
                  </span>
                </div>
                <h3 className="room-title">Premium Orman Teraslı Süit</h3>
                <p className="room-desc">
                  Doğanın kucağında, geniş teras alanı ve özel güneşlenme
                  alanlarıyla donatılmış, huzur arayanlar için tasarlanmış özel
                  süit.
                </p>
                <div className="room-tags-wrapper">
                  <span className="room-tag">Geniş Teras</span>
                  <span className="room-tag">Kahve Makinesi</span>
                  <span className="room-tag">Doğa Manzarası</span>
                </div>
              </div>
              <div className="room-card-footer">
                <span className="room-price">
                  ₺6,200{" "}
                  <span className="text-xs text-gray-500 font-normal">
                    / gece
                  </span>
                </span>
                <button
                  onClick={() => setView("detail")}
                  className="btn-action-md"
                >
                  Detaylar
                </button>
              </div>
            </div>
          </div>

          <div className="room-card">
            <div className="room-card-img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80"
                alt="Oda"
                className="room-card-img"
              />
              <span className="room-badge">Kral Dairesi</span>
            </div>
            <div className="room-card-body">
              <div>
                <div className="room-rating">
                  ★ 5.0{" "}
                  <span className="text-gray-400 font-normal text-xs">
                    (32 değerlendirme)
                  </span>
                </div>
                <h3 className="room-title">
                  Eşsiz Kral Dairesi (Presidential)
                </h3>
                <p className="room-desc">
                  Özel havuz erişimi, panoramik manzara, geniş toplantı ve yaşam
                  alanı ile tamamen size özel bir saray konforu.
                </p>
                <div className="room-tags-wrapper">
                  <span className="room-tag">Özel Havuz</span>
                  <span className="room-tag">Kişisel Uşak</span>
                  <span className="room-tag">Sauna</span>
                </div>
              </div>
              <div className="room-card-footer">
                <span className="room-price">
                  ₺16,200{" "}
                  <span className="text-xs text-gray-500 font-normal">
                    / gece
                  </span>
                </span>
                <button
                  onClick={() => setView("detail")}
                  className="btn-action-md"
                >
                  Detaylar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
