import ActualizarAvisos from "../components/Advertisement List/ActualizarAVisos";
import DeployAdvertisements from "../components/Advertisement List/DeployAdvertisements";
import RestrictedArea from "../components/RestrictedArea";
import AdvertisementDetail from "../components/Advertisement Detail/AdvertisementDetail"
import { AdvertisementService } from "../services/Advertisements";
import styles from './css/UserApp.module.css'
import AddItemForm from "../components/CreateAdertisement/CreateAdvertisementForm";

function UserApp () {
    return (
        <>
        <RestrictedArea>
        <AdvertisementService>
            <DeployAdvertisements/>
            <ActualizarAvisos/>
            <div className={styles.tests}>
            <h1>Tests</h1>
                <AdvertisementDetail id={1}/>
            <h1>Fin tests</h1>
            </div>
        </AdvertisementService>
            <p>Proba de Area restrinxida</p>
        </RestrictedArea>
        </>
    )
}

export default UserApp