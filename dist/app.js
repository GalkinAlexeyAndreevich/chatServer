import express from "express";
import { sequelize } from "./Database/index.js";
import cors from "cors";
import { appRouter } from "./Routers/index.js";
const app = express();
const port = 4444;
app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.use(express.json({ type: ["application/json", "text/plain"] }));
app.use("/", appRouter);
app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        console.log('Соединение с базой данных установлено.');
    }
    catch (error) {
        console.error('Ошибка подключения:', error);
    }
    console.log(`Port is ${port}`);
});
