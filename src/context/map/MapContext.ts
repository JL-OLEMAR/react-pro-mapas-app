import { createContext } from 'react'
import { Map, Marker } from 'mapbox-gl'

interface MapContextProps {
  isMapReady: boolean
  markers: Marker[]
  map?: Map
  setMap: (map: Map) => void
  getRouteBetweenPoints: (
    start: [number, number],
    end: [number, number]
  ) => Promise<void>
}

export const MapContext = createContext<MapContextProps>({} as MapContextProps)
