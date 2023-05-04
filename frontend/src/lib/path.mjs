const api = {
    fixedPath: "/api/v1.0/",
    userPath: "users/",
    objectPath: "object/",
    sesionPath: "sesion/"
}

const urlBase = window.location.hostname === "localhost" ? "http://localhost:8000" : ""

export { api, urlBase }