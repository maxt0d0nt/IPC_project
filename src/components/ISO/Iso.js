import React from 'react'
import "./Iso.css"
import img from '../../img/iso.png';
import isofuel from '../../img/isofuel-removebg-preview.png';
import phoenix from '../../img/phoenix.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Iso = () => {
    AOS.init({
        delay: 600, 
      duration: 1500
      });
    return (
        <>
            <div className='iso-container'>
                
                <div className='imgIso' data-aos="zoom-in-up">
                    <img src={img} alt='img' className='Iso' />
                </div>

                <div className='iso-title' data-aos="fade-up">
                    <h1>ISOFuel panels are designed to give you the control, data, and flexibility you need.</h1>
                    <div className='btn'>
                    <button type='buttom' className='btn-iso'>MORE</button>
                    </div>
                    <div className='imgtrade' >
                        <img src={isofuel} alt='img' className='isofuel' />
                        <img src={phoenix} alt='img' className='phoenix' />
                    </div>
                </div>

            </div>

        </>
    )
}
