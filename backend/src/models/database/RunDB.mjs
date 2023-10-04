import db from "../database/DefineDB.mjs";
import File from "../database/tables/FilesTable.mjs";
import Location from "../database/tables/LocationTable.mjs";
import Object from "../database/tables/ObjectsTable.mjs"
import UserProfile from "../database/tables/UserProfile.mjs";
import User from "../database/tables/UserTable.mjs";

User.hasOne(UserProfile)
UserProfile.belongsTo(User, { as: "profile" })

User.hasMany(Object)
Object.belongsTo(User, { as: "ads" })

Object.hasOne(Location)
Location.belongsTo(Object)

Object.hasMany(File, { as:"files" })
File.belongsTo(Object, { as:"files" })

db.sync({ alter: true })
//await db.sync()

export { File, Location, Object, UserProfile, User }