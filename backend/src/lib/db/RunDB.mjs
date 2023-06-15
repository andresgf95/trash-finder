import db from "./DefineDB.mjs";
import File from "./tables/FilesTable.mjs";
import Location from "./tables/LocationTable.mjs";
import Object from "./tables/ObjectsTable.mjs"
import UserProfile from "./tables/UserProfile.mjs";
import User from "./tables/UserTable.mjs";

User.hasOne(UserProfile)
UserProfile.belongsTo(User, { as: "profile" })

User.hasMany(Object)
Object.belongsTo(User, { as: "ads" })

Object.hasOne(Location)
Location.belongsTo(Object)

Object.hasMany(File, { as:"files" })
File.belongsTo(Object, { as:"files" })

//await db.sync({ alter: true })
await db.sync()

export { File, Location, Object, UserProfile, User }