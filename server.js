var WebSocketServer = require('ws').Server
var wss = new WebSocketServer({ port: 8080 });

console.log(wss.options.port);

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

setInterval(function () {
  ws.send('something');
}, 2000);
});
