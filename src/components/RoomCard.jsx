export default function RoomCard({ room, onRoomClick, searchParams, nights }) {
  
  const adults = Number(searchParams?.adults || 2);
  const children = Number(searchParams?.children || 0);

  const singleAdultPrice = room.price / 2;
  const extraAdultCost = Math.max(0, adults - 2) * singleAdultPrice;
  const childCost = children * (singleAdultPrice * 0.25);

  const dynamicPricePerNight = room.price + extraAdultCost + childCost;
  const grandTotal = dynamicPricePerNight * nights;

  return (
    <div className="room-card cursor-pointer" onClick={() => onRoomClick(room)}>
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
          <p className="room-desc-sm line-clamp-2">{room.description}</p>
        </div>
        
        <div className="room-card-footer !pt-3 flex justify-between items-end">
          <div className="flex flex-col">
            <span className="room-price-sm">
              ₺{room.price.toLocaleString('tr-TR')}{" "}
              <span className="text-xs font-normal text-gray-500">/gece</span>
            </span>
            
            <span className="text-[13px] font-bold text-emerald-700 mt-0.5">
              Toplam: ₺{grandTotal.toLocaleString('tr-TR')}{" "}
              <span className="text-[11px] font-normal text-gray-400">({nights} Gece, {adults}Y+{children}Ç)</span>
            </span>
          </div>

          <button
            className="btn-action-sm h-fit"
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