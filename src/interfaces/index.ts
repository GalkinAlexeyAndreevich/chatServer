export interface IUser {
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

export interface IDialog {
  id_dialog: number;
  dialog_create: Date;
  dialog_status: number;
  dialog_name?: string;
  id_creator: number;
}

export interface IMessage {
  id_message: number;
  id_dialog: number;
  id_sender: number;
  content: string;
  message_time: Date;
  isRead: boolean;
  isDeleted: boolean;
}

export interface IRoleUser {
  id_role: number;
  role_name: string;
  main_function?: string;
}