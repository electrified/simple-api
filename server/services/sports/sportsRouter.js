const sportsRouter = require('express').Router();

const {
  getSports,
  getCompetitionsForSport,
} = require('./sportsControllers');

sportsRouter.get('/', getSports);
sportsRouter.get('/:id/competitions', getCompetitionsForSport);

module.exports = sportsRouter;
