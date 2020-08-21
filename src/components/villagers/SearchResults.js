import React from 'react';
import { Link } from 'react-router-dom';
import add from '/Users/HotRonnie/Desktop/ac-villagers-react/villager-front/src/components/img/add.png';

function SearchResults({results, island, handleAdd}) {

  const list = results && results.map(villager => 
    <li key={villager.id}>
      <Link to={`/villagers/${villager.id}`}            className="link"> 
        {villager.name}
      </Link> 
      {/* <button 
        onClick={() => {
          return handleAdd(villager.id, island.id);}}> 
        <img src={add} alt="add villager to island" />
      </button> */}
      <button onClick={() => console.log('clicked')}> <img src={add} alt="add villager to island" /></button>
    </li>)

    console.log(island)
  return (
    <>
      {list}
    </>
  )
}

export default SearchResults;

// <button onClick={handleAdd(villager.id, island.id)}> <img src={add} alt="add villager to island" /></button>