import { app } from "./RunExpress.mjs"
import "../../controllers/advertisements/Advertisement.mjs"
import "../../controllers/users/User.mjs"
import "../../controllers/files/Files.mjs"
import "../../controllers/locations/Location.mjs"
import "../../controllers/userProfiles/userProfile.mjs"
import "../../middlewares/auth/apiAuthorization.mjs"


app.listen(process.env.PORT, ()=>{console.log("🐧🐧🐧👽👽👽")})