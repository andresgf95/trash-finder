import { app } from "../api/RunExpress.mjs";
import { path } from "../api/path.mjs";
import jsonMiddleware from "../middlewares/JsonMiddleware.mjs";
import { middlewareAuthorization } from "../middlewares/authorization.mjs";
import exceptionHandler from "./exceptionHandler.mjs";
import { User, UserProfile } from "../db/RunDB.mjs";

// Petición de perfil de usuario
app.get(path.profileID, middlewareAuthorization, async (_, res)=>{
    try {
        const user = UserProfile.findByPk(req.body.id)
        res.status(200).json(user)
    } catch (err) {
        exceptionHandler(err, res)
    }

})

// Create a User profile
/*app.post(path.userProfile, jsonMiddleware, middlewareAuthorization, async (req, res)=>{
    try {
        const user = UserProfile.findAll({ where: { 
            [Op.eq]: [{id: req.body.id}, {UserId: }]
        }})
        if ( !user ) { 
            await user.create(req.body)
            res.sendStatus(200)
        } else {
            res.sendStatus(403)
        }
    } catch (err) {
        exceptionHandler(err, res)
    }
})*/