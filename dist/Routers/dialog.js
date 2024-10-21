import { Router } from "express";
import { dialogController } from "../Controllers/index.js";
import { authenticateToken } from "../middleware/autorization.js";
export const dialogRouter = Router();
dialogRouter.get("/", authenticateToken, dialogController.getDialogs);
dialogRouter.post("/forTwo", authenticateToken, dialogController.addDialogsForTwo);
dialogRouter.get("/:id", authenticateToken, dialogController.getDialog);
dialogRouter.get("/getOnUser/:id", authenticateToken, dialogController.getDialogOnUser);
