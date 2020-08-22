import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addVillager } from '../../actions/villagerActions'
import add from '/Users/HotRonnie/Desktop/ac-villagers-react/villager-front/src/components/img/add.png';

function SearchResults({results, island, addVillager, history}) {

  const handleAdd = (villager, island) => {
    addVillager(villager, island);
    // history.push(`/island/${island}`);
  }

  const list = results && results.map(villager => 
    <li key={villager.id}>
      <Link to={`/villagers/${villager.id}`} className="link"> 
        {villager.name}
      </Link> 
      <button onClick={() => handleAdd(villager.id, island.id)}> <img src={add} alt="add villager to island" /></button>
    </li>)

  return (
    <>
      {list}
    </>)
}

export default connect(null, {addVillager})(SearchResults);