async function getAdvertisements ( jwt, handler ) {
    const res = await fetch("http://localhost:8000/api/v1.0/objects/", {
        headers: { authorization: "Bearer "+jwt }
    })
    handler ( res.ok ? await res.json() : false )
}

async function createAdvertisement ( data, jwt, handler ) {
    const res = await fetch("http://localhost:8000/api/v1.0/objects/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: "Bearer "+jwt
        },
        body: JSON.stringify( data )
    })
    handler( res.ok ? await res.json() : false )
}

async function modifyAdvertisement ( data, jwt, handler ) {
    const res = await fetch("http://localhost:8000/api/v1.0/objects/", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            authorization: "Bearer "+jwt
        },
        body: JSON.stringify( data )
    })
    handler( res.ok ? await res.json() : false )
}

async function deleteAdvertisement ( data, jwt, handler ) {
    const res = await fetch("http://localhost:8000/api/v1.0/objects/", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            authorization: "Bearer "+jwt
        },
        body: JSON.stringify( data )
    })
    handler( res.ok ? await res.json() : false )
}

export { getAdvertisements, createAdvertisement, modifyAdvertisement, deleteAdvertisement }