const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema({
  elo: Number,
  win: Number,
  lose: Number
});

module.exports = gameSchema;
