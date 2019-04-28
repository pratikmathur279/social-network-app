var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('an user connected');
  console.log(socket.id);
  socket.on('chat message', function(msg){
    // socket.broadcast.emit('hi');
    io.emit('chat message', msg);
    console.log('message: ' + msg + " from "+ socket.id);
  });
  socket.on('disconnect', function(){
    console.log("socket.id" + socket.id);
    
  })
});



http.listen(3002, function(){
  console.log('listening on *:3002');
});