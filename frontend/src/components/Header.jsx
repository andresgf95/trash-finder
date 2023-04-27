import styles from "./Module css Components/Header.module.css"
import Logo1 from "../img/A.svg"
import LogIn from "../img/LogInIcon.svg"

function Header() {

    return(
        <header className={styles.Header}>
                <img className={styles.Logo} src={Logo1} alt="Logotipo" />
                <img className={styles.LogIn} src={LogIn} alt="IconoLogIn" />
        </header>
    );
  }
  
  export default Header