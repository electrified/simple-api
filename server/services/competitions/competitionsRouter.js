const competitionsRouter = require('express').Router();

const {
  getCompetitions,
} = require('./competitionsControllers');

competitionsRouter.get('/', getCompetitions);

module.exports = competitionsRouter;
