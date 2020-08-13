// import React from 'react';
// import {connect} from 'react-redux'
// import {addWishlist} from '../../actions/wishlistActions'


// class wishlistInput extends React.Component {
//   state = {
//     name: '',
//     owner: '',
//     villager_ids: [],
//   }

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.props.addWishlist(this.state);
//     this.props.history.push(`/wishlists`)

//   }

//   render() {
//     return (
//       <>
//         <h3>Create Wishlist</h3>
//         <form onSubmit={this.handleSubmit}>
//           <label>Wishlist Name: </label>
//           <input type='text' name="name" value={this.state.name} onChange={event => this.handleChange(event)}/> 
//             <br />
//           <label>Owner's Name: </label>
//           <input type='text' value={this.state.owner} name="owner" onChange={event => this.handleChange(event)} />
//             <br />
//             <label>Villager: </label>
//             <input type="number" name="villager_ids" value={this.state.villagers} onChange={event => this.handleChange(event)} /> 
//             <br />
//           <input type="submit" />
//         </form>
//       </>
//     )
//   }

// }

// export default connect(null, {addWishlist})(wishlistInput);

import React, { useState } from 'react';
import {connect} from 'react-redux';
import {addWishlist} from '../../actions/wishlistActions';


function WishlistInput({history, match, wishlists, addWishlist}) {

  const [name, setWishName] = useState('');
  const [owner, setWishOwner] = useState('');
  const [villager_ids, setWishVillagers] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    addWishlist({
      name: name,
      owner: owner,
      villager_ids: villager_ids
    })
      history.push(`/wishlists`)
  }

    return (
      <>
        <h3>Create Wishlist</h3>
        <form onSubmit={handleSubmit}>
          <label>Wishlist Name: </label>
          <input type='text' name="name" value={name} onChange={(e) => setWishName(e.target.value)} /> 
            <br />
          <label>Owner's Name: </label>
          <input type='text' value={owner} name="owner" onChange={(e) => setWishOwner(e.target.value)} />
            <br />
            <label>Villager: </label>
            <input type="number" name="villager_ids" value={villager_ids} onChange={(e) => setWishVillagers(e.target.value)} /> 
            <br />
          <input type="submit" />
        </form>
      </>
    )
  }

  const mapStateToProps = state => {
    return {
      wishlists: state.wishlistReducer.wishlists
    }
  }


export default connect(mapStateToProps, {addWishlist})(WishlistInput);