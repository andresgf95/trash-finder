import { DataTypes } from "sequelize";
import db from "../DefineDB.mjs";

const User = db.define('User', {
    UserName: {
        type: DataTypes.STRING,
        unique: true
    },
    Karma: {
        type: DataTypes.INTEGER
    },
    Email: {
        type: DataTypes.STRING
    },
    has: {
        type: DataTypes.STRING
    }
});

export default User