import React from 'react';
import {connect} from 'react-redux'
import {addWishlist} from '../../actions/wishlistActions'


class wishlistInput extends React.Component {
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
    this.props.addWishlist(this.state);
    this.props.history.push(`/wishlists`)

  }

  render() {
    return (
      <>
        <h3>Create Wishlist</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Wishlist Name: </label>
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

export default connect(null, {addWishlist})(wishlistInput);

// import React, { useState } from 'react';
// import {connect} from 'react-redux'
// import {addWishlist} from '../../actions/wishlistActions'


// function wishlistInput({history, match, wishlists, addWishlist}) {

//   const [name, setName] = useState('');
//   const [owner, setOwner] = useState('');
//   const [villager_ids, setVillagerIds] = useState([]);


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addWishlist({
//       name: name,
//       owner: owner,
//       villager_ids: villager_ids
//     })
//     this.props.history.push(`/wishlists`)
//   }

//     return (
//       <>
//         <h3>Create Wishlist</h3>
//         <form onSubmit={handleSubmit}>
//           <label>Wishlist Name: </label>
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
//       wishlists: state.wishlistReducer.wishlists
//     }
//   }


// export default connect(mapStateToProps, {addWishlist})(wishlistInput);