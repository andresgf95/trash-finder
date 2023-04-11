import { DataTypes } from "sequelize";
import db from "./db.mjs";

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

export default SaveList