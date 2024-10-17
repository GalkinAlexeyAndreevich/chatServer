import { sequelize } from "../Database/index.js";
import { Dialog, UsersDialog } from "../Database/models.js";
export const getDialogs = async () => {
  return await Dialog.findAll();
};

export const addDialogForTwo = async (id_first_user:number,id_second_user:number) => {
  console.log(id_first_user,id_second_user);
  return await sequelize.query(
    `
    exec addDialogForTwo ${id_first_user},${id_second_user};
    `.replace(/\"/g, "'")
  );
};


export const getDialog = async (id:number) => {
  return await Dialog.findOne({ where: { id_dialog: id } });
};

export const getDialogOnUser = async (id:number) => {
  return await Dialog.findAll({
    include: {
      model: UsersDialog,
      where: { id_user: id },
    },
  });
};
