import { useContext } from "react"
import { AdvertisementsContext } from "../../services/Advertisements"
import Gallery from "./Gallery"
import styles from './AdvertisementDetail.module.css'
import Map from "./Map/Map"

export default function AdvertisementDetail({id}) {

    const { advertisements } = useContext(AdvertisementsContext)
    const currentAdvertisement = advertisements.find( item => item.id === id )

    return (
    <>
        <div>
        <Gallery/>
        <div className={styles.container}>
            <h1>{currentAdvertisement?.Title}</h1>
            <p>{currentAdvertisement?.Description}</p>
            <p>Ubicacion</p>
        </div>
        </div>
        <Map/>
    </>
    )
}
