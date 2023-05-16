import { app } from "../api/RunExpress.mjs";
import { api } from "../api/path.mjs";
import exceptionHandler from "./exceptionHandler.mjs";
import { File } from "../db/RunDB.mjs";
import { middlewareAuthorization } from "../middlewares/authorization.mjs";
import jsonMiddleware from "../middlewares/JsonMiddleware.mjs";

// Get
app.get(api.FilePath, middlewareAuthorization, async (req, res)=> {
    try {
        res.json( await File.findAll({ where: { id: req.body.id } }) )
    } catch (err) {
        exceptionHandler(err, res)
    }
})

// Post
app.post(api.FilePath, jsonMiddleware, middlewareAuthorization, async (req, res)=>{
    try {
        const newFile = File.create(req.body)
        res.status(200).json(newFile)
    } catch (err) {
        exceptionHandler(err, res)
    }
})

// Modify
app.put(api.FilePath, jsonMiddleware, middlewareAuthorization, async (req, res)=> {
try {
    const modify = await File.findAll( { where: { id: req.body.id } })
    const action = await modify.update( req.body )
    res.status(200).json(action)
} catch (err) {
    exceptionHandler(err, res)
}
})

// Delete
app.delete(api.FilePath, jsonMiddleware, middlewareAuthorization, async (req, res)=> {
    try {
        const data = await File.destroy( { where: { id: req.body.id } } )
    } catch (err) {
        exceptionHandler(err, res)
    }
})