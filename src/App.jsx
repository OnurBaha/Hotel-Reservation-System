import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import RoomDetail from "./components/RoomDetail";
import Booking from "./components/Booking";
import About from "./components/About";
import LoginModal from "./components/LoginModal";
import Footer from "./components/Footer";
import { UserProvider } from "./context/authContext";

function AppContent() {
  const [view, setView] = useState("home");
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header setView={setView} onLoginClick={() => setIsLoginOpen(true)} />

      <Navbar setView={setView} />

      <main className="flex-grow">
        {view === "home" && <Home setView={setView} />}
        {view === "rooms" && <Rooms setView={setView} />}
        {view === "detail" && <RoomDetail setView={setView} />}
        {view === "booking" && <Booking setView={setView} />}
        {view === "about" && <About />}
      </main>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      <Footer setView={setView} />
    </div>
  );
}

export default function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}