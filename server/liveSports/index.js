const {flattenPageData} = require('../data/data.helpers')
const request =  require('request')

let flattenedData = {}

function getData(sport, callback) {
	if(!flattenedData[sport]) {
		
		//http://localhost:8080/primary/${sport}/top/events
		request(`https://vkyyqd7276.execute-api.eu-west-2.amazonaws.com/public/catalog/${sport}/events`, function (error, response, body) {
			flattenedData[sport] = flattenPageData(JSON.parse(body))
		
			console.log(`got data for ${sport}`)
			return callback(flattenedData[sport])
		})
	} else {
		return callback(flattenedData[sport])
	}
}


let outcomeInterval

module.exports = {
	runLiveSports:
		function (io, liveSportsConfig) {

			const outcomeIntervalValue = liveSportsConfig && liveSportsConfig.outcome
			const sport = liveSportsConfig && liveSportsConfig.sport || 'calcio'

			if (outcomeIntervalValue) {
				clearInterval(outcomeInterval)

				outcomeInterval = setInterval(function() {
					console.log("emitting push update")
					io.emit('pushUpdate', getRandomOutcomeUpdate(sport))
				}, outcomeIntervalValue)
			}
		}
}

function getRandomOutcomeUpdate (sport) {
	return getData(sport, function(sportData) {
		const randomOutcomeIndex =
		Math.floor(sportData.outcomes.size * Math.random())

		// first item will be the outcome map key (id), second is Map entry value
		const randomOutcome =
			Array.from(sportData.outcomes)[randomOutcomeIndex][1]

		const updatedOutcome = Object.assign(randomOutcome, {
			price: (10 * Math.random()).toFixed(2),
		})

		return {
			outcome: updatedOutcome
		}
	})
}
