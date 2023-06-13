import { useContext } from "react"
import { AdvertisementsContext } from "../../services/Advertisements"
import Gallery from "./Gallery"
import styles from './AdvertisementDetail.module.css'

export default function AdvertisementDetail({id}) {

    const { advertisements } = useContext(AdvertisementsContext)
    const currentAdvertisement = advertisements.find( item => item.id === id )

    return (
    <>
        <Gallery/>
        <div className={styles.container}>
            <h1 className={styles.Title}>{currentAdvertisement?.Title}</h1>
            <div className={styles.line}></div>
            <p className={styles.Description}>{currentAdvertisement?.Description}</p>
            <div className={styles.line}></div>
            <p className={styles.Description}>{currentAdvertisement?.LocationDescription}</p>
        </div>
    </>
    )
}
