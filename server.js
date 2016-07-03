var express = require("express"),
    app = express(),
    http = require("http"),
    server = http.createServer(app),
    io = require('socket.io').listen(server);
 
server.listen(9000);
console.log('server running!');

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
    
    console.log('socket.con:'+socket);
 
    socket.on('send', function (data) {
        
 
        switch ( data.act )
        {
            case "enter":
            io.sockets.emit('get_response', data);
            console.log("Sending getEnter");
            break;
            
            case "changebg":
            io.sockets.emit('get_response', data);
            console.log("Sending changeBg");
            break;
            
            default :
            console.log("[default]act:"+data.act);
            break;
            
        }
 
    });
 
});
