import React from 'react';
import {connect} from 'react-redux'
import {addIsland} from '../../actions/islandActions'


class IslandInput extends React.Component {
  state = {
    name: '',
    owner: '',
    villager_ids: [],
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addIsland(this.state);
    this.props.history.push(`/islands`)
  }

  render() {
    return (
      <>
        <h3>Create Island</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Island Name: </label>
          <input type='text' name="name" value={this.state.name} onChange={event => this.handleChange(event)}/> 
            <br />
          <label>Owner's Name: </label>
          <input type='text' value={this.state.owner} name="owner" onChange={event => this.handleChange(event)} />
            <br />
            <label>Villager: </label>
            <input type="number" name="villager_ids" value={this.state.villagers} onChange={event => this.handleChange(event)} /> 
            <br />
          <input type="submit" />
        </form>
      </>
    )
  }

}

export default connect(null, {addIsland})(IslandInput);



// import React, { useState } from 'react';
// import {connect} from 'react-redux'
// import {addIsland} from '../../actions/islandActions'


// function IslandInput({history, match, islands, addIsland}) {

//   const [name, setName] = useState('');
//   const [owner, setOwner] = useState('');
//   const [villager_ids, setVillagerIds] = useState([]);


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addIsland({
//       name: name,
//       owner: owner,
//       villager_ids: villager_ids
//     })
//     this.props.history.push(`/islands`)
//   }

//     return (
//       <>
//         <h3>Create Island</h3>
//         <form onSubmit={handleSubmit}>
//           <label>Island Name: </label>
//           <input type='text' name="name" value={name} onChange={(e) => setName(e.target.value)} /> 
//             <br />
//           <label>Owner's Name: </label>
//           <input type='text' value={owner} name="owner" onChange={(e) => setOwner(e.target.value)} />
//             <br />
//             <label>Villager: </label>
//             <input type="number" name="villager_ids" value={villager_ids} onChange={(e) => setVillagerIds(e.target.value)} /> 
//             <br />
//           <input type="submit" />
//         </form>
//       </>
//     )
//   }

//   const mapStateToProps = state => {
//     return {
//       islands: state.islandReducer.islands
//     }
//   }


// export default connect(mapStateToProps, {addIsland})(IslandInput);