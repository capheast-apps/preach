
import app from './app'
import http from 'http'
import io from 'socket.io'

const server = http.Server(app)
const ioListen = io(server)

server.listen(3333)