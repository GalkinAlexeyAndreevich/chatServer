import { Router } from "express";
import { dialogController } from "../Controllers/index.js";

export const dialogRouter = Router();

dialogRouter.get("/", dialogController.getDialogs);
dialogRouter.post("/forTwo", dialogController.addDialogsForTwo);
dialogRouter.get("/:id", dialogController.getDialog);
dialogRouter.get("/getOnUser/:id", dialogController.getDialogOnUser);
