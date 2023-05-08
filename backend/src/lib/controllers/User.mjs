import { app } from "../api/RunExpress.mjs";
import { hash } from "bcrypt";
import exceptionHandler from "./exceptionHandler.mjs";
import { api } from "../api/path.mjs";
import { User } from "../db/RunDB.mjs";
import { middlewareAuthorization } from "../middlewares/Authorization.mjs";
import jsonMiddleware from "../middlewares/JsonMiddleware.mjs";

// Create a new User
app.post(api.fixedPath+api.userPath, jsonMiddleware, async (req, res)=>{
    try {
        const passResume = await hash(req.body.password, 10)
        const userData = {...req.body, passResume}
        const user = await User.create(userData)
        res.status(200).json(user)
    } catch (err) {
        exceptionHandler(err, res)
    }
}
)

// Modify a user account
app.put(api.fixedPath+api.userPath, jsonMiddleware, middlewareAuthorization, async (req, res)=>{
    try {
        const modifyUser = await User.findByPk(req.body.UserName)
        const newUserModify = modifyUser.update(req.body)
        res.status(200).json(newUserModify)
    } catch (err) {
        exceptionHandler(err, res)
    }
}
)

// Soft delete of User account, using paranoid
app.delete(api.fixedPath+api.userPath, jsonMiddleware, middlewareAuthorization, async (req, res)=>{
    try {
        const deleteUser = await User.destroy({
            where: { UserName: req.body.UserName }})
            res.sendStatus(200)
            if ( deleteUser === null ) return res.sendStatus(401)
    } catch (err) {
        exceptionHandler(err, res)
    }
}
)