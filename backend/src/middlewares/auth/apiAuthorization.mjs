import { app } from "../../api/server/RunExpress.mjs";
import { path } from "../../api/server/path.mjs";
import { User } from "../../models/database/RunDB.mjs"
import exceptionHandler from "../../utils/errorHandlers/exceptionHandler.mjs";
import jsonMiddleware from "../auth/JsonMiddleware.mjs";
import { compare } from "bcrypt"
import jwt from "jsonwebtoken"

app.post(path.sesion, jsonMiddleware, async (req, res)=>{
    try {
        const user = await User.findOne({
            where: { UserName: req.body.UserName }
        })
        if ( user === null ) return res.sendStatus(401)
        const authenticated = await compare( req.body.password, user.passResume )
        if ( authenticated ) {
            const pass = jwt.sign({ id: user.id }, process.env.JWT_SECRET)
            return res.send(pass)
        }
        return res.sendStatus(401)
    } catch (err) {
        return exceptionHandler(err, res)
    }
})

// next step, add Admin. status.
// Add endpoints to the Admin. permiss