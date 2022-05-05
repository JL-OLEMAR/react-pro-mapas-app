import { useContext, useLayoutEffect, useRef } from 'react'
import { Map } from 'mapbox-gl'

import { MapContext, PlacesContext } from '../context'

import { Loading } from './Loading'

export function MapView() {
  const { isLoading, userLocation } = useContext(PlacesContext)
  const { setMap } = useContext(MapContext)
  const mapDiv = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new Map({
        container: mapDiv.current!,
        style: 'mapbox://styles/mapbox/light-v10',
        center: userLocation,
        zoom: 14
      })

      setMap(map)
    }
  }, [isLoading, userLocation, setMap]) // setMap is sended since the father component

  if (isLoading) return <Loading />

  return (
    <div
      ref={mapDiv}
      style={{
        height: '100vh',
        left: 0,
        position: 'fixed',
        top: 0,
        width: '100vw'
      }}
    >
      {userLocation?.join(',')}
    </div>
  )
}
