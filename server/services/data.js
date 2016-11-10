const allSports = [
  { id: 1, title: 'football'},
  { id: 2, title: 'tennis'},
  { id: 3, title: 'basketball'},
  { id: 4, title: 'cricket'},
  { id: 5, title: 'baseball'},
];

const allCompetitions = [
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
      competitionId: competition.id,
      date: date,
    });

    id++;

    // if tennis, disable the third date, else the third & fourth.
    (daysToAdd === 2) ?
      daysToAdd = daysToAdd + (competition.sportId === 2 ? 2 : 3) : daysToAdd++;

    daysToAdd === 7 && (daysToAdd = 0);
  });
});

module.exports = {
  allSports,
  allCompetitions,
  allEvents,
}