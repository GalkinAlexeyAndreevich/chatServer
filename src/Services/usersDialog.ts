import { UsersDialog, type UsersDialogClass } from "../Database/models/usersDialog"

export const getUsersDialogs = async()=>{
  return await UsersDialog.findAll()
}
export const getUsersDialog = async(id:number): Promise<UsersDialogClass[]>=>{
  return await UsersDialog.findAll({
    where:{
      id_dialog:id
    }
  })
}
  
  