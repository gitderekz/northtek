import React from 'react'
import './SolarSystem.css'
import { sun } from '../../assets';

const SolarSystem = () => {
  return (
    <div className="solar__System">
        <div className="sun">
            <img src={sun} alt="sun" />
        </div>
        <div className="mercury"></div>
        <div className="venus"></div>
        <div className="earth">
            <div className="moon"></div>
        </div>
        <div className="mars"></div>
        <div className="jupiter"></div>
        <div className="saturn"></div>
        <div className="uranus"></div>
        <div className="neptune"></div>
        <div className="pluto"></div>
    </div>
  )
}

export default SolarSystem;