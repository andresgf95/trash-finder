import { Sequelize } from "sequelize";

const db = new Sequelize(
    process.env.NODE_ENV === "production" ? process.env.DB_URL : 'sqlite:./DataBase.sqlite'
)

export default db