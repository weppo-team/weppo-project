import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { message } from 'antd'
import { ContentHeadingSection } from '../../components/ContentHeadingSection'
import { useGetSocket } from '../../lib/utlis'
import { TicTacToeBoard } from './components/TicTacToe'

export const SingleGameView = () => {
  const { roomName, gameName } = useParams()
  const { socket, initSocket, disconnectSocket } = useGetSocket(
    `/api/sockets/${gameName}`,
  )

  let gameBoard
  switch (gameName) {
    case 'tictactoe':
      gameBoard = <TicTacToeBoard socket={socket} />
      break
    default:
      message.error('Something went wrong while choosing game')
  }

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
      {gameBoard}
    </>
  )
}
