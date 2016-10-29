const sportsRouter = require('express').Router();
const {
  allSports,
  getCompetitionsBySportId,
} = require('./sportsRepository');

sportsRouter.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.status(200).json(allSports);
});

sportsRouter.get('/:id/competitions', (req, res) => {
  const sportId = +req.params.id;
  res.header('Access-Control-Allow-Origin', "*");
  res.status(200).json(getCompetitionsBySportId(sportId));
});

module.exports = sportsRouter;
