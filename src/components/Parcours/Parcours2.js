import React from 'react';

function Parcours2() {
    return (
        <div className="parcours-container">
            <div className="parcours-content">
                <div className="parcours-text">

                    <div className="parcours-section">
                        <div className='parcours-section-text'>
                            <h3>Professional Experience</h3>
                            <p>
                                <b>KPMG Hackathon — Finalist (2026)</b><br />
                                ○ Built a GenAI RAG pipeline for competitive intelligence and pitched it to senior consultants.<br /><br />

                                <b>Skiils / Decathlon — Data Quality Intern (2025)</b><br />
                                ○ Audited supply chain data and built automated validation pipelines (Python, Great Expectations).<br /><br />

                                <b>Junior Mines Provence — Full-Stack Developer (2025)</b><br />
                                ○ Redesigned backend architecture and managed deployment on mobile stores.
                            </p>
                        </div>

                        <div className='parcours-section-add'>
                            <ul className='list-stage-img'>
                                <img src={`${process.env.PUBLIC_URL}/image/kpmg.png`} alt="KPMG" />
                                <img src={`${process.env.PUBLIC_URL}/image/Decathlon.jpeg`} alt="Decathlon" />
                                <img src={`${process.env.PUBLIC_URL}/image/citamoove.png`} alt="Citamoove" />
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Parcours2;
