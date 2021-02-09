const { verifyToken } = require('../auth/authJWT');
const { getStats, updateStats } = require('./statsController.js');

module.exports = function (app) {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Headers');
    next();
  });

  app.get('/api/stats', [verifyToken], getStats);

  app.post('/api/stats', [verifyToken], updateStats);
};
