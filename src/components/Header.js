import React from 'react';
import AC2 from './img/AC2.jpg';
// import { Row } from 'react-bootstrap';

function Header() {
  // let imageLink = "https://i.imgur.com/RcLWdWZ.jpeg"
  return (
    <>
    <div className="header-container">
        <img src={AC2} alt="animal crossing" className="nav-img" />
    </div>
    </>
  )
}

export default Header;