import { DataTypes } from "sequelize";
import db from "../DefineDB.mjs";

const SaveList = db.define('SaveList', {
    IDObject: {
        type: DataTypes.INTEGER
    },
    IDUser: {
        type: DataTypes.INTEGER
    }
});

export default SaveList