import { DataTypes, Model, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { sequelize } from "..";
import { User } from "./user";
import { Message } from "./message";
import { UsersDialog } from "./usersDialog";

export class DialogClass extends Model<
  InferAttributes<DialogClass>,
  InferCreationAttributes<DialogClass>
> {
  declare id_dialog: number;
  declare dialog_create: Date;
  declare dialog_status: number;
  declare dialog_name: string;
  declare id_creator: number;
}

export const Dialog = sequelize.define<DialogClass>('dialog', {
  id_dialog: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  dialog_create: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  dialog_status: { type: DataTypes.INTEGER, validate: { isIn: [[0, 1, 2]] } },
  dialog_name: { type: DataTypes.STRING(70) },
  id_creator: { type: DataTypes.INTEGER, references: { model: User, key: 'id_user' } },
});


// Dialog.hasMany(Message, { foreignKey: 'id_dialog' });
// Dialog.belongsToMany(User, { through: UsersDialog, foreignKey: 'id_dialog' });
// Dialog.hasMany(UsersDialog, { foreignKey: 'id_dialog' });