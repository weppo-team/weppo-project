import { useHistory } from 'react-router-dom'
import { useCheckForGameExistence, useCheckForGameAvailability } from './utils'

export const RoomsView = () => {
  const history = useHistory()
  const gameExists = useCheckForGameExistence()
  const isGameAvailable = useCheckForGameAvailability()

  if (!gameExists || !isGameAvailable) {
    history.push('/')
  }

  return (
    <>
      <h1>TODO: ROOMS VIEW</h1>
    </>
  )
}
