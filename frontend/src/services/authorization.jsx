import { createContext, useState, useEffect } from "react";
import { getPassFromCookie, setPassInCookie } from "../utils/cookies.mjs";

const authorizationContext = createContext()
const storageKey = "pass"

function AuthorizationService( {children} ) {

    const [ pass, setPass ] = useState(getPassFromCookie() ?? false)
    const [ consent, setConsent ] = useState(Boolean(pass))

    function savePass(pass) {
        setPass(pass)
        setPassInCookie(pass)
    }

    function logOut() {
        setPass(false)
        Cookies.remove(storageKey)
    }

    useEffect(
        ()=>{ setConsent(Boolean(pass)) },
        [ pass ]
    )

    const dataContext = { pass, consent, savePass, logOut }

    return(
        
    )
}