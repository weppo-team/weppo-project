import { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import ticTacToeLogo from '../../logos/tic-tac-toe.svg'
import checkersLogo from '../../logos/checkers.svg'
import chessLogo from '../../logos/chess.svg'

const createGameRoute = (gameName) => `/game/${gameName}`

export const availableGames = [
  {
    title: 'Tic-Tac-Toe',
    name: 'tictactoe',
    route: createGameRoute('tictactoe'),
    disabled: false,
    icon: ticTacToeLogo,
  },
  {
    title: 'Checkers',
    name: 'checkers',
    route: createGameRoute('checkers'),
    disabled: true,
    icon: checkersLogo,
  },
  {
    title: 'Chess',
    name: 'chess',
    route: createGameRoute('chess'),
    disabled: true,
    icon: chessLogo,
  },
]

const AvailableGamesContext = createContext(availableGames)

export const AvailableGamesProvider = ({ children }) => (
  <AvailableGamesContext.Provider value={availableGames}>
    {children}
  </AvailableGamesContext.Provider>
)

AvailableGamesProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useAvailableGames = () => useContext(AvailableGamesContext)
