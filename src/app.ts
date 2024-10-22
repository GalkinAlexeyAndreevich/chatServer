import express from "express";
import { sequelize } from "./Database/index.js";
import cors from "cors";
import http from 'http';
import "dotenv/config";
import { appRouter } from "./Routers/index.js";
import './Database/associations.js'; 

import { init as initSocket } from './socket.js';
import { addUser, removeUser } from "./activeUsers.js";
const app = express();
const server = http.createServer(app);

// Инициализируем Socket.IO
const io = initSocket(server);
const port = process.env.PORT;
if (!port) {
  throw new Error("PORT is not defined in the environment variables.");
}
app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.use(express.json({ type: ["application/json", "text/plain"] }));
app.use("/", appRouter);


server.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой данных установлено.');
  } catch (error) {
    console.error('Ошибка подключения:', error);
  }
  console.log(`Port is ${port}`);
});


io.on('connection', (socket) => {
  console.log('A user connected');

  // Получаем данные о пользователе, который подключился
  const userId = Number(socket.handshake.query.userId);  // Передаем userId через параметры запроса

  if (userId) {
    console.log(`User with ID ${userId} connected`);

    // Привязать сокет к идентификатору пользователя
    socket.join(`user_${userId}`);
    addUser(userId, socket);
    // // Обработка других событий
    // socket.on('message', (msg) => {
    //   console.log(`Message from user ${userId}: ${msg}`);
    // });

    socket.on('disconnect', () => {
      console.log(`User ${userId} disconnected`);
      removeUser(userId);
    });
  } else {
    console.log('User ID is missing, disconnecting...');
    socket.disconnect();
  }
});

