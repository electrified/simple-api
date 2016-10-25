const app = require('./app');
const server = require('./config');

// start app with socket io capability
// let httpServer = app.listen(server.port, server.ipaddr);
app.listen(server.port, server.ipaddr);
// var io = require('socket.io').listen(httpServer);

// log server start
console.log('Server listening on port: ' + server.port + ', ip : ' + server.ipaddr);
