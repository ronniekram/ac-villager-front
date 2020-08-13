import React from 'react';
import {connect} from 'react-redux'
import {deleteIsland} from '../../actions/islandActions'
import Villagers from '../villagers/Villagers'

class Island extends React.Component {
  state = {}
  
  handleDelete = (island) => {
    this.props.deleteIsland(island)
    this.props.history.push('/islands')
  }

  

  render() {
    const island = this.props.islands.find(island => island.id == this.props.match.params.id)
    const village = (island && island.villagers)
    console.log(island && island.villagers)
    return (
      <>
        <h2> {island && island.name} </h2>
          <h4>Owner: {island && island.owner}</h4>
          <p>Villagers: </p>
            <Villagers villagers={village} />
        <button onClick={() => this.handleDelete(island.id)}>Delete Island?</button>
    </>
    )
  }
}


export default connect(null, {deleteIsland})(Island);