import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
const Header = () => {
  const [mode, setMode] = useState('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [flip, setFlip] = useState(false)

  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('body-dark-mode');
      document.body.classList.remove('body-light-mode');
    } else {
      document.body.classList.add('body-light-mode');
      document.body.classList.remove('body-dark-mode');
    }
  }, [mode]);

  function toggleMode() {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  }

  function toggleMobileMenu() {
    setIsMobileMenuOpen(prevIsMobileMenuOpen => !prevIsMobileMenuOpen);
    setFlip(prevFlip => !prevFlip)
  }

  return (
    <nav className="header flex flex-jc-sa flex-ai-c">
      <i
        className="color-theme fa-solid fa-circle-half-stroke"
        onClick={toggleMode}
      ></i>
      <div className={`hamburger hide-for-desktop flex flex-fd-c ${flip ? "flip" : ""} `} onClick={toggleMobileMenu}>
        <span className='bar1'></span>
        <span className='bar2'></span>
        <span className='bar3'></span>
      </div>
      <div
        className={`mobile-menu hide-for-desktop flex flex-fd-c flex-jc-c flex-ai-fe ${
          isMobileMenuOpen ? 'open' : ''
        }`}
      >
        <a href="/">Home</a>
        <a href="#classes">Classes</a>
        <a href="#aboutus">About us</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="desktop-menu flex flex-jc-sa hide-for-mobile">
        <a href="/">Home</a>
        <a href="#classes">Classes</a>
        <a href="#aboutus">About us</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Header;
