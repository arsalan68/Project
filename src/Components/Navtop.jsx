import React, { useEffect, useState } from 'react'
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

const Navtop = () => {
  
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
    </div>
  )
}

export default Navtop
