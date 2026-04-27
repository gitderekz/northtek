// import About from "./components/About/index.jsx";
// import Achievement from "./components/Achievement/index.jsx";
// import Contacts from "./components/Contacts/index.jsx";
// import Faq from "./components/Faq/index.jsx";
// import Footer from "./components/Footer/index.jsx";
// import Header from "./components/Header/index.jsx";
// import Navbar from "./components/Navbar/index.jsx";
// import Projects from "./components/Projects/index.jsx";
// import Services from "./components/Services/index.jsx";
// import Teams from "./components/Teams/index.jsx";
// import Testimonial from "./components/Testiminial/index.jsx";

// function App() {

//   return (
//     <>
//      <Navbar/>
//      <Header/>
//      <Achievement/>
//      <About/>
//      <Services/>
//      <Teams/>
//      <Projects/>
//      <Testimonial/>
//      <Faq/>
//      <Contacts/>
//      <Footer/>
//     </>
//   )
// }

// export default App


import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar/index.jsx";
import Header from "./components/Header/index.jsx";
import Achievement from "./components/Achievement/index.jsx";
import About from "./components/About/index.jsx";
import Services from "./components/Services/index.jsx";
import Teams from "./components/Teams/index.jsx";
import Projects from "./components/Projects/index.jsx";
import Testimonial from "./components/Testiminial/index.jsx";
import Faq from "./components/Faq/index.jsx";
import Contacts from "./components/Contacts/index.jsx";
import Footer from "./components/Footer/index.jsx";

function App() {
  // Check if a theme is saved in localStorage, otherwise default to dark mode
  /*const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
  const savedTheme = localStorage.getItem('theme') || systemTheme;*/
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [isDarkMode, setIsDarkMode] = useState(savedTheme === 'dark');

  // Set the initial theme when the component mounts
  useEffect(() => {
    if (!isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  // Toggle theme between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode((prevState) => {
      const newState = !prevState;
      // Save the new theme to localStorage
      localStorage.setItem('theme', newState ? 'dark' : 'light');
      return newState;
    });
  };


  return (
    <>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Header />
      <Achievement />
      <About />
      <Services />
      <Teams />
      {/* <Projects /> */}
      <Testimonial />
      <Faq />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
