import { useEffect, useState } from "react";
import styles from "./Module css Components/AddItem.module.css"
import Plus from "../img/Plus.svg"
import AddItemForm from "./AddItemForm";

function AddItem() {

    const [modal, setModal] = useState(false)

    function ButtonHandler() {
        {true && <AddItemForm/>}
    }

    useEffect(
        ()=>{setModal(!false)},
        [modal]
    )



    

    return(
        <button className={styles.Button} onClick={ButtonHandler}><img className={styles.Plus} src={Plus} alt="Añadir" /></button>
    );
  }
  
  export default AddItem