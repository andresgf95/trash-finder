import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"; 
import { createUser } from "../../lib/UserFetch.mjs"
import { authorizationContext } from "../../services/authorization.jsx"

function CreateAccount ( {route} ) {

    const { consent } = useContext(authorizationContext)

    const navigate = useNavigate()

    if (!consent) { navigate(route) }

    const [ userName, setUserName ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ email, setEmail ] = useState("")

    function handlerSend () {
        createUser( userName, password, email, sendResult )
    }

    function sendResult(data) {
        if ( data === false ) alert("No ha sido posible guardar el perfil")
    }

    return( 
        <>
        { ! consent &&
            <>
            <label>
                Usuario<input type="text" value={userName} onInput={ (e)=>{ setUserName(e.target.value) } }/>
            </label>
            <label>
                Contrasinal<input type="password" value={password} onInput={ (e)=>{ setPassword(e.target.value) } }/>
            </label>
            <label>
                Email<input type="email" value={email} onInput={ (e)=>{ setEmail(e.target.value) } }/>
            </label>
            <button onClick={ handlerSend }>Enviar</button>
            </>
        }
        </>
    )
}

export default CreateAccount