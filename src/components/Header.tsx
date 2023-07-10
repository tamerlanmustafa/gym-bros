import React, { useState, useEffect } from 'react';

const Header = () => {
  const [mode, setMode] = useState('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
  }

  return (
    <nav className="header flex flex-jc-sa flex-ai-c">
      <i
        className="color-theme fa-solid fa-circle-half-stroke"
        onClick={toggleMode}
      ></i>
      <div className="hamburger hide-for-desktop flex flex-fd-c" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`mobile-menu hide-for-desktop flex flex-fd-c flex-jc-c flex-ai-fe ${
          isMobileMenuOpen ? 'open' : ''
        }`}
      >
        <a href="/">Home</a>
        <a href="">Classes</a>
        <a href="">About us</a>
        <a href="">Contact</a>
      </div>
      <div className="desktop-menu hide-for-mobile">
        <a href="">Home</a>
        <a href="">Classes</a>
        <a href="">About us</a>
        <a href="">Contact</a>
      </div>
    </nav>
  );
};

export default Header;
