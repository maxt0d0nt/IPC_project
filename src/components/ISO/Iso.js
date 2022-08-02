import React from 'react'
import "./Iso.css"
import img from '../../img/iso.png';
import isofuel from '../../img/isofuel-removebg-preview.png';
import phoenix from '../../img/phoenix.png';

export const Iso = () => {
    return (
        <>
            <div className='iso-container'>
                
                <div className='imgIso'>
                    <img src={img} alt='img' className='Iso' />
                </div>

                <div className='iso-title'>
                    <h1>ISOFuel panels are designed to give you the control, data, and flexibility you need.</h1>
                    <div className='imgtrade'>
                        <img src={isofuel} alt='img' className='isofuel' />
                        <img src={phoenix} alt='img' className='phoenix' />
                    </div>
                </div>

            </div>

        </>
    )
}
