import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAvailableGames } from '../../context/AvailableGamesContext'
import { useSelectedGame } from '../../context/SelectedGameContext'
import { axiosForCookies } from '../../services/auth/authServices'

export const useCheckForGameExistence = () => {
  const { gameName } = useParams()
  const availableGames = useAvailableGames()

  return availableGames.find((curr) => curr.name === gameName) !== undefined
}

export const useCheckForGameAvailability = () => {
  const { gameName } = useParams()
  const availableGames = useAvailableGames()
  const [selectedGame] = useSelectedGame()

  const currentGame = availableGames.find((curr) => curr.name === gameName)

  return (
    currentGame !== undefined &&
    !currentGame.disabled &&
    currentGame.name === selectedGame
  )
}

export const useGetRooms = () => {
  const [selectedGame] = useSelectedGame()
  const [loading, setLoading] = useState(true)
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    axiosForCookies
      .get(`/api/rooms/${selectedGame}`)
      .then((response) => {
        setRooms(response.data.rooms)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return {
    loading,
    rooms,
  }
}
