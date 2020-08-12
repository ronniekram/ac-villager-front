import React from 'react';
import { Link } from 'react-router-dom'

const Villagers = (props) => {
  const list = props.villagers && props.villagers.map(villager =>
    <li key={villager.id}> <Link to={`villagers/${villager.id}`}> {villager.name} </Link> </li>)
  return (
    <ul>
      {list}
    </ul>
  )
}

export default Villagers;