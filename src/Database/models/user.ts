import { DataTypes, Model, type InferAttributes, type InferCreationAttributes, type Optional } from "sequelize";
import { sequelize } from "..";
interface UserAttributes {
  id_user: number;
  login_user: string;
  password_user: string;
  email?: string;
  phone?: string;
  date_create: Date;
  first_name?: string;
  last_name?: string;
  patronymic?: string;
  home_address?: string;
  gender?: 'male' | 'female';
  about?: string;
  date_update: Date;
  birthday?: Date;
  photo?: Buffer;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id_user' | 'date_create' | 'date_update'> {}
export class UserClass extends Model<
  InferAttributes<UserClass>,
  UserCreationAttributes
> {
  declare id_user: number;
  declare login_user: string;
  declare password_user: string;
  declare email?: string;
  declare phone?: string;
  declare date_create: Date;
  declare first_name?: string;
  declare last_name?: string;
  declare patronymic?: string;
  declare home_address?: string;
  declare gender?: 'male' | 'female';
  declare about?: string;
  declare date_update: Date;
  declare birthday?: Date;
  declare photo?: Buffer; // Если используется BLOB, то Buffer
}

export const User = sequelize.define<UserClass>('users', {
  id_user: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  login_user: { type: DataTypes.STRING(100), allowNull: false },
  password_user: { type: DataTypes.STRING(255), allowNull: false },
  email: { type: DataTypes.STRING(70), allowNull: true },
  phone: { type: DataTypes.STRING(15), allowNull: true },
  date_create: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  first_name: { type: DataTypes.STRING(45), allowNull: true },
  last_name: { type: DataTypes.STRING(45), allowNull: true },
  patronymic: { type: DataTypes.STRING(45), allowNull: true },
  home_address: { type: DataTypes.STRING(100), allowNull: true },
  gender: { type: DataTypes.ENUM('male', 'female'), allowNull: true },
  about: { type: DataTypes.STRING(200), allowNull: true },
  date_update: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  birthday: { type: DataTypes.DATE, allowNull: true },
  photo: { type: DataTypes.BLOB('long'), allowNull: true },
});

// User.hasMany(Message, { foreignKey: 'id_sender' });
// User.belongsToMany(Dialog, { through: UsersDialog, foreignKey: 'id_user' });
// User.hasMany(UsersDialog, { foreignKey: 'id_user' });