const {
  allSports,
  getCompetitionsBySportId,
}  = require('./sportsRepository');

const getSports = (req, res) => {
  res.status(200).json(allSports);
};

const getCompetitionsForSport = (req, res) => {
  const sportId = +req.params.id;
  res.status(200).json(getCompetitionsBySportId(sportId));
};

module.exports = {
  getSports,
  getCompetitionsForSport,
};
