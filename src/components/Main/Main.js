import React from 'react';
import './Main.css';
import img from '../../img/isofuel-removebg-preview.png';

export const Main = () => {
  return (

    <div class="container">
      <div className='title'>
        <div className='mainTitle'>
          <h1>Design, Fabrication, Installation, Maintenance of Distribution Control Panels
            Industrial and Commercial Electrical Control Panels
          </h1>
        </div>
        <div className='btn'>
          <button type='buttom' className='btn-main'>MORE</button>
        </div>
        <div className='imgRectangle'></div>
        <div className='imgRectangle2'></div>
      </div>

      <div className='subtitle'>
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
