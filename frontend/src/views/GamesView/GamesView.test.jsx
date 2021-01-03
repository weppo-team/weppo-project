import { screen } from '@testing-library/react'
import { render } from '../../lib/testUtils'
import { GamesView } from './GamesView'

// TODO: test user interactions with tiles
// clicking on tiles
// hovering the tiles
// currently it is not done because lack of my time @Dawid
describe('GamesView tests', () => {
  // "base games" are the games that will surely be in our app (Tic-Tac-Toe. Checkers)
  it('should render base games', () => {
    render(<GamesView />)

    expect(screen.getByText('Checkers')).toBeInTheDocument()
    expect(screen.getByText('Tic-Tac-Toe')).toBeInTheDocument()
    expect(screen.getByText('Chess')).toBeInTheDocument()
  })
})
