import React from 'react';
import '../../assets/projet/ECGResults.css';

const ECGResults = () => {
    const logs = [
        { type: 'INFO', message: 'Loading ECG signal from: ecg_data/patient_07.csv' },
        { type: 'INFO', message: 'Signal length: 5000 samples | Sampling rate: 360 Hz' },
        { type: 'INFO', message: 'Starting preprocessing...' }
    ];

    const preprocessing = [
        { type: 'OK', message: 'Band-pass filter applied (5-15 Hz)' },
        { type: 'OK', message: 'Baseline wander removed' },
        { type: 'OK', message: 'Derivative + Squaring + Moving window integration completed' },
        { type: 'INFO', message: 'Detecting R-peaks...' }
    ];

    const rPeaks = [
        { time: 0.82, amplitude: 1.84 },
        { time: 1.60, amplitude: 1.91 },
        { time: 2.42, amplitude: 1.87 },
        { time: 3.21, amplitude: 1.80 },
        { time: 4.03, amplitude: 1.89 }
    ];

    const predictions = [
        { beat: 1, type: 'Normal Sinus Rhythm', warning: false },
        { beat: 2, type: 'Extrasystole Ventriculaire', warning: true },
        { beat: 3, type: 'Normal Sinus Rhythm', warning: false },
        { beat: 4, type: 'Normal Sinus Rhythm', warning: false },
        { beat: 5, type: 'Atrial Fibrillation', warning: true }
    ];

    const results = {
        accuracy: 96.3,
        processingTime: 42
    };

    return (
        <div className="ecg-results-container">
            {/* Loading Section */}
            <div className="log-section">
                <h3 className="section-title">📥 Chargement du signal</h3>
                <div className="logs">
                    {logs.map((log, idx) => (
                        <div key={idx} className={`log-line type-${log.type.toLowerCase()}`}>
                            <span className="log-type">[{log.type}]</span>
                            <span className="log-message">{log.message}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Preprocessing Section */}
            <div className="log-section">
                <h3 className="section-title">⚙️ Prétraitement</h3>
                <div className="logs">
                    {preprocessing.map((log, idx) => (
                        <div key={idx} className={`log-line type-${log.type.toLowerCase()}`}>
                            <span className="log-type">[{log.type}]</span>
                            <span className="log-message">{log.message}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* R-Peaks Detection */}
            <div className="log-section">
                <h3 className="section-title">🔍 Détection des pics R</h3>
                <div className="r-peaks-grid">
                    {rPeaks.map((peak, idx) => (
                        <div key={idx} className="r-peak-card">
                            <div className="peak-label">[R-PEAK]</div>
                            <div className="peak-data">
                                <div className="peak-time">
                                    <span className="label">t =</span>
                                    <span className="value">{peak.time.toFixed(2)}s</span>
                                </div>
                                <div className="peak-amplitude">
                                    <span className="label">amplitude =</span>
                                    <span className="value">{peak.amplitude.toFixed(2)} mV</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Feature Extraction */}
            <div className="log-section">
                <h3 className="section-title">📊 Extraction de features</h3>
                <div className="logs">
                    <div className="log-line type-info">
                        <span className="log-type">[INFO]</span>
                        <span className="log-message">Extracting features (RR interval, HRV, QRS energy...)</span>
                    </div>
                    <div className="log-line type-info">
                        <span className="log-type">[INFO]</span>
                        <span className="log-message">Sending features to AI model (ONNX inference)...</span>
                    </div>
                </div>
            </div>

            {/* AI Predictions */}
            <div className="log-section">
                <h3 className="section-title">🤖 Prédictions IA</h3>
                <div className="predictions-container">
                    {predictions.map((pred, idx) => (
                        <div key={idx} className={`prediction-card ${pred.warning ? 'warning' : 'normal'}`}>
                            <div className="prediction-beat">Beat #{pred.beat}</div>
                            <div className="prediction-type">{pred.type}</div>
                            {pred.warning && <div className="warning-badge">⚠️ Anomalie détectée</div>}
                        </div>
                    ))}
                </div>
            </div>

            {/* Final Results */}
            <div className="results-section">
                <h3 className="section-title">📈 Résultats</h3>
                <div className="results-grid">
                    <div className="result-card">
                        <div className="result-label">Accuracy</div>
                        <div className="result-value">{results.accuracy}%</div>
                        <div className="result-bar">
                            <div className="result-fill" style={{width: `${results.accuracy}%`}}></div>
                        </div>
                    </div>
                    <div className="result-card">
                        <div className="result-label">Processing Time</div>
                        <div className="result-value">{results.processingTime} ms</div>
                        <div className="result-note">⚡ Temps réel quasi-instantané</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ECGResults;
