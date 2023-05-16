import db from "./DefineDB.mjs";
import File from "./tables/FilesTable.mjs";
import Location from "./tables/LocationTable.mjs";
import Object from "./tables/ObjectsTable.mjs"
import UserProfile from "./tables/UserProfile.mjs";
import User from "./tables/UserTable.mjs";

User.hasOne(UserProfile)
UserProfile.belongsTo(User)

User.hasMany(Object)
Object.belongsTo(User)

Object.hasOne(Location)
Location.belongsTo(Object)

Object.hasMany(File)
File.belongsTo(Object)

//await db.sync({ alter: true })
await db.sync()

export { File, Location, Object, UserProfile, User }