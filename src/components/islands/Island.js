import React from 'react';
import {connect} from 'react-redux'
import {deleteIsland} from '../../actions/islandActions'
import Villagers from '../villagers/Villagers'

function Island({history, match, islands, deleteIsland}) {
  
  const handleDelete = (island) => {
    deleteIsland(island)
    history.push('/islands')
  }


    const island = islands.find(island => island.id == match.params.id)
    const village = (island && island.villagers)
    return (
      <>
        <h2> {island && island.name} </h2>
          <h4>Owner: {island && island.owner}</h4>
          <p>Villagers: </p>
            <Villagers villagers={village} />
        <button onClick={() => handleDelete(island.id)}>Delete Wishlist?</button>
    </>
    )
  }


export default connect(null, {deleteIsland})(Island);
// import React from 'react';
// import { Route } from 'react-router-dom';
// import {connect} from 'react-redux'
// import {deleteIsland} from '../../actions/islandActions'
// import Villagers from '../villagers/Villagers'
// import Villager from '../villagers/Villager'

// function Island({ match, history, islands, deleteIsland }){

//   const handleDelete = (island) => {
//     deleteIsland(island)
//     history.push('/islands')
//   }

//   const island = islands.find(island => island.id == match.params.id)
//   const village = (island && island.villagers)

//   return (
//     <div>
//       <h2> {island && island.name} </h2>
//       <h4>Owner: {island && island.owner}</h4>
//         <button onClick={() => handleDelete(island.id)}>Delete Island?</button>
//       <p>Villagers: </p>
//       <Villagers villagers={village} />
//         <Route exact path={`${match.url}/`} render={() => <p>Click a villager to see more information</p>} />
//         <Route path={`${match.url}/:villagerId`} render={routerProps => <Villager {...routerProps} villagers={village} />} />
//     </div>
//   )
// }
// export default connect(null, {deleteIsland})(Island);