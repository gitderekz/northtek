import React from 'react'
import "./Services.css"
import { services } from '../../data'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <section id='services'>
            <div className="container">
                <h1 className="title">Our <span className="g-text">Services</span></h1>
                {/* <h6 className="sub__title text__muted"> */}
                <center className=" text__muted">
                    Northtek Hydroworks Limited provides advanced water and energy solutions across diverse sectors. From project design to installation and testing, we deliver reliable, high-quality services that meet client needs. Trusted by government agencies, private enterprises, and industrial clients nationwide, we aim to build long-term partnerships founded on quality, reliability, and shared success.
                </center>
                <div className="services__container">
                    {
                        services.map((service, index)=>(
                            <div className="service" key={index}>
                                <div className="picture">
                                    <img src={service.image} alt={service.name} />
                                </div>
                                <div className="details">
                                    <h3>{service.name}</h3>
                                    <p className="text__muted description">
                                    {service.description}
                                    </p>
                                </div>
                                <div className="buttons__container">
                                    {/* <button className="btn">Read More</button>
                                    <Link to='contact' className='btn btn__primary'>Get Started</Link> */}
                                </div>
                            </div>
                            )
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Services