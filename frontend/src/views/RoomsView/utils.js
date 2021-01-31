import { useParams } from 'react-router-dom'
import { useAvailableGames } from '../../context/AvailableGamesContext'
import { useSelectedGame } from '../../context/SelectedGameContext'

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
