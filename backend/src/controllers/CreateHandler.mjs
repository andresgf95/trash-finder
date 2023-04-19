import { Object, User } from "../db/RunDB.mjs"
import errorHandler from "./ErrorHandler.mjs"

async function CreateObjects (req, res) {
    try {
        await Object.create(req.body)
        res.send("Aviso creado")
    } catch (err) {
    errorHandler(err, res)
    }
}

async function CreateUser(req, res) {
    try {
        await User.create(req.body)
        res.send("Usuario creado")
    } catch (err) {
    errorHandler(err, res)
    }
}

export { CreateObjects, CreateUser } 