const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema({
  elo: Number,
  amountOfWonGames: Number,
  amountOfLostGames: Number,
});

module.exports = gameSchema;
