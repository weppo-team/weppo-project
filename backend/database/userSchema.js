import mongoose from 'mongoose';
const { gameSchema } = require('./gameSchema')
const { Schema } = mongoose;

const userSchema = new Schema({
    email:  {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },

    googleAuthID: String,
    date: {
        type: Date,
        default: Date.now
    },

    ticTacToeScore: gameSchema
});

module.exports = userSchema;