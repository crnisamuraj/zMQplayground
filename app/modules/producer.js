const zmq = require("zeromq")

async function run(id) {
  const sock = new zmq.Push
  let counter = 0
  try {
    await sock.bind("tcp://127.0.0.1:3000")
  } catch (error) {
    console.error("producer socket bind error", error)
  }
  console.log(`Producer ${id} bound to port 3000`)
  while (true) {
    try {
      await sock.send(`${counter} some work`)
      await new Promise(resolve => setTimeout(resolve, 1000))
      counter++
    } catch (error) {
      console.log(error)
    }
  }
}

exports.run = run