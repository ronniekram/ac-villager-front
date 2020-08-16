  
import React from 'react';
import { Card, Col } from 'react-bootstrap';

function Villager({match, villagers}) {
  const villager = villagers && villagers.find(villager => 
    villager.id == match.params.id)
    console.log(villager)

  return (
    <>
      <Col md="auto" className="column">
        <Card className="card villager-info">
          <div><img src={ villager && villager.image} alt={villager && villager.name} className="vil-img"/></div>
          <Card.Body className="villager-info">
            <Card.Title className="villager-info"> {villager && villager.name} </Card.Title>
              <Card.Text className="villager-info">
                <strong>Gender:</strong> {villager && villager.gender} <br/>

                <strong>Personality:</strong> {villager && villager.personality} <br/>

                <strong>Species:</strong> {villager && villager.species} <br/ >

                <strong>Birthday:</strong> {villager && villager.birthday}
              </Card.Text>
          </Card.Body>
        </Card>
        </Col>
    </>
  )
}

export default Villager;