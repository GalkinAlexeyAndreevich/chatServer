import { Router } from "express";
import { messageController } from "../Controllers/index.js";

export const messageRouter = Router();

messageRouter.get("/", messageController.getMessages);
messageRouter.post("/", messageController.addMessage);
messageRouter.get("/:id", messageController.getMessage);
messageRouter.get("/onDialog/:id", messageController.getMessageOnDialog);