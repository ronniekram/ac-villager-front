import React, { useState } from 'react';
import { connect } from 'react-redux'
import {addVillager} from '../../actions/villagerActions'
import { Link } from 'react-router-dom'

function VillagerSearch({villagers, island}) {
  const [query, setQuery] = useState('')

  const searchResults = () => {
    return villagers && villagers.filter(villager => villager.name.toLowerCase().includes(query.toLowerCase()))
  }

  const addToIsland = (villager, islandId) => {
      addVillager(villager, islandId)
  }


   const displayResults = () => {
    let results = searchResults();
      if (query === '') {
        return <div></div>
      } else {
        return (
          <ul>
            {results.map(villager => <li key={villager.id}> <Link to={`/villagers/${villager.id}`} villagers={villagers}> {villager.name} </Link> <button onClick={addToIsland(villager.id, island.id)}> Add Villager </button> </li>)}
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

export default connect(null, {addVillager})(VillagerSearch);