import React from 'react';
import {Link} from 'react-router-dom';
import Villagers from '../villagers/Villagers'

function Islands({islands}) {
  const island = islands.map(island => 
    <div key={island.id}>
      <h2> {island && island.name} </h2>
      <h4>Owner: {island && island.owner}</h4>
        <p>Villagers: </p>
        <Villagers villagers={island && island.villagers} />
    </div>
  )

  return (
    <>
          {island}

    </>
  )
}

export default Islands;