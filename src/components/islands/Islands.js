import React from 'react';
// import { Route, Link } from 'react-router-dom'
// import Island from './Island'

const Islands = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Islands</h1>
      {props.islands && props.islands.map(island => 
        <li key={island.id}>{island.name}</li>
        )}
    </div>
  )
}

export default Islands;