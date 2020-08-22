import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { addVillager } from '../../actions/villagerActions'
import add from '../img/add.png';

function SearchResults({results, island, addVillager}) {

  const list = results && results.map(villager => 
    <li key={villager.id}>
      <Link to={`/villagers/${villager.id}`} className="link"> 
        {villager.name}
      </Link> 
      <button onClick={() => addVillager(villager.id, island.id)}> <img src={add} alt="add villager to island" /></button>
    </li>)

  return (
    <>
      {list}
    </>)
}

// export default connect(null, {addVillager})(SearchResults);
export default SearchResults;