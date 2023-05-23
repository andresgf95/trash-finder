import styles from "./Module css Components/Saved_AddedList.module.css"
import { getAdv } from "../lib/fetch.mjs";
import { useEffect, useState } from "react";

function AddedList() {

    const [ advertisement, setAdvertisement ] = useState([])

    useEffect(
        ()=>{ setAdvertisement(getAdv) },
        []
    )

    return(
        <>
            <ul>
            { advertisement.map(
                advertisements => 
                <li>
                    <p><strong>{advertisements.Title}</strong></p>
                    <p>{advertisements.Description}</p>
                    <p>{advertisements.LocationDescription}</p>
                </li>
            )}
        </ul>
        </>
    );
  }
  
  export default AddedList