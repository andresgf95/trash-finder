import { DataTypes } from "sequelize";
import db from "./db.mjs";

const File = db.define('File', {
    Ref: {
        type: DataTypes.INTEGER
    },
    Format: {
        type: DataTypes.STRING
    },
    Size: {
        type: DataTypes.INTEGER
    }
});

export default File