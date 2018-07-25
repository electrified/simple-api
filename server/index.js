const app = require('./app')
const port = 1234

const server = require('http').createServer(app)
var io = require('socket.io')(server)

app.listen(port)

io.on('connection', function (client) {
  console.log('Client connected...')

  client.on('join', function (data) {
    console.log(data)
  })

})

console.log('Server listening on port: ' + port)
