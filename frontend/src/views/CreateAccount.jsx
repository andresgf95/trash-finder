import { useState } from "react";
import { CreateUser } from "../lib/fetch.mjs";

function CreateAccount() {

    const [UserName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [Email, setEmail] = useState("")

    return(
        <form>
            <label> Crear Usuario
                <input type="text" value={UserName} onInput={()=>setUserName}/>
            </label>
            <label> Crear Contrasinal
                <input type="password" value={password} onInput={()=>setPassword}/>
            </label>
            <label> Email
                <input type="email" value={Email} onInput={()=>setEmail}/>
            </label>
            <button onClick={CreateUser}>Rexístrate</button>
        </form>
    );
  }

  
  export default CreateAccount