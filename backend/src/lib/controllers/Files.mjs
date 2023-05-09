import { app } from "../api/RunExpress.mjs";
import { api } from "../api/path.mjs";
import exceptionHandler from "./exceptionHandler.mjs";
import { File } from "../db/RunDB.mjs";
import { middlewareAuthorization } from "../middlewares/authorization.mjs";
import jsonMiddleware from "../middlewares/JsonMiddleware.mjs";
import { json } from "sequelize";

//Find all Files
app.get(api.FilePath, async (_, res)=>{
    try {
        res.json(File.findAll())
    } catch (err) {
        exceptionHandler(err, res)
    }
}
)

//Find One single File
app.get(api.FilePath, async (req, res)=>{
    try {
        const SingleFile = File.findByPk(req.body.id)
        res.status(200).json(SingleFile)
    } catch (err) {
        exceptionHandler(err, res)
    }
}
)