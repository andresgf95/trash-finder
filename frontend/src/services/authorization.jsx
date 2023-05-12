import { createContext, useState, useEffect } from "react";

const authorizationContext = createContext()
const storage = localStorage
const storageKey = "pass"

function AuthorizationProvider({children}) {
    
    const [ pass, setPass ] = useState(storage.getItem(storageKey) ?? false)
    const [ consent, setConsent ] = useState(Boolean(pass))

    function savePass(pass) {
        setPass(pass)
        storage.setItem(storageKey, pass)
    }

    function logOut() {
        setPass(false)
        storage.removeItem(storageKey)
    }

    useEffect(
        ()=>{ setConsent(Boolean(pass)) },
        [ pass ]
    )

    const dataContext = { pass, consent, savePass, logOut}

    return(
        <authorizationContext.Provider value={dataContext}>
            {children}
        </authorizationContext.Provider>
    )

}

export { AuthorizationProvider, authorizationContext }