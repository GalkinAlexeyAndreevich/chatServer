import { sequelize } from "../Database/index.js";
import { Message, type MessageClass } from "../Database/models/message.js";
export const getMessages = async () => {
  return await Message.findAll();
};

export const getMessage = async (id:number):Promise<MessageClass | null>  => {
  return await Message.findOne({ where: { id_message: id } });
};

export const getMessageOnDialog = async (id:number):Promise<MessageClass[]> => {
  return await Message.findAll({ where: { id_dialog: id } });
};
export const addMessage = async (id_dialog:number,id_sender:number,content:string): Promise<MessageClass[]> => {
  console.log(id_dialog,id_sender,content);
  const result =  await sequelize.query(
    `
    exec addMessage ${id_dialog},${id_sender},${JSON.stringify(content)};
    `
  );
  return result[0] as MessageClass[];
};
