import React from 'react';
// import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-md">
      <div className="container-fluid"><p className="navbar-brand">Village Tracker</p>
        <div className="collapse navbar-collapse"
            id="navcol-1">
            <ul className="nav navbar-nav">
              <li className="nav-item" role="presentation"><a className="nav-link active" href="http://localhost:3001">Islands</a></li>
              <li className="nav-item" role="presentation"><a className="nav-link" href="http://localhost:3001">Add Island</a></li>
             <li className="nav-item" role="presentation"><a className="nav-link" href="http://localhost:3001">Search Villagers</a></li>
            </ul>
        </div>
      </div>
  </nav>
  )
}

export default Navbar;