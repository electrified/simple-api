const sportsRouter = require('express').Router();
const sportsRepo = require('./sportsRepository');

sportsRouter.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.status(200).json(sportsRepo.getSports());
});

sportsRouter.get('/:id/competitions', (req, res) => {
  const sportId = +req.params.id;
  res.header('Access-Control-Allow-Origin', "*");
  res.status(200).json(sportsRepo.getCompetitionsBySportId(sportId));
});

module.exports = sportsRouter;
