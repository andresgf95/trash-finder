/*import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

function Map() {

  const [position, setPosition] = useState([42.876, -8.54])

  function Coordenadas() {
    const map = useMapEvents({
      dragend: (event) => {
        console.log(event.target.getCenter());
        console.log(event.target.getBounds());
      }
    });
  }

  const marker = L.icon({
    iconUrl: 'Marker.svg',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76] }
  )

    function addMarker(event) {
      
    }

  return (
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={true}
      style={{ height: "45vh", width: "45vh" }}>
        <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker position={position} draggable={true} >
            <Popup>
                {`dirección`}
            </Popup>
        </Marker>
        <Coordenadas/>
    </MapContainer>
  );
}

export default Map*/