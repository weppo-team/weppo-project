const {
  checkForDuplicatedUsername,
  checkForDuplicatedEmail,
} = require('./verifyUserData');
const {
  login,
  register,
  guest,
  logout,
  getUserData,
  getLoginStatus,
} = require('./authController');
const { verifyToken } = require('./authJWT');

module.exports = function (app) {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Headers');
    next();
  });

  app.post(
    '/api/register',
    [checkForDuplicatedUsername, checkForDuplicatedEmail],
    register
  );

  app.post('/api/guest', [checkForDuplicatedUsername], guest);

  app.post('/api/login', login);

  app.post('/api/logout', logout);

  app.post('/api/user', [verifyToken], getUserData);

  app.post('/api/status', [verifyToken], getLoginStatus);
};
