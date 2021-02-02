import { useState } from 'react'
import io from 'socket.io-client'
import { useSelectedGame } from '../context/SelectedGameContext'
import { useAvailableGames } from '../context/AvailableGamesContext'

export const getResolution = () => {
  const { width, height } = window.screen

  return { width, height }
}

export const useSelectedGameObject = () => {
  const availableGames = useAvailableGames()
  const [selectedGame] = useSelectedGame()

  return availableGames.find((curr) => curr.name === selectedGame)
}

export const useGetSocket = (apiRoute) => {
  const [socket, setSocket] = useState(null)

  const initSocket = () => {
    if (!socket) {
      setSocket(
        io.connect(`${apiRoute}`, {
          transports: ['websocket'],
        }),
      )
    }
  }

  const disconnectSocket = () => {
    if (socket) {
      socket.disconnect()
      setSocket(null)
    }
  }

  return { socket, initSocket, disconnectSocket }
}
