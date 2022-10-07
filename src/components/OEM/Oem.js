import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../../img/oem.png';
import patco from '../../img/patco.png';
import usa from '../../img/madein.png';
import './Oem.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Oem = () => {
  AOS.init({
    delay: 500,
    duration: 1500
  });

  return (
    <>
      <div className='oem-container'>
        <div className='oem-title' data-aos="fade-right">
          <h1>OEM control panels are designed to give you the flexibility you need,
            while staying within your original parameters.</h1>
          <div className='btn-oem-div'>
            <Link to='/oem'>
              <button type='buttom' className='btn-oem'>MORE</button>
            </Link>
          </div>
          <div className='imgTelco' >
            <img src={patco} alt='img' className='patco' data-aos="flip-left" />
            <img src={usa} alt='img' className='patco' data-aos="flip-left" />
          </div>
        </div>
        <div className='imgUsa' data-aos="zoom-in-up">
          <img src={img2} alt='img' className='imgOEM' />
        </div>
      </div>
    </>
  )
}
