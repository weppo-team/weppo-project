const { server } = require('./app');
const dbConnection = require('./database/dbConnection');

require('dotenv').config();

const PORT = process.env.PORT || 9876;

server.listen(PORT, () => {
  dbConnection();
  console.log(`Server listening on port: ${PORT}`);
});
