const allCompetitions = require('./competitionsRepository').allCompetitions;

const getCompetitions = (req, res) => {
  res.status(200).json(allCompetitions);
};

module.exports = {
  getCompetitions,
};
