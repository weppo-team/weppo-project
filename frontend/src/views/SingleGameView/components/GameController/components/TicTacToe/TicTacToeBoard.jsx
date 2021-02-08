import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Card, Avatar, message } from 'antd'
import ticTacToeLogo from '../../../../../../logos/tic-tac-toe.svg'
import { TicTacToeBoardElements } from './elements'
import { PlayersLabel } from './components/PlayersLabel'
import { TurnLabel } from './components/TurnLabel'
import { Square } from './components/Square'

const { Meta } = Card
const { Container, StyledCard, Grid } = TicTacToeBoardElements

export const TicTacToeBoard = ({ socket, userData }) => {
  const { roomName } = useParams()
  const [playerSymbol, setPlayerSymbol] = useState(' ')
  const [opponentSymbol, setOpponentSymbol] = useState(' ')
  const playerName =
    userData.usertype === 'guest'
      ? `${userData.username} (guest)`
      : userData.username
  const [opponentName, setOpponentName] = useState('[waiting for opponent]')
  const [canMove, setCanMove] = useState(false)
  const [board, setBoardState] = useState(Array(9).fill(' '))

  const setBoardTile = (i) => {
    if (canMove) {
      socket.emit('makeMove', {
        playerSymbol,
        tile: i,
        board,
        roomName,
      })
    }
  }

  useEffect(() => {
    socket.on('giveUserdata', () => {
      socket.emit('giveUserdata', {
        roomName,
        username: userData.username,
        usertype: userData.usertype,
      })
    })

    socket.on('takeUserdata', (data) => {
      if (data.username !== userData.username) {
        setCanMove(data.symbol === 'X')
        setPlayerSymbol(data.symbol)
        setOpponentName(
          data.usertype === 'guest'
            ? `${data.username} (guest)`
            : data.username,
        )
        setOpponentSymbol(data.symbol === 'X' ? 'O' : 'X')
      }
    })

    socket.on('madeMove', (data) => {
      setBoardState(data.newBoard)
      setCanMove(data.moveSymbol !== playerSymbol)
    })

    socket.on('endDraw', (data) => {
      setCanMove(false)
      setBoardState(data.newBoard)
      /* multiple re-renders here */
      if (playerSymbol !== ' ' && opponentSymbol !== ' ') {
        message.info('Round ended in draw, next will start in 10 seconds', 10)
      }
    })

    socket.on('endWin', (data) => {
      setCanMove(false)
      setBoardState(data.newBoard)
      /* multiple re-renders here */
      if (data.winnerSymbol === playerSymbol && opponentSymbol)
        message.info('You won this round, next will start in 10 seconds', 10)
      /* multiple re-renders here */
      if (data.winnerSymbol === opponentSymbol && playerSymbol)
        message.info('You lost this round, next will start in 10 seconds', 10)
    })
  }, [playerSymbol, opponentSymbol])

  return (
    <Container>
      <StyledCard
        title={
          <Meta avatar={<Avatar src={ticTacToeLogo} />} title="Tic-Tac-Toe" />
        }
      >
        <PlayersLabel playerOne={playerName} playerTwo={opponentName} />
        <TurnLabel
          player={canMove ? playerName : opponentName}
          playerSymbol={canMove ? playerSymbol : opponentSymbol}
        />
        <Grid>
          {[...Array(9)].map((_, index) => (
            <Square
              key={`square-${index + 1}`}
              number={index}
              setBoardTile={(arg) => setBoardTile(arg)}
              squareContent={board[index]}
            />
          ))}
        </Grid>
      </StyledCard>
    </Container>
  )
}

TicTacToeBoard.propTypes = {
  socket: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired,
}
