export default function RoomDetail({ setView }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fadeIn">
      <button onClick={() => setView('rooms')} className="btn-back mb-6">
        ← Odalara Geri Dön
      </button>

      <div className="detail-grid">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=80" 
            alt="Oda Detay" 
            className="detail-img w-full h-auto object-cover rounded-xl shadow-md" 
          />
        </div>

        <div className="detail-content-side">
          <div>
            <span className="detail-category-badge">Kral Dairesi</span>
            <h1 className="detail-title">Eşsiz Kral Dairesi (Presidential)</h1>
            <div className="room-rating mb-6">
              <span className="text-amber-500 font-bold">★ 5.0</span> 
              <span className="text-gray-400 font-normal text-xs ml-1">(32 gerçek değerlendirme)</span>
            </div>
            
            <p className="detail-main-desc">
              Luxe Vista kalitesinin zirvesini temsil eden Presidential Süit, tamamen izole edilmiş yapısı, panoramik Akdeniz manzarası, özel geniş toplantı ve yaşam odalarıyla size saray konforu sunuyor. Tamamen akıllı ev otomasyonu ile donatılmış bu dairede konforunuz için her şey düşünüldü.
            </p>

            <h3 className="detail-features-title">Oda Premium Özellikleri</h3>
            <div className="detail-features-grid">
              <div className="feature-item"><span className="feature-bullet">✦</span> Özel Yüzme Havuzu</div>
              <div className="feature-item"><span className="feature-bullet">✦</span> 7/24 Kişisel Uşak Servisi</div>
              <div className="feature-item"><span className="feature-bullet">✦</span> VIP Havalimanı Transferi</div>
              <div className="feature-item"><span className="feature-bullet">✦</span> Odaya Özel Sauna & Jakuzi</div>
              <div className="feature-item"><span className="feature-bullet">✦</span> Sinema ve Ses Sistemi</div>
              <div className="feature-item"><span className="feature-bullet">✦</span> Akıllı Ev Otomasyonu</div>
            </div>
          </div>

          <div className="detail-cta-box">
            <div>
              <span className="text-xs text-[#554434] font-semibold uppercase tracking-wider block mb-0.5">Gecelik Fiyat</span>
              <span className="text-2xl md:text-3xl font-bold text-[#8b5000] tracking-tight">₺16,200</span>
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