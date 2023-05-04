import styles from "./Module css Components/Header.module.css"
import Logo1 from "../img/A.svg"
import LogIn from "../img/LogInIcon.svg"
import Monigote from "../UserLogInCompose/div";

function Header() {

    function handlerLog() {
        alert("acceso denegado")
    }

    return(
        <header className={styles.Header}>
                <h1 className={styles.Logo}>VacalourApp</h1>
                <button className={styles.ButtonLog} onClick={handlerLog}><Monigote/></button>
        </header>
    );
  }
  
  export default Header