import { User } from "../Database/models/user.js";
import type { IUser } from "../interfaces/index.js";

export const getUsers = async () => {
  return await User.findAll();
};

export const addUser = async (login_user:string, password_user:string) => {
  return await User.create({ login_user, password_user });
};

export const getUser = async (id:number) => {
  return await User.findOne({ where: { id_user: id } });
};

export const getUserOnLogin = async (login_user:string) => {
  return await User.findOne({ where: { login_user } });
};
export const signIn = async(login_user:string, password_user:string):Promise<IUser | null> =>{
  return await User.findOne({
    where:{
      login_user,
      password_user
    }
  }) as IUser | null
}

export const updateImageOnUser = async (userId:number, photoBuffer:Buffer) => {
  try {
    await User.update(
      { photo: photoBuffer },
      { where: { id_user: userId } }
    );
  } catch (error) {
    console.error(error);
  }
};
