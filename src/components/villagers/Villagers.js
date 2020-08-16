import React from 'react';
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import {removeVillager} from '../../actions/villagerActions'
import {addVillager} from '../../actions/villagerActions';
import Villager from './Villager'

function Villagers({addVillager, removeVillager, villagers, island, history, match}) {

  const handleRemove = (villager, island) => {
    removeVillager(villager, island)
    window.location.reload(true);
  }

  const handleAdd = (villager, island) => {
    addVillager(villager, island);
    window.location.reload(true);
  }

  const buttonType = (villager, island) => {
    if (villager.island_id === island.id) {
      return <Button 
        size="sm" 
        variant="light"
        onClick={() => handleRemove(villager.id, villager.island_id)} > x </Button>
    } else if (villager.island_id !== island.id) {
      return <Button size="sm" 
        variant="light"
        onClick={() => handleAdd(villager.id, island.id)}> Add Villager </Button>
    }
  }

    const list = villagers && villagers.map(villager =>
      <li key={villager.id}> 
      <Link to={`/villagers/${villager.id}`} 
        villagers={villagers} 
        className="link">  
        {villager.name} </Link> {buttonType(villager, island)} </li> )
  
  return (
    <>
        <Route path="/villagers/:id" render={(routerProps) => <Villager {...routerProps} villagers={villagers} />} />
          {list}
    </>
  )
}

export default connect(null, {removeVillager, addVillager})(Villagers);