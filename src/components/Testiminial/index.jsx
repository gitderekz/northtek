import React from 'react'
import './Testimonial.css'
import { testimonial } from '../../data'
import { FaStar } from 'react-icons/fa6'

const Testimonial = () => {
  return (
    <section id='testimonial'>
        <div className="container">
            <h1 className="title">
                {/* Clients <span className="g-text">Testimonies</span> */}
                Our <span className="g-text">Partners</span>
            </h1>
            <p className="text__muted description">
                We collaborate with a network of trusted partners to deliver high-quality products, solutions and exceptional service to our clients.
                Meet our diverse team of creative minds, and strategists project's success the driving force behind every project's success
            </p>
            <div className="partners__container">
                {
                    testimonial.map((list,index) => (
                        <div className="partner__card" key={index}>
                            {/* <div className="stars__container">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                            <p className="text__muted content">{list.review}</p> */}
                            {/* <div className="user__row"> */}
                                {/* <div className="profile"> */}
                                    <img src={list.image} alt={list.name} />
                                {/* </div> */}
                                {/* <div className="details">
                                    <h3 className="name">{list.name}</h3>
                                    <small>WITH NORTHTEK</small>
                                </div> */}
                            {/* </div> */}
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Testimonial