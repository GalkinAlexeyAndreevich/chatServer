const activeUsers = new Map();
function addUser(userId, socket) {
    activeUsers.set(userId, socket);
}
function removeUser(userId) {
    activeUsers.delete(userId);
}
function getUserSocket(userId) {
    return activeUsers.get(userId);
}
function getAllUsers() {
    return Array.from(activeUsers.keys());
}
export { addUser, removeUser, getUserSocket, getAllUsers, activeUsers };
