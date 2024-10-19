import { Sequelize } from 'sequelize';
import "dotenv/config";

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'GALKINALEXEY',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      trustedConnection: true,  // Использование доверенного подключения
    }
  },
  define: {
    timestamps: false,
    freezeTableName: true 
  },
  logging: false,
});


