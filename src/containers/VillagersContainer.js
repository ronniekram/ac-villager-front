import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
// import { Col } from 'react-bootstrap';
// import VillagerSearch from '../components/villagers/VillagerSearch';
import Villagers from '../components/villagers/Villagers';
import Villager from '../components/villagers/Villager';

function VillagersContainer({match, villagers, island}) {

    return (
      <>
        <Switch>
          <Route exact path="/villagers" render={(routerProps) => <Villagers {...routerProps} villagers={villagers} />} />
          <Route exact path={`/villagers/:id`}
            render={(routerProps) => 
            <Villager {...routerProps} 
                villagers={villagers} />}/>
        </Switch>

        {/* <Col md={4} className="column">
          <VillagerSearch villagers={villagers} island={island} />
        </Col>

        <Col md={4} className="column">
              <Villager villagers={villagers} />
        </Col> */}
      </>
    )
  }

const mapStateToProps = state => {
  return {
    villagers: state.villagerReducer.villagers
  }
}

export default connect(mapStateToProps)(VillagersContainer);