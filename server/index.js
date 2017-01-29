const app = require('./app');
const server = require('./config');

app.listen(server.port, server.ipaddr);
console.log('Server listening on port: ' + server.port + ', ip : ' + server.ipaddr);
