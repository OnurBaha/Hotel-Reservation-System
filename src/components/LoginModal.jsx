function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-bold font-serif text-[#8b5000] border-b pb-2">Giriş Yap</h2>
        <div className="space-y-4 pt-2">
          <div className="flex flex-col">
            <label className="text-xs font-bold text-[#554434] uppercase tracking-wider mb-1">E-Posta Adresi</label>
            <input type="email" className="search-input" placeholder="ornek@luxe.com" />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-bold text-[#554434] uppercase tracking-wider mb-1">Şifre</label>
            <input type="password" className="search-input" placeholder="••••••••" />
          </div>
          <button onClick={onClose} className="btn-checkout !h-12 mt-4">Giriş Yap</button>
        </div>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 font-bold">✕</button>
      </div>
    </div>
  );
}

export default LoginModal;