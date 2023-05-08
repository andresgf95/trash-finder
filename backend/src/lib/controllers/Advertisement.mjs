import { app } from "../api/RunExpress.mjs";
import { api } from "../api/path.mjs";
import { Object } from "../db/RunDB.mjs";
import { middlewareAuthorization } from "../middlewares/Authorization.mjs";
import jsonMiddleware from "../middlewares/JsonMiddleware.mjs";
import exceptionHandler from "./exceptionHandler.mjs";

// deploy all advertisements
app.get("http://localhost:8000/api/v1.0/object/", async (_, res)=>{
    try {
        res.json(await Object.findAll())
    } catch (err) {
        exceptionHandler(err, res)
    }
}
)

// get one single advertisement
app.get(api.fixedPath+api.objectPath, async (req, res)=>{
    try {
        const NewObject = await Object.findByPk(req.body.id)
        res.status(200).send(NewObject)
    } catch (err) {
        exceptionHandler(err, res)
    }
}
)

// create a new Advertisement
app.post(api.fixedPath+api.objectPath, jsonMiddleware, middlewareAuthorization, async (req, res)=>{
    try {
        const CreateAdvertisement = await Object.create(req.body)
        res.status(200).json(CreateAdvertisement)
    } catch (err) {
        exceptionHandler(err, res)
    }
}
)

// Modify Avertisement
app.put(api.fixedPath+api.objectPath, jsonMiddleware, middlewareAuthorization, async (req, res)=>{
    try {
        const putObject = await Object.findByPk(req.body.id)
        const newData = await putObject.update()
    } catch (err) {
        exceptionHandler(err, res)
    }
}
)