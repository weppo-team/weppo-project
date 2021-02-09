const { User } = require('../../database/userModel.js');

const sendStats = (score, res) => {
  res.status(200).send({
    eloScore: score.eloScore,
    amountOfWonGames: score.amountOfWonGames,
    amountOfLostGames: score.amountOfLostGames,
    amountOfTiedGames: score.amountOfTiedGames,
  });
};

const getStats = (req, res) => {
  switch (req.query.gameName) {
    case 'tictactoe':
      User.findOne(
        {
          username: req.username,
        },
        (err, user) => {
          if (err)
            res
              .status(500)
              .send({ message: 'Internal error, please try again later' });
          else sendStats(user.ticTacToeScore, res);
        }
      );
      break;
    default:
      res
        .status(500)
        .send({ message: 'Internal error, please try again later' });
  }
};

const updateStats = (req, res) => {
  const getEloChangeBasedOnStatus = status => {
    switch (status) {
      case 'win':
        return 10;

      case 'lost':
        return -10;

      case 'draw':
        return 0;

      default:
        throw new Error('Unknown status!');
    }
  };

  const { gameName, status } = req.body;
  const { username } = req;

  const eloDiff = getEloChangeBasedOnStatus(status);

  switch (gameName) {
    case 'tictactoe':
      User.findOne({ username }, (err, user) => {
        if (err) {
          throw new Error(err);
        }

        const {
          ticTacToeScore: { eloScore },
        } = user;

        user.ticTacToeScore.eloScore =
          eloScore + eloDiff < 0 ? 0 : eloScore + eloDiff;

        if (eloDiff > 0) {
          user.ticTacToeScore.amountOfWonGames += 1;
        } else if (eloDiff < 0) {
          user.ticTacToeScore.amountOfLostGames += 1;
        } else {
          user.ticTacToeScore.amountOfTiedGames += 1;
        }

        user.save();
      });
      break;

    default:
      throw new Error('Game not implemented yet!');
  }

  res.status(200);
};

module.exports = { getStats, updateStats };
