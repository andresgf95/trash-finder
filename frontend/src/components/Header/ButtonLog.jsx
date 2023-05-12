import { Button } from "react-bootstrap";
import styles from "./Module css/Header.module.css"



function ButtonLogHeader() {

    return(
        <>
            <Button className={styles.button}>Iniciar Sesión</Button>
        </>
    )
}

export default ButtonLogHeader