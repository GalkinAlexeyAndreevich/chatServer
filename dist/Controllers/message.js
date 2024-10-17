import { messageServices } from "../Services/index.js";
export const getMessages = async (req, res) => {
    let messages = await messageServices.getMessages();
    res.send(messages);
};
export const addMessage = async (req, res) => {
    console.log(req.body);
    let body = req.body;
    let post = await messageServices.addMessage(body.id_dialog, body.id_sender, body.content);
    res.send(post);
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
