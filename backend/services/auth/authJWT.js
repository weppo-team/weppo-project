const jwt = require('jsonwebtoken');
const config = require('./config.js');
const { secret } = require('./config.js');

const createToken = (idToken, usernameToken, usertypeToken) => 
  jwt.sign({ 
    id: idToken, 
    username: usernameToken, 
    usertype: usertypeToken 
  }, 
  secret)


const verifyToken = (req, res, next) => {
  const token = req.cookies['auth-token']; 

  if (!token) {
    return res.status(403).send({ message: 'No token provided' });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Wrong token' });
    }
    req.id = decoded.id
    req.username = decoded.username;
    req.usertype = decoded.usertype;
  next();
  });
};

module.exports = { 
  verifyToken, 
  createToken, 
}