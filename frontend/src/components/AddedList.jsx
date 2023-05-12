import styles from "./Module css Components/Saved_AddedList.module.css"
import { AdvertisementList } from "../lib/fetch.mjs";
import { useEffect, useState } from "react";

function AddedList() {

    const [ Advertisement, setAdvertisement ] = useState([0,1,2,3,4,5])

    useEffect(
        ()=>{ AdvertisementList(setAdvertisement) },
        []
    )

    return(
        <>
            <ul>
            { Advertisement.map(
                Advertisements => 
                <li>
                    <p><strong>{Advertisements.Title}</strong></p>
                    <p>{Advertisements.Description}</p>
                    <p>{Advertisements.LocationDescription}</p>
                </li>
            )}
        </ul>
        </>
    );
  }
  
  export default AddedList