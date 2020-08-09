import React from 'react';
// import { Route } from 'react-router-dom'

const WishlistInput = () => {
  return (
    <form>
    <label>Wishlist Name: </label>
    <input type="text"></input> <br />
    <label>Wishlist Owner: </label>
    <input type="text"></input> <br />
    <button type="submit">Create Wishlist</button>
  </form>
  )
}

export default WishlistInput;