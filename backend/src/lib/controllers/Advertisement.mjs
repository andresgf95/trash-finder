import { app } from "../api/RunExpress.mjs";
import { api } from "../api/path.mjs";
import { Object } from "../db/RunDB.mjs";
import { middlewareAuthorization } from "../middlewares/authorization.mjs";
import jsonMiddleware from "../middlewares/JsonMiddleware.mjs";
import exceptionHandler from "./exceptionHandler.mjs";

// deploy all advertisements
app.get(api.objectPath, middlewareAuthorization, async (_, res)=>{
    try {
        res.json(await Object.findAll())
    } catch (err) {
        exceptionHandler(err, res)
    }
}
)

// get one single advertisement
app.get(api.objectPath, middlewareAuthorization, async (req, res)=>{
    try {
        const NewObject = await Object.findByPk(req.body.id)
        res.status(200).send(NewObject)
    } catch (err) {
        exceptionHandler(err, res)
    }
}
)

// create a new Advertisement
app.post(api.objectPath, jsonMiddleware, middlewareAuthorization, async (req, res)=>{
    try {
        const CreateAdvertisement = await Object.create(req.body)
        res.status(200).json(CreateAdvertisement)
    } catch (err) {
        exceptionHandler(err, res)
    }
}
)

// Modify Avertisement
app.put(api.objectPath, jsonMiddleware, middlewareAuthorization, async (req, res)=>{
    try {
        const putObject = await Object.findByPk(req.body.id)
        const newData = await putObject.update(req.body)
        res.status(200).json(newData)
    } catch (err) {
        exceptionHandler(err, res)
    }
}
)

//Delete Advertisement
app.delete(api.objectPath, jsonMiddleware, middlewareAuthorization, async (req, res)=>{
try {
    const deleteAdvertisement = await Object.destroy({
        where: { id: req.body.id }})
        res.sendStatus(200)
        if ( deleteAdvertisement === null ) return res.sendStatus(401)
} catch (err) {
    exceptionHandler(err, res)
}
}
)

// Auto-delete Advertisement
/*app.delete(api.objectPath, jsonMiddleware, async (req, res)=>{
    if (condition) {
        
    } else {
        
    }
}
)*/