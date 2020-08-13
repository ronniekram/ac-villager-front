import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchWishlists} from '../actions/wishlistActions';
import Wishlist from '../components/wishlists/Wishlist'
import Wishlists from '../components/wishlists/Wishlists'
import WishlistInput from '../components/wishlists/wishlistInput';

function WishlistContainer({match, wishlists}) {

    return (
      <>
  <Switch>

    <Route exact path={`${match.url}`} render={(routerProps) => <Wishlists {...routerProps} wishlists={wishlists} />} />

    <Route path={`${match.url}/new`} 
    render={(routerProps) => 
    <WishlistInput {...routerProps}/>} />

    <Route exact path={`${match.url}/:id`}
    render={(routerProps) => 
      <Wishlists {...routerProps} 
      wishlists={wishlists} />}/>

  </Switch>
      </>
    )
  }

const mapStateToProps = state => {
  return {
    wishlists: state.wishlistReducer.wishlists
  }
}

export default connect(mapStateToProps, {fetchWishlists})(WishlistContainer);