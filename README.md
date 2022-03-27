# Websocket RabbitMQ Tutorial

A low resolution, not for absolute beginner, guide to WhatsApp blue tick feature on how messages sent over via a websocket client gets stored on a queue and how user is notified regarding status of the message sent out - SENDING, SENT and RECEIVED.

## Getting Started

1. Clone the repository to your PC.
```sh
git clone https://github.com/praj31/websocket-rabbitmq-tut.git
```
2. Navigate to `frontend` folder and install packages.

```sh
npm install
```

3. Navigate to `backend` folder and install packages.

```sh
npm install
```

4. Start the RabbitMQ server on default port. I used Docker to do so. Do specify the port when running a container.

```sh
docker pull rabbitmq
docker run -itd --hostname rabbitmq --name rabbitmq -p 5672:5672 rabbitmq:latest
```

5. To start the websocket server, execute inside backend folder:

```sh
npm run server
```

6. To start the RabbitMQ consumer, execute inside backend folder:

```sh
npm run consumer
```

7. To start the frontend, execute inside the folder:

```sh
npm run dev
```

8. You can open your frontend client on browser address http://localhost:8080/ and try sending the message to enact the working service.

---

If there is any problem that you encounter, please raise an issue.

---

## Link to Blog

https://medium.com/@rajputpraj/websocket-with-rabbitmq-in-nodejs-7be6cb4edde3

Follow for more!
