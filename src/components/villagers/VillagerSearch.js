import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import Villagers from './Villagers'

function VillagerSearch({villagers, island}) {
  const [query, setQuery] = useState('')

  const searchResults = () => {
    return villagers.filter(villager => villager.name.toLowerCase().includes(query.toLowerCase())) 
    }

   const displayResults = () => {
    const results = searchResults();
      if (query === '') {
        return <div></div>
      } else {
        return <Villagers villagers={results} island={island} />
      }
    }
    
    return (
      <Col className="column card">
        <input type="text" 
          className="searchbar"
          placeholder="Search villager by name..." 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} />

        {displayResults()}
      </Col>
    )
  }
  
export default VillagerSearch;