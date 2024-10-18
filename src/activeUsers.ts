const activeUsers = new Map();

function addUser(userId:number, socket:any) {
  activeUsers.set(userId, socket);
}

function removeUser(userId:number) {
  activeUsers.delete(userId);
}

function getUserSocket(userId:number) {
  return activeUsers.get(userId);
}

function getAllUsers() {
  return Array.from(activeUsers.keys());
}

export {addUser, removeUser, getUserSocket, getAllUsers,activeUsers}