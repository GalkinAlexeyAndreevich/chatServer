import { Model, Optional, DataTypes } from 'sequelize';
// Описание атрибутов пользователя
export interface IUserAttributes {
  id_user: number;
  login_user: string;
  password_user: string;
  email?: string;
  phone?: string;
  date_create: Date;
  firstName?: string;
  lastName?: string;
  patronomic?: string;
  home_address?: string;
  gender?: 'male' | 'female';
  about?: string;
  date_update: Date;
  birthday?: Date;
  photo?: Buffer;
}

// Указываем, что некоторые поля могут быть опциональными при создании
export interface IUserCreationAttributes extends Optional<IUserAttributes, 'id_user'> {}

// Модель Sequelize с типизацией атрибутов
export class IUser extends Model<IUserAttributes, IUserCreationAttributes> implements IUserAttributes {
  public id_user!: number;
  public login_user!: string;
  public password_user!: string;
  public email?: string;
  public phone?: string;
  public date_create!: Date;
  public firstName?: string;
  public lastName?: string;
  public patronomic?: string;
  public home_address?: string;
  public gender?: 'male' | 'female';
  public about?: string;
  public date_update!: Date;
  public birthday?: Date;
  public photo?: Buffer;

  // Таймстемпы
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}