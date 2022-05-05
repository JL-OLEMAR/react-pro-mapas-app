import { ChangeEvent, useContext, useRef } from 'react'

import { PlacesContext } from '../context'

import { SearchResults } from './SearchResults'

export function SearchBar() {
  const { searchPlacesTerm } = useContext(PlacesContext)
  const debouncedRef = useRef<NodeJS.Timeout>()

  const onQueryChanged = (e: ChangeEvent<HTMLInputElement>) => {
    if (debouncedRef.current) clearTimeout(debouncedRef.current)

    debouncedRef.current = setTimeout(() => {
      searchPlacesTerm(e.target.value)
    }, 350)
  }

  return (
    <div className='search-container'>
      <input
        className='form-control'
        placeholder='Search place...'
        type='text'
        onChange={onQueryChanged}
      />

      <SearchResults />
    </div>
  )
}
