export default function RoomDetail({ setView, room }) {

  if (!room) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <p className="text-gray-500 mb-4">Seçili oda bilgisi bulunamadı.</p>
        <button onClick={() => setView('rooms')} className="btn-back mx-auto">
          ← Odalara Geri Dön
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fadeIn">
      <button onClick={() => setView('rooms')} className="btn-back mb-6">
        ← Odalara Geri Dön
      </button>

      <div className="detail-grid">
        <div>
          <img 
            src={room.image} 
            alt={room.title} 
            className="detail-img w-full h-auto object-cover rounded-xl shadow-md" 
          />
        </div>

        <div className="detail-content-side">
          <div>
            <span className="detail-category-badge">{room.category}</span>
            <h1 className="detail-title">{room.title}</h1>
            <div className="room-rating mb-6">
              <span className="text-amber-500 font-bold">★ {room.rating}</span> 
              <span className="text-gray-400 font-normal text-xs ml-1">({room.ratingCount || 45} değerlendirme)</span>
            </div>
            
            <p className="detail-main-desc">
              {room.description}
            </p>

            <h3 className="detail-features-title">Oda Özellikleri & İmkanlar</h3>
            <div className="detail-features-grid">
              {room.amenities && room.amenities.map((amenity, idx) => (
                <div key={idx} className="feature-item">
                  <span className="feature-bullet">✦</span>{amenity}
                </div>
              ))}

            </div>
          </div>

          <div className="detail-cta-box">
            <div>
              <span className="text-xs text-[#554434] font-semibold uppercase tracking-wider block mb-0.5">Gecelik Fiyat</span>
              <span className="text-2xl md:text-3xl font-bold text-[#8b5000] tracking-tight">₺{room.price.toLocaleString('tr-TR')}</span>
            </div>
            <button onClick={() => setView('booking')} className="btn-booking">
              Hemen Rezervasyon Yap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}