const {server, io} = require('./app')
const {runLiveSports} = require('./liveSports')
const port = 8000

server.listen(port)

io.on('connection', function (client) {
	console.log('Client connected...')
	console.log(client)
})

runLiveSports(io)

console.log('Server listening on port: ' + port)
