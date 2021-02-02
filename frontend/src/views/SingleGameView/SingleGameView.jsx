import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { ContentHeadingSection } from '../../components/ContentHeadingSection'
import { useGetSocket } from '../../lib/utlis'

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
  }, [socket])

  return (
    <>
      <ContentHeadingSection
        title="Game room"
        subtitle="You are in the room, this the place where you can play the game!"
      />
    </>
  )
}
