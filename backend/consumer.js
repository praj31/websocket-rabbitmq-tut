const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', (err0, connection) => {
    if (err0) {
        throw err0
    }
    connection.createChannel((err1, channel) => {
        if (err1) {
            throw err1
        }
        const QUEUE_1 = 'PUSH'
        const QUEUE_2 = 'PULL'
        channel.assertQueue(QUEUE_1)
        channel.assertQueue(QUEUE_2)
        channel.consume(QUEUE_1, (message) => {
            const data = JSON.parse(message.content.toString())
            channel.sendToQueue(QUEUE_2, Buffer.from(JSON.stringify(data)))
        }, { noAck: true })
    })
})