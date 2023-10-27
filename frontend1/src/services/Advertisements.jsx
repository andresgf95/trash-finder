import { createContext, useState, useEffect } from "react";
import { getAdv } from "../lib/fetch.mjs"

const objectListContext = createContext()

function ObjectListService( {children} ) {

    const [List, setList] = useState([])

    function showList(List) {
        
    }

    //const actv =  useEffect( ()=>{setList(getAdv)}, [] )


    const obj = {
        List,
        actv
    }

    return(
        <>
        <objectListContext.Provider value={obj}>
            {children}
        </objectListContext.Provider>
        </>
    )

}

export { ObjectListService, objectListContext }