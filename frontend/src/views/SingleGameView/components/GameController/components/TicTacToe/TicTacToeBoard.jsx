import PropTypes from 'prop-types'
import { useState } from 'react'
import { Card, Avatar, message } from 'antd'
import ticTacToeLogo from '../../../../../../logos/tic-tac-toe.svg'
import { TicTacToeBoardElements } from './elements'
import { PlayersLabel } from './components/PlayersLabel'
import { TurnLabel } from './components/TurnLabel'
import { Square } from './components/Square'

const { Meta } = Card
const { Container, StyledCard, Grid } = TicTacToeBoardElements

export const TicTacToeBoard = ({ socket, userData }) => {
  const [roomName, setRoomName] = useState(null)
  const [playerSymbol, setPlayerSymbol] = useState(' ')
  const playerName =
    userData.usertype === 'guest'
      ? `${userData.username} (guest)`
      : userData.username
  const [opponentName, setOpponentName] = useState('[waiting for opponent]')
  const [opponentType, setOpponentType] = useState('N/A')
  const [canMove, setCanMove] = useState('false')
  const [board, setBoardState] = useState([
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
  ])

  const setBoardTile = (i) => {
    console.log(`${canMove} - ${roomName}`)
    if (canMove) {
      socket.emit('makeMove', {
        playerSymbol,
        tile: i,
        board,
        roomName,
      })
    }
  }

  socket.on('giveUserdata', (data) => {
    setRoomName(data.roomName)
    socket.emit('giveUserdata', {
      roomName: data.roomName,
      username: userData.username,
      usertype: userData.usertype,
    })
  })

  socket.on('takeUserdata', (data) => {
    if (data.username !== userData.username) {
      setOpponentType(data.usertype)
      setOpponentName(
        opponentType === 'guest' ? `${data.username} (guest)` : data.username,
      )
    }
  })

  socket.on('takeSymbol', (data) => {
    console.log(`Got symbol: ${data.playerSymbol}`)
    setPlayerSymbol(data.playerSymbol)
    if (playerSymbol === 'X') setCanMove(true)
  })

  socket.on('madeMove', (data) => {
    setBoardState(data.newBoard)
    console.log(board)
    setCanMove(data.moveSymbol !== playerSymbol)
    console.log(canMove)
  })

  socket.on('end-win', (data) => {
    if (data.winnerSymbol === playerSymbol)
      message.info('You won this round, next will start in 10 seconds', 10)
    else message.info('You lost this round, next will start in 10 seconds', 10)
  })

  socket.on('end-draw', () => {
    message.info(
      'You have reached draw, next round will start in 10 seconds',
      10,
    )
  })

  return (
    <Container>
      <StyledCard
        title={
          <Meta avatar={<Avatar src={ticTacToeLogo} />} title="Tic-Tac-Toe" />
        }
      >
        <PlayersLabel playerOne={playerName} playerTwo={opponentName} />
        <TurnLabel player="HomeTeam" playerSymbol={playerSymbol} />
        <Grid>
          <Square
            number={0}
            setBoardTile={setBoardTile}
            squareContent={board[0]}
          />
          <Square
            number={1}
            setBoardTile={setBoardTile}
            squareContent={board[1]}
          />
          <Square
            number={2}
            setBoardTile={setBoardTile}
            squareContent={board[2]}
          />
          <Square
            number={3}
            setBoardTile={setBoardTile}
            squareContent={board[3]}
          />
          <Square
            number={4}
            setBoardTile={setBoardTile}
            squareContent={board[4]}
          />
          <Square
            number={5}
            setBoardTile={setBoardTile}
            squareContent={board[5]}
          />
          <Square
            number={6}
            setBoardTile={setBoardTile}
            squareContent={board[6]}
          />
          <Square
            number={7}
            setBoardTile={setBoardTile}
            squareContent={board[7]}
          />
          <Square
            number={8}
            setBoardTile={setBoardTile}
            squareContent={board[8]}
          />
        </Grid>
      </StyledCard>
    </Container>
  )
}

TicTacToeBoard.propTypes = {
  socket: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired,
}
