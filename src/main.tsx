import React from 'react'
import ReactDOM from 'react-dom/client'
import mapboxgl from 'mapbox-gl'

import { MapsApp } from './MapsApp'

mapboxgl.accessToken = import.meta.env.VITE_APP_ACCESS_TOKEN

if (!navigator.geolocation) {
  alert('Your browser does not have the GeoLocation option')
  throw new Error('Your browser does not have the GeoLocation option')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
)
