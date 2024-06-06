import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Navtop from './Navtop';

const Navbar = () => {

    const [offset, setOffset] = useState(0);
    console.log(offset)
    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [offset]);
    return (
        <div className='navbarMain'>
          
           <Navtop/>
        

            <nav className="navbar navbar-expand-lg navbar-light bg-white w-auto">
                <div className="container-fluid d-flex justify-content-between">
                    <div className='navbar-brand w-auto mx-5'>
                        <img src="https://www.ourstaging.in/wp-content/uploads/2024/04/fs-logo.png" className="img-fluid" style={{ width: '5rem' }} alt="..." />

                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="navbar3 collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3 w-auto mx-5 px-3">
                            <li className="navHover nav-item">
                                <Link className="nav-link active" aria-current="page" href="#"><h6>Home</h6></Link>
                            </li>
                            <li className="navHover nav-item">
                                <Link className="nav-link" href="#"><h6>About Us</h6></Link>
                            </li>
                            <li className="navHover nav-item">
                                <Link className="nav-link" href="#"><h6>Resume</h6></Link>
                            </li>
                            <li className="navHover nav-item">
                                <Link className="nav-link" href="#"><h6>Our Services</h6></Link>
                            </li>
                            <li className="navHover nav-item">
                                <Link className="nav-link" href="#"><h6>Our Portfolio</h6></Link>
                            </li>
                            <li className="navHover nav-item">
                                <Link className="nav-link" href="#"><h6>Blog</h6></Link>
                            </li>
                            <li className="navHover nav-item">
                                <Link className="nav-link" href="#"><h6>Contact Us</h6></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar




