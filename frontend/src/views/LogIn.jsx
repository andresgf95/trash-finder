import { useContext, useState } from "react";
import { authorizationContext } from "../services/authorization";
import { getPass } from "../lib/fetch.mjs"
import { useNavigate } from "react-router-dom"; 

function LogIn({ruta}) {

//    const navigate = useNavigate()

    const { pass, savePass } = useContext(authorizationContext)

    const [UserName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    function UserInput(event) {
        setUserName(event.target.value)
    }

    function PasswordInput(event) {
        setPassword(event.target.value)
    }

    function SubmitInput() {
        getPass(UserName, password, Verify)
    }

    function Verify(token) {
        if(token) {
            savePass(token)
            //if (ruta) navigate(ruta)
        } else alert("Incorrecto")
    }


    return(
        <>
        {! pass &&
        <div>
            <label>
                Usuario
                <input type="text" value={UserName} onInput={UserInput}/>
            </label>
            <label>
                Contrasinal
                <input type="text" value={password} onInput={PasswordInput}/>
            </label>
            <button onClick={SubmitInput}>LogIn</button>
        </div>
        }
        </>
    );
  }

  
  export default LogIn