import React, { useState } from 'react';
import { connect } from 'react-redux'
import {addVillager} from '../../actions/villagerActions'
import { Link } from 'react-router-dom'

function VillagerSearch({villagers, island, addVillager}) {
  const [query, setQuery] = useState('')

  const searchResults = () => {
    return villagers.filter(villager => villager.name.toLowerCase().includes(query.toLowerCase()))
  }
  const handleAdd = (villagerId, islandId) => {
    addVillager(villagerId, islandId);
    window.location.reload(true);
  }

  // save and try this ? ^ 

//gonna punt my computer into the river after i turn this in
   const displayResults = () => {
    let results = searchResults();
      if (query === '') {
        return <div></div>
      } else {
        return  <ul>
            {results.map(villager => <li key={villager.id}> <Link to={`/villagers/${villager.id}`} villagers={villagers}> {villager.name} </Link> <button onClick={() => handleAdd(villager.id, island.id)}> Add Villager </button> </li>)}
          </ul>

        
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