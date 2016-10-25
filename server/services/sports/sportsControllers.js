

const sports = [
  { id: 1, title: 'football'},
  { id: 2, title: 'tennis'},
  { id: 3, title: 'basketball'},
  { id: 4, title: 'cricket'},
  { id: 5, title: 'baseball'},
];

const getSports = (req, res) => {
  res.status(200).json(sports);
};

const getCompetitionsForSport = (req, res) => {
  res.sendStatus(201);
};

module.exports = {
  getSports,
  getCompetitionsForSport,
};
