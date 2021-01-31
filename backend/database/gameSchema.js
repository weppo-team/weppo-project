const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema({
  eloScore: Number,
  amountOfWonGames: Number,
  amountOfLostGames: Number,
  amountOfTiedGames: Number,
});

module.exports = { gameSchema };
