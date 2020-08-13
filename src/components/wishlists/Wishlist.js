import React from 'react';
import {connect} from 'react-redux'
import {deleteWishlist} from '../../actions/wishlistActions'
import Villagers from '../villagers/Villagers'

class Wishlist extends React.Component {
  state = {}
  
  handleDelete = (wishlist) => {
    this.props.deleteWishlist(wishlist)
    this.props.history.push('/wishlists')
  }

  

  render() {
    const wishlist = this.props.wishlists.find(wishlist => wishlist.id == this.props.match.params.id)
    const village = (wishlist && wishlist.villagers)
    return (
      <>
        <h2> {wishlist && wishlist.name} </h2>
          <h4>Owner: {wishlist && wishlist.owner}</h4>
          <p>Villagers: </p>
            <Villagers villagers={village} />
        <button onClick={() => this.handleDelete(wishlist.id)}>Delete Wishlist?</button>
    </>
    )
  }
}


export default connect(null, {deleteWishlist})(Wishlist);