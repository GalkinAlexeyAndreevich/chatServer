import { sequelize } from "../Database/index.js";
import { Message } from "../Database/models.js";
export const getMessages = async () => {
  return await Message.findAll();
};

export const getMessage = async (id:number) => {
  return await Message.findOne({ where: { id_message: id } });
};

export const getMessageOnDialog = async (id:number) => {
  return await Message.findAll({ where: { id_dialog: id } });
};
export const addMessage = async (id_dialog:number,id_sender:number,content:string) => {
  console.log(id_dialog,id_sender,content);
  return await sequelize.query(
    `
    exec addMessage ${id_dialog},${id_sender},${JSON.stringify(content)};
    `.replace(/\"/g, "'")
  );
};
