import { Server } from 'socket.io';
import { Server as HttpServer } from 'http'; // Импортируем HttpServer
let io: Server;

export function init(server: HttpServer): Server {
  io = new Server(server); // Инициализация Socket.IO с HTTP-сервером
  return io;
}

export function getIo(): Server {
  if (!io) {
    throw new Error('Socket.IO не инициализирован. Убедитесь, что вы вызываете init(server) перед использованием getIo().');
  }
  return io;
}