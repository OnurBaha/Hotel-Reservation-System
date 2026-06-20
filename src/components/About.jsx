function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-fade-in">
      <div className="about-title-wrapper">
        <span className="about-tag">Hikayemiz</span>
        <h1 className="about-title">Luxe Vista Resort Hakkında</h1>
        <div className="about-decorator"></div>
      </div>

      <div className="about-img-box">
        <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80" alt="Resort" className="about-img" />
      </div>

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
  );
}

export default About;