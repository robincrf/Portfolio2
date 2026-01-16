import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Bubble1, Bubble2, Bubble3, Bubble4, Bubble5 } from './APropos/BubbleComponents';

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

        const currentBubblesRef = bubblesRef.current; // Copy ref to variable for cleanup

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const index = currentBubblesRef.indexOf(entry.target);
                if (entry.isIntersecting) {
                    setVisibleBubbles((prev) => {
                        if (!prev.includes(index)) {
                            return [...prev, index];
                        }
                        return prev;
                    });
                }
            });
        }, observerOptions);

        currentBubblesRef.forEach((bubble) => {
            if (bubble) {
                observer.observe(bubble);
            }
        });

        return () => {
            currentBubblesRef.forEach((bubble) => {
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
                        { component: <Bubble1 /> },
                        { component: <Bubble2 /> },
                        { component: <Bubble3 /> },
                        { component: <Bubble4 /> },
                        { component: <Bubble5 /> }
                    ].map(({ component }, index) => (
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
                    ))}
            </div>
        </section>
    );
}

export default About;
