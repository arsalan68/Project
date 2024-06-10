import React from 'react'
import Footer from './Footer'
import Card from './Card'
import { BsGraphUpArrow } from "react-icons/bs";
import { SiTransmission } from "react-icons/si";
import { PiGreaterThan } from "react-icons/pi";
const Home = () => {
    return (
        <>
            <div className='Pagebackground'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 text-white mt-5 text-start">
                            <h6 className='text-danger' style={{ marginTop: '100px' }} ><svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" viewBox="0 0 40 16" fill="none"><rect x="0.5" y="0.5" width="25.6667" height="15" rx="7.5" stroke="#384BFF"></rect><rect x="13.3334" width="26.6667" height="16" rx="8" fill="#384BFF"></rect></svg> BEST IT SOULTION PROVIDER</h6>
                            <h1 className='mt-4 text-success' style={{ fontSize: '4rem' }} >Excellent It Services for Your Success</h1>
                            <p className='mt-4'><small>Consectetur adipiscing elit aenean scelerisque at augue  vitae consequat <br /> quisque eget congue velit in cursus leo sed sodales est eget turpis.</small></p>
                            <button type="button" class="btn btn-primary mt-3" style={{ marginBottom: '50px' }}>Explore More </button>
                        </div>
                        <div className="col-md-5" style={{ marginTop: '50px' }}>
                            <img src="https://www.ourstaging.in/wp-content/uploads/2024/04/hero.png" className="img-fluid px-5 mt-5 " style={{ height: '450px' }} alt="..." />
                        </div>
                    </div>
                </div>
            </div>

            <div className="marquee">
                <div className="marquee-content">
                        <span>WordPress Development ,</span> <span>IT Solution ,</span> <span>Woocommerce Development ,</span> <span>Magento Development ,</span> <span>Joomla Development ,</span> <span>PHP Development ,</span> <span>3rd Party APIs Integration</span>
                </div>
            </div>


            <div className='container'>
                <div className="row mx-5">
                    <div className="col-md-6 mt-5">
                        <div className="image-container">
                            <img
                                src="https://www.ourstaging.in/wp-content/uploads/2024/04/01.jpg"
                                className="img-fluid firstimg"
                                alt="Background"
                            />
                            <img
                                src="https://www.ourstaging.in/wp-content/uploads/2024/04/02.jpg"
                                className="img-fluid overlay-image imagetwo"
                                alt="Overlay"
                            />
                        </div>
                    </div>

                    <div className="col-md-6 mt-5">
                        <div className="row text-primary text-center mx-5">ABOUT INFOTECK</div>
                        <h2 className=' mx-5'>We Are Increasing Business Success With <span className='text-primary'>Technology</span></h2>
                        <div className="row mt-4  mx-5">It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point.</div>
                        <div className="row mt-4  mx-5">
                            <div className="col">
                                <h3><BsGraphUpArrow /> Problem Solving</h3>
                                <p> Aliquam erat volutpat Nullam imperdiet</p>
                            </div>
                            <div className="col">
                                <h3><SiTransmission /> Mission & Vision</h3>
                                <p>Aliquam erat volutpat Nullam imperdiet</p>
                            </div>

                        </div>
                        <div className="row mt-4 w-25  mx-5">
                            <button type="button" className="btn btn-primary">Explore More</button>
                        </div>
                    </div>
                </div>
            </div>
            <Card />
            <Footer />
        </>
    )
}

export default Home