import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
// import { Col } from 'react-bootstrap';
import VillagerSearch from '../components/villagers/VillagerSearch';
import Villagers from '../components/villagers/Villagers';
import Villager from '../components/villagers/Villager';

function VillagersContainer({match, villagers}) {

    return (
      <>
        <Switch>
          <Route exact path="/villagers" render={(routerProps) => <Villagers {...routerProps} villagers={villagers} />} />
          <Route exact path={`/villagers/:id`}
            render={(routerProps) => 
            <Villager {...routerProps} 
                villagers={villagers} />}/>
          <Route path={`/search`}
            render={(routerProps) => 
            <VillagerSearch {...routerProps} />}/>
          
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

export default connect(mapStateToProps)(VillagersContainer);