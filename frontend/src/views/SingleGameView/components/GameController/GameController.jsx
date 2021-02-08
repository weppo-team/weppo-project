import PropTypes from 'prop-types'
import { Redirect } from 'react'
import { TicTacToeBoard } from './components/TicTacToe'
import { useUserData } from '../../../../services/auth/authServices'
import { LoadingSpinnerForViews } from '../../../../components/LoadingSpinnerForViews'

export const GameController = ({ gameName, socket }) => {
  const { userData, loading } = useUserData()

  if (loading) return <LoadingSpinnerForViews />

  switch (gameName) {
    case 'tictactoe':
      return <TicTacToeBoard socket={socket} userData={userData} />
    default:
      return <Redirect to="/" />
  }
}

GameController.propTypes = {
  socket: PropTypes.object.isRequired,
  gameName: PropTypes.string.isRequired,
}
