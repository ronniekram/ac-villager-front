import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchWishlists} from '../actions/wishlistActions';
import Wishlist from '../components/wishlists/Wishlist'
import Wishlists from '../components/wishlists/Wishlists'
import WishlistInput from '../components/wishlists/wishlistInput';

function WishlistContainer({history, match, wishlists}) {

    return (
      <>
        <Switch>
          <Route path={`/wishlists/new`} 
            render={(routerProps) => 
            <WishlistInput {...routerProps}/>} />

          <Route exact path={`/wishlists/:id`}
            render={(routerProps) => 
              <Wishlist {...routerProps} 
                wishlists={wishlists} />}/>

          <Route path={`/wishlists`} 
            render={(routerProps) => 
              <Wishlists {...routerProps} 
              wishlists={wishlists} />} />
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