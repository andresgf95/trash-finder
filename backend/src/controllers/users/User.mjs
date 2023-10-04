import { app } from "../../api/server/RunExpress.mjs";
import { path } from "../../api/server/path.mjs";
import { User } from "../../models/database/RunDB.mjs";
import { middlewareAuthorization } from "../../middlewares/auth/authorization.mjs";
import jsonMiddleware from "../../middlewares/auth/JsonMiddleware.mjs";
import exceptionHandler from "../../utils/errorHandlers/exceptionHandler.mjs";
import { hash } from "bcrypt";


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