const mongoose = require('mongoose');
const { Schema } = mongoose;
const { gameSchema } = require('./gameSchema');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: false,
  },

  googleAuthID: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = userSchema;
