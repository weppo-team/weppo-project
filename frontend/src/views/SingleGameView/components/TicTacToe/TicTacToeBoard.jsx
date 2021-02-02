import PropTypes from 'prop-types'
import { Card, Avatar } from 'antd'
import ticTacToeLogo from '../../../../logos/tic-tac-toe.svg'
import { TicTacToeBoardElements } from './elements'
import { PlayersLabel } from './components/PlayersLabel'
import { TurnLabel } from './components/TurnLabel'
import { Square } from './components/Square'

const { Meta } = Card
const { Container, StyledCard, Grid } = TicTacToeBoardElements

export const TicTacToeBoard = (socket) => {
  const playerSymbol = 'X'

  const boardState = []
  for (let i = 0; i < 9; i += 1) {
    boardState.push(' ')
  }

  const setBoardTile = (i) => {
    if (boardState[i] === ' ') {
      boardState[i] = playerSymbol
      console.log('Data sent')
      socket.emit('madeMove', {
        playerSymbol,
        tile: i,
      })
    }
    console.log(boardState)
  }

  return (
    <Container>
      <StyledCard
        title={
          <Meta avatar={<Avatar src={ticTacToeLogo} />} title="Tic-Tac-Toe" />
        }
      >
        <PlayersLabel playerOne="HomeTeam" playerTwo="Visitors666" />
        <TurnLabel player="HomeTeam" playerSymbol={playerSymbol} />
        <Grid>
          <Square
            number={0}
            playerSymbol={playerSymbol}
            setBoardTile={setBoardTile}
          />
          <Square
            number={1}
            playerSymbol={playerSymbol}
            setBoardTile={setBoardTile}
          />
          <Square
            number={2}
            playerSymbol={playerSymbol}
            setBoardTile={setBoardTile}
          />
          <Square
            number={3}
            playerSymbol={playerSymbol}
            setBoardTile={setBoardTile}
          />
          <Square
            number={4}
            playerSymbol={playerSymbol}
            setBoardTile={setBoardTile}
          />
          <Square
            number={5}
            playerSymbol={playerSymbol}
            setBoardTile={setBoardTile}
          />
          <Square
            number={6}
            playerSymbol={playerSymbol}
            setBoardTile={setBoardTile}
          />
          <Square
            number={7}
            playerSymbol={playerSymbol}
            setBoardTile={setBoardTile}
          />
          <Square
            number={8}
            playerSymbol={playerSymbol}
            setBoardTile={setBoardTile}
          />
        </Grid>
      </StyledCard>
    </Container>
  )
}

Square.propTypes = {
  socket: PropTypes.any.isRequired,
}
