import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'
import { RoomCardElements } from './elements'
import { useSelectedGame } from '../../../../../../context/SelectedGameContext'

const { Container, TitleWrapper, ActionsWrapper, InfoTitle } = RoomCardElements

export const RoomCard = ({ room }) => {
  const { name, connectedSockets, roomSizeLimit } = room
  const history = useHistory()
  const [selectedGame] = useSelectedGame()

  const usersInRoom = connectedSockets.length

  const handleOnClick = () => {
    history.push(`/game/${selectedGame}/${name}`)
  }

  return (
    <Container>
      <TitleWrapper>
        <InfoTitle>Room Owner:</InfoTitle>
        {name}
      </TitleWrapper>
      <ActionsWrapper>
        <div>
          <InfoTitle>Capacity:</InfoTitle>
          {usersInRoom}/{roomSizeLimit}
        </div>
        <Button onClick={handleOnClick}>Join</Button>
      </ActionsWrapper>
    </Container>
  )
}

RoomCard.propTypes = {
  room: PropTypes.object.isRequired,
}
