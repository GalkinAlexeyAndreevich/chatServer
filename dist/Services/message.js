import { sequelize } from "../Database/index.js";
import { Message } from "../Database/models/message.js";
export const getMessages = async () => {
    return await Message.findAll();
};
export const getMessage = async (id) => {
    return await Message.findOne({ where: { id_message: id } });
};
export const getMessageOnDialog = async (id) => {
    return await Message.findAll({ where: { id_dialog: id } });
};
export const addMessage = async (id_dialog, id_sender, content) => {
    console.log(id_dialog, id_sender, content);
    return await sequelize.query(`
    exec addMessage ${id_dialog},${id_sender},${JSON.stringify(content)};
    `);
};
