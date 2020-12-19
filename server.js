const express = require('express');
const app = express();

// serve the react app files
app.use(express.static(`${__dirname}/frontend/build`));

app.get('/api/hello', (_, res) => {
  res.json({ message: 'Hello world' });
});

const PORT = process.env.PORT || 9876;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
