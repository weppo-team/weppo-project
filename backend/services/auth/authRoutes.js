const { checkForDuplicatedUsernameOrEmail } = require('./verifyRegister');
const { login, register, logout, getUserData, getLoginStatus } = require('./authController');
const { verifyToken } = require('./authJWT'); 

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      'Access-Control-Allow-Headers', 
    );
    next();
  });

  app.post(
    '/api/register',
    [checkForDuplicatedUsernameOrEmail],
    register
  );

  app.post('/api/login', login);

  app.post('/api/logout', logout); 

  app.post(
    '/api/user', 
    [verifyToken], 
    getUserData
  );

  app.post(
    '/api/status', 
    [verifyToken], 
    getLoginStatus
  )

};
