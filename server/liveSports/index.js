module.exports = {
	runLiveSports:
		function (io) {
			setInterval(function() {
				io.emit('event', {
					number: 42,
				})
			}, 3000)
		}
}
