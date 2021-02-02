import PropTypes from 'prop-types'
import { RoomCard } from './components/RoomCard'

export const Rooms = ({ rooms }) => (
  <>
    {rooms.map((curr) => (
      <RoomCard room={curr} />
    ))}
  </>
)

Rooms.propTypes = {
  rooms: PropTypes.array.isRequired,
}
