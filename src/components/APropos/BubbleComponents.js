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

/* 
 * BUBBLE 1: PROFILE
 * Theme: Blue
 */
export const Bubble1 = () => (
    <InfoCard
        year="2026"
        title="Robin Crifo"
        description="Etudiant Ingénieur, intéressé par l'application des solutions Data & IA"
        imageSrc={`${process.env.PUBLIC_URL}/image/tete.jpg`} // Using existing logo as profile placeholder
        themeClass="theme-blue"
    />
);

/* 
 * BUBBLE 2: EXPERIENCE
 * Theme: Purple
 */
export const Bubble2 = () => (
    <InfoCard
        year="2024"
        title="Expériences"
        description="Data Quality Analyst, Developper IOS/ANDROID, membre du forum des entreprises ISMIN"
        imageSrc={`${process.env.PUBLIC_URL}/image/bureau.png`}
        themeClass="theme-purple"
    />
);

/* 
 * BUBBLE 3: PROJECTS
 * Theme: Green
 */
export const Bubble3 = () => (
    <InfoCard
        year="Projets"
        title="Réalisations"
        description="Capteur d'apnée du sommeil, pipeline d'alerting qualité de données, solution de veille de marché, deep learning pour la détection d'arythmie cardiaque"
        imageSrc={`${process.env.PUBLIC_URL}/image/ia_data.png`}
        themeClass="theme-green"
    />
);

/* 
 * BUBBLE 4: EDUCATION
 * Theme: Orange
 */
export const Bubble4 = () => (
    <InfoCard
        year="2025-2027"
        title="Formation"
        description="Cycle Ingénieur Système microélectronique et informatique des Mines de Saint-Étienne."
        imageSrc={`${process.env.PUBLIC_URL}/image/mines_saint_etienne.jpg`}
        themeClass="theme-orange"
    />
);

/* 
 * BUBBLE 5: PASSIONS (VIDEO)
 * Theme: Red (Reusing Orange styles or defining new if needed, but styling allows any class)
 * actually I will utilize theme-orange or any existing, let's use theme-orange for consistency or add a theme-red if CSS supported it.
 * But CSS only has 4 themes. I will use theme-orange again or maybe theme-blue.
 * Let's use theme-orange for now.
 */
export const Bubble5 = () => (
    <InfoCard
        year="Loisirs"
        title="Sports"
        description="Combattant et fan de sport de combat. Pratiquant de boxe anglaise, jujusti brésilien et mma"
        videoSrc={`${process.env.PUBLIC_URL}/video/stickman.mp4`}
        themeClass="theme-orange"
    />
);
