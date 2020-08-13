import React, { useState } from 'react';
import {connect} from 'react-redux';
import {addWishlist} from '../../actions/wishlistActions';


function WishlistInput({history, addWishlist}) {

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