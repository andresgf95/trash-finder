import { useContext, useState } from "react";
import { authorizationContext } from "../../services/authorization";
import { getPass } from "../../lib/UserFetch.mjs"
import styles from "./LogIn.module.css"

function LogIn() {


    const { consent, savePass } = useContext ( authorizationContext )

    const [ UserName, setUserName ] = useState ("Andres")
    const [ password, setPassword ] = useState ("Cabra")

    function Verify(pass) {
        if  ( pass ) {
            savePass ( pass )
        } else alert("Incorrecto")
    }

    return(
        <>
        { ! consent &&
        <form className={styles.container}>
            <label>
                <p>Usuario</p>
                <input className={styles.input} 
                    type="text" 
                    value={UserName} 
                    onInput={(event)=>{
                    setUserName(event.target.value)}}
                />
            </label>
            <label>
                <p>Contrasinal</p>        
                <input className={styles.input} 
                    type="text" 
                    value={password} 
                    onInput={(event)=>{
                    setPassword(event.target.value)}}
                />
            </label>
            <button className={styles.button} 
                    onClick={()=>{
                    getPass(UserName, password, Verify)}}>
                    LogIn
            </button>
        </form>
        }
        </>
    );
  }

  
  export default LogIn