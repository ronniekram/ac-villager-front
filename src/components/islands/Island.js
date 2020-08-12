import React from 'react';
// import VillagersContainer from '/Users/HotRonnie/Desktop/ac-villagers-react/villager-front/src/containers/VillagersContainer.js'


const Island = (props) => {
  console.log(props)
  const island = props.islands.find(island => island.id == props.match.params.id)
  console.log(island)
  return (
    <div>
      <h2> {island && island.name} </h2>
      <h4>Owner: {island && island.owner}</h4>
      <p>Villagers: </p>
        {/* <VillagersContainer island={island} /> */}
        list of villagers <br />
      <button>Delete Island?</button>
    </div>
  )
}

export default Island;