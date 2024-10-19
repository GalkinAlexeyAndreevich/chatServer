import { Op } from "sequelize";
import { sequelize } from "../Database/index.js";
import { Dialog, Message, User, UsersDialog } from "../Database/models.js";
export const getDialogs = async () => {
  return await Dialog.findAll();
};

export const addDialogForTwo = async (id_first_user:number,id_second_user:number) => {
  console.log(id_first_user,id_second_user);
  return await sequelize.query(`
    exec addDialogForTwo ${id_first_user},${id_second_user};
  `);
};


export const getDialog = async (id:number) => {
  return await Dialog.findOne({ where: { id_dialog: id } });
};

export const getDialogOnUser = async (id: number) => {
  return await Dialog.findAll({
    include: [
      {
        model: UsersDialog,
        include: [{model: User}],
      },
      {
        model: Message,
        limit: 1,
        order: [['message_time', 'DESC'], ['id_message', 'DESC']],
      },
    ],
    where: {
      id_dialog: {
        // Получаем диалоги, в которых есть запрашиваемый пользователь
        [Op.in]: sequelize.literal(`(SELECT id_dialog FROM usersDialog WHERE id_user = ${id})`), 
      },
    },
  });
};