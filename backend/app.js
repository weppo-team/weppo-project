const compression = require('compression');
const express = require('express');
const app = express();

// performance boost
app.use(compression());

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

module.exports = { app };
