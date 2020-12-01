import React from 'react';
import acheader from '../components/img/acheader.png';
// import { Row } from 'react-bootstrap';

function Header() {
  // let imageLink = "https://raw.githubusercontent.com/ronniekram/ac-villager-front/master/src/components/img/AC2.png"
  return (
    <>
    <div className="header-container">
        <img src={acheader} alt="animal crossing" className="nav-img" />
    </div>
    </>
  )
}

export default Header;