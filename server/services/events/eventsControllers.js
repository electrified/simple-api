const { allEvents } = require('./eventsRepository');

const getevents = (req, res) => {
  res.status(200).json(allEvents);
};

module.exports = {
  getevents,
};
