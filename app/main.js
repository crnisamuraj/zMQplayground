const producer = require('./producer')
const consumer = require('./consumer')

producer.run()
setTimeout(() => consumer.run(), 500)
// consumer.run()