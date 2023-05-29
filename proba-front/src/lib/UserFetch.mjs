async function getPass (UserName, password, handler) {
    const res = await fetch ("http://localhost:8000/api/v1.0/users/sesion/",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify ( { UserName, password } )
        }
    )
    handler( res.ok ? await res.text() : false )
}

async function createUser ( userName, password, email, handler ) {
    const res = await fetch ( "http://localhost:8000/api/v1.0/users/",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify ( {userName, password, email} )
        }
    )
    handler( res.ok ? await res.json() : false )
}

async function deleteUser ( data, jwt, handler ) {
    const res = await fetch ( "http://localhost:8000/api/v1.0/users/",
        {
            method: "DELETE",
            headers: { 
                "Content-Type": "application/json",
                authorization: "Bearer "+jwt 
            },
            body: JSON.stringify ( data )
        }
    )
    handler( res.ok ? await res.json() : false )
}

async function modifyUser ( data, jwt, handler ) {
    const res = await fetch ( "http://localhost:8000/api/v1.0/users/",
    {
        method: "PUT",
        headers: { 
            "Content-Type": "application/json",
            authorization: "Bearer "+jwt 
        },
        body: JSON.stringify( data )
    }
    )
    handler( res.ok ? await res.json() : false )
}

export { getPass, createUser, deleteUser, modifyUser }