import React from 'react';
import './ContactView.css';
import { MapView } from '../Map/MapView'
import { Navbar } from '../Navbar/Navbar'


export const ContactView = () => {
  return (
    <>
      < Navbar />
      <div className='contactView-container'>

        <div className='contact-form'>
          <form>
            <ul>
              <li className='half'>
                <input type='text' name='name' placeholder='Name' autoFocus required />
              </li>

              <li className='half'>
                < input placeholder='Email' name='email' type='email' required />
              </li>

              <li>
                <input placeholder='Subject' name='subject' type='text' required />
              </li>

              <li>
                <textarea placeholder='Message'
                  name='message' required></textarea>
              </li>

              <li>
                <input type='submit' className='flat-button' value='SEND' />              </li>
            </ul>
          </form>

          <div className='address'>
            <h2>1301 S. Hwy 81 </h2>
            <h2>Duncan, OK 73533</h2>
            <h2>Tel 580-252-9987 - Fax 580-255-5447</h2>
          </div>
        </div>
        <div className='map'>
          <MapView />
        </div>
      </div>
    </>
  )
}
