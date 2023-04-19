function geoFindMe() {;

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  }

  function error() {
    console.log("erro")
  }

  if (!navigator.geolocation) {
    console.log("erro")
  } else {
    const data = navigator.geolocation.getCurrentPosition(success, error);
    console.log(data)
  }
}

export default geoFindMe