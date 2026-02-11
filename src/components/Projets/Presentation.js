import React from 'react';
import { motion } from 'framer-motion';
import "../../assets/projet/Projet.css";

import AlertEmail from './AlertEmail';
import ECGResults from './ECGResults';


const Presentation = ({ projet = {} }) => {
    if (!projet) return null;

    const {
        title = '',
        description = '',
        context = '',
        objectives = [],
        images = []
    } = projet;

    // Check project types
    const isDataQualityProject = title.includes('Data Quality');
    const isECGProject = title.includes('Cardiac') || title.includes('ECG');
    const isKPMGProject = title.includes('KPMG');

    return (
        <section className="projet-presentation">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1>{title}</h1>
                <p>{description}</p>
            </motion.div>

            {context && (
                <motion.div
                    className="contexte"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2>Context</h2>
                    <p>{context}</p>
                </motion.div>
            )}

            {objectives.length > 0 && (
                <motion.div
                    className="objectifs"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h2>Objectives</h2>
                    <ul>
                        {objectives.map((obj, index) => (
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

                        return (
                            <motion.img
                                key={index}
                                src={img}
                                alt={`${title} preview ${index + 1}`}
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
