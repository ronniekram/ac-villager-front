// import React from 'react';
// import {connect} from 'react-redux'
// import {addIsland} from '/Users/HotRonnie/Desktop/ac-villagers-react/villager-front/src/actions/addIsland.js'


// class IslandInput extends React.Component {
//   state = {
//     name: '',
//     owner: ''
//   }

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.props.addIsland(this.state);
//     this.setState({
//       name: '',
//       owner: ''
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h3>Create Island</h3>
//         <form onSubmit={this.handleSubmit}>
//           <label>Island Name: </label>
//           <input type='text' name="name" value={this.state.name} /> 
//             <br />
//           <label>Owner's Name: </label>
//           <input type='text' value={this.state.owner} name="owner" onChange={this.handleChange} />
//             <br />
//           <input type="submit" />
//         </form>
//       </div>
//     )
//   }

// }

// export default connect(null, {addIsland})(IslandInput);

import React, { useState } from 'react';

function IslandInput() {
  const [islandName, setIslandName] = useState("");
  const [ownerName, setOwnerName] = useState("");

  return (
    <div>
      <form>
        <label>Island Name: </label>
        <input 
        name="islandName"
        value={islandName}
        onChange={(e) => setIslandName(e.target.value)}
        type="text" /> <br />
        <label>Owner Name: </label>
        <input 
        name="ownerName"
        value={ownerName}
        onChange={(e) => setOwnerName(e.target.value)}
        type="text" /> <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default IslandInput;