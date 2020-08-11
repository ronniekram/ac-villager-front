import React from 'react';
import {connect} from 'react-redux';
import {fetchVillagers} from '/Users/HotRonnie/Desktop/ac-villagers-react/villager-front/src/actions/fetchVillagers.js'

function VillagerSearch({villagers}) {
  state = {
    query: '',
  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  render() {
    const searchResults = villagers.filter((request) => {
      if (this.state.query == null) {
        return (<div> This villager doesn't exist. </div>)
      } else if (request.name.toLowerCase().includes(this.state.query.toLowerCase())) {
        
      }
    })
    return (
      <div>
        <input type="text" className="searchbox" placeholder="Search villagers by name..." onChange={(event) => this.handleChange(event)}/>
      </div>
    )
  }
}

export default connect(null, {fetchVillagers})(VillagerSearch);