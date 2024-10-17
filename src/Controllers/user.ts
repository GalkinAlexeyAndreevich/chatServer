import type { Request, Response } from "express";
import { userServices } from "../Services/index.js";
export const getUsers = async (res:Response) => {
  let users = await userServices.getUsers();
  res.send(users);
};

export const addUser = async (req:Request, res:Response) => {
  console.log(req.body);
  let body = req.body;
  let post = await userServices.addUser(
    body.login_user,
    body.password_user
  );
  res.send(post);
};

export const getUser = async (req:Request, res:Response) => {
  let { id } = req.params;
  console.log(id);
  let user = await userServices.getUser(Number(id));
  res.send(user);
};
export const getUserOnLogin = async (req:Request, res:Response) => {
  console.log(req.body);
  let { login } = req.params;
  let user = await userServices.getUserOnLogin(login);
  res.send(user);
};

