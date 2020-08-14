import React from 'react';
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import {removeVillager} from '../../actions/villagerActions'
import Villager from './Villager'

function Villagers({villagers}) {

  const handleRemove = (villager, island) => {
      removeVillager(villager, island)
      console.log(villager)
      console.log(island)
  }
  
  const list = villagers && villagers.map(villager =>
    <li key={villager.id}> <Link to={`/villagers/${villager.id}`} villagers={villagers}> {villager.name} </Link> <button onClick={() => handleRemove(villager.id, villager.island_id)} > x </button> </li>)
  return (
    <>
    <Route path="/villagers/:id" render={(routerProps) => <Villager {...routerProps} villagers={villagers} />} />
    <ul>
      {list}
    </ul>
    </>
  )
}


export default connect(null, {removeVillager})(Villagers);