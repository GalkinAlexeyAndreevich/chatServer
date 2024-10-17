import { userRouter } from "./user.js";
import { usersDialogRouter } from "./usersDialog.js";
import { messageRouter } from "./message.js";
import { dialogRouter } from "./dialog.js";
import { Router } from "express";

export const appRouter = Router();
appRouter.use("/user", userRouter);
appRouter.use("/usersDialog", usersDialogRouter);
appRouter.use("/message", messageRouter);
appRouter.use("/dialog", dialogRouter);
