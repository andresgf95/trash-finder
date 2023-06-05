import { useContext, useState } from "react"
import { AdvertisementsContext } from "../../services/Advertisements"

export default function ActualizarAvisos () {

    const { getItems} = useContext(AdvertisementsContext)

    return(
        <>
        <button onClick={getItems}>
            Actualiza
        </button>
        </>
    )
}