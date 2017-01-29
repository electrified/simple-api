'use strict';

const competitions = require('../rawData').competitions;
const events = require('../rawData').events;

const getCompetitions = () => {
  /**
   * All competitions, with event count in order to enable/disable toggle.
   */
  return competitions.map(c => {
    return Object.assign({}, c, {
      eventCount: events
                    .filter(e => e.competitionId === c.id)
                    .length
    });
  });
};

const getCompetition = (id) => {
  /**
   * Competition with events and markets
   */
  const comps = competitions
    .filter(c => c.id === id)
    .map(c => {
      return Object.assign({}, c, {
        events: events
                  .filter(e => e.competitionId === c.id)
      });
    });

  return comps ? comps[0] : undefined;
};

module.exports = {
  getCompetitions,
  getCompetition,
};
