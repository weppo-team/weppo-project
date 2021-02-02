const { verifyToken } = require('../auth/authJWT'); 
const { getStats } = require('./statsController.js')

module.exports = function(app) {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers', 
    );
    next();
  });

  app.post(
    '/api/stats',
    [verifyToken],
    getStats
  );
}