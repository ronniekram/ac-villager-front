import React from 'react';
import {Link} from 'react-router-dom';

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
    </>
  )
}

export default Islands;