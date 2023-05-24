import { useContext, useState } from "react"
import { aDataURL } from "../lib/Files.mjs"
import PostItem from "../lib/fetch.mjs"
import { authorizationContext } from "../services/authorization.jsx"

function AddItemForm() {

    const { pass } = useContext(authorizationContext)

    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ locdescription, setLocdescription ] = useState("")
    const [ position, setPosition ] = useState("")
    const [ file, setFile ] = useState("")

    function submit() {
        const DataForm = {
            title,
            description,
            locdescription,
            location: position,
            file
        }
        PostItem(DataForm, pass, outcome)
    }

    function outcome(data) {
        if ( data === false ) alert("Ups...")
    }

    return (
        <>
        <label>
            Título
            <input type="text" value={title} onInput={(event)=>{
                setTitle(event.target.value) } } 
            />
        </label>
        <label>
            Descripción
            <input type="text" value={description} onInput={(event)=>{
                setDescription(event.target.value) } } 
            />
        </label>
        <label>
            Descripción da ubicación
            <input type="text" value={locdescription} onInput={ (event)=>{
                setLocdescription(event.target.value) } } 
            />
        </label>
        <label>
            Descripción
            <input type="file" onInput={ (event)=> {
                const file =  event.target.files[0]
                if (file) aDataURL(file, setFile)
                else setFile("") } }
            />
        </label>
        <label>
            Ubicacion<input type="" />
        </label>
        <button onClick={submit}>Gardar</button>
        </>
    );
  }
  
  export default AddItemForm