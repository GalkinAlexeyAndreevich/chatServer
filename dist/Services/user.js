import { User } from "../Database/models/user.js";
export const getUsers = async () => {
    return await User.findAll();
};
export const addUser = async (login_user, password_user) => {
    return await User.create({ login_user, password_user });
};
export const getUser = async (id) => {
    return await User.findOne({ where: { id_user: id } });
};
export const getUserOnLogin = async (login_user) => {
    return await User.findOne({ where: { login_user } });
};
export const signIn = async (login_user, password_user) => {
    return await User.findOne({
        where: {
            login_user,
            password_user
        }
    });
};
export const updateImageOnUser = async (userId, photoBuffer) => {
    try {
        await User.update({ photo: photoBuffer }, { where: { id_user: userId } });
    }
    catch (error) {
        console.error(error);
    }
};
