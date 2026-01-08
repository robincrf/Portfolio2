import React, { useState, useEffect } from 'react';
import '../../assets/projet/KPMGRagDemo.css';
import { motion } from 'framer-motion';

const KPMGRagDemo = () => {
    const [step, setStep] = useState(0); // 0: Idle, 1: Querying, 2: Retrieving, 3: Generating, 4: Done
    const [logs, setLogs] = useState([]);

    const steps = [
        { id: 1, label: 'Query', icon: '❓' },
        { id: 2, label: 'Pinecone', icon: '🔍' },
        { id: 3, label: 'Context', icon: '📄' },
        { id: 4, label: 'Mistral', icon: '🧠' },
    ];

    const pipelineLogs = [
        { msg: "Initialisation du pipeline RAG...", type: "info", delay: 100 },
        { msg: "User Query: 'Quelle est la stratégie IA d'Apple ?'", type: "process", delay: 800 },
        { msg: "Encoding query (Mistral-embed-v2, 1024 dim)...", type: "info", delay: 1500 },
        { msg: "Querying Pinecone index 'kpmg-veille' (Namespace: 'financial_reports')...", type: "process", delay: 2200 },
        { msg: "Found 3 relevant chunks (Similarity: 0.89, 0.87, 0.85)", type: "success", delay: 3000 },
        { msg: "Injecting context into KPMG Prompt Template...", type: "info", delay: 3500 },
        { msg: "Sending to LLM (Mistral Medium)...", type: "process", delay: 4200 },
        { msg: "Response generated securely.", type: "success", delay: 5500 },
    ];

    useEffect(() => {
        let timeouts = [];

        // Sequence animation
        const runSequence = () => {
            setStep(1); // Start

            // Add logs progressively
            pipelineLogs.forEach((log, index) => {
                const t = setTimeout(() => {
                    setLogs(prev => [...prev, log]);

                    // Update visual steps based on log progress
                    if (index === 2) setStep(2); // Pinecone
                    if (index === 5) setStep(3); // Context
                    if (index === 6) setStep(4); // Mistral
                    if (index === 7) setStep(5); // Done

                }, log.delay);
                timeouts.push(t);
            });
        };

        runSequence();

        return () => timeouts.forEach(clearTimeout);
    }, []);

    return (
        <div className="kpmg-rag-container">
            <div className="rag-header">
                <h3>🛡️ KPMG Strategic Watch</h3>
                <div className="rag-status">
                    <span className="status-dot"></span>
                    System Online
                </div>
            </div>

            <div className="rag-interface">
                {/* 1. Query Input Simulation */}
                <div className="rag-input-section">
                    <div className="query-box">
                        <span className="prompt-char">&gt;</span>
                        <span className="typed-text">
                            {step > 0 ? "Quelle est la stratégie IA d'Apple, et quels sont les risques ?" : ""}
                        </span>
                        <span className="cursor"></span>
                    </div>
                </div>

                {/* 2. Pipeline Visualization */}
                <div className="rag-pipeline-viz">
                    {steps.map((s, i) => {
                        let statusClass = '';
                        if (step > i + 1) statusClass = 'points-active completed'; // Passed
                        if (step === i + 1) statusClass = 'points-active active'; // Current

                        return (
                            <div key={i} className={`pipeline-step ${step > i + 1 ? 'completed' : ''} ${step === i + 1 ? 'active' : ''}`}>
                                <div className="step-icon">{s.icon}</div>
                                <span>{s.label}</span>
                            </div>
                        );
                    })}
                </div>

                {/* 3. Console Logs */}
                <div className="rag-logs-console">
                    {logs.map((log, idx) => (
                        <div key={idx} className={`log-entry ${log.type}`}>
                            [{new Date().toLocaleTimeString([], { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" })}] {log.msg}
                        </div>
                    ))}
                    {step < 5 && <div className="log-entry">_</div>}
                </div>

                {/* 4. Final Result */}
                <div className={`rag-result ${step === 5 ? 'visible' : ''}`}>
                    <div className="result-header">
                        <h4>💡 Analyse Générée</h4>
                        <span className="llm-badge">Mistral Medium</span>
                    </div>
                    <div className="answer-text">
                        <p>
                            Apple accélère ses investissements dans l'IA générative pour rattraper ses concurrents.
                            L'entreprise intègre l'IA directement dans ses appareils (On-device AI) pour garantir la confidentialité.
                            <span className="citation" title="Source: Apple 10-K Report 2024 | Fiabilité: Haute">SEC 10-K 2024</span>
                        </p>
                        <p>
                            <strong>Risques identifiés :</strong> La dépendance à la Chine et les régulations antitrust (DMA en Europe) pourraient impacter la croissance des services.
                            <span className="citation" title="Source: NewsAPI - Bloomberg Technology | Date: 12/2025">Bloomberg</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KPMGRagDemo;
