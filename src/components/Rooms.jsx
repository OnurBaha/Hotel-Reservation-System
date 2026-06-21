import { useState } from 'react'
import RoomGrid from './RoomGrid'

export default function Rooms({ rooms, categories, onRoomClick }) {
  const [selectedCategory, setSelectedCategory] = useState("Tümü")

  const filteredRooms = rooms.filter((room) => {
    return selectedCategory === "Tümü" || room.category === selectedCategory
  })

  return (
    <div className="page-container animate-fade-in">
      
      <div className="filter-tabs-wrapper">
        {categories && categories.map((cat, idx) => (
          <button
            key={idx}
            className={`filter-tab-btn ${
              selectedCategory === cat ? "filter-tab-active" : "filter-tab-inactive"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="rooms-grid-layout">
        
        <div className="sidebar-filter">
          <div>
            <h3 className="sidebar-section-title">Filtrele & Sırala</h3>
            <label className="search-label">Sıralama</label>
            <select className="search-input-sm">
              <option>Önerilen</option>
              <option>Fiyat: Düşükten Yükseğe</option>
              <option>Fiyat: Yüksekten Düşüğe</option>
              <option>En Yüksek Puan</option>
            </select>
          </div>

          <div>
            <label className="search-label">Fiyat Aralığı (Gecelik)</label>
            <input
              type="range"
              min="2000"
              max="25000"
              defaultValue="15000"
              className="range-input"
            />
            <div className="flex justify-between text-xs text-[#554434] mt-1 font-medium">
              <span>₺2,000</span>
              <span>₺25,000+</span>
            </div>
          </div>

          <div>
            <label className="search-label !mb-3">Oda Özellikleri</label>
            <div className="checkbox-list">
              <label className="checkbox-label">
                <input type="checkbox" defaultChecked className="checkbox-input" />{" "}
                <span>Ücretsiz Wi-Fi</span>
              </label>
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox-input" />{" "}
                <span>Deniz Manzarası</span>
              </label>
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox-input" />{" "}
                <span>Özel Havuz</span>
              </label>
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox-input" />{" "}
                <span>Jakuzi</span>
              </label>
            </div>
          </div>
        </div>

        {filteredRooms.length === 0 ? (
          <div className="lg:col-span-3 text-center py-10">
            <p className="text-gray-500 font-medium">Bu kategoride uygun oda bulunamadı.</p>
          </div>
        ) : (
          <RoomGrid rooms={filteredRooms} onRoomClick={onRoomClick} />
        )}
      </div>
    </div>
  )
}