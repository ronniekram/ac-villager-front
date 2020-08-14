import React from 'react';

function Villager({match, villagers}) {
  const villager = villagers && villagers.find(villager => 
    villager.id == match.params.id)
    console.log(villager)

  return (
    <>
    <div className="card">
      <div><img src={ villager && villager.image} alt={villager && villager.name} /></div>
        <div className="container">
          <h3>{villager && villager.name} </h3>
          <p>Gender: {villager && villager.gender} </p>
          <p>Personality: {villager && villager.personality} </p>
          <p>Species: {villager && villager.species} </p>
          <p>Birthday: {villager && villager.birthday} </p>
          <button>Add to Island</button>
        </div>
    </div>
    </>
  )
}

export default Villager;