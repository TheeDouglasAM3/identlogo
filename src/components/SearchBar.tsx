import React from 'react'

import { IoMdSearch } from 'react-icons/io'
import { Search, SearchInput } from '../styles/components/searchBar'

export default function SearchBar() {
  return (
    <Search>
      <IoMdSearch style={{ marginLeft: '1rem', position: 'absolute' }} color="#787686" size="1.5em" />
      <SearchInput
        id="search-input"
        type="text"
        placeholder="Busca..."
      />
    </Search>
  )
}
