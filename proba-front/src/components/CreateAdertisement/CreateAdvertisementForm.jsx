import { useContext, useState } from "react"
import {createAdvertisement} from "../../lib/AdvertisementsFetch.mjs"
import { authorizationContext } from "../../services/authorization";

function AddItemForm() {

    const { pass } = useContext(authorizationContext)

    const [ Title, setTitle ] = useState("")
    const [ Description, setDescription ] = useState("")
    const [ LocationDescription, setLocationDescription ] = useState("")

    function submit() {
        const DataForm = {
            Title,
            Description,
            LocationDescription
        }
        createAdvertisement(DataForm, pass, outcome)
    }

    function outcome(data) {
        if ( data === false ) alert("Ups...")
    }

    return (
        <div>
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
        <button onClick={submit}>Gardar</button>
        </div>
    );
}
  
export default AddItemForm