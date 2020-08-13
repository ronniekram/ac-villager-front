import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchVillagers} from '../actions/villagerActions';
import Villager from '../components/villagers/Villager';
import VillagerSearch from '../components/villagers/VillagerSearch'


function VillagersContainer({history, match, villagers}) {

    return (
      <>
        <Switch>
        <Route path={`/villagers/:id`} render={(routerProps) => <Villager {...routerProps} villagers={villagers}/>}/>
        </Switch>
        <VillagerSearch villagers={villagers}/>
      </>
    )
  }

const mapStateToProps = state => {
  return {
    villagers: state.villagerReducer.villagers
  }
}

export default connect(mapStateToProps, {fetchVillagers})(VillagersContainer);