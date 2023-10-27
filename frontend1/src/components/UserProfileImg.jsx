import styles from "./Module css Components/UserProfileImg.module.css"
import Button from "../img/SettingsButton.svg"

function ProfileImage() {


    return(
        <div className={styles.boxImg}>
        <img className={styles.Img} src="https://api.dicebear.com/6.x/icons/svg?seed=Willow" alt="avatar"/>
        <button>EDITAR</button>
        </div>
    );
  }
  
  export default ProfileImage