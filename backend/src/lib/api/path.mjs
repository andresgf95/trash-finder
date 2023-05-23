const path = {
    user: "/api/v1.0/users/", // Xestión da conta de usuario
    sesion: "/api/v1.0/users/sesion/", // Xestión da sesión de usuario
    userProfile: "/api/v1.0/userProfile/", // Xestión do perfil de usuario
    profileID: "/api/v1.0/userProfile/:id", // Filtro de perfil de usuario por ID
    allAdvertisements: "/api/v1.0/objects/", // Lista de todos os avisos creados
    advertisements: "/api/v1.0/objects/:id", // filtro de avisos por id
    files: "/api/v1.0/files/", // Endpoint xeral de arquivos
    location: "/api/v1.0/location/" // Xestión de ubicacións por avisos + id
}
export { path }