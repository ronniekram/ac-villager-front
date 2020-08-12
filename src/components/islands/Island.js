import React from 'react';
import Villagers from '../villagers/Villagers'



const Island = (props) => {
  const island = props.islands.find(island => island.id == props.match.params.id)
  const village = (island && island.villagers)

  return (
    <div>
      <h2> {island && island.name} </h2>
      <h4>Owner: {island && island.owner}</h4>
      <p>Villagers: </p>
      <Villagers villagers={village} />
      <button onClick={props.deleteIsland(island && island.id)}>Delete Island?</button>
    </div>
  )
}


export default Island;