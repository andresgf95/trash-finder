import { DataTypes } from "sequelize";
import db from "../DefineDB.mjs";

const Location = db.define('Location', {
    Latitude: {
        type: DataTypes.NUMBER
    },
    Longitude: {
        type: DataTypes.NUMBER
    }
}, {
    paranoid: true
});

export default Location