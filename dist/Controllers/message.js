import { messageServices } from "../Services/index.js";
import { getUserSocket } from "../activeUsers.js";
import { getUsersDialog } from "../Services/usersDialog.js";
export const getMessages = async (req, res) => {
    let messages = await messageServices.getMessages();
    res.send(messages);
};
export const addMessage = async (req, res) => {
    try {
        console.log(req.body);
        let { id_dialog, id_sender, content } = req.body;
        let post = await messageServices.addMessage(id_dialog, id_sender, content);
        let newMessage = post[0]?.[0];
        if (!newMessage) {
            res.status(400).send({ message: "Message could not be created" });
            return;
        }
        const listUsers = await getUsersDialog(id_dialog);
        listUsers.forEach((user) => {
            const userSocket = getUserSocket(user.id_user);
            if (userSocket) {
                userSocket.emit("newMessage", newMessage);
            }
        });
        res.send(newMessage);
    }
    catch (error) {
        console.error("Error sending message:", error);
        res.status(500).send({ message: "Server error" });
    }
};
export const getMessage = async (req, res) => {
    let { id } = req.params;
    let message = await messageServices.getMessage(Number(id));
    res.send(message);
};
export const getMessageOnDialog = async (req, res) => {
    let { id } = req.params;
    let message = await messageServices.getMessageOnDialog(Number(id));
    res.send(message);
};
