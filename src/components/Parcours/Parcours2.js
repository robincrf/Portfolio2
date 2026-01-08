import React from 'react';

function Parcours2() {
    return (
        <div className="parcours-container">
            <div className="parcours-content">
                <div className="parcours-text">

                    <div className="parcours-section">
                        <div className='parcours-section-text'>
                            <h3>Expériences Professionnelles</h3>
                            <p>
                                Skiils — Stagiaire analyste qualité des données (2024–2025) <br />
                                Contribution à la mise en place d’un pipeline d’alerte automatique et à l’amélioration des processus de data quality. <br /><br />
                                Junior Mines Provence — Développeur mobile / back-end (2024) <br />
                                Refonte de l’application Citamoove et mise à jour d’API REST (iOS/Android). <br /><br />
                                Évènementiel & coordination (2025) <br />
                                Participation à l’organisation du concours Mines-Télécom et à des missions de coordination d’événements.
                            </p>
                        </div>

                        <div className='parcours-section-add'>
                            <ul className='list-stage-img'>
                                <img src={`${process.env.PUBLIC_URL}/image/fiver.png`} alt="fiverr" />
                                <img src={`${process.env.PUBLIC_URL}/image/skiils.svg`} alt="skiils" />
                                <img src={`${process.env.PUBLIC_URL}/image/citamoove.png`} alt="citamoove" />
                            </ul>
                        </div>
                    </div>

                    <div className="parcours-section">
                        <div className='parcours-section-text'>
                            <h3>Futures expériences</h3>
                            <p>
                                Stage technique (3–5 mois, 2026) <br /> Domaines ciblés : <br />
                                ESN, Ingénierie biomédicale, développement logiciel. <br /><br />

                                Stage de fin d'étude (2027) <br />
                                Objectif : gestion de projets technologiques, IA appliquée ou développement logiciel avancé. <br />
                            </p>
                        </div>

                        <div className='parcours-section-add'>
                            <ul className='list-stage-img'>
                                <img src={`${process.env.PUBLIC_URL}/image/ESN.jpeg`} alt="ESN" />
                                <img src={`${process.env.PUBLIC_URL}/image/biomed.jpeg`} alt="biomed" />
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Parcours2;
