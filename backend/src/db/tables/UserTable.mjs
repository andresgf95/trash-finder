import { DataTypes } from "sequelize";
import db from "../db.mjs";
import SaveList from "./SaveListTable.mjs";
import UserProfile from "./UserProfile.mjs";
import Object from "./ObjectsTable.mjs";

const User = db.define('User', {
    UserName: {
        type: DataTypes.STRING,
        unique: true
    },
    Karma: {
        type: DataTypes.INTEGER
    },
    Email: {
        type: DataTypes.STRING
    },
    has: {
        type: DataTypes.STRING
    }
});

User.hasOne(SaveList)
SaveList.belongsTo(User)

User.hasOne(UserProfile)
UserProfile.belongsTo(User)

User.hasMany(Object)
Object.belongsTo(User)

export default User