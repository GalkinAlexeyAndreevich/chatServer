import { DataTypes, Model, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { sequelize } from "..";
import { UsersDialog } from "./usersDialog";

export class RoleUserClass extends Model<
  InferAttributes<RoleUserClass>,
  InferCreationAttributes<RoleUserClass>
> {
  declare id_role: number;
  declare role_name: string;
  declare main_function?: string;
}

export const RoleUser = sequelize.define<RoleUserClass>('role_user', {
  id_role: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  role_name: { type: DataTypes.STRING(50), allowNull: false },
  main_function: { type: DataTypes.STRING(200), allowNull: true },
});

// RoleUser.hasMany(UsersDialog, { foreignKey: 'id_role' });

