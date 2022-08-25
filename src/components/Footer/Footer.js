import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../img/ipc_logo-removebg.png';

export const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <div className='foote-main'>
          <div className='address-footer'>
            <div className='logo-footer'>
            <a href='#section-main'>
                <img src={logo} width="120" height="70" alt='logo' />
            </a>
            </div>
            <div className='address'>
              <h2> 1301 S. Hwy 81<br></br>
                Duncan, OK 73533<br></br>

                Tel : 580-252-9987<br></br>
                fax 580-255-5447<br></br>
              </h2>
            </div>
          </div>
          <div className='products-footer'>
            <div className='products'>
            <Link to='/oem'>
              <h2> OEM Panels</h2>
            </Link>
            </div>
            <div className='products'>
            <Link to='/isofuel'>
              <h2> ISO Fuel Panels</h2>
            </Link>
            </div>
          </div>
          <div className='page-footer'>
            <div className='page'>
            <Link to='/about'>
              <h2> About Us</h2>
            </Link>
            </div>
            <div className='page'>
              <h2> Our Clients</h2>
            </div>
            <div className='page'>
            <Link to='/contact'>
              <h2> Contact Us</h2>
            </Link>
            </div>

          </div>
        </div>
      </div>
    </>

  )
}
