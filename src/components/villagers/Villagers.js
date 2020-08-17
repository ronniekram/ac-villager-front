import React from 'react';
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import {removeVillager} from '../../actions/villagerActions'
import {addVillager} from '../../actions/villagerActions';
import Villager from './Villager'
import add from '/Users/HotRonnie/Desktop/ac-villagers-react/villager-front/src/components/img/add.png'
import remove from '/Users/HotRonnie/Desktop/ac-villagers-react/villager-front/src/components/img/remove.png'

function Villagers({addVillager, removeVillager, villagers, island, history}) {

  const handleRemove = (villager, island) => {
    removeVillager(villager, island)
    window.location.reload(true);
  }

  const handleAdd = (villager, island) => {
    addVillager(villager, island);
    // history.push(`/islands/${island.id}`)
    window.location.reload(true);
  }

  const buttonType = (villager, island) => {
    if (villager.island_id === island.id) {
      return <img src={remove} alt="new island link" onClick={() => handleRemove(villager.id, island.id)} /> 
    } else if (villager.island_id !== island.id && island.villagers.length < 10) {
        return <img src={add} alt="new island link" onClick={() => handleAdd(villager.id, island.id)} />
    } else if (island.villagers.length >= 10) {
        return null
    }
  }

    const list = villagers && villagers && villagers.map(villager =>
      <li key={villager.id}> 
      <Link to={`/villagers/${villager.id}`} 
        villagers={villagers} 
        className="link">  
        {villager.name} </Link> {buttonType(villager, island)} </li> )
  
  return (
    <>
        {/* <Route path="/villagers/:id" render={(routerProps) => <Villager {...routerProps} villagers={villagers} />} /> */}
          {list}
        {/* <Villager villagers={villagers} /> */}
    </>
  )
}


export default connect(null, {removeVillager, addVillager})(Villagers);