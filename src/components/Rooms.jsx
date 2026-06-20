function Rooms({ setView }) {
  return (
    <div className="page-container animate-fade-in">
      <div className="filter-tabs-wrapper">
        {["Tümü", "Standart", "Deluxe", "Suite", "Kral Dairesi"].map(
          (cat, idx) => (
            <button
              key={idx}
              className={`filter-tab-btn ${idx === 0 ? "filter-tab-active" : "filter-tab-inactive"}`}
            >
              {cat}
            </button>
          ),
        )}
      </div>

      <div className="rooms-grid-layout">
        <div className="sidebar-filter">
          <div>
            <h3 className="sidebar-section-title">Filtrele & Sırala</h3>
            <label className="search-label">Sıralama</label>
            <select className="search-input-sm">
              <option>Önerilen</option>
              <option>Fiyat: Düşükten Yükseğe</option>
              <option>Fiyat: Yüksekten Düşüğe</option>
              <option>En Yüksek Puan</option>
            </select>
          </div>

          <div>
            <label className="search-label">Fiyat Aralığı (Gecelik)</label>
            <input
              type="range"
              min="2000"
              max="25000"
              defaultValue="15000"
              className="range-input"
            />
            <div className="flex justify-between text-xs text-[#554434] mt-1 font-medium">
              <span>₺2,000</span>
              <span>₺25,000+</span>
            </div>
          </div>

          <div>
            <label className="search-label !mb-3">Oda Özellikleri</label>
            <div className="checkbox-list">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox-input"
                />{" "}
                <span>Ücretsiz Wi-Fi</span>
              </label>
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox-input" />{" "}
                <span>Deniz Manzarası</span>
              </label>
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox-input" />{" "}
                <span>Özel Havuz</span>
              </label>
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox-input" />{" "}
                <span>Jakuzi</span>
              </label>
            </div>
          </div>
        </div>

        <div className="rooms-main-list">
          <div className="room-card">
            <img
              src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"
              alt="Oda"
              className="room-card-img-sm"
            />
            <div className="room-card-body-sm">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8b5000]">
                    Standart
                  </span>
                  <span className="room-rating-sm">★ 4.6</span>
                </div>
                <h3 className="room-title-sm">Standart Comfort Oda</h3>
                <p className="room-desc-sm">
                  Sade, şık ve fonksiyonel detaylar. İş veya kısa süreli
                  seyahatleriniz için ihtiyacınız olan tüm donanıma sahip bütçe
                  dostu konsept.
                </p>
              </div>
              <div className="room-card-footer !pt-3">
                <span className="room-price-sm">
                  ₺3,100{" "}
                  <span className="text-xs font-normal text-gray-500">
                    /gece
                  </span>
                </span>
                <button
                  onClick={() => setView("detail")}
                  className="btn-action-sm"
                >
                  Detaylar
                </button>
              </div>
            </div>
          </div>

          <div className="room-card">
            <img
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"
              alt="Oda"
              className="room-card-img-sm"
            />
            <div className="room-card-body-sm">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8b5000]">
                    Deluxe
                  </span>
                  <span className="room-rating-sm">★ 4.9</span>
                </div>
                <h3 className="room-title-sm">Deluxe Deniz Manzaralı Oda</h3>
                <p className="room-desc-sm">
                  Akdeniz'in büyüleyici maviliğine açılan pencereleri, özel
                  balkonu og modern tasarımıyla konforlu bir konaklama deneyimi.
                </p>
              </div>
              <div className="room-card-footer !pt-3">
                <span className="room-price-sm">
                  ₺4,500{" "}
                  <span className="text-xs font-normal text-gray-500">
                    /gece
                  </span>
                </span>
                <button
                  onClick={() => setView("detail")}
                  className="btn-action-sm"
                >
                  Detaylar
                </button>
              </div>
            </div>
          </div>

          <div className="room-card">
            <img
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
              alt="Oda"
              className="room-card-img-sm"
            />
            <div className="room-card-body-sm">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8b5000]">
                    Suite
                  </span>
                  <span className="room-rating-sm">★ 4.8</span>
                </div>
                <h3 className="room-title-sm">Premium Orman Teraslı Süit</h3>
                <p className="room-desc-sm">
                  Doğanın kucağında, geniş teras alanı ve özel güneşlenme
                  alanlarıyla donatılmış, huzur arayanlar için tasarlanmış özel
                  süit.
                </p>
              </div>
              <div className="room-card-footer !pt-3">
                <span className="room-price-sm">
                  ₺6,200{" "}
                  <span className="text-xs font-normal text-gray-500">
                    /gece
                  </span>
                </span>
                <button
                  onClick={() => setView("detail")}
                  className="btn-action-sm"
                >
                  Detaylar
                </button>
              </div>
            </div>
          </div>

          <div className="room-card">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
              alt="Oda"
              className="room-card-img-sm"
            />
            <div className="room-card-body-sm">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8b5000]">
                    Suite
                  </span>
                  <span className="room-rating-sm">★ 4.9</span>
                </div>
                <h3 className="room-title-sm">Executive Loft Süit</h3>
                <p className="room-desc-sm">
                  Yüksek tavanlar, asma kat yatak odası ve endüstriyel lüks
                  dokunuşlarla tasarlanmış, şehir ve deniz manzarasını
                  birleştiren modern süit.
                </p>
              </div>
              <div className="room-card-footer !pt-3">
                <span className="room-price-sm">
                  ₺7,500{" "}
                  <span className="text-xs font-normal text-gray-500">
                    /gece
                  </span>
                </span>
                <button
                  onClick={() => setView("detail")}
                  className="btn-action-sm"
                >
                  Detaylar
                </button>
              </div>
            </div>
          </div>

          <div className="room-card">
            <img
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80"
              alt="Oda"
              className="room-card-img-sm"
            />
            <div className="room-card-body-sm">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8b5000]">
                    Suite
                  </span>
                  <span className="room-rating-sm">★ 4.9</span>
                </div>
                <h3 className="room-title-sm">Honeymoon Penthouse Süit</h3>
                <p className="room-desc-sm">
                  Balayı çiftleri için özel olarak tasarlanmış, 360 derece
                  panoramik deniz manzaralı, kalpli jakuzi ve şampanya ikramı
                  içeren romantik süit.
                </p>
              </div>
              <div className="room-card-footer !pt-3">
                <span className="room-price-sm">
                  ₺8,800{" "}
                  <span className="text-xs font-normal text-gray-500">
                    /gece
                  </span>
                </span>
                <button
                  onClick={() => setView("detail")}
                  className="btn-action-sm"
                >
                  Detaylar
                </button>
              </div>
            </div>
          </div>

          <div className="room-card">
            <img
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80"
              alt="Oda"
              className="room-card-img-sm"
            />
            <div className="room-card-body-sm">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8b5000]">
                    Kral Dairesi
                  </span>
                  <span className="room-rating-sm">★ 5.0</span>
                </div>
                <h3 className="room-title-sm">
                  Eşsiz Kral Dairesi (Presidential)
                </h3>
                <p className="room-desc-sm">
                  Luxe Vista kalitesinin zirvesi. Özel havuz erişimi, panoramik
                  manzara, geniş toplantı ve yaşam alanı ile tamamen size özel
                  bir saray konforu.
                </p>
              </div>
              <div className="room-card-footer">
                <span className="room-price-sm">
                  ₺3,100{" "}
                  <span className="text-xs font-normal text-gray-500">
                    /gece
                  </span>
                </span>
                <button
                  onClick={() => setView("detail")}
                  className="btn-action-sm"
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

export default Rooms;
