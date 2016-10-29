const competitionsRouter = require('express').Router();
const {allCompetitions} = require('./competitionsRepository');

competitionsRouter.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.status(200).json(allCompetitions);
});

module.exports = competitionsRouter;
