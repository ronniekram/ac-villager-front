import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchVillagers} from '../actions/fetchVillagers';
import Villagers from '../components/villagers/Villagers';
import VillagerSearch from '../components/villagers/VillagerSearch';

class VillagersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchVillagers()
  }

  render() {
    return (
      <div>
        <Switch>
        <Route path='/villagers' render={(routerProps) => <Villagers {...routerProps} villagers={this.props.villagers} />} />
        </Switch>
        <VillagerSearch villagers={this.props.villagers} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    villagers: state.villagerReducer.villagers
  }
}

export default connect(mapStateToProps, {fetchVillagers})(VillagersContainer);