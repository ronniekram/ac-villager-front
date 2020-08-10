import React from 'react';
import {Link} from 'react-router-dom';
// import Island from './Island';

const Islands = (props) => {
  console.log(props)
  return (
    <div>
      <h2>Islands</h2>
      {props.islands && props.islands.map(island => 
        <li key={island.id}>
          <Link to={`/islands/${island.id}`}>{island.name}</Link>
        </li>)}
    </div>
  )
}

export default Islands;