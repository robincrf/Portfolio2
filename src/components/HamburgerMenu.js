import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/HamburgerMenu.css';

const HamburgerMenu = ({ menuOpen: externalMenuOpen, onHamburgerClick: externalClick }) => {
    const [internalMenuOpen, setInternalMenuOpen] = useState(false);

    // Utiliser les props externes si fournies, sinon utiliser l'état interne
    const menuOpen = externalMenuOpen !== undefined ? externalMenuOpen : internalMenuOpen;
    const handleClick = externalClick || (() => setInternalMenuOpen(!internalMenuOpen));

    return (
        <div className="menu-container">
            <button 
                className={`menu-btn ${menuOpen ? 'open' : ''}`} 
                onClick={handleClick}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`menu-nav ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/projet1">ECG C++</Link></li>
                    <li><Link to="/projet2">ASCON</Link></li>
                    <li><Link to="/projet3">Pipeline DQ</Link></li>
                    <li>Projet 4</li>
                    <li>Projet 5</li>
                </ul>
            </nav>
        </div>
    );
};

export default HamburgerMenu;
