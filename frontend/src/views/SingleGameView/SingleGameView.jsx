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
    initSocket()

    return () => disconnectSocket()
  }, [])

  useEffect(() => {
    if (socket) {
      socket.emit('joinRoom', roomName)
    }
    return <LoadingSpinnerForViews />
  }, [socket])

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
