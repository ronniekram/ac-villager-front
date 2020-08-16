  
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
                <span>Gender: </span> {villager && villager.gender} <br/>

                <span>Personality: </span> {villager && villager.personality} <br/>

                <span>Species: </span> {villager && villager.species} <br/ >

                <span>Birthday: </span> {villager && villager.birthday}
              </Card.Text>
          </Card.Body>
        </Card>
        </Col>
    </>
  )
}

export default Villager;