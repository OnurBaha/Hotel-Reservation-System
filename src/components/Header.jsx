import { useContext } from "react";
import { UserContext } from "../context/authContext";

export default function Header({ setView, onLoginClick }) {
  const { user, logout } = useContext(UserContext);

  return (
    <header className="site-header">
      <div onClick={() => setView('home')} className="site-logo">
        LUXE VISTA
      </div>
      
      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-orange-400">Merhaba, {user.name}</span>
          <button onClick={logout} className="btn-login bg-white">
            Çıkış Yap
          </button>
        </div>
      ) : (
        <button onClick={onLoginClick} className="btn-login">
          Giriş Yap
        </button>
      )}
    </header>
  );
}