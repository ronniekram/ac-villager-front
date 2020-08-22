import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Villagers from '../villagers/Villagers';
import SearchBar from '../villagers/SearchBar'
import islandX from '/Users/HotRonnie/Desktop/ac-villagers-react/villager-front/src/components/img/islandX.png'


function Island({islands, villagers, handleDelete, handleRemove, match}) {
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
                <Villagers villagers={village} island={island} handleRemove={handleRemove} />
                <button onClick={() => {
                  return handleDelete(island.id);}}> 
                   <img src={islandX} alt="Delete Island?" /> 
                </button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="column">
            <SearchBar villagers={villagers} island={island} />
        </Col>
    </>
    )
  }

export default Island;