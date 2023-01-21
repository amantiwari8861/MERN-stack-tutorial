import React from 'react'; 
import Home from './Head/Home';
import ContactUs from './Head/ContactUs';
import { BrowserRouter as Router, Route, Link, Routes, Outlet} from 'react-router-dom';
import AboutUs from './Head/AboutUs';
class Header2 extends React.Component {
    render() {
        return (<Router>
                    <React.Fragment>
                        <Link to="/home">Home</Link> |
                        <Link to="/about"> About Us </Link> |
                        <Link to="/contact"> Contact Us </Link>
                        <Routes>
                        <Route exact path = "/" element = {<Home/>} />
                        <Route path = "/home" element = {<Home/>} />
                        <Route path = "/about" element = {<AboutUs/>} />
                        <Route path = "/contact" element = {<ContactUs/>} />
                        </Routes>
                        <Outlet/>
                    </React.Fragment>
                </Router>)
    }
}
export default Header2;
