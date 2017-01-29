const competitionsRouter = require('express').Router();
const compsRepo = require('./competitionsRepository');

competitionsRouter.get('/', (req, res) => {
  res.status(200).json(compsRepo.getCompetitions());
});

competitionsRouter.get('/:id', (req, res) => {
  const id = +req.params.id;
  const competition = compsRepo.getCompetition(id);
  res.status(200).json(competition ? competition : []);
});

module.exports = competitionsRouter;
