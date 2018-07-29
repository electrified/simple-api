const {flattenPageData} = require('../data/data.helpers')
const data = require('../data/data')

const flattendData = flattenPageData(data.calcio.events)
const outcomes = flattendData.outcomes
const outcomesSize = outcomes.size

let outcomeInterval

module.exports = {
	runLiveSports:
		function (io, liveSportsConfig) {

			const outcomeIntervalValue = liveSportsConfig && liveSportsConfig.outcome

			if (outcomeIntervalValue) {
				clearInterval(outcomeInterval)

				outcomeInterval = setInterval(function() {
					io.emit('pushUpdate', getRandomOutcomeUpdate())
				}, outcomeIntervalValue)
			}
		}
}

function getRandomOutcomeUpdate () {
	const randomOutcomeIndex =
		Math.floor(outcomesSize * Math.random())

	// first item will be the outcome map key (id), second is Map entry value
	const randomOutcome =
		Array.from(outcomes)[randomOutcomeIndex][1]

	const updatedOutcome = Object.assign(randomOutcome, {
		price: (10 * Math.random()).toFixed(2),
	})

	return {
		outcome: updatedOutcome
	}
}
