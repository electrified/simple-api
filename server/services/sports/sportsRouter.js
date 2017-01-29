const sportsRouter = require('express').Router();
const sportsRepo = require('./sportsRepository');

sportsRouter.get('/', (req, res) => {
  const sports = sportsRepo.getSports();
  res.status(200).json(sports);
});

sportsRouter.get('/:id/competitions', (req, res) => {
  const sportId = +req.params.id;
  const sportCompetitions = sportsRepo.getCompetitionsBySportId(sportId);
  res.status(200).json(sportCompetitions);
});

module.exports = sportsRouter;
