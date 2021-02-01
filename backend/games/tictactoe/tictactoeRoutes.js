const { verifyToken } = require('../../services/auth/authJWT');

module.exports = function (app, io) {
  const tictactoeRooms = io.of('/api/sockets/tictactoe');

  tictactoeRooms.on('connection', socket => {
    console.log(`connected: ${socket.id}`);

    socket.on('disconnect', () => {
      console.log(`disconnected: ${socket.id}`);
    });

    socket.on('joinRoom', room => {
      console.log(room);
      socket.join(room);
    });
  });

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Headers');
    next();
  });

  app.get('/api/rooms/tictactoe', [verifyToken], async (req, res) => {
    const roomsNames = [...tictactoeRooms.adapter.rooms.keys()].filter(curr => {
      // note that every user is also connected to the room with just him
      const roomElements = Array.from(tictactoeRooms.adapter.rooms.get(curr));

      return !(roomElements.length === 1 && roomElements[0] === curr);
    });

    const rooms = roomsNames.map(curr => ({
      name: curr,
      connectedSockets: Array.from(tictactoeRooms.adapter.rooms.get(curr)),
    }));

    res.send({ rooms });
  });
};
