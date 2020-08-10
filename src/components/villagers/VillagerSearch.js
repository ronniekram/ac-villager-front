import React from 'react';
import {connect} from 'react-redux';
import {fetchVillager} from '/Users/HotRonnie/Desktop/ac-villagers-react/villager-front/src/actions/fetchVillager.js'

class VillagerSearch extends React.Component {
  state = {
    query: '',
    villager: []
  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchVillager(this.state);
    this.setState({
      query: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, {fetchVillager})(VillagerSearch);