import React from 'react';
import { Link } from 'react-router-dom'
import add from '/Users/HotRonnie/Desktop/ac-villagers-react/villager-front/src/components/img/add.png';

function SearchResults({handleAdd, villagers, island}) {

  const results = villagers && villagers.map(villager => 
    <li key={villager.id}> 
      <Link to={`/villagers/${villager.id}`} 
        villagers={villagers} 
        className="link">  
        {villager.name} </Link>
      <button disabled={island && island.villagers.length < 10? false: true} 
        onClick={() => handleAdd(villager.id, island.id)}> 
        <img src={add} alt="new island link" /> </button> 
    </li> 
    )
  return (
    {results}
  )
}
export default SearchResults;