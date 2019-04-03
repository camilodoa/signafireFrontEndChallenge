import React from 'react';
import './css/header.css';
import logo from './img/assets_logo-sf-small.png';


//App Header
const Header = ({}) =>{
  return(
    <div className = "Header-wrapper">
      <img src={logo} className="Signafire-Logo" alt="logo" />

      <span className = "Header-title">
      message viewer
      </span>
    </div>

  )
}


export default Header;
