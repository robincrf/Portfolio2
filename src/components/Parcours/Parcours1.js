import React from 'react';
function Parcours1() {
    return (
        <div className="parcours-container">
            <div className="parcours-content">
                <div className="parcours-text">
                    <div className="parcours-section">

                        <div className='parcours-section-text'>
                            <h3>Education</h3>
                            <p>
                                <b>Mines Saint-Étienne</b> — Top 10 engineering school - France (2024–2027)<br />
                                Engineering Degree in Computer Science and Data Science.<br /><br />

                                <b>Lycée Buffon</b> — Paris (2022–2024)<br />
                                Intensive Preparatory Classes (CPGE PSI) — Advanced Mathematics and Physics.
                            </p>
                        </div>

                        <div className='parcours-section-add'>
                            <ul className='list-stage-img'>
                                <img src={`${process.env.PUBLIC_URL}/image/mines-saint-etienne.png`} alt="Mines Saint-Étienne" />
                                <img src={`${process.env.PUBLIC_URL}/image/buffon.jpeg`} alt="Lycée Buffon" />
                            </ul>
                        </div>
                    </div>
                    <div className="parcours-section">
                        <div className='parcours-section-text'>
                            <h3>Profile</h3>
                            <p>
                                Engineering student specializing in Data Science and AI, passionate about transforming data into actionable business insights.<br />
                                Experienced in building AI solutions and translating technical outputs into decision-ready recommendations.<br /><br />
                                Seeking a 4–5 month Data/AI consulting internship starting April 2026.
                            </p>
                        </div>
                    </div>
                    <div className="parcours-section">
                        <div className='parcours-section-text'>
                            <h3>Languages & Interests</h3>
                            <p>
                                <b>French:</b> Native | <b>English:</b> C1 (Professional) | <b>Spanish:</b> B2<br /><br />
                                <b>Interests:</b> Combat sports, applied AI, geopolitics, reading.
                            </p>
                        </div>
                    </div>
                    <div className='scroll-right'>Scroll right!</div>
                </div>
            </div>
        </div>
    );
}

export default Parcours1;
