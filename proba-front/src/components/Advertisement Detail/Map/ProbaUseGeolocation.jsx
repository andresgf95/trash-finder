import { useGeolocation } from "@uidotdev/usehooks";

function Location() {
    
    const state = useGeolocation()

    if (state.loading) {
        return <p>cargando...</p>
    }
    if (state.error) {
        return <p>Activa os permisos!</p>
    }

    return(
        <div>{state}</div>
    )
}

export default Location