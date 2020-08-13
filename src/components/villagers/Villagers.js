import React from 'react';
import { Link, Route } from 'react-router-dom'
import Villager from './Villager'

function Villagers({villagers}) {
  
  const list = villagers && villagers.map(villager =>
    <li key={villager.id}> <Link to={`/villagers/${villager.id}`} villagers={villagers}> {villager.name} </Link> </li>)
  return (
    <>
    <Route path="/villagers/:id" render={(routerProps) => <Villager {...routerProps} villagers={villagers} />} />
    <ul>
      {list}
    </ul>
    </>
  )
}

export default Villagers;