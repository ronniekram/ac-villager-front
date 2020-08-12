import React from 'react';
import Villagers from './Villagers';

class VillagerSearch extends React.Component {
  state = {
    query: ''
  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  searchResults = () => {
    return this.props.villagers.filter(villager => villager.name.toLowerCase().includes(this.state.query.toLowerCase()))
  }

    displayResults = () => {
      if (this.state.query === '') {
        return <div></div>
      } else {
        return <Villagers villagers={this.searchResults()} />
      }
    }
    
  render() {
    return (
      <div className="searchbar">
        <input type="text" placeholder="Search villager by name..." value={this.state.query} onChange={this.handleChange} />

        {this.displayResults()}

      </div>
    )
  }
}
export default VillagerSearch;