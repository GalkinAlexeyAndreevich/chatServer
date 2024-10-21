import type { Socket } from "socket.io";

const activeUsers = new Map<number, Socket>();

function addUser(userId:number, socket:Socket) {
  activeUsers.set(userId, socket);
}

function removeUser(userId:number) {
  activeUsers.delete(userId);
}

function getUserSocket(userId:number):Socket | undefined {
  return activeUsers.get(userId);
}

function getAllUsers() {
  return Array.from(activeUsers.keys());
}

export {addUser, removeUser, getUserSocket, getAllUsers,activeUsers}