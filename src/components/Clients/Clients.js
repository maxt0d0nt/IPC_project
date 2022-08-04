import React from 'react';
import './Clients.css';
import devon from '../../img/devon.png';
import ezgo from '../../img/ezgo.png';
import loves from '../../img/loves.png';
import plains from '../../img/plains.png';
import stripes from '../../img/stripes.png';
import wilco from '../../img/wilco.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Clients = () => {

  AOS.init({
    delay: 600,
    duration: 1500
  });


  return (
    <>
      <div className='client-container' data-aos="fade-down">
        <div className='our'>
          <h1> Our Clients</h1>
        </div>

        <div className=' client'>
          <img src={devon} alt='img' className='devon' />
        </div>
        <div className=' client'>
          <img src={ezgo} alt='img' className='ezgo' />
        </div>
        <div className=' client'>
          <img src={loves} alt='img' className='loves' />
        </div>
        <div className=' client'>
          <img src={plains} alt='img' className='plains' />
        </div>
        <div className=' client'>
          <img src={stripes} alt='img' className='stripes' />
        </div>
        <div className=' client'>
          <img src={wilco} alt='img' className='wilco' />
        </div>

      </div>
    </>
  )
}
