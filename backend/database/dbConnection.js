const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });

const uri = process.env.DB_URI;

const dbConnection = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log('Is database connected:', mongoose.connection.readyState);
  } catch (error) {
    console.error(error);
  }
};

module.exports = dbConnection;
