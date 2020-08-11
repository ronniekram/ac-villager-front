import React from 'react';
import VillagersContainer from '/Users/HotRonnie/Desktop/ac-villagers-react/villager-front/src/containers/VillagersContainer.js'


const Island = (props) => {
  console.log(props)
  let island = props.islands.filter(island => island.id === props.match.params.id)[0]
  console.log(island)
  return (
    <div>
      <h2> {island.name} </h2>
      <h4>{island.owner}</h4>
      <p>Villagers: </p>
        <VillagersContainer island={island} />
      <button>Delete Island?</button>
    </div>
  )
}

export default Island;