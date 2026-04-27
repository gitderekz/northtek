import React from 'react'
import "./Logo.css"
import { company__photo } from '../../assets'
import { PiCompassRose, PiSolarPanelFill } from 'react-icons/pi'
const Logo = () => {
    return (
    <div className='logo'>
        <img className='photo' src={company__photo} alt="company__photo" />
        {/* <PiCompassRose className='icon'/>
        <h1 className="name">North<span className="color__primary">Tek</span></h1> */}
    </div>
    )
}
export default Logo