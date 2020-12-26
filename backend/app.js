const compression = require('compression');
const express = require('express');
const app = express();

// performance boost
app.use(compression());

// serve the react app files
app.use(express.static(`${__dirname}/../frontend/build`));

app.get('/api/hello', (_, res) => {
  res.json({ message: 'Hello world' });
});

module.exports = { app };
