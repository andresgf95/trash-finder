import { app } from "../api/RunExpress.mjs";
import { hash } from "bcrypt";
import exceptionHandler from "./exceptionHandler.mjs";
import { path } from "../api/path.mjs";
import { User, UserProfile } from "../db/RunDB.mjs";
import { middlewareAuthorization } from "../middlewares/authorization.mjs";
import jsonMiddleware from "../middlewares/JsonMiddleware.mjs";

app.post(path.user, jsonMiddleware, async (req, res)=>{
    try {
        const passResume = await hash(req.body.password, 10)
        const userData = {...req.body, passResume}
        const user = await User.create(userData)
        res.status(201).json(user)
    } catch (err) {
        exceptionHandler(err, res)
    }
})

app.put(path.user, jsonMiddleware, middlewareAuthorization, async (req, res)=>{
    try {
        const modifyUser = await User.findByPk(res.locals.authorization.id)
        const newUserModify = modifyUser.update(req.body)
        res.status(200).json(newUserModify)
    } catch (err) {
        exceptionHandler(err, res)
    }
})

app.delete(path.user, jsonMiddleware, middlewareAuthorization, async (req, res)=>{
    try {
        const deleteUser = await User.destroy({
            where: { id: req.body.id }})
            if ( deleteUser === null ) {
                res.sendStatus(401)
            } else {
                res.sendStatus(200)
            }
    } catch (err) {
        exceptionHandler(err, res)
    }
})

// PROBAS
app.get(path.user, async (_,res)=>{
    res.json(await User.findAll())})