import { app } from "../../api/server/RunExpress.mjs";
import { path } from "../../api/server/path.mjs";
import { Location } from "../../models/database/RunDB.mjs"
import { middlewareAuthorization } from "../../middlewares/auth/authorization.mjs";
import jsonMiddleware from "../../middlewares/auth/JsonMiddleware.mjs";
import exceptionHandler from "../../utils/errorHandlers/exceptionHandler.mjs";

app.get(path.location, middlewareAuthorization, async (req, res)=> {
    try {
        res.json( await Location.findAll({ where: { id: req.body.id } }) )
    } catch (err) {
        exceptionHandler(err, res)
    }
})

app.post(path.location, jsonMiddleware, middlewareAuthorization, async (req,res)=>{
    try {
        const loc = await Location.create(req.body)
        res.status(200).json(loc)
    } catch (err) {
        exceptionHandler(err, res)
    }
})

app.put(path.location, jsonMiddleware, middlewareAuthorization, async (req,res)=>{
    try {
        const loc = await Location.findAll( { where: { id: req.body.id } })
        const newLoc = await loc.update( req.body )
        res.send(200).json(newLoc)
    } catch (err) {
        exceptionHandler(err, res)
    }
})

app.delete(path.location, jsonMiddleware, middlewareAuthorization, async (req,res)=>{
    try {
        const destroy = await Location.destroy( { where: { id: req.body.id } } )
        if ( destroy === null ) {
            return res.sendStatus(401)
        } else {
            res.sendStatus(200)
        }
    } catch (err) {
        exceptionHandler(err, res)
    }
})