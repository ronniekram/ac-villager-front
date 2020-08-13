import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchIslands} from '../actions/islandActions';
import Island from '../components/islands/Island'
import Islands from '../components/islands/Islands';
import IslandInput from '../components/islands/IslandInput';


function IslandsContainer({match, islands}) {

    return (
      <>
        <Switch>

        <Route exact path={`${match.url}`} render={(routerProps) => <Islands {...routerProps} islands={islands} />} />

          <Route path={`${match.url}/new`} 
            render={(routerProps) => 
            <IslandInput {...routerProps}/>} />

          <Route exact path={`${match.url}/:id`}
            render={(routerProps) => 
              <Island {...routerProps} 
                islands={islands} />}/>
        </Switch>
      </>
    )
  }

const mapStateToProps = state => {
  return {
    islands: state.islandReducer.islands
  }
}

export default connect(mapStateToProps, {fetchIslands})(IslandsContainer);