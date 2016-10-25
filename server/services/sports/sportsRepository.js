const allCompetitions = require('../competitions/competitionsRepository').allCompetitions;

const allSports = [
  { id: 1, title: 'football'},
  { id: 2, title: 'tennis'},
  { id: 3, title: 'basketball'},
  { id: 4, title: 'cricket'},
  { id: 5, title: 'baseball'},
];

const getCompetitionsBySportId =
  sportId => allCompetitions.filter(c => c.sportId === sportId);

module.exports = {
  allSports,
  getCompetitionsBySportId,
};
