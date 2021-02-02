const compression = require('compression');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');

const app = express();

const server = http.createServer(app);

// performance boost
app.use(compression());

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
const io = socketio(server);

require('./services/auth/authRoutes')(app);
require('./services/stats/statsRoutes')(app);
require('./games/tictactoe/tictactoeRoutes')(app, io);

const FRONTEND_BUILD_PATH = `${__dirname}/../frontend/build`;

// serve the react app files
app.use(express.static(FRONTEND_BUILD_PATH));

app.get('/api/hello', (_, res) => {
  res.json({ message: 'Hello world' });
});

// Handles any requests that don't match the ones above
app.get('*', (_, res) => {
  res.sendFile('index.html', { root: FRONTEND_BUILD_PATH });
});

module.exports = { app, server };
