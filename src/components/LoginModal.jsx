import { useState, useContext } from "react";
import { UserContext } from "../context/authContext";

export default function LoginModal({ isOpen, onClose }) {
  const { login } = useContext(UserContext); 
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

    if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (email === "admin@luxe.com" && password === "123456") {
      login(email); 
      setEmail("");
      setPassword("");
      onClose();
    } else {
      setError("E-posta veya şifre hatalı!");
    }
  };

  const handleClose = () => {
    setError("");
    setEmail("");
    setPassword("");
    onClose();
  };

  return (
    <div className="login-modal-overlay" onClick={handleClose}>
      <div className="login-modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-bold font-serif text-[#8b5000] border-b pb-2">Giriş Yap</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          {error && <p className="text-red-500 text-xs font-bold">⚠ {error}</p>}
          
          <div className="flex flex-col">
            <label className="text-xs font-bold text-[#554434] uppercase tracking-wider mb-1">E-Posta Adresi</label>
            <input 
              type="email" 
              className="search-input" 
              placeholder="admin@luxe.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-bold text-[#554434] uppercase tracking-wider mb-1">Şifre</label>
            <input 
              type="password" 
              className="search-input" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-checkout !h-12 mt-4 w-full">Giriş Yap</button>
        </form>
        
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 font-bold">✕</button>
      </div>
    </div>
  );
}