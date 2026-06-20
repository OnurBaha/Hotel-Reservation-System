function Booking({ setView }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 animate-fade-in">
      <h1 className="booking-page-title">Rezervasyon Aşaması</h1>
      
      <div className="booking-grid">
        <div className="booking-form-side">
          <h2 className="booking-form-section-title">1. Kişisel Bilgiler</h2>
          <div className="form-grid-2">
            <div className="search-group">
              <label className="search-label">Adınız</label>
              <input type="text" className="search-input" placeholder="Ahmet" />
            </div>
            <div className="search-group">
              <label className="search-label">Soyadınız</label>
              <input type="text" className="search-input" placeholder="Yılmaz" />
            </div>
          </div>
          <div className="form-grid-2">
            <div className="search-group">
              <label className="search-label">E-Posta</label>
              <input type="email" className="search-input" placeholder="ahmet@example.com" />
            </div>
            <div className="search-group">
              <label className="search-label">Telefon Numarası</label>
              <input type="tel" className="search-input" placeholder="+90 555 000 00 00" />
            </div>
          </div>

          <h2 className="booking-form-section-title-pt">2. Ödeme Bilgileri</h2>
          <div className="search-group">
            <label className="search-label">Kart Üzerindeki İsim</label>
            <input type="text" className="search-input" placeholder="Ahmet Yılmaz" />
          </div>
          <div className="search-group">
            <label className="search-label">Kart Numarası</label>
            <input type="text" className="search-input" placeholder="4355 8800 1234 5678" />
          </div>
          <div className="form-grid-2">
            <div className="search-group">
              <label className="search-label">Son Kullanma Tarihi</label>
              <input type="text" className="search-input" placeholder="MM/YY" />
            </div>
            <div className="search-group">
              <label className="search-label">CVC / CVV</label>
              <input type="text" className="search-input" placeholder="123" />
            </div>
          </div>

          <div className="pt-2">
            <button 
              onClick={() => { alert('Rezervasyonunuz simüle edilmiştir!'); setView('home'); }}
              className="btn-checkout"
            >
              Güvenli Ödeme Yap (₺113,400)
            </button>
          </div>
        </div>

        <div className="booking-summary-side">
          <h2 className="summary-title">Rezervasyon Detayları</h2>
          <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=400&q=80" alt="Oda" className="summary-img" />
          
          <div>
            <h3 className="font-bold text-base text-[#1b1c1c]">Eşsiz Kral Dairesi</h3>
            <span className="text-xs font-semibold text-gray-400">Kral Dairesi Konsepti</span>
          </div>

          <div className="summary-info-box">
            <div className="summary-info-row"><span>Giriş Tarihi:</span> <span className="font-bold text-[#1b1c1c]">10 Temmuz 2026</span></div>
            <div className="summary-info-row"><span>Çıkış Tarihi:</span> <span className="font-bold text-[#1b1c1c]">17 Temmuz 2026</span></div>
            <div className="summary-info-row"><span>Süre:</span> <span className="font-bold text-[#1b1c1c]">7 Gece</span></div>
            <div className="summary-info-row-border"><span>Misafir:</span> <span className="font-bold text-[#1b1c1c]">2 Yetişkin</span></div>
          </div>

          <div className="summary-price-box">
            <div className="summary-info-row"><span>7 Gecelik Konaklama:</span> <span>₺113,400</span></div>
            <div className="summary-info-row"><span>Vergiler & Harçlar (Dahil):</span> <span>₺0</span></div>
            <div className="summary-info-row"><span>Havalimanı Transferi:</span> <span className="text-emerald-600 font-medium">Ücretsiz</span></div>
            <div className="summary-total-row">
              <span>Toplam Tutar:</span> 
              <span>₺113,400</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;