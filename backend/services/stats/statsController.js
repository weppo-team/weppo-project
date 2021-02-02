const { User } = require('../../database/userModel.js');

const sendStats = (score, res) => {
  res.status(200).send({
    eloScore: score.eloScore,
    amountOfWonGames: score.amountOfWonGames,
    amountOfLostGames: score.amountOfLostGames,
    amountOfTiedGames: score.amountOfTiedGames
  });
}

const getStats = (req, res) => {
  switch(req.body.gameName){
    case 'tictactoe':
      User.findOne({
        username: req.username
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