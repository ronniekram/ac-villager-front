import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
        <nav className="navbar navbar-light navbar-expand-md"> 
          <div className="nav-left">
            Village Watch: New Horizons
          </div>

          <div className="nav-right">
            <Link to='/islands' className="link" style={{paddingRight: '10px'}}> All Islands </Link>
            <Link to='/islands/new' className="link" style={{paddingRight: '10px'}}> New Island </Link>
          </div>
        </nav>
  )
}

export default Navbar;