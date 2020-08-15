import React, { useState } from 'react';
import { Button } from 'react-bootstrap'
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

   const displayResults = () => {
    let results = searchResults();
      if (query === '') {
        return <div></div>
      } else {
        return  <ul className="column">
            {results.map(villager => <li key={villager.id}> <Link to={`/villagers/${villager.id}`} villagers={villagers}> {villager.name} </Link> <Button variant="outline-secondary" onClick={() => handleAdd(villager.id, island.id)}> Add Villager </Button> </li>)}
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