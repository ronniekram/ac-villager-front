import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchIslands} from '../actions/fetchIslands';
import Navbar from '../components/Navbar'
import Islands from '../components/islands/Islands';
import IslandInput from '../components/islands/IslandInput';

class IslandsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchIslands()
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path='/islands/new' component={IslandInput} />
          <Route path='/islands' render={(routerProps) => <Islands {...routerProps} islands={this.props.islands} />} />
        </Switch>
      </div>
    )
  }


}

const mapStateToProps = state => {
  return {
    islands: state.islandReducer.islands
  }
}

export default connect(mapStateToProps, {fetchIslands})(IslandsContainer);