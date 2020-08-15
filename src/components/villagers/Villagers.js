import React from 'react';
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap'
import {removeVillager} from '../../actions/villagerActions'
import Villager from './Villager'

function Villagers({removeVillager, villagers, history, match}) {

  const handleRemove = (villager, island) => {
    removeVillager(villager, island)
    window.location.reload(true);
  }
  
  const list = villagers && villagers.map(villager =>
    <li key={villager.id}> 
    <Link to={`/villagers/${villager.id}`} 
      villagers={villagers} 
      style={{color: '#232d47' }}>  
      {villager.name} </Link> 
        <Button variant="outline-secondary" 
          size="sm" 
          onClick={() => handleRemove(villager.id, villager.island_id)} > x </Button>
      </li>)
  return (
    <>
    <Row>
      <Col md="auto">

        <Route path="/villagers/:id" render={(routerProps) => <Villager {...routerProps} villagers={villagers} />} />
        <ul>
          {list}
        </ul>
      </Col>
    </Row>
    </>
  )
}

export default connect(null, {removeVillager})(Villagers);