import PropTypes from 'prop-types'

export const RoomCard = ({ room }) => {
  console.log(room)

  return <h1>room</h1>
}

RoomCard.propTypes = {
  room: PropTypes.object.isRequired,
}
