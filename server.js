var WebSocketServer = require('ws').Server
var wss = new WebSocketServer({ port: 8080 });

var express = require('express');
var app = express();
var serverUrl = "localhost";

app.post('/', function (req, res) {
  console.log('connected');
  res.end();
});

app.use(express.static(__dirname + '/'));

var listener = app.listen(8000, function(){
    console.log("Client Server is listening at " + serverUrl + ":" + listener.address().port);
});
console.log("Web Socket Server is running at " + serverUrl + ":" + wss.options.port);

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

setInterval(function () {
  ws.send('something');
}, 2000);
});
