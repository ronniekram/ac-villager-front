import React from 'react';
import { Link } from 'react-router-dom'
import Villager from './Villager'

function Villagers({villagers}) {
  
  const list = villagers && villagers.map(villager =>
    <li key={villager.id}> <Link to={`villagers/${villager.id}`}> {villager.name} </Link> </li>)
  return (
    <>
    {/* <Route path="/villagers/:id" render={(routerProps) => <Villager {...routerProps} villagers={villagers} />} /> */}
    <ul>
      {list}
    </ul>
    </>
  )
}

export default Villagers;

// import React from 'react';
// import { Link } from 'react-router-dom'

// function Villagers({villagers}) {
  
//   const list = Object.keys(villagers).map(villagerId => 
//     <Link key={villagerId} to={`/villagers/${villagerId}`}> {villagers[villagerId].name} </Link> 
//     );
//   return (
//     <>
//     <ul>
//       {list}
//     </ul>
//     </>
//   )
// }

// export default Villagers;