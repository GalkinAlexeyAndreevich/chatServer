import { Dialog } from "./models/dialog";
import { Message } from "./models/message";
import { RoleUser } from "./models/roleUser";
import { User } from "./models/user";
import { UsersDialog } from "./models/usersDialog";

User.hasMany(Message, { foreignKey: 'id_sender' });
Message.belongsTo(User, { foreignKey: 'id_sender' });

Dialog.hasMany(Message, { foreignKey: 'id_dialog', as:'messages' });
Message.belongsTo(Dialog, { foreignKey: 'id_dialog' });

User.belongsToMany(Dialog, { through: UsersDialog, foreignKey: 'id_user' });
Dialog.belongsToMany(User, { through: UsersDialog, foreignKey: 'id_dialog' });

RoleUser.hasMany(UsersDialog, { foreignKey: 'id_role' });
UsersDialog.belongsTo(RoleUser, { foreignKey: 'id_role' });

User.hasMany(UsersDialog, { foreignKey: 'id_user' });
UsersDialog.belongsTo(User, { foreignKey: 'id_user' });

Dialog.hasMany(UsersDialog, { foreignKey: 'id_dialog', as: 'usersDialog' });
UsersDialog.belongsTo(Dialog, { foreignKey: 'id_dialog' });