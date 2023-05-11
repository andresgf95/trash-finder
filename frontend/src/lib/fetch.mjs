import { api, urlBase } from "../lib/path.mjs"

async function getPass(UserName, password, handler) {
    const res = await fetch(urlBase+api.fixedPath+api.sesionPath, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ UserName, password })
    }
        )
    handler(res.ok ? await res.text() : false )
}

async function PostItem(Object, jwt, handler) {
    const res = await fetch(urlBase+api.fixedPath+api.objectPath, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: "Bearer "+jwt
        },
        body: JSON.stringify(Object)
    })
    handler( res.ok ? await res.json() : false )
}

async function CreateUser(UserName, password, Email, handler) {
    const res = await fetch("http://localhost:8000/api/v1.0/users/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(UserName, password, Email)})
    handler(res.ok ? await res.json() : false)
}



export { getPass, PostItem, CreateUser } 