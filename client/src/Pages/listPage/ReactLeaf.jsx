import React from 'react'
import { useEffect,useRef } from 'react'
import leaflet from 'leaflet'

const ReactLeaf = () => {
    const mapRef = useRef();
    useEffect(() => {
        mapRef.current = leaflet.map('map').setView([51.505, -0.09], 13);
        leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(mapRef.current);
    }, [])
  return (
    <div id='map' ref={mapRef}>
      
    </div>
  )
}

export default ReactLeaf
