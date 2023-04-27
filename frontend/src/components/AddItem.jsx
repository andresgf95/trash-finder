import { useEffect } from "react";
import styles from "./Module css Components/AddItem.module.css"
import Plus from "../img/Plus.svg"

function AddItem() {

    function ButtonHandler() {
        alert("ESTE É O BOTON PARA POSTEAR AVISOS")
    }

    return(
        <button className={styles.Button} onClick={ButtonHandler}><img className={styles.Plus} src={Plus} alt="Añadir" /></button>
    );
  }
  
  export default AddItem