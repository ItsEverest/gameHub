const { time } = require('console')
const express = require('express')
const app = express()
const os = require('os');

// Socket.io setup
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

const players = {}

io.on('connection', (socket) => {
    console.log('A user connected')
    players[socket.id] = {
        x: 100,
        y: 100
    }

    io.emit('updatePlayers', players)

    socket.on('sendMessage', (message) => {
        console.log(players[socket.id].name + ": " + message)
        io.emit('resendMessage', message, players[socket.id].name)
    })

    socket.on('setName', (name) => {
        players[socket.id].name = name
        console.log("socket: " + socket.id + " set name to: " + players[socket.id].name)
    } )

    socket.on ('disconnect', (reason) => {
        console.log(socket.id + " disconnected reason: " + reason)
        delete players[socket.id]
        io.emit('updatePlayers', players)
    })

    console.log(players)
})

// Function to get the server's local IP
function getLocalIp() {
    const networkInterfaces = os.networkInterfaces();
    for (const interfaceName in networkInterfaces) {
      const networkInterface = networkInterfaces[interfaceName];
      for (const iface of networkInterface) {
        if (iface.family === 'IPv4' && !iface.internal) {
          return iface.address; // Return the first non-internal IPv4 address
        }
      }
    }
    return 'localhost';
  }

server.listen(port, '0.0.0.0', () => {
    const localIp = getLocalIp();
    console.log(`Example app listening on http://${localIp}:${port}`)
})

console.log('Server loaded')
