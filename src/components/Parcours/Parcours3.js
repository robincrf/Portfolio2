import React from 'react';

function Parcours3() {
    return (
        <div className="parcours-container">
            <div className="parcours-content">
                <div className="parcours-text">

                    {/* --- Bloc 1 : Compétences Techniques --- */}
                    <div className="parcours-section">
                        <div className='parcours-section-text'>
                            <h3>Compétences Techniques</h3>
                            <p>
                                Maîtrise des langages bas niveau (C, C++, VHDL) appliqués à la modélisation,
                                l’optimisation algorithmique et le traitement du signal. <br/>

                                Expérience en intelligence artificielle et data science : prétraitement de signaux, 
                                extraction de caractéristiques, conception de réseaux neuronaux (CNN) pour la détection d’anomalies. <br/>
                                projet en système et programmation embarqué, réseau Lora et solution IOT.

                            </p>
                        </div>

                        <div className='parcours-section-add'>
                            <ul className='list-stage-img'>
                                <img src={`${process.env.PUBLIC_URL}/image/biomed.jpeg`} alt="AES"/>
                                <img src={`${process.env.PUBLIC_URL}/image/cpp.png`} alt="C++"/>
                                <img src={`${process.env.PUBLIC_URL}/image/pytorch.jpeg`} alt="rootme"/>
                            </ul>
                        </div>
                    </div>

                    {/* --- Bloc 2 : Projets réalisés --- */}
                    <div className="parcours-section">
                        <div className='parcours-section-text'>
                            <h3>Projets réalisés</h3>
                            <p>
                                <b>Prédiction du cours de bourse (ML, Python)</b> <br/> - Développement d’une IA de modélisation de marché basée sur NLP et réseaux neuronaux. Stack : Python, PyTorch/TensorFlow,<br/>

                                <b>Implémentation du chiffrement ASCON en VHDL</b><br/> — Réalisation d’un module matériel conforme
                                aux spécifications NIST pour le chiffrement léger. <br/>

                                <b>Détection d’anomalies cardiaques (C++)</b> <br/> — Nettoyage des signaux ECG, extraction de features
                                et création d’un CNN pour la classification d’arythmies. <br/>

                                <b>Capteur d’apnée du sommeil</b> <br/> — Conception électronique, acquisition de signaux physiologiques
                                et traitement embarqué pour la détection d’événements respiratoires.
                            </p>
                        </div>

                        <div className='parcours-section-add'>
                            <ul className='list-stage-img'>
                                {/* Images conservées telles qu’à l’origine */}
                                <img src={`${process.env.PUBLIC_URL}/image/AES.png`} alt="AES"/>
                                <img src={`${process.env.PUBLIC_URL}/image/capteur.jpeg`} alt="C++"/>
                                <img src={`${process.env.PUBLIC_URL}/image/ascon.jpeg`} alt="rootme"/>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Parcours3;
