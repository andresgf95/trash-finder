import { DataTypes } from "sequelize";
import db from "../DefineDB.mjs";

const Object = db.define('Object', {
    Title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    LocationDescription: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    paranoid: true
}   
);

export default Object