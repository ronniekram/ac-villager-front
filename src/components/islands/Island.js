import React from 'react';
import {connect} from 'react-redux'
import {deleteIsland} from '../../actions/islandActions'
import Villagers from '../villagers/Villagers'
import VillagerSearch from '../villagers/VillagerSearch'

function Island({history, match, islands, deleteIsland, villagers}) {
  
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
        <button onClick={() => handleDelete(island.id)}>Delete Island?</button>
        
        <VillagerSearch villagers={villagers} island={island} />
    </>
    )
  }
  const mapStateToProps = state => {
    return {
      villagers: state.villagerReducer.villagers
    }
  }

export default connect(mapStateToProps, {deleteIsland})(Island);
