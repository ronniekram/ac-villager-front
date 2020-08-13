import React from 'react';
import {Link} from 'react-router-dom';



const Wishlists = (props) => {
  const list = props.wishlists.map(wishlist => 
    <li key={wishlist.id}> 
      <Link to={`/wishlists/${wishlist.id}`}> {wishlist.name}</Link>
    </li>
  )

  return (
    <ul>
      {list}
    </ul>
  )
}

export default Wishlists;