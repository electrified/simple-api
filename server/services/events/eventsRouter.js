const eventsRouter = require('express').Router();
const { allEvents, eventsByCompetitions } = require('./eventsRepository');

eventsRouter.get('/:ids', (req, res) => {
  const competitionIds = req.params.ids;
  res.header('Access-Control-Allow-Origin', "*");
  res.status(200).json(eventsByCompetitions(competitionIds));
});

module.exports = eventsRouter;
