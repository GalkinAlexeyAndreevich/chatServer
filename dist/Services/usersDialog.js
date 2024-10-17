import { UsersDialog } from "../Database/models.js";
export const getUsersDialogs = async () => {
    return await UsersDialog.findAll();
};
export const getUsersDialog = async (id) => {
    return await UsersDialog.findAll({
        where: {
            id_dialog: id
        }
    });
};
