import { useState } from "react"
import { aDataURL } from "../lib/Files.mjs"

function AddItemForm() {

    const [ file, setFile ] = useState()

    function handlerFile(event) {
        const file = event.target.files[0]
        if (file) aDataURL(file, setFile)
        else setFile("")
    }

    return (
        <>
        <label>
            Título<input type="text" />
        </label>
        <label>
            Descripción<input type="text" />
        </label>
        <label>
            Descripción da ubicación<input type="text" />
        </label>
        <label>
            Descripción<input type="file" onInput={handlerFile}/>
        </label>
        </>
    );
  }
  
  export default AddItemForm