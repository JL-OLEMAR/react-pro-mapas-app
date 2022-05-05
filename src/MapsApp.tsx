import { MapProvider, PlacesProvider } from './context'
import { Home } from './pages'
import './styles.css'

export function MapsApp() {
  return (
    <PlacesProvider>
      <MapProvider>
        <Home />
      </MapProvider>
    </PlacesProvider>
  )
}
