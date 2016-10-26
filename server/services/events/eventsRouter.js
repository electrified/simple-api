const eventsRouter = require('express').Router();
const { allEvents } = require('./eventsRepository');

eventsRouter.get('/', (req, res) => {
  res.status(200).json(allEvents);
});

module.exports = eventsRouter;
