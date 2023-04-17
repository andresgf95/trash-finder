import express from "express";
import cors from "cors";
import "./db/RunDB.mjs";
import jsonMiddleware from "./controllers/middlewares/JsonMiddleware.mjs";
import CreateObjects from "./controllers/CreateAdvertisements.mjs";
import GetObject from "./controllers/GetAdvertisement.mjs";

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (_, respuesta)=>{
    respuesta.status(200)
    respuesta.send(`WARNING!!
    Area 51 restricted`)
})

app.get("/api/v1.0/users/")
app.get("/api/v1.0/objects/", GetObject)
app.get("/api/v1.0/users/UserProfile/")
app.get("/api/v1.0/objects/location/")
app.get("/api/v1.0/objects/files/")

app.post("/api/v1.0/users/")
app.post("/api/v1.0/objects/", jsonMiddleware, CreateObjects)
app.post("/api/v1.0/objects/location/")
app.post("/api/v1.0/users/SavedList/")
app.post("/api/v1.0/objects/files/")
app.post("/api/v1.0/LogIn/")

app.put("/users/")
app.put("/objects/")
app.put("/UserProfile/")
app.put("/location/")
app.put("/SavedList/")
app.put("/LogIn/")

app.delete("/users/")
app.delete("/objects/")
app.delete("/SavedList/")
app.delete("/files/")

app.listen( 8000,()=>{
    console.log("🐧🐧🐧👽👽👽");
})