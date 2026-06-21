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
import Contact from "./components/Contact";
import { UserProvider } from "./context/authContext";
import {MOCK_ROOMS, MOCK_CATEGORIES} from "./roomsMock"

function AppContent() {
  const [view, setView] = useState("home");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [rooms, setRooms] = useState(MOCK_ROOMS);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleRoomClick = (room) =>{
    setSelectedRoom(room);
    setView('detail')
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header setView={setView} onLoginClick={() => setIsLoginOpen(true)} />

      <Navbar setView={setView} />

      <main className="flex-grow">
        {view === "home" && <Home setView={setView} />}
        {view === "rooms" && <Rooms rooms={rooms} categories={MOCK_CATEGORIES} onRoomClick={handleRoomClick} />}
        {view === "detail" && <RoomDetail setView={setView} room={selectedRoom} />}
        {view === "booking" && <Booking setView={setView} />}
        {view === "about" && <About />}
        {view === 'contact' && <Contact setView={setView} />}
        
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