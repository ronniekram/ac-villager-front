import React from 'react';
import { Link } from 'react-router-dom'
import VillagersContainer from '../../containers/VillagersContainer'


function Villagers({match, villagers}) {
  const list = villagers && villagers.map(villager =>
    <li key={villager.id}> <Link to={`${match.url}/villagers/${villager.id}`}> {villager.name} </Link> </li>)
  return (
    <>
    <ul>
      {list}
    </ul>
    <div> <VillagersContainer villagers={villagers} /></div>
    </>
  )
}

export default Villagers;