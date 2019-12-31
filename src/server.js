
import app from './app'
import http from 'http'
import io  from './socketCon'

const server = http.Server(app)
const ioListen = io

ioListen.attach(server);

server.listen(3333)