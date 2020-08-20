// import React from 'react';
// import { connect } from 'react-redux';
// import {Route, Switch} from 'react-router-dom';
// import VillagerSearch from '../components/villagers/VillagerSearch';
// import SearchResults from '../components/villagers/SearchResults';
// import Villagers from '../components/villagers/Villagers';
// import Villager from '../components/villagers/Villager';

// function VillagersContainer({match, villagers}) {

//     return (
//       <>
//         <Switch>
//           <Route exact path="/villagers" render={(routerProps) => <Villagers {...routerProps} villagers={villagers} />} />
//           <Route exact path={`/villagers/:id`}
//             render={(routerProps) => 
//             <Villager {...routerProps} 
//                 villagers={villagers} />}/>
//           {/* <Route path={`/search`}
//             render={(routerProps) => 
//             <VillagerSearch {...routerProps} />}/> */}
          
//         </Switch>

//         <VillagerSearch villagers={villagers} />
        
//       </>
//     )
//   }

// const mapStateToProps = state => {
//   return {
//     villagers: state.villagerReducer.villagers, 
//     islands: state.islandReducer.islands
//   }
// }

// export default connect(mapStateToProps)(VillagersContainer);

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import {removeVillager, addVillager} from '../actions/villagerActions'
import Villager from '../components/villagers/Villager';
import Villagers from '../components/villagers/Villagers';
import SearchBar from '../components/villagers/SearchBar';

function VillagersContainer({villagers, islands, addVillager, removeVillager, history}) {

  const [query, setQuery] = useState('');

  const handleRemove = (villager) => {
    removeVillager(villager);
    history.push('/islands');
  }

  const handleAdd = (villager, island) => {
    addVillager(villager, island);
    history.push('/islands');
  }

    return (
      <>
        <Switch>
          <Route exact path='/villagers' render={(routerProps) => 
            <Villagers {...routerProps} handleRemove={handleRemove} villagers={villagers} />
          }></Route>
          <Route exact path={`/villagers/:id`}
            render={(routerProps) => 
            <Villager {...routerProps} 
                villagers={villagers} />}/>
          {/* <Route path={'/search'} 
            render={(routerProps) => 
            <SearchBar {...routerProps} 
              villagers={villagers}
              query={query} 
              setQuery={setQuery}
              handleAdd={handleAdd} /> } /> */}
        </Switch>        
      </>
    )
  }

const mapStateToProps = state => {
  return {
    villagers: state.villagerReducer.villagers,
    islands: state.islandReducer.islands
  }
}

export default connect(mapStateToProps, {addVillager, removeVillager})(VillagersContainer);