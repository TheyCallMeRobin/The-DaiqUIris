import React, { useState } from 'react';
import './Header.scss';
import DaiqUIriLogo from '/src/assets/DaiqUIris-Logo.png';
import FileFinder from './fileFinder'; // Assuming FileFinder is the component for the file finder modal

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [fileFinderVisible, setFileFinderVisible] = useState(false);

  const toggleFileFinder = () => {
    setFileFinderVisible(!fileFinderVisible);
  };

  return (
    <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container">
        {menuOpen && (
          <div className="menu-open">
            <button className="close-button" onClick={toggleMenu}>
              x
            </button>
          </div>
        )}
        {!menuOpen && (
          <>
            <div className="hamburger-menu" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>

            {/* Import Button */}
            <div className="import-button-container">
              <button className="import-button" onClick={toggleFileFinder}>
                Import
              </button>
              {/* {fileFinderVisible && <FileFinder />} Render the FileFinder component when fileFinderVisible is true */}
            </div>
            <div className="logo">
              <img src={DaiqUIriLogo} alt="Logo" />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
