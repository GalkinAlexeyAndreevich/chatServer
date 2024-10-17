import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize('chat', 'Alexey', 'root', {
    host: 'GALKINALEXEY',
    dialect: 'mssql',
    dialectOptions: {
        options: {
            trustedConnection: true, // Использование доверенного подключения
        }
    },
    define: {
        timestamps: false,
        freezeTableName: true
    },
    logging: false,
});
