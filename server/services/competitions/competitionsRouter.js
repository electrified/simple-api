const competitionsRouter = require('express').Router();
const compsRepo = require('./competitionsRepository');

competitionsRouter.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.status(200).json(compsRepo.getCompetitions());
});

competitionsRouter.get('/:id', (req, res) => {
  const id = +req.params.id;
  res.header('Access-Control-Allow-Origin', "*");
  res.status(200).json(compsRepo.getCompetition(id));
});

module.exports = competitionsRouter;
