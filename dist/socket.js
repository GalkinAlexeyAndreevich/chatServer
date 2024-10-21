import { Server } from 'socket.io';
let io;
export function init(server) {
    io = new Server(server, {
        cors: {
            origin: 'http://localhost:5173', // Укажите ваш клиентский адрес
            methods: ['GET', 'POST'],
            credentials: true,
        },
    }); // Инициализация Socket.IO с HTTP-сервером
    return io;
}
export function getIo() {
    if (!io) {
        throw new Error('Socket.IO не инициализирован. Убедитесь, что вы вызываете init(server) перед использованием getIo().');
    }
    return io;
}
