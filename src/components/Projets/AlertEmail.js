import React from 'react';
import '../../assets/projet/AlertEmail.css';

const AlertEmail = () => {
    const metrics = [
        {
            kpi: 'Completeness Rate',
            value: '98.2%',
            threshold: '> 99.0%',
            status: 'warning',
            details: 'Missing required fields (Table: USERS)'
        },
        {
            kpi: 'Uniqueness (ID)',
            value: '100%',
            threshold: '100%',
            status: 'success',
            details: 'No duplicates detected'
        },
        {
            kpi: 'Validity (Email)',
            value: '94.5%',
            threshold: '> 98.0%',
            status: 'critical',
            details: 'Invalid format detected on 342 rows'
        },
        {
            kpi: 'Freshness',
            value: '2h 14m',
            threshold: '< 4h',
            status: 'success',
            details: 'Last ingestion at 08:30:00'
        }
    ];

    return (
        <div className="alert-email-container">
            {/* Email Mockup Header */}
            <div className="email-meta">
                <div className="meta-row">
                    <span className="meta-label">From:</span>
                    <span className="meta-value">dq-pipeline-noreply@decathlon.com</span>
                </div>
                <div className="meta-row">
                    <span className="meta-label">Subject:</span>
                    <span className="meta-value"><strong>[ALERT] Daily Data Quality Report - Customer Ingestion</strong></span>
                </div>
                <div className="meta-row">
                    <span className="meta-label">Date:</span>
                    <span className="meta-value">Tue 7 Jan 2026, 08:35</span>
                </div>
            </div>

            <div className="email-body">
                <p>Hello,</p>
                <p>
                    The data quality pipeline ran this morning on the <strong>Online Sales</strong> and <strong>In-Store</strong> data feeds.
                </p>
                <div className="email-context-box">
                    <p><strong>Processing context:</strong></p>
                    <p>Big Data analysis segmented by <strong>Country</strong> and <strong>Period</strong>.</p>
                    <p>Validation scope (7 criteria): <em>Completeness, Accuracy, Validity, Uniqueness, Consistency, Referential Integrity, Freshness.</em></p>
                </div>

                <p>Please find below the summary of key performance indicators (KPIs):</p>

                <table className="dq-table">
                    <thead>
                        <tr>
                            <th>Indicator</th>
                            <th>Value</th>
                            <th>Threshold</th>
                            <th>Status</th>
                            <th>Details</th>
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
                    <p>⚠️ <strong>Action required:</strong> Please investigate the critical anomalies (Email Validity).</p>
                </div>
            </div>
        </div>
    );
};

export default AlertEmail;
