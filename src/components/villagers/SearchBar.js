import React, { useState } from 'react';
import SearchResults from './SearchResults';

function SearchBar({villagers, island}) {
  const [query, setQuery] = useState('')

  let results = villagers && villagers.filter(villager => villager.name.toLowerCase().includes(query.toLowerCase()))

  const displayResults = () => {
    if (query === '') {
      return ''
    } else {
      return <div className="column card"> <SearchResults results={results} island={island} /> </div>
    }
  }

  return (
    <div className="column card">
      <input type="text" 
        className="searchbar"
        placeholder="Search villager by name..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} />

        {displayResults()}
    </div>
  )

}

export default SearchBar;

