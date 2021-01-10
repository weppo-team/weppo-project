const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.DB_URI;

const DBConnection = async () => {
  try {
    await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
  }
};

module.exports = DBConnection;
