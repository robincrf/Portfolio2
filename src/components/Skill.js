import React, { useState } from 'react';
import '../assets/skills-identity.css';

function Skill() {
    const [activeSkill, setActiveSkill] = useState(null);

    const skills = {
        Python: {
            shortDesc: "Data Science, ML & Generative AI",
            items: ['Pandas', 'scikit-learn', 'PyTorch', 'Great Expectations'],
            imageSrc: `${process.env.PUBLIC_URL}/image/python.jpeg`
        },
        SQL: {
            shortDesc: "Data querying & analytics",
            items: ['Data extraction', 'Joins & CTEs', 'Aggregation', 'KPI building'],
            imageSrc: `${process.env.PUBLIC_URL}/image/sql.png`
        },
        'Power BI': {
            shortDesc: "BI dashboards & data storytelling",
            items: ['Data modeling', 'DAX basics', 'KPI dashboards', 'Business reporting'],
            imageSrc: `${process.env.PUBLIC_URL}/image/powerbi.jpeg`
        },
        'C / C++': {
            shortDesc: "Systems programming & performance",
            items: ['Memory management', 'Algorithms', 'Optimization', 'Embedded basics'],
            imageSrc: `${process.env.PUBLIC_URL}/image/c++.jpeg`
        },
        React: {
            shortDesc: "Modern frontend development",
            items: ['Hooks', 'Components', 'State management', 'UI integration'],
            imageSrc: `${process.env.PUBLIC_URL}/image/react.png`
        },
        'Node.js': {
            shortDesc: "Backend APIs & scalable services",
            items: ['Express', 'REST APIs', 'Auth & middleware', 'Deployment basics'],
            imageSrc: `${process.env.PUBLIC_URL}/image/node.webp`
        }
    };

    return (
        <section className="skills-identity-container">
            <div className="skills-id-card">
                {/* --- LEFT PANEL: BUSINESS CARD --- */}
                <div className="skills-id-left">
                    <div className="business-card-content">
                        <img
                            src={`${process.env.PUBLIC_URL}/image/logo_robin.png`}
                            alt="Logo"
                            className="business-card-logo"
                        />
                        <div className="business-card-text">
                            <h2 className="skills-id-title">Robin Crifo</h2>
                            <p className="skills-id-subtitle">Aspiring Data Scientist & AI Engineer</p>
                            <p
                                style={{
                                    fontFamily: "'Courier New', monospace",
                                    fontSize: '0.9rem',
                                    color: '#666',
                                    marginTop: '0.5rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}
                            >
                                Mines Saint-Étienne
                            </p>
                            <div className="business-card-divider"></div>
                        </div>
                    </div>

                    <div
                        style={{
                            marginBottom: '1.5rem',
                            fontFamily: "'Helvetica Neue', sans-serif",
                            color: '#444',
                            fontSize: '0.95rem'
                        }}
                    >
                        robin.crifo@etu.emse.fr
                    </div>

                    <div className="business-card-socials">
                        <a href="https://github.com/robincrf" target="_blank" rel="noopener noreferrer" style={{ color: '#333' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ cursor: 'pointer' }}>
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/robin-crifo-691492331/" target="_blank" rel="noopener noreferrer" style={{ color: '#0077b5' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ cursor: 'pointer' }}>
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* --- RIGHT PANEL: SKILLS --- */}
                <div className="skills-id-right">
                    <div className="skills-flip-container">
                        <div className={`skills-flipper ${activeSkill ? 'is-flipped' : ''}`}>
                            {/* FRONT FACE: LIST VIEW */}
                            <div className="skills-front">
                                <h3 className="skills-section-header">SKILLS</h3>
                                <p className="skills-intro-text">
                                    Click on a technology to see details.
                                </p>

                                <div className="skills-id-grid">
                                    {Object.entries(skills).map(([name, data]) => (
                                        <div
                                            className="skill-card-item"
                                            key={name}
                                            onClick={() => setActiveSkill(name)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <img src={data.imageSrc} alt={name} className="skill-icon-mini" />
                                            <div className="skill-card-text">
                                                <span className="skill-name">{name}</span>
                                                <span className="skill-short-desc">{data.shortDesc}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* BACK FACE: DETAIL VIEW */}
                            <div className="skills-back">
                                {activeSkill && (
                                    <div className="skill-detail-view">
                                        <button
                                            className="back-btn"
                                            onClick={() => setActiveSkill(null)}
                                        >
                                            ← Back
                                        </button>
                                        <div className="detail-header">
                                            <img src={skills[activeSkill].imageSrc} alt="" className="detail-icon" />
                                            <h3 className="detail-title">{activeSkill}</h3>
                                        </div>
                                        <p className="detail-desc">{skills[activeSkill].shortDesc}</p>
                                        <ul className="detail-list">
                                            {skills[activeSkill].items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill;
