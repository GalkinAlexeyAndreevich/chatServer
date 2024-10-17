import type { Request, Response } from "express";
import { messageServices } from "../Services/index.js";
export const getMessages = async (req:Request, res:Response) => {
  let messages = await messageServices.getMessages();
  res.send(messages);
};

export const addMessage = async (req:Request, res:Response) => {
  console.log(req.body);
  let body = req.body
  let post = await messageServices.addMessage(
    body.id_dialog,
    body.id_sender,
    body.content,
  );

  res.send(post);
};

export const getMessage = async (req:Request, res:Response) => {
  let { id } = req.params;
  let message = await messageServices.getMessage(Number(id));
  res.send(message);
};
export const getMessageOnDialog = async (req:Request, res:Response) => {
  let { id } = req.params;
  let message = await messageServices.getMessageOnDialog(Number(id));
  res.send(message);
};