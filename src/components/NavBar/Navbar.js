import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../asest/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/jaykohakadecv.pdf';
    link.download = 'jaykohakadecv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setMenuOpen(false);
  };

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>

      {/* Logo */}
      <img src={logo} alt="logo" className="logo" />

      {/* Desktop Nav Links */}
      <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
        <li><a href="#home"    onClick={handleNavClick}>Home</a></li>
        <li><a href="#project" onClick={handleNavClick}>Projects</a></li>
        <li><a href="#about"   onClick={handleNavClick}>About</a></li>
        <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>

        {/* Resume button inside mobile menu */}
        <li className="mobile-resume">
          <button onClick={downloadResume}>Download Resume</button>
        </li>
      </ul>

      {/* Desktop Resume Button */}
      <button className="downlode-resume" onClick={downloadResume}>
        <span>Download Resume</span>
      </button>

      {/* Hamburger */}
      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Toggle menu"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

    </nav>
  );
};

export default Navbar;