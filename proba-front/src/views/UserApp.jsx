import RestrictedArea from "../components/RestrictedArea";
import LogOut from "../components/LogIn/LogOut";

function UserApp () {
    return (
        <>
        <RestrictedArea>
            <LogOut/>
            <p>Proba de Area restrinxide</p>
        </RestrictedArea>
        </>
    )
}

export default UserApp