import { dialogServices } from "../Services/index.js";
export const getDialogs = async (res) => {
    let dialogs = await dialogServices.getDialogs();
    res.send(dialogs);
};
export const addDialogsForTwo = async (req, res) => {
    console.log(req.body);
    let body = req.body;
    let post = await dialogServices.addDialogForTwo(body.id_first_user, body.id_second_user);
    res.send(post);
};
export const getDialog = async (req, res) => {
    let { id } = req.params;
    let dialog = await dialogServices.getDialog(Number(id));
    res.send(dialog);
};
export const getDialogOnUser = async (req, res) => {
    let { id } = req.params;
    let dialog = await dialogServices.getDialogOnUser(Number(id));
    res.send(dialog);
};
