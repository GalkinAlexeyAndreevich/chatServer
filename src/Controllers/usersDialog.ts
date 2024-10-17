import type { Request, Response } from "express";
import { usersDialogServices } from "../Services/index.js";
export const getUsersDialogs = async (res:Response) => {
    let users = await usersDialogServices.getUsersDialogs();
    res.send(users);
  };
  
  
export const getUsersDialog = async (req:Request, res:Response) => {
    let { id } = req.params;
    let user = await usersDialogServices.getUsersDialog(Number(id));
    res.send(user);
  };
