require('dotenv').config(); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { secret } = require('./config.js');
const { User } = require('../../database/userModel.js');

const register = (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });

  newUser.save((err, newUser) => {
    if (err) {
      console.error(err)
      res.status(500).send({ message: err });
    }
    else{
      res.status(200).send({
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        succesful: true, 
        message: `New user "${newUser.username}" has been registered`, 
      });
    }
  })
};

const login = (req, res) => {
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

      const passwordValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordValid) {
        return res.status(401).send({
          message: 'Invalid password', 
          succesful: false
        });
      }

      const token = jwt.sign({ id: user.id }, secret)
      res.cookie('auth-token', token, { httpOnly: true, secure: true })
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        succesful: true,
        message: 'Login successful'
      });
    });
};

const logout = (req, res) => {
  res.clearCookie('auth-token', { httpOnly: true, secure: true }); 
  res.status(200).send({
    message: 'Logout successful'
  });
}

const getUserData = (req, res) => {
  User.findById(req.userId)  
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: 'Internal error, please try again later' });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }

      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
      });
    }
  );
};

const getLoginStatus = (req, res) => {
  User.findById(req.userId)  
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: 'Internal error, please try again later' });
        return;
      }

      if (!user) {
        return res.status(200).send({ userLogged: false });
      }

      res.status(200).send({ userLogged: true });
    }
  );
};

module.exports = {
  register,
  login, 
  logout,
  getUserData,
  getLoginStatus
}