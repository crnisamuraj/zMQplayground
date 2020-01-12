const zmq = require("zeromq")

async function run() {
  const sock = new zmq.Push

  try {
    await sock.bind("tcp://127.0.0.1:3000")
  } catch (error) {
    console.error("producer socket bind error", error)
  }
  console.log("Producer bound to port 3000")
  while (true) {
    try {
      await sock.send("some work")
      await new Promise(resolve => setTimeout(resolve, 500)) 
    } catch (error) {
      console.log(error)
    }
  }
}

exports.run = run