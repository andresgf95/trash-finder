import { DataTypes } from "sequelize";
import db from "../DefineDB.mjs";

const Object = db.define('Object', {
    Title: {
        type: DataTypes.STRING
    },
    Description: {
        type: DataTypes.TEXT
    },
    LocationDescription: {
        type: DataTypes.TEXT
    },
    IDUser: {
        type: DataTypes.INTEGER
    }
}, {
    paranoid: true
}   
);

export default Object