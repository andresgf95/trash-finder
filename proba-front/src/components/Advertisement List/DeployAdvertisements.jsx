import { useContext, useState } from "react";
import { AdvertisementsContext } from "../../services/Advertisements";

export default function DeployAdvertisements() {

    const { advertisements } = useContext(AdvertisementsContext)

    const Title = useState("")
    const Description = useState("")
    const LocationDescription = useState("")
    const Date = useState("")

    return(
        <>
            <p>Zona de avisos publicados</p>
            {advertisements.map( advertisement=>{advertisement.Title} )}
        </>
    )
}