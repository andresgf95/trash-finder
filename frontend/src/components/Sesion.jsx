import { useContext } from "react";
import { authorizationContext } from "../services/authorization";
import LogIn from "../views/LogIn";

function SesionControl() {

    const { data, actions } = useContext(authorizationContext)

    function handlerLogOut() {
        actions.logOut()
    }

    return(
        <section>
            { data.pass && 
            <>
                <button onClick={handlerLogOut}>LogOut</button>
            </> 
            }
            { ! data.pass && <LogIn/>}
        </section>
    )
}

export default SesionControl