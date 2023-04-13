import { DataTypes } from "sequelize";
import db from "../DefineDB.mjs";

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

export default Object