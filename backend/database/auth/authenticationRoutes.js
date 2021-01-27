const { checkForDuplicatedUsernameOrEmail } = require('./verifyRegister');
const { login, register } = require('./authenticationController');

module.exports = function(app) {
  app.use(function(req, res, next) {
    console.log("got request")
    res.header(
      'Access-Control-Allow-Headers'
    );
    next();
  });

  app.post(
    "/api/register",
    [checkForDuplicatedUsernameOrEmail],
    register
  );

  app.post("/api/login", login);
};
