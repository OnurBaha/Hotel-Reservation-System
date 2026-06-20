export default function Footer({ setView }) {
  return (
    <footer className="site-footer-premium">
      <div className="footer-grid-container">
        <div>
          <h3 className="footer-brand-title">LUXE VISTA RESORT</h3>
          <p className="footer-brand-desc">
            Lüksün ve kusursuz konforun Akdeniz mimarisiyle harmanlandığı, unutulmaz anlar biriktireceğiniz rüya gibi bir tatil konsepti.
          </p>
        </div>

        <div>
          <h4 className="footer-section-title">Hızlı Menü</h4>
          <ul className="footer-menu-list">
            <li>
              <button onClick={() => setView('home')} className="footer-menu-btn">
                Anasayfa
              </button>
            </li>
            <li>
              <button onClick={() => setView('rooms')} className="footer-menu-btn">
                Odalarımız
              </button>
            </li>
            <li>
              <button onClick={() => setView('booking')} className="footer-menu-btn">
                Rezervasyon Paneli
              </button>
            </li>
            <li>
              <button onClick={() => setView('about')} className="footer-menu-btn">
                Hakkımızda
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="footer-section-title">İletişim & Bülten</h4>
          <p className="footer-newsletter-text">Özel teklifler ve indirim kodlarından haberdar olun.</p>
          <div className="footer-input-group">
            <input 
              type="email" 
              placeholder="E-posta adresiniz" 
              className="footer-email-input" 
            />
            <button className="footer-submit-btn">Kayıt</button>
          </div>
        </div>
      </div>

      <div className="footer-copyright-bar">
        © {new Date().getFullYear()} Luxe Vista Resort. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}