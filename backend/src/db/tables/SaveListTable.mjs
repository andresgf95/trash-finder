import { DataTypes } from "sequelize";
import db from "../db.mjs";
import Object from "./ObjectsTable.mjs";

const SaveList = db.define('SaveList', {
    IDObject: {
        type: DataTypes.INTEGER
    },
    IDUser: {
        type: DataTypes.INTEGER
    },
    IDDate: {
        type: DataTypes.INTEGER
    }
});

SaveList.hasMany(Object)
Object.belongsTo(SaveList)

export default SaveList