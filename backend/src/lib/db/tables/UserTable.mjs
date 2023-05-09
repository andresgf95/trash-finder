import { DataTypes } from "sequelize";
import db from "../DefineDB.mjs";

const User = db.define('User', {
    UserName: {
        type: DataTypes.STRING,
        unique: true
    },
    passResume: {
        type: DataTypes.STRING
    },
    Karma: {
        type: DataTypes.INTEGER
    },
    Email: {
        type: DataTypes.STRING
    }
}, 
    {
        paranoid: true
    }   
); 

export default User