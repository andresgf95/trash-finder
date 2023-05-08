import { DataTypes } from "sequelize";
import db from "../DefineDB.mjs";

const File = db.define('File', {
    Data: {
        type: DataTypes.TEXT("long")
    }
});

export default File