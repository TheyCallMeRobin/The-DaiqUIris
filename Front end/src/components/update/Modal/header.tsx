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
         <div className="hamburger-menu" onClick={toggleMenu}> {/*<- This will be used after the onClick funtion to hide the header modal*/}
          <div className="bar"></div>                           {/*from view in order to show a side bar Modal*/}
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="logo">
          <img src={DaiqUIriLogo} alt="Logo" />
        </div>
      </div>
      {menuOpen && (
        <div className="side-menu">
          <div className="menu-item">
            <span>1</span>
          </div>
          <div className="menu-item">
            <span>2</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
