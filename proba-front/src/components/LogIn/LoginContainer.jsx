import { useState, useContext } from "react";
import Container from "../containers/container";
import LogIn from "./LogInForm.jsx";
import { authorizationContext } from "../../services/authorization";

function LoginContainer() {

    const { consent } = useContext(authorizationContext)
    const stateContainer = useState(false)
    const [ showLogin, setShowLogin ] = stateContainer

    return(
        <>
        { ! consent &&
            <>
            <button onClick={ ()=>{ setShowLogin(true) } } disabled={showLogin}>Login</button>
            <Container state={stateContainer}>
                <LogIn/>
            </Container>
            </>
        }
        </>
    )
}

export default LoginContainer