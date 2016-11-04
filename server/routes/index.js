const sportsRouter = require('../services/sports/sportsRouter');
const competitionsRouter = require('../services/competitions/competitionsRouter');

module.exports = function (app) {
  app.use('/sports', sportsRouter);
  app.use('/competitions', competitionsRouter);

  app.use('*', (req, res) => {
    res.sendStatus(404);
  })
};