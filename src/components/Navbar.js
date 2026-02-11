import React from 'react';
import DelayedRender from './DelayedRender';
import { ReactTyped } from 'react-typed';
import { useLocation, Link } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    // Appliquez une classe différente si l'utilisateur est sur la page `cv`
    const isCVPage = location.pathname === '/cv';
    const navbarClass = isCVPage ? 'navbar cv-style' : 'navbar default-style';

    return (
        <DelayedRender delay={2000}>
            <header className={navbarClass}>
                <div className="navbar-left">
                    <img src={`${process.env.PUBLIC_URL}/image/robin.svg`} alt="Logo" className="logo" />
                </div>
                <div className="navbar-typed">
                    <ReactTyped
                        strings={['Welcome to my website, discover my projects']}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                    />
                </div>
                <nav className="navbar-right">
                    <ul className="navbar-menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cv">CV</Link></li>
                    </ul>
                </nav>
            </header>
        </DelayedRender>
    );
}

export default Navbar;
