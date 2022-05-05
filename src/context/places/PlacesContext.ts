import { createContext } from 'react'

import { Feature } from '../../interfaces/places'

export interface PlacesContextProps {
  isLoading: boolean
  isLoadingPlaces: boolean
  places: Feature[]
  userLocation?: [number, number]
  searchPlacesTerm: (query: string) => Promise<Feature[]>
}

export const PlacesContext = createContext<PlacesContextProps>(
  {} as PlacesContextProps
)
