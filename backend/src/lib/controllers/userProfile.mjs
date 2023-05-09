import { app } from "../api/RunExpress.mjs";
import { api } from "../api/path.mjs";
import jsonMiddleware from "../middlewares/JsonMiddleware.mjs";
import { middlewareAuthorization } from "../middlewares/authorization.mjs";
import exceptionHandler from "./exceptionHandler.mjs";
import { User, UserProfile } from "../db/RunDB.mjs";

// Get a User Profile
app.get(api.userProfile, middlewareAuthorization, async (_, res)=>{
    const user = User.findByPk(res.locals.authorization.id)
    const profile = user.getUserProfile()
    res.status(200).json(profile)
}
)

// Create a User profile
app.post(api.userProfile, jsonMiddleware, middlewareAuthorization, async (req, res)=>{
    try {
        const user = User.findByPk(res.locals.authorization.id)
        let profile = await user.getUserProfile()
        if ( profile ) { 
            await profile.update(req.body)
        } else {
            profile = await user.createUserProfile(req.body)
        }
        let img = await profile.getProfileImg()
        if ( img ) {
            await img.update({ data: req.body.ProfileImg })
        } else {
            await profile.createProfileImg({ data: req.body.ProfileImg })
        }
        res.sendStatus(201)
    } catch (err) {
        exceptionHandler(err, res)
    }
}
)