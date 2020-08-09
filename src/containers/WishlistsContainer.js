import React from 'react';
import Wishlist from '../components/wishlists/Wishlist';
import Wishlists from '../components/wishlists/Wishlists';
import WishlistInput from '../components/wishlists/WishlistInput';

const WishlistsContainer = () => {
  return (
    <div>
      <Wishlist />
      <Wishlists />
      <WishlistInput />
    </div>
  )
} 

export default WishlistsContainer;