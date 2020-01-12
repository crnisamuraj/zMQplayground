const producer = require('./modules/producer')
const consumer = require('./modules/consumer')

producer.run(1)
consumer.run(1)
setTimeout(() => {
	consumer.run(2)
	setTimeout(() => {
		consumer.run(3)
	}, 5000)
}, 5000)