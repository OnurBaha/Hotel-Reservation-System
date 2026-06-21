export default function RoomCard({ room, onRoomClick }) {
  return (
    <div className="room-card" onClick={() => onRoomClick(room)}>
      <img
        src={room.image}
        alt={room.title}
        className="room-card-img-sm"
      />
      <div className="room-card-body-sm">
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#8b5000]">
              {room.category}
            </span>
            <span className="room-rating-sm">★ {room.rating}</span>
          </div>
          <h3 className="room-title-sm">{room.title}</h3>
          <p className="room-desc-sm">{room.description}</p>
        </div>
        
        <div className="room-card-footer !pt-3">
          <span className="room-price-sm">
            ₺{room.price.toLocaleString('tr-TR')}{" "}
            <span className="text-xs font-normal text-gray-500">/gece</span>
          </span>
          <button
            className="btn-action-sm"
            onClick={(e) => {
              e.stopPropagation(); 
              onRoomClick(room);
            }}
          >
            Detaylar
          </button>
        </div>
      </div>
    </div>
  )
}