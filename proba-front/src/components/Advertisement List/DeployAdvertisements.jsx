import { useContext } from "react";
import { AdvertisementsContext } from "../../services/Advertisements";
import { authorizationContext } from "../../services/authorization";

export default function DeployAdvertisements() {

    const { advertisements } = useContext(AdvertisementsContext)
    const { pass } = useContext(authorizationContext)

    return(
        <>
            <p>Zona de avisos publicados</p>
            {
                pass &&
                advertisements.map(
                    (item)=>
                    <ul>
                        <li>
                            <h1>{item.Title}</h1>
                        </li>
                    </ul>
                )
            }
        </>
    )
}