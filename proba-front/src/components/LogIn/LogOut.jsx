import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authorizationContext } from "../../services/authorization";

function LogOut ( {route} ) {

    const { consent, logOut } = useContext(authorizationContext)
    const navigate = useNavigate()

    return(
        <>
        { consent && <button
        onClick={ ()=>{ 
            if (logOut) logOut() 
            navigate(route ?? "/" )                
        } } >
        Cerrar Sesión
        </button> }
        </>
    )
}

export default LogOut