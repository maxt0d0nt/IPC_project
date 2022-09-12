import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet'
import './MapView.css'

export const MapView = () => {
  const position = [34.4878585,-97.9703503,17]
  return (
    <>
    <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <CircleMarker
      center={position}
      pathOptions={{ color: 'red' }}
      radius={20}>
      <Tooltip>Tooltip for CircleMarker</Tooltip>
    </CircleMarker>
   
</MapContainer>
</>
  )
}

