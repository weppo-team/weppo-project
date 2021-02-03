import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { ContentHeadingSection } from '../../components/ContentHeadingSection'
import { useGetSocket } from '../../lib/utlis'
import { GameController } from './components/GameController'
import { LoadingSpinnerForViews } from '../../components/LoadingSpinnerForViews'

export const SingleGameView = () => {
  const { roomName, gameName } = useParams()
  const { socket, initSocket, disconnectSocket } = useGetSocket(
    `/api/sockets/${gameName}`,
  )

  useEffect(() => {
    initSocket((argSocket) => argSocket.emit('joinRoom', roomName))
    return () => disconnectSocket()
  }, [socket, initSocket, disconnectSocket])

  if (socket) {
    return (
      <>
        <ContentHeadingSection
          title="Game room"
          subtitle="You are in the room, this the place where you can play the game!"
        />
        <GameController gameName={gameName} socket={socket} />
      </>
    )
  }

  return <LoadingSpinnerForViews />
}
