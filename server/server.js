const app = require('express')();
const server = require('http').createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

server.listen(7001, () => {
  console.log('listening on port: 7001');
});

io.on('connection', socket =>{
  console.log('new connection');
  socket.on('message', payload=>{
    console.log('Message received: ', payload);
    io.emit('message', payload);
  });
});