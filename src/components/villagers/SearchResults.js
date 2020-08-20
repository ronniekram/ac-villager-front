import React from 'react';
import { Link } from 'react-router-dom';
import add from '/Users/HotRonnie/Desktop/ac-villagers-react/villager-front/src/components/img/add.png';

function SearchResults({results, island, handleAdd}) {
  const list = results && results.map(villager => 
    <li key={villager.id}>
      <Link to={`/villagers/${villager.id}`} className="link"> 
        {villager.name} 
        <img src={add} alt="add villager to island" onClick={() => handleAdd(villager.id, island.id)}/>
      </Link>
    </li>)
  return (
    <>
      {list}
    </>
  )
}

export default SearchResults;
