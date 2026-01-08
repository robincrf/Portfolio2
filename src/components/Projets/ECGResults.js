import React from 'react';
import '../../assets/projet/ECGResults.css';

const ECGResults = () => {
    // Simulation de logs C++ / Deep Learning
    const logs = [
        { time: '00:00:00', level: 'INFO', msg: 'Init. Système: Threads CPU=8, Mémoire=16Go' },
        { time: '00:00:01', level: 'INFO', msg: 'Chargement modèle: "ecg_net_v2.onnx" (FP16)' },
        { time: '00:00:02', level: 'SUCCESS', msg: 'Modèle chargé en 14ms' },
        { time: '00:00:02', level: 'DEBUG', msg: 'Allocation tenseurs entrée [1, 1, 5000]...' },
        { time: '00:00:02', level: 'INFO', msg: 'Prétraitement: Filtre Butterworth (Passe-bas 40Hz)' },
        { time: '00:00:03', level: 'INFO', msg: 'Prétraitement: Normalisation (Z-Score)' },
        { time: '00:00:03', level: 'DEBUG', msg: 'Démarrage inférence...' },
        { time: '00:00:03', level: 'SUCCESS', msg: 'Inférence terminée: 3.2ms' },
    ];

    const results = {
        class: "Rythme Sinusal Normal",
        probability: "98.87%",
        bpm: "72 BPM",
        anomaly: false
    };

    return (
        <div className="ecg-demo-wrapper">
            <div className="ecg-results-container">
                <div className="terminal-header">
                    <span className="terminal-dot red"></span>
                    <span className="terminal-dot yellow"></span>
                    <span className="terminal-dot green"></span>
                    <span className="terminal-title">./ecg_analysis_cpp --input signal.dat --model deep_cnn</span>
                </div>

                <div className="terminal-body">
                    {logs.map((log, idx) => (
                        <div key={idx} className="terminal-line">
                            <span className="log-time">[{log.time}]</span>
                            <span className={`log-level level-${log.level.toLowerCase()}`}>[{log.level}]</span>
                            <span className="log-msg">{log.msg}</span>
                        </div>
                    ))}

                    <div className="terminal-divider"></div>

                    <div className="terminal-result">
                        <div className="result-line">
                            <span className="result-label">&gt;&gt;&gt; Prediction:</span>
                            <span className={`result-value ${results.anomaly ? 'danger' : 'success'}`}>
                                {results.class}
                            </span>
                        </div>
                        <div className="result-line">
                            <span className="result-label">&gt;&gt;&gt; Confidence:</span>
                            <span className="result-value info">{results.probability}</span>
                        </div>
                        <div className="result-line">
                            <span className="result-label">&gt;&gt;&gt; Heart Rate:</span>
                            <span className="result-value warning">{results.bpm}</span>
                        </div>
                        <div className="result-line cursor-line">
                            <span className="cursor-prompt">$</span>
                            <span className="cursor">_</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="model-explanation">
                <h4>Architecture du Modèle</h4>
                <p>
                    Le modèle utilisé est un <strong>Réseau de Neurones Convolutif (1D-CNN)</strong> optimisé pour l'analyse de signaux biomédicaux temporels.
                    Il a été entraîné sous <strong>PyTorch</strong> avec le dataset MIT-BIH, puis converti en format <strong>ONNX</strong> pour garantir une inférence ultra-rapide en C++.
                    L'architecture utilise des convolutions causales pour extraire les caractéristiques morphologiques fines (complexes QRS, ondes P/T) et classifier les arythmies en temps réel avec une latence minimale.
                </p>
            </div>
        </div>
    );
};

export default ECGResults;
