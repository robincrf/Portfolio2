import React from 'react';
import '../../assets/BubbleComponents.css';

/* 
 * Shared Card Component 
 * This reduces code duplication and ensures consistency.
 */
const InfoCard = ({ year, title, description, imageSrc, videoSrc, themeClass }) => (
    <div className={`bubble-content ${themeClass}`}>
        <div
            className="card-media"
            style={imageSrc ? { backgroundImage: `url(${imageSrc})` } : {}}
        >
            {videoSrc && (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 0
                    }}
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            )}
        </div>
        <div className="card-content">
            <div className="card-year">{year}</div>
            <div className="card-title">{title}</div>
            <p className="card-description">
                {description}
            </p>
        </div>
    </div>
);

/* BUBBLE 1: PROFILE */
export const Bubble1 = () => (
    <InfoCard
        year="2026"
        title="Robin Crifo"
        description="Aspiring Data Scientist & AI Engineer focused on building AI and analytics solutions for real business impact."
        imageSrc={`${process.env.PUBLIC_URL}/image/tete.jpg`}
        themeClass="theme-blue"
    />
);

/* BUBBLE 2: EXPERIENCE */
export const Bubble2 = () => (
    <InfoCard
        year="Experience"
        title="Professional Experience"
        description="Data Quality Consultant Intern (Decathlon), Full-Stack Developer, Company Relations Lead for Engineering Career Fair."
        imageSrc={`${process.env.PUBLIC_URL}/image/bureau.png`}
        themeClass="theme-purple"
    />
);

/* BUBBLE 3: PROJECTS */
export const Bubble3 = () => (
    <InfoCard
        year="Projects"
        title="GenAI & Data Projects"
        description="GenAI market intelligence platform (KPMG Hackathon finalist), stock price forecasting (ML vs LSTM), real-time ECG arrhythmia detection."
        imageSrc={`${process.env.PUBLIC_URL}/image/ia_data.png`}
        themeClass="theme-green"
    />
);

/* BUBBLE 4: EDUCATION */
export const Bubble4 = () => (
    <InfoCard
        year="2024–2027"
        title="Education"
        description="Engineering Degree at Mines Saint-Étienne (Computer Science, Microelectronics & Data Science)."
        imageSrc={`${process.env.PUBLIC_URL}/image/mines_saint_etienne.jpg`}
        themeClass="theme-orange"
    />
);

/* BUBBLE 5: PASSIONS */
export const Bubble5 = () => (
    <InfoCard
        year="Interests"
        title="Combat Sports"
        description="Boxing, Brazilian Jiu-Jitsu and MMA practitioner. Passionate about discipline, performance and competition."
        videoSrc={`${process.env.PUBLIC_URL}/video/stickman.mp4`}
        themeClass="theme-orange"
    />
);
