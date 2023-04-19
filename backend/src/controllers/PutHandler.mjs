import { Object, User } from "../db/RunDB.mjs"
import errorHandler from "./ErrorHandler.mjs"

async function ChangeKarma(req, res) {
    try {
        const Karma = await User.findByPk(req.body.id)
        await Karma.update(req.body)
        res.send("Actualizado con éxito")
    } catch (err) {
    errorHandler(err, res)
    }
}

async function UpdateObject(req, res) {
    try {
        const NewData = await Object.findByPk(req.body.id)
        await NewData.update(req.body)
        res.send("Actualizado con éxito")
    } catch (err) {
        errorHandler(err, res)
    }
}

export { ChangeKarma, UpdateObject }