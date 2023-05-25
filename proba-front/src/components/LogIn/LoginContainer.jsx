import { useState, useContext } from "react";
import Container from "../containers/container";
import LogIn from "./LogIn";
import { authorizationContext } from "../../services/authorization";

function LoginContainer ( {route} ) {

    const { consent } = useContext(authorizationContext)
    const stateContainer = useState(false)
    const [ showLogin, setShowLogin ] = stateContainer

    return(
        <>
        { ! consent &&
            <>
            <button onClick={ ()=>{ setShowLogin(true) } } disabled={showLogin}>Login</button>
            <Container state={stateContainer}>
                <LogIn route={route}/>
            </Container>
            </>
        }
        </>
    )
}

export default LoginContainer