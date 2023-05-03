import { compare } from "bcrypt"
import jwt from "jsonwebtoken"
import { api } from "./path.mjs";
import { app } from "./RunExpress.mjs";
import errorHandler from "../controllers/ErrorHandler.mjs";
import { User } from "../db/RunDB.mjs"

app.post(api.fixedPath+api.sesionPath, async (req, res)=>{
    try {

        const user = await User.findOne({
            where: { UserName: req.body.UserName }
        })

        if ( user === null ) return res.sendStatus(401)

        const authenticated = await compare(
            req.body.password, user.Has
        )

        if (authenticated) {
            const pass = jwt.sign({ id: user.id }, process.env.JWT_SECRET)
            return res.send(pass)
        }

        return res.sendStatus(401)
        
    } catch (err) {
        return errorHandler(err, res)
    }
})