import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Bubble1, Bubble2, Bubble3, Bubble4 } from './APropos/BubbleComponents';

function About() {
    const bubblesRef = useRef([]);
    const [visibleBubbles, setVisibleBubbles] = useState([]);
    const [isReadyForBubbles, setIsReadyForBubbles] = useState(false);

    useEffect(() => {
        // Attendre que le hero-section soit complètement affiché (animations terminées)
        // Délai de 2.5 secondes pour laisser plus de temps au hero
        const heroDisplayDelay = 2500; // 2.5 secondes

        const timer = setTimeout(() => {
            setIsReadyForBubbles(true);
        }, heroDisplayDelay);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isReadyForBubbles) return;

        const observerOptions = {
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const index = bubblesRef.current.indexOf(entry.target);
                if (entry.isIntersecting) {
                    setVisibleBubbles((prev) => {
                        if (!prev.includes(index)) {
                            return [...prev, index];
                        }
                        return prev;
                    });
                }
                // Removed: else block that was removing bubbles when not intersecting
                // Les bulles restent visibles une fois affichées
            });
        }, observerOptions);

        bubblesRef.current.forEach((bubble) => {
            if (bubble) {
                observer.observe(bubble);
            }
        });

        return () => {
            bubblesRef.current.forEach((bubble) => {
                if (bubble) {
                    observer.unobserve(bubble);
                }
            });
        };
    }, [isReadyForBubbles]);

    const bubbleVariants = (direction, index) => ({
        hidden: {
            opacity: 0,
            x: direction === 'left' ? -100 : 100,
            y: 20,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
                delay: index * 0.15, // Stagger entre les bulles (150ms)
            },
        },
        exit: {
            opacity: 0,
            x: direction === 'left' ? -100 : 100,
            transition: {
                duration: 0.5,
                ease: 'easeIn',
            },
        },
    });

    return (
        <section className="about-section">
            <h2 className="about-title">À propos de moi</h2>
            <div className="bubbles-container">
                {isReadyForBubbles &&
                    [
                        { component: <Bubble1 />, type: 'content' },
                        { component: <Bubble2 />, type: 'content' },
                        { component: <Bubble3 />, type: 'content' },
                        { component: <Bubble4 />, type: 'content' },
                        { component: null, type: 'video' }
                    ].map(({ component, type }, index) =>
                        type === 'video' ? (
                            <motion.div
                                key={index}
                                className="bubble bubble-video"
                                ref={(el) => (bubblesRef.current[index] = el)}
                                initial="hidden"
                                animate={visibleBubbles.includes(index) ? 'visible' : 'exit'}
                                variants={bubbleVariants('right')}
                            >
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="video-background"
                                >
                                    <source
                                        src={`${process.env.PUBLIC_URL}/video/stickman.mp4`}
                                        type="video/mp4"
                                    />
                                    Votre navigateur ne supporte pas la balise vidéo.
                                </video>
                                <div className="text-overlay">
                                    Combattant et fan de sport de combat
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key={index}
                                className={`bubble bubble${index + 1}`}
                                ref={(el) => (bubblesRef.current[index] = el)}
                                initial="hidden"
                                animate={visibleBubbles.includes(index) ? 'visible' : 'exit'}
                                variants={bubbleVariants(index % 2 === 0 ? 'left' : 'right', index)}
                            >
                                {component}
                            </motion.div>
                        )
                    )}
            </div>
        </section>
    );
}

export default About;
