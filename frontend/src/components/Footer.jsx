import styles from "./Module css Components/Footer.module.css"
import Logo1 from "../img/A.svg"

function Footer() {
    
    return(
        <footer className={styles.Footer}>
            <img className={styles.Logo} src={Logo1} alt="Logo" />
        </footer>
    )
}

export default Footer