const jwt = require('jsonwebtoken');
const config = require('./config.js');

verifyToken  = (req, res, next) => {
  let token = req.cookies['auth-token']; 

  if (!token) {
    return res.status(403).send({ message: 'No token provided' });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Wrong token' });
    }
    req.userId = decoded.id;
  next();
  });
};

module.exports = { verifyToken }