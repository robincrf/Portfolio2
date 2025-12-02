import React from 'react';
import '../../assets/projet/AlertEmail.css';

const AlertEmail = () => {
    const metrics = [
        {
            title: 'Complétude',
            value: 87.25,
            status: 'warning',
            description: 'résultat de complétude alerte complétude inférieure à 90%'
        },
        {
            title: 'Unicité',
            value: 0,
            status: 'critical',
            description: 'résultat d\'unicité Tvb, Unicité égale'
        },
        {
            title: 'Timeliness',
            value: 0,
            status: 'critical',
            description: 'résultat de timeliness Tvb, Temporalité égale'
        },
        {
            title: 'Intégrité',
            value: 17064635,
            status: 'critical',
            description: 'résultat d\'intégrité alerte écart trop grand entre le reporting et le tracking',
            isGap: true
        }
    ];

    return (
        <div className="alert-email-container">
            <div className="email-header">
                <h2>Alerte quotidienne - Qualité des données</h2>
                <p className="email-subtitle">Résumé de la qualité des données globales</p>
            </div>

            <div className="metrics-grid">
                {metrics.map((metric, idx) => (
                    <div key={idx} className={`metric-card status-${metric.status}`}>
                        <div className="metric-header">
                            <h3>{metric.title}</h3>
                            <span className={`status-badge ${metric.status}`}>
                                {metric.status === 'critical' ? '⚠️' : '⚡'}
                            </span>
                        </div>
                        <div className="metric-value">
                            {metric.isGap ? (
                                <span className="gap-value">{metric.value.toLocaleString()}</span>
                            ) : (
                                <span className="percentage-value">{metric.value}%</span>
                            )}
                        </div>
                        <p className="metric-description">{metric.description}</p>
                    </div>
                ))}
            </div>

            <div className="alert-footer">
                <p className="footer-message">
                    ✓ Merci de prendre les mesures nécessaires pour corriger les anomalies identifiées.
                </p>
                <p className="footer-note">
                    Cet email est généré automatiquement. Veuillez ne pas répondre directement à ce message.
                </p>
            </div>
        </div>
    );
};

export default AlertEmail;
