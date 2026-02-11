import React from 'react';
import { motion } from 'framer-motion';
import "../../assets/projet/Projet.css";
import "../../assets/projet/Techno.css";

const Techno = ({ technologies }) => {
    if (!technologies) return null;

    return (
        <div className="tech-container">
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Technologies Used
            </motion.h2>
            <div className="tech-grid">
                {Object.entries(technologies).map(([tech, description], index) => (
                    <motion.div
                        key={tech}
                        className="tech-bubble"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{
                            y: -5,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <h3>{tech}</h3>
                        <p>{description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Techno;
