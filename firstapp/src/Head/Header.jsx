import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand bg-success p-2 rounded" to="/home" >MyWebsite</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className="nav-item"><Link className="nav-link" to="/home" >Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/about" >About Us</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contact" >Contact Us</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/etc" >Etc</Link></li>
                        </ul>
                        <div className="d-flex">
                            <Link to="home/login"><button className="btn btn-primary">Login</button></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header
