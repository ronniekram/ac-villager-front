import React from 'react';
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import {removeVillager, fetchVillagers} from '../../actions/villagerActions'
import Villager from './Villager'

class Villagers extends React.Component {

  handleRemove = (villager, island) => {
      this.props.removeVillager(villager, island)
      console.log(villager)
      console.log(island)
  }
  
render(){
  const list = this.props.villagers && this.props.villagers.map(villager =>
    <li key={villager.id}> <Link to={`/villagers/${villager.id}`} villagers={this.props.villagers}> {villager.name} </Link> <button onClick={() => this.handleRemove(villager.id, villager.island_id)} > x </button> </li>)
  return (
    <>
    <Route path="/villagers/:id" render={(routerProps) => <Villager {...routerProps} villagers={this.props.villagers} />} />
    <ul>
      {list}
    </ul>
    </>
  )
}
}

export default connect(null, {removeVillager})(Villagers);