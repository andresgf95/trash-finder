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
    Has: {
        type: DataTypes.STRING
    }
}, 
    {
        paranoid: true
    }   
); 

export default User