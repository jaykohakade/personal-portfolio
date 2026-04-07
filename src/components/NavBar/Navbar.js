import React from 'react';
import './Navbar.css';
import logo from '../../asest/logo.png'
// import { Link } from "react-router-dom";
//import Link from 'react-scroll';
// import resume from "../assets/jaykohakadecv.pdf";

const Navbar = () => {
   const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/jaykohakadecv.pdf'; // correct path
    link.download = 'jaykohakadecv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  

  return (
    <nav className="navbar">

      <img src={logo} alt="logo" className='logo' />
      

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Projects</a></li>
        <li><a href="#projects">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="downlode-resume" onClick={downloadResume}>Downlode-Resume</button>

    </nav>
  );


}

export default Navbar;