import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import Wishlist from '../components/wishlists/Wishlist'
import Wishlists from '../components/wishlists/Wishlists'
import WishlistInput from '../components/wishlists/wishlistInput';

function WishlistContainer({match, wishlists}) {

    return (
      <>
  <Switch>

    <Route exact path={`/wishlists`} render={(routerProps) => <Wishlists {...routerProps} wishlists={wishlists} />} />

    <Route path={`/wishlists/new`} 
    render={(routerProps) => 
    <WishlistInput {...routerProps}/>} />

    <Route exact path={`/wishlists/:id`}
    render={(routerProps) => 
      <Wishlist {...routerProps} 
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

export default connect(mapStateToProps)(WishlistContainer);