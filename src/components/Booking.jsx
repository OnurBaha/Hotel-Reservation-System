import { useState } from "react";

function Booking({ setView, room }) {
  const [checkInDate, setCheckInDate] = useState("2026-07-10");
  const [checkOutDate, setCheckOutDate] = useState("2026-07-17");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  if (!room) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <p className="text-gray-500 mb-4">Rezervasyon yapılacak oda seçilmedi.</p>
        <button onClick={() => setView('rooms')} className="btn-back mx-auto">
          ← Odaları Listele
        </button>
      </div>
    );
  }



  const checkIn = new Date(checkInDate);
  const checkOut = new Date(checkOutDate);
  const timeDifference = checkOut.getTime() - checkIn.getTime();
  
  const calculatedNights = Math.ceil(timeDifference / (1000 * 3600 * 24));
  const nights = calculatedNights > 0 ? calculatedNights : 1;

  const baseRoomPrice = room.price; 
  const normalAdultPrice = baseRoomPrice / 2;
  
  const extraAdultCount = adults > 2 ? adults - 2 : 0;
  const totalExtraAdultCost = extraAdultCount * normalAdultPrice;
  
  const singleChildPrice = normalAdultPrice * 0.25;
  const totalChildCost = children * singleChildPrice;
  
  const dynamicPricePerNight = baseRoomPrice + totalExtraAdultCost + totalChildCost;

  const totalAccommodation = dynamicPricePerNight * nights;
  const grandTotal = totalAccommodation;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 animate-fade-in">
      <h1 className="booking-page-title">Rezervasyon Aşaması</h1>
      
      <div className="booking-grid">
        <div className="booking-form-side">
          
          <h2 className="booking-form-section-title">1. Konaklama Bilgileri</h2>
          <div className="form-grid-2">
            <div className="search-group">
              <label className="search-label">Giriş Tarihi</label>
              <input 
                type="date" 
                className="search-input" 
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
              />
            </div>
            <div className="search-group">
              <label className="search-label">Çıkış Tarihi</label>
              <input 
                type="date" 
                className="search-input" 
                value={checkOutDate}
                min={checkInDate} 
                onChange={(e) => setCheckOutDate(e.target.value)}
              />
            </div>
          </div>
          
          <div className="form-grid-2">
            <div className="search-group">
              <label className="search-label">Yetişkin Sayısı (Base: 2 Kişi)</label>
              <select 
                className="search-input" 
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
              >
                <option value={1}>1 Yetişkin</option>
                <option value={2}>2 Yetişkin</option>
                <option value={3}>3 Yetişkin (+%50)</option>
                <option value={4}>4 Yetişkin (+%100)</option>
              </select>
            </div>
            <div className="search-group">
              <label className="search-label">Çocuk Sayısı (Yetişkinin %25'i)</label>
              <select 
                className="search-input" 
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
              >
                <option value={0}>Çocuk Yok</option>
                <option value={1}>1 Çocuk</option>
                <option value={2}>2 Çocuk</option>
                <option value={3}>3 Çocuk</option>
              </select>
            </div>
          </div>

          <h2 className="booking-form-section-title-pt">2. Kişisel Bilgiler</h2>
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

          <h2 className="booking-form-section-title-pt">3. Ödeme Bilgileri</h2>
          <div className="search-group">
            <label className="search-label">Kart Üzerindeki İsim</label>
            <input type="text" className="search-input" placeholder="Ahmet Yılmaz" />
          </div>
          <div className="search-group">
            <label className="search-input">Kart Numarası</label>
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
              onClick={() => { 
                alert(`Rezervasyonunuz başarıyla tamamlandı! Toplam Ödenen: ₺${grandTotal.toLocaleString('tr-TR')}`); 
                setView('home'); 
              }}
              className="btn-checkout"
            >
              Güvenli Ödeme Yap (₺{grandTotal.toLocaleString('tr-TR')})
            </button>
          </div>
        </div>

        <div className="booking-summary-side">
          <h2 className="summary-title">Rezervasyon Detayları</h2>
          
          <img src={room.image} alt={room.title} className="summary-img" />
          
          <div>
            <h3 className="font-bold text-base text-[#1b1c1c]">{room.title}</h3>
            <span className="text-xs font-semibold text-gray-400">{room.category} Konsepti</span>
          </div>

          <div className="summary-info-box">
            <div className="summary-info-row">
              <span>Giriş Tarihi:</span> 
              <span className="font-bold text-[#1b1c1c]">{checkInDate}</span>
            </div>
            <div className="summary-info-row">
              <span>Çıkış Tarihi:</span> 
              <span className="font-bold text-[#1b1c1c]">{checkOutDate}</span>
            </div>
            <div className="summary-info-row">
              <span>Hesaplanan Süre:</span> 
              <span className="font-bold text-[#1b1c1c]">{nights} Gece</span>
            </div>
            <div className="summary-info-row-border">
              <span>Misafir Kadrosu:</span> 
              <span className="font-bold text-[#1b1c1c]">
                {adults} Yetişkin {children > 0 && `, ${children} Çocuk`}
              </span>
            </div>
          </div>

          <div className="summary-price-box">
            <div className="summary-info-row text-xs text-gray-500">
              <span>Oda Standart Fiyatı (Gecelik):</span>
              <span>₺{baseRoomPrice.toLocaleString('tr-TR')}</span>
            </div>
            
            {/* Hesaplanan dinamik gecelik fiyatı şeffafça gösterelim */}
            <div className="summary-info-row text-xs text-amber-700 font-medium">
              <span>Kişi Başı Güncellenmiş Gecelik:</span>
              <span>₺{dynamicPricePerNight.toLocaleString('tr-TR')}</span>
            </div>

            <div className="summary-info-row border-t pt-2 mt-2">
              <span>{nights} Gecelik Toplam:</span> 
              <span>₺{totalAccommodation.toLocaleString('tr-TR')}</span>
            </div>
            <div className="summary-info-row">
              <span>Vergiler & Harçlar:</span> 
              <span>₺0</span>
            </div>
            <div className="summary-info-row">
              <span>Havalimanı VIP Transfer:</span> 
              <span className="text-emerald-600 font-medium">Ücretsiz</span>
            </div>
            
            <div className="summary-total-row">
              <span>Toplam Tutar:</span> 
              <span>₺{grandTotal.toLocaleString('tr-TR')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;



