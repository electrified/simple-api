
let interval

module.exports = {
	runLiveSports:
		function (io, liveSportsConfig) {

			console.log('liveSportsConfig')
			console.log(liveSportsConfig)
			clearInterval(interval)

			interval = setInterval(function() {
				io.emit('pushUpdate', {
					number: 42,
				})
			}, 3000)
		}
}
