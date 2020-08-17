import React from 'react';
import {connect} from 'react-redux'
import { Card, Col, Button } from 'react-bootstrap';
import {deleteIsland} from '../../actions/islandActions';
// import Villager from '../villagers/Villager';
import Villagers from '../villagers/Villagers';
import VillagerSearch from '../villagers/VillagerSearch';
// import VillagersContainer from '../../containers/VillagersContainer';


function Island({history, match, islands, deleteIsland, villagers}) {
  
  const handleDelete = (island) => {
    deleteIsland(island)
    history.push('/islands')
  }

    const island = islands.find(island => island.id == match.params.id)
    const village = (island && island.villagers)
    return (
      <>
        <Col md={4} className="column">
          <Card className="card island-info">
            <Card.Body>
              <Card.Title>
                {island && island.name}
              </Card.Title>
              <Card.Subtitle>
                {island && island.owner}
              </Card.Subtitle>
                <p>Villagers:</p>
                <Villagers villagers={village} island={island} />
              <Button size="sm" variant="light" onClick={() => handleDelete(island.id)}>Delete Island?</Button>
              {/* <img src={islandX} alt="Delete Island?" onClick={handleDelete(island && island.id)} /> */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="column">
          <VillagerSearch villagers={villagers} island={island} />
        </Col>
        {/* <Col md={4} className="column">
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

export default connect(mapStateToProps, {deleteIsland})(Island);