import PropTypes from 'prop-types'
import { Redirect } from 'react'
import { TicTacToeBoard } from './components/TicTacToe'

export const GameController = ({ gameName, socket }) => {
  switch (gameName) {
    case 'tictactoe':
      return <TicTacToeBoard socket={socket} />
    default:
      return <Redirect to="/" />
  }
}

GameController.propTypes = {
  socket: PropTypes.object.isRequired,
  gameName: PropTypes.string.isRequired,
}
