import React from 'react'
import "./About.css";
import {company__photo, homeSlide1} from "../../assets"
import { FaCheck } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const About = () =>{
    return(
        <section id='about'>
            <h1 className="title">About <span className="g-text">Us</span></h1>
            <div className="container">
                <div className="column company__photo">
                    <img src={homeSlide1} alt="NORTHTEK" height="500px" display="flex"/>
                </div>
                <div className="column">
                    {/* <h3 className='sub__title'>With years experience</h3> */}
                    <h3 className='sub__title'>Who we are?</h3>
                    <h1 className='sub__title'>
                        {/* Let’s engineer <div className="g-text">your water dreams.</div> */}
                        Your Trusted Partner <div className="g-text">in Excellence.</div>
                    </h1>
                    {/* <p className="text__muted description">We aim to become a competitive company that offer high quality, cost effective and timely products and services in the industry of water and energy solutions in Tanzania, through provision of professional engineering services and reliable products that shaped to meet customer demands. Our goal is to provide futuristic and well-engineered solutions to every water and energy problem in Tanzania. </p> */}
                    <p className="text__muted description">Our commitment is to be your one-stop water and energy solution provider , delivering innovative, reliable, and efficient solutions tailored to various industries. With a focus on helping you achieve your goals; we provide the expertise and tools necessary to ensure your success. </p>
                    <div className="group">
                        {/* Start row */}
                        <div className="row">
                            <div className="icon__container">
                                <FaCheck/>
                            </div>
                            <div className="details">
                                <p className="text__muted">Consultation</p>
                                <h3>Free</h3>
                            </div>
                        </div>

                        {/* Start row */}
                        <div className="row">
                            <div className="icon__container">
                                <FaCheck/>
                            </div>
                            <div className="details">
                                <p className="text__muted">Expert</p>
                                <h3>Engineers</h3>
                            </div>
                        </div>
                        
                        {/* Start row */}
                        <div className="row">
                            <div className="icon__container">
                                <FaCheck/>
                            </div>
                            <div className="details">
                                <p className="text__muted">Customer</p>
                                <h3>Support</h3>
                            </div>
                        </div>
                        
                        {/* Start row */}
                        <div className="row">
                            <div className="icon__container">
                                <FaCheck/>
                            </div>
                            <div className="details">
                                <p className="text__muted">Quality</p>
                                <h3>Service</h3>
                            </div>
                        </div>
                        
                    </div>
                    <div className="buttons__container">
                        {/* <Link to='project' smooth={true} className='btn'>Explore</Link>
                        <Link to='contact' smooth={true} className='btn btn__primary'>Get a quote</Link> */}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About