const express = require('express')
const {join} = require('path')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res, next) => {
  res.sendFile(join(__dirname, 'public/index.html'))
})

const server = app.listen(3000, function () {
  console.log('listening on *:3000')
})

const socketio = require('socket.io')
const socketCommandCenter = socketio(server)

socketCommandCenter.on('connection', (aUsersConnection) => {
  console.log('a user connected: ', aUsersConnection.id)

  aUsersConnection.on('disconnect', function () {
    console.log('Byyyyyee! ', aUsersConnection.id)
  })

  aUsersConnection.on('message', (payload) => {
    console.log('Got this message from ', aUsersConnection.id, ' ', payload)
    aUsersConnection.broadcast.emit(
      'message-from-someone-else',
      `${aUsersConnection.id} says ${payload}`
    )
  })
})
