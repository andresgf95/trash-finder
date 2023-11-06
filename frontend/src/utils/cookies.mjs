import Cookies from 'js-cookie'

function getPassFromCookie() {
    return Cookies.get(storageKey)
}
  
function setPassInCookie(pass) {
    Cookies.set(storageKey, pass, { expires: 7 })
}

export { getPassFromCookie, setPassInCookie }