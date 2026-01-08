import React from 'react';
import { motion } from 'framer-motion';
import "../../assets/projet/Projet.css";

import AlertEmail from './AlertEmail';
import ECGResults from './ECGResults';
import KPMGRagDemo from './KPMGRagDemo';

const Presentation = ({ projet = {} }) => {
    if (!projet) return null;

    const {
        titre = '',
        description = '',
        contexte = '',
        objectifs = [],
        images = []
    } = projet;

    // Check project types
    const isDataQualityProject = titre.includes('Data Quality');
    const isECGProject = titre.includes('anomalies cardiaques') || titre.includes('ECG');
    const isKPMGProject = titre.includes('KPMG');

    return (
        <section className="projet-presentation">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1>{titre}</h1>
                <p>{description}</p>
            </motion.div>

            {contexte && (
                <motion.div
                    className="contexte"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2>Contexte</h2>
                    <p>{contexte}</p>
                </motion.div>
            )}

            {objectifs.length > 0 && (
                <motion.div
                    className="objectifs"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h2>Objectifs</h2>
                    <ul>
                        {objectifs.map((obj, index) => (
                            <li key={index}>{obj}</li>
                        ))}
                    </ul>
                </motion.div>
            )}

            {images.length > 0 && (
                <div className="projet-images">
                    {images.map((img, index) => {
                        // For ECG project
                        if (isECGProject && index === 1) {
                            return <ECGResults key={index} />;
                        }
                        // For data quality project
                        if (isDataQualityProject && index === 0) {
                            return <AlertEmail key={index} />;
                        }
                        // For KPMG project
                        if (isKPMGProject && index === 0) {
                            return <KPMGRagDemo key={index} />;
                        }
                        return (
                            <motion.img
                                key={index}
                                src={img}
                                alt={`${titre} aperçu ${index + 1}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            />
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default Presentation;
