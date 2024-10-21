import { DataTypes, Model } from "sequelize";
import { sequelize } from "..";
import { Message } from "./message";
import { Dialog } from "./dialog";
import { UsersDialog } from "./usersDialog";
export class UserClass extends Model {
}
export const User = sequelize.define('users', {
    id_user: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    login_user: { type: DataTypes.STRING(100), allowNull: false },
    password_user: { type: DataTypes.STRING(255), allowNull: false },
    email: { type: DataTypes.STRING(70), allowNull: true },
    phone: { type: DataTypes.STRING(15), allowNull: true },
    date_create: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    firstName: { type: DataTypes.STRING(45), allowNull: true },
    lastName: { type: DataTypes.STRING(45), allowNull: true },
    patronomic: { type: DataTypes.STRING(45), allowNull: true },
    home_address: { type: DataTypes.STRING(100), allowNull: true },
    gender: { type: DataTypes.ENUM('male', 'female'), allowNull: true },
    about: { type: DataTypes.STRING(200), allowNull: true },
    date_update: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    birthday: { type: DataTypes.DATE, allowNull: true },
    photo: { type: DataTypes.BLOB('long'), allowNull: true },
});
User.hasMany(Message, { foreignKey: 'id_sender' });
User.belongsToMany(Dialog, { through: UsersDialog, foreignKey: 'id_user' });
User.hasMany(UsersDialog, { foreignKey: 'id_user' });
