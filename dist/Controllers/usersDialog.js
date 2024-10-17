import { usersDialogServices } from "../Services/index.js";
export const getUsersDialogs = async (res) => {
    let users = await usersDialogServices.getUsersDialogs();
    res.send(users);
};
export const getUsersDialog = async (req, res) => {
    let { id } = req.params;
    let user = await usersDialogServices.getUsersDialog(Number(id));
    res.send(user);
};
