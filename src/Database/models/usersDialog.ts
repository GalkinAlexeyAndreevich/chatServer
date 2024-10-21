import { DataTypes, Model, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { sequelize } from "..";
import { Dialog } from "./dialog";
import { User } from "./user";
import { RoleUser } from "./roleUser";

export class UsersDialogClass extends Model<
  InferAttributes<UsersDialogClass>, // Атрибуты, которые можно извлечь
  InferCreationAttributes<UsersDialogClass> // Атрибуты при создании
> {
  declare id_dialog: number;
  declare id_user: number;
  declare id_role: number;
}

export const UsersDialog = sequelize.define<UsersDialogClass>('usersDialog', {
  id_dialog: { type: DataTypes.INTEGER, primaryKey: true, references: { model: Dialog, key: 'id_dialog' } },
  id_user: { type: DataTypes.INTEGER, primaryKey: true, references: { model: User, key: 'id_user' } },
  id_role: { type: DataTypes.INTEGER, allowNull: false, references: { model: RoleUser, key: 'id_role' } },
});
