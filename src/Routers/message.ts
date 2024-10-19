import { Router } from "express";
import { messageController } from "../Controllers/index.js";
import { authenticateToken } from "../middleware/autorization.js";

export const messageRouter = Router();

messageRouter.get("/", authenticateToken, messageController.getMessages);
messageRouter.post("/", authenticateToken, messageController.addMessage);
messageRouter.get("/:id", authenticateToken, messageController.getMessage);
messageRouter.get("/onDialog/:id",authenticateToken, messageController.getMessageOnDialog);