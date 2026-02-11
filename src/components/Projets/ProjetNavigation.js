import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/projet/ProjetNavigation.css';

function ProjetNavigation({ currentProjet }) {
    const projets = [
        { id: 1, name: 'ECG C++', path: '/projet1' },
        { id: 2, name: 'ASCON', path: '/projet2' },
        { id: 3, name: 'Pipeline DQ', path: '/projet3' },
        { id: 5, name: 'KPMG RAG', path: '/projet5' },
    ];

    return (
        <nav className="projet-navigation">
            <div className="projet-nav-container">
                <Link to="/" className="projet-nav-link">
                    Home
                </Link>
                {projets.map((projet) => (
                    <Link
                        key={projet.id}
                        to={projet.path}
                        className={`projet-nav-link ${currentProjet === projet.id ? 'active' : ''}`}
                    >
                        {projet.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default ProjetNavigation;
