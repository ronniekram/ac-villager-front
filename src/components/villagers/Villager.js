// import React from 'react';
// const Villager = (props) => {
//   console.log(props)
//   const villager = props.villagers.find(villager => 
//     villager.id == props.match.params.id)
//   console.log(villager)
//   return (
//     <div className="card">
//       <div><img src={ villager && villager.image} alt={villager && villager.name} /></div>
//         <div className="container">
//           <h3>{villager && villager.name} </h3>
//           <p>Gender: {villager && villager.gender} </p>
//           <p>Personality: {villager && villager.personality} </p>
//           <p>Species: {villager && villager.species} </p>
//           <p>Birthday: {villager && villager.birthday} </p>
//         </div>

//     </div>
//   )
// }

// export default Villager;


import React from 'react';
function Villager({match, villagers}) {
  const villager = villagers.find(villager => 
    villager.id == match.params.id)

  return (
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
  )
}

export default Villager;