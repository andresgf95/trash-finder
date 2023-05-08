import { DataTypes } from "sequelize";
import db from "../DefineDB.mjs";

const Location = db.define('Location', {
    IDObject: {
        type: DataTypes.INTEGER
    },

    Latitude: {
        type: DataTypes.NUMBER
    },
    Longitude: {
        type: DataTypes.NUMBER
    }
});

export default Location