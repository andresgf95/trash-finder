import { app } from "./RunExpress.mjs"
import "../controllers/Advertisement.mjs"
import "../controllers/User.mjs"
import "./apiAuthorization.mjs"


app.listen(process.env.PORT, ()=>{console.log("🐧🐧🐧👽👽👽")})