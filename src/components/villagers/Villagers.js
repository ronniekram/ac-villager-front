import React from 'react';
import { connect } from 'react-redux';
import { removeVillager } from '../../actions/villagerActions';
import remove from '../img/remove.png'

function Villagers({villagers, removeVillager}) {

  const handleRemove = (villagerId) => {
    removeVillager(villagerId);
  }

    const list = villagers && villagers.map(villager =>
      <li key={villager.id}> 
        {villager.name} 
        <button onClick={() => handleRemove(villager.id)}> <img src={remove} alt="remove villager" /></button>
      </li> )
  
  return <> 
    {list} 
  </>
}

export default connect(null, {removeVillager})(Villagers);
