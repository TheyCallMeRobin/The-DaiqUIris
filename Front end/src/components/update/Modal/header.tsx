import React, { useState } from 'react';
import './Header.scss';
import DaiqUIriLogo from '/src/assets/DaiqUIris-Logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="logo">
          <img src={DaiqUIriLogo} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
function setMenuOpen(arg0: boolean) {
  throw new Error('Function not implemented.');
}

