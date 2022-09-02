import React from 'react';
import './OEMView.css';
import img2 from '../../img/oem.png';
import img3 from '../../img/madein.png';
import img4 from '../../img/patco.png';

export const OEMView = () => {
    return (
        <>
            <div className='OEMViewContainer'>
                <div className='imgAOEMViewv'>
                    <img src={img2} alt='img' className='img2' />
                </div>
                <div className='descriptionOEMView'>
                    <div className='titleOEMView'>
                        <h1>OEM PANELS</h1>
                    </div>
                    <h2>OEM control panels are designed to give you the flexibility you need, while staying within your original parameters.</h2>
                    <br></br>
                    <p>We can design, manufacture, install and provide maintenance for your OEM control panels.  Whether you need to remanufacture to exact specifications or expand your capabilities within a pre-determined set of dimensions, we have the ability to meet your needs.</p>
                    <br></br>
                    <p>Because our panels are designed and built in house by PATCO Electrical Services, you can expect unparalleled quality, customer service and product knowledge</p>
                    <br></br>
                </div>
                <div className='imgFooter'>
                    <div className='usaflag'>
                        <img src={img3} alt='img' className='img3' />
                    </div>
                    <div className='pat'>
                        <img src={img4} alt='img' className='img4' />
                    </div>
                </div>

            </div>

        </>
    )
}
