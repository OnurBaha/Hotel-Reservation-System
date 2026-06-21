import RoomCard from './RoomCard'

export default function RoomGrid({ rooms, onRoomClick }) {
  return (
    <div className="rooms-main-list">
      {rooms.map((room) => (
        <RoomCard
          key={room.id}
          room={room}
          onRoomClick={onRoomClick}
        />
      ))}
    </div>
  )
}