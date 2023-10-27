import { useRef } from "react";
import CallbackPostObject from "../lib/PostObject.mjs";

function Proba() {
    
    const form = useRef()

    function SendData(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const datosJSON = deFormDataAobjeto(formData)
        enviarNovoAutor(datosJSON, manexadorResposta)
    }

    return(
        <form ref={form} onSubmit={}>
            <fieldset>
                <legend>Engadir Novo Aviso</legend>
                <label>título</label>
                <input type="text" id="Title"/>
                <label>Descripción</label>
                <input type="text" id="Description"/>
                <button>Enviar</button>
            </fieldset>
        </form>
    );
}

export default Proba