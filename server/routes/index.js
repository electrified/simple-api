const sportsRouter = require('../services/sports/sportsRouter');
const competitionsRouter = require('../services/competitions/competitionsRouter');
const eventsRouter = require('../services/events/eventsRouter');

module.exports = function (app) {
  app.use('/sports', sportsRouter);
  app.use('/competitions', competitionsRouter);
  app.use('/events', eventsRouter);

  app.use('*', (req, res) => {
    res.sendStatus(404);
  })
};