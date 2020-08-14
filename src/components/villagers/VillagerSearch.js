import React, { useState } from 'react';
import { Link } from 'react-router-dom'

  function VillagerSearch({villagers}) {
  const [query, setQuery] = useState('')

  const searchResults = () => {
    return villagers && villagers.filter(villager => villager.name.toLowerCase().includes(query.toLowerCase()))
  }

   const displayResults = () => {
    let results = searchResults();
      if (query === '') {
        return <div></div>
      } else {
        return (
          <ul>
            {results.map(villager => <li key={villager.id}> <Link to={`/villagers/${villager.id}`} villagers={villagers}> {villager.name} </Link> <button>Add Villager</button> </li>)}
          </ul>
        )
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