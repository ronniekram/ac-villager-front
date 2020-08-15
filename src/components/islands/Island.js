import React from 'react';
import {connect} from 'react-redux'
import { Card, Col, Row, Button } from 'react-bootstrap';
import {deleteIsland} from '../../actions/islandActions'
import Villagers from '../villagers/Villagers'
import VillagerSearch from '../villagers/VillagerSearch'

function Island({history, match, islands, deleteIsland, villagers}) {
  
  const handleDelete = (island) => {
    deleteIsland(island)
    history.push('/islands')
  }

    const island = islands.find(island => island.id == match.params.id)
    const village = (island && island.villagers)
    return (
      <>
      <Row>
        <Col md={4} className="column">
          <Card className="card island-info">
            <Card.Body>
              <Card.Title>
                {island && island.name}
              </Card.Title>
              <Card.Subtitle>
                {island && island.owner}
              </Card.Subtitle>
              <Card.Text>
                <p>Villagers: </p>
                <Villagers villagers={village} />
              </Card.Text>
              <Button variant="outline-secondary" size="sm" onClick={() => handleDelete(island.id)}>Delete Island?</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="column">
          <VillagerSearch villagers={villagers} island={island} />
        </Col>
      </Row>
    </>
    )
  }
  const mapStateToProps = state => {
    return {
      villagers: state.villagerReducer.villagers
    }
  }

export default connect(mapStateToProps, {deleteIsland})(Island);
