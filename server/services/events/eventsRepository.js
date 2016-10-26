const {allCompetitions} = require('../competitions/competitionsRepository');

/**
 * Generate events
 */
let id = 1;
let daysToAdd = 0;
let allEvents = [];

allCompetitions.forEach((competition, competitionIndex) => { // each competition
  [1,2,3,4,5,6,7,8,9,10].forEach(eventIndex => { // has 10 events

    const date = new Date(); // on one of the seven days
    date.setDate(date.getDate() + daysToAdd);

    allEvents.push({
      id,
      title: `Event ${eventIndex}`,
      competionId: competition.id,
      date: date,
    });

    id++;
    daysToAdd++;

    daysToAdd === 7 && (daysToAdd = 0);
  });
});

module.exports = {
  allEvents,
};
