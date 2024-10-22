import { DataTypes, Model, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { sequelize } from "..";
import { User } from "./user";
import { Dialog } from "./dialog";
export class MessageClass extends Model<
  InferAttributes<MessageClass>,
  InferCreationAttributes<MessageClass>
> {
  declare id_message: number;
  declare id_dialog: number;
  declare id_sender: number;
  declare content: string;
  declare message_time: Date;
  declare is_read: boolean;
  declare is_deleted: boolean;
}

export const Message = sequelize.define<MessageClass>('Message', {
  id_message: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_dialog: { type: DataTypes.INTEGER, references: { model: Dialog, key: 'id_dialog' } },
  id_sender: { type: DataTypes.INTEGER, references: { model: User, key: 'id_user' } },
  content: { type: DataTypes.STRING(500) },
  message_time: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  is_read: { type: DataTypes.BOOLEAN, defaultValue: false },
  is_deleted: { type: DataTypes.BOOLEAN, defaultValue: false },
}, { tableName: 'messages' });


// Message.belongsTo(User, { foreignKey: 'id_sender' });

// Message.belongsTo(Dialog, { foreignKey: 'id_dialog' });