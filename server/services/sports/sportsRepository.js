'use strict';
const competitions = require('../rawData').competitions;
const sports = require('../rawData').sports;
const events = require('../rawData').events;

const getCompetitionsBySportId = (sportId) => {
  return competitions
          .filter(c => c.sportId === sportId)
          .map(c => {
            return Object.assign({}, c, {
              eventCount: events
                .filter(e => e.competitionId === c.id)
                .length
            });
          });
};

const getSports = () => sports;

module.exports = {
  getSports,
  getCompetitionsBySportId,
};
