// import React, { useEffect, useState } from 'react';
// import './Navbar.css';
// import { navTabs } from '../../data';
// import { RiMenu3Fill } from "react-icons/ri";
// import { Link } from 'react-scroll'; // Import NavLink for active link styling
// import Logo from '../Logo';
// import { FaTimes } from 'react-icons/fa';

// const Navbar = () => {
//     const[open,setOpen] = useState(false);
//     const[activeNavbar,setActiveNavbar] = useState(false);
//     const handleScroll = ()=>{
//         const currentScrollPos = window.scrollY;
//         if(currentScrollPos > 50){
//             setActiveNavbar(true);
//         }else{
//             setActiveNavbar(false);
//         }
//     }
//     useEffect(()=>{
//         window.addEventListener('scroll',handleScroll)
//         return () => window.removeEventListener('scroll', handleScroll)
//     },[])
//   return (
//     <nav className={`navbar ${activeNavbar?'active':''}`}>
//         {
//             open?(<div className='sidebar__overlay' onClick={()=>setOpen(!open)}></div>):''
//         }
//         <Logo/>
//         <div className={`box nav__tabs ${open? 'visible':'none'}`}>
//             <div className="icon__container cancel__btn" onClick={()=>setOpen(!open)}>
//                 <FaTimes/>
//             </div>
//             {
//                 navTabs.map((tab, index) => (
//                     // Use NavLink for active class functionality
//                     <Link 
//                         to={tab.id} 
//                         className='tab' 
//                         activeClass='g-text' // Add this to automatically apply a class when the link is active
//                         smooth={true}
//                         spy={true} 
//                         offset={-70} 
//                         onClick={()=>setOpen(!open)}
//                         key={index}
//                     >
//                         {tab.name}
//                     </Link>
//                 ))
//             }
//         </div>
//         <div className='box'>
//             {/* If it's a simple link, use Link instead */}
//             <Link to='contact' className='btn contact__btn'>
//                 Get started
//             </Link>
//             <div className='icon__container menu__btn' onClick={()=>setOpen(!open)}>
//                 <RiMenu3Fill/>
//             </div>
//         </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { navTabs } from '../../data';
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from 'react-scroll'; // Import NavLink for active link styling
import Logo from '../Logo';
import { FaTimes } from 'react-icons/fa';
import { FaMoon, FaSun } from 'react-icons/fa'; // Import icons for light/dark mode toggle

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [open, setOpen] = useState(false);
  const [activeNavbar, setActiveNavbar] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > 50) {
      setActiveNavbar(true);
    } else {
      setActiveNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="top-bar">
        <div className="contact-info">
          <span>Phone: +255 (0) 652 235 255 | +255 (0) 764 904 832</span>
          <span>Email: info@northtek.co.tz</span>
          {/* <span>Website: <a href="http://www.northek.co.tz/" target="_blank" rel="noopener noreferrer">www.northek.co.tz</a></span> */}
          <span>Address: P.O. Box 1718, Mwanza, Tanzania</span>
        </div>
      </div>
      <nav className={`navbar ${activeNavbar ? 'active' : ''}`}>
      {open ? (
        <div className='sidebar__overlay' onClick={() => setOpen(!open)}></div>
      ) : (
        ''
      )}
      <Logo />
      <div className={`box nav__tabs ${open ? 'visible' : 'none'}`}>
        <div className="icon__container cancel__btn" onClick={() => setOpen(!open)}>
          <FaTimes />
        </div>
        {navTabs.map((tab, index) => (
          <Link
            to={tab.id}
            className='tab'
            activeClass='g-text'
            smooth={true}
            spy={true}
            offset={-70}
            onClick={() => setOpen(!open)}
            key={index}
          >
            {tab.name}
          </Link>
        ))}
      </div>
      <div className='box'>
        <Link to='contact' className='btn contact__btn'>
          Get started
        </Link>
        <div className='icon__container menu__btn' onClick={() => setOpen(!open)}>
          <RiMenu3Fill />
        </div>
        <div className='theme-toggle' onClick={toggleTheme}>
          {!isDarkMode ? <FaSun /> : <FaMoon />} {/* Toggle button */}
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
