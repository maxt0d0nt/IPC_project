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
          <a href='https://www.devonenergy.com/' target="_blank" rel='noreferrer'>
            <img src={devon} alt='img' className='devon' />
          </a>
        </div>
        <div className=' client'>
          <a href='https://www.ezgostores.com/' target="_blank" rel='noreferrer'>
            <img src={ezgo} alt='img' className='ezgo' />
          </a>
        </div>
        <div className=' client'>
          <a href='https://www.loves.com/' target="_blank" rel='noreferrer'>
            <img src={loves} alt='img' className='loves' />
          </a>
        </div>
        <div className=' client'>
          <a href='https://www.plains.com/' target="_blank" rel='noreferrer'>
            <img src={plains} alt='img' className='plains' />
          </a>
        </div>
        <div className=' client'>
          <a href='https://stripesstores.com/locator/' target="_blank" rel='noreferrer'>
            <img src={stripes} alt='img' className='stripes' />
          </a>
        </div>
        <div className=' client'>
          <a href='https://www.nov.com/products-and-services/brands/wilco' target="_blank" rel='noreferrer'>
            <img src={wilco} alt='img' className='wilco' />
          </a>
        </div>
      </div>
    </>
  )
}
