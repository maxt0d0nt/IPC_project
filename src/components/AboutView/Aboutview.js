import React from 'react';
import './Aboutview.css';
import { Clients } from '../Clients/Clients';
import img1 from '../../img/iso.png';

export const Aboutview = () => {
  return (
    <>
      <div className='aboutView'>
        <div className='aboutView-container'>
          <div className='imgAboutViewv'>
            <img src={img1} alt='img' className='img1' />
          </div>
          <div className='descriptionAboutView'>
            <div className='titleAbout'>
              <h1>What We Do</h1>
            </div>
            <p>IPC maintains a fully equipped, permanently staffed UL 508A and 698A control panel shop at its Duncan, OK headquarters. IPC panels are carefully designed according to your exact requirements.</p>
            <br></br>
            <p>We fabricate panels of all sizes and complexities, from isolation panels for fuel or other applications, to whole plant system controllers. IPC’s consistently high standards of quality are applied in everything we do, from the careful routing and labelling of wires to the precision laser-cut doors.</p>
            <br></br>
            <p>IPC panels are fabricated with close engineering input, and with precise attention to detail:</p>
            <br></br>
            <ul>
              <li>Interior space is always allowed for future expansion of capabilities</li>
              <li>Wires are bundled and clearly labeled for ready identification</li>
              <li>All control panel components are national brand name, UL listed and top-of-the-line</li>
              <li>Panels are thoroughly power tested point-to-point in our shop prior to shipment</li>
              <li>Turnkey project panels are fully tested against plant and project-specific hardware, HMI screens and PAC/PLC code prior to shipment</li>
              <li>All panels include complete drawings and documentation</li>
            </ul>
          </div>
          <div className='clientsAboutView'>
            < Clients />
          </div>
        </div>
      </div>
    </>
  )
}
