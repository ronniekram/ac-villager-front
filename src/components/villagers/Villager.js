import React from 'react';
// import VillagerSearch from './VillagerSearch'

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
        </div>
    </div>
    {/* <div className="searchbar">
      <VillagerSearch villagers={villagers} />
    </div> */}
    </>
  )
}

export default Villager;

// function Villager({match, villagers}) {
//   return (
//     <div className="card">
//     <div>
//       <img src={ villagers[match.params.villagerId].image } alt={villagers[match.params.villagerId].image}/>
//     </div>
//     <div className="container">
//       <h3> { villagers[match.params.villagerId].name }</h3>
//       <p><strong>Gender: </strong> { villagers[match.params.villagerId].gender } </p>
//       <p><strong>Species: </strong> { villagers[match.params.villagerId].species } </p>
//       <p><strong>Personality: </strong> { villagers[match.params.villagerId].personality } </p>
//       <p><strong>Birthday: </strong> { villagers[match.params.villagerId].birthday } </p>

//     </div>
//   </div>
//   )
// }
// export default Villager;