function Header({ setView, onLoginClick }) {
  return (
    <header className="site-header">
      <div onClick={() => setView('home')} className="site-logo">
        LUXE VISTA
      </div>
      <button onClick={onLoginClick} className="btn-login">
        Giriş Yap
      </button>
    </header>
  );
}

export default Header;  