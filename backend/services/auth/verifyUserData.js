const { User } = require('../../database/userModel');

const checkForDuplicatedUsername = (req, res, next) => {
  User.findOne({
    username: req.body.username
  }).exec((err, foundUsername) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (foundUsername) {
      res.status(400).send({ message: 'Username already in use' });
      return;
    }
    next();
    }); 
  }

const checkForDuplicatedEmail = (req, res, next) => {
  User.findOne({
    email: req.body.email
  }).exec((err, foundEmail) => {
    if (err) {
      console.log(err)
      res.status(500).send({ message: err });
      return;
    }
    if (foundEmail) {
      res.status(400).send({ message: 'Email already in use' });
      return;
    }
    next();
  }); 
}

const verifyRegister = {
  checkForDuplicatedUsername, 
  checkForDuplicatedEmail
}

module.exports = verifyRegister


