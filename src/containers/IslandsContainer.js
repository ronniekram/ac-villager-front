// import React from 'react';
// import { connect } from 'react-redux';
// import {Route, Switch} from 'react-router-dom';
// import {addIsland, deleteIsland} from './actions/islandActions';
// import Island from '../components/islands/Island'
// import Islands from '../components/islands/Islands';
// import IslandInput from '../components/islands/IslandInput';


// function IslandsContainer({islands}) {
//   //handlesubmit
//   //handle delete
//   //handlechange
//   // island = 
//   // villagers =

//     return (
//       <>
//         <Switch>
//           <Route exact path={`/islands`} render={(routerProps) => <Islands {...routerProps} islands={islands} />} />

//           <Route path={`/islands/new`} 
//             render={(routerProps) => 
//             <IslandInput {...routerProps}/>} />

//           <Route exact path={`/islands/:id`}
//             render={(routerProps) => 
//               <Island {...routerProps} 
//                 islands={islands} />}/>
//         </Switch>
//       </>
//     )
//   }

// const mapStateToProps = state => {
//   return {
//     islands: state.islandReducer.islands,
//     villagers: state.villagerReducer.villagers
//   }
// }

// export default connect(mapStateToProps)(IslandsContainer);

import React, { useState } from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {addIsland, deleteIsland} from '../actions/islandActions';
// import {removeVillager} from '../actions/villagerActions'
import SearchBar from '../components/villagers/SearchBar';
import Island from '../components/islands/Island'
import Islands from '../components/islands/Islands';
import IslandInput from '../components/islands/IslandInput';


function IslandsContainer({addIsland, deleteIsland, islands, villagers, history}) {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    addIsland({
      name: name,
      owner: owner
    })
    history.push('/islands')
  }

  const handleDelete = (island) => {
    deleteIsland(island);
    history.push('/islands')
  }

    return (
      <>
        <Switch>
          <Route exact path={`/islands`} render={(routerProps) => <Islands {...routerProps} islands={islands} />} />

          <Route path={`/islands/new`} 
            render={(routerProps) => 
            <IslandInput {...routerProps} handleSubmit={handleSubmit} setName={setName} name={name}setOwner={setOwner} owner={owner} />} />

          <Route exact path={`/islands/:id`}
            render={(routerProps) => 
              <Island {...routerProps} 
                islands={islands} villagers={villagers}handleDelete={handleDelete} />}/>

          <Route path={`/villagers/search`}
            render={(routerProps) => 
            <SearchBar {...routerProps} 
                villagers={villagers} />}/>
        </Switch>
      </>
    )
  }

const mapStateToProps = state => {
  return {
    islands: state.islandReducer.islands,
    villagers: state.villagerReducer.villagers
  }
}

export default connect(mapStateToProps, {addIsland, deleteIsland})(IslandsContainer);