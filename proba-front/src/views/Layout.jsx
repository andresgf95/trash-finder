import CreateAccountContainer from "../components/CreateAccount/CreateAccountContainer";
import LoginContainer from "../components/LogIn/LoginContainer";
import LogOut from "../components/LogIn/LogOut";

function Layout () {
    return(
        <>
        <LoginContainer route="/private/"/>
        <CreateAccountContainer route="/a"/>
        <LogOut/>
        <p>Layout de proba</p>
        </>
    )
}

export default Layout