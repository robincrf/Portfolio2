import React from 'react';

function Parcours3() {
    return (
        <div className="parcours-container">
            <div className="parcours-content">
                <div className="parcours-text">

                    {/* --- Bloc 1: Skills --- */}
                    <div className="parcours-section">
                        <div className='parcours-section-text'>
                            <h3>Skills</h3>
                            <p>
                                <b>Data & Strategy:</b> Data quality, KPI design, Machine Learning, Deep Learning, statistical reasoning, business analytics.<br /><br />
                                <b>Tech Stack:</b> Python (Pandas, Scikit-learn, PyTorch), SQL, C/C++, React, Node.js, Power BI, Great Expectations.
                            </p>
                        </div>

                        <div className='parcours-section-add'>
                            <ul className='list-stage-img'>
                                <img src={`${process.env.PUBLIC_URL}/image/datascience.png`} alt="Data Science" />
                                <img src={`${process.env.PUBLIC_URL}/image/python.jpeg`} alt="Python" />
                                <img src={`${process.env.PUBLIC_URL}/image/pytorch.jpeg`} alt="PyTorch" />
                            </ul>
                        </div>
                    </div>

                    {/* --- Bloc 2: GenAI & Projects --- */}
                    <div className="parcours-section">
                        <div className='parcours-section-text'>
                            <h3>GenAI & Solution Design Experience</h3>
                            <p>
                                <b>Stock Price Forecasting — ML vs Deep Learning (2025)</b><br />
                                ○ Designed an end-to-end financial forecasting pipeline using ML and Deep Learning.<br />
                                ○ Implemented backtesting to evaluate real-world investment performance.<br />
                                ○ Compared multiple models (Random Forest, LSTM) to identify the most reliable forecasting strategy.<br />
                                ○ Communicated model limitations and business implications of predictive uncertainty.<br /><br />

                                <b>Engineering Career Fair Organization (2025)</b><br />
                                Logistics & Company Relations Lead<br />
                                ○ Managed relationships with 55+ partner companies, including outreach, coordination and operational support.<br />
                                ○ Acted as main point of contact for participating companies to ensure a smooth event experience.<br />
                                ○ Coordinated logistics for an event hosting 400+ students and multiple stakeholders.
                            </p>
                        </div>

                        <div className='parcours-section-add'>
                            <ul className='list-stage-img'>
                                <img src={`${process.env.PUBLIC_URL}/image/ia.jpeg`} alt="AI" />
                                <img src={`${process.env.PUBLIC_URL}/image/yfinance.png`} alt="yfinance" />
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Parcours3;
