import React, { useState } from 'react';

function Home({ setView }) {
  // 1. Bugünün tarihini YYYY-MM-DD formatında dinamik olarak alıyoruz
  const getTodayString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // 2. Verilen tarihten 1 gün sonrasını YYYY-MM-DD formatında hesaplayan yardımcı fonksiyon
  const getNextDayString = (dateString) => {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const todayStr = getTodayString();

  // State'ler: Varsayılan olarak Giriş = Bugün, Çıkış = Yarın ayarlanıyor
  const [checkInDate, setCheckInDate] = useState(todayStr);
  const [checkOutDate, setCheckOutDate] = useState(getNextDayString(todayStr));

  // Giriş tarihi değiştiğinde tetiklenecek fonksiyon
  const handleCheckInChange = (e) => {
    const newCheckIn = e.target.value;
    setCheckInDate(newCheckIn);

    // Eğer yeni giriş tarihi, mevcut çıkış tarihine eşit veya sonrasındaysa,
    // çıkış tarihini otomatik olarak yeni giriş tarihinin 1 gün sonrasına çekiyoruz.
    if (new Date(newCheckIn) >= new Date(checkOutDate)) {
      setCheckOutDate(getNextDayString(newCheckIn));
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* Hero Banner */}
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

      {/* Arama Paneli */}
      <div className="search-panel-wrapper -mt-12 relative z-10 px-6">
        <div className="search-panel">
          
          {/* Giriş Tarihi */}
          <div className="search-group">
            <label className="search-label">Giriş Tarihi</label>
            <input
              type="date"
              value={checkInDate}
              min={todayStr} /* Bugünden öncesi seçilemez */
              onChange={handleCheckInChange}
              className="search-input py-2"
            />
          </div>

          {/* Çıkış Tarihi */}
          <div className="search-group">
            <label className="search-label">Çıkış Tarihi</label>
            <input
              type="date"
              value={checkOutDate}
              min={getNextDayString(checkInDate)} /* Giriş tarihinden öncesi ve giriş günü seçilemez, en erken 1 gün sonrası */
              onChange={(e) => setCheckOutDate(e.target.value)}
              className="search-input py-2"
            />
          </div>

          {/* Yetişkin Sayısı */}
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

          {/* Çocuk Sayısı */}
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

      {/* --- OTEL TANITIM BÖLÜMÜ --- */}
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

      {/* Öne Çıkan Odalar Bölümü */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="section-title-wrapper">
          <h2 className="section-title">Öne Çıkan Odalarımız</h2>
          <p className="section-subtitle">
            Sizin için özenle tasarlanmış en popüler lüks alternatifler
          </p>
        </div>

        <div className="rooms-grid-3">
          {/* Deluxe Oda */}
          <div className="room-card">
            <div className="room-card-img-wrapper">
              <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80" alt="Oda" className="room-card-img" />
              <span className="room-badge">Deluxe</span>
            </div>
            <div className="room-card-body">
              <div>
                <div className="room-rating">★ 4.9 <span className="text-gray-400 font-normal text-xs">(124 değerlendirme)</span></div>
                <h3 className="room-title">Deluxe Deniz Manzaralı Oda</h3>
                <p className="room-desc">Akdeniz'in büyüleyici maviliğine açılan pencereleri...</p>
              </div>
              <div className="room-card-footer">
                <span className="room-price">₺4,500 <span className="text-xs text-gray-500 font-normal">/ gece</span></span>
                <button onClick={() => setView("detail")} className="btn-action-md">Detaylar</button>
              </div>
            </div>
          </div>
          {/* (Diğer odalar aynı şekilde devam ediyor...) */}
        </div>
      </div>

      {/* Hizmetlerimiz Bölümü */}
      <div className="border-t border-[#e9e8e7]/40 bg-[#fefdfc]">
        {/* ... Hizmetler içeriği ... */}
      </div>
    </div>
  );
}

export default Home;