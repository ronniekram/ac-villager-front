import React from 'react';
import {connect} from 'react-redux'
import {addIsland} from '/Users/HotRonnie/Desktop/ac-villagers-react/villager-front/src/actions/addIsland.js'


class IslandInput extends React.Component {
  state = {
    name: '',
    owner: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addIsland(this.state);
    this.setState({
      name: '',
      owner: '',
      villager_ids: []
    })
    this.props.history.push('/islands')

  }

  render() {
    return (
      <div>
        <h3>Create Island</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Island Name: </label>
          <input type='text' name="name" value={this.state.name} onChange={event => this.handleChange(event)}/> 
            <br />
          <label>Owner's Name: </label>
          <input type='text' value={this.state.owner} name="owner" onChange={event => this.handleChange(event)} />
            <br />
            <label>Villager: </label>
            <input type="text" name="villager_ids" value={this.state.villagers} onChange={event => this.handleChange(event)} /> 
            <br />
          <input type="submit" />
        </form>
      </div>
    )
  }

}

export default connect(null, {addIsland})(IslandInput);