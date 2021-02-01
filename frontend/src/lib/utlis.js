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
