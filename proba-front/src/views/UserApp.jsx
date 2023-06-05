import ActualizarAvisos from "../components/Advertisement List/ActualizarAVisos";
import DeployAdvertisements from "../components/Advertisement List/DeployAdvertisements";
import RestrictedArea from "../components/RestrictedArea";
import { AdvertisementService } from "../services/Advertisements";

function UserApp () {
    return (
        <>
        <RestrictedArea>
        <AdvertisementService>
            <DeployAdvertisements/>
            <ActualizarAvisos/>
        </AdvertisementService>
            <p>Proba de Area restrinxida</p>
        </RestrictedArea>
        </>
    )
}

export default UserApp