const { User } = require('../../database/userModel.js');
const { Game } = require('../../database/gameModel.js');

const sendStats = (stats, res) => {
  res.status(200).send({
    eloScore: stats.eloScore,
    amountOfWonGames: stats.amountOfWonGames,
    amountOfLostGames: stats.amountOfLostGames,
    amountOfTiedGames: stats.amountOfTiedGames
  });
}

const getStats = (req, res) => {
  switch(req.body.gameName){
    case 'tictactoe':
      User.findOne({
        id: req.body.id
      }, 
      (err, user) => {
        if(err)
          res.status(500).send({ message: 'Internal error, please try again later' });
        else
          sendStats(user.ticTacToeScore, res)
      })
    break; 
    default:
      res.status(500).send({ message: 'Internal error, please try again later' });
  }
};

module.exports = { getStats }