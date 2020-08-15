import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

function Villager({match, villagers}) {
  const villager = villagers && villagers.find(villager => 
    villager.id == match.params.id)
    console.log(villager)

  return (
    <>
    <Row>
      <Col md="auto" className="column">
        <Card className="card villager-info">
          <div><img src={ villager && villager.image} alt={villager && villager.name} /></div>
          <Card.Body className="villager-info">
            <Card.Title className="villager-info"> {villager && villager.name} </Card.Title>
              <Card.Text className="villager-info">
                <p>Gender: {villager && villager.gender} </p>
                <p>Personality: {villager && villager.personality} </p>
                <p>Species: {villager && villager.species} </p>
                <p>Birthday: {villager && villager.birthday} </p>
              </Card.Text>
          </Card.Body>
        </Card>
        </Col>
    </Row>
    </>
  )
}

export default Villager;