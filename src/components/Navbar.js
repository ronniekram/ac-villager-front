import React from 'react';
import { Link } from 'react-router-dom';
// import VillagersContainer from '../containers/VillagersContainer';

function Navbar() {
  return (
    <nav className="navbar navbar-light navbar-expand-md">
      <div className="container-fluid"><p className="navbar-brand">Village Watch: New Horizons</p>
        {/* <Link to='/islands' style={{paddingRight: '10px'}}> All Islands </Link>
        <Link to='/islands/new' style={{paddingRight: '10px'}}> New Island </Link> */}
        {/* <Link to='/wishlists' style={{paddingRight: '10px'}}> All Wishlists </Link>
        <Link to='/wishlists/new' style={{paddingRight: '10px'}}> New Wishlist </Link> */}
      </div>
      {/* <VillagersContainer /> */}
  </nav>
  )
}

export default Navbar;