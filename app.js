const handler = (req, res) => {
  fs.readFile(__dirname + '/index.html', (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}

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
      