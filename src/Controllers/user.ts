import type { Request, RequestHandler, Response } from "express";
import { userServices } from "../Services/index.js";
import multer from 'multer';

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

const storage = multer.memoryStorage(); // Используем память для хранения загруженных файлов
const upload = multer({ storage });
export const updateImageOnUser: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const userId = parseInt(req.params.userId); 
  const photoBuffer = req.file?.buffer;

  if (!photoBuffer) {
    res.status(400).json({ error: 'No photo uploaded' });
    return; 
  }

  try {
    await userServices.updateImageOnUser(userId, photoBuffer);
    res.status(200).json({ message: 'Image updated successfully' });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Failed to update image' }); 
  }
};

// Используем middleware upload.single в маршруте
export const uploadUserPhoto = upload.single('photo');