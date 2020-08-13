import React from 'react';
import {Link} from 'react-router-dom';
import VillagersContainer from '../../containers/VillagersContainer'

function Islands({islands}) {
  const list = islands.map(island => 
    <li key={island.id}> 
      <Link to={`/islands/${island.id}`}> {island.name}</Link>
    </li>
  )

  return (
    <>
      <h3>Islands</h3>
        <ul>
          {list}
        </ul>  
      <VillagersContainer /> 
    </>
  )
}

export default Islands;