import socketIo from 'socket.io'

const io = socketIo()

io.on("connection", function(socket) {
	console.log("A user connected");
});

export default io