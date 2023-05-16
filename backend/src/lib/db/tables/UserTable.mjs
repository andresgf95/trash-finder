import { DataTypes } from "sequelize";
import db from "../DefineDB.mjs";

const User = db.define('User', {
    UserName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    passResume: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Karma: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, 
    {
        paranoid: true
    }   
); 

export default User