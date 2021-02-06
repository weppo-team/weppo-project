const { verifyToken } = require('../../services/auth/authJWT');

const ROOM_SIZE_LIMIT = 2;

const checkIfDraw = (board) => !board.includes(' ')

const checkIfWon = (board) => 
                    (board[0] !== ' ' && board[0] === board[1] === board[2]) ||
                    (board[3] !== ' ' && board[3] === board[4] === board[5]) ||
                    (board[6] !== ' ' && board[6] === board[7] === board[8]) ||
                    (board[0] !== ' ' && board[0] === board[3] === board[6]) ||
                    (board[1] !== ' ' && board[1] === board[4] === board[7]) ||
                    (board[2] !== ' ' && board[2] === board[5] === board[8]) ||
                    (board[0] !== ' ' && board[0] === board[4] === board[8]) ||
                    (board[2] !== ' ' && board[2] === board[4] === board[6])

module.exports = function (app, io) {
  const tictactoeRooms = io.of('/api/sockets/tictactoe');

  tictactoeRooms.on('connection', socket => {
    console.log(`connected: ${socket.id}`);

    socket.on('disconnect', () => {
      console.log(`disconnected: ${socket.id}`);
    });

    socket.on('joinRoom', name => {
      socket.join(name)
      const roomContent = tictactoeRooms.adapter.rooms.get(name)
      if(roomContent.size === 2)
        tictactoeRooms.to(name).emit('giveUserdata', {})
    });

    socket.on('giveUserdata', userData => {
      const roomName = userData.roomName
      tictactoeRooms.to(roomName).emit('takeUserdata', {
        symbol: tictactoeRooms.adapter.rooms.get(roomName).values().next().value === socket.id ? 'X' : 'O',
        username: userData.username, 
        usertype: userData.usertype
      });
    })

    socket.on('makeMove', (moveData) => {
      const newBoard = moveData.board
      newBoard[moveData.tile] = moveData.playerSymbol
      if (checkIfWon(newBoard)) {
        tictactoeRooms.to(moveData.roomName).emit('endWin', {
          winnerSymbol: moveData.playerSymbol,
          newBoard
        })
      }
      else if (checkIfDraw(newBoard))
        tictactoeRooms.to(moveData.roomName).emit('endDraw', {
          newBoard,
        })
      else {
        tictactoeRooms.to(moveData.roomName).emit('madeMove', {
          newBoard, 
          moveSymbol: moveData.playerSymbol
        })
      }
    })
  });

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Headers');
    next();
  });

  app.get('/api/rooms/tictactoe', [verifyToken], async (req, res) => {
    const roomsNames = [...tictactoeRooms.adapter.rooms.keys()].filter(curr => {
      // note that every user is also connected to the room with just him
      const roomElements = Array.from(tictactoeRooms.adapter.rooms.get(curr));

      // returning rooms that are not full
      return (
        !(roomElements.length === 1 && roomElements[0] === curr) &&
        roomElements.length < ROOM_SIZE_LIMIT
      );
    });

    const rooms = roomsNames.map(curr => ({
      name: curr,
      connectedSockets: Array.from(tictactoeRooms.adapter.rooms.get(curr)),
      roomSizeLimit: ROOM_SIZE_LIMIT,
    }));

    res.send({ rooms });
  });
};
