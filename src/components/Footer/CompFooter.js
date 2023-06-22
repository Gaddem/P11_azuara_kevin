import React from 'react'
import "./StyleFooter.css";
import logo from "../../img/logo_white.png";

const CompFooter = () => {
  return (
    <div className='footer_container'>
      <img className='footer_logo' src={logo} alt="Logo" />
      <p className='footer_texte'>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default CompFooter