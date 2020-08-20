import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { removeVillager } from '../../actions/villagerActions';
import remove from '/Users/HotRonnie/Desktop/ac-villagers-react/villager-front/src/components/img/remove.png'

function Villagers({villagers}) {



    const list = villagers && villagers.map(villager =>
      <li key={villager.id}> 
        <Link to={`/villagers/${villager.id}`} 
        villagers={villagers} 
        className="link">  
        {villager.name} </Link> 
          <img src={remove} alt="remove villager" onClick={() => removeVillager(villager.id)} /> 
      </li> )
  
  return <> {list} </>
}

export default connect(null, {removeVillager})(Villagers);