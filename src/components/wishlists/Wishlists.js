import React from 'react';
import {Link} from 'react-router-dom';

function Wishlists({wishlists}) {
  console.log(wishlists)
  const list = wishlists && wishlists.map(wishlist => 
    <li key={wishlist.id}> 
      <Link to={`/wishlists/${wishlist.id}`}> {wishlist.name}</Link>
    </li> )

  return (
    <>
      <h3>Wishlists</h3>
        <ul>
          {list}
        </ul>
    </>
  )
}

export default Wishlists;