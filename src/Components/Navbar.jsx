import React from 'react'
import { Link } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { CiFacebook } from "react-icons/ci";
import { IoLogoPinterest } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiGooglePlayLine } from "react-icons/ri";

const Navbar = () => {
    return (
        <div>
            <div>
                <nav className="navbar1">
                    <ul className="navbarUl">
                        <li className="">
                            <h6 className="">
                                <MdEmail /> <small>fahimshakir786@gmail.com</small>
                            </h6>{" "}
                        </li>
                        <li className="">
                            <h6 className="">
                                <MdEmail /> <small>fahim.shakir40</small>
                            </h6>{" "}
                        </li>
                        <li className="">
                            <h6 className="">
                                <MdOutlineWifiCalling3 />
                                <small> 09718925775</small>
                            </h6>
                        </li>
                        <li className="">
                            <h6 className="">
                                <SiWhatsapp /> <small> 09268751849</small>
                            </h6>
                        </li>
                    </ul>



                    <ul className="navUl2">
                        <li className="">
                            <h6 className="follow">Follow Us:</h6>
                        </li>
                        <li className="nav2">
                            <h6 className="">
                                <CiFacebook />
                            </h6>
                        </li>
                        <li className="nav2">
                            <h6 className="">
                                <IoLogoPinterest />
                            </h6>
                        </li>
                        <li className="nav2">
                            <h6 className="">
                                <BsTwitterX />
                            </h6>
                        </li>
                        <li className="nav2">
                            <h6 className="">
                                <FaLinkedinIn />
                            </h6>
                        </li>
                        <li className="nav2">
                            <h6 className="">
                                <FaInstagram />
                            </h6>
                        </li>
                        <li>
                            <h6 className="nav2">
                                <FaGithub />
                            </h6>
                        </li>
                        <li className="nav2">
                            <h6 className="">
                                <RiGooglePlayLine />
                            </h6>
                        </li>
                    </ul>
                </nav>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-white w-auto ">
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




