import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Main } from '../components/Main/Main';
import { About } from '../components/About/About'
import { Oem } from '../components/OEM/Oem';
import { Iso } from "../components//ISO/Iso.js"
import { Clients } from '../components/Clients/Clients';
import { Footer } from '../components/Footer/Footer';


export const Home = () => {
  return (
    <>
      < Navbar />
      < Main />
      < About />
      < Oem />
      < Iso />
      < Clients />
      < Footer />
    </>
  )
}
