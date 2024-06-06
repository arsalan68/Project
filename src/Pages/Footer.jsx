import React from 'react'
import { Link } from 'react-router-dom'
import { PiGreaterThan } from "react-icons/pi";

const Footer = () => {
    return (
        <>
            <div className='m-0' >
                <div className='footerPages'>
                    <div className='text-light m-auto mx-5'>
                        <div className="row">
                            <div className="col-md-6">
                                <div className='ulPages mt-5'>
                                    <img src="https://www.ourstaging.in/wp-content/uploads/2024/04/fs-logo.png" className="img-fluid " alt="" />
                                    <p className='mt-3 w-75' style={{textAlign:'justify'}}>My name is Fahim Shakir. In the discipline of Web Development
                                        and Design I am full stack prominent as PHP Programmer / Web
                                        Developer / Web Freelancer. I am reputated by my outstanding
                                        work, excellent programming skills and versatile nature of
                                        program coding with Software and Website Development. I am
                                        full stack developed many web based applications. I am persistent
                                        in developing the web application as well as dynamic websites</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <ul className='ulPages mt-5'>
                                    <h6><Link href="" className='text-white text-decoration-none'>Usefull Links</Link></h6>
                                    <hr style={{width:'93px'}} />
                                    <li className='mt-5 hack'><PiGreaterThan /> <Link className='hack' href="#">About Us</Link></li>
                                    <li className='mt-2 hack'><PiGreaterThan /> <Link className='hack' href="#">My Resume</Link></li>
                                    <li className='mt-2 hack'><PiGreaterThan /> <Link className='hack' href="#">Our Services</Link></li>
                                    <li className='mt-2 hack'><PiGreaterThan /> <Link className='hack' href="#">Our Portfolio</Link></li>
                                    <li className='mt-2 hack'><PiGreaterThan /> <Link className='hack' href="#">Blog</Link></li>
                                    <li className='mt-2 hack'><PiGreaterThan /> <Link className='hack' href="#">Privacy Policy</Link></li>
                                    <li className='mt-2 hack'><PiGreaterThan /> <Link className='hack' href="#"> Terms & Conditions</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className='ulPages mt-5'>
                                    <h6><Link href="" className='text-white text-decoration-none'>Contact Us</Link></h6>
                                    <hr style={{width:'85px'}} />
                                    <li className='mt-5'><PiGreaterThan /> <Link className='hack' href="#">Block C-11B, Top Floor, New Ashok Nagar,</Link></li>
                                    <li className='mt-2'><PiGreaterThan /> <Link className='hack' href="#">Delhi NCR 110096, India</Link></li>
                                    <li className='mt-2'><PiGreaterThan /> <Link className='hack' href="#">09718925775</Link></li>
                                    <li className='mt-2'><PiGreaterThan /> <Link className='hack' href="#">09268751849</Link></li>
                                    <li className='mt-2'><PiGreaterThan /> <Link className='hack' href="#">Fahimshakir786@Gmail.Com</Link></li>
                                    <li className='mt-2'><PiGreaterThan /> <Link className='hack' href="#">Info@Fahimshakir.Com</Link></li>
                                    <li className='mt-2'><PiGreaterThan /> <Link className='hack' href="#">Fahim.Shakir40</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bgPages mb-10 text-center fw-bold'>
                    <small><p className='px-5 py-2'>Copyright © 2024 <span style={{color:'goldenrod'}}>Fahim Shakir Web Developer</span> All rights reserved.</p></small>
                </div>
            </div>
        </>
    )
}

export default Footer

