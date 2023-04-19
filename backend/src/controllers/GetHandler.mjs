import { Object, User } from "../db/RunDB.mjs";
import errorHandler from "./ErrorHandler.mjs";

async function GetObject (_, res) {
    try {
        res.json(await Object.findAll())
    } catch (err) {
        errorHandler(err, res)
    }
}

async function GetUser (_, res) {
    try {
        const users = await User.findAll()
        res.status(200).json( users )
    } catch (err) {
        errorHandler(err, res)
    }
}

export { GetObject, GetUser }