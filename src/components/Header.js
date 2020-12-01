import React from 'react';
// import AC2 from './img/AC2.jpg';
// import { Row } from 'react-bootstrap';

function Header() {
  let imageLink = "https://raw.githubusercontent.com/ronniekram/ac-villager-front/master/src/components/img/AC2.jpg"
  return (
    <>
    <div className="header-container">
        <img src={imageLink} alt="animal crossing" className="nav-img" />
    </div>
    </>
  )
}

export default Header;