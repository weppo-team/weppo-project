const { verifyToken } = require('../../services/auth/authJWT');

const ROOM_SIZE_LIMIT = 2;

module.exports = function (app, io) {
  const tictactoeRooms = io.of('/api/sockets/tictactoe');

  tictactoeRooms.on('connection', socket => {
    console.log(`connected: ${socket.id}`);

    socket.on('disconnect', () => {
      console.log(`disconnected: ${socket.id}`);
    });

    let roomName

    socket.on('joinRoom', room => {
      socket.join(room);
      roomName = room;
    });

    const boardState = []
    for (let i = 0; i < 9; i += 1) {
      boardState.push(' ')
    }  

    socket.on('getSymbol', () => {
      socket.emit('takeSymbol', {
        playerSymbol: 'X'
      })
      socket.broadcast.emit('takeSymbol', {
        playerSymbol: 'O'
      });
    }
    )

    socket.on('madeMove', moveData => {
      console.log(`Move on server: ${moveData.username}`)
      boardState[moveData.tile] = moveData.playerSymbol
      console.log(`BoardState on server: ${boardState}`)
      socket.emit('madeMove', {
        turn: moveData.playerSymbol == 'X' ? 'O' : 'X', 
        boardState
      });
      socket.broadcast.emit('madeMove', {
        turn: moveData.playerSymbol == 'X' ? 'O' : 'X', 
        boardState
      });
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
