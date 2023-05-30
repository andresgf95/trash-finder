import { useContext } from "react";
import { authorizationContext } from "../../services/authorization";

function LogOut() {

    const { consent, logOut } = useContext(authorizationContext)

    return(
        <>
        { consent && <button
        onClick={ ()=>{ 
            if (logOut) logOut()             
        } } >
        Cerrar Sesión
        </button> }
        </>
    )
}

export default LogOut