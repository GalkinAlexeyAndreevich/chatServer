import { DataTypes } from 'sequelize';
import {sequelize} from './index.js'; // Ваше подключение к базе данных

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

export const Dialog = sequelize.define('dialog', {
  id_dialog: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  dialog_create: { type: DataTypes.DATE, defaultValue: DataTypes.NOW},
  dialog_status: { type: DataTypes.INTEGER, validate: { isIn: [[0, 1, 2]] }},
  dialog_name: { type: DataTypes.STRING(70) },
  id_creator: { type: DataTypes.INTEGER, references: { model: User, key: 'id_user' }},
});

export const Message = sequelize.define('messageC', {
  id_message: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_dialog: { type: DataTypes.INTEGER, references: { model: Dialog, key: 'id_dialog' }},
  id_sender: { type: DataTypes.INTEGER, references: { model: User, key: 'id_user' }},
  content: { type: DataTypes.STRING(500) },
  message_time: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  isRead: { type: DataTypes.BOOLEAN, defaultValue: false },
  isDeleted: { type: DataTypes.BOOLEAN, defaultValue: false },
});

export const RoleUser = sequelize.define('role_user', {
  id_role: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  role_name: { type: DataTypes.STRING(50), allowNull: false },
  main_function: { type: DataTypes.STRING(200), allowNull: true },
});

export const UsersDialog = sequelize.define('usersDialog', {
  id_dialog: { type: DataTypes.INTEGER, primaryKey: true, references: { model: Dialog, key: 'id_dialog' } },
  id_user: { type: DataTypes.INTEGER, primaryKey: true, references: { model: User, key: 'id_user' } },
  id_role: { type: DataTypes.INTEGER, allowNull: false, references: { model: RoleUser, key: 'id_role' } },
});

// Определение связей
User.hasMany(Message, { foreignKey: 'id_sender' });
Message.belongsTo(User, { foreignKey: 'id_sender' });

Dialog.hasMany(Message, { foreignKey: 'id_dialog' });
Message.belongsTo(Dialog, { foreignKey: 'id_dialog' });

User.belongsToMany(Dialog, { through: UsersDialog, foreignKey: 'id_user' });
Dialog.belongsToMany(User, { through: UsersDialog, foreignKey: 'id_dialog' });

RoleUser.hasMany(UsersDialog, { foreignKey: 'id_role' });
UsersDialog.belongsTo(RoleUser, { foreignKey: 'id_role' });

User.hasMany(UsersDialog, { foreignKey: 'id_user' });
UsersDialog.belongsTo(User, { foreignKey: 'id_user' });

Dialog.hasMany(UsersDialog, { foreignKey: 'id_dialog' });
UsersDialog.belongsTo(Dialog, { foreignKey: 'id_dialog' });