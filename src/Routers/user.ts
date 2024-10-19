import { Router } from "express";
import { userController } from "../Controllers/index.js";
import { uploadUserPhoto } from "../Controllers/user.js";
import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { authenticateToken } from "../middleware/autorization.js";

export const userRouter = Router();

userRouter.get("/", userController.getUsers);
userRouter.post("/signOut", userController.addUser);
userRouter.get("/:id", authenticateToken,userController.getUser);
userRouter.get("/onLogin/:login", userController.getUserOnLogin);
userRouter.post("/signIn", userController.signIn);
userRouter.post('/:userId/photo', uploadUserPhoto, userController.updateImageOnUser);
userRouter.post('/auth/refresh-token', userController.refreshAccessToken);

// Используем кастомный тип в защищенном маршруте
userRouter.get("/auth/protected", authenticateToken, (req: Request, res: Response) => {
  res.status(200).json({ message: "Protected data", user: req.user });
});