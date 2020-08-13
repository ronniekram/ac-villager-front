import React, { useState } from 'react';
import Villagers from './Villagers';

  function VillagerSearch({villagers}) {
  const [query, setQuery] = useState('')

  const searchResults = () => {
    return villagers && villagers.filter(villager => villager.name.toLowerCase().includes(query.toLowerCase()))
  }

   const displayResults = () => {
      if (query === '') {
        return <div></div>
      } else {
        return <Villagers villagers={searchResults()} />
      }
    }
    
    return (
      <div className="searchbar">
        <input type="text" placeholder="Search villager by name..." value={query} onChange={(e) => setQuery(e.target.value)} />

        {displayResults()}

      </div>
    )
  }

export default VillagerSearch;