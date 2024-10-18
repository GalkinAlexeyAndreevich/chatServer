import { Router } from "express";
import { userController } from "../Controllers/index.js";
import { uploadUserPhoto } from "../Controllers/user.js";

export const userRouter = Router();

userRouter.get("/", userController.getUsers);
userRouter.post("/", userController.addUser);
userRouter.get("/:id", userController.getUser);
userRouter.get("/onLogin/:login", userController.getUserOnLogin);
userRouter.post('/:userId/photo', uploadUserPhoto, userController.updateImageOnUser);