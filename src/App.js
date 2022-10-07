
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Views/Home';
import { OEM } from './Views/OEM';
import { ISOFuel } from './Views/ISOFuel';
import { About } from './Views/About';
import { Contact } from './Views/Contact';


function App() {
  return (
    <>
      <Routes>
        < Route path='/' element={< Home />} exact />
        < Route path='/oem' element={< OEM />} />
        < Route path='/isofuel' element={< ISOFuel />} />
        < Route path='/about' element={< About />} />
        < Route path='/contact' element={< Contact />} />
      </Routes>
    </>
  )
}

export default App;
