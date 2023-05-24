import { getAdv } from "../../lib/fetch.mjs";

function ActualizarAvisos() {
    return(
        <>
        <button onClick={getAdv}>Actualizar Lista</button>
        </>
    )
}

export default ActualizarAvisos