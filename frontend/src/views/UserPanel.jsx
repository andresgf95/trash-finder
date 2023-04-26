import AddedList from "../components/AddedList";
import ProfileImage from "../components/UserProfileImg";
import SavedList from "../components/SavedList";
import Button from "../img/SettingsButton.svg"

function UserPanel() {

    return(
        <>
        <ProfileImage/>
        <img src={Button} alt="Boton de axustes"/>
        <SavedList/>
        <AddedList/>
        </>
    );
  }
  
  export default UserPanel