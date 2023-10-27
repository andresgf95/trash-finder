async function getPass(UserName, password, handler) {
    const res = await fetch("http://localhost:8000/api/v1.0/users/sesion/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( { UserName, password } )} )
    handler(res.ok ? await res.text() : false )
}

async function PostItem(Object, jwt, handler) {
    const res = await fetch("http://localhost:8000/api/v1.0/objects/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: "Bearer "+jwt
        },
        body: JSON.stringify(Object)
    })
    handler( res.ok ? await res.json() : false )
}

async function CreateUser(object, handler) {
    const res = await fetch("http://localhost:8000/api/v1.0/users/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(object)})
    handler(res.ok ? await res.json() : false)
}

async function getAdv(jwt, handler) {
    const res = await fetch ("http://localhost:8000/api/v1.0/objects/", {
        headers: {
            authorization: "Bearer "+jwt
        }
    })
    handler( res.ok ? await res.json() : false )
}



export { getPass, PostItem, CreateUser, getAdv } 