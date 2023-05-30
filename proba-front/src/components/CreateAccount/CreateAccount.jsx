import { useState, useContext } from "react"
import { createUser } from "../../lib/UserFetch.mjs"
import { authorizationContext } from "../../services/authorization.jsx"

function CreateAccount() {

    const { consent } = useContext(authorizationContext)

    const [ UserName, setUserName ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ Email, setEmail ] = useState("")

    function sendResult(data) {
        if ( data === false ) alert("No ha sido posible guardar el perfil")
    }

    function submitHandler(event) {
        event.preventDefault()
        createUser( { UserName, password, Email }, sendResult )
    }

    return( 
        <>
        { ! consent &&
            <form onSubmit={submitHandler}>
                <label>
                    Usuario
                    <input 
                        type="text" 
                        value={UserName} 
                        onInput={
                        (e)=>{setUserName(e.target.value)}}
                    />
                </label>
                <label>
                    Contrasinal
                    <input 
                        type="password" 
                        value={password} 
                        onInput={ 
                        (e)=>{ setPassword(e.target.value)}}
                    />
                </label>
                <label>
                    Email
                    <input 
                        type="email" 
                        value={Email} 
                        onInput={ 
                        (e)=>{ setEmail(e.target.value)}}
                    />
                </label>
                <button>
                Enviar
                </button>
            </form>
        }
        </>
    )
}

export default CreateAccount