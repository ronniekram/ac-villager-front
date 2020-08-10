import React from 'react';
// import {Redirect} from 'react-router-dom';

const Island = (props) => {
  console.log(props)
  // let island = props.islands && props.islands.filter(island => island.id === props.match.params.id)[0]
  let island = props.islands && props.islands.map(island => island.id === props.match.params.id)[0]
  // console.log(island)
  return (
    <div>
      <h2>{island ? island.name : null}</h2>
      <h4>Owner: {island ? island.owner :null}</h4>
      <h5>Villagers:</h5>
      <ul>
        <li>Villager 1</li>
      </ul>
      <button>Delete Island?</button>
    </div>
  )
}

export default Island;