import React from 'react';
import {connect} from 'react-redux'
import {deleteWishlist} from '../../actions/wishlistActions'
import Villagers from '../villagers/Villagers'

function Wishlist({history, match, wishlists, deleteWishlist}) {
  
  const handleDelete = (wishlist) => {
    deleteWishlist(wishlist)
    history.push('/wishlists')
  }


    const wishlist = wishlists.find(wishlist => wishlist.id == match.params.id)
    const village = (wishlist && wishlist.villagers)
    return (
      <>
        <h2> {wishlist && wishlist.name} </h2>
          <h4>Owner: {wishlist && wishlist.owner}</h4>
          <p>Villagers: </p>
            <Villagers villagers={village} />
        <button onClick={() => handleDelete(wishlist.id)}>Delete Wishlist?</button>
    </>
    )
  }


export default connect(null, {deleteWishlist})(Wishlist);