const jwt = require('jsonwebtoken');
const config = require('./config.js');

export default verifyToken  = (req, res, next) => {
  let token = req.cookies['auth-token']; 

  if (!token) {
    return res.status(403).send({ message: "No token provided" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized access" });
    }
    req.userId = decoded.id;
  next();
  });
};