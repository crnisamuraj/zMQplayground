const zmq = require("zeromq")

async function run(id) {
  const sock = new zmq.Pull

  try {
    sock.connect("tcp://127.0.0.1:3000")
    console.log(`${id} consumer-worker connected to port 3000`)   
  } catch (error) {
    console.error("consumer socket connect error", error)
  }

  for await (const [msg] of sock) {
    console.log(`consumer ${id} just got message: ${msg.toString()}`)
  }
}

exports.run = run