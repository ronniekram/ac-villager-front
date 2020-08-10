import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = props => {
  return (
    <nav className="navbar navbar-light navbar-expand-md">
      <div className="container-fluid"><p className="navbar-brand">Village Tracker</p>
        <Link to='/islands' style={{paddingRight: '10px'}}> All Islands </Link>
        <Link to='/islands/new' style={{paddingRight: '10px'}}> New Island </Link>
        <Link to='/villagers/search'> Search Villagers </Link>
      </div>
  </nav>
  )
}

export default Navbar;