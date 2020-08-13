import React from 'react';
import {connect} from 'react-redux'
// import {Route, Switch} from 'react-router-dom';
import {deleteIsland} from '../../actions/islandActions'
import Villagers from '../villagers/Villagers'
// import Villager from '../villagers/Villager'

class Island extends React.Component {
  state = {}
  
  handleDelete = (event) => {
    this.props.deleteIsland(event)
    this.props.history.push('/islands')
  }

  

  render() {
    const island = this.props.islands.find(island => island.id == this.props.match.params.id)
    const village = (island && island.villagers)
    return (
      <div>
        <h2> {island && island.name} </h2>
          <h4>Owner: {island && island.owner}</h4>
          <p>Villagers: </p>
            <Villagers villagers={village} />
        <button onClick={event => this.handleDelete(event)}>Delete Island?</button>
    </div>
    )
  }
}


export default connect(null, {deleteIsland})(Island);