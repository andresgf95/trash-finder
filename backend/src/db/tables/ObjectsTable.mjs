import { DataTypes } from "sequelize";
import db from "../db.mjs";
import Location from "./LocationTable.mjs";
import File from "./FilesTable.mjs";

const Object = db.define('Object', {
    Title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    IDUser: {
        type: DataTypes.INTEGER
    },
    IDPhoto: {
        type: DataTypes.INTEGER
    },
    Date: {
        type: DataTypes.DATE
    }
});

Object.hasMany(File)
File.belongsTo(Object)

Location.hasMany(Object)
Object.belongsTo(Location)

export default Object