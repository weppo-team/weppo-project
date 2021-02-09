import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Card, Avatar, Button, message } from 'antd'
import ticTacToeLogo from '../../../../../../logos/tic-tac-toe.svg'
import { TicTacToeBoardElements } from './elements'
import { PlayersLabel } from './components/PlayersLabel'
import { TurnLabel } from './components/TurnLabel'
import { Square } from './components/Square'
import { updateStats } from '../../../../../../services/stats/statsServices'

const { Meta } = Card
const { Container, StyledCard, Grid } = TicTacToeBoardElements

export const TicTacToeBoard = ({ socket, userData }) => {
  const { roomName, gameName } = useParams()
  const [playerSymbol, setPlayerSymbol] = useState(' ')
  const [opponentSymbol, setOpponentSymbol] = useState(' ')
  const playerName =
    userData.usertype === 'guest'
      ? `${userData.username} (guest)`
      : userData.username
  const [opponentName, setOpponentName] = useState('[waiting for opponent]')
  const [canMove, setCanMove] = useState(false)
  const [board, setBoardState] = useState(Array(9).fill(' '))
  const [gameState, setGameState] = useState(true)

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

  const restartGame = () => {
    const emptyBoard = Array(9).fill(' ')
    setBoardState(emptyBoard)
    setCanMove(true)
    setGameState(true)
    socket.emit('restartGame', {
      board: emptyBoard,
      roomName,
      gameState: true,
    })
  }

  const listenOnGameRestart = () => {
    socket.on('restartedGame', (data) => {
      setBoardState(data.newBoard)
      setGameState(data.gameState)
    })
  }

  const giveUserData = () => {
    socket.on('giveUserdata', () => {
      socket.emit('giveUserdata', {
        roomName,
        username: userData.username,
        usertype: userData.usertype,
      })
    })
  }

  const takeUserData = () => {
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
  }

  const madeMove = () => {
    socket.on('madeMove', (data) => {
      setBoardState(data.newBoard)
      setCanMove(data.moveSymbol !== playerSymbol)
    })
  }

  const checkDrawCondition = () => {
    socket.on('endDraw', (data) => {
      setCanMove(false)
      setBoardState(data.newBoard)
      setGameState(false)
      /* multiple re-renders here */
      if (playerSymbol !== ' ' && opponentSymbol !== ' ') {
        message.info(
          'Round ended in draw, click on rematch to start another game',
          10,
        )
        if (userData.usertype !== 'guest') {
          updateStats(gameName, 'draw')
        }
      }
    })
  }

  const checkWinCondition = () => {
    socket.on('endWin', (data) => {
      setCanMove(false)
      setBoardState(data.newBoard)
      setGameState(false)
      /* multiple re-renders here */
      if (data.winnerSymbol === playerSymbol && opponentSymbol !== ' ') {
        message.info(
          'You won this round, click on rematch to start another game',
          10,
        )
        if (userData.usertype !== 'guest') {
          updateStats(gameName, 'win')
        }
      }
      /* multiple re-renders here */
      if (data.winnerSymbol === opponentSymbol && playerSymbol !== ' ') {
        message.info(
          'You lost this round, click on rematch to start another game',
          10,
        )
        if (userData.usertype !== 'guest') {
          updateStats(gameName, 'lost')
        }
      }
    })
  }

  useEffect(() => {
    giveUserData()
    takeUserData()
    madeMove()
    checkWinCondition()
    checkDrawCondition()
    listenOnGameRestart()
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
        <Button
          type="primary"
          size="large"
          disabled={gameState}
          onClick={restartGame}
        >
          Rematch
        </Button>
      </StyledCard>
    </Container>
  )
}

TicTacToeBoard.propTypes = {
  socket: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired,
}
