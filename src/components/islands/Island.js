import React from 'react';
import {connect} from 'react-redux'
import {deleteIsland} from '../../actions/islandActions'
import Villagers from '../villagers/Villagers'
import VillagerSearch from './VillagerSearch'

function Island({history, match, islands, deleteIsland}) {
  
  const handleDelete = (island) => {
    deleteIsland(island)
    history.push('/islands')
  }


    const island = islands.find(island => island.id == match.params.id)
    const village = (island && island.villagers)
    return (
      <>
        <h2> {island && island.name} </h2>
          <h4>Owner: {island && island.owner}</h4>
          <p>Villagers: </p>
            <Villagers villagers={village} />
        <button onClick={() => handleDelete(island.id)}>Delete Wishlist?</button>
        <div className="search-div">
          <VillagerSearch />
        </div>
    </>
    )
  }


export default connect(null, {deleteIsland})(Island);