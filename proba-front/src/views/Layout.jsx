import LoginContainer from "../components/LogIn/LoginContainer";
import LogOut from "../components/LogIn/LogOut";

function Layout () {
    return(
        <>
        <LoginContainer route="/private/"/>
        <LogOut/>
        <p>Layout de proba</p>
        </>
    )
}

export default Layout