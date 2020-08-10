import React from 'react';
// import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-md">
      <div className="container-fluid"><p className="navbar-brand">Village Tracker</p>
        <div className="collapse navbar-collapse"
            id="navcol-1">
            <ul className="nav navbar-nav">
                <li className="nav-item nav-link" role="presentation">Islands</li>
                <li className="nav-item nav-link" role="presentation">Add Island</li>
                <li className="nav-item nav-link" role="presentation">Search Villagers</li>
            </ul>
        </div>
      </div>
  </nav>
  )
}

export default Navbar;