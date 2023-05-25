import { app } from "./RunExpress.mjs"
import "../controllers/Advertisement.mjs"
import "../controllers/User.mjs"
import "./apiAuthorization.mjs"
import "../controllers/Files.mjs"
import "../controllers/Location.mjs"
import "../controllers/userProfile.mjs"


app.listen(process.env.PORT, ()=>{console.log("🐧🐧🐧👽👽👽")})