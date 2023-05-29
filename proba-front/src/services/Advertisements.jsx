import { createContext, useState, useEffect } from "react";
import { getAdvertisements } from "../lib/AdvertisementsFetch.mjs";

const AdvertisementsContext = createContext()

function AdvertisementService ( {children} ) {

    /*const stateAdvertisements = useState([])

    useEffect(
        ()=>{ const [ _, setItems] = stateAdvertisements
            getAdvertisements( setItems )
        },
        []
    )*/

    const [ state, setState ] = useState([])

    

    return(
        <AdvertisementsContext.Provider value={stateAdvertisements}>
            { children }
        </AdvertisementsContext.Provider>
    )
}

export { AdvertisementService, AdvertisementsContext}