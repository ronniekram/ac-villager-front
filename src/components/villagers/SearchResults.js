import React from 'react';
import { Link } from 'react-router-dom';
import add from '/Users/HotRonnie/Desktop/ac-villagers-react/villager-front/src/components/img/add.png';

function SearchResults({villagers, handleAdd}) {
  const list = villagers && villagers.map(villager => 
    <li key={villager.id}>
      <Link to={`/villagers/${villager.id}`} className="link"> 
        {villager.name} 
        <button> <img src={add} alt="new island link" /> </button>
      </Link>
    </li>)
  return (
    <>
      {list}
    </>
  )
}

export default SearchResults;

//<button onClick={() => handleAdd(villager.id, island.id)}></button>