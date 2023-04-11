import { Sequelize } from "sequelize";

const db = new Sequelize ({
    dialect: "sqlite",
    storage: "./DataBase.sqlite"
})

export default db