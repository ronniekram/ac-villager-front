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

import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { removeVillager } from '../actions/villagerActions'
import Villager from '../components/villagers/Villager';
import Villagers from '../components/villagers/Villagers';

function VillagersContainer({villagers, removeVillager, history}) {

  const handleRemove = (villagerId) => {
    removeVillager(villagerId);
    history.push('/islands')
  }

    return (
      <>
        <Switch>
          <Route exact path='/villagers' render={(routerProps) => 
            <Villagers {...routerProps} villagers={villagers} handleRemove={handleRemove} />
          }></Route>
          <Route path={`/villagers/:id`}
            render={(routerProps) => 
            <Villager {...routerProps} 
                villagers={villagers} />}/>
        </Switch>        
      </>
    )
  }

const mapStateToProps = state => {
  return {
    villagers: state.villagerReducer.villagers
  }
}

export default connect(mapStateToProps, {removeVillager})(VillagersContainer);