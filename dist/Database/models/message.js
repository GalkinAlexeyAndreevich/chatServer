import { DataTypes, Model } from "sequelize";
import { sequelize } from "..";
import { User } from "./user";
import { Dialog } from "./dialog";
export class MessageClass extends Model {
}
export const Message = sequelize.define('message', {
    id_message: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_dialog: { type: DataTypes.INTEGER, references: { model: Dialog, key: 'id_dialog' } },
    id_sender: { type: DataTypes.INTEGER, references: { model: User, key: 'id_user' } },
    content: { type: DataTypes.STRING(500) },
    message_time: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    isRead: { type: DataTypes.BOOLEAN, defaultValue: false },
    isDeleted: { type: DataTypes.BOOLEAN, defaultValue: false },
}, { tableName: 'messageC' });
Message.belongsTo(User, { foreignKey: 'id_sender' });
Message.belongsTo(Dialog, { foreignKey: 'id_dialog' });
