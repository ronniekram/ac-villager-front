import React from 'react';
const Villager = (props) => {
  return (
    <div className="card">
      <div><img src={props.villager.image} alt={props.villager.name} /></div>
        <div className="container">
          <h3>{props.villager.name} </h3>
          <p>Gender: {props.villager.gender} </p>
          <p>Personality: {props.villager.personality} </p>
          <p>Species: {props.villager.species} </p>
          <p>Birthday: {props.villager.birthday} </p>
        </div>

    </div>
  )
}

export default Villager;