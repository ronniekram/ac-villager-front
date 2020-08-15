import React from 'react';
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
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
      className="link">  
      {villager.name} </Link> 
        <Button 
          size="sm" 
          variant="light"
          onClick={() => handleRemove(villager.id, villager.island_id)} > x </Button>
      </li>)
  return (
    <>
        <Route path="/villagers/:id" render={(routerProps) => <Villager {...routerProps} villagers={villagers} />} />
        <ul className="village">
          <p>Villagers: </p>
          {list}
        </ul>
    </>
  )
}

export default connect(null, {removeVillager})(Villagers);