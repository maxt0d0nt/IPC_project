import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Main } from '../components/Main/Main';
import { About } from '../components/About/About'
import { Oem } from '../components/OEM/Oem';


export const Home = () => {
  return (
    <>
      
      < Navbar />
      < Main />
      < About />
      < Oem />
      
    </>
  )
}
