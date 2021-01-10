const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema({
  elo: Number,
  numberOfWonGames: Number,
  numberOfLostGames: Number,
});

module.exports = gameSchema;
