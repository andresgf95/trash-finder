import { useState } from "react"
import { aDataURL } from "../lib/Files.mjs"
import { ObjectData } from "../lib/ObjectsForm.mjs"
import PostItem from "../lib/fetch.mjs"

function AddItemForm() {



    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ location, setLocation ] = useState("")
    const [ file, setFile ] = useState()

    function handlerFile(event) {
        const file = event.target.files[0]
        if (file) aDataURL(file, setFile)
        else setFile("")
    }

    function submit() {
        const DataForm = {
            title,
            description,
            location,
            file
        }
        PostItem(DataForm)
    }

    function outcome(data) {
        if ( data === false ) alert("Ups...")
    }

    return (
        <>
        <label>
            Título<input type="text" value={title} onInput={(event)=>{setTitle(event.target.value)}}/>
        </label>
        <label>
            Descripción<input type="text" value={description} onInput={(event)=>{setDescription(event.target.value)}}/>
        </label>
        <label>
            Descripción da ubicación<input type="text" value={location} onInput={(event)=>{setLocation(event.target.value)}}/>
        </label>
        <label>
            Descripción<input type="file" onInput={handlerFile}/>
        </label>
        <button onClick={submit}>Gardar</button>
        </>
    );
  }
  
  export default AddItemForm