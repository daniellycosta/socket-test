const handler = (req, res) => { console.log(req.url) }

const app = require('http').createServer(handler);
const io = require('socket.io')(app);
const fs = require('fs');

io.on('connection', (socket) => {
  socket.emit('emit_test', 'Hello world');
  socket.on('on_test', (data) => {
    console.log(`Data has arrived: ${data}`);
  });
});

const PORT = 80;
app.listen(PORT, () => console.log(`server is listening on ${PORT}`));
      
