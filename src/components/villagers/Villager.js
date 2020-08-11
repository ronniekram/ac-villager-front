import React from 'react';
// import { Route } from 'react-router-dom'
// Villager Card goes here
const Villager = (props) => {
  return (
    <div className="card">
      <div>Villager Photo Goes Here</div>
        <div className="container">
          <h3>Villager Name</h3>
          <p>Gender: </p>
          <p>Personality: </p>
          <p>Species: </p>
          <p>Birthday: </p>
        </div>

    </div>
  )
}

export default Villager;