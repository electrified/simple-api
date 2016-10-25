const eventsRouter = require('express').Router();

const {
  getevents,
} = require('./eventsControllers');

eventsRouter.get('/', getevents);

module.exports = eventsRouter;
