import { useEffect, useState } from "react";
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
import { MOCK_ROOMS, MOCK_CATEGORIES } from "./roomsMock";
import { getTodayString, getNextDayString } from "./utils/dateUtils";

function AppContent() {
  const [view, setView] = useState("home");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [searchParams, setSearchParams] = useState({
    checkIn: getTodayString(),
    checkOut: getNextDayString(getTodayString()),
    adults: "2",
    children: "0"
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    setView("detail");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header setView={setView} onLoginClick={() => setIsLoginOpen(true)} />

      <Navbar setView={setView} />

      <main className="flex-grow">
        {view === "home" && (
          <Home setView={setView} onRoomClick={handleRoomClick} searchParams={searchParams} setSearchParams={setSearchParams} />
        )}
        {view === "rooms" && (
          <Rooms
            rooms={MOCK_ROOMS}
            categories={MOCK_CATEGORIES}
            onRoomClick={handleRoomClick}
            searchParams={searchParams}
          />
        )}
        {view === "detail" && (
          <RoomDetail setView={setView} room={selectedRoom} />
        )}
        {view === "booking" && (
          <Booking setView={setView} room={selectedRoom} searchParams={searchParams}/>
        )}
        {view === "about" && <About />}
        {view === "contact" && <Contact setView={setView} />}
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
