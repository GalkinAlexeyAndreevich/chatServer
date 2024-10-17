import { Router } from "express";
import { userController } from "../Controllers/index.js";

export const userRouter = Router();

userRouter.get("/", userController.getUsers);
userRouter.post("/", userController.addUser);
userRouter.get("/:id", userController.getUser);
userRouter.get("/onLogin/:login", userController.getUserOnLogin);