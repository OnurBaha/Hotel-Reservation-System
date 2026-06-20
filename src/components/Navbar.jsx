function Navbar({ setView }) {
  return (
    <nav className="site-navbar">
      <div className="nav-links-wrapper">
        <button onClick={() => setView('home')} className="nav-btn">
          Ana Sayfa
        </button>
        <button onClick={() => setView('rooms')} className="nav-btn">
          Tüm Odalarımız
        </button>
        <button onClick={() => setView('about')} className="nav-btn">
          Hakkımızda
        </button>
      </div>
    </nav>
  );
}

export default Navbar;