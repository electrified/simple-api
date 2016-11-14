'use strict';

const sports = [
  { id: 1, title: 'football'},
  { id: 2, title: 'tennis'},
  { id: 3, title: 'basketball'},
  { id: 4, title: 'cricket'},
  { id: 5, title: 'baseball'},
];

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

/**
 * Generate events
 */
let id = 1;
let events = [];

const today = new Date().getDay();

// football is on tues, weds, sat & sun, say
// cricket thursday to monday
// tennis weekdays
const football = [0,2,3,6];
const tennis = [1,2,3,4,5];
const cricket = [0,1,4,5,6];

competitions.forEach((competition, competitionIndex) => { // each competition

  // except League 1 & Queens.
  if (competition.id === 3 || competition.id === 6) return;

  let sportDates;
  const sportId = competition.sportId;

  if (sportId === 1) {
    sportDates = [...football];
  } else if (sportId === 2) {
    sportDates = [...tennis];
  } else {
    sportDates = [...cricket];
  }

  let counter = 0;
  [1,2,3,4,5,6,7,8,9,10].forEach(eventIndex => { // has 10 events

    const date = new Date(); // on one of the seven days
    const daysToAdd = sportDates[counter] < today ?
      7 - (today - sportDates[counter]) : sportDates[counter] - today;

    date.setDate(date.getDate() + daysToAdd);

    events.push({
      id,
      title: `${competition.title} - Event ${eventIndex}`,
      competitionId: competition.id,
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
    });

    if (counter === sportDates.length - 1) {
      counter = 0;
    } else {
      counter++;
    }

    id++;
  });
});

console.log(events);

/**
 * Generate markets - every event has 3 markets, say.
 */
const markets = [];

/**
 * Make available
 */
module.exports = {
  sports,
  competitions,
  events,
  markets,
}