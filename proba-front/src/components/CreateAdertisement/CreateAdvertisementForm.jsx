import { useContext, useState } from "react"
import { aDataURL } from "../../lib/Files.mjs"
import {createAdvertisement} from "../../lib/AdvertisementsFetch.mjs"
import { authorizationContext } from "../../services/authorization";

function AddItemForm() {

    const { pass } = useContext(authorizationContext)

    const [ Title, setTitle ] = useState("")
    const [ Description, setDescription ] = useState("")
    const [ LocationDescription, setLocationDescription ] = useState("")
    const [ files, setFiles ] = useState("")

    function submit() {
        const DataForm = {
            Title,
            Description,
            LocationDescription,
            files
        }
        createAdvertisement(DataForm, pass, outcome)
    }

    function handlerFiles(event) {
        const file = event.target.files[1]
        if (file) aDataURL(files, setFiles) 
        else setFiles("")    
        }

    function outcome(data) {
        if ( data === false ) alert("Ups...")
    }

    return (
        <form>
        <label>
            Título
            <input type="text" value={Title} onInput={(event)=>{
                setTitle(event.target.value) } } 
            />
        </label>
        <label>
            Descripción
            <input type="text" value={Description} onInput={(event)=>{
                setDescription(event.target.value) } } 
            />
        </label>
        <label>
            Descripción da ubicación
            <input type="text" value={LocationDescription} onInput={ (event)=>{
                setLocationDescription(event.target.value) } } 
            />
        </label>
        <label>
            Descripción
            <input type="file" onInput={ handlerFiles }
            />
        </label>
        <button onClick={submit}>Gardar</button>
        </form>
    );
}
  
export default AddItemForm