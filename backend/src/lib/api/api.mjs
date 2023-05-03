import { app } from "./RunExpress.mjs"
import jsonMiddleware from "../middlewares/JsonMiddleware.mjs"
import { GetUser, GetObject } from "../controllers/GetHandler.mjs"
import { CreateUser, CreateObjects } from "../controllers/CreateHandler.mjs"
import { ChangeKarma, UpdateObject } from "../controllers/PutHandler.mjs"
import { api } from "./path.mjs"

app.get(api.fixedPath, GetUser)

app.get(api.fixedPath+api.userPath, GetUser)
app.get(api.fixedPath+api.objectPath, GetObject)

app.post(api.fixedPath+api.userPath, jsonMiddleware, CreateUser)
app.post(api.fixedPath+api.objectPath, jsonMiddleware, CreateObjects)

app.put(api.fixedPath+api.userPath, jsonMiddleware, ChangeKarma)
app.put(api.fixedPath+api.objectPath, jsonMiddleware, UpdateObject)


app.listen( process.env.PORT,()=>{
    console.log("🐧🐧🐧👽👽👽");
})