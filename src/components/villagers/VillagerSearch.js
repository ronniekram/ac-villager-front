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
  render() {
    return (
      <div className="searchbar">
        <input type="text" placeholder="Search villager by name..." value={this.state.query} onChange={this.handleChange} />

        <Villagers villagers={this.searchResults()} />
      </div>
    )
  }
}
export default VillagerSearch;