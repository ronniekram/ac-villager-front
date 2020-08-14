import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import Island from '../components/islands/Island'
import Islands from '../components/islands/Islands';
import IslandInput from '../components/islands/IslandInput';


function IslandsContainer({islands}) {

    return (
      <>
        <Switch>

        <Route exact path={`/island`} render={(routerProps) => <Islands {...routerProps} islands={islands} />} />

          {/* <Route path={`/islands/new`} 
            render={(routerProps) => 
            <IslandInput {...routerProps}/>} />

          <Route exact path={`/islands/:id`}
            render={(routerProps) => 
              <Island {...routerProps} 
                islands={islands} />}/> */}
        </Switch>
      </>
    )
  }

const mapStateToProps = state => {
  return {
    islands: state.islandReducer.islands
  }
}

export default connect(mapStateToProps)(IslandsContainer);