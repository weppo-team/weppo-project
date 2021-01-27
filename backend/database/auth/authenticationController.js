const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('./config.js');
const { User } = require('../userModel.js');

register = (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });

  newUser.save((err, newUser) => {
    console.log('started saving')
    if (err) {
      console.log(err)
      res.status(500).send({ message: err });
      return;
    }
    else{
      res.status(200).send({
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        succesful: true, 
        message: `New user "${newUser.username}" has been registered`, 
      });
      console.log('200 sent')
    }
  })
};

login = (req, res) => {
  User.findOne({
    username: req.body.username
  })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: 'Internal error, please try again later' });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }

      var passwordValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordValid) {
        return res.status(401).send({
          message: 'Invalid password', 
          succesful: false
        });
      }

      //const token = jwt.sign({ id: user.id }, config.secret)

      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        succesful: true,
        message: 'Login successful'
      });

      //res.cookie('auth-token', token,  { httpOnly: true, secure: true })
    });
};

module.exports = {
  register,
  login
}