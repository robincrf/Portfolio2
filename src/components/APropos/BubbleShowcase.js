import React from 'react';
import { BubbleVariant1, BubbleVariant2, BubbleVariant3 } from './BubbleDesignVariants';
import './BubbleShowcase.css';

/**
 * BUBBLE SHOWCASE PAGE
 * Displays all 3 design variants with descriptions
 */
export const BubbleShowcase = () => {
    return (
        <div className="bubble-showcase">
            <div className="showcase-header">
                <h1 className="showcase-title">Modern Bubble Design Variants</h1>
                <p className="showcase-subtitle">3 Professional, Elegant & Minimalist Designs</p>
            </div>

            <div className="variants-grid">
                {/* VARIANT 1 */}
                <div className="variant-card">
                    <div className="variant-label">
                        <span className="label-icon">01</span>
                        <h2>Neumorphism</h2>
                    </div>
                    <div className="variant-display variant-1-display">
                        <BubbleVariant1 />
                    </div>
                    <div className="variant-info">
                        <h3>Minimalist & Clean</h3>
                        <ul>
                            <li><strong>Style:</strong> Neumorphism - Soft UI</li>
                            <li><strong>Palette:</strong> Soft grays & whites</li>
                            <li><strong>Elements:</strong> Smooth shadows, subtle depth</li>
                            <li><strong>Use Case:</strong> Corporate, Professional</li>
                            <li><strong>Vibe:</strong> Calm, sophisticated, elegant</li>
                        </ul>
                        <div className="color-palette">
                            <div className="color-swatch" style={{background: '#f5f7fa'}}></div>
                            <div className="color-swatch" style={{background: '#c3cfe2'}}></div>
                            <div className="color-swatch" style={{background: '#2d3748'}}></div>
                        </div>
                    </div>
                </div>

                {/* VARIANT 2 */}
                <div className="variant-card">
                    <div className="variant-label">
                        <span className="label-icon">02</span>
                        <h2>Glassmorphism</h2>
                    </div>
                    <div className="variant-display variant-2-display">
                        <BubbleVariant2 />
                    </div>
                    <div className="variant-info">
                        <h3>Modern & Premium</h3>
                        <ul>
                            <li><strong>Style:</strong> Glassmorphism - Frosted Glass</li>
                            <li><strong>Palette:</strong> Rich gradients with blur</li>
                            <li><strong>Elements:</strong> Transparency, backdrop filters</li>
                            <li><strong>Use Case:</strong> Creative, Tech-savvy</li>
                            <li><strong>Vibe:</strong> Modern, luxurious, sophisticated</li>
                        </ul>
                        <div className="color-palette">
                            <div className="color-swatch" style={{background: 'linear-gradient(135deg, #667eea, #764ba2)'}}></div>
                            <div className="color-swatch" style={{background: 'rgba(255, 255, 255, 0.15)'}}></div>
                            <div className="color-swatch" style={{background: '#ffffff'}}></div>
                        </div>
                    </div>
                </div>

                {/* VARIANT 3 */}
                <div className="variant-card">
                    <div className="variant-label">
                        <span className="label-icon">03</span>
                        <h2>Dark Premium</h2>
                    </div>
                    <div className="variant-display variant-3-display">
                        <BubbleVariant3 />
                    </div>
                    <div className="variant-info">
                        <h3>Sophisticated & Luxe</h3>
                        <ul>
                            <li><strong>Style:</strong> Dark Mode Premium</li>
                            <li><strong>Palette:</strong> Dark backgrounds with gradient accents</li>
                            <li><strong>Elements:</strong> Geometric shapes, gradient overlays</li>
                            <li><strong>Use Case:</strong> Design, Creative, Startups</li>
                            <li><strong>Vibe:</strong> Luxury, innovative, futuristic</li>
                        </ul>
                        <div className="color-palette">
                            <div className="color-swatch" style={{background: '#1a202c'}}></div>
                            <div className="color-swatch" style={{background: 'linear-gradient(135deg, #667eea, #764ba2)'}}></div>
                            <div className="color-swatch" style={{background: '#2d3748'}}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="showcase-footer">
                <h2>Key Features</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <span className="feature-icon">✓</span>
                        <h4>Responsive Design</h4>
                        <p>Optimized for desktop, tablet, and mobile devices</p>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">✓</span>
                        <h4>Professional Styling</h4>
                        <p>Premium UI/UX with modern design patterns</p>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">✓</span>
                        <h4>Accessible</h4>
                        <p>WCAG compliant with focus states and semantic HTML</p>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">✓</span>
                        <h4>Customizable</h4>
                        <p>Props-based configuration for all information fields</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BubbleShowcase;
