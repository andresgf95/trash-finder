import { useContext } from "react"
import { AdvertisementsContext } from "../services/Advertisements"

export default function AdvertisementDetail({id}) {
    const { advertisements } = useContext(AdvertisementsContext)
    const currentAdvertisement = advertisements.find( item => item.id === id )
    return (<>
        <img src="..." alt="" />
        <h1>{currentAdvertisement?.Title}</h1>
        <p>{currentAdvertisement?.Description}</p>
        <p>Ubicacion</p>
        <img src="..." alt="" /><span>Usuario</span>
        <div>Son un mapa</div>
    </>)
}
