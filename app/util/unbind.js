const zmq = require("zeromq")

const sock = new zmq.Push
sock.unbind("tcp://127.0.0.1:3000")
	.catch((err) => console.error(err))