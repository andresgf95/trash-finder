import { useState } from "react";
import { CreateUser } from "../lib/fetch.mjs";

function CreateAccount() {

    const [UserName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [Email, setEmail] = useState("")

    function SendAccount() {
        const User = { UserName, password, Email }
        CreateUser(User, SendResult)
    }

    function SendResult(data) {
        if ( data === false ) alert("No ha sido posible guardar el perfil")
    }

    return(
        <form>
            <label> Crear Usuario
                <input type="text" value={UserName} onInput={(event)=>setUserName(event.target.value)}/>
            </label>
            <label> Crear Contrasinal
                <input type="password" value={password} onInput={(event)=>setPassword(event.target.value)}/>
            </label>
            <label> Email
                <input type="email" value={Email} onInput={(event)=>setEmail(event.target.value)}/>
            </label>
            <button onClick={SendAccount}>Rexístrate</button>
        </form>
    );
  }

  
  export default CreateAccount