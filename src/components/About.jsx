// about.jsx
import React from 'react';

function About() {
  return (
    <div className="animate-fadeIn relative">
      
      {/* Değişen Kısım: Sınıf adını 'about-hero-container-under-nav' yaptık.
        Böylece görsel menülerin arkasına kayacak.
      */}
      <div className="about-hero-container-under-nav animate-fadeIn">
        <img 
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80" 
          alt="Resort Aerial View" 
          className="about-hero-img absolute inset-0 z-0" 
        />
        <div className="about-hero-overlay z-10">
          <div className="about-title-wrapper-hero">
            <span className="about-tag">Luxe Vista Resort</span>
            <h1 className="hero-title">Hakkımızda</h1>
            <div className="about-decorator"></div>
          </div>
        </div>
      </div>

      {/* İçerik Kartı */}
      <div className="about-content-card-overlay max-w-4xl mx-auto px-6 py-12 relative z-10 -mt-20 animate-fadeIn">
        <div className="about-content-card">
          <p>
            Luxe Vista Resort, kurulduğu günden bu yana turizm ve otelcilik sektöründe "kişiselleştirilmiş lüks" standartlarını yeniden belirleme vizyonuyla hareket etmektedir. Akdeniz'in kalbinde yer alan resortumuz, doğanın el değmemiş dokusunu çağdaş mimari çizgiler ve kusursuz bir hizmet yaklaşımıyla birleştiriyor.
          </p>
          <p>
            Amacımız, misafirlerimize yalnızca bir konaklama alanı sunmak değil, her anı özenle tasarlanmış benzersiz bir yaşam deneyimi sunmaktır. Alanında uzman şeflerimiz tarafından hazırlanan gastronomi harikalarından, tüm yorgunluğunuzu unutturacak spa merkezlerimize kadar her detay Elite konsept standartlarımıza göre optimize edilmiştir.
          </p>
          <div className="about-stats-grid">
            <div className="about-stat-item">
              <span className="about-stat-number">50+</span>
              <span className="text-xs font-medium text-[#554434]">Ultra Lüks Oda</span>
            </div>
            <div className="about-stat-item">
              <span className="about-stat-number">12</span>
              <span className="text-xs font-medium text-[#554434]">Uluslararası Ödül</span>
            </div>
            <div className="about-stat-item">
              <span className="about-stat-number">%99</span>
              <span className="text-xs font-medium text-[#554434]">Misafir Memnuniyeti</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;