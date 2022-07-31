import React from 'react';
import './Main.css';
import img from '../../img/Rectangle 3.png';
import img2 from '../../img/Rectangle.png';
import img3 from '../../img/isofuel-removebg-preview.png';

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
        <div className='imgRectangle'>
          <img src={img} alt='img' className='img1' />
          <img src={img2} alt='img' className='img2' />
        </div>
      </div>

      <div className='subtitle'>
        <div className='imgLogoIso'>
          <img src={img3} alt='img' className='img3' />
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
