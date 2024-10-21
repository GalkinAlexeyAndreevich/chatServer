import { DataTypes, Model } from "sequelize";
import { sequelize } from "..";
import { Dialog } from "./dialog";
import { User } from "./user";
import { RoleUser } from "./roleUser";
export class UsersDialogClass extends Model {
}
export const UsersDialog = sequelize.define('usersDialog', {
    id_dialog: { type: DataTypes.INTEGER, primaryKey: true, references: { model: Dialog, key: 'id_dialog' } },
    id_user: { type: DataTypes.INTEGER, primaryKey: true, references: { model: User, key: 'id_user' } },
    id_role: { type: DataTypes.INTEGER, allowNull: false, references: { model: RoleUser, key: 'id_role' } },
});
UsersDialog.belongsTo(RoleUser, { foreignKey: 'id_role' });
UsersDialog.belongsTo(User, { foreignKey: 'id_user' });
UsersDialog.belongsTo(Dialog, { foreignKey: 'id_dialog' });
