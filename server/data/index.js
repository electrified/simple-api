const data = require('./data')

function getEvents(sport) {
	return data[sport].events
}

function getCompetitions(sport) {
	return data[sport].competitions
}

module.exports = {
	getEvents,
	getCompetitions
}
