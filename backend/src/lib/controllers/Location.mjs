import { app } from "../api/RunExpress.mjs"
import { api } from "../api/path.mjs"
import { Location } from "../db/RunDB.mjs"
import { middlewareAuthorization } from "../middlewares/authorization.mjs"
import jsonMiddleware from "../middlewares/JsonMiddleware.mjs"
import exceptionHandler from "./exceptionHandler.mjs"

// GET
app.get(api.)