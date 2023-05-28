import { useContext } from "react";
import { authorizationContext } from "../services/authorization";
import LogIn from "./LogIn/LogIn";

function RestrictedArea ( {children} ) {

    const consent = useContext(authorizationContext)

    return(
        <>
        { consent ? children : <LogIn/>}
        </>
    )
}

export default RestrictedArea