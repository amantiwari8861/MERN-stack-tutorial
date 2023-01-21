import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './Head/Header';
import AboutUs from './Head/AboutUs';
import ContactUs from './Head/ContactUs';
import Home from './Head/Home';
import NotFound from './Head/NotFound';
import Display from './Head/Display';


const App = () => {
  return (
    <div className='AppName'>
      <Header/>
      <Routes>
      <Route index path="/" element={<Home />} />
      <Route  path="home" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/display/:topic" element={<Display/>} />
      </Routes>
    </div>
  )
}

export default App
