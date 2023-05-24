import { app } from "../api/RunExpress.mjs";
import { path } from "../api/path.mjs";
import { Object } from "../db/RunDB.mjs";
import { middlewareAuthorization } from "../middlewares/authorization.mjs";
import jsonMiddleware from "../middlewares/JsonMiddleware.mjs";
import exceptionHandler from "./exceptionHandler.mjs";

// deploy all advertisements
app.get(path.allAdvertisements, middlewareAuthorization, async (_, res) => {
    try {
        res.json(await Object.findAll({
            order: [["createdAt", "DESC"]],
            include: [ { all: true } ] }
        ))
    } catch (err) {
        exceptionHandler(err, res)
    }
})

// get one single advertisement
app.get(path.advertisements, middlewareAuthorization, async (req, res) => {
    try {
        const adv = await Object.findOne({ where: { id: req.params.id }, include: "files" })
        adv ? res.status(200).json(adv) : res.status(404).send("no se ha encontrado")
    } catch (err) {
        exceptionHandler(err, res)
    }
})

app.post(path.allAdvertisements, jsonMiddleware, middlewareAuthorization, async (req, res) => {
    try {
        const createAdv = await Object.create(req.body)
        res.status(200).json(createAdv)
    } catch (err) {
        exceptionHandler(err, res)
    }
})

app.put(path.allAdvertisements, jsonMiddleware, middlewareAuthorization, async (req, res) => {
    try {
        const modify = await Object.findByPk(req.body.id)
        const adv = await modify.update(req.body)
        res.status(200).json(adv)
    } catch (err) {
        exceptionHandler(err, res)
    }
})

app.delete(path.allAdvertisements, jsonMiddleware, middlewareAuthorization, async (req, res) => {
    try {
        const deleteAdv = await Object.destroy({ where: { id: req.body.id } })
            (deleteAdv === null) ? res.sendStatus(200) : res.sendStatus(401)
    } catch (err) {
        exceptionHandler(err, res)
    }
})