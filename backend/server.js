const { app } = require('./app');
const DBConnection = require('./database/DBConnection')

require('dotenv').config();

const PORT = process.env.PORT || 9876;

app.listen(PORT, () => {
  DBConnection();
  console.log(`Server listening on port: ${PORT}`);
});
