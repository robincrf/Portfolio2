import React from 'react';
import '../../assets/projet/AlertEmail.css';

const AlertEmail = () => {
    const metrics = [
        {
            kpi: 'Taux de Complétude',
            value: '98.2%',
            threshold: '> 99.0%',
            status: 'warning',
            details: 'Champs obligatoires manquants (Table: USERS)'
        },
        {
            kpi: 'Unicité (ID)',
            value: '100%',
            threshold: '100%',
            status: 'success',
            details: 'Aucun doublon détecté'
        },
        {
            kpi: 'Validité (Email)',
            value: '94.5%',
            threshold: '> 98.0%',
            status: 'critical',
            details: 'Format invalide détecté sur 342 lignes'
        },
        {
            kpi: 'Fraîcheur',
            value: '2h 14m',
            threshold: '< 4h',
            status: 'success',
            details: 'Dernière ingestion à 08:30:00'
        }
    ];

    return (
        <div className="alert-email-container">
            {/* Email Mockup Header */}
            <div className="email-meta">
                <div className="meta-row">
                    <span className="meta-label">De:</span>
                    <span className="meta-value">dq-pipeline-noreply@decathlon.com</span>
                </div>
                <div className="meta-row">
                    <span className="meta-label">Objet:</span>
                    <span className="meta-value"><strong>[ALERT] Rapport Quotidien Data Quality - Ingestion Client</strong></span>
                </div>
                <div className="meta-row">
                    <span className="meta-label">Date:</span>
                    <span className="meta-value">Mar 7 Jan 2026, 08:35</span>
                </div>
            </div>

            <div className="email-body">
                <p>Bonjour,</p>
                <p>
                    Le pipeline de qualité de données s'est exécuté ce matin sur les flux <strong>Ventes en Ligne</strong> et <strong>Physiques</strong>.
                </p>
                <div className="email-context-box">
                    <p><strong>Contexte du traitement :</strong></p>
                    <p>Analyse Big Data segmentée par <strong>Pays</strong> et <strong>Période</strong>.</p>
                    <p>Périmètre de validation (7 critères) : <em>Complétude, Exactitude, Validité, Unicité, Cohérence, Intégrité Référentielle, Fraîcheur.</em></p>
                </div>

                <p>Veuillez trouver ci-dessous le résumé des indicateurs clés (KPIs) :</p>

                <table className="dq-table">
                    <thead>
                        <tr>
                            <th>Indicateur</th>
                            <th>Valeur</th>
                            <th>Seuil</th>
                            <th>Statut</th>
                            <th>Détails</th>
                        </tr>
                    </thead>
                    <tbody>
                        {metrics.map((metric, idx) => (
                            <tr key={idx} className={`row-${metric.status}`}>
                                <td className="col-kpi">{metric.kpi}</td>
                                <td className="col-val">{metric.value}</td>
                                <td className="col-threshold">{metric.threshold}</td>
                                <td className="col-status">
                                    <span className={`status-pill ${metric.status}`}>
                                        {metric.status.toUpperCase()}
                                    </span>
                                </td>
                                <td className="col-details">{metric.details}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="email-actions">
                    <p>⚠️ <strong>Action requise :</strong> Merci d'investiguer les anomalies critiques (Validité Email).</p>
                </div>
            </div>
        </div>
    );
};

export default AlertEmail;
