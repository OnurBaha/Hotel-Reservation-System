import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Rezervasyon Talebi',
    message: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setIsModalOpen(true);

    setFormData({
      name: '',
      email: '',
      subject: 'Rezervasyon Talebi',
      message: ''
    });
  };

  return (
    <div className="animate-fadeIn">
      
      {isModalOpen && (
        <div className="contact-modal-overlay">
          <div className="contact-modal-content">
            <div className="contact-modal-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="contact-modal-title">Mesajınız İletildi</h3>
            <p className="contact-modal-desc">
              Bizimle iletişime geçtiğiniz için teşekkür ederiz. Ekibimiz en kısa sürede tarafınıza dönüş yapacaktır.
            </p>
            <button onClick={() => setIsModalOpen(false)} className="btn-modal-close">
              Tamam
            </button>
          </div>
        </div>
      )}

      <div className="contact-hero-container">
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80" 
          alt="Contact Hero" 
          className="contact-hero-img" 
        />
        <div className="contact-hero-overlay">
          <div className="contact-hero-content">
            <span className="contact-hero-tag">Luxe Vista Resort</span>
            <h1 className="contact-hero-title">Bize Ulaşın</h1>
            <p className="contact-hero-desc">
              Sorularınız, rezervasyon talepleriniz veya iş başvurularınız için bizimle iletişime 
              geçmekten çekinmeyin. Size yardımcı olmaktan memnuniyet duyarız.
            </p>
            <div className="about-decorator"></div>
          </div>
        </div>
      </div>

      <div className="contact-body-wrapper">
        
        <div className="contact-cards-grid">
          
          <div className="contact-info-card">
            <div className="contact-card-icon-wrapper">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10h18M3 14h18M3 18h18M3 6h18"/></svg>
            </div>
            <h3 className="contact-card-title">Rezervasyon</h3>
            <p className="contact-card-desc">Oda ayırtmak için bizimle e-posta üzerinden iletişime geçebilirsiniz.</p>
            <a href="mailto:reservations@luxevista.com" className="contact-card-link">reservations@luxevista.com</a>
          </div>

          <div className="contact-info-card">
            <div className="contact-card-icon-wrapper">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/></svg>
            </div>
            <h3 className="contact-card-title">Sorularınız</h3>
            <p className="contact-card-desc">Genel sorularınız için bize yazmaktan çekinmeyin.</p>
            <a href="mailto:info@luxevista.com" className="contact-card-link">info@luxevista.com</a>
          </div>

          <div className="contact-info-card">
            <div className="contact-card-icon-wrapper">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>
            <h3 className="contact-card-title">İş İlanları</h3>
            <p className="contact-card-desc">Kariyer fırsatlarını değerlendirmek için CV'nizi bekliyoruz.</p>
            <a href="mailto:careers@luxevista.com" className="contact-card-link">careers@luxevista.com</a>
          </div>

        </div>

        <div className="contact-bottom-bg">
          <div className="contact-bottom-grid">
            
            <div className="contact-map-side">
              <iframe 
                title="Luxe Vista Location"
                className="contact-map-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12196.843663152643!2d30.648356399999998!3d36.88480435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39aa92f39d2c3%3A0x40a049d9a0d9a0!2sAntalya!5e0!3m2!1str!2str!4v1718870000000!5m2!1str!2str"
                allowFullScreen="" loading="lazy">
              </iframe>
              <div className="contact-address-box">
                <h4 className="contact-address-title">Luxe Vista Resort</h4>
                <p className="contact-address-text">123 Coastal Drive, Antalya, Türkiye</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-form-card">
              <h3 className="contact-form-title">
                Bize Mesaj Gönderin
              </h3>
              
              <div className="form-grid-2">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Adınız Soyadınız" 
                  className="contact-form-input" 
                  required 
                />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-posta Adresiniz" 
                  className="contact-form-input" 
                  required 
                />
              </div>

              <div className="search-select-container">
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="search-select-override contact-form-select"
                >
                  <option value="Rezervasyon Talebi">Rezervasyon Talebi</option>
                  <option value="Genel Bilgi">Genel Bilgi</option>
                  <option value="Kariyer">Kariyer</option>
                </select>
                <span className="search-select-icon">▼</span>
              </div>

              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mesajınız..." 
                className="contact-form-textarea" 
                required
              ></textarea>
              
              <button type="submit" className="btn-contact-submit">
                MESAJ GÖNDER
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;