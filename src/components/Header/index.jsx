import React, { useState, useEffect } from 'react'
import './Header.css'
import { solar__skyscraper, homeSlide1, homeSlide2, homeSlide3, homeSlide4 } from '../../assets';
import { Link } from 'react-scroll';
import SolarSystem from '../SolarSystem';
import { FaAward, FaDiagramProject, FaUsersLine, FaSun } from 'react-icons/fa6';


const Header = () => {
  const slides = [homeSlide1, homeSlide2, homeSlide3, homeSlide4];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <header>
        <div id="header">
            <div className="slideshow">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${slide})` }}
                ></div>
              ))}
            </div>
            {/* <div className="system__wrapper">
                <SolarSystem/>
            </div> */}
            <div className="container full__height blur-effect">
                <div className="column">
                    <div className="header-content-wrapper">
                        <h1 className="title">
                            WELCOME <br /> <span className="g-text">Northtek Hydroworks</span>
                        </h1>
                        <p className="  header-description">
                        Local engineering firm that has focus in water and energy solutions. Our services are Supply and installation of Water pumps and spare parts, Solar pumping, Solar backup, Borehole services, Water treatment, Electromechanical works, Irrigation's systems, Plumbing, pipes, fittings and General supplies.
                        </p>
                    </div>
                    <div className="buttons__container">
                        <Link to='services' className='btn'>Our Services</Link>
                        <Link to='contact' className='btn btn__primary'>Contact us</Link>
                    </div>
                </div>
                {/* <div className='column'>
                    <div className="image__container primary-effect">
                        <img src={solar__skyscraper} alt="solar" />
                    </div>
                </div> */}
            </div>
        </div>
    </header>
  )
}

export default Header;