import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import {addVillager} from '../actions/villagerActions';
import Villager from '../components/villagers/Villager';
import Villagers from '../components/villagers/Villagers';
import Island from '../components/islands/Island'

function VillagersContainer({villagers, islands, history}) {

    return (
      <>
        <Switch>
          <Route exact path='/villagers' render={(routerProps) => 
            <Villagers {...routerProps} villagers={villagers} />
          }></Route>

          <Route path={`/villagers/:id`}
            render={(routerProps) => 
            <Villager {...routerProps} 
                villagers={villagers} />}/>
          {/* <Route path={`/islands/:id`}
            render={(routerProps) => 
              <Island {...routerProps} 
                islands={islands} villagers={villagers} />}/> */}
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

export default connect(mapStateToProps, {addVillager})(VillagersContainer);