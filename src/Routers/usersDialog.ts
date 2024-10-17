import { Router } from "express";
import { usersDialogController } from "../Controllers/index.js";

export const usersDialogRouter = Router();

usersDialogRouter.get("/", usersDialogController.getUsersDialogs);
usersDialogRouter.get("/:id", usersDialogController.getUsersDialog);