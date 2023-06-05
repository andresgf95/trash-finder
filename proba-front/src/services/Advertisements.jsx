import { createContext, useState, useEffect, useContext } from "react";
import { getAdvertisements } from "../lib/AdvertisementsFetch.mjs";
import { authorizationContext } from "./authorization.jsx";

const AdvertisementsContext = createContext()

function AdvertisementService ( {children} ) {

    const { pass } = useContext(authorizationContext)

    const [advertisements, setAdvertisements] = useState([])

    function getItems() {
        getAdvertisements(pass, valueAdvertisements)
    }

    function valueAdvertisements(data) {
        data ? setAdvertisements(advertisements) : console.log("Algo fallou")
    }

    useEffect(
        getItems,
        [pass]
    )

    const advertisementValue = { getItems, advertisements, setAdvertisements }

    return(
        <AdvertisementsContext.Provider value={advertisementValue}>
            { children }
        </AdvertisementsContext.Provider>
    )
}

export { AdvertisementService, AdvertisementsContext}