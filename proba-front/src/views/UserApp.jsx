import ActualizarAvisos from "../components/Advertisement List/ActualizarAVisos";
import DeployAdvertisements from "../components/Advertisement List/DeployAdvertisements";
import RestrictedArea from "../components/RestrictedArea";
import AdvertisementDetail from "../components/AdvertisementDetail.jsx"
import { AdvertisementService } from "../services/Advertisements";

function UserApp () {
    return (
        <>
        <RestrictedArea>
        <AdvertisementService>
            <DeployAdvertisements/>
            <ActualizarAvisos/>
            <h1>Tests</h1>
                <AdvertisementDetail id={1}/>
            <h1>Fin tests</h1>
        </AdvertisementService>
            <p>Proba de Area restrinxida</p>
        </RestrictedArea>
        </>
    )
}

export default UserApp