import React from 'react';
import './Main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../../img/isofuel-removebg-preview.png';

export const Main = () => {
  
  AOS.init({
    delay: 0, 
  duration: 500
  });

  return (

    <div class="container" id='section-main'>
      <div className='title'>
        <div className='mainTitle' data-aos="zoom-in-up">
          <h1>Design, Fabrication, Installation, Maintenance of Distribution Control Panels
            Industrial and Commercial Electrical Control Panels
          </h1>
        </div>
        <div className='btn' data-aos="zoom-in-up">
        <a href='#section-about'>
          <button type='buttom' className='btn-main'>MORE</button>
        </a>
        </div>
        <div className='imgRectangle' ></div>
        <div className='imgRectangle2'></div>
      </div>

      <div className='subtitle'data-aos="fade-down">
        <div className='imgLogoIso'>
          <img src={img} alt='img' className='img3' />
        </div>
        <div className='sub'>
          <h2> HOME OF: <br></br>
            NEC Compliant Fuel <br></br>
            Distribution Control Panels
          </h2>
        </div>
      </div>
    </div>


  )
}
