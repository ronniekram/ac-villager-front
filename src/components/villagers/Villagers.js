import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { removeVillager } from '../../actions/villagerActions';
import remove from '/Users/HotRonnie/Desktop/ac-villagers-react/villager-front/src/components/img/remove.png'

function Villagers({villagers, removeVillager}) {

  const handleRemove = (villagerId) => {
    removeVillager(villagerId);
  }

    const list = villagers && villagers.map(villager =>
      <li key={villager.id}> 
        <Link to={`/villagers/${villager.id}`} 
        villager={villager} 
        className="link">  
        {villager.name} </Link>  
        <button onClick={() => handleRemove(villager.id)}> <img src={remove} alt="remove villager" /></button>
      </li> )
  
  return <> {list} </>
}
export default connect(null, {removeVillager})(Villagers);
// pass remove villager down from island?
