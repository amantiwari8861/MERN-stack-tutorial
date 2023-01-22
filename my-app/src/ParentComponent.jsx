import React from 'react'
import Home from './Head/Home';
import ContactUs from './Head/ContactUs';
import AboutUs from './Head/AboutUs';
import LoginForm from './Head/LoginForm';
import NotFound from './Head/NotFound';
import Display from './Head/Display';
import { Route, Routes,Outlet } from 'react-router-dom';
import Layout from './Head/Layout';

const ParentComponent = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/*" element={<NotFound />} />
                    <Route path="home/:user/display/:topic"  element={<Display/>} />
                    <Route path="/home/:name"  element={<Home/>} />
                </Route>
            </Routes>
            <Outlet/>
        </div>
    )
}

export default ParentComponent
