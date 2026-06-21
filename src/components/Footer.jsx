import React from 'react';

function Footer({ setView }) {
  return (
    <footer className="site-footer-premium">
      <div className="footer-grid-container">
        
        {/* Marka Tanıtımı */}
        <div>
          <h3 className="footer-brand-title">Luxe Vista Resort</h3>
          <p className="footer-brand-desc">
            Lüksün doğa ile buluştuğu eşsiz tatil deneyimi. Kendinizi Akdeniz'in huzur dolu kollarına bırakın.
          </p>
        </div>

        {/* Hızlı Menü Bağlantıları */}
        <div>
          <h4 className="footer-section-title">Hızlı Menü</h4>
          <ul className="footer-menu-list">
            <li>
              <button onClick={() => setView("home")} className="footer-menu-btn">Anasayfa</button>
            </li>
            <li>
              <button onClick={() => setView("rooms")} className="footer-menu-btn">Odalarımız</button>
            </li>
            <li>
              <button onClick={() => setView("about")} className="footer-menu-btn">Hakkımızda</button>
            </li>
            <li>
              <button onClick={() => setView("contact")} className="footer-menu-btn">İletişim</button>
            </li>
          </ul>
        </div>

        {/* Bülten Aboneliği */}
        <div>
          <h4 className="footer-section-title">Bülten Aboneliği</h4>
          <p className="footer-newsletter-text">
            Özel kampanya ve fırsatlardan ilk siz haberdar olun.
          </p>
          <div className="footer-input-group">
            <input 
              type="email" 
              placeholder="E-posta adresiniz" 
              className="footer-email-input"
            />
            <button className="footer-submit-btn">Kayıt Ol</button>
          </div>
        </div>

      </div>

      {/* Telif Hakkı Çubuğu */}
      <div className="footer-copyright-bar">
        © 2026 Luxe Vista Resort. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;