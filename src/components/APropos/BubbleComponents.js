import React from 'react';
import '../../assets/BubbleComponents.css';

export const Bubble1 = () => (
    <div className="bubble-content bubble1-content">
        <div className="content-section-v1">
            <h1 className="name-v1">CRIFO<br />ROBIN</h1>
            <p className="role-v1">Ingénieur Microélectronique</p>
            <p className="bio-v1">Full Stack Developer | Data & AI Specialist</p>
        </div>

        <div className="divider-v1"></div>

        <div className="contacts-v1">
            <a
                href="mailto:robin.crifo@etu.emse.fr"
                className="contact-icon-v1 email-icon-v1"
                title="Email"
                aria-label="Email"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
            </a>
            <a
                href="https://www.linkedin.com/in/robin-crifo-691492331/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon-v1 linkedin-icon-v1"
                title="LinkedIn"
                aria-label="LinkedIn"
            >
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.817 0-9.74h3.554v1.378c.43-.664 1.199-1.61 2.920-1.61 2.135 0 3.733 1.395 3.733 4.397v5.575zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.705 0-.956.77-1.703 1.957-1.703 1.188 0 1.914.747 1.939 1.703 0 .947-.751 1.705-1.981 1.705zm1.582 11.597H3.635V9.712h3.284v10.74zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
            </a>
            <a
                href="https://github.com/robincrf"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon-v1 github-icon-v1"
                title="GitHub"
                aria-label="GitHub"
            >
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            </a>
        </div>
    </div>
);

export const Bubble2 = () => (
    <div className="bubble-content bubble2-content">
        <div className="logos-container-v2">
            <img
                src={`${process.env.PUBLIC_URL}/image/mines-saint-etienne.png`}
                alt="Mines Saint-Etienne"
                className="logo-v2 logo-left"
            />
            <img
                src={`${process.env.PUBLIC_URL}/image/logo-fei-aix.jpeg`}
                alt="FEI Aix"
                className="logo-v2 logo-right"
            />
        </div>
        <h3 className="bubble-title-v2">Forum des Entreprises</h3>
        <p className="team-text-v2">Membre de l'équipe Forum des Entreprises Aix en Provence</p>
    </div>
);

export const Bubble3 = () => {
    const handleScrollToTop = () => {
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        if (hamburgerMenu) {
            hamburgerMenu.classList.add('active');
            setTimeout(() => {
                hamburgerMenu.classList.remove('active');
            }, 2000);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bubble-content bubble3-content">
            <div className="projects-header-v3">
                <div className="header-with-btn">
                    <h3 className="bubble-title-v3">Projets</h3>
                    <button onClick={handleScrollToTop} className="mini-scroll-btn" title="Remonter en haut">
                        ↑
                    </button>
                </div>
                <p className="projects-subtitle">Explorez mes réalisations</p>
            </div>

            <div className="projects-simple-text">
                Je travaille sur plusieurs projets autour de l'IA, d'applications biomédicales et capteurs embarqués
            </div>

            <div className="projects-tech-logos">
                <svg className="tech-logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                    <path d="M12 6v6h4" />
                </svg>
                <svg className="tech-logo" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <svg className="tech-logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6m0 0v6m0-6h-6m0 0h6" />
                </svg>
                <svg className="tech-logo" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            </div>
        </div>
    );
};

export const Bubble4 = () => (
    <div className="bubble-content bubble4-content">
        <img
            src={`${process.env.PUBLIC_URL}/image/logo-carnot.png`}
            alt="Lycée Carnot"
            className="school-logo-corner logo-top-left"
        />
        <img
            src={`${process.env.PUBLIC_URL}/image/buffon.jpeg`}
            alt="Lycée Buffon"
            className="school-logo-corner logo-top-right"
        />
        <img
            src={`${process.env.PUBLIC_URL}/image/mines-saint-etienne.png`}
            alt="Mines Saint-Etienne"
            className="school-logo-corner logo-bottom-left"
        />

        <div className="education-header-v4">
            <h3 className="bubble-title-v4">Formation</h3>
        </div>

        <div className="education-list-v4">
            <div className="education-item-simple">
                <div>
                    <h4 className="education-title-v4">Prépa PCSI</h4>
                    <p className="education-school-v4">Lycée Carnot, Paris</p>
                    <p className="education-duration-v4">2022 - 2023</p>
                </div>
            </div>

            <div className="education-item-simple">
                <div>
                    <h4 className="education-title-v4">Prépa PSI</h4>
                    <p className="education-school-v4">Lycée Buffon, Paris</p>
                    <p className="education-duration-v4">2023 - 2024</p>
                </div>
            </div>

            <div className="education-item-simple">
                <div>
                    <h4 className="education-title-v4">Ingénieur Microélectronique</h4>
                    <p className="education-school-v4">Mines de Saint-Etienne</p>
                    <p className="education-duration-v4">2022 - 2025</p>
                </div>
            </div>
        </div>
    </div>
);
