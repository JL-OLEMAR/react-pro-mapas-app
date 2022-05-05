import { BtnMyLocation, MapView, ReactLogo, SearchBar } from '../components'

export function Home() {
  return (
    <div>
      <MapView />
      <SearchBar />
      <BtnMyLocation />
      <ReactLogo />
    </div>
  )
}
