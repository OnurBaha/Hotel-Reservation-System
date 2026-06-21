import { useContext } from "react";
import { UserContext } from "../context/authContext";

export default function Header({ setView, onLoginClick }) {
  const { user, logout } = useContext(UserContext);

  return (
    <header className="site-header">
      
      <div 
        onClick={() => setView('home')} 
        className="site-logo flex items-center gap-3 cursor-pointer"
      >
        <img 
          src="/otel-logo.png" 
          alt="Luxe Vista Logo" 
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-sm border border-[#8b5000]/20" 
        />
        <span>LUXE VISTA</span>
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