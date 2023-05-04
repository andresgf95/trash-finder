import { createContext, useState } from "react";

const authorizationContext = createContext()

function AuthorizationProvider({children}) {
    
    const [pass, setPass] = useState(false)

    function savePass(pass) {
        setPass(pass)
    }

    function logOut() {
        setPass(false)
    }

    const dataContext = { pass, savePass, logOut}

    return(
        <authorizationContext.Provider value={dataContext}>
            {children}
        </authorizationContext.Provider>
    )

}

export { AuthorizationProvider, authorizationContext }