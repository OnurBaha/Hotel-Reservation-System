import RoomCard from './RoomCard'

export default function RoomGrid({ rooms, onRoomClick, searchParams, nights }) {
  return (
    <div className="rooms-main-list">
      {rooms.map((room) => (
        <RoomCard
          key={room.id}
          room={room}
          onRoomClick={onRoomClick}
          searchParams={searchParams}
          nights={nights}
        />
      ))}
    </div>
  )
}