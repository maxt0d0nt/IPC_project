import React from 'react';
import './IsoView.css';
import img5 from '../../img/iso.png';
import img6 from '../../img/phoenix.png';
import img7 from '../../img/isofuel-removebg-preview.png';

export const IsoView = () => {
    return (
        <>
            <div className='ISOViewContainer'>
                <div className='imgISOView'>
                    <img src={img5} alt='img' className='img5' />
                </div>
                <div className='descriptionISOView'>
                    <div className='titleISOView'>
                        <h1>ISOFuel PANELS</h1>
                    </div>
                    <h2>ISOFuel panels are designed to give you the control, data, and flexibility you need.</h2>
                    <br></br>
                    <p>ISOFuel controls panels are built in Duncan, OK to your exact specifications.  NEC compliant and UL listed, the panels feature individual dispenser breakers, wireless communication capability, and thermal switches.  Customization options are endless and aim to optimize data analysis, remote monitoring and specialized controls.  With a turn toward quality, we use only genuine Phoenix Contact components.</p>
                    <br></br>
                    <p>ISOFuel is a mechanical based isolation control system that simplifies the electrical installation of fueling equipment.  The ISOFuel sytem is custom built to ensure proper site operation with no wasted hardware - keeping size and price in mind.  The ISOFuel system is built by electricians for electricians with the goal of providing a quick, easy and simple installation.</p>
                    <br></br>
                </div>
                <div className='imgFooter'>
                    <div className='usaflag'>
                        <img src={img6} alt='img' className='img3' />
                    </div>
                    <div className='pat'>
                        <img src={img7} alt='img' className='img4' />
                    </div>
                </div>
            </div>
        </>
    )
}
