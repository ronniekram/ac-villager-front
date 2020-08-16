import React from 'react';
import AC2 from './AC2.jpg';
import { Row } from 'react-bootstrap';

function Header() {
  return (
    <>
    <div className="header-container">
        <img src={AC2} alt="animal crossing" className="nav-img" />
    </div>
    </>
  )
}

export default Header;