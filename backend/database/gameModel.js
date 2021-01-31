const mongoose = require('mongoose');
const { gameSchema } = require('./gameSchema')

const Game = mongoose.model('Game', gameSchema); 

module.exports = { Game }