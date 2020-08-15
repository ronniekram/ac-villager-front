import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-light navbar-expand-md">
      <div className="container-fluid">Village Watch: New Horizons
        <Link to='/islands' className="link"> All Islands </Link>
        <Link to='/islands/new' className="link"> New Island </Link>
      </div>
  </nav>
  )
}

export default Navbar;