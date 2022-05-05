import axios from 'axios'

export const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5, // max 5 search results
    language: 'es',
    country: 'pe',
    access_token: import.meta.env.VITE_APP_ACCESS_TOKEN
  }
})
