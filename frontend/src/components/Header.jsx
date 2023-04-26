import styles from "./Module css/Header.module.css"
import Logo1 from "../img/A.svg"

function Header() {

    return(
        <header className={styles.Header}>
            <img src={Logo1} alt="" />
        </header>
    );
  }
  
  export default Header