import db from "./DefineDB.mjs";
import File from "./tables/FilesTable.mjs";
import Location from "./tables/LocationTable.mjs";
import Object from "./tables/ObjectsTable.mjs"
import SaveList from "./tables/SaveListTable.mjs";
import UserProfile from "./tables/UserProfile.mjs";
import User from "./tables/UserTable.mjs";

Object.hasMany(File)
File.belongsTo(Object)

Location.hasMany(Object)
Object.belongsTo(Location)

SaveList.hasMany(Object)
Object.belongsTo(SaveList)

User.hasOne(SaveList)
SaveList.belongsTo(User)

User.hasOne(UserProfile)
UserProfile.belongsTo(User)

User.hasMany(Object)
Object.belongsTo(User)

//await db.sync({ alter: true })
await db.sync()

export { File, Location, Object, SaveList, UserProfile, User }