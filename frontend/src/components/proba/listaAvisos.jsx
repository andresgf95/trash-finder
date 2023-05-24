import { objectListContext } from "../../services/Advertisements"
import ActualizarAvisos from "./botonAvisos"

function MostrarAvisos() {

    return(
        <>
        { Avisos.map(
            Aviso =>
            <li>
                <p>{Aviso.title}</p>
                <p>{Aviso.description}</p>
                <p>{Aviso.}</p>
                <p>{}</p>
            </li>
        )
        }
        <ActualizarAvisos/>
        </>
    )

}

export { MostrarAvisos }