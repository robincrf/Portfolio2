import React from 'react';
import '../../assets/projet/ECGResults.css';

const ECGResults = () => {
    // Simulation of C++ / Deep Learning logs
    const logs = [
        { time: '00:00:00', level: 'INFO', msg: 'System Init: CPU Threads=8, Memory=16GB' },
        { time: '00:00:01', level: 'INFO', msg: 'Loading model: "ecg_net_v2.onnx" (FP16)' },
        { time: '00:00:02', level: 'SUCCESS', msg: 'Model loaded in 14ms' },
        { time: '00:00:02', level: 'DEBUG', msg: 'Allocating input tensors [1, 1, 5000]...' },
        { time: '00:00:02', level: 'INFO', msg: 'Preprocessing: Butterworth Filter (Low-pass 40Hz)' },
        { time: '00:00:03', level: 'INFO', msg: 'Preprocessing: Normalization (Z-Score)' },
        { time: '00:00:03', level: 'DEBUG', msg: 'Starting inference...' },
        { time: '00:00:03', level: 'SUCCESS', msg: 'Inference completed: 3.2ms' },
    ];

    const results = {
        class: "Normal Sinus Rhythm",
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
                <h4>Model Architecture</h4>
                <p>
                    The model used is a <strong>Convolutional Neural Network (1D-CNN)</strong> optimized for temporal biomedical signal analysis.
                    It was trained using <strong>PyTorch</strong> on the MIT-BIH dataset, then converted to <strong>ONNX</strong> format to ensure ultra-fast inference in C++.
                    The architecture uses causal convolutions to extract fine morphological features (QRS complexes, P/T waves) and classify arrhythmias in real time with minimal latency.
                </p>
            </div>
        </div>
    );
};

export default ECGResults;
