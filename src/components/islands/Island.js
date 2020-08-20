import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Villagers from '../villagers/Villagers';
import SearchBar from '../villagers/SearchBar'
import islandX from '/Users/HotRonnie/Desktop/ac-villagers-react/villager-front/src/components/img/islandX.png'


function Island({islands, villagers, handleDelete, match}) {
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
                <Villagers villagers={village}  />
                  <img src={islandX} alt="Delete Island?" onClick={() => {
                    return handleDelete(island.id);}} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="column card">
          <div className="searchbar">
            <SearchBar villagers={villagers} island={island} />
          </div>
        </Col>
    </>
    )
  }

export default Island;