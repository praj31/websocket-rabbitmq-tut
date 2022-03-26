# Websocket RabbitMQ Tutorial

A low resolution, not for absolute beginner, guide to WhatsApp blue tick feature on how messages sent over via a websocket client gets stored on a queue and how user is notified regarding status of the message sent out - SENDING, SENT and RECEIVED.

## Getting Started

1. Clone the repository to your PC.
2. Navigate to `frontend` folder and install packages.

```sh
npm install
```

3. Navigate to `backend` folder and install packages.

```sh
npm install
```

4. To start the frontend, execute inside the folder:

```sh
npm run dev
```

5. Start the RabbitMQ server on default port. I used Docker to do so.
6. To start the websocket server, execute inside backend folder:

```sh
npm run server
```

7. To start the RabbitMQ consumer, execute inside backend folder:

```sh
npm run consumer
```

8. You can open your frontend client on browser address http://localhost:8080/ and try sending the message to enact the working service.

---

If there is any problem that you encounter, please raise an issue.

---
