import React, { useState } from 'react';
import { MOCK_ROOMS } from '../roomsMock'; 

function Home({ setView, onRoomClick }) {
  const getTodayString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getNextDayString = (dateString) => {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const todayStr = getTodayString();

  const [checkInDate, setCheckInDate] = useState(todayStr);
  const [checkOutDate, setCheckOutDate] = useState(getNextDayString(todayStr));

  const handleCheckInChange = (e) => {
    const newCheckIn = e.target.value;
    setCheckInDate(newCheckIn);

    if (new Date(newCheckIn) >= new Date(checkOutDate)) {
      setCheckOutDate(getNextDayString(newCheckIn));
    }
  };

  const featuredRooms = MOCK_ROOMS.slice(0, 3);

  return (
    <div className="animate-fadeIn">
      <div
        className="hero-banner"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80')"
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
              value={checkInDate}
              min={todayStr}
              onChange={handleCheckInChange}
              className="search-input py-2"
            />
          </div>
          <div className="search-group">
            <label className="search-label">Çıkış Tarihi</label>
            <input
              type="date"
              value={checkOutDate}
              min={getNextDayString(checkInDate)}
              onChange={(e) => setCheckOutDate(e.target.value)}
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

      <div className="bg-white border-b border-[#e9e8e7]/30">
        <div className="intro-section-wrapper">
          <div className="intro-content-side">
            <span className="intro-tag">Luxe Vista Resort</span>
            <h2 className="intro-title">
              Eşsiz bir konfor ve <br />
              doğa deneyimi.
            </h2>
            <div className="intro-desc">
              <p>
                Luxe Vista Resort, Akdeniz'in en büyüleyici koylarından birinde, 
                yeşil ile mavinin kusursuz uyumunu sunduğu özel bir konumda yer almaktadır. 
                Modern mimariyi doğal dokuyla harmanlayan tesisimiz, karmaşadan uzak, 
                huzurlu ve tamamen size özel bir tatil atmosferi vadeder.
              </p>
              <p>
                Her bir detayı konforunuz ve huzurunuz için titizlikle tasarlanmış geniş yaşam alanlarımız, 
                gurme restoranlarımızda sunulan seçkin lezzetler ve ruhunuzu dinlendirecek SPA 
                deneyimlerimizle tatilinizi unutulmaz bir anıya dönüştürüyoruz.
              </p>
            </div>
          </div>
          <div className="intro-image-side">
            <div className="intro-img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80" 
                alt="Luxe Vista Resort Genel Bakış" 
                className="intro-img"
              />
            </div>
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
          {featuredRooms.map((room) => (
            <div key={room.id} className="room-card">
              <div className="room-card-img-wrapper">
                <img 
                  src={room.image} 
                  alt={room.title} 
                  className="room-card-img" 
                />
                <span className="room-badge">{room.category}</span>
              </div>
              <div className="room-card-body">
                <div>
                  <div className="room-rating">
                    ★ {room.rating} <span className="text-gray-400 font-normal text-xs">({room.ratingCount} değerlendirme)</span>
                  </div>
                  <h3 className="room-title">{room.title}</h3>
                  <p className="room-desc line-clamp-3">
                    {room.description}
                  </p>
                  <div className="room-tags-wrapper">
                    {room.amenities.slice(0, 3).map((amenity, idx) => (
                      <span key={idx} className="room-tag">{amenity}</span>
                    ))}
                  </div>
                </div>
                <div className="room-card-footer">
                  <span className="room-price">
                    ₺{room.price.toLocaleString('tr-TR')} <span className="text-xs text-gray-500 font-normal">/ gece</span>
                  </span>
                  
                  <button 
                    onClick={() => {
                      onRoomClick(room);
                      setView("detail");
                    }} 
                    className="btn-action-md"
                  >
                    Detaylar
                  </button>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#e9e8e7]/40 bg-[#fefdfc]">
        <div className="services-section-wrapper">
          <div className="services-title-side">
            <span className="services-tag">Luxe Vista</span>
            <h2 className="services-main-title">Hizmetler</h2>
            <p className="services-desc">
              Kalite ve mükemmeliyeti esas alarak, sizlere ayrıcalıklı hizmet sunuyoruz.
            </p>
          </div>

          <div className="services-grid-side">
            <div className="service-item-card">
              <div className="service-item-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="4" r="2"/><path d="M10 13H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4v4"/><path d="M17 14h-3l-2-3H8"/><path d="M18 19H13v-5"/></svg>
              </div>
              <span className="service-item-name">Engelli Dostu</span>
            </div>
            <div className="service-item-card">
              <div className="service-item-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>
              </div>
              <span className="service-item-name">Otopark</span>
            </div>
            <div className="service-item-card">
              <div className="service-item-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4h20v2H2z"/><path d="M4 6v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6"/><path d="M9 11h6"/><path d="M9 15h6"/></svg>
              </div>
              <span className="service-item-name">Oda Servisi</span>
            </div>
            <div className="service-item-card">
              <div className="service-item-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 10a4 4 0 0 1 8 0M14 10a4 4 0 0 1 8 0"/><path d="M2 14a4 4 0 0 1 8 0M14 14a4 4 0 0 1 8 0"/><path d="M2 18a4 4 0 0 1 8 0M14 18a4 4 0 0 1 8 0"/></svg>
              </div>
              <span className="service-item-name">Kadınlar Plajı ve Havuzu</span>
            </div>
            <div className="service-item-card-highlight">
              <div className="service-item-icon-highlight">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M12 20h.01"/></svg>
              </div>
              <span className="service-item-name-highlight">Fiber İnternet</span>
              <p className="service-item-sub-highlight">1000mb fiber internet alt yapısı</p>
            </div>
            <div className="service-item-card">
              <div className="service-item-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>
              </div>
              <span className="service-item-name">Breakfast</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;