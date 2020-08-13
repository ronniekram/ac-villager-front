import React from 'react';
import { Link } from 'react-router-dom'


function Villagers({match, villagers}) {
  const list = villagers && villagers.map(villager =>
    <li key={villager.id}> <Link to={`villagers/${villager.id}`}> {villager.name} </Link> </li>)
  return (
    <ul>
      {list}
    </ul>
  )
}

export default Villagers;