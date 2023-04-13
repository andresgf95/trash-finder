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
    respuesta.send("¡¡¡Funciono!!!")
})

app.get("/users/")
app.get("/objects/", GetObject)
app.get("/UserProfile/")
app.get("/location/")
app.get("/SavedList/")
app.get("/files/")
app.get("/LogIn/")

app.post("/users/")
app.post("/objects/", jsonMiddleware, CreateObjects)
app.post("/location/")
app.post("/SavedList/")
app.post("/files/")
app.post("/LogIn/")

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
    console.log("Express traballando...");
})