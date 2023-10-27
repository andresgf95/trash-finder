import styles from "./Module css/Header.module.css"
import ButtonLogHeader from "./ButtonLog";

function Header() {

    function handlerLog() {
        alert("acceso denegado")
    }

    return(
        <header className={styles.Header}>
            <div className={styles.Logo_container}>
            <p className={styles.Logo}>App</p>
            </div>
            <div className={styles.Header_right}>
            <ButtonLogHeader>Iniciar Sesión</ButtonLogHeader>
            </div>
        </header>
    );
  }
  
  export default Header