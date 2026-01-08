import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import ProjetNavigation from '../../components/Projets/ProjetNavigation';
import Footer from '../../components/Footer';
import Presentation from '../../components/Projets/Presentation';
import Techno from '../../components/Projets/Techno';
import { projetsData } from '../../data/projets.js';

function Projet5() {
    useEffect(() => {
        // Reset body styles
        document.body.style.overflow = '';
        document.body.style.height = '';
        document.body.classList.remove('menu-open');

        return () => {
            document.body.style.overflow = '';
            document.body.style.height = '';
        };
    }, []);

    const projetData = projetsData.projet5;

    return (
        <div className="projet5-page">
            <Navbar />
            <ProjetNavigation currentProjet={5} />
            <main className="projet-content">
                <Presentation projet={projetData} />
                <Techno technologies={projetData.technologies} />
            </main>
            <Footer />
        </div>
    );
}

export default Projet5;
