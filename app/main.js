const producer = require('./modules/producer')
const consumer = require('./modules/consumer')

producer.run()
setTimeout(() => consumer.run(), 500)
// consumer.run()