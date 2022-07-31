import React from 'react';
import bigImg from '../../img/undraw1.svg';
import smallImg from '../../img/worker.svg';
import './About.css';

export const About = () => {
  return (
    <>
      <div className='container-about'>
        <div className='draw'>
          <img src={bigImg} className='bigImg' alt='logo' />
          <img src={smallImg} className='smallImg' alt='logo' />
        </div>
        <div className='about'>
          <div className='about-description'>
            <h1>What we do?</h1>
            <br></br>
            <h2>IPC maintains a fully equipped, permanently staffed UL 508A and 698A control panel shop at its Duncan, OK headquarters. IPC panels are carefully designed according to your exact requirements.</h2>
            <br></br>
            <h2>We fabricate panels of all sizes and complexities, from isolation panels for fuel or other applications, to whole plant system controllers. IPC’s consistently high standards of quality are applied in everything we do, from the careful routing and labelling of wires to the precision laser-cut doors.</h2>
            <div className='btn-class'>
              <button type='buttom' className='btn-about'>MORE</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
