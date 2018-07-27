const app = require('./app')
const liveSports = require('./liveSports')

const port = 8000
const server = app.server
const io = app.io

server.listen(port)

io.on('connection', function (client) {
	console.log('Client connected...')
	console.log(client)
})

liveSports.runLiveSports(io)

console.log('Server listening on port: ' + port)
