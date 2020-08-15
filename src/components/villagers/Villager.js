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
                <span>Gender: </span> {villager && villager.gender} <br/>

                <span>Personality: </span> {villager && villager.personality} <br/>

                <span>Species: </span> {villager && villager.species} <br/ >

                <span>Birthday: </span> {villager && villager.birthday}
              </Card.Text>
          </Card.Body>
        </Card>
        </Col>
    </Row>
    </>
  )
}

export default Villager;