import React from 'react';
import {connect} from 'react-redux'
import {addIsland} from '../actions/addIsland'

// const IslandInput = () => {
//   return (
//     <form>
//       <label>Island Name: </label>
//       <input type="text"></input> <br />
//       <label>Island Owner: </label>
//       <input type="text"></input> <br />
//       <button type="submit">Create Island</button>
//     </form>
//   )
// }

class IslandInput extends React.Component {
  state = {
    name: '',
    owner: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addIsland(this.state)
    this.setState({
      name: '',
      owner: ''
    })
  }

  render() {
    return (
      <h3>Create Island</h3>
      <form onSubmit={this.handleSubmit}>
        <label>Island Name: </label>
        <input type='text' placeholder='Island Name' value={this.state.name} /> <br />
        <label>Owner's Name: </label>
        <input type='text' placeholder="Owner's Name" value={this.state.owner} />
        <br />
        <input type="submit" />
      </form>
    )
  }


}

export default connect(null, {addIsland})(IslandInput);