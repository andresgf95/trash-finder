import express from "express";
import cors from "cors";
import "./db/RunDB.mjs";
import jsonMiddleware from "./controllers/middlewares/JsonMiddleware.mjs";
import { CreateObjects, CreateUser } from "./controllers/CreateHandler.mjs";
import { GetObject, GetUser } from "./controllers/GetHandler.mjs";
import { ChangeKarma, UpdateObject } from "./controllers/PutHandler.mjs";

const app = express()

app.use(cors())

app.get("/", (_, respuesta)=>{
    respuesta.status(200)
    respuesta.send(`WARNING!!
    Area 51 restricted`)
})

app.get("/api/v1.0/users/", GetUser)
app.get("/api/v1.0/objects/", GetObject)

app.post("/api/v1.0/users/", jsonMiddleware, CreateUser)
app.post("/api/v1.0/objects/", jsonMiddleware, CreateObjects)

app.put("/api/v1.0/users/", jsonMiddleware, ChangeKarma)
app.put("/api/v1.0/objects/", jsonMiddleware, UpdateObject)



app.listen( 8000,()=>{
    console.log("🐧🐧🐧👽👽👽");
})