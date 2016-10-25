

const competitions = [
  { id: 1, title: 'Premier League', sportId: 1},
  { id: 2, title: 'Championship', sportId: 1},
  { id: 3, title: 'League 1', sportId: 1},
  { id: 4, title: 'League 2', sportId: 1},
  { id: 5, title: 'Wimbledon', sportId: 2},
  { id: 6, title: 'Queens', sportId: 2},
  { id: 7, title: 'US Open', sportId: 2},
  { id: 8, title: 'County Championship', sportId: 4},
  { id: 9, title: '20/20 Bash', sportId: 4},
];

const getCompetitions = (req, res) => {
  res.status(200).json(competitions);
};

module.exports = {
  competitions,
  getCompetitions,
};
