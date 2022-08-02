import React from 'react';
import img2 from '../../img/oem.png';
import patco from '../../img/patco.png';
import usa from '../../img/madein.png';
import './Oem.css';

export const Oem = () => {
  return (
    <>
      <div className='oem-container'>
        <div className='oem-title'>
          <h1>OEM control panels are designed to give you the flexibility you need,
            while staying within your original parameters.</h1>
          <div className='imgTelco'>
            <img src={patco} alt='img' className='patco' />
            <img src={usa} alt='img' className='patco' />
          </div>
        </div>
        <div className='imgUsa'>
          <img src={img2} alt='img' className='imgOEM' />
        </div>

      </div>

    </>
  )
}
