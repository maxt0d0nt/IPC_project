import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import logo from '../../img/ipc_logo-removebg.png';
import './Navbar.css';

export const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false)

  const [header, setHeader] = useState(false)

  let changebackgrond = () => {
    if (window.scrollY > 0) {
      
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

window.addEventListener('scroll', changebackgrond);
  return (
    <div className='navbar'>
      <div className={header ? 'header active' : 'Nav'}>
        <div className='logo'>
        <Link to='/'>
        <img src={logo} width="120" height="70" alt='logo' />
        </Link>
        </div>
        <ul className={isMobile ? 'nav-link-mobile': 'navMenu'}>
          <div className='link'>
            <Link to='/oem'>
              OEM Panels
            </Link>
            </div>

            <div className='link'>
            <Link to='/isofuel'>
              ISOFuel Panels
            </Link>
            </div>

            <div className='link'>
            <Link to='/about'>
              About
            </Link>
            </div>

            <div className='link'>
            <Link to='/contact'>
              Contact Us
            </Link>
            </div>
        </ul>
        <button className='mobile-menu-icon'>
          { isMobile ? (
            <i className='fas fa-times' onClick={() => setIsMobile(false)}>
            <RiCloseFill/>
            </i>
          ):(
            <i className='fas fa-bars' onClick={() => setIsMobile(true) }>
              <FaBars/>
            </i>
          )}
        </button>
      </div>
    </div>
  )
}
