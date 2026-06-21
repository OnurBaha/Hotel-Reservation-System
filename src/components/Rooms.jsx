import { useState } from 'react'
import RoomGrid from './RoomGrid'

export default function Rooms({ rooms, categories, onRoomClick }) {
  const [selectedCategory, setSelectedCategory] = useState("Tümü")
  const [sortBy, setSortBy] = useState("Önerilen");
  const [maxPrice, setMaxPrice] = useState(25000);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const handleAmenityChange = (amenityName) => {
    if(selectedAmenities.includes(amenityName)){
      setSelectedAmenities(selectedAmenities.filter(item => item !== amenityName))
    }else {
      setSelectedAmenities([...selectedAmenities, amenityName])
    }
  }

  const filteredRooms = rooms.filter((room) => {
    const matchesCategory = selectedCategory === "Tümü" || room.category === selectedCategory

    const matchesPrice = room.price <= maxPrice 

    const matchesAmenities = selectedAmenities.every(amenity => room.amenities.includes(amenity))

    return matchesCategory && matchesPrice && matchesAmenities
  }).sort((a,b) => {
    if(sortBy === "Fiyat: Düşükten Yükseğe") return a.price - b.price
    if(sortBy === "Fiyat: Yüksekten Düşüğe") return b.price - a.price
    if(sortBy === "En Yüksek Puan") return b.rating - a.rating 
    return 0 
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
            <select className="search-input-sm" value={sortBy} onChange={(e)=> setSortBy(e.target.value)}>
              <option>Önerilen</option>
              <option>Fiyat: Düşükten Yükseğe</option>
              <option>Fiyat: Yüksekten Düşüğe</option>
              <option>En Yüksek Puan</option>
            </select>
          </div>

          <div>
            <label className="search-label">
              Maksimum Fiyat: <span className="text-[#8b5000] font-bold">₺{maxPrice.toLocaleString('tr-TR')}</span>
            </label>
            <input
              type="range"
              min="2000"
              max="25000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
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
              {[
                { id: "wifi", label: "Ücretsiz Wi-Fi", value: "Ücretsiz Wi-Fi" },
                { id: "sea", label: "Deniz Manzarası", value: "Deniz Manzarası" },
                { id: "pool", label: "Özel Havuz", value: "Özel Havuz" },
                { id: "jacuzzi", label: "Jakuzi", value: "Jakuzi" }
              ].map((amenity) => (
                <label key={amenity.id} className="checkbox-label">
                  <input 
                    type="checkbox" 
                    className="checkbox-input"
                    checked={selectedAmenities.includes(amenity.value)}
                    onChange={() => handleAmenityChange(amenity.value)}
                  />{" "}
                  <span>{amenity.label}</span>
                </label>
              ))}
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