import { DataTypes } from "sequelize";
import db from "../DefineDB.mjs";

const UserProfile = db.define('UserProfile', {
    ProfileImg: {
        type: DataTypes.INTEGER
    }
});

export default UserProfile