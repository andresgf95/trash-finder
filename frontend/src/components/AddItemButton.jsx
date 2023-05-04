import { useEffect, useState } from "react";
import styles from "./Module css Components/AddItem.module.css"
import Plus from "../img/Plus.svg"

function AddItem() {

    function ButtonHandler() {
        alert("alerta vermella")
    }

    return(
        <button className={styles.Button} onClick={ButtonHandler}><img className={styles.Plus} src={Plus} alt="Añadir" /></button>
    );
  }
  
  export default AddItem