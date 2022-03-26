const amqp = require('amqplib/callback_api')


const io = require("socket.io")(4000, {
    cors: {
        origin: ['http://localhost:8080']
    }
})

io.on('connection', socket => {
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
            socket.on('PUBLISH', message => {
                const data = {
                    message,
                    id: socket.id
                }
                channel.sendToQueue(QUEUE_1, Buffer.from(JSON.stringify(data)))
                io.to(data.id).emit('SUBSCRIBE', `Sent: ${data.message}`)

            })
            channel.consume(QUEUE_2, (message) => {
                const data = JSON.parse(message.content.toString())
                io.to(data.id).emit('SUBSCRIBE', `Received: ${data.message}`)
            }, { noAck: true })
        })
    })

})