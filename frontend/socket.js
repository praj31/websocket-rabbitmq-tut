import { io } from 'socket.io-client'

const socket = io('http://localhost:4000')

const chat = document.querySelector('.container')
const input = document.querySelector('#message')
const send = document.querySelector('#btn-send')

const sendMessage = (message) => {
    const text = document.createElement('p')
    text.innerText = message
    chat.appendChild(text)
}

send.addEventListener('click', (e) => {
    e.preventDefault()

    if (input.value) {
        sendMessage(`Sending: ${input.value}`)
        socket.emit("PUBLISH", input.value)
    }
    input.value = ''
})


socket.on("connect", () => {
    sendMessage(`Connected with ID: ${socket.id}`)
})

socket.on("SUBSCRIBE", (message) => {
    sendMessage(message)
})