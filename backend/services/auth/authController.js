require('dotenv').config(); 
const bcrypt = require('bcryptjs');
const { Game } = require('../../database/gameModel.js');
const { User } = require('../../database/userModel.js');
const { createToken } = require('./authJWT')

const register = (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    ticTacToeScore: new Game({
      eloScore: 1200,
      amountOfWonGames: 0,
      amountOfLostGames: 0,
      amountOfTiedGames: 0,
    })
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

      const token = createToken(user.id, user.username, 'user') 
      res.cookie('auth-token', token, { httpOnly: true })
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        succesful: true,
        message: 'Login successful'
      });
    });
};

const guest = (req, res) => {
    const token = createToken(-1, req.username, 'guest') 
    res.cookie('auth-token', token, { httpOnly: true })
    res.status(200).send({
      id: 0,
      username: req.username,
      succesful: true,
      message: 'Login as guest successful',
    })
};


const logout = (req, res) => {
  res.clearCookie('auth-token', { httpOnly: true }); 
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
        usertype: user.usertype, 
      });
    }
  );
};

const getLoginStatus = (req, res) => {
  if(req.usertype === 'guest')
    return res.status(200).send({ 
      userLogged: true,
      userType: req.usertype, 
    });
  User.findById(req.id)  
    .exec((err, user) => {
      if (err) 
        return res.status(500).send({ message: 'Internal error, please try again later' });

      if (!user) 
        return res.status(200).send({ userLogged: false });
      
      return res.status(200).send({ 
        userLogged: true,
        userType: req.usertype, 
      });
    }
  );
};

module.exports = {
  register,
  login, 
  guest, 
  logout,
  getUserData,
  getLoginStatus
}