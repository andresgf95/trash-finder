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
}, {
    paranoid: true
});

export default Location