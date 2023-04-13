import { DataTypes } from "sequelize";
import db from "../DefineDB.mjs";

const Location = db.define('Location', {
    IDObject: {
        type: DataTypes.INTEGER
    },
    LocationDescription: {
        type: DataTypes.TEXT
    },
    Latitude: {
        type: DataTypes.NUMBER
    },
    Longitude: {
        type: DataTypes.NUMBER
    }
});

export default Location