import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from "react-leaflet";
import { MarkerIcon } from './react-leaflet-icon.mjs'
import "leaflet/dist/leaflet.css";
import { useState } from "react";

function Map() {
  

  const [position, setPosition] = useState([42.876, -8.54])

  /*function Coordenadas() {
    const map = useMapEvents({
      dragend: (event) => {
        console.log(event.target.getCenter());
        console.log(event.target.getBounds());
      }
    });
  }*/




  function Coordenadas() {
    useMapEvents({
      click(e){
          alert(e.latlng)
      }
  })
  }

  return (
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={true}
      style={{ height: "50vh", width: "75vh", marginLeft: "15px" }}>
        <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Coordenadas/>
        <Marker position={position} draggable={true} icon={MarkerIcon}>
            <Popup>
                {`dirección`}
            </Popup>
        </Marker>
        <Coordenadas/>
    </MapContainer>
  );
}

export default Map