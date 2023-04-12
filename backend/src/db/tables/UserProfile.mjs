import { DataTypes } from "sequelize";
import db from "../db.mjs";

const UserProfile = db.define('UserProfile', {
    IDUser: {
        type: DataTypes.INTEGER
    },
    ProfileImg: {
        type: DataTypes.INTEGER
    },
    Theme: {
        type: DataTypes.INTEGER
    }
});

export default UserProfile